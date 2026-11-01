import type { InfoItem, Source } from "@/lib/types";

export const DMZ_GUIDES_CHECKED_AT = "2026-11-01";

export const dmzGuideSources: Source[] = [
  { id: "dmz-orders-companion", title: "Gamers Heroes — MW4 DMZ Orders Companion Guide", publisher: "Gamers Heroes", url: "https://www.gamersheroes.com/game-guides/modern-warfare-4-mw4-dmz-orders-companion-guide/" },
  { id: "dmz-later-orders", title: "DMZ Codex — Later Orders: objectives and preparation", publisher: "DMZ Codex", date: "2026-10-30", url: "https://dmzcodex.com/guides/dmz-later-orders-guide/" },
  { id: "dmz-compound-guide", title: "PC Gamer — How to clear a compound in Modern Warfare 4 DMZ", publisher: "PC Gamer", date: "2026-10-22", url: "https://www.pcgamer.com/games/call-of-duty/dmz-clear-a-compound-no-one-left/" },
  { id: "dmz-backpack-guide", title: "Windows Central — How to get better backpacks in Modern Warfare 4 DMZ", publisher: "Windows Central", date: "2026-10-22", url: "https://www.windowscentral.com/gaming/call-of-duty/the-most-essential-gear-for-looting-in-modern-warfare-4-dmz-isnt-your-weapon-its-having-the-right-backpack" },
];

export const dmzLatestGuides: InfoItem[] = [
  {
    title: "Orders에서 막혔다면 페이지보다 목표 이름으로 찾기",
    body: "Gamers Heroes는 Orders 목표를 검색할 수 있는 공략을 제공합니다. 선택한 챕터에 따라 페이지 구성이 다를 수 있으므로 페이지 번호보다 현재 화면의 목표 이름을 기준으로 찾으세요. 예를 들어 Eyes Everywhere는 FOB에서 Recon Drone을 준비해 카지노에서 적을 표시하는 목표로 안내합니다. 단일 매체 공략이므로 현재 인게임 조건과 대조하세요.",
    certainty: "unconfirmed", sources: ["dmz-orders-companion"],
  },
  {
    title: "후반 Orders: 출격 전에 코어·열쇠·제작 목표 구분",
    body: "10월 30일 갱신된 DMZ Codex 공략은 Abandoned를 K9 처치와 정상 작동하는 코어 3개 반출, Locksmith를 열쇠 5개 획득과 잠긴 공간 3곳 개방으로 안내합니다. Hard Carry는 Large Backpack을 단순 획득하는 대신 제작해야 한다고 설명합니다. 한 번에 목표 하나를 정하고 준비물과 카운터를 확인하세요. 수량·진행 조건은 단일 출처 정보입니다.",
    certainty: "unconfirmed", sources: ["dmz-later-orders"],
  },
  {
    title: "초반 Compound 공략: 접근 쉬운 캠프부터",
    body: "PC Gamer는 초반 거점 소탕용으로 남쪽 Daesong Ridge의 개방된 군사 캠프 두 곳을 추천합니다. 거점마다 난이도와 열쇠 요구 여부가 다릅니다. 마지막 적을 찾지 못하면 주변 지형을 확인하고, 진행이 막히면 다른 거점으로 이동하는 방법을 제안합니다. 매체의 추천 경로이며 현장 적 배치가 같다는 보장은 없습니다.",
    certainty: "unconfirmed", sources: ["dmz-compound-guide"],
  },
  {
    title: "루팅 준비: 가방의 Secure Slot 확인",
    body: "Windows Central은 루팅용 장비로 가방을 우선 살펴보라고 권합니다. 공식 FOB 안내도 일부 가방에 철수 실패 시 내용물을 보호하는 Secure Slot이 있다고 설명합니다. 슬롯이 있는지 인게임에서 확인하고 중요한 아이템의 보관 위치를 정하세요.",
    sources: ["dmz-backpack-guide", "dmz-cod-deep-dive-fob"],
  },
  {
    title: "패치 이후 자금 파밍: 작전 보상 기준 갱신",
    body: "10월 30일 공식 노트 기준 Dynamic Ops는 10,000–20,000 Cash, Side Ops는 2,000 Cash, 미션 단계는 완료당 500 Cash입니다. 예전 공략의 낮은 보상 수치와 구분하고, 현재 Orders 목표와 겹치는 작전을 고르는 데 참고하세요.",
    sources: ["dmz-cod-patch-notes"],
  },
];
