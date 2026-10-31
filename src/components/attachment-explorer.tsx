"use client";

import Link from "next/link";
import { useState } from "react";
import { MODE_LABEL } from "@/lib/labels";

export interface AttachmentRow {
  name: string;
  slot: string;
  uses: { id: string; weaponId: string; weaponName: string; mode: "multiplayer" | "dmz"; date: string; publisher: string; sourceUrl: string }[];
}

export function AttachmentExplorer({ rows }: { rows: AttachmentRow[] }) {
  const [query, setQuery] = useState("");
  const [slot, setSlot] = useState("");
  const [mode, setMode] = useState("");
  const [weapon, setWeapon] = useState("");
  const weapons = [...new Map(rows.flatMap((r) => r.uses.map((u) => [u.weaponId, u.weaponName] as const))).entries()]
    .sort((a, b) => a[1].localeCompare(b[1]));
  const filtered = rows.map((r) => ({ ...r, uses: r.uses.filter((u) => (!mode || u.mode === mode) && (!weapon || u.weaponId === weapon)) }))
    .filter((r) => r.uses.length && (!slot || r.slot === slot) && `${r.name} ${r.slot} ${r.uses.map((u) => u.weaponName).join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  const control = "w-full rounded border border-line bg-panel px-3 py-2 text-sm";
  return (
    <>
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="text-xs text-dim">파츠·무기 검색<input className={`${control} mt-1`} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="예: FSS, M4" /></label>
        <label className="text-xs text-dim">슬롯<select className={`${control} mt-1`} value={slot} onChange={(e) => setSlot(e.target.value)}><option value="">전체 슬롯</option>{[...new Set(rows.map((r) => r.slot))].sort().map((s) => <option key={s}>{s}</option>)}</select></label>
        <label className="text-xs text-dim">모드<select className={`${control} mt-1`} value={mode} onChange={(e) => setMode(e.target.value)}><option value="">전체 모드</option><option value="multiplayer">멀티플레이</option><option value="dmz">DMZ</option></select></label>
        <label className="text-xs text-dim">무기<select className={`${control} mt-1`} value={weapon} onChange={(e) => setWeapon(e.target.value)}><option value="">전체 무기</option>{weapons.map(([id, name]) => <option key={id} value={id}>{name}</option>)}</select></label>
      </div>
      <p className="mb-4 text-sm text-mute" role="status">{filtered.length}종 · 추천 빌드에 등장한 파츠만 표시합니다. 전체 호환 목록·픽률이 아닙니다.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((r) => <article key={JSON.stringify([r.slot, r.name])} className="rounded-lg border border-line bg-panel p-4">
          <p className="font-mono text-xs text-accent">{r.slot}</p><h2 className="mt-1 font-semibold">{r.name}</h2>
          <p className="mt-2 text-xs text-mute">정밀 스탯·해금 조건: 미수집</p>
          <ul className="mt-3 space-y-2 text-sm">{r.uses.map((u) => <li key={u.id}>
            <Link className="hover:text-accent" href={`/weapons/${u.weaponId}#builds-${u.mode}`}>{u.weaponName} · {MODE_LABEL[u.mode]}</Link>
            <a className="ml-2 text-xs text-dim hover:text-accent" href={u.sourceUrl} target="_blank" rel="noopener noreferrer">{u.publisher} ↗</a>
            <span className="ml-2 text-xs text-mute">{u.date} 기준</span>
          </li>)}</ul>
        </article>)}
      </div>
      {!filtered.length && <p className="rounded border border-dashed border-line p-8 text-center text-dim">조건에 맞는 파츠가 없습니다.</p>}
    </>
  );
}
