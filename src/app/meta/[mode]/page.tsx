import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuildCard } from "@/components/build-card";
import { BuildExplorer } from "@/components/build-explorer";
import { SourceLinks } from "@/components/source-links";
import {
  Badge,
  Callout,
  formatDateKo,
  formatDateShort,
  PageHeader,
  SectionHeading,
  TierBadge,
} from "@/components/ui";
import { WeaponChip } from "@/components/weapon-chip";
import { externalMetaLinks } from "@/data/tier-lists";
import { builds, LATEST_BALANCE_PATCH, requireWeapon } from "@/lib/data";
import { CLASS_LABEL, CLASS_ORDER, MODE_LABEL, ROLE_LABEL, TIER_DESC, TIER_ORDER } from "@/lib/labels";
import { consensus, POST_PATCH_WEIGHT, tierListsFor } from "@/lib/meta";
import type { BuildRole, GameMode } from "@/lib/types";

const MODES: GameMode[] = ["multiplayer", "dmz"];

function isMode(v: string): v is GameMode {
  return (MODES as string[]).includes(v);
}

export function generateStaticParams() {
  return MODES.map((mode) => ({ mode }));
}

export async function generateMetadata(props: PageProps<"/meta/[mode]">): Promise<Metadata> {
  const { mode } = await props.params;
  if (!isMode(mode)) return {};
  return {
    title: `${MODE_LABEL[mode]} 총기 메타`,
    description: `모던 워페어 4 ${MODE_LABEL[mode]} 종합 티어 리스트와 매체별 추천 빌드`,
  };
}

export default async function MetaPage(props: PageProps<"/meta/[mode]">) {
  const { mode } = await props.params;
  if (!isMode(mode)) notFound();

  const entries = consensus(mode);
  const lists = tierListsFor(mode);
  const tierLists = lists.filter((l) => l.tiers);
  const rankLists = lists.filter((l) => l.rankOrder);
  const modeBuilds = builds.filter((b) => b.mode === mode);
  const postPatchCount = tierLists.filter((l) => l.postPatch === true).length;

  const byTier = TIER_ORDER.map((tier) => ({
    tier,
    items: entries.filter((e) => e.tier === tier),
  })).filter((g) => g.items.length > 0);

  const classesWithBuilds = CLASS_ORDER.filter((c) =>
    modeBuilds.some((b) => requireWeapon(b.weaponId).class === c),
  );
  const rolesWithBuilds = (Object.keys(ROLE_LABEL) as BuildRole[]).filter((r) =>
    modeBuilds.some((b) => b.role === r),
  );

  return (
    <>
      <PageHeader eyebrow="Weapon Meta" title={`${MODE_LABEL[mode]} 총기 메타`}>
        <p>
          여러 게임 매체의 티어 리스트를 종합한 순위와, 매체가 공개한 추천 빌드를 모았습니다. 모든 항목에 작성일과
          출처 링크를 붙였습니다.
        </p>
      </PageHeader>

      <div className="mb-8 flex gap-2">
        {MODES.map((m) => (
          <Link
            key={m}
            href={`/meta/${m}`}
            aria-current={m === mode ? "page" : undefined}
            className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
              m === mode
                ? "border-accent bg-accent text-accent-ink"
                : "border-line bg-panel text-dim hover:text-ink"
            }`}
          >
            {MODE_LABEL[m]}
          </Link>
        ))}
      </div>

      <div className="space-y-3">
        {mode === "multiplayer" && postPatchCount < tierLists.length && (
          <Callout tone="warn" title={`${formatDateKo(LATEST_BALANCE_PATCH)} 밸런스 패치 이후 갱신된 매체는 아직 ${postPatchCount}곳뿐입니다`}>
            패치 이전 리스트도 함께 종합하되, 패치 이후 리스트에 {POST_PATCH_WEIGHT}배 가중치를 줬습니다. Han 86처럼 패치로
            평가가 크게 바뀐 무기는 <span className="text-warn">±</span> 표시로 구분합니다.
          </Callout>
        )}
        {mode === "dmz" && (
          <Callout tone="warn" title={`DMZ는 아직 종합할 매체가 ${tierLists.length}곳뿐입니다`}>
            출시 주간에 작성된 리스트라 {formatDateKo(LATEST_BALANCE_PATCH)} 패치가 반영되지 않았습니다. Infinity
            Ward는 멀티와 DMZ를 따로 밸런싱한다고 밝혀서, 멀티 패치가 DMZ에도 적용됐는지는 확인되지 않았습니다.
          </Callout>
        )}
      </div>

      {/* ───── 종합 티어 ───── */}
      <SectionHeading
        id="tier"
        title="종합 티어"
        sub={
          <>
            {tierLists.length}개 매체 종합 ·{" "}
            <Link href="#method" className="underline decoration-line underline-offset-4 hover:text-ink">
              산정 방식
            </Link>
          </>
        }
      />
      <div className="space-y-3">
        {byTier.map(({ tier, items }) => (
          <div
            key={tier}
            className="flex flex-col gap-4 rounded-lg border border-line bg-panel p-4 sm:flex-row sm:items-start"
          >
            <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
              <TierBadge tier={tier} size="lg" />
              <p className="text-xs leading-relaxed text-dim">{TIER_DESC[tier]}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((e) => (
                <WeaponChip
                  key={e.weaponId}
                  weaponId={e.weaponId}
                  disputed={e.disputed}
                  showChange={mode === "multiplayer"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 flex flex-wrap gap-3 text-xs text-mute">
        {mode === "multiplayer" && (
          <span>▲▼◆ = {formatDateShort(LATEST_BALANCE_PATCH)} 패치 버프/너프/조정</span>
        )}
        <span>
          <span className="text-warn">±</span> = 매체 간 평가가 2단계 이상 차이남
        </span>
      </p>

      {/* ───── 매체별 비교 ───── */}
      <SectionHeading id="compare" title="매체별 비교" sub="같은 무기를 매체마다 어떻게 평가했는지 비교합니다." />
      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="bg-panel-2 text-left text-xs text-dim">
            <tr>
              <th className="px-3 py-2 font-medium">무기</th>
              <th className="px-3 py-2 font-medium">종합</th>
              {tierLists.map((l) => (
                <th key={l.id} className="px-3 py-2 font-medium">
                  <div className="flex flex-col gap-1">
                    <span className="text-ink">{l.publisher}</span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      {formatDateShort(l.date)}
                      {l.postPatch === true ? (
                        <Badge tone="accent">패치 후</Badge>
                      ) : (
                        <Badge>패치 전</Badge>
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => {
              const w = requireWeapon(e.weaponId);
              return (
                <tr key={e.weaponId} className="border-t border-line">
                  <td className="px-3 py-2">
                    <Link href={`/weapons/${w.id}`} className="font-medium hover:text-accent">
                      {w.name}
                    </Link>
                    <span className="ml-2 text-xs text-mute">{CLASS_LABEL[w.class].ko}</span>
                  </td>
                  <td className="px-3 py-2">
                    <span className="inline-flex items-center gap-2">
                      <TierBadge tier={e.tier} />
                      <span className="font-mono text-xs text-mute">{e.score.toFixed(2)}</span>
                    </span>
                  </td>
                  {tierLists.map((l) => {
                    const v = e.votes.find((x) => x.listId === l.id);
                    return (
                      <td key={l.id} className="px-3 py-2">
                        {v ? <TierBadge tier={v.tier} /> : <span className="text-mute">—</span>}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {rankLists.length > 0 && (
        <>
          <h3 className="mb-3 mt-8 font-semibold">참고: 순위형 추천</h3>
          <p className="mb-3 text-sm text-dim">전체 티어 리스트가 아니라서 종합 점수에는 넣지 않았습니다.</p>
          <div className="grid gap-3 md:grid-cols-2">
            {rankLists.map((l) => (
              <div key={l.id} className="rounded-lg border border-line bg-panel p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-semibold">{l.publisher}</span>
                  <span className="font-mono text-xs text-mute">{formatDateShort(l.date)}</span>
                  <SourceLinks ids={l.sources} />
                </div>
                <ol className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  {l.rankOrder!.map((id, i) => (
                    <li key={id}>
                      <span className="font-mono text-xs text-mute">{i + 1}.</span>{" "}
                      <Link href={`/weapons/${id}`} className="hover:text-accent">
                        {requireWeapon(id).name}
                      </Link>
                    </li>
                  ))}
                </ol>
                {l.note && <p className="mt-2 text-xs text-mute">{l.note}</p>}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ───── 빌드 ───── */}
      <SectionHeading
        id="builds"
        title="추천 빌드"
        sub={`매체가 공개한 ${MODE_LABEL[mode]} 빌드 ${modeBuilds.length}개. 부착물 이름은 출처에 적힌 그대로입니다.`}
      />
      <BuildExplorer
        classOptions={classesWithBuilds.map((c) => ({ value: c, label: CLASS_LABEL[c].ko }))}
        roleOptions={rolesWithBuilds.map((r) => ({ value: r, label: ROLE_LABEL[r] }))}
        items={[...modeBuilds]
          .sort((a, b) => {
            const sa = entries.find((e) => e.weaponId === a.weaponId)?.score ?? -1;
            const sb = entries.find((e) => e.weaponId === b.weaponId)?.score ?? -1;
            return sb - sa || b.date.localeCompare(a.date);
          })
          .map((b) => ({
            id: b.id,
            cls: requireWeapon(b.weaponId).class,
            role: b.role,
            node: <BuildCard build={b} />,
          }))}
      />

      {/* ───── 산정 방식 ───── */}
      <SectionHeading id="method" title="산정 방식과 출처" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-lg border border-line bg-panel p-5 text-sm text-dim">
          <p className="font-semibold text-ink">종합 티어 계산</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              매체 티어를 점수로 바꿉니다: S=4, A=3, B=2, C=1, D=0. (F 티어는 D로 취급)
            </li>
            <li>
              {formatDateKo(LATEST_BALANCE_PATCH)} 밸런스 패치 이후에 작성된 리스트는 {POST_PATCH_WEIGHT}배 가중치를 줍니다.
            </li>
            <li>가중 평균이 3.5 이상이면 S, 2.5 이상 A, 1.5 이상 B, 0.75 이상 C, 그 아래는 D입니다.</li>
            <li>해당 매체가 평가하지 않은 무기는 계산에서 빠집니다.</li>
            <li>
              픽률 같은 실제 사용 통계는 넣지 않았습니다. Activision이 공개 API를 제공하지 않아서, 통계를 표시하는 사이트들도
              자체 추정치이거나 페이지 조회수 기준입니다.
            </li>
          </ul>
        </div>
        <div className="space-y-3 rounded-lg border border-line bg-panel p-5 text-sm">
          <p className="font-semibold">종합에 사용한 티어 리스트</p>
          <ul className="space-y-2">
            {tierLists.map((l) => (
              <li key={l.id} className="flex flex-col gap-0.5">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">{l.publisher}</span>
                  <span className="font-mono text-xs text-mute">{formatDateKo(l.date)}</span>
                  <SourceLinks ids={l.sources} />
                </span>
                {l.note && <span className="text-xs text-dim">{l.note}</span>}
              </li>
            ))}
          </ul>
          <p className="pt-2 font-semibold">데이터를 가져오지 않은 사이트 (링크만 안내)</p>
          <p className="text-xs text-dim">
            약관이 데이터 재배포를 금지하거나 출처가 불분명해서 수집하지 않았습니다. 직접 방문해서 비교해 보세요.
          </p>
          <ul className="flex flex-wrap gap-2">
            {externalMetaLinks.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded border border-line px-2 py-1 text-xs text-dim hover:border-accent/50 hover:text-ink"
                >
                  {l.title} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

