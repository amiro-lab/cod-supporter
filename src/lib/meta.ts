import { sourceTierLists } from "@/data/tier-lists";
import { weapons } from "@/data/weapons";
import type { GameMode, SourceTierList, Tier } from "./types";

/**
 * 종합 티어 계산
 *
 * - 매체별 티어 리스트(tiers 형식)만 사용한다. 순위 형식(rankOrder)은 참고용으로만 보여준다.
 * - 점수: S=4, A=3, B=2, C=1, D=0
 * - 가중치: 최신 밸런스 패치 이후 작성된 리스트 2, 그 전 리스트 1
 * - 가중 평균으로 종합 티어를 정한다: S ≥ 3.5, A ≥ 2.5, B ≥ 1.5, C ≥ 0.75, 그 외 D
 * - 매체 간 티어 차이가 2단계 이상이면 "의견 갈림"으로 표시한다.
 */

export const TIER_SCORE: Record<Tier, number> = { S: 4, A: 3, B: 2, C: 1, D: 0 };

export const POST_PATCH_WEIGHT = 2;

export function tierFromScore(score: number): Tier {
  if (score >= 3.5) return "S";
  if (score >= 2.5) return "A";
  if (score >= 1.5) return "B";
  if (score >= 0.75) return "C";
  return "D";
}

export interface Vote {
  listId: string;
  publisher: string;
  date: string;
  postPatch: SourceTierList["postPatch"];
  tier: Tier;
}

export interface ConsensusEntry {
  weaponId: string;
  tier: Tier;
  score: number;
  votes: Vote[];
  /** 매체 간 최고·최저 티어 차이가 2단계 이상 */
  disputed: boolean;
}

export function tierListsFor(mode: GameMode) {
  return sourceTierLists.filter((l) => l.mode === mode);
}

export function votesFor(mode: GameMode, weaponId: string): Vote[] {
  const votes: Vote[] = [];
  for (const list of tierListsFor(mode)) {
    if (!list.tiers) continue;
    for (const [tier, ids] of Object.entries(list.tiers) as [Tier, string[]][]) {
      if (ids.includes(weaponId)) {
        votes.push({
          listId: list.id,
          publisher: list.publisher,
          date: list.date,
          postPatch: list.postPatch,
          tier,
        });
      }
    }
  }
  return votes;
}

export function consensus(mode: GameMode): ConsensusEntry[] {
  const out: ConsensusEntry[] = [];
  for (const w of weapons) {
    const votes = votesFor(mode, w.id);
    if (votes.length === 0) continue;
    let sum = 0;
    let weight = 0;
    for (const v of votes) {
      const wgt = v.postPatch === true ? POST_PATCH_WEIGHT : 1;
      sum += TIER_SCORE[v.tier] * wgt;
      weight += wgt;
    }
    const score = sum / weight;
    const scores = votes.map((v) => TIER_SCORE[v.tier]);
    out.push({
      weaponId: w.id,
      tier: tierFromScore(score),
      score,
      votes,
      disputed: Math.max(...scores) - Math.min(...scores) >= 2,
    });
  }
  return out.sort((a, b) => b.score - a.score);
}

export function consensusTierOf(mode: GameMode, weaponId: string) {
  return consensus(mode).find((c) => c.weaponId === weaponId);
}
