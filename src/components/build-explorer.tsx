"use client";

import { useMemo, useState } from "react";

export interface ExplorerItem {
  id: string;
  /** 필터용 키 */
  cls: string;
  role: string;
  /** 서버에서 렌더링한 빌드 카드 */
  node: React.ReactNode;
}

interface Option {
  value: string;
  label: string;
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="w-12 shrink-0 text-xs text-mute">{label}</span>
      {[{ value: "all", label: "전체" }, ...options].map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          className={`rounded-full border px-3 py-1 text-xs transition ${
            value === o.value
              ? "border-accent bg-accent text-accent-ink font-semibold"
              : "border-line text-dim hover:border-accent/50 hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function BuildExplorer({
  items,
  classOptions,
  roleOptions,
}: {
  items: ExplorerItem[];
  classOptions: Option[];
  roleOptions: Option[];
}) {
  const [cls, setCls] = useState("all");
  const [role, setRole] = useState("all");

  const visible = useMemo(
    () => items.filter((i) => (cls === "all" || i.cls === cls) && (role === "all" || i.role === role)),
    [items, cls, role],
  );

  return (
    <div>
      <div className="mb-5 space-y-2">
        <FilterRow label="총기" options={classOptions} value={cls} onChange={setCls} />
        <FilterRow label="역할" options={roleOptions} value={role} onChange={setRole} />
      </div>
      <p className="mb-3 font-mono text-xs text-mute">{visible.length}개 빌드</p>
      {visible.length === 0 ? (
        <p className="rounded-lg border border-dashed border-line p-8 text-center text-sm text-dim">
          조건에 맞는 빌드가 없습니다.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((i) => (
            <div key={i.id} className="contents">
              {i.node}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
