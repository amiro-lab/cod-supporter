import type { Metadata } from "next";
import Link from "next/link";
import { AttachmentExplorer } from "@/components/attachment-explorer";
import { PageHeader } from "@/components/ui";
import { attachmentCatalog } from "@/lib/attachments";
import { requireWeapon } from "@/lib/data";
import { getSource } from "@/lib/sources";

export const metadata: Metadata = { title: "파츠 도감", description: "MW4 추천 빌드의 부착물을 무기·슬롯·모드별로 검색하고 원문을 확인하세요." };

export default function AttachmentsPage() {
  const rows = attachmentCatalog().map((r) => ({ name: r.name, slot: r.slot, uses: r.builds.map((b) => ({
    id: b.id, weaponId: b.weaponId, weaponName: requireWeapon(b.weaponId).name, mode: b.mode,
    date: b.date, publisher: b.publisher, sourceUrl: getSource(b.sources[0]).url,
  })) }));
  return <>
    <PageHeader eyebrow="Attachments" title="파츠 도감"><p>수집된 추천 세팅에서 파츠와 사용 사례를 찾아보세요. 수치 효과와 장착 가능 여부는 인게임 확인이 필요합니다.</p><p><Link className="text-accent" href="/sources#collection">데이터 수집·검증 방법 →</Link></p></PageHeader>
    <AttachmentExplorer rows={rows} />
  </>;
}
