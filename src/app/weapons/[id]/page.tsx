import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuildCard } from "@/components/build-card";
import { SourceLinks } from "@/components/source-links";
import {
  Badge,
  Callout,
  ChangeBadge,
  formatDateKo,
  formatDateShort,
  SectionHeading,
  TierBadge,
} from "@/components/ui";
import { apexFor, buildsFor, getWeapon, patchesFor, weapons } from "@/lib/data";
import { CLASS_LABEL, MODE_LABEL } from "@/lib/labels";
import { consensusTierOf } from "@/lib/meta";
import type { GameMode } from "@/lib/types";

export function generateStaticParams() {
  return weapons.map((w) => ({ id: w.id }));
}

export async function generateMetadata(props: PageProps<"/weapons/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const w = getWeapon(id);
  if (!w) return {};
  return {
    title: `${w.name} 빌드·티어`,
    description: `${w.name}(${CLASS_LABEL[w.class].ko}) — ${w.summary}`,
  };
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-line bg-panel px-4 py-3">
      <dt className="text-xs text-mute">{label}</dt>
      <dd className="mt-1 font-mono text-lg">{children}</dd>
    </div>
  );
}

function TierVotes({ mode, weaponId }: { mode: GameMode; weaponId: string }) {
  const c = consensusTierOf(mode, weaponId);
  return (
    <div className="rounded-lg border border-line bg-panel p-4">
      <div className="mb-3 flex items-center gap-3">
        <span className="font-semibold">{MODE_LABEL[mode]}</span>
        {c ? (
          <>
            <TierBadge tier={c.tier} />
            <span className="font-mono text-xs text-mute">종합 {c.score.toFixed(2)}</span>
            {c.disputed && <Badge tone="warn">의견 갈림</Badge>}
          </>
        ) : (
          <span className="text-sm text-mute">평가한 매체 없음</span>
        )}
      </div>
      {c && (
        <ul className="space-y-1.5 text-sm">
          {c.votes.map((v) => (
            <li key={v.listId} className="flex items-center gap-2">
              <TierBadge tier={v.tier} />
              <span>{v.publisher}</span>
              <span className="font-mono text-xs text-mute">{formatDateShort(v.date)}</span>
              {v.postPatch === true && <Badge tone="accent">패치 후</Badge>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default async function WeaponPage(props: PageProps<"/weapons/[id]">) {
  const { id } = await props.params;
  const w = getWeapon(id);
  if (!w) notFound();

  const mpBuilds = buildsFor(w.id, "multiplayer");
  const dmzBuilds = buildsFor(w.id, "dmz");
  const patches = patchesFor(w.id);
  const apex = apexFor(w);

  return (
    <>
      <nav className="mb-6 text-sm text-mute">
        <Link href="/weapons" className="hover:text-ink">
          무기 목록
        </Link>
        <span className="mx-2">/</span>
        <span>{CLASS_LABEL[w.class].ko}</span>
      </nav>

      <header className="mb-8 border-b border-line pb-8">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{CLASS_LABEL[w.class].en}</p>
        <h1 className="mt-2 flex flex-wrap items-center gap-3 text-4xl font-bold tracking-tight">
          {w.name}
          {w.season === "season1" && <Badge tone="warn">시즌 1 추가 예정</Badge>}
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-dim">{w.summary}</p>
        <div className="mt-3">
          <SourceLinks ids={w.sources} />
        </div>
      </header>

      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="분류">{CLASS_LABEL[w.class].ko}</Stat>
        <Stat label="연사력 (RPM)">{w.rpm ?? "—"}</Stat>
        <Stat label="해금">
          {w.unlock ?? "—"}
          {w.unlockNote && <span className="mt-0.5 block font-sans text-xs text-warn">{w.unlockNote}</span>}
        </Stat>
        <Stat label="빌드">{mpBuilds.length + dmzBuilds.length}개</Stat>
      </dl>

      {apex && (
        <div className="mt-3 flex flex-col gap-1.5 rounded-lg border border-accent/30 bg-accent/5 p-4 text-sm sm:flex-row sm:items-start sm:gap-4">
          <span className="shrink-0 font-mono text-xs tracking-widest text-accent uppercase">Apex</span>
          <div className="space-y-1">
            <p className="font-semibold">{apex.original ?? apex.title.replace(/^Apex: /, "")}</p>
            <p className="text-dim">{apex.body}</p>
            <SourceLinks ids={apex.sources} />
          </div>
        </div>
      )}

      <SectionHeading id="tier" title="매체 평가" sub="종합 티어와 매체별 티어." />
      <div className="grid gap-3 md:grid-cols-2">
        <TierVotes mode="multiplayer" weaponId={w.id} />
        <TierVotes mode="dmz" weaponId={w.id} />
      </div>

      {(["multiplayer", "dmz"] as const).map((mode) => {
        const list = mode === "multiplayer" ? mpBuilds : dmzBuilds;
        return (
          <section key={mode}>
            <SectionHeading
              id={`builds-${mode}`}
              title={`${MODE_LABEL[mode]} 빌드`}
              sub={list.length ? `${list.length}개 · 최신순` : undefined}
            />
            {list.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {list.map((b) => (
                  <BuildCard key={b.id} build={b} showWeapon={false} />
                ))}
              </div>
            ) : (
              <p className="rounded-lg border border-dashed border-line p-6 text-center text-sm text-dim">
                아직 매체가 공개한 {MODE_LABEL[mode]} 빌드가 없습니다.
              </p>
            )}
          </section>
        );
      })}

      <SectionHeading
        id="patches"
        title="패치 이력"
        sub="멀티플레이 패치노트 기준. DMZ는 따로 밸런싱되며, 같은 변경이 DMZ에 적용됐는지는 확인되지 않았습니다."
      />
      {patches.length ? (
        <ol className="space-y-2">
          {patches.map((p, i) => (
            <li key={i} className="flex flex-wrap items-start gap-3 rounded-lg border border-line bg-panel p-4 text-sm">
              <span className="font-mono text-xs text-mute">{formatDateKo(p.date)}</span>
              <ChangeBadge change={p.change} />
              <span className="min-w-0 flex-1">{p.detail}</span>
              <SourceLinks ids={p.sources} />
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-sm text-dim">출시 이후 이 무기만 대상으로 한 변경은 없습니다.</p>
      )}

      <SectionHeading id="gunsmith" title="건스미스 스탯 · 반동 패턴" />
      <Callout tone="info" title="인게임 측정 데이터 준비 중">
        부착물별 스탯 변화와 반동 방향은 게임 화면을 직접 캡처해서 측정한 데이터로 채울 예정입니다. 다른 사이트의 추정치는
        가져오지 않습니다.
        <p className="mt-2">피해량·유효 사거리·ADS·장전 시간·파츠별 증감: 미수집</p>
        <p className="mt-2"><Link href="/attachments" className="text-accent hover:underline">수집된 추천 빌드의 파츠 사용 사례 보기 →</Link></p>
      </Callout>
    </>
  );
}
