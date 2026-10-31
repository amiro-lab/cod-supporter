import type { Metadata } from "next";
import { FactGrid, InfoList, NamedGrid, OpenQuestions, PatchTimeline } from "@/components/info";
import Link from "next/link";
import { SourceLinks } from "@/components/source-links";
import { formatDateKo, PageHeader, SectionHeading, TocNav } from "@/components/ui";
import {
  mw4Campaign,
  mw4Equipment,
  mw4Facts,
  mw4Gunsmith,
  mw4Maps,
  mw4Mechanics,
  mw4Modes,
  mw4OpenQuestions,
  mw4OtherModes,
  mw4Patches,
  mw4Perks,
  mw4Progression,
  mw4Scorestreaks,
  mw4Seasons,
} from "@/data/mw4";
import { apexFor, apexItems, gunsmithGeneralItems, weapons } from "@/lib/data";

export const metadata: Metadata = {
  title: "모던 워페어 4 기본 정보",
  description: "출시 정보, 캠페인, 멀티플레이 맵·모드·퍼크·킬스트릭, 건스미스, 시즌, 패치노트",
};

const TOC = [
  { id: "facts", title: "핵심 정보" },
  { id: "campaign", title: "캠페인" },
  { id: "maps", title: "맵" },
  { id: "modes", title: "모드" },
  { id: "mechanics", title: "게임플레이" },
  { id: "perks", title: "퍼크·장비" },
  { id: "streaks", title: "킬스트릭" },
  { id: "progression", title: "진행" },
  { id: "gunsmith", title: "건스미스" },
  { id: "other-modes", title: "워존·기타" },
  { id: "seasons", title: "시즌" },
  { id: "patches", title: "패치노트" },
  { id: "open", title: "미확인" },
];

export default function Mw4Page() {
  const launchMaps = mw4Maps.filter((m) => m.season !== "season1");
  const s1Maps = mw4Maps.filter((m) => m.season === "season1");
  const launchModes = mw4Modes.filter((m) => m.season !== "season1");
  const s1Modes = mw4Modes.filter((m) => m.season === "season1");

  return (
    <>
      <PageHeader eyebrow="Modern Warfare 4" title="모던 워페어 4 기본 정보">
        <p>
          출시 정보부터 멀티플레이 시스템, 시즌 일정, 패치노트까지. 공식 발표를 우선하고, 출시 전 정보나 출처가 엇갈리는
          내용은 따로 표시했습니다.
        </p>
      </PageHeader>

      <TocNav items={TOC} />

      <SectionHeading id="facts" title="핵심 정보" />
      <FactGrid facts={mw4Facts} />

      <SectionHeading id="campaign" title={mw4Campaign.title} sub={mw4Campaign.intro} />
      <InfoList items={mw4Campaign.items} />

      <SectionHeading id="maps" title="멀티플레이 맵" sub={`현재 플레이 가능 ${launchMaps.length}개${s1Maps.length ? ` · 시즌 1 추가 예정 ${s1Maps.length}개` : ""}`} />
      <NamedGrid entries={[...launchMaps, ...s1Maps]} dense />

      <SectionHeading id="modes" title="게임 모드" sub={`현재 플레이 가능 ${launchModes.length}개${s1Modes.length ? ` · 시즌 1 추가 예정 ${s1Modes.length}개` : ""}`} />
      <NamedGrid entries={[...launchModes, ...s1Modes]} dense />

      <SectionHeading id="mechanics" title="게임플레이 변화" />
      <InfoList items={mw4Mechanics} />

      <SectionHeading id="perks" title="퍼크" sub="슬롯마다 하나씩 고릅니다." />
      <div className="space-y-6">
        {mw4Perks.map((p) => (
          <div key={p.slot}>
            <h3 className="mb-3 font-mono text-sm text-accent">PERK {p.slot}</h3>
            <NamedGrid entries={p.entries} />
          </div>
        ))}
      </div>
      {mw4Equipment.map((sec) => (
        <div key={sec.id}>
          <SectionHeading id={sec.id} title={sec.title} sub={sec.intro} />
          <InfoList items={sec.items} />
        </div>
      ))}

      <SectionHeading id="streaks" title="킬스트릭" sub={`${mw4Scorestreaks.length}종`} />
      <NamedGrid entries={mw4Scorestreaks} dense />

      <SectionHeading id="progression" title={mw4Progression.title} sub={mw4Progression.intro} />
      <InfoList items={mw4Progression.items} />

      <SectionHeading id="gunsmith" title={mw4Gunsmith.title} sub={mw4Gunsmith.intro} />
      <InfoList items={gunsmithGeneralItems()} />
      <h3 className="mb-3 mt-8 font-semibold">무기별 Apex 부착물 {apexItems().length}종</h3>
      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="bg-panel-2 text-left text-xs text-dim">
            <tr>
              <th className="px-3 py-2 font-medium">무기</th>
              <th className="px-3 py-2 font-medium">Apex</th>
              <th className="px-3 py-2 font-medium">효과</th>
            </tr>
          </thead>
          <tbody>
            {weapons
              .map((w) => ({ w, apex: apexFor(w) }))
              .filter((x) => x.apex)
              .map(({ w, apex }) => (
                <tr key={w.id} className="border-t border-line align-top">
                  <td className="px-3 py-2 whitespace-nowrap">
                    <Link href={`/weapons/${w.id}`} className="font-medium hover:text-accent">
                      {w.name}
                    </Link>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap font-mono text-xs">
                    {apex!.original ?? apex!.title.replace(/^Apex: /, "")}
                  </td>
                  <td className="px-3 py-2 text-dim">
                    {apex!.body.replace(/^.+?의 Apex(로|다)[,.]?\s*/, "")}{" "}
                    <SourceLinks ids={apex!.sources} max={1} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <SectionHeading id="other-modes" title={mw4OtherModes.title} sub={mw4OtherModes.intro} />
      <InfoList items={mw4OtherModes.items} />

      <SectionHeading id="seasons" title="시즌 로드맵" />
      <div className="space-y-6">
        {mw4Seasons.map((s) => (
          <div key={s.id}>
            <h3 className="mb-3 flex items-baseline gap-3 font-semibold">
              {s.name}
              {s.date && <span className="font-mono text-xs text-mute">{formatDateKo(s.date)} 시작</span>}
            </h3>
            <InfoList items={s.items} />
          </div>
        ))}
      </div>

      <SectionHeading id="patches" title="패치노트 요약" sub="최신순. 무기별 수치 변화는 각 무기 페이지에 있습니다." />
      <PatchTimeline patches={mw4Patches} />

      <SectionHeading id="open" title="아직 확인되지 않은 것" />
      <OpenQuestions items={mw4OpenQuestions} />
    </>
  );
}
