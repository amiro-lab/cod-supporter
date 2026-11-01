import { builds } from "@/data/builds";
import { mw4Gunsmith } from "@/data/mw4";
import { generalWeaponPatches, weaponPatches } from "@/data/weapon-patches";
import { weapons } from "@/data/weapons";
import { CLASS_ORDER } from "./labels";
import type { GameMode, InfoItem, Weapon, WeaponClass } from "./types";

/** 사이트 데이터 기준일 — 데이터를 갱신하면 함께 바꾼다 */
export const DATA_UPDATED_AT = "2026-11-01";

/** 데이터에 반영된 가장 최근 밸런스 패치 */
export const LATEST_BALANCE_PATCH = "2026-10-28";

export function getWeapon(id: string): Weapon | undefined {
  return weapons.find((w) => w.id === id);
}

export function requireWeapon(id: string): Weapon {
  const w = getWeapon(id);
  if (!w) throw new Error(`unknown weapon id: ${id}`);
  return w;
}

export function weaponsByClass(): { cls: WeaponClass; items: Weapon[] }[] {
  return CLASS_ORDER.map((cls) => ({
    cls,
    items: weapons.filter((w) => w.class === cls),
  })).filter((g) => g.items.length > 0);
}

export function buildsFor(weaponId: string, mode?: GameMode) {
  return builds
    .filter((b) => b.weaponId === weaponId && (!mode || b.mode === mode))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function patchesFor(weaponId: string) {
  return weaponPatches.filter((p) => p.weaponId === weaponId);
}

/** 최근 밸런스 패치에서의 변화 방향. 버프와 너프가 섞이면 adjust */
export function latestChangeFor(weaponId: string) {
  const changes = new Set(
    patchesFor(weaponId)
      .filter((p) => p.date === LATEST_BALANCE_PATCH)
      .map((p) => p.change),
  );
  if (changes.size === 0) return undefined;
  if (changes.size === 1) return [...changes][0];
  return "adjust" as const;
}

const APEX_PREFIX = "Apex: ";

/** 건스미스 항목 중 무기별 Apex 부착물 */
export function apexItems(): InfoItem[] {
  return mw4Gunsmith.items.filter((i) => i.title.startsWith(APEX_PREFIX));
}

/** 건스미스 항목 중 Apex 개별 항목을 뺀 일반 설명 */
export function gunsmithGeneralItems(): InfoItem[] {
  return mw4Gunsmith.items.filter((i) => !i.title.startsWith(APEX_PREFIX));
}

/** 무기의 Apex 부착물. 설명이 "<무기 이름>의 Apex"로 시작하는 항목을 찾는다 */
export function apexFor(weapon: Weapon): InfoItem | undefined {
  const prefix = `${weapon.name}의 apex`.toLowerCase();
  return apexItems().find((i) => i.body.toLowerCase().startsWith(prefix));
}

export { builds, generalWeaponPatches, weaponPatches, weapons };
