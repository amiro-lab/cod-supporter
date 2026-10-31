import { SourceLinks } from "@/components/source-links";
import { Badge, CertaintyBadge, formatDateKo } from "@/components/ui";
import type { Fact, InfoItem, NamedEntry, PatchNote } from "@/lib/types";

export function FactGrid({ facts }: { facts: Fact[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map((f, idx) => (
        <div key={`${idx}-${f.label}`} className="flex flex-col gap-1.5 rounded-lg border border-line bg-panel p-4">
          <dt className="flex items-center gap-2 text-xs text-mute">
            {f.label}
            <CertaintyBadge certainty={f.certainty} />
          </dt>
          <dd className="whitespace-pre-line text-sm leading-relaxed">{f.value}</dd>
          <SourceLinks ids={f.sources} className="mt-auto pt-1" />
        </div>
      ))}
    </dl>
  );
}

export function InfoList({ items, columns = 2 }: { items: InfoItem[]; columns?: 1 | 2 }) {
  return (
    <div className={`grid gap-3 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
      {items.map((i, idx) => (
        <article key={`${idx}-${i.title}`} className="flex flex-col gap-2 rounded-lg border border-line bg-panel p-4">
          <header className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">{i.title}</h3>
            {i.original && i.original !== i.title && (
              <span className="font-mono text-xs text-mute">{i.original}</span>
            )}
            <CertaintyBadge certainty={i.certainty} />
          </header>
          <p className="whitespace-pre-line text-sm leading-relaxed text-dim">{i.body}</p>
          <SourceLinks ids={i.sources} className="mt-auto pt-1" />
        </article>
      ))}
    </div>
  );
}

export function NamedGrid({ entries, dense = false }: { entries: NamedEntry[]; dense?: boolean }) {
  return (
    <div className={`grid gap-3 ${dense ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {entries.map((e, idx) => (
        <article key={`${idx}-${e.name}`} className="flex flex-col gap-1.5 rounded-lg border border-line bg-panel p-4">
          <header className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="font-semibold">{e.name}</h3>
            {e.nameKo && <span className="text-sm text-dim">{e.nameKo}</span>}
          </header>
          <div className="flex flex-wrap gap-1">
            {e.tag && <Badge>{e.tag}</Badge>}
            {e.season === "season1" && <Badge tone="warn">시즌 1</Badge>}
            <CertaintyBadge certainty={e.certainty} />
          </div>
          {e.body && <p className="text-sm leading-relaxed text-dim">{e.body}</p>}
          <SourceLinks ids={e.sources} className="mt-auto pt-1" />
        </article>
      ))}
    </div>
  );
}

export function PatchTimeline({ patches }: { patches: PatchNote[] }) {
  return (
    <ol className="relative space-y-4 border-l border-line pl-6">
      {patches.map((p, idx) => (
        <li key={`${idx}-${p.date}`} className="relative">
          <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-mute">{formatDateKo(p.date)}</span>
            <h3 className="font-semibold">{p.title}</h3>
            <SourceLinks ids={p.sources} />
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-dim">
            {p.changes.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function OpenQuestions({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 rounded-lg border border-dashed border-line p-5 text-sm text-dim">
      {items.map((q, idx) => (
        <li key={idx} className="flex gap-2">
          <span className="text-warn">?</span>
          <span>{q}</span>
        </li>
      ))}
    </ul>
  );
}
