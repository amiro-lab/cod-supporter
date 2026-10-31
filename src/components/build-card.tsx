import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { SourceLinks } from "@/components/source-links";
import { Badge, formatDateShort } from "@/components/ui";
import { requireWeapon } from "@/lib/data";
import { CLASS_LABEL, MODE_LABEL, ROLE_LABEL } from "@/lib/labels";
import type { Build } from "@/lib/types";

function ChipList({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="flex flex-wrap items-baseline gap-1.5 text-xs">
      <span className="w-14 shrink-0 text-mute">{label}</span>
      {items.map((i) => (
        <span key={i} className="rounded bg-panel-2 px-1.5 py-0.5 text-dim">
          {i}
        </span>
      ))}
    </div>
  );
}

export function BuildCard({ build, showWeapon = true }: { build: Build; showWeapon?: boolean }) {
  const weapon = requireWeapon(build.weaponId);
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-line bg-panel p-5">
      <header className="flex flex-wrap items-start justify-between gap-2">
        <div>
          {showWeapon && (
            <Link href={`/weapons/${weapon.id}`} className="text-lg font-bold hover:text-accent">
              {weapon.name}
            </Link>
          )}
          <p className={`${showWeapon ? "mt-0.5" : ""} text-sm text-dim`}>
            {showWeapon && <>{CLASS_LABEL[weapon.class].ko} · </>}
            {build.title}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge tone={build.mode === "dmz" ? "warn" : "info"}>{MODE_LABEL[build.mode]}</Badge>
          <Badge>{ROLE_LABEL[build.role]}</Badge>
          {build.lowConfidence && (
            <Badge tone="danger" title="출처의 부착물 표기가 다른 매체와 달라 정확하지 않을 수 있음">
              신뢰도 낮음
            </Badge>
          )}
        </div>
      </header>

      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
        {build.attachments.map((a) => (
          <div key={a.slot + a.name} className="contents">
            <dt className="font-mono text-xs leading-5 text-mute uppercase">
              {/unlabeled/i.test(a.slot) ? "부착물" : a.slot}
            </dt>
            <dd className="leading-5">
              {a.name}
              {a.tuning && <span className="ml-2 font-mono text-xs text-dim">{a.tuning}</span>}
            </dd>
          </div>
        ))}
      </dl>

      <p className="text-sm leading-relaxed text-dim">{build.why}</p>

      <div className="space-y-1.5">
        <ChipList label="퍼크" items={build.perks} />
        <ChipList label="장비" items={build.equipment} />
        <ChipList label="킬스트릭" items={build.killstreaks} />
      </div>

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
        <div className="flex items-center gap-2 text-xs text-mute">
          <span>{formatDateShort(build.date)} 기준</span>
          <SourceLinks ids={build.sources} />
        </div>
        {build.buildCode && <CopyButton text={build.buildCode} label="코드" />}
      </footer>
    </article>
  );
}
