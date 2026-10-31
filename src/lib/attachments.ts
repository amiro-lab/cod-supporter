import { builds } from "@/data/builds";
import type { Build } from "./types";

/** 빌드에 등장한 조합만 집계한다. 전체 호환 목록이나 픽률이 아니다. */
export function attachmentCatalog(input: Build[] = builds) {
  const entries = new Map<string, { name: string; slot: string; builds: Build[] }>();
  for (const build of input) {
    for (const part of build.attachments) {
      const key = JSON.stringify([part.slot.trim().toLowerCase(), part.name.trim().toLowerCase()]);
      const entry = entries.get(key) ?? { name: part.name, slot: part.slot, builds: [] };
      if (!entry.builds.some((b) => b.id === build.id)) entry.builds.push(build);
      entries.set(key, entry);
    }
  }
  return [...entries.values()].sort((a, b) => a.slot.localeCompare(b.slot) || a.name.localeCompare(b.name));
}
