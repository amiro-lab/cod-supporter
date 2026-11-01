"""Public RSS metadata only. No article bodies, AI summaries or automatic publishing."""
import argparse
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
import html
import json
from pathlib import Path
import re
import sys
from urllib.parse import urlsplit, urlunsplit
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
MAX_BYTES = 4_000_000
ATOM = "{http://www.w3.org/2005/Atom}"


def canonical_url(value, allowed_host):
    parsed = urlsplit(value.strip())
    host = (parsed.hostname or "").lower().removeprefix("www.")
    if parsed.scheme != "https" or host != allowed_host or parsed.username or parsed.password or parsed.port not in (None, 443):
        raise ValueError("Article URL is outside the configured publisher")
    return urlunsplit(("https", parsed.netloc.lower(), parsed.path.rstrip("/"), "", ""))


def parse_date(value):
    try:
        result = parsedate_to_datetime(value)
    except (ValueError, TypeError):
        try:
            result = datetime.fromisoformat(value.replace("Z", "+00:00"))
        except ValueError:
            return None
    return result.replace(tzinfo=timezone.utc) if result.tzinfo is None else result.astimezone(timezone.utc)


def parse_feed(payload, feed, now, days=30):
    # Reject entity declarations and limit input size before parsing untrusted XML.
    if len(payload) > MAX_BYTES or b"<!DOCTYPE" in payload.upper() or b"<!ENTITY" in payload.upper():
        raise ValueError("Oversized feed or XML declaration not supported")
    root = ET.fromstring(payload)
    if root.tag == "rss":
        items = root.findall("./channel/item")
    elif root.tag == ATOM + "feed":
        items = root.findall(ATOM + "entry")
    else:
        raise ValueError("Not an RSS or Atom feed")
    found = []
    for item in items:
        atom = item.tag == ATOM + "entry"
        prefix = ATOM if atom else ""
        title = html.unescape(item.findtext(prefix + "title", ""))
        title = re.sub(r"\s+", " ", re.sub(r"<[^>]*>", "", title)).strip()[:500]
        if not re.search(r"\bDMZ\b", title, re.I) or not re.search(r"\bMW4\b|Modern\s+Warfare\s*4", title, re.I):
            continue
        raw_date = item.findtext(ATOM + "published", item.findtext(ATOM + "updated", "")) if atom else item.findtext("pubDate", "")
        date = parse_date(raw_date)
        if date is None or not now - timedelta(days=days) <= date <= now + timedelta(hours=24):
            continue
        if atom:
            link = next((e.get("href", "") for e in item.findall(ATOM + "link") if e.get("rel", "alternate") == "alternate"), "")
        else:
            link = item.findtext("link", "")
        try:
            url = canonical_url(link, feed["host"])
        except ValueError:
            continue
        found.append({"title": title, "url": url, "publisher": feed["name"], "publishedAt": date.isoformat(), "discoveredAt": now.date().isoformat(), "status": "pending"})
    return found


def merge_candidates(existing, incoming, reviewed):
    # Preserve reviewed/rejected states and timestamps. Reruns without new metadata are a no-op.
    by_url = {row["url"].rstrip("/"): dict(row) for row in existing}
    for row in incoming:
        key = row["url"].rstrip("/")
        if key in reviewed:
            continue
        if key not in by_url:
            by_url[key] = row
        elif row["publishedAt"] >= by_url[key]["publishedAt"]:
            by_url[key].update({k: row[k] for k in ("title", "publishedAt", "publisher")})
    return sorted(by_url.values(), key=lambda row: (row["publishedAt"], row["url"]), reverse=True)


def download(url):
    request = Request(url, headers={"User-Agent": "COD-Supporter-RSS/1.0", "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml"})
    with urlopen(request, timeout=20) as response:
        if urlsplit(response.url).hostname != urlsplit(url).hostname:
            raise ValueError("Feed redirected to a different host")
        payload = response.read(MAX_BYTES + 1)
        if len(payload) > MAX_BYTES:
            raise ValueError("Feed exceeds size limit")
        return payload


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--days", type=int, default=30)
    parser.add_argument("--previous-file", type=Path, help="Retain discoveries from the open weekly PR")
    args = parser.parse_args()
    if not 1 <= args.days <= 90:
        parser.error("--days must be between 1 and 90")
    now = datetime.now(timezone.utc)
    feeds = json.loads((ROOT / "scripts/dmz-feeds.json").read_text())
    path = ROOT / "research/dmz-candidates.json"
    existing = json.loads(path.read_text())
    stored = existing
    if args.previous_file and args.previous_file.exists():
        pending = json.loads(args.previous_file.read_text())
        # Main branch review decisions take precedence over the older PR snapshot.
        existing = list({row["url"].rstrip("/"): row for row in pending + existing}.values())
    reviewed = set()
    for source in (ROOT / "src/data").glob("*.ts"):
        reviewed.update(url.rstrip("/") for url in re.findall(r'https://[^"\s]+', source.read_text()))
    incoming, results = [], []
    for feed in feeds:
        try:
            rows = parse_feed(download(feed["url"]), feed, now, args.days)
            incoming.extend(rows)
            results.append({"feed": feed["name"], "status": "ok", "matches": len(rows)})
        except Exception as error:
            results.append({"feed": feed["name"], "status": "error", "error": str(error)})
    merged = merge_candidates(existing, incoming, reviewed)
    if merged != stored:
        temporary = path.with_suffix(".tmp")
        temporary.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n")
        temporary.replace(path)
    report = {"checkedAt": now.isoformat(), "feeds": results, "newCandidates": len(merged) - len(existing), "totalCandidates": len(merged)}
    directory = ROOT / ".source-check"
    directory.mkdir(exist_ok=True)
    (directory / "dmz-report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    # Keep successful discoveries on partial failures, but expose failures to Actions.
    return 1 if any(row["status"] == "error" for row in results) else 0


if __name__ == "__main__":
    sys.exit(main())
