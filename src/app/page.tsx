import Link from "next/link";
import { Badge, formatDateKo, SectionHeading, TierBadge } from "@/components/ui";
import { dmzMap } from "@/data/dmz";
import { mw4Patches, mw4Seasons } from "@/data/mw4";
import { builds, DATA_UPDATED_AT, LATEST_BALANCE_PATCH, requireWeapon, weaponPatches, weapons } from "@/lib/data";
import { MODE_LABEL } from "@/lib/labels";
import { consensus } from "@/lib/meta";
import type { GameMode } from "@/lib/types";

function TopWeapons({ mode }: { mode: GameMode }) {
  const top = consensus(mode).slice(0, 6);
  return (
    <ol className="space-y-1.5">
      {top.map((e, i) => (
        <li key={e.weaponId}>
          <Link
            href={`/weapons/${e.weaponId}`}
            className="flex items-center gap-3 rounded-md px-2 py-1.5 transition hover:bg-panel-2"
          >
            <span className="w-4 font-mono text-xs text-mute">{i + 1}</span>
            <TierBadge tier={e.tier} />
            <span className="font-medium">{requireWeapon(e.weaponId).name}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  const season1 = mw4Seasons.find((s) => /1/.test(s.name) && s.date);
  const latest = weaponPatches.filter((p) => p.date === LATEST_BALANCE_PATCH);
  const buffed = [...new Set(latest.filter((p) => p.change === "buff").map((p) => p.weaponId))];
  const nerfed = [...new Set(latest.filter((p) => p.change === "nerf").map((p) => p.weaponId))];
  const mixed = buffed.filter((id) => nerfed.includes(id));
  const launchCount = weapons.filter((w) => w.season === "launch").length;
  const recentPatches = mw4Patches.filter((p) => p.date <= DATA_UPDATED_AT).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden rounded-xl border border-line bg-panel px-6 py-12 sm:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />
        <p className="relative font-mono text-xs tracking-[0.2em] text-accent uppercase">
          Call of Duty: Modern Warfare 4
        </p>
        <h1 className="relative mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          모던 워페어 4 · DMZ
          <br />
          총기 메타를 한곳에서.
        </h1>
        <p className="relative mt-5 max-w-xl text-dim">
          여러 매체의 티어 리스트를 종합하고, 모든 정보에 출처와 날짜를 붙였습니다. 패치가 나오면 무엇이 바뀌었는지부터
          확인하세요.
        </p>
        <div className="relative mt-6 flex flex-wrap gap-2">
          <Badge tone="accent">출시 {formatDateKo("2026-10-23")}</Badge>
          <Badge tone="info">최신 밸런스 패치 {formatDateKo(LATEST_BALANCE_PATCH)}</Badge>
          {season1?.date && <Badge tone="warn">시즌 1 {formatDateKo(season1.date)}</Badge>}
        </div>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <Link
            href="/meta/multiplayer"
            className="rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-ink transition hover:brightness-110"
          >
            총기 메타 보기
          </Link>
          <Link
            href="/dmz"
            className="rounded-md border border-line px-5 py-2.5 font-semibold transition hover:border-accent/50"
          >
            DMZ 가이드
          </Link>
        </div>
      </section>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {(["multiplayer", "dmz"] as const).map((mode) => (
          <div key={mode} className="rounded-lg border border-line bg-panel p-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-bold">{MODE_LABEL[mode]} 종합 상위</h2>
              <Link href={`/meta/${mode}`} className="text-xs text-dim hover:text-accent">
                전체 →
              </Link>
            </div>
            <TopWeapons mode={mode} />
          </div>
        ))}

        <div className="rounded-lg border border-line bg-panel p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-bold">{formatDateKo(LATEST_BALANCE_PATCH)} 패치</h2>
            <Link href="/mw4#patches" className="text-xs text-dim hover:text-accent">
              패치노트 →
            </Link>
          </div>
          <p className="mb-2 text-xs text-accent">▲ 버프</p>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {buffed.map((id) => (
              <Link key={id} href={`/weapons/${id}`} className="rounded bg-panel-2 px-2 py-1 text-sm hover:text-accent">
                {requireWeapon(id).name}
              </Link>
            ))}
          </div>
          <p className="mb-2 text-xs text-danger">▼ 너프</p>
          <div className="flex flex-wrap gap-1.5">
            {nerfed.map((id) => (
              <Link key={id} href={`/weapons/${id}`} className="rounded bg-panel-2 px-2 py-1 text-sm hover:text-accent">
                {requireWeapon(id).name}
              </Link>
            ))}
          </div>
          {mixed.length > 0 && (
            <p className="mt-4 text-xs text-mute">
              {mixed.map((id) => requireWeapon(id).name).join(", ")}: 버프와 너프를 함께 받았습니다.
            </p>
          )}
        </div>
      </div>

      <SectionHeading title="둘러보기" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            href: "/meta/multiplayer",
            title: "총기 메타",
            body: `매체 종합 티어와 추천 빌드 ${builds.length}개. 총기 종류·역할별로 필터링할 수 있습니다.`,
          },
          {
            href: "/weapons",
            title: "무기 목록",
            body: `출시 무기 ${launchCount}종과 시즌 1 추가 예정 무기. 무기별 빌드와 패치 이력.`,
          },
          {
            href: "/dmz",
            title: "DMZ 가이드",
            body: `${dmzMap.name} 맵 주요 구역 ${dmzMap.zones.length}곳, 배치 모드, 손실 규칙, 3D 프린터, 현상금.`,
          },
          {
            href: "/mw4",
            title: "MW4 기본 정보",
            body: "출시·가격, 캠페인, 맵·모드, 퍼크·킬스트릭, 건스미스, 시즌 로드맵.",
          },
        ].map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-lg border border-line bg-panel p-5 transition hover:border-accent/50"
          >
            <h3 className="font-bold group-hover:text-accent">{c.title} →</h3>
            <p className="mt-2 text-sm leading-relaxed text-dim">{c.body}</p>
          </Link>
        ))}
      </div>

      {recentPatches.length > 0 && (
        <>
          <SectionHeading title="최근 업데이트" />
          <ul className="divide-y divide-line rounded-lg border border-line bg-panel">
            {recentPatches.map((p, i) => (
              <li key={i} className="flex flex-wrap items-baseline gap-3 px-5 py-3 text-sm">
                <span className="font-mono text-xs text-mute">{formatDateKo(p.date)}</span>
                <span className="font-medium">{p.title}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
