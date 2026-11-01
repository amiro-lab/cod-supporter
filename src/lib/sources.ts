import { dmzSources } from "@/data/dmz";
import { dmzCommunitySources } from "@/data/dmz-community";
import { mw4Sources } from "@/data/mw4";
import { weaponSources } from "@/data/sources-weapons";
import type { Source, SourceId } from "./types";

const registry = new Map<SourceId, Source>();
for (const s of [...mw4Sources, ...dmzSources, ...weaponSources, ...dmzCommunitySources]) {
  if (registry.has(s.id)) throw new Error(`duplicate source id: ${s.id}`);
  registry.set(s.id, s);
}

export function getSource(id: SourceId): Source {
  const s = registry.get(id);
  if (!s) throw new Error(`unknown source id: ${id}`);
  return s;
}

/** 같은 URL을 여러 데이터셋이 따로 등록했을 수 있으므로 URL 기준으로 합친다 */
export function allSourcesDeduped(): Source[] {
  const byUrl = new Map<string, Source>();
  for (const s of registry.values()) {
    const key = s.url.replace(/\/$/, "");
    if (!byUrl.has(key)) byUrl.set(key, s);
  }
  return [...byUrl.values()].sort((a, b) =>
    (a.publisher ?? a.title).localeCompare(b.publisher ?? b.title),
  );
}
