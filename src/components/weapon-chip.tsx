import Link from "next/link";
import { ChangeBadge } from "@/components/ui";
import { latestChangeFor, requireWeapon } from "@/lib/data";
import { CLASS_LABEL } from "@/lib/labels";

export function WeaponChip({
  weaponId,
  disputed,
  showChange = true,
}: {
  weaponId: string;
  disputed?: boolean;
  /** 최근 패치 버프/너프 표시 (멀티플레이 패치이므로 DMZ에서는 끈다) */
  showChange?: boolean;
}) {
  const w = requireWeapon(weaponId);
  return (
    <Link
      href={`/weapons/${w.id}`}
      className="group inline-flex items-center gap-2 rounded-md border border-line bg-panel-2 px-3 py-2 transition hover:border-accent/50"
    >
      <span className="font-semibold group-hover:text-accent">{w.name}</span>
      <span className="text-xs text-mute">{CLASS_LABEL[w.class].ko}</span>
      {showChange && <ChangeBadge change={latestChangeFor(w.id)} />}
      {disputed && (
        <span className="font-mono text-[11px] text-warn" title="매체 간 평가가 2단계 이상 차이남">
          ±
        </span>
      )}
    </Link>
  );
}
