import { createHash } from "node:crypto";
import { readFile, mkdir, writeFile, rename } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

// 공식 공개 페이지 두 곳만 확인한다. 외부 메타 데이터셋을 수집하지 않는다.
export const targets = [
  { id: "mw4-cac", url: "https://www.callofduty.com/blog/2026/10/call-of-duty-modern-warfare-4-launch-multiplayer-operators-weapons-equipment-create-a-class" },
  { id: "mw4-patch-notes", url: "https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes" },
];

export function fingerprint(html) {
  const body = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  if (!body) throw new Error("본문(main)을 찾지 못했습니다. 페이지 구조 확인 필요");
  const text = body.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length < 200) throw new Error("본문이 너무 짧습니다. 차단·빈 응답 여부 확인 필요");
  return createHash("sha256").update(text).digest("hex");
}

export async function checkSources(previous = {}, fetcher = fetch) {
  const results = [];
  const next = { ...previous };
  // 순차 실행, 제한 시간. 실패한 페이지의 기존 지문은 보존한다.
  for (const target of targets) {
    try {
      const response = await fetcher(target.url, { signal: AbortSignal.timeout(15000), redirect: "error", headers: { "User-Agent": "COD-Supporter-SourceCheck/1.0" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      if (!response.headers.get("content-type")?.includes("text/html")) throw new Error("HTML 응답이 아닙니다");
      const hash = fingerprint(await response.text());
      const status = !previous[target.id] ? "baseline" : previous[target.id].hash === hash ? "unchanged" : "changed";
      next[target.id] = { hash, checkedAt: new Date().toISOString() };
      results.push({ ...target, status });
    } catch (error) {
      results.push({ ...target, status: "error", error: error.message });
    }
  }
  return { next, results };
}

async function main() {
  const directory = resolve(".source-check");
  const statePath = resolve(directory, "state.json");
  let previous = {};
  try { previous = JSON.parse(await readFile(statePath, "utf8")); }
  catch (error) { if (error.code !== "ENOENT") throw error; }
  const { next, results } = await checkSources(previous);
  await mkdir(directory, { recursive: true });
  await writeFile(`${statePath}.tmp`, JSON.stringify(next, null, 2) + "\n");
  await rename(`${statePath}.tmp`, statePath);
  await writeFile(resolve(dirname(statePath), "report.json"), JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2) + "\n");
  for (const r of results) console.log(`${r.status}: ${r.id}${r.error ? ` (${r.error})` : ""}`);
  console.log("본문 변경은 검토 후보입니다. 게임 데이터·기준일은 자동 수정하지 않습니다.");
  if (results.some((r) => r.status === "error")) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
