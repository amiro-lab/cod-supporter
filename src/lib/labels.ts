import type { BuildRole, Certainty, GameMode, Tier, WeaponClass } from "./types";

export const CLASS_LABEL: Record<WeaponClass, { ko: string; en: string }> = {
  AR: { ko: "돌격소총", en: "Assault Rifle" },
  SMG: { ko: "기관단총", en: "SMG" },
  LMG: { ko: "경기관총", en: "LMG" },
  BR: { ko: "전투소총", en: "Battle Rifle" },
  MR: { ko: "지정사수소총", en: "Marksman Rifle" },
  SR: { ko: "저격소총", en: "Sniper Rifle" },
  SG: { ko: "산탄총", en: "Shotgun" },
  PI: { ko: "권총", en: "Pistol" },
  LA: { ko: "발사기", en: "Launcher" },
  ME: { ko: "근접무기", en: "Melee" },
};

export const CLASS_ORDER: WeaponClass[] = [
  "AR",
  "SMG",
  "BR",
  "LMG",
  "MR",
  "SR",
  "SG",
  "PI",
  "LA",
  "ME",
];

export const MODE_LABEL: Record<GameMode, string> = {
  multiplayer: "멀티플레이",
  dmz: "DMZ",
};

export const ROLE_LABEL: Record<BuildRole, string> = {
  close: "근거리",
  mid: "중거리",
  long: "장거리",
  sniper: "저격",
  allround: "올라운드",
  support: "보조",
};

export const TIER_ORDER: Tier[] = ["S", "A", "B", "C", "D"];

export const TIER_DESC: Record<Tier, string> = {
  S: "현 메타 최상위 — 고민 없이 써도 되는 무기",
  A: "S급과 큰 차이 없음 — 취향·플레이 스타일에 따라 선택",
  B: "특정 상황·빌드에서 쓸 만함",
  C: "쓸 수는 있지만 더 나은 선택지가 많음",
  D: "현재는 비추천 — 버프 대기",
};

export const CERTAINTY_LABEL: Record<Certainty, { text: string; tone: string }> = {
  confirmed: { text: "확인됨", tone: "accent" },
  prelaunch: { text: "출시 전 정보", tone: "warn" },
  unconfirmed: { text: "미확인", tone: "danger" },
};
