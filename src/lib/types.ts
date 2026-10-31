/**
 * 사이트 전체에서 쓰는 데이터 타입.
 * 실제 데이터는 src/data/*.ts 에 있고, 모든 사실에는 출처(sourceId)를 붙인다.
 */

/** src/data/sources.ts 에 등록된 출처 ID */
export type SourceId = string;

export interface Source {
  id: SourceId;
  title: string;
  url: string;
  /** 출처 게시일 (YYYY-MM-DD). 모르면 생략 */
  date?: string;
  publisher?: string;
}

/**
 * confirmed   : 공식 발표 또는 출시 후 복수 매체로 확인
 * prelaunch   : 베타/출시 전 정보 — 바뀌었을 수 있음
 * unconfirmed : 루머, 단일 출처, 데이터마이닝 등
 */
export type Certainty = "confirmed" | "prelaunch" | "unconfirmed";

/** 출처가 달린 짧은 사실 한 줄 */
export interface Fact {
  label: string;
  value: string;
  sources: SourceId[];
  certainty?: Certainty;
}

/** 출처가 달린 설명 항목 (메커니즘, 시스템, 팁 등) */
export interface InfoItem {
  title: string;
  body: string;
  sources: SourceId[];
  certainty?: Certainty;
  /** 원문(영문) 게임 내 명칭 */
  original?: string;
}

export interface InfoSection {
  id: string;
  title: string;
  intro?: string;
  items: InfoItem[];
}

export interface PatchNote {
  date: string;
  title: string;
  changes: string[];
  sources: SourceId[];
}

/* ───────────── 무기 / 메타 ───────────── */

export type WeaponClass =
  | "AR"
  | "SMG"
  | "LMG"
  | "BR"
  | "MR"
  | "SR"
  | "SG"
  | "PI"
  | "LA"
  | "ME";

export type GameMode = "multiplayer" | "dmz";

export type Tier = "S" | "A" | "B" | "C" | "D";

export type BuildRole = "close" | "mid" | "long" | "sniper" | "allround" | "support";

export interface Weapon {
  id: string;
  name: string;
  class: WeaponClass;
  rpm?: number;
  unlock?: string;
  /** 출처 간 해금 레벨이 다를 때 설명 */
  unlockNote?: string;
  /** launch: 출시 무기, season1: 시즌 1 추가 예정 */
  season: "launch" | "season1";
  /** 한국어 요약 */
  summary: string;
  sources: SourceId[];
}

export interface Attachment {
  slot: string;
  name: string;
  tuning?: string;
}

export interface Build {
  id: string;
  weaponId: string;
  mode: GameMode;
  role: BuildRole;
  title: string;
  attachments: Attachment[];
  perks?: string[];
  equipment?: string[];
  killstreaks?: string[];
  /** 게임 내 빌드 공유 코드 (출처 표기 그대로) */
  buildCode?: string;
  /** 출처 매체명 */
  publisher: string;
  /** 출처 표기 오류 등으로 신뢰도가 낮은 빌드 */
  lowConfidence?: boolean;
  /** 왜 이 빌드인지 (한국어) */
  why: string;
  /** 출처 기준일 */
  date: string;
  sources: SourceId[];
}

export interface TierPlacement {
  weaponId: string;
  tier: Tier;
  /** 같은 티어 안 순서 (작을수록 위) */
  rank?: number;
  note?: string;
}

export interface TierList {
  mode: GameMode;
  date: string;
  /** 어떤 출처들을 종합했는지 */
  basis: string;
  sources: SourceId[];
  placements: TierPlacement[];
}

/** 매체 한 곳의 티어 리스트(또는 순위) 원본 */
export interface SourceTierList {
  id: string;
  mode: GameMode;
  publisher: string;
  title: string;
  date: string;
  /** 10/28 밸런스 패치 이후 작성 여부 */
  postPatch: boolean | "unclear";
  /** 티어 리스트 형식 */
  tiers?: Partial<Record<Tier, string[]>>;
  /** 순위 형식 (1위부터) */
  rankOrder?: string[];
  /** 한국어 메모 */
  note?: string;
  sources: SourceId[];
}

export interface WeaponPatch {
  date: string;
  weaponId: string;
  change: "buff" | "nerf" | "adjust";
  detail: string;
  sources: SourceId[];
}

/* ───────────── 기본 게임 / DMZ 페이지 ───────────── */

/** 맵·모드·퍼크·킬스트릭·DMZ 구역처럼 이름이 있는 항목 */
export interface NamedEntry {
  /** 영문 공식 명칭 */
  name: string;
  /** 한국어 공식 명칭 — 출처로 확인된 경우에만 */
  nameKo?: string;
  /** 짧은 라벨 (유형, 크기, 비용, 위험도 등) */
  tag?: string;
  /** 한국어 설명 */
  body?: string;
  season?: "launch" | "season1";
  certainty?: Certainty;
  sources: SourceId[];
}

export interface SeasonInfo {
  id: string;
  name: string;
  /** 시작일 YYYY-MM-DD */
  date?: string;
  items: InfoItem[];
}
