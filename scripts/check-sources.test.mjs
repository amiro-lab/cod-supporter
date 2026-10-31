import test from "node:test";
import assert from "node:assert/strict";
import { checkSources, fingerprint, targets } from "./check-sources.mjs";

const html = (text = "weapon ".repeat(50)) => `<html><nav>navigation</nav><main><h1>MW4</h1>${text}<script>random()</script></main></html>`;
const response = (body, status = 200) => new Response(body, { status, headers: { "content-type": "text/html" } });

test("navigation and script changes do not trigger a content change", () => {
  assert.equal(fingerprint(html()), fingerprint(html().replace("navigation", "new navigation").replace("random()", "other()")));
  assert.throws(() => fingerprint("<main>blocked</main>"));
  assert.throws(() => fingerprint("<html>no main</html>"));
});

test("baseline, unchanged, changed and failed fetch preserve distinct states", async () => {
  const baseline = await checkSources({}, async () => response(html()));
  assert.ok(baseline.results.every((r) => r.status === "baseline"));
  const same = await checkSources(baseline.next, async () => response(html()));
  assert.ok(same.results.every((r) => r.status === "unchanged"));
  const changed = await checkSources(baseline.next, async () => response(html("new weapon ".repeat(50))));
  assert.ok(changed.results.every((r) => r.status === "changed"));
  const failed = await checkSources(baseline.next, async () => response("denied", 403));
  assert.ok(failed.results.every((r) => r.status === "error"));
  assert.deepEqual(failed.next[targets[0].id], baseline.next[targets[0].id]);
});
