import type { Metadata } from "next";
import { Badge, Callout, formatDateKo, PageHeader, SectionHeading } from "@/components/ui";
import { externalMetaLinks } from "@/data/tier-lists";
import { DATA_UPDATED_AT } from "@/lib/data";
import { allSourcesDeduped } from "@/lib/sources";
import type { Source } from "@/lib/types";

export const metadata: Metadata = {
  title: "출처와 데이터 원칙",
  description: "COD 서포터가 사용한 모든 출처와 데이터 수집 원칙",
};

const EXCLUDED = [
  {
    name: "WZStats (wzstats.gg)",
    reason: "이용약관이 스크래핑과 빌드 데이터 재배포, 상업적 이용을 금지합니다.",
  },
  {
    name: "WarzoneLoadout (warzoneloadout.games)",
    reason: "이용약관이 랭킹·로드아웃·데이터셋 재배포와 AI 입력용 사용을 금지합니다.",
  },
  {
    name: "CODMunity (codmunity.gg)",
    reason:
      "티어·픽률·빌드 데이터는 가져오지 않았습니다. 공개된 약관이 없고, 픽률 산정 방식을 밝히지 않습니다(조회수 기준 표기). DMZ 가이드 기사 일부는 다른 매체 기사처럼 사실 확인용으로 인용하고 링크를 달았습니다.",
  },
  {
    name: "GAMES.GG 일부 메타 데이터",
    reason: "CODMunity와 같은 용어·수치를 쓰고 있어 파생 데이터로 의심되어 제외했습니다.",
  },
];

export default function SourcesPage() {
  const sources = allSourcesDeduped();
  const byPublisher = new Map<string, Source[]>();
  for (const s of sources) {
    const key = s.publisher ?? new URL(s.url).hostname.replace(/^www\./, "");
    byPublisher.set(key, [...(byPublisher.get(key) ?? []), s]);
  }
  const groups = [...byPublisher.entries()].sort((a, b) => b[1].length - a[1].length);

  return (
    <>
      <PageHeader eyebrow="Sources" title="출처와 데이터 원칙">
        <p>
          이 사이트의 모든 정보에는 출처 링크가 붙어 있습니다. 데이터 기준일은 {formatDateKo(DATA_UPDATED_AT)}입니다.
        </p>
      </PageHeader>

      <SectionHeading id="policy" title="데이터 원칙" />
      <div className="grid gap-3 md:grid-cols-3">
        <Callout tone="accent" title="1. 출처 없는 정보는 싣지 않습니다">
          공식 발표(callofduty.com)와 게임 매체 기사를 기준으로 합니다. 각 항목 옆의 작은 매체명 링크가 원문입니다.
        </Callout>
        <Callout tone="warn" title="2. 확실하지 않으면 표시합니다">
          출시 전·베타 정보는 <Badge tone="warn">출시 전 정보</Badge>, 루머나 출처 간 충돌은{" "}
          <Badge tone="danger">미확인</Badge>으로 구분합니다.
        </Callout>
        <Callout tone="info" title="3. 남의 데이터셋은 긁어오지 않습니다">
          메타 사이트의 티어·빌드 데이터는 약관을 확인하고, 재배포를 막는 곳은 링크로만 안내합니다. 빌드 설명은 직접 다시
          썼습니다.
        </Callout>
      </div>

      <SectionHeading id="collection" title="수집·갱신 현황" sub="2026-10-31 조사 · 현재는 정적 데이터와 수동 검증 방식입니다." />
      <div className="grid gap-3 md:grid-cols-3">
        <Callout tone="accent" title="공식 무장·패치 확인">
          공식 건스미스 안내와 누적 패치노트를 우선 확인합니다. 저장소의 sources:check 명령으로 본문 변경 후보를 감지할 수 있습니다. 자동 게시나 주기 실행은 아직 설정하지 않았습니다.
        </Callout>
        <Callout tone="info" title="최근 세팅·파츠 탐색">
          매체 기사에서 모드·작성일·부착물·공유 코드를 검토합니다. 파츠 도감은 수집된 빌드의 사용 사례를 모으며, 전체 파츠 목록이나 실제 픽률을 뜻하지 않습니다.
        </Callout>
        <Callout tone="warn" title="정밀 스펙은 측정 대기">
          파츠별 피해량·사거리·ADS·장전 시간·반동 수치는 아직 수집하지 않았습니다. 모드·패치·측정 조건·원본 캡처를 확보한 값부터 추가할 계획입니다.
        </Callout>
      </div>

      <SectionHeading id="excluded" title="메타 데이터를 가져오지 않은 사이트" sub="방문은 자유롭게 — 티어·빌드 데이터만 가져오지 않습니다." />
      <ul className="space-y-2">
        {EXCLUDED.map((e) => (
          <li key={e.name} className="rounded-lg border border-line bg-panel p-4 text-sm">
            <p className="font-semibold">{e.name}</p>
            <p className="mt-1 text-dim">{e.reason}</p>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
        {externalMetaLinks.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-line px-2 py-1 text-xs text-dim hover:border-accent/50 hover:text-ink"
          >
            {l.title} ↗
          </a>
        ))}
      </div>

      <SectionHeading id="list" title={`사용한 출처 ${sources.length}건`} sub="매체별, 많이 인용한 순." />
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map(([publisher, list]) => (
          <section key={publisher} className="rounded-lg border border-line bg-panel p-4">
            <h3 className="mb-2 flex items-center gap-2 font-semibold">
              {publisher}
              <span className="font-mono text-xs text-mute">{list.length}</span>
            </h3>
            <ul className="space-y-1.5 text-sm">
              {list.map((s) => (
                <li key={s.id} className="flex gap-2">
                  {s.date && <span className="shrink-0 font-mono text-xs leading-5 text-mute">{s.date}</span>}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-dim hover:text-accent"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
