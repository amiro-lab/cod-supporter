import type { Metadata } from "next";
import Link from "next/link";
import { Badge, ChangeBadge, PageHeader, SectionHeading, TierBadge, TocNav } from "@/components/ui";
import { buildsFor, latestChangeFor, weaponsByClass } from "@/lib/data";
import { CLASS_LABEL } from "@/lib/labels";
import { consensus } from "@/lib/meta";

export const metadata: Metadata = {
  title: "무기 목록",
  description: "모던 워페어 4 출시 무기와 시즌 1 추가 예정 무기 전체 목록",
};

export default function WeaponsPage() {
  const groups = weaponsByClass();
  const mp = consensus("multiplayer");
  const dmz = consensus("dmz");
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <PageHeader eyebrow="Arsenal" title="무기 목록">
        <p>
          출시 무기와 시즌 1 추가 예정 무기 {total}종. 종합 티어는 매체 티어 리스트를 합쳐 계산한 값이고, 무기를 누르면
          빌드와 패치 이력을 볼 수 있습니다.
        </p>
      </PageHeader>

      <TocNav items={groups.map((g) => ({ id: g.cls, title: CLASS_LABEL[g.cls].ko }))} />

      {groups.map(({ cls, items }) => (
        <section key={cls}>
          <SectionHeading id={cls} title={CLASS_LABEL[cls].ko} sub={`${CLASS_LABEL[cls].en} · ${items.length}종`} />
          <div className="overflow-x-auto rounded-lg border border-line">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-panel-2 text-left text-xs text-dim">
                <tr>
                  <th className="px-3 py-2 font-medium">무기</th>
                  <th className="px-3 py-2 font-medium">RPM</th>
                  <th className="px-3 py-2 font-medium">해금</th>
                  <th className="px-3 py-2 font-medium">멀티</th>
                  <th className="px-3 py-2 font-medium">DMZ</th>
                  <th className="px-3 py-2 font-medium">빌드</th>
                </tr>
              </thead>
              <tbody>
                {items.map((w) => {
                  const mpTier = mp.find((e) => e.weaponId === w.id);
                  const dmzTier = dmz.find((e) => e.weaponId === w.id);
                  const n = buildsFor(w.id).length;
                  return (
                    <tr key={w.id} className="border-t border-line align-top">
                      <td className="px-3 py-2.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <Link href={`/weapons/${w.id}`} className="font-semibold hover:text-accent">
                            {w.name}
                          </Link>
                          {w.season === "season1" && <Badge tone="warn">시즌 1</Badge>}
                          <ChangeBadge change={latestChangeFor(w.id)} />
                        </div>
                        <p className="mt-1 max-w-md text-xs leading-relaxed text-dim">{w.summary}</p>
                      </td>
                      <td className="px-3 py-2.5 font-mono">{w.rpm ?? "—"}</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">
                        {w.unlock ?? "—"}
                        {w.unlockNote && (
                          <span className="block text-xs text-warn" title={w.unlockNote}>
                            출처마다 다름
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-2.5">{mpTier ? <TierBadge tier={mpTier.tier} /> : "—"}</td>
                      <td className="px-3 py-2.5">{dmzTier ? <TierBadge tier={dmzTier.tier} /> : "—"}</td>
                      <td className="px-3 py-2.5 font-mono">{n || "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </>
  );
}
