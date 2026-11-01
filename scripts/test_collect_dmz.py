from datetime import datetime, timezone
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
from collect_dmz import parse_feed, merge_candidates, main

FEED = {"name": "Test", "host": "example.com"}
NOW = datetime(2026, 11, 1, tzinfo=timezone.utc)


class CollectorTests(unittest.TestCase):
    def rss(self, title="MW4 DMZ Orders guide", link="https://example.com/guide/?utm_source=rss", date="Fri, 30 Oct 2026 10:00:00 GMT"):
        return f"<rss><channel><item><title>{title}</title><link>{link}</link><pubDate>{date}</pubDate></item></channel></rss>".encode()

    def test_filters_old_game_external_and_stale_posts(self):
        rows = parse_feed(self.rss(), FEED, NOW)
        self.assertEqual(rows[0]["url"], "https://example.com/guide")
        for options in ({"title": "MWII DMZ guide"}, {"link": "https://evil.example/guide"}, {"date": "bad"}, {"date": "Wed, 01 Jan 2020 00:00:00 GMT"}):
            self.assertEqual(parse_feed(self.rss(**options), FEED, NOW), [])

    def test_atom_and_invalid_xml(self):
        atom = b'<feed xmlns="http://www.w3.org/2005/Atom"><entry><title>Modern Warfare 4 DMZ tips</title><link href="https://example.com/tips"/><updated>2026-10-31T01:00:00Z</updated></entry></feed>'
        self.assertEqual(len(parse_feed(atom, FEED, NOW)), 1)
        for payload in (b"<!DOCTYPE rss><rss/>", b"<html/>"):
            with self.assertRaises(ValueError):
                parse_feed(payload, FEED, NOW)

    def test_idempotence_preserves_review_state(self):
        rows = parse_feed(self.rss(), FEED, NOW)
        self.assertEqual(merge_candidates([], rows, {rows[0]["url"]}), [])
        self.assertEqual(merge_candidates(rows, rows, set()), rows)
        existing = [dict(rows[0], status="rejected", discoveredAt="2026-10-30")]
        self.assertEqual(merge_candidates(existing, rows, set()), existing)

    def test_pending_branch_candidates_are_written_even_without_new_discoveries(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for name in ("scripts", "research", "src/data"):
                (root / name).mkdir(parents=True)
            (root / "scripts/dmz-feeds.json").write_text("[]")
            target = root / "research/dmz-candidates.json"
            target.write_text("[]")
            pending = root / "pending.json"
            rows = parse_feed(self.rss(), FEED, NOW)
            pending.write_text(json.dumps(rows))
            with patch("collect_dmz.ROOT", root), patch("sys.argv", ["collect_dmz.py", "--previous-file", str(pending)]), patch("builtins.print"):
                self.assertEqual(main(), 0)
                self.assertEqual(json.loads(target.read_text()), rows)

    def test_feed_failure_preserves_existing_candidates_and_returns_failure(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for name in ("scripts", "research", "src/data"):
                (root / name).mkdir(parents=True)
            (root / "scripts/dmz-feeds.json").write_text(json.dumps([dict(FEED, url="https://example.com/rss")]))
            rows = parse_feed(self.rss(), FEED, NOW)
            target = root / "research/dmz-candidates.json"
            target.write_text(json.dumps(rows))
            with patch("collect_dmz.ROOT", root), patch("sys.argv", ["collect_dmz.py"]), patch("collect_dmz.download", side_effect=OSError("offline")), patch("builtins.print"):
                self.assertEqual(main(), 1)
                self.assertEqual(json.loads(target.read_text()), rows)


if __name__ == "__main__":
    unittest.main()
