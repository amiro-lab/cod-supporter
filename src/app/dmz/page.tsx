import type { Metadata } from "next";
import Link from "next/link";
import { FactGrid, InfoList, NamedGrid, OpenQuestions, PatchTimeline } from "@/components/info";
import { Callout, TierBadge, PageHeader, SectionHeading, TocNav } from "@/components/ui";
import { DMZ_COMMUNITY_CHECKED_AT, dmzBlueprintReports, dmzBlueprintOfficialNotes } from "@/data/dmz-community";
import {
  dmzFacts,
  dmzMap,
  dmzModes,
  dmzOpenQuestions,
  dmzPatches,
  dmzSeason1,
  dmzSections,
  dmzTips,
} from "@/data/dmz";
import { requireWeapon } from "@/lib/data";
import { consensus } from "@/lib/meta";

export const metadata: Metadata = {
  title: "DMZ 가이드",
  description: "모던 워페어 4 DMZ — 하진(Hajin) 맵, 배치 모드, 핵심 규칙, 3D 프린터, 현상금, 초보 팁",
};

export default function DmzPage() {
  const topWeapons = consensus("dmz").filter((e) => e.tier === "S");
  const toc = [
    { id: "overview", title: "개요" },
    { id: "map", title: "맵" },
    { id: "modes", title: "배치 모드" },
    ...dmzSections.map((s) => ({ id: s.id, title: s.title })),
    { id: "tips", title: "초보 팁" },
    { id: "blueprints-community", title: "무기 도안 제보" },
    { id: "weapons", title: "추천 무기" },
    { id: "season1", title: "시즌 1" },
    { id: "patches", title: "패치" },
    { id: "open", title: "미확인" },
  ];

  return (
    <>
      <PageHeader eyebrow="DMZ · Extraction" title="DMZ 가이드">
        <p>
          모던 워페어 4의 익스트랙션 모드 DMZ 정리. 맵, 배치 방식, 죽었을 때 잃는 것과 남는 것, 진행 시스템을 출처와 함께
          모았습니다.
        </p>
      </PageHeader>

      <TocNav items={toc} />

      <SectionHeading id="overview" title="한눈에 보기" />
      <FactGrid facts={dmzFacts} />

      <SectionHeading
        id="map"
        title={`맵: ${dmzMap.name}${dmzMap.nameKo ? ` (${dmzMap.nameKo})` : ""}`}
        sub={dmzMap.summary}
      />
      <FactGrid facts={dmzMap.facts} />
      <h3 className="mb-3 mt-8 font-semibold">주요 구역 {dmzMap.zones.length}곳</h3>
      <NamedGrid entries={dmzMap.zones} />
      {dmzMap.locations.length > 0 && (
        <>
          <h3 className="mb-3 mt-8 font-semibold">눈여겨볼 장소</h3>
          <NamedGrid entries={dmzMap.locations} dense />
        </>
      )}

      <SectionHeading id="modes" title="배치 모드" />
      <InfoList items={dmzModes} />

      {dmzSections.map((s) => (
        <div key={s.id}>
          <SectionHeading id={s.id} title={s.title} sub={s.intro} />
          <InfoList items={s.items} />
        </div>
      ))}

      <SectionHeading id="tips" title="초보 팁" sub="여러 가이드의 공통 조언을 정리했습니다." />
      <InfoList items={dmzTips} />

      <SectionHeading id="blueprints-community" title="무기 도안 · 커뮤니티 제보" sub={`${DMZ_COMMUNITY_CHECKED_AT} 원문 확인 · 획득 경험담, 파밍 장소, 구매 팁`} />
      <div className="mb-3">
        <Callout tone="warn" title="도안·무기 매뉴얼·제작법을 구분해 읽으세요">
          커뮤니티 글은 서로 다른 아이템을 같은 말로 부르기도 합니다. 아래 내용은 이용자 제보이며, 확정 드롭·정확한 확률·현재 패치에서의 재현 여부는 확인하지 않았습니다. 각 항목에서 원문을 확인할 수 있습니다.
        </Callout>
      </div>
      <InfoList items={dmzBlueprintReports} />
      <h3 className="mb-3 mt-6 font-semibold">관련 공식 수정 내역</h3>
      <InfoList items={dmzBlueprintOfficialNotes} columns={1} />

      <SectionHeading
        id="weapons"
        title="DMZ 추천 무기"
        sub={
          <>
            종합 S티어 ·{" "}
            <Link href="/meta/dmz" className="underline decoration-line underline-offset-4 hover:text-ink">
              DMZ 메타 전체 보기
            </Link>
          </>
        }
      />
      <div className="flex flex-wrap gap-2">
        {topWeapons.map((e) => (
          <Link
            key={e.weaponId}
            href={`/weapons/${e.weaponId}`}
            className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-3 py-2 hover:border-accent/50"
          >
            <TierBadge tier={e.tier} />
            <span className="font-semibold">{requireWeapon(e.weaponId).name}</span>
          </Link>
        ))}
      </div>

      <SectionHeading id="season1" title="시즌 1 (11월 6일) DMZ 추가 내용" />
      <InfoList items={dmzSeason1} />

      <SectionHeading id="patches" title="DMZ 관련 패치" />
      <PatchTimeline patches={dmzPatches} />

      <SectionHeading id="open" title="아직 확인되지 않은 것" />
      <OpenQuestions items={dmzOpenQuestions} />
    </>
  );
}
