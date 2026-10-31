import { getSource } from "@/lib/sources";
import type { SourceId } from "@/lib/types";

/** 사실 옆에 붙는 출처 링크. 매체명을 짧게 보여주고 전체 제목은 툴팁으로 */
export function SourceLinks({
  ids,
  max = 3,
  className = "",
}: {
  ids: SourceId[];
  max?: number;
  className?: string;
}) {
  if (!ids.length) return null;
  const sources = ids.map(getSource);
  const shown = sources.slice(0, max);
  const rest = sources.slice(max);
  return (
    <span className={`inline-flex flex-wrap items-center gap-1 align-middle ${className}`}>
      {shown.map((s) => (
        <a
          key={s.id}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`${s.title}${s.date ? ` (${s.date})` : ""}`}
          className="rounded border border-line px-1 py-px font-mono text-[10px] leading-tight text-mute transition hover:border-accent/50 hover:text-accent"
        >
          {s.publisher ?? new URL(s.url).hostname.replace(/^www\./, "")}
        </a>
      ))}
      {rest.length > 0 && (
        <span
          className="font-mono text-[10px] text-mute"
          title={rest.map((s) => s.title).join("\n")}
        >
          +{rest.length}
        </span>
      )}
    </span>
  );
}
