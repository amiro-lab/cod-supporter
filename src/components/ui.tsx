import Link from "next/link";
import { CERTAINTY_LABEL, TIER_DESC } from "@/lib/labels";
import type { Certainty, Tier } from "@/lib/types";

type Tone = "accent" | "warn" | "danger" | "info" | "mute";

const TONE: Record<Tone, string> = {
  accent: "border-accent/40 bg-accent/10 text-accent",
  warn: "border-warn/40 bg-warn/10 text-warn",
  danger: "border-danger/40 bg-danger/10 text-danger",
  info: "border-info/40 bg-info/10 text-info",
  mute: "border-line bg-panel-2 text-dim",
};

export function Badge({
  tone = "mute",
  children,
  title,
}: {
  tone?: Tone;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <span
      title={title}
      className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[11px] leading-none whitespace-nowrap ${TONE[tone]}`}
    >
      {children}
    </span>
  );
}

export function CertaintyBadge({ certainty }: { certainty?: Certainty }) {
  if (!certainty || certainty === "confirmed") return null;
  const c = CERTAINTY_LABEL[certainty];
  return <Badge tone={c.tone as Tone}>{c.text}</Badge>;
}

const TIER_STYLE: Record<Tier, string> = {
  S: "bg-tier-s text-black",
  A: "bg-tier-a text-black",
  B: "bg-tier-b text-black",
  C: "bg-tier-c text-black",
  D: "bg-panel-2 text-dim border border-line",
};

export function TierBadge({
  tier,
  size = "sm",
}: {
  tier: Tier;
  size?: "sm" | "lg";
}) {
  const dim = size === "lg" ? "h-12 w-12 text-2xl" : "h-6 w-6 text-xs";
  return (
    <span
      title={`${tier} 티어 — ${TIER_DESC[tier]}`}
      className={`inline-flex shrink-0 items-center justify-center rounded font-mono font-bold ${dim} ${TIER_STYLE[tier]}`}
    >
      {tier}
    </span>
  );
}

export function ChangeBadge({ change }: { change?: "buff" | "nerf" | "adjust" }) {
  if (!change) return null;
  if (change === "buff") return <Badge tone="accent">▲ 버프</Badge>;
  if (change === "nerf") return <Badge tone="danger">▼ 너프</Badge>;
  return <Badge tone="info">◆ 조정</Badge>;
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="mb-6 border-b border-line pb-8">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {children && <div className="mt-4 max-w-3xl text-dim">{children}</div>}
    </header>
  );
}

export function SectionHeading({
  id,
  title,
  sub,
}: {
  id?: string;
  title: string;
  sub?: React.ReactNode;
}) {
  return (
    <div id={id} className="mb-5 mt-14">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="h-4 w-1 rounded-sm bg-accent" aria-hidden />
        {title}
      </h2>
      {sub && <p className="mt-1.5 pl-4 text-sm text-dim">{sub}</p>}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-line bg-panel p-5 ${className}`}>
      {children}
    </div>
  );
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: Tone;
  title: string;
  children: React.ReactNode;
}) {
  const bar: Record<Tone, string> = {
    accent: "border-l-accent",
    warn: "border-l-warn",
    danger: "border-l-danger",
    info: "border-l-info",
    mute: "border-l-line",
  };
  return (
    <div className={`rounded-md border border-line border-l-4 bg-panel p-4 text-sm ${bar[tone]}`}>
      <p className="font-semibold">{title}</p>
      <div className="mt-1.5 text-dim">{children}</div>
    </div>
  );
}

export function TocNav({ items }: { items: { id: string; title: string }[] }) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="페이지 목차">
      {items.map((i) => (
        <Link
          key={i.id}
          href={`#${i.id}`}
          className="rounded-full border border-line bg-panel px-3 py-1 text-sm text-dim transition hover:border-accent/50 hover:text-ink"
        >
          {i.title}
        </Link>
      ))}
    </nav>
  );
}

export function formatDateKo(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!d) return iso;
  return `${y}년 ${m}월 ${d}일`;
}

export function formatDateShort(iso: string) {
  const [, m, d] = iso.split("-").map(Number);
  if (!d) return iso;
  return `${m}/${d}`;
}
