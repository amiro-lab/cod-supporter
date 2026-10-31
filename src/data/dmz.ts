// research_dmz.json(2026-10-31 조사) 기반 DMZ 데이터. 이후로는 이 파일을 직접 수정한다.
import type { Fact, InfoItem, InfoSection, NamedEntry, PatchNote, Source } from "@/lib/types";

/* ───────────── 출처 ───────────── */

export const dmzSources: Source[] = [
  {
    id: "dmz-cod-deep-dive-hajin",
    title: "DMZ Deep Dive, Part 1: Tour of Duty – Hajin Environments and Threats, Full Intel Guide",
    url: "https://www.callofduty.com/blog/2026/10/call-of-duty-modern-warfare-4-dmz-deep-dive-hajin",
    date: "2026-10-05",
    publisher: "Activision",
  },
  {
    id: "dmz-cod-deep-dive-fob",
    title: "DMZ Deep Dive, Part 2: How to Play – Forward Operating Base (FOB) Full Intel Guide",
    url: "https://www.callofduty.com/blog/2026/10/call-of-duty-modern-warfare-4-dmz-how-to-play-forward-operating-base-guide",
    date: "2026-10-09",
    publisher: "Activision",
  },
  {
    id: "dmz-cod-patch-notes",
    title: "Call of Duty: Modern Warfare 4 Launch Patch Notes",
    url: "https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes",
    date: "2026-10-30",
    publisher: "Activision",
  },
  {
    id: "dmz-cod-season1",
    title: "Modern Warfare 4 and Warzone Season 1: All You Need to Know",
    url: "https://www.callofduty.com/blog/2026/10/call-of-duty-modern-warfare-4-warzone-season-1-announcement",
    date: "2026-10-28",
    publisher: "Activision",
  },
  {
    id: "dmz-ps-blog",
    title: "Everything you need to know about DMZ mode in Call of Duty: Modern Warfare 4",
    url: "https://blog.playstation.com/2026/10/05/everything-you-need-to-know-about-dmz-mode-in-call-of-duty-modern-warfare-4/",
    date: "2026-10-05",
    publisher: "PlayStation Blog",
  },
  {
    id: "dmz-xbox-wire",
    title: "DMZ – New Intel on Call of Duty's Extraction Shooter Experience",
    url: "https://news.xbox.com/en-us/?p=222188",
    date: "2026-06-07",
    publisher: "Xbox Wire",
  },
  {
    id: "dmz-techradar-reveal",
    title: "Modern Warfare 4 comes with a sprawling extraction shooter",
    url: "https://www.techradar.com/gaming/modern-warfare-4-comes-with-a-sprawling-extraction-shooter-heres-how-dmz-is-more-than-just-an-extra-mode",
    date: "2026-06-07",
    publisher: "TechRadar",
  },
  {
    id: "dmz-players-ua-reveal",
    title: "Infinity Ward Brings Back DMZ in Modern Warfare 4 With Three Game Modes and a New Map",
    url: "https://players.com.ua/en/news/infinity-ward-brings-back-dmz-in-modern-warfare-4-with-three-game-modes-and-a-new-map/",
    date: "2026-06-08",
    publisher: "Players.com.ua",
  },
  {
    id: "dmz-meinmmo-bounties",
    title: "Call of Duty wants to conquer the extraction genre in MW4, putting bounties on rats",
    url: "https://mein-mmo.de/en/call-of-duty-wants-to-conquer-the-extraction-genre-in-modern-warfare-4-putting-bounties-on-rats,1571572/",
    date: "2026-06-06",
    publisher: "MeinMMO",
  },
  {
    id: "dmz-bo3gg-reveal",
    title: "MW4 Reveals New DMZ Screenshots and Major Gameplay Details",
    url: "https://bo3.gg/games/news/call-of-duty-modern-warfare-4-reveals-new-dmz-screenshots-and-major-gameplay-details",
    date: "2026-06-07",
    publisher: "bo3.gg",
  },
  {
    id: "dmz-inkl-beta-diff",
    title: "CoD dev details new MW4 DMZ features that distinguish it from beta version",
    url: "https://www.inkl.com/news/cod-dev-details-new-modern-warfare-4-dmz-features-that-distinguish-it-from-beta-version",
    publisher: "inkl (Dot Esports)",
  },
  {
    id: "dmz-pockettactics",
    title: "Modern Warfare 4 DMZ - everything you need to know",
    url: "https://www.pockettactics.com/call-of-duty-modern-warfare-4/dmz",
    date: "2026-10-04",
    publisher: "Pocket Tactics",
  },
  {
    id: "dmz-codmunity-whats-new",
    title: "MW4 DMZ vs MW2 DMZ",
    url: "https://codmunity.gg/dmz/whats-new",
    date: "2026-10-05",
    publisher: "CODMunity",
  },
  {
    id: "dmz-codmunity-progression",
    title: "MW4 DMZ Progression: Level 1 to 70",
    url: "https://codmunity.gg/dmz/progression",
    date: "2026-10-19",
    publisher: "CODMunity",
  },
  {
    id: "dmz-codmunity-guide",
    title: "MW4 DMZ beginner guide",
    url: "https://codmunity.gg/dmz/guide",
    date: "2026-10-24",
    publisher: "CODMunity",
  },
  {
    id: "dmz-codmunity-map",
    title: "MW4 DMZ Hajin Interactive Map",
    url: "https://codmunity.gg/dmz/map",
    publisher: "CODMunity",
  },
  {
    id: "dmz-gamerant-squad",
    title: "MW4 DMZ Player Count, Squad Sizes, & Solo Guide",
    url: "https://gamerant.com/mw4-dmz-player-count-squad-sizes-solo-guide/",
    date: "2026-10-20",
    publisher: "GameRant",
  },
  {
    id: "dmz-insider-players",
    title: "MW4 DMZ: how many players",
    url: "https://insider-gaming.com/modern-warfare-4-dmz-how-many-players/",
    date: "2026-10-21",
    publisher: "Insider Gaming",
  },
  {
    id: "dmz-dexerto-possum",
    title: "MW4 players already want OP 'second life' trait removed from DMZ",
    url: "https://www.dexerto.com/call-of-duty/mw4-players-already-want-op-second-life-trait-removed-from-dmz-3420638/",
    date: "2026-10-21",
    publisher: "Dexerto",
  },
  {
    id: "dmz-bestloadout-guide",
    title: "Modern Warfare 4 DMZ Ultimate Guide",
    url: "https://bestloadout.com/news/modern-warfare-4-dmz-ultimate-guide-everything-you-need-to-know-before-deploying",
    date: "2026-10-21",
    publisher: "BestLoadout",
  },
  {
    id: "dmz-insider-story",
    title: "All Modern Warfare 4 DMZ Story Missions & Rewards",
    url: "https://insider-gaming.com/modern-warfare-4-dmz-story-missions-rewards/",
    date: "2026-10-22",
    publisher: "Insider Gaming",
  },
  {
    id: "dmz-insider-bosses",
    title: "All Modern Warfare 4 DMZ Boss Locations & Rewards",
    url: "https://insider-gaming.com/modern-warfare-4-dmz-bosses-lieutenants-locations-rewards/",
    date: "2026-10-22",
    publisher: "Insider Gaming",
  },
  {
    id: "dmz-dexerto-solo",
    title: "Can you play DMZ solo in Modern Warfare 4?",
    url: "https://www.dexerto.com/wikis/modern-warfare-4/can-you-play-dmz-solo/",
    publisher: "Dexerto",
  },
  {
    id: "dmz-dexerto-exfil",
    title: "How to exfil in MW4 DMZ",
    url: "https://www.dexerto.com/wikis/modern-warfare-4/how-to-exfil/",
    publisher: "Dexerto",
  },
  {
    id: "dmz-dexerto-enemies",
    title: "MW4 DMZ enemy types explained",
    url: "https://www.dexerto.com/wikis/modern-warfare-4/enemy-types-explained/",
    publisher: "Dexerto",
  },
  {
    id: "dmz-conquestcapped",
    title: "MW4 DMZ Guide: Hajin Map, FOB, Exfil, Traits & Prestige",
    url: "https://conquestcapped.com/guides/call-of-duty/mw4-dmz/",
    date: "2026-10-26",
    publisher: "ConquestCapped",
  },
  {
    id: "dmz-game8",
    title: "DMZ Mode Guide",
    url: "https://game8.co/games/Call-of-Duty-Modern-Warfare-4/archives/630964",
    date: "2026-10-27",
    publisher: "Game8",
  },
  {
    id: "dmz-noobfeed",
    title: "Call of Duty: Modern Warfare 4 DMZ Beginner's Guide",
    url: "https://www.noobfeed.com/articles/cod-mw4-dmz-beginners-guide",
    date: "2026-10-27",
    publisher: "NoobFeed",
  },
  {
    id: "dmz-insider-s1-pvp-rumor",
    title: "New DMZ PvP content for Season 1 claimed",
    url: "https://insider-gaming.com/new-dmz-pvp-content-season-1-claimed/",
    date: "2026-10-27",
    publisher: "Insider Gaming",
  },
  {
    id: "dmz-gamerant-commanders",
    title: "MW4 DMZ: How to Beat All Commanders",
    url: "https://gamerant.com/mw4-dmz-all-commanders-colossus-deathstalker-tank-weaknesses-loot/",
    date: "2026-10-28",
    publisher: "GameRant",
  },
  {
    id: "dmz-gamerant-cash",
    title: "How to Farm Cash Fast in MW4 DMZ",
    url: "https://gamerant.com/call-of-duty-cod-modern-warfare-4-mw4-dmz-farm-cash-fast-how-to-guide/",
    date: "2026-10-28",
    publisher: "GameRant",
  },
  {
    id: "dmz-gamerant-exfil",
    title: "How to Safely Exfil in MW4 DMZ",
    url: "https://gamerant.com/call-of-duty-cod-modern-warfare-4-mw4-dmz-exfil-safely-how-to/",
    date: "2026-10-29",
    publisher: "GameRant",
  },
  {
    id: "dmz-insider-known-issues",
    title: "Call of Duty: Modern Warfare 4 known issues",
    url: "https://insider-gaming.com/call-of-duty-modern-warfare-4-known-issues/",
    date: "2026-10-29",
    publisher: "Insider Gaming",
  },
  {
    id: "dmz-gamerfuzion-ama",
    title: "MW4 DMZ new map X01, Hajin north expansion, no night mode at launch",
    url: "https://www.gamerfuzion.com/modern-warfare-4-dmz-new-map-x01-hajin-north-expansion-no-night-mode-at-launch/",
    publisher: "GamerFuzion",
  },
  {
    id: "dmz-insider-deployment-bonus",
    title: "MW4 DMZ Deployment Bonus",
    url: "https://insider-gaming.com/modern-warfare-4-dmz-deployment-bonus/",
    publisher: "Insider Gaming",
  },
  {
    id: "dmz-gamesgg-no-pve",
    title: "MW4 DMZ early access: no PvE",
    url: "https://games.gg/news/mw4-dmz-early-access-no-pve/",
    publisher: "games.gg",
  },
  {
    id: "dmz-timesaver-gearup",
    title: "Modern Warfare 4 DMZ not working: Gear Up order bug fix",
    url: "https://timesaver.gg/blog/modern-warfare-4-dmz-not-working-gear-up-order-bug-fix",
    publisher: "Timesaver",
  },
];

/* ───────────── 개요 한눈에 ───────────── */

export const dmzFacts: Fact[] = [
  {
    label: "모드 성격",
    value:
      "지속 성장 요소가 있는 PvPvE 익스트랙션 슈터다. 솔로나 분대로 Hajin에 출격해 AI와 다른 플레이어와 싸우고, 파밍·제작·목표 수행 후 엑스필해야 소지품을 지킨다.",
    sources: ["dmz-cod-deep-dive-fob"],
  },
  {
    label: "배경",
    value:
      "캠페인에 나온 원전 멜트다운 이후 주민이 떠난 한반도의 Hajin Exclusion Zone이 무대이며, 시점은 캠페인 직후다. 플레이어는 버려진 군사 기술을 회수하는 비공식 CIA 요원이고, 적은 비밀 북한 세력이다.",
    sources: ["dmz-techradar-reveal", "dmz-bo3gg-reveal", "dmz-cod-deep-dive-hajin"],
  },
  {
    label: "출시",
    value:
      "2026년 10월 23일 캠페인·멀티플레이와 함께 출시됐다. Standard·Vault Edition 디지털 예약 구매자는 2026년 10월 20일부터 DMZ 얼리 액세스를 플레이했다.",
    sources: ["dmz-cod-deep-dive-fob"],
  },
  {
    label: "플랫폼",
    value:
      "PS5, Xbox Series X|S, Xbox on PC, Battle.net, Steam, Nintendo Switch 2. PS4·Xbox One 버전은 없다.",
    sources: ["dmz-cod-deep-dive-fob", "dmz-pockettactics"],
  },
  {
    label: "무료 여부",
    value:
      "무료가 아니다. Modern Warfare 4 본편이 필요하며 DMZ 단독 제품은 없다(여러 매체 일치, 공식 명시 문구는 없음). 2022년 MW2 DMZ 베타는 무료였다.",
    sources: ["dmz-pockettactics", "dmz-conquestcapped", "dmz-inkl-beta-diff"],
  },
  {
    label: "최대 인원",
    value:
      "매치당 최대 60명(최대 20개 분대)이다. 분대가 덜 찼거나 로비가 다 차지 않으면 더 적다.",
    sources: ["dmz-insider-players", "dmz-gamerant-squad", "dmz-conquestcapped"],
  },
  {
    label: "분대 규모",
    value: "FOB에서 최대 3인으로 출격한다. 파티를 짜거나 Squad Fill로 채운다.",
    sources: ["dmz-gamerant-squad", "dmz-cod-deep-dive-hajin"],
  },
  {
    label: "합류 시 인원",
    value:
      "매치 중 Ping Wheel로 다른 분대와 합류(assimilate)할 수 있다. GameRant는 합류하면 4인 분대가 될 수 있다고 전한다.",
    sources: ["dmz-gamerant-squad", "dmz-cod-deep-dive-hajin"],
    certainty: "unconfirmed",
  },
  {
    label: "솔로",
    value:
      "가능하다. 출격 준비(Ready Up) 화면에서 Squad Fill을 끈다(L2/LT). 전용 솔로 큐는 없고, 매치메이킹은 솔로는 솔로끼리 묶으려 하지만 보장되지 않는다.",
    sources: ["dmz-dexerto-solo", "dmz-insider-players", "dmz-codmunity-guide"],
  },
  {
    label: "매치 시간",
    value:
      "공식 수치는 없다. HUD의 Time Remaining이 방사능 폭풍이 강해지는 시점을 보여준다. ConquestCapped는 방사능이 좁혀오기까지 약 30분, 이후 맵을 덮기까지 약 15분으로 추정한다.",
    sources: ["dmz-cod-deep-dive-hajin", "dmz-conquestcapped"],
    certainty: "unconfirmed",
  },
  {
    label: "출격 방식",
    value: "Story Missions, Dynamic Operations, Free Roam 3가지다.",
    sources: ["dmz-cod-deep-dive-fob", "dmz-players-ua-reveal", "dmz-techradar-reveal"],
  },
  {
    label: "MW2 DMZ와 차이",
    value:
      "메뉴 대신 걸어 다니는 FOB 허브, 물물교환 레시피 대신 3D Printer, 보험 슬롯·쿨다운 대신 DMZ Cash로 사는 Gunsmith, Trait 트리와 프레스티지가 있는 영구 Active Duty Operator, 등급별 진영 임무 대신 Story Missions·Dynamic Ops·Side Ops가 들어왔다. DMZ 전용 레벨(1–70)과 동적 날씨도 추가됐다.",
    sources: ["dmz-codmunity-whats-new", "dmz-inkl-beta-diff"],
  },
  {
    label: "시즌 1",
    value:
      "2026년 11월 6일 00:00 ET(한국 시간 11월 6일 오후 2시)에 시작한다. 신규 구역 X01과 신규 Lieutenant·Commander가 추가된다.",
    sources: ["dmz-cod-season1"],
  },
];

/* ───────────── 맵: Hajin ───────────── */

export const dmzMap: {
  name: string;
  nameKo?: string;
  summary: string;
  facts: Fact[];
  zones: NamedEntry[];
  locations: NamedEntry[];
} = {
  name: "Hajin",
  summary:
    "Hajin은 주요 POI 13곳과 60곳이 넘는 소규모 지명으로 이뤄진다. 서쪽은 시골·군사 시설 위주의 옛 북한 지역이고, 나머지는 Hajin City를 포함한 도시형 옛 남한 지역이다. 공식 면적 수치는 없지만 Al Mazrah보다 크다고 소개되며, 날씨는 맑음·비·뇌우·눈·안개 중 판마다 바뀐다.",
  facts: [
    {
      label: "면적",
      value:
        "공식 km² 수치는 없다. Infinity Ward와 매체는 Al Mazrah(MW2 DMZ·Warzone 2 맵)보다 크다고 설명한다.",
      sources: ["dmz-players-ua-reveal", "dmz-gamerfuzion-ama"],
    },
    {
      label: "향후 규모",
      value: "북부 지역이 열리면 IW 역대 최대 맵이 된다고 IW가 말했다는 2차 보도가 있다.",
      sources: ["dmz-gamerfuzion-ama"],
      certainty: "unconfirmed",
    },
    {
      label: "구성",
      value: "주요 POI 13곳과 이름 붙은 소규모 지역 60곳 이상으로 이뤄진다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      label: "지역 구분",
      value:
        "서쪽 POI는 옛 북한 지역(시골·군사 시설)이고, 나머지는 Hajin City를 포함한 옛 남한 지역(도시·현대식)이다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      label: "위협 수준",
      value:
        "POI마다 예상 위협 수준이 정해져 있다: 낮음(Low)·보통(Medium)·높음(High)·매우 높음(Critical)·극한(Extreme). 하위 구역도 각자 등급이 있다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      label: "Tac-Map 격자",
      value:
        "알파벳은 서→동, 숫자는 북→남으로 매긴다(예: D7 = Imjin Farmland). 모든 Key 설명에 격자 위치가 적혀 있다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      label: "북부 국경",
      value:
        "Hajin River 북쪽의 Russian Border는 현재 안개로 덮여 진입할 수 없다. 출시 전 보도는 구역이 남한·북한·러시아 일부를 아우른다고 소개했다.",
      sources: ["dmz-cod-deep-dive-hajin", "dmz-techradar-reveal"],
    },
    {
      label: "북부 확장",
      value:
        "IW가 2026년 10월 9일 Reddit AMA에서 러시아 국경과 북부가 열리면서 Hajin이 커진다고 말했다는 2차 보도가 있다. 일정은 나오지 않았다.",
      sources: ["dmz-gamerfuzion-ama"],
      certainty: "unconfirmed",
    },
    {
      label: "날씨",
      value: "맑음·비·뇌우·눈·안개의 동적 날씨가 판마다 달라진다.",
      sources: ["dmz-techradar-reveal", "dmz-pockettactics"],
    },
    {
      label: "야간 모드",
      value: "출시 시점에는 야간 모드가 없다(IW AMA 2차 보도).",
      sources: ["dmz-gamerfuzion-ama"],
      certainty: "unconfirmed",
    },
    {
      label: "대중교통",
      value:
        "자동 운행 열차가 남한 POI를 잇고, 고가 모노레일이 Hajin City를 돈다. 둘 다 플레이어가 조종하지 않는다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      label: "차량",
      value:
        "Camper, Sedan, Grizzly, Aston Martin Dreadnought, Polaris Dagor A1, LTV(.50 cal 선택), Cargo Truck, D50 Radar Flatbed(차량 UAV), RHIB 보트, Heli. Warzone과 달리 연료 보급과 수리가 필요하다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      label: "헬기",
      value:
        "Monarch는 인필·엑스필 전용 헬기이고, Heavy Chopper는 플레이어가 조종하는 일이 드물다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      label: "소규모 지명",
      value:
        "공식 공개: Hajin River, Tong-il Village, Revolution Dam, Pyonghwa Village, Imjin Suburb, Mujin Pass, Daesong Ridge, Namjin Riverside, Hanrim Village. CODMunity 지도에는 Jayon Warehouses, Songdo Pier, The Epic, Hotel Lucera 등도 있다.",
      sources: ["dmz-cod-deep-dive-hajin", "dmz-codmunity-map"],
    },
  ],
  zones: [
    {
      name: "14th Political Prison",
      tag: "높음~매우 높음",
      body:
        "Hajin 북서부(옛 북한) 고원 위의 콘크리트 교도소다. 위협은 Prison·The Fortress Prison Yard 높음, The Citadel 매우 높음이며, The Citadel은 감방 블록과 통로가 얽힌 Y자형 미로에 용광로가 있다. 가이드는 Lieutenant Warden이 The Citadel에 있다고 전한다.",
      sources: ["dmz-cod-deep-dive-hajin", "dmz-insider-bosses", "dmz-dexerto-enemies"],
    },
    {
      name: "Chang-san Air Base",
      tag: "매우 높음~극한",
      body:
        "Hajin 서부(옛 북한) 화강암 산비탈에 지은 공군기지로, 지상 기지보다 큰 지하 벙커 단지가 있다. 위협은 Air Base Exterior 매우 높음, Air Base Bunker 극한이다. Lieutenant Bale 위치는 CODMunity가 이곳 벙커, Insider Gaming·Dexerto가 Re-Education Center로 엇갈리며, Airbase Access Card 아이템이 있다.",
      sources: [
        "dmz-cod-deep-dive-hajin",
        "dmz-codmunity-guide",
        "dmz-insider-bosses",
        "dmz-dexerto-enemies",
        "dmz-cod-patch-notes",
      ],
    },
    {
      name: "Deadtown",
      tag: "낮음~보통",
      body:
        "Hajin 남서부(옛 북한)의 버려진 농촌 마을로, 하수도와 Clinic, 주유소 2곳이 있다. 위협은 Deadtown Exterior 낮음, Re-Education Center 보통이다. Insider Gaming·Dexerto는 Lieutenant Bale을 Re-Education Center에 두지만 CODMunity는 Chang-san Air Base로 본다.",
      sources: [
        "dmz-cod-deep-dive-hajin",
        "dmz-insider-bosses",
        "dmz-dexerto-enemies",
        "dmz-codmunity-guide",
      ],
    },
    {
      name: "Imjin Farmland",
      tag: "낮음~보통",
      body:
        "Hajin 남남서부(옛 남한)의 논밭 지대로 시야가 길게 트여 있다. 위협은 Farmland Exterior·Jeong Loading Dock 낮음, Rice Mill 보통이며, Rice Mill이 핵심 고지대다. NoobFeed는 입문자 지역으로 추천한다.",
      sources: ["dmz-cod-deep-dive-hajin", "dmz-noobfeed"],
    },
    {
      name: "Cheongun Village",
      tag: "낮음~높음",
      body:
        "진입 가능한 옛 남한 지역 중 가장 북쪽이다. Village·Russian Border Crossing·Cheongun Outskirts·Russian Border는 낮음, Heavenly Luck Casino는 높음이다. 카지노에는 지하 주차장, 어두운 도박장(NVG 권장), 금고가 있고, 가이드는 Lieutenant Jin-Tae가 이곳에 있다고 전한다.",
      sources: ["dmz-cod-deep-dive-hajin", "dmz-insider-bosses", "dmz-dexerto-enemies"],
    },
    {
      name: "Mirae General Hospital",
      tag: "낮음",
      body:
        "Hajin 북중부(옛 남한)의 다층 대형 병원으로 기차역과 붙어 있고, 내부는 근접전 위주다. 가이드는 Lieutenant The Doctor가 이곳에 있다고 전하며, Story Mission Critical Extraction이 Hospital Elevator를 쓴다.",
      sources: [
        "dmz-cod-deep-dive-hajin",
        "dmz-insider-bosses",
        "dmz-dexerto-enemies",
        "dmz-cod-patch-notes",
      ],
    },
    {
      name: "Cheonwang Peak Array",
      tag: "보통",
      body:
        "Hajin 중부(옛 남한) 산 정상의 통신 안테나 단지이자 DBN TV 방송국으로, 옥상 헬리패드가 있다. 가이드는 Lieutenant Iskra가 이곳에 있다고 전한다.",
      sources: ["dmz-cod-deep-dive-hajin", "dmz-insider-bosses", "dmz-dexerto-enemies"],
    },
    {
      name: "Haneul Nuclear Reactor",
      tag: "보통~높음",
      body:
        "Hajin 북동부(옛 남한)의 원자로로, 위협은 Reactor 높음(방사능), South Korean Border Zone 보통이다. 방사능 보호복과 방독면이 모두 필요하며, 물길이나 남서쪽 Compound Delta에서 이어진 터널로 들어갈 수 있다. 가이드는 Lieutenant The Chemist가 이곳에 있다고 전하고, Story Mission Fallen Ember 보상으로 Reactor DRC Locker Key가 보고된다.",
      sources: [
        "dmz-cod-deep-dive-hajin",
        "dmz-insider-bosses",
        "dmz-dexerto-enemies",
        "dmz-insider-story",
      ],
    },
    {
      name: "NuriGO Mall",
      tag: "보통~높음",
      body:
        "Hajin City 북동부(옛 남한)로, 위협은 NuriGO East 보통, NuriGO West 높음이다. 경찰서·Clinic·City Hall·모노레일역이 있고, 넓고 어두운 지하 쇼핑몰은 NVG가 필요하며 K9 로봇이 나온다. Dynamic Op Chemical Denial의 무대이며, Dexerto는 Commander Deathstalker를, CODMunity는 Lieutenant Jang-Ui를 이곳에 둔다.",
      sources: ["dmz-cod-deep-dive-hajin", "dmz-dexerto-enemies", "dmz-codmunity-guide"],
    },
    {
      name: "The Grid",
      tag: "매우 높음~극한",
      body:
        "Hajin City 중심부(옛 남한)의 강철 장벽으로 둘러싸인 요새화된 업무 지구로, Hajin에서 가장 높은 DBN TV 타워와 Hotel Lucera가 있다. 위협은 The Grid·DBN Headquarters·Hanex Bank·Minsok Art School·Construction Zone 매우 높음, Nenshin Tech Complex 극한이다(공식 블로그는 Nenshin과 Netshin을 혼용). 가이드는 Lieutenant Roze를 DBN Headquarters에, Jang-Ui를 Nenshin Tech Complex에 두지만 CODMunity는 Jang-Ui를 NuriGO Mall로 본다.",
      sources: [
        "dmz-cod-deep-dive-hajin",
        "dmz-insider-bosses",
        "dmz-dexerto-enemies",
        "dmz-codmunity-guide",
      ],
    },
    {
      name: "Songdo Wharf",
      tag: "낮음",
      body:
        "Hajin City 동부(옛 남한)로, Songdo Wharf·Oamsik Turtle Island·Shoreline Station 모두 낮음이다. 시장·부두·등대, La Grande Vie 아파트 타워, 기차역과 모노레일역이 있다. Dexerto는 Commander Colossus를 이곳에 둔다.",
      sources: ["dmz-cod-deep-dive-hajin", "dmz-dexerto-enemies"],
    },
    {
      name: "Wolves Stadium",
      tag: "보통",
      body:
        "Hajin City 남중부(옛 남한)로, Wolves Stadium·Theatre 모두 보통이다. 무너진 야구장, Police Station, 야외 극장이 있으며, The Grid와 맞닿은 북쪽 가장자리가 가장 위험하다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      name: "Hajin River Heights",
      tag: "보통",
      body:
        "Hajin 남동부(옛 남한)의 주거 지역으로, Hajin River Heights·South Island·Jinseo Park Towers 모두 보통이다. 건물 하나가 군사 기지 Compound Echo로 바뀌어 있다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
  ],
  locations: [
    {
      name: "Gas Stations / Marine Gas Stations",
      tag: "정비",
      body: "차량과 보트를 수리·주유하고, 들고 다니는 Gas Can을 채운다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      name: "Fire Stations",
      tag: "보호 장비 · 빨간색",
      body: "Radiation Gear와 Parachute를 찾을 수 있다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      name: "Police Stations",
      tag: "군용 장비 · 파란색",
      body: "군용 장비가 나오고 잠긴 Armory가 있다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      name: "Clinics",
      tag: "의료 · 초록색",
      body: "의료품이 나온다. 매복하는 적에 주의해야 한다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      name: "Ammo & Armor Caches",
      tag: "보급",
      body: "탄약과 Armor Plate를 채운다. 캐시마다 사용 후 쿨다운이 있다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      name: "UAV Towers",
      tag: "Side Op",
      body:
        "가동하면 Side Op 완료와 DMZ Cash를 얻고, 주변 Operator와 적을 드러내는 펄스가 나간다. 2026년 10월 23일 업데이트부터 적이 장악한 타워를 되찾을 수 있다.",
      sources: ["dmz-cod-patch-notes"],
    },
    {
      name: "Compounds",
      tag: "고위험 거점",
      body:
        "Compound Charlie·Delta·Echo 같은 중무장 군사 거점으로, 더 좋은 전리품과 정보가 있다. 시끄럽게 들어가면 적이 더 몰려오므로 잠입이 권장된다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      name: "SAM Sites",
      tag: "Side Op",
      body:
        "컴퓨터를 해킹하면 사이렌이 울리고, 이후 방어에 성공하면 점령한다. 점령한 SAM Site는 적 항공기를 공격하며 Deathstalker 상대로 특히 유용하다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      name: "Lieutenant Hunt towers",
      tag: "Side Op",
      body: "타워에 올라 노트북(Upload Station)을 쓰면 가장 가까운 Lieutenant가 표시된다.",
      sources: ["dmz-cod-deep-dive-fob"],
    },
    {
      name: "Bounty Stations",
      tag: "현상금",
      body:
        "견고한 노트북 단말이다. 현상금 목록은 무료로 보고, Wanted 플레이어 정보를 사거나 자신의 현상금을 갚을 수 있다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
    {
      name: "Exfils",
      tag: "탈출",
      body: "엑스필 지점은 후보 위치 중에서 활성화되며 초록 연기로 표시된다.",
      sources: ["dmz-cod-deep-dive-hajin"],
    },
  ],
};

/* ───────────── 출격 방식 ───────────── */

export const dmzModes: InfoItem[] = [
  {
    title: "스토리 미션",
    original: "Story Missions",
    body:
      "무한 반복할 수 있는 서사 미션으로, 같은 목표를 가진 플레이어끼리 매칭돼 협력하거나 싸울 수 있다. Insider Gaming 기준 출시 미션은 Critical Extraction·Silent Ledger·Shopping Hacks(처음부터), Iron Citadel·Grid Assault(앞 3개 완료 후), Fallen Ember(5개 모두 완료 후)이며, 각각 25,000 DMZ Cash와 Key·아이템을 주고 일부는 인필 차량을 해금한다. 일회성 해금은 중복되지 않으며, GameRant는 대부분 완료 시 무료 엑스필을 준다고 전한다.",
    sources: [
      "dmz-cod-deep-dive-fob",
      "dmz-players-ua-reveal",
      "dmz-insider-story",
      "dmz-gamerant-exfil",
    ],
  },
  {
    title: "다이내믹 작전",
    original: "Dynamic Operations",
    body:
      "출격 메뉴에서 바로 고르거나 필드의 Dynamic Ops 전화기로 시작하는 다단계 목표로, Chemical Denial·Toxic Intercept·Broken Resupply·Hunt Operator·Domino Protocol 등이 있다. 완료할 때마다 DMZ XP·Cash와 Supply Drop을 주며, 같은 출격에서 이어서 완료할수록 Supply Drop 등급이 Common→Uncommon→Rare로 오른다. GameRant·ConquestCapped에 따르면 보상 현금은 완료 즉시 은행에 들어가 이후 사망해도 남는다.",
    sources: [
      "dmz-cod-deep-dive-hajin",
      "dmz-game8",
      "dmz-gamerant-cash",
      "dmz-conquestcapped",
      "dmz-cod-patch-notes",
    ],
  },
  {
    title: "자유 탐색",
    original: "Free Roam",
    body:
      "임무 없이 출격해 Hajin City와 주변을 돌아다닌다. IW는 3D Printer 재료 파밍, Wanted Operator 사냥, DMZ Orders 진행에 추천한다. 출시 전에는 다른 분대의 Story Mission을 방해하는 샌드박스로도 소개됐다.",
    sources: ["dmz-cod-deep-dive-fob", "dmz-players-ua-reveal"],
  },
  {
    title: "사이드 옵스 (매치 내 활동)",
    original: "Side Ops",
    body:
      "출격 방식이 아니라 어떤 출격에서든 할 수 있는 가벼운 활동으로, 잃어버린 Supply Drop 찾기, 트럭 수리(UAV를 줄 수 있음), 무전·Lieutenant Hunt 타워 오르기, UAV Tower 가동, SAM Site 점령 등이 있다. DMZ XP·자원·정보와 현금을 주며, 2026년 10월 30일 패치 후 건당 2,000 DMZ Cash다. CODMunity는 Side Ops까지 ‘4가지 플레이 방식’으로 분류하지만 공식 출격 메뉴의 선택지는 3개다.",
    sources: ["dmz-cod-deep-dive-hajin", "dmz-codmunity-guide", "dmz-cod-patch-notes"],
  },
  {
    title: "‘세 가지 모드’의 의미",
    original: "Three game modes",
    body:
      "2026년 6월 공개 당시의 ‘세 가지 모드’는 DMZ의 출격 방식 3종(Story Missions, Dynamic Operations, Free Roam)을 뜻한다. 일부 매체는 DMZ를 MW4의 3대 핵심 모드(캠페인·멀티플레이·DMZ) 중 하나라는 뜻으로도 쓴다.",
    sources: ["dmz-players-ua-reveal", "dmz-techradar-reveal", "dmz-cod-deep-dive-fob"],
  },
  {
    title: "PvE 전용 모드 없음",
    original: "PvE",
    body:
      "PvE 전용 DMZ 모드는 없다. 출시 전 목격된 PvE 옵션은 개발자 전용 플레이리스트였다는 보도가 있으나 확인되지 않았다.",
    sources: ["dmz-gamesgg-no-pve", "dmz-cod-deep-dive-fob"],
  },
];

/* ───────────── 메커니즘·시스템 ───────────── */

export const dmzSections: InfoSection[] = [
  {
    id: "core-loop",
    title: "인필·엑스필·사망 규칙",
    intro: "출격에서 탈출, 사망 시 손실까지 한 판의 기본 흐름이다.",
    items: [
      {
        title: "인필 방식",
        original: "Infil options",
        body:
          "Dynamic Ops와 Free Roam에서는 Ground(무료, 무작위 지점 도보), Polaris Dagor A1(5,000 DMZ Cash, 경차량 공중 투하), LTV(25,000, 중장갑 차량), Helicopter(50,000, 분대가 함께 타고 1명이 조종), Cargo Plane(100,000, 강하 지점 직접 선택) 중 고른다. Insider Gaming 보상 목록 기준 LTV·Helicopter·Cargo Plane은 각각 Story Mission Iron Citadel·Grid Assault·Fallen Ember로 해금된다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-insider-story"],
      },
      {
        title: "출격 준비와 Free Loadout",
        original: "Ready Up / Free Loadout",
        body:
          "출격 전 Free Loadout 장착, 로드아웃 편집, Active Duty Operator 교체, Squad Fill 설정을 할 수 있다. Free Loadout 아이템은 엑스필하면 남지만, 죽으면 Operator는 그대로 MIA가 된다. IW 권장 최소 장비는 Plate Carrier·Backpack·무기·Medkit이며, Free Loadout 구성은 ConquestCapped가 1판 조끼·소총·권총·수류탄 몇 개, CODMunity가 가방·낙하산 없음으로 전한다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-conquestcapped", "dmz-codmunity-guide"],
      },
      {
        title: "기본 엑스필(헬기)",
        original: "Twin Heli Exfil",
        body:
          "엑스필 지점은 후보 위치 중에서 열리고 초록 연기로 표시된다. Twin Heli Exfil 헬기를 부른 뒤 점점 거세지는 적의 공세를 버티며 지점을 지키다 탑승한다. 호출 소리가 커서 AI와 다른 분대를 끌어들인다.",
        sources: ["dmz-cod-deep-dive-hajin"],
      },
      {
        title: "엑스필 타이머·지점 수",
        body:
          "공식 수치는 없다. CODMunity는 솔로 탑승 후 5초, 분대 30–45초(전원 탑승 시 5초)로 전한다. ConquestCapped는 동시 활성 지점 3곳, 30초 후 이륙(전원 탑승 시 5초)으로 전한다.",
        sources: ["dmz-codmunity-guide", "dmz-conquestcapped"],
        certainty: "unconfirmed",
      },
      {
        title: "대체 엑스필: Flare·Fulton",
        original: "Exfil Flare / Fulton Drop Marker",
        body:
          "Exfil Flare는 어디서든 현재 위치로 헬기를 부르지만 매우 시끄럽고 멀리서도 보인다. Fulton Drop Marker는 지나가는 비행기가 와이어를 낚아채는 휴대용 엑스필로, Field Upgrade라 가방 칸을 쓰지 않으며 GameRant는 가장 안전한 엑스필로 본다. Fulton은 루팅, Vendor 구매(판매 순환 시), 제작(Deathstalker가 떨어뜨리는 Prototype RF Module 1개 + Comms Module 3개 + Control Unit 5개)으로 얻고, Vault Edition 키트에 2개가 들어 있다.",
        sources: ["dmz-cod-deep-dive-hajin", "dmz-dexerto-exfil", "dmz-gamerant-exfil"],
      },
      {
        title: "최종 엑스필과 방사능 폭풍",
        original: "Final exfil / radiation storm",
        body:
          "HUD의 Time Remaining은 방사능 폭풍이 강해지는 시점을 보여주고, 퍼지는 방사능은 Tac-Map에 표시된다. 매치 후반에는 ‘최종 엑스필(final exfil)’을 계속 확인해야 한다.",
        sources: ["dmz-cod-deep-dive-hajin"],
      },
      {
        title: "최종 엑스필 세부(가이드 보도)",
        body:
          "CODMunity는 방사능 경계가 노란 원으로 시작해 맵 가장자리로 이동하며 최종 엑스필 위치를 암시한다고, ConquestCapped는 최종 엑스필이 정해진 시각에 떠나며 기내에 방독면이 있다고 전한다. GameRant에 따르면 Final Intel 특성은 시작부터 최종 엑스필을 표시하고 언제든 호출하게 해 주며, 방사능이 지점에 닿기 직전에 호출해도 헬기는 온다.",
        sources: ["dmz-codmunity-guide", "dmz-conquestcapped", "dmz-gamerant-exfil"],
        certainty: "unconfirmed",
      },
      {
        title: "Story Mission 엑스필",
        body:
          "GameRant에 따르면 대부분의 Story Mission은 완료 시 무료 엑스필을 준다. GameRant가 꼽은 보장 엑스필은 Critical Extraction·Silent Ledger·Shopping Hacks(Medium), Iron Citadel(Critical), Fallen Ember(Extreme)다.",
        sources: ["dmz-gamerant-exfil"],
        certainty: "unconfirmed",
      },
      {
        title: "다운·Last Stand·MIA",
        original: "Last Stand / MIA",
        body:
          "다운되면 Last Stand 상태가 되고 팀원이 부활시키거나 엄폐물로 끌어갈 수 있으며(끌기는 출시 전 정보), 각자 가진 Tourniquet 1개로 Self-Revive 없이 일어날 수 있다. 이렇게 일어나면 Medkit으로 치료할 때까지 Wounded 상태(CODMunity 기준 최대 체력 150→100)가 된다. Operator가 제거되면 MIA가 되어 복구 전까지 출격할 수 없고, 복구 비용은 Trait Point에 비례하며 Trait과 Dog Tag는 남지만 장비 없이 돌아온다(해고하고 새로 시작해도 된다).",
        sources: ["dmz-cod-deep-dive-fob", "dmz-xbox-wire", "dmz-codmunity-guide"],
      },
      {
        title: "남는 것과 잃는 것",
        body:
          "엑스필 실패나 사망 시 로드아웃과 Backpack 내용물(Secure Slot 제외)을 잃는다. Stash, 은행에 들어간 DMZ Cash, 그 판에서 얻은 DMZ XP(사망해도 깎이지 않음), DMZ 레벨, Dynamic Op 현금은 남고, 소지 현금은 엑스필에 성공해야 입금된다. Recipe와 Weapon Manual은 엑스필 시 소모되며 자동 해금되고 각각 5,000 DMZ Cash를 준다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-xbox-wire", "dmz-gamerant-cash"],
      },
      {
        title: "Mission Item 슬롯",
        original: "Mission Item slot",
        body: "Story·Dynamic Op 임무 아이템은 전용 슬롯에 자동으로 들어가 가방 칸을 차지하지 않는다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "After Action Report",
        original: "After Action Report",
        body:
          "성공 여부와 관계없이 매 출격 후 표시되며, Objectives·Combat·Looting을 바탕으로 F~S++ 등급을 매긴다. AI 처치·미션·상자·Side Ops 수를 집계하고 XP를 DMZ 레벨과 Dog Tag 레벨에 반영한다. PlayStation Blog에 따르면 S 등급 이상에서 최고 보상을 받는다.",
        sources: ["dmz-cod-deep-dive-hajin", "dmz-ps-blog"],
      },
    ],
  },
  {
    id: "loadout-risk",
    title: "보험·가방·장비 손실",
    intro: "무엇을 들고 나가고, 죽었을 때 무엇을 지킬 수 있는지 정리한다.",
    items: [
      {
        title: "Backpack과 Secure Slot",
        original: "Backpacks & Secure Slots",
        body:
          "가방이 없으면 Basic Pack(8칸)을 쓰고, 모든 가방에는 별도 자원 주머니가 있다. Small Backpack(Synthetics 25 + Metals 25)은 칸을 늘리고, Medium Backpack(Synthetics 50 + Rigid Synthetics 5)은 엑스필에 실패해도 내용물이 남는 Secure Slot을 더한다(공식 칸 수는 미공개, CODMunity·ConquestCapped는 1칸). Weapon Backpack은 무기 칸을 추가해 평소 2정+근접무기 외에 3번째 총을 가지고 나올 수 있게 하며, 더 높은 등급 가방도 있다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-codmunity-guide", "dmz-conquestcapped"],
      },
      {
        title: "보험·밀수품",
        original: "Weapon Insurance Contract / Operator Rescue Beacon",
        body:
          "IW 설명에는 MW2식 무기 보험 슬롯이나 ‘contraband’ 시스템이 없다. Vault Edition Deployment Kit에 Weapon Insurance Contract 2개와 Operator Rescue Beacon 2개가 있고, 가이드는 Beacon이 MIA 복구 비용을 면제하고 Contract가 한 번의 출격 동안 무기를 보호한다고 하지만 IW는 작동 방식을 문서화하지 않았다. CODMunity는 한 번의 출격 동안 Operator나 무기를 보호하는 ‘Recovery slot’을 언급한다.",
        sources: [
          "dmz-cod-deep-dive-fob",
          "dmz-insider-deployment-bonus",
          "dmz-codmunity-guide",
        ],
        certainty: "unconfirmed",
      },
      {
        title: "Key와 잠긴 방",
        original: "Keys",
        body:
          "Key는 특별한 전리품 방을 열며, 설명에 격자 위치가 적혀 있다. Lieutenant는 개인 전리품 방 Key를 떨어뜨릴 수 있고 그 방에는 보통 그의 무기가 있으며, Police Station에는 잠긴 Armory가 있다. Story Mission은 Mirae Electrical Room Key, Counting Room Vault Key, Coin Mining Den Key, Roze's Highrise Armory Key, Reactor DRC Locker Key와 Supreme Leader's Bunker Access Card, Airbase Access Card 등을 주며, Key는 Secure Slot에 두는 편이 안전하다.",
        sources: ["dmz-cod-deep-dive-hajin", "dmz-insider-story", "dmz-conquestcapped"],
      },
      {
        title: "체력·방탄·플레이트",
        original: "Plate Carriers",
        body:
          "최대 체력은 150이고 자동 회복되며, 인필 시 Armor 슬롯이 플레이트로 자동 충전된다. 더 많은 플레이트를 가져가려면 슬롯을 늘리는 Trait이나 Armor Box Field Upgrade가 필요하다. Plate Carrier는 1-Plate·2-Plate(초반 제작 가능)부터 3-Plate(DMZ 레벨 37 보상) 이상까지 있고 일부는 한 방 사망을 막거나 강화 플레이트를 쓰며, CODMunity는 Tempered Armor Vest까지 8종으로 센다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-xbox-wire", "dmz-codmunity-guide"],
      },
      {
        title: "낙하산",
        original: "Parachute",
        body:
          "Parachute는 전용 로드아웃 슬롯을 쓴다. ConquestCapped에 따르면 기본으로는 없어 낙하로 죽을 수 있으므로 Fire Station, 3D Printer, Survival Kit에서 구해야 한다. Disposable Parachute는 2026년 10월 23일 업데이트부터 3회 쓸 수 있다.",
        sources: ["dmz-cod-patch-notes", "dmz-conquestcapped"],
      },
      {
        title: "Field Upgrade 재충전 없음",
        original: "Field Upgrades",
        body: "DMZ에서는 Field Upgrade가 재충전되지 않는다.",
        sources: ["dmz-pockettactics"],
        certainty: "prelaunch",
      },
      {
        title: "전리품과 손상 무기",
        original: "Loot",
        body:
          "상자·캐시·사물함·금고·열차·거점·잠긴 방에서 전리품이 나오고, 잡동사니는 자동으로 4가지 자원으로 분해된다. 장소 유형에 따라 전리품이 달라 경찰서는 전투 장비, 병원·Clinic은 의료품, 주거지는 제작 재료가 나온다. Hajin에서 주운 무기는 부착물 슬롯이 최대 8개일 수 있고, 손상된 무기는 상태에 따라 성능이 떨어진다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-pockettactics"],
      },
    ],
  },
  {
    id: "enemies",
    title: "AI·보스·거점",
    intro: "Hajin의 적 세력, 위협 시스템, 보스와 위험 지역 정보다.",
    items: [
      {
        title: "AI 세력과 등급",
        original: "North Korean faction",
        body:
          "적은 비밀 북한 세력으로, Tier 1 Grunt, Tier 2 방탄 병사, Tier 3 방탄+방독면 병사, Tier 4 ‘Faceless’ 방탄 병사로 나뉜다. 이 밖에 자율 전투 드론 떼, 자율 LMG 드론, K9 4족 로봇(주로 지하), 공격 헬기 순찰, 도로 호송대, Lieutenant, Commander, 적 플레이어가 있고 ‘[CLASSIFIED]’ 항목도 있다.",
        sources: ["dmz-cod-deep-dive-hajin"],
      },
      {
        title: "위협 수준",
        original: "Threat Level",
        body:
          "모든 POI에는 나침반 아래 표시되는 위협 수준(낮음~극한)이 있다. 전투와 소란이 위협을 올려 헬기·차량으로 더 강하고 많은 적이 오며, 교전 이탈·은신·잠입으로 낮출 수 있다. 다른 플레이어 처치는 위협에 반영되지 않는다.",
        sources: ["dmz-cod-deep-dive-hajin", "dmz-techradar-reveal"],
      },
      {
        title: "Hostiles Kill Count와 Marked for Death",
        original: "Hostiles Kill Count / Marked for Death",
        body:
          "HUD 미터가 그 출격의 AI 처치 수를 센다. 미터가 차면 적 Hunt Squad가 추격해 오고 ‘Marked for Death’ 상태가 되며, 기준 처치 수는 공개되지 않았다.",
        sources: ["dmz-cod-deep-dive-hajin"],
      },
      {
        title: "은신 미터",
        original: "Stealth meter",
        body:
          "AI에게 발각되는 정도를 흰색→노란색→주황색 미터로 보여준다. 근접 공격, 투척 나이프, 소음기 사격으로 은신 처치가 가능하며, CODMunity는 이를 솔로 플레이에 유리한 요소로 본다.",
        sources: ["dmz-xbox-wire", "dmz-cod-deep-dive-hajin", "dmz-codmunity-whats-new"],
      },
      {
        title: "Lieutenant(보스)",
        original: "Lieutenants",
        body:
          "고유 로드아웃과 호위병을 거느린 고가치 보스로, 처치하면 XP·DMZ Cash와 함께 시그니처 무기와 Key가 나올 수 있고 Lieutenant Dog Tag Case는 반드시 나온다. Case를 주우면 내 위치가 모두에게 알려진다(ConquestCapped 기준 약 5초마다). Case를 들고 엑스필하면 다른 플레이어에게서 빼앗은 것이라도 Boss Board 진행도가 오른다.",
        sources: ["dmz-cod-deep-dive-hajin", "dmz-conquestcapped"],
      },
      {
        title: "Lieutenant 위치·보상(가이드 보도)",
        body:
          "Insider Gaming·Dexerto 기준 위치는 Gorani(Mujin Pass), The Chemist(Haneul Nuclear Reactor), Jin-Tae(Heavenly Luck Casino), The Doctor(Mirae General Hospital), Bale(Re-Education Center), Iskra(Cheonwang Peak Array), Scavenger(죽은 플레이어 근처 배회), Roze(DBN Headquarters), Jang-Ui(Netshin Tech Complex), Warden(The Citadel)이다. Bale은 CODMunity가 Chang-san Air Base 벙커로 보고 공식 설정도 Chang-san Air Base의 Spetsnaz 출신으로 소개하며, Jang-Ui는 CODMunity가 NuriGO Mall로 본다. GameRant는 Lieutenant별 첫 처치 보상 10,000, Dog Tag 엑스필 반복 보상 25,000으로 전한다.",
        sources: [
          "dmz-insider-bosses",
          "dmz-dexerto-enemies",
          "dmz-codmunity-guide",
          "dmz-cod-deep-dive-hajin",
          "dmz-gamerant-cash",
        ],
        certainty: "unconfirmed",
      },
      {
        title: "Commander(보스)",
        original: "Commanders",
        body:
          "항상 맵에 있으며 돌아다니는 보스로, 가까이 오면 Tac-Map에 표시된다. Colossus는 열화우라늄 미니건을 든 7피트(약 2.1m) 방탄 병사, Deathstalker는 쌍열 기관총 포탑을 단 헬기만 한 자율 드론, Tank는 북한군 주력 전차다. 종류별 첫 처치 시 DMZ Cash를 주고, 엑스필하면 귀한 3D Printer 재료를 얻는다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "Commander 드롭·위치(가이드 보도)",
        body:
          "가이드에 보고된 드롭은 Colossus=Military Composites, Deathstalker=Prototype RF Module, Tank=Nano-Structured Alloy이며 확정 드롭은 아니다. 위치는 GameRant가 무작위라고 하는 반면, Dexerto는 Colossus를 Cheongun Village·Songdo Wharf에, Deathstalker를 NuriGO Mall·DBN HQ에 둔다.",
        sources: ["dmz-gamerant-commanders", "dmz-dexerto-enemies"],
        certainty: "unconfirmed",
      },
      {
        title: "Boss Board",
        original: "Boss Board",
        body:
          "두 번째 DMZ Order를 마치면 열린다. Lieutenant 정보는 특정 도전 과제를 먼저 끝낸 뒤 DMZ Cash로 사며 한 번의 출격 동안 유지되고(CODMunity는 약 25,000을 낸 사례를 전함), Commander 정보는 무료라 따로 살 필요가 없다. 진행도는 Lieutenant Dog Tag Case를 엑스필해 채우고 반복 완료 시 추가 보상이 있으며, 출시 전 정보로는 시즌마다 Lieutenant를 하나씩 지워 나가는 구조다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-xbox-wire", "dmz-codmunity-guide"],
      },
      {
        title: "방사능과 가스",
        original: "Radiation",
        body:
          "Haneul Nuclear Reactor는 방사능 보호복과 방독면이 모두 있어야 하며, 없으면 중상이나 사망을 각오해야 한다. 방사능 폭풍은 매치가 진행되며 Hajin 전역으로 퍼지고, 대응 장비로 Radiation Blocker(소모품, 3D 프린트 가능)와 Durable Gas Mask가 있다. 2026년 10월 23일부터 방독면이 방사능 속에서 바로 깨지지 않지만, CODMunity는 원자로 붉은 구역이 방독면을 빠르게 소모한다고 전한다.",
        sources: ["dmz-cod-deep-dive-hajin", "dmz-cod-patch-notes", "dmz-codmunity-guide"],
      },
    ],
  },
  {
    id: "progression",
    title: "FOB·프레스티지·미션",
    intro: "출격 사이의 거점(FOB)과 장기 성장 요소다.",
    items: [
      {
        title: "Forward Operating Base (FOB)",
        original: "Forward Operating Base",
        body:
          "출격 사이에 걸어 다니는 허브로, 처음부터 Operators(Active Duty), DMZ Orders, Stash/Loadout, 사격장(10m 미만~100m 초과 표적), Survival Kits, Bounty Leaderboard, DMZ Progression, Events, Deploy를 쓸 수 있다. 3D Printer(DMZ 레벨 2), Boss Board(두 번째 DMZ Order 후), Vendor(레벨 5), Gunsmith(레벨 10), Dog Tag Case(레벨 20)는 해금이 필요하며, CODMunity 진행 표는 3D Printer를 레벨 1로 적어 차이가 있다. 시즌 1에 Battle Pass·Store 스테이션이 추가된다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-codmunity-progression", "dmz-cod-season1"],
      },
      {
        title: "Stash와 공유 자원",
        original: "Stash",
        body:
          "Stash는 아이템 40칸 + 무기 12칸(별도 계산)으로 시작하며, 모든 Active Duty Operator가 Stash·DMZ Cash·자원·재료를 공유한다. DMZ 레벨(CODMunity: 레벨 22·45·70에 아이템 +18칸, 레벨 35·60에 무기 +6칸)과 3D Printer 업그레이드로 늘어난다. 2026년 10월 25일 패치부터 Overflow Stash를 정리해야 출격할 수 있다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-codmunity-progression", "dmz-cod-patch-notes"],
      },
      {
        title: "Active Duty Operator",
        original: "Active Duty Operators",
        body:
          "처음에 Operator 슬롯 2개(Vault Edition은 3개)가 있고 DMZ 레벨로 늘어난다(CODMunity: 레벨 15에 +1). Operator는 해고 전까지 슬롯에 고정되고 같은 Operator를 두 슬롯에 둘 수 없으며, 각자 로드아웃·가방·Dog Tag·Trait을 가진다. Dog Tag 등급은 Steel·Bronze·Silver·Gold·Damascus·Onyx(각 I~III, 총 18단계)이고 단계마다 Trait Point 1점(최대 18점)을 준다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-codmunity-progression"],
      },
      {
        title: "Trait(특성)",
        original: "Traits",
        body:
          "Warfighter·Scout·Survivalist 3개 트리에 총 66개 Trait이 있고, 트리마다 22개(항상 보이는 Major 6개 + 무작위 Minor 16개) 중 가지당 1개씩 최대 9개를 고른다. 선택은 영구적이어서 18점으로 두 트리를 완성하거나 셋에 나눠야 하며, Trait이 많을수록 MIA 복구 비용이 오른다. 주요 예시는 Warfighter의 Adrenaline Burst·Equipment Professional·Combat Resistance·Viper Sense·Quick Fix·Possum, Scout의 Investor·Hostile Looter·Container Looter·Thermal Padding·UAV Upgrade·Overwatch·Field Crafting, Survivalist의 Air Superiority·Faster Revive·Consumable Duration·Impact Smokes·Free Revive·Numb the Pain·Die Hard다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "Possum과 너프",
        original: "Possum",
        body:
          "Warfighter Trait으로, 매치당 한 번 완전히 죽은 상태에서 체력을 최대로 회복한 채 Last Stand로 스스로 일어난다. 출시 직후 사기라는 반응이 나왔고(Dexerto, 2026년 10월 21일), 2026년 10월 28일 패치로 자신을 처치한 팀이 근처에 있는 동안이나 4분이 지나기 전에는 발동하지 않게 바뀌었다(IW는 조정 가능한 수치라고 밝힘). IW는 Possum을 전투 수단이 아닌 고레벨 Operator의 ‘두 번째 기회’로 설명한다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-dexerto-possum", "dmz-cod-patch-notes"],
      },
      {
        title: "Operator 프레스티지",
        original: "DMZ Operator Prestige",
        body:
          "Trait Point 18점을 모은, MIA가 아닌 Operator만 프레스티지할 수 있다. 1차에는 부착물 슬롯 3개짜리 무기 2정, Rare Plate Carrier, Rare Backpack, Rare 3D Printer 재료 4개, 200,000 DMZ Cash가 들고, 2차는 슬롯 4개 무기·Epic 아이템·300,000, 3차 이후는 Legendary 아이템·500,000이 든다. 프레스티지마다 Trait이 초기화되고 무작위 영구 Prestige Trait(최대 3개)을 얻으며, 4차부터는 새 Trait을 제안받아 교체할 수 있고 여러 Operator를 프레스티지하면 Calling Card와 ‘[CLASSIFIED]’ 보상이 열린다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "DMZ Orders",
        original: "DMZ Orders",
        body:
          "DMZ의 핵심 임무 목록으로 Page 단위로 구성되며(패치 노트에 Page 19 언급), 입문 안내와 스토리를 맡고 자원·전리품·현금을 준다. 첫 Order는 ‘Gear Up’이고, 온보딩 미션은 Breaking New Ground다. 패치 노트에는 Philanthropist·Information Power·Ears Everywhere가 등장하며, 가이드는 ‘No One Left’도 전한다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-cod-patch-notes"],
      },
      {
        title: "Story Mission 보상",
        original: "Story Missions",
        body:
          "Insider Gaming 기준 Critical Extraction(Mirae Electrical Room Key, Defibrillator), Silent Ledger(Gold Bar, Counting Room Vault Key, Polaris Dagor A1), Shopping Hacks(Coin Mining Den Key, NVG), Iron Citadel(Supreme Leader's Bunker Access Card, LTV), Grid Assault(Roze's Highrise Armory Key, Helicopter), Fallen Ember(Reactor DRC Locker Key, Cargo Plane)이며 모두 25,000 DMZ Cash를 준다. 2026년 10월 29일 패치로 Story Mission 반복 시 현금 보상이 올랐다(금액 미공개). 패치 노트와 가이드에는 ‘Dark Zone’ Story Mission, ‘Fallout’ 미션, ‘Underground’·‘Counterfeit’ 챕터도 언급된다.",
        sources: ["dmz-insider-story", "dmz-cod-patch-notes"],
      },
      {
        title: "DMZ 레벨(1–70)",
        original: "DMZ Progression",
        body:
          "DMZ 전용 70레벨 트랙으로, Story Mission·Dynamic Ops·Side Ops·루팅·전투(플레이어 처치가 AI보다 많음)·보스에서 XP를 얻는다. DMZ XP는 전체 플레이어 레벨(1–55)에도 반영되지만, 멀티플레이·Warzone XP는 DMZ 레벨에 들어가지 않는다. CODMunity 표 기준 주요 보상은 레벨 5 Vendor, 10 Gunsmith, 13 UAV, 15 Operator 슬롯 +1, 20 Dog Tag Case, 25 Gunsmith 5% 할인, 37 3-Plate Armor Vest(패치 노트로 확인), 70 Legendary Advanced SERE Kit다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-codmunity-progression", "dmz-cod-patch-notes"],
      },
      {
        title: "멀티플레이·Warzone과 공유되는 것",
        original: "Shared progression",
        body:
          "무기 레벨, 부착물 해금, 무기 위장 진행은 멀티플레이·DMZ가 공유하며 시즌 1부터 Warzone도 포함된다. Special Camo 도전 과제는 모드에 맞게 바뀌고 한 모드에서 얻으면 모든 모드에서 쓸 수 있으며, DMZ에는 별도 Mastery Camo가 있다. DMZ 무기 접근권(Weapon Manual), DMZ 레벨, Stash, 현금은 공유되지 않는다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-cod-patch-notes"],
      },
      {
        title: "Survival Kit",
        original: "Survival Kits",
        body:
          "열기 전까지 쌓아 둘 수 있는 테마별 전리품 꾸러미로 Deployment·Triage·Armor·Equipment·SERE Kit가 있으며, DMZ 레벨·Orders·미션·이벤트로 얻는다. Vault Edition Deployment Kit에는 Weapon Insurance Contract, Operator Rescue Beacon, Fulton Drop Marker, Medium Backpack, 2-Plate Carrier가 2개씩 들어 있다. 시즌 1 Battle Pass와 BlackCell에도 DMZ Survival Kit가 포함된다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-cod-season1"],
      },
    ],
  },
  {
    id: "crafting",
    title: "3D 프린터·건스미스",
    intro: "자원으로 장비를 만드는 3D Printer와 DMZ Cash로 무기를 사는 Gunsmith가 두 축이다.",
    items: [
      {
        title: "3D Printer 기본",
        original: "3D Printer",
        body:
          "DMZ 레벨 2에 열리며(CODMunity 표는 레벨 1), Recipe와 자원(Synthetics·Electronics·Chemicals·Metals, 자동 분해되고 칸을 쓰지 않음), 3D Printer 재료(Binding Catalyst·Biomaterials·Detonators·Control Units·Reactive Metals·Rigid Synthetics 등)가 필요하다. Recipe는 DMZ 레벨, DMZ Orders, 또는 루팅한 Recipe를 엑스필해 얻는다. 출력물은 Stash나 Operator에게 바로 보낼 수 있고, Recipe를 추적하면 재료가 나오는 곳을 알려준다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-codmunity-progression"],
      },
      {
        title: "제작 분류와 해금 레벨",
        body:
          "분류는 Upgrades, Consumables, Plate Carriers, Backpacks, Tacticals, Lethals, Field Upgrades, Fire Support(킬스트릭), Gear(방독면·NVG·낙하산), Ingredients이며, CODMunity에 따르면 총기는 출력할 수 없다. CODMunity 기준 분류별 해금 레벨은 Tacticals 4, Lethals 7, Field Upgrades 12, Fire Support 28이다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-codmunity-guide", "dmz-codmunity-progression"],
      },
      {
        title: "초기 Recipe",
        body:
          "초기 Recipe는 Bandage(Synthetics 15·Chemicals 15), Medkit(Chemicals 30 + Binding Catalyst 1 + Biomaterials 5), 1-Plate Vest(Synthetics 25·Metals 25), 2-Plate Vest(Synthetics 50 + Reactive Metals 5), Small Backpack(Synthetics 25·Metals 25), Medium Backpack(Synthetics 50 + Rigid Synthetics 5)이다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "FOB 영구 업그레이드",
        body:
          "3D Printer로 은행 한도, Stash 아이템·무기 칸, MIA 복구 할인, 희귀 재료 출력, Dog Tag Case 칸, Gunsmith 할인, Vendor 선택지를 영구 업그레이드한다. 일부 귀중품은 이 업그레이드의 재료이므로 팔기 전에 확인해야 한다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "Gunsmith(DMZ)",
        original: "Gunsmith",
        body:
          "DMZ 레벨 10에 열리며 무기와 부착물을 DMZ Cash로 산다. 부착물 접근은 멀티플레이와 공유되는 무기 레벨을 따르고 멀티플레이에서 해금한 부착물도 이어지며, 부착물은 최대 5개 + Apex 슬롯(무기 최대 레벨 시 무료)이고 슬롯을 늘릴수록 비싸진다. 기본 무기를 반복 구매하려면 먼저 해당 Weapon Manual을 엑스필해야 하며, 루팅해 가져온 총은 그 한 자루뿐이다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "무기 목록과 비용",
        body:
          "출시 무기는 32종(AR 8, SMG 5, Shotgun 2, LMG 3, Marksman 3, Sniper 3, Pistol 4, Launcher 4)이며 Launcher는 부착물이 없고, M4 기본형은 약 5,000 DMZ Cash다. 꾸미기 요소는 무료다(2026년 10월 24일 일부 위장·조준선에 현금이 부과되던 버그 수정). 보유 Blueprint는 한 번 무료로 쓰고 이후 할인가로 다시 사며, ‘Gunny’가 빌드를 추천한다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-cod-patch-notes"],
      },
      {
        title: "부착물 슬롯 비용",
        body:
          "CODMunity는 트레일러 기준 슬롯당 약 1,000이라고 전한다. 한 플레이어가 5번째 슬롯에 50,000을 냈다는 사례도 있으나 확인되지 않았다.",
        sources: ["dmz-codmunity-guide"],
        certainty: "unconfirmed",
      },
    ],
  },
  {
    id: "bounty",
    title: "현상금·PvP",
    intro: "플레이어를 죽인 ‘Killer’와 그를 쫓는 ‘Hunter’의 현상금 시스템이다.",
    items: [
      {
        title: "현상금이 붙는 방식",
        original: "Bounty",
        body:
          "플레이어를 처치하면 즉시 현상금이 붙고 Dog Tag에 Operator 처치 수와 함께 표시된다. 현상금 증가에는 누가 먼저 쐈는지, 수적으로 불리했는지 등이 반영돼 정당방위는 ‘ratting(쥐 플레이)’과 다르게 취급된다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-meinmmo-bounties"],
      },
      {
        title: "Wanted와 Bounty Station",
        original: "Wanted / Bounty Stations",
        body:
          "여러 출격에 걸쳐 Operator 4명을 처치하면 Wanted가 되고, 가까이 있는 플레이어에게 경고가 뜨며 등급은 ‘Most Wanted’까지 오른다. Hunter는 Bounty Station에서 로비 내 Wanted 목록을 무료로 보고, Wanted 등급에 비례한 DMZ Cash로 위치 정보를 산다. 정보는 줄어드는 원으로 표시되는데 대상의 Wanted 등급이 높을수록 빨리 줄고 자주 갱신되며, 최상위 대상은 모두에게 보일 수 있다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "현상금 수령과 소멸",
        body:
          "대상을 처치하고 그 Dog Tag를 들고 엑스필하면 현상금을 받으며, 금액은 현상금 등급에 비례하고 최대 Wanted에서는 보너스가 붙는다. 내 현상금은 사망 후 엑스필 실패, 적이 내 Dog Tag를 엑스필, Bounty Station에서 갚기 중 하나로 사라진다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "현상금 수치(트레일러 기준)",
        body:
          "CODMunity가 트레일러에서 읽은 수치로는 현상금 감소 5,000, 6번째 처치 후 100,000, 8번째 처치 후 250,000이며 공식 확인은 없다. CODMunity 레벨 표 기준 현상금 보상 보너스는 DMZ 레벨 30에 +10%, 50에 +50%, 70에 +100%다.",
        sources: ["dmz-codmunity-guide", "dmz-codmunity-progression"],
        certainty: "unconfirmed",
      },
      {
        title: "Bounty Leaderboard와 Dog Tag Case",
        original: "Bounty Leaderboard / Dog Tag Case",
        body:
          "FOB의 Bounty Leaderboard는 Most Wanted 상위 50명(주간 갱신)과 Bounty Hunter 상위 50명을 전체 또는 친구 기준으로 보여준다. Dog Tag Case(DMZ 레벨 20)는 엑스필한 플레이어 Dog Tag를 등급·피해자·처치자·시간과 함께 보관하고 즐겨찾기할 수 있으며, 업그레이드로 칸과 현상금 보상이 늘어난다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "근접 음성 채팅·휴전·합류",
        original: "Proximity chat / Truce / Assimilation",
        body:
          "근접 음성 채팅은 거리에 따른 감쇠, 방향, 실내 잔향이 적용된다. Ping Wheel로 다른 분대에 휴전(Truce)을 요청하거나 합류(assimilate)할 수 있다.",
        sources: ["dmz-cod-deep-dive-hajin", "dmz-xbox-wire"],
      },
      {
        title: "레벨별 PvP 빈도",
        body:
          "GameRant는 DMZ 레벨 20부터 적대 플레이어 분대를 더 자주 만난다고 전한다. 2026년 10월 30일 PvP 조우를 늘리는 매치메이킹 변경이 있었다는 BestLoadout 헤드라인도 있으나, 공식 패치 노트에서는 확인되지 않는다.",
        sources: ["dmz-gamerant-squad", "dmz-cod-patch-notes"],
        certainty: "unconfirmed",
      },
    ],
  },
  {
    id: "economy",
    title: "현금·상점·뱅크",
    intro: "DMZ Cash를 벌고, 맡기고, 쓰는 방법이다.",
    items: [
      {
        title: "DMZ Cash와 입금",
        original: "DMZ Cash",
        body:
          "DMZ Cash가 DMZ의 유일한 화폐다. 소지 현금은 엑스필에 성공해야 은행에 들어가고, Dynamic Op 현금은 완료 즉시 입금된다. 귀중품을 팔아 현금을 얻을 수 있지만 일부는 FOB 업그레이드 재료다.",
        sources: ["dmz-cod-deep-dive-fob"],
      },
      {
        title: "은행 한도",
        original: "Bank",
        body:
          "은행에는 한도가 있고, 넘는 금액은 경고 없이 사라진다. 한도 수치는 출처마다 달라 CODMunity는 출시 시 약 1,000,000(다음 업그레이드 2,000,000), ConquestCapped는 100,000에서 시작해 1,000,000까지 업그레이드된다고 전한다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-codmunity-guide", "dmz-conquestcapped"],
        certainty: "unconfirmed",
      },
      {
        title: "현금 수입(2026년 10월 30일 기준)",
        body:
          "Dynamic Op 10,000–20,000(이전 5,000–10,000), Side Op 2,000(이전 500), 미션 단계당 500(이전 300)이다. Story Mission은 25,000, Recipe·Weapon Manual은 엑스필 시 각 5,000을 준다. 패치 전 Dynamic Op 수치는 CODMunity·ConquestCapped가 이미 10,000–20,000으로 적어 공식 노트와 엇갈린다.",
        sources: [
          "dmz-cod-patch-notes",
          "dmz-insider-story",
          "dmz-cod-deep-dive-fob",
          "dmz-codmunity-guide",
          "dmz-conquestcapped",
        ],
      },
      {
        title: "Vendor",
        original: "Vendor",
        body:
          "DMZ 레벨 5에 열리며 무기와 장비를 DMZ Cash로 판다. 재고는 매일 바뀌고 DMZ 레벨과 Vendor 업그레이드(CODMunity: 레벨 18)로 좋아지며, 시즌 1부터 BlackCell 보유자는 추가 재고를 받는다.",
        sources: ["dmz-cod-deep-dive-fob", "dmz-codmunity-progression", "dmz-cod-season1"],
      },
      {
        title: "매치 내 구매소",
        original: "Buy Station",
        body:
          "공식 DMZ 자료에는 MW2식 매치 내 Buy Station이 없다. 구매는 FOB의 Vendor와 Gunsmith에서 하고, 매치 안에서는 Bounty Station에서 정보 구매와 현상금 상환에 현금을 쓴다. CODMunity 지도에 ‘buy stations’ 레이어가 있지만 위치나 세부 정보는 없다.",
        sources: ["dmz-cod-deep-dive-hajin", "dmz-codmunity-map"],
      },
    ],
  },
];

/* ───────────── 팁 ───────────── */

export const dmzTips: InfoItem[] = [
  {
    title: "출격마다 Plate Carrier·Backpack·무기·Medkit을 챙겨라",
    body:
      "IW가 직접 권장한 최소 출격 장비다. Medkit이 있어야 부상을 치료하고 Last Stand에서 Tourniquet을 제대로 활용할 수 있다.",
    sources: ["dmz-cod-deep-dive-fob"],
  },
  {
    title: "맵에 익숙해질 때까지 Free Loadout으로 나가라",
    body:
      "공짜 장비로 죽으면 Stash에서 잃는 것이 없고 XP는 그대로 남는다. 엑스필에 성공하면 Free Loadout 아이템도 내 것이 된다.",
    sources: ["dmz-conquestcapped"],
  },
  {
    title: "위협이 낮은 POI부터 익혀라",
    body:
      "Imjin Farmland·Cheongun Village·Mirae General Hospital·Songdo Wharf 같은 곳은 중장갑 AI 증원 부담 없이 시스템을 배우기 좋다. Chang-san Air Base나 The Grid 같은 매우 높음·극한 지역은 그다음이다.",
    sources: ["dmz-noobfeed"],
  },
  {
    title: "초반엔 Story Mission·Dynamic Ops·DMZ Orders를 우선하라",
    body:
      "XP와 장비 보상이 가장 크다. Order 목표가 미션 단계와 겹치는 경우가 많아, 분대의 현재 Order에 맞는 Story Mission을 고르면 한 번에 둘 다 진행된다.",
    sources: ["dmz-ps-blog"],
  },
  {
    title: "한 출격에서 Dynamic Op를 연달아 하라",
    body:
      "완료할 때마다 다음 Supply Drop 등급이 Common→Uncommon→Rare로 오른다. 2026년 10월 30일 패치 후 10,000–20,000인 보상 현금은 완료 즉시 입금돼 이후 죽어도 남는다.",
    sources: ["dmz-cod-patch-notes", "dmz-cod-deep-dive-hajin"],
  },
  {
    title: "자원 상자는 다 열되 루팅에만 매달리지 마라",
    body:
      "자원은 자동 분해돼 가방 칸을 쓰지 않는다. After Action Report 등급(F~S++)은 전투·루팅·목표의 균형을 보고, S 등급 이상이어야 최고 보상을 받는다.",
    sources: ["dmz-cod-deep-dive-hajin", "dmz-ps-blog"],
  },
  {
    title: "Medium Backpack을 일찍 만들어 Secure Slot을 써라",
    body:
      "Secure Slot에 넣은 Key·Recipe·Weapon Manual은 엑스필에 실패해도 남는다. Recipe와 Manual은 엑스필하면 영구 해금되고 각각 5,000 DMZ Cash도 준다.",
    sources: ["dmz-conquestcapped"],
  },
  {
    title: "귀중품은 팔기 전에 업그레이드 재료인지 확인하라",
    body:
      "Gold Bar·Gold Skull·정보 문서 같은 귀중품은 은행·Stash·MIA 할인 등 FOB 영구 업그레이드에 쓰인다. 은행 한도를 넘겨 판 금액은 그대로 사라진다.",
    sources: ["dmz-gamerant-cash"],
  },
  {
    title: "초반 현금은 Silent Ledger로 벌어라",
    body:
      "GameRant는 카지노 금고 작전 Silent Ledger를 난이도는 낮고 보상은 큰 미션으로 꼽는다. 자물쇠를 따서 Cash Bag을 트럭에 싣고 Jin-Tae가 나오면 처치하면 되며, Cash Bag 가치는 분대원끼리 나누므로 솔로일수록 몫이 크다.",
    sources: ["dmz-gamerant-cash"],
  },
  {
    title: "소음기·근접 공격으로 조용히 움직여라",
    body:
      "시끄럽게 싸우면 POI 위협과 Hostiles Kill Count가 올라 Hunt Squad가 붙고(‘Marked for Death’), 소리를 들은 주변 분대도 몰려온다. 위협이 오르면 시야를 끊고 빠지는 것이 낫다.",
    sources: ["dmz-cod-deep-dive-hajin"],
  },
  {
    title: "엑스필 지점은 매복지라고 생각하라",
    body:
      "헬기 호출은 소리가 크고 다른 분대가 엑스필 지점을 노리므로, 호출 전에 주변을 먼저 정찰한다. 매치 후반에는 남은 플레이어가 적어 탈출이 수월할 수 있다.",
    sources: ["dmz-gamerant-exfil"],
  },
  {
    title: "안전하게 나가려면 Fulton이나 Story Mission 엑스필을 써라",
    body:
      "Fulton Drop Marker는 Field Upgrade 슬롯을 쓰는 휴대용 엑스필이다. Exfil Flare는 멀리서도 보이므로 몰려올 적을 감당할 수 있을 때만 쓴다.",
    sources: ["dmz-gamerant-exfil"],
  },
  {
    title: "Lieutenant Dog Tag Case를 주웠다면 곧장 엑스필하라",
    body:
      "Case는 내 위치를 모든 Operator에게 알린다. 감당하기 어렵다면 두고 가도 처치 XP와 현금은 이미 받은 상태다.",
    sources: ["dmz-cod-deep-dive-hajin"],
  },
  {
    title: "Commander는 약점을 노려라",
    body:
      "Colossus는 위를 조준하지 못하니 고지대에서 쏘거나 Thermite·Shock Stick으로 묶고, Deathstalker는 점령한 SAM Site로 끌어들이거나 발사기를 쓰며, Tank에는 Impact Warhead Fire Support나 RPG가 통한다. 일반 무기는 잘 안 통하고, Colossus 상대 Drill Charge 피해는 2026년 10월 25일 패치로 줄었다.",
    sources: ["dmz-gamerant-commanders", "dmz-cod-patch-notes"],
  },
  {
    title: "솔로라면 Squad Fill을 끄고 자가 부활 수단을 챙겨라",
    body:
      "살려 줄 팀원이 없으니 Tourniquet·Possum·Self-Revive Kit가 유일한 안전망이고, 시끄러우면 분대가 몰려온다. 근접 음성 채팅으로 다른 솔로와 팀을 맺는 방법도 있다.",
    sources: ["dmz-dexerto-solo"],
  },
  {
    title: "두 번째 Operator를 운반용으로 굴려라",
    body:
      "현금·Stash·자원은 모든 Operator가 공유하므로 위험한 판은 보조 Operator로 나가도 된다. MIA 복구 비용이 Trait Point에 비례하니 험하게 굴리는 Operator에는 Trait을 과하게 쏟지 않는다.",
    sources: ["dmz-cod-deep-dive-fob", "dmz-xbox-wire"],
  },
  {
    title: "낙하산과 원자로용 보호 장비를 챙겨라",
    body:
      "낙하산 없이 시작할 수 있고 높은 곳에서 떨어지면 죽는다. 원자로는 방사능 보호복과 방독면이 둘 다 없으면 치명적이며, Fire Station이 좋은 공급처다.",
    sources: ["dmz-conquestcapped"],
  },
  {
    title: "Shopping Hacks를 일찍 깨서 NVG를 얻어라",
    body:
      "보상으로 Night Vision Goggles를 준다. NuriGO 지하나 카지노처럼 전기가 끊긴 주요 실내가 여럿 있다.",
    sources: ["dmz-conquestcapped"],
  },
  {
    title: "초반 자원은 가방·의료품·방탄에 써라",
    body: "생존력이 오르고 판마다 더 많은 전리품을 가지고 나올 수 있다.",
    sources: ["dmz-bestloadout-guide"],
  },
  {
    title: "첫 Order ‘Gear Up’ 전에는 시작 장비를 팔지 마라",
    body:
      "출시 직후 시작 장비를 판 플레이어가 진행 불가에 빠지는 버그가 있었다(2026년 10월 20일 수정). 필요한 Backpack·Vest·Medkit을 팔면 Gear Up이 완료되지 않는다는 보고도 있다.",
    sources: ["dmz-cod-patch-notes", "dmz-timesaver-gearup"],
  },
];

/* ───────────── 시즌 1 ───────────── */

export const dmzSeason1: InfoItem[] = [
  {
    title: "시즌 1 시작",
    original: "Season 1",
    body:
      "2026년 11월 6일 00:00 ET(태평양 시간 11월 5일 21:00, 한국 시간 11월 6일 오후 2시)에 시작한다. 같은 시즌에 Hajin이 Warzone에도 들어간다.",
    sources: ["dmz-cod-season1"],
  },
  {
    title: "신규 구역 X01",
    original: "X01",
    body:
      "Hajin 북쪽 국경에 있는 GRANIT Arms의 비밀 시설(black site)이다. 지하 연구소와 봉인된 Deep Vault가 있으며, 공식 블로그는 Deep Vault가 엑스필을 봉쇄한다고 설명한다.",
    sources: ["dmz-cod-season1"],
  },
  {
    title: "X01 PvP 중심 맵 루머",
    original: "X01",
    body:
      "DETONATED발 루머(Insider Gaming 보도, 2026년 10월 26–27일)는 X01이 MW2의 Building 21 같은 소규모 PvP 중심 맵이라고 주장한다. 공식 블로그는 X01을 폐쇄형 터널·비밀 시설로만 소개하며 PvP 중심이라고 하지 않았다.",
    sources: ["dmz-insider-s1-pvp-rumor", "dmz-cod-season1"],
    certainty: "unconfirmed",
  },
  {
    title: "신규 DMZ Orders",
    original: "DMZ Orders",
    body: "Ghost가 Watcher를 맡는 새 DMZ Orders가 추가된다.",
    sources: ["dmz-cod-season1"],
  },
  {
    title: "신규 Lieutenant",
    original: "Lieutenants",
    body: "Tae-Hyun(‘Knuckle’)과 Chol-Min(‘The Wrench’)이 추가된다.",
    sources: ["dmz-cod-season1"],
  },
  {
    title: "신규 Commander",
    original: "Commanders",
    body: "정예 호위대를 거느린 Juggernaut ‘The Captain’과 자율 순찰하는 Wheelson이 추가된다.",
    sources: ["dmz-cod-season1"],
  },
  {
    title: "Threat Briefing 이벤트",
    original: "Threat Briefing",
    body: "Battle Tank와 The Captain을 다루는 Threat Briefing 이벤트가 열린다.",
    sources: ["dmz-cod-season1"],
  },
  {
    title: "Resupply Run 이벤트",
    original: "Resupply Run",
    body: "Resupply Run 이벤트가 추가된다.",
    sources: ["dmz-cod-season1"],
  },
  {
    title: "FOB Battle Pass·Store 스테이션",
    original: "Battle Pass / Store station",
    body:
      "FOB에 Battle Pass와 Store 스테이션이 생긴다. 시즌 1 Battle Pass와 BlackCell에는 DMZ Survival Kit가 포함된다.",
    sources: ["dmz-cod-season1"],
  },
  {
    title: "BlackCell 전용 Vendor 재고",
    original: "BlackCell",
    body: "BlackCell 보유자는 Vendor에서 추가 재고를 볼 수 있다.",
    sources: ["dmz-cod-season1"],
  },
  {
    title: "Warzone과 위장 진행 공유",
    original: "Camo progression",
    body: "시즌 1부터 무기 위장 진행이 멀티플레이·DMZ에 더해 Warzone과도 공유된다.",
    sources: ["dmz-cod-deep-dive-fob", "dmz-cod-patch-notes"],
  },
];

/* ───────────── 패치 (최신순) ───────────── */

export const dmzPatches: PatchNote[] = [
  {
    date: "2026-10-30",
    title: "현금 보상 수치 조정 및 버그 수정",
    changes: [
      "Dynamic Op 보상: 5,000–10,000 → 10,000–20,000 DMZ Cash",
      "Side Op 보상: 500 → 2,000 DMZ Cash",
      "미션 단계당 보상: 300 → 500 DMZ Cash",
      "Broken Resupply 작전에서 미션 아이템이 나오지 않던 문제 수정",
      "Boss Board 정보 구매 실패로 Information Power Order가 막히던 문제 수정",
      "Hunt Operator 작전의 타이머 누락 수정",
      "FOB에서 칼 공격을 연타하면 튕기던 문제 수정",
    ],
    sources: ["dmz-cod-patch-notes"],
  },
  {
    date: "2026-10-29",
    title: "현금 보상 상향 및 버그 수정",
    changes: [
      "Dynamic Ops·Side Ops·Story Mission 반복 보상 현금 상향",
      "Scavenger Lieutenant가 출격 직후 플레이어를 감지하던 문제 수정",
      "적 헬기가 엑스필 헬기와 충돌하던 문제 수정",
      "접속이 끊긴 팀원의 Dog Tag를 내 Dog Tag Case로 엑스필할 수 있던 문제 수정",
      "분대원의 행동도 DMZ Mastery Camo 도전 과제에 반영",
      "합류(assimilate) 후 인질을 들 수 없던 문제와 Lieutenant Tower 상호작용 표시 누락 수정",
      "Ears Everywhere Order 음성 기록 생성 문제와 Stash가 가득 차면 Free Loadout을 쓸 수 없던 문제 수정",
      "익스플로잇 차단, 지형 끼임 지점 수정",
      "알려진 문제: DMZ 레벨 37을 이미 넘긴 플레이어의 3-Plate Armor Vest 소급 지급은 작업 중",
      "알려진 문제(Insider Gaming 보도): 일부 플레이어가 Active Duty Operator 프레스티지에 진입하지 못함(조사 중, 우회법 없음)",
    ],
    sources: ["dmz-cod-patch-notes", "dmz-insider-known-issues"],
  },
  {
    date: "2026-10-28",
    title: "Possum 너프 및 로드아웃·엑스필 수정",
    changes: [
      "Possum: 자신을 처치한 팀이 근처에 있는 동안이나 4분이 지나기 전에는 발동 불가(조정 가능한 수치)",
      "Possum이 버려진 Operator를 되살리거나 분대 전멸 후 검은 화면이 뜨던 문제 수정",
      "출격 중 Backpack으로 3D 프린트하면 Free Loadout이 사라질 수 있던 문제 수정",
      "DMZ 레벨 37 보상 3-Plate Armor Vest 지급(이후 도달자부터)",
      "무기를 Backpack으로 옮기거나 슬롯을 바꿀 때 떨어지거나 사라지던 문제 수정",
      "Secure Slot에 둔 Airbase Access Card가 Story Mission에서 업그레이드되지 않던 문제 수정",
      "익스플로잇 다수 차단",
      "알려진 문제: DMZ 메뉴로 Classic Prestige에 들어가면 다시 잠긴 클래스를 지우기 전까지 멀티플레이 새 클래스를 만들 수 없음",
    ],
    sources: ["dmz-cod-patch-notes"],
  },
  {
    date: "2026-10-25",
    title: "Colossus 조정 및 버그 수정",
    changes: [
      "Colossus 상대 Drill Charge 피해 감소",
      "Critical Extraction에서 Hospital Elevator 목표를 건너뛸 수 있던 문제 수정",
      "수정한 Blueprint로 만든 저장 빌드가 과다 청구되던 문제 수정",
      "출격 전 Overflow Stash를 반드시 정리하도록 변경",
      "Boss Board에서 마우스를 올리면 Lieutenant 정보 요구 조건이 사라지던 문제 수정",
      "Breaking New Ground 관련 수정, Sedan 누락과 Crashed Drone에 AI가 끼던 문제 수정",
      "DMZ 익스플로잇 다수 차단",
    ],
    sources: ["dmz-cod-patch-notes"],
  },
  {
    date: "2026-10-24",
    title: "버그 수정 및 익스플로잇 차단",
    changes: [
      "파티장이 동의 없이 팀원을 DMZ에서 끌어내 Operator가 MIA 처리되던 문제 수정",
      "엑스필 헬기가 플레이어를 태운 채 사라지던 문제 수정",
      "DMZ Gunsmith에서 일부 위장·조준선을 적용하면 DMZ Cash가 차감되던 문제 수정",
      "DMZ 무기 빌드가 일반 멀티플레이에서 쓸 수 있는 것처럼 표시되던 문제 수정",
      "Dark Zone Story Mission의 목표 표시 오류와 Shopping 미션 증원 과다 생성 수정",
      "Philanthropist Order(Page 19) 주간 진행 추적 수정",
      "루팅한 Dog Tag·현상금 정보가 잘못 표시되던 문제 수정",
      "익스플로잇 차단, 바위 끼임 지점과 FOB 맵 밖 이탈 수정",
      "알려진 문제: PC에서 루팅한 Dog Tag를 들고 엑스필하면 네트워크 오류 발생",
    ],
    sources: ["dmz-cod-patch-notes"],
  },
  {
    date: "2026-10-23",
    title: "출시일 업데이트",
    changes: [
      "안정성·연결 끊김 수정",
      "Lieutenant 정보 구매가 추적 중인 Order에 반영되도록 수정",
      "현상금 추적과 FOB 업그레이드 도전 과제 추적 수정",
      "Lieutenant Hunt 진행도가 다른 분대에 표시되지 않도록 수정",
      "‘Dynamic Op 8분 이내’ 요구 조건 문구 수정",
      "Numb the Pain·Pro 설명 수정",
      "Disposable Parachute 3회 사용으로 변경, 방독면(Durable 포함)이 방사능에서 바로 깨지지 않도록 수정",
      "제거된 Operator가 킬스트릭을 추가로 떨어뜨리지 않도록 수정",
      "‘Fallout’ 미션에서 AI 헬기가 공중에 멈추던 문제 수정",
      "적이 장악한 UAV Tower를 다시 빼앗을 수 있도록 변경",
      "알려진 문제: 적 AI 차량이 운전자 없이 움직이거나 끼는 현상(수정 적용 중)",
    ],
    sources: ["dmz-cod-patch-notes"],
  },
  {
    date: "2026-10-21",
    title: "출시 패치",
    changes: [
      "Dog Tag Case를 열 때 나던 오류 수정",
      "Toxic Intercept 작전이 Defend the Bomb 이후 실패하던 문제 수정",
      "PC에서 Heartbeat Sensor 사용 시 성능 저하 수정",
      "NK Wilderness 인필 중 AI 차량이 플레이어를 치던 문제 수정",
      "메뉴 글자 크기를 크게 하면 Dynamic Ops 문구가 깨지던 문제 수정",
      "End Game Report의 Orders 보상이 저해상도로 표시되던 문제 수정",
      "Breaking New Ground의 의도치 않은 음성 대사 수정",
    ],
    sources: ["dmz-cod-patch-notes"],
  },
  {
    date: "2026-10-20",
    title: "DMZ 얼리 액세스 수정",
    changes: [
      "Breaking New Ground(온보딩)에서 문을 돌파할 때 나던 크래시 등 크래시 수정",
      "첫 매치 후 After Action Report에 XP가 0으로 표시되던 문제 수정",
      "DMZ에서 ISO Apex 부착물이 작동하지 않던 문제 수정",
      "Story Mission 완료가 두 번 인정되던 문제 제거",
      "Commander 처치 XP·‘King Slayer’ 진행을 분대 전체가 공유(이전에는 마지막 일격만 인정)",
      "다운 시 Impact Smokes Pro Trait이 발동하지 않던 문제 수정",
      "Dynamic Op 키패드 코드가 잠긴 공간에 생성되던 문제 수정",
      "인필 중 AI 차량이 플레이어를 치던 문제 수정",
      "3D Printer에서 Recipe 추적을 해제하면 FOB에서 튕기던 문제 수정",
      "첫 출격 전 시작 장비를 팔거나 시작 장비를 가진 Operator를 해고하면 진행 불가가 되던 문제 수정",
      "Switch 2: Chemical Denial 작전 안내 누락과 저장된 Blueprint 개조 구매 불가 수정",
      "바위 끼임, FOB 그림자 팝인, Gunsmith 메뉴가 화면에 남던 문제 수정",
    ],
    sources: ["dmz-cod-patch-notes"],
  },
];

/* ───────────── 미확인·상충 정보 ───────────── */

export const dmzOpenQuestions: string[] = [
  "Hajin의 정확한 면적(km²)과 Al Mazrah 대비 크기: 공식 수치가 없고 ‘약 15% 더 크다’는 수치는 검증되지 않았다.",
  "매치 길이와 방사능·최종 엑스필 시간: 가이드 추정치(약 30분 + 약 15분)뿐이다.",
  "매치당 활성 엑스필 지점 수(ConquestCapped는 3곳)와 정확한 카운트다운: 공식 자료에 없다.",
  "출시 시 은행 한도: CODMunity(약 1,000,000, 다음 단계 2,000,000)와 ConquestCapped(100,000에서 1,000,000까지 업그레이드)가 다르다.",
  "패치 전 Dynamic Op 보상: 2026년 10월 30일 공식 노트는 5,000–10,000이었다고 하지만, CODMunity(2026년 10월 24일)와 ConquestCapped(2026년 10월 26일)는 이미 10,000–20,000으로 적었다.",
  "3D Printer 해금 레벨: 공식은 DMZ 레벨 2, CODMunity 진행 표는 레벨 1이다.",
  "Vault Edition 아이템 Weapon Insurance Contract·Operator Rescue Beacon의 작동 방식: 공식 문서가 없고, 출격마다 소모되는지도 가이드마다 다르다.",
  "가방 등급별 Secure Slot 수: 공식 수치가 없다(Medium Backpack은 1칸으로 알려짐).",
  "Operator 4명 처치 이후의 Wanted 등급 기준, 현상금 금액, 상환 비용: CODMunity가 전한 트레일러 수치뿐이다.",
  "Lieutenant 위치: Bale(Re-Education Center vs Chang-san Air Base Bunker)과 Jang-Ui(Netshin/Nenshin Tech Complex vs NuriGO Mall)가 가이드마다 다르다.",
  "Commander 출현 위치: GameRant는 무작위라고 하고, Dexerto는 고정 지역을 제시한다.",
  "‘Marked for Death’를 일으키는 Hostiles Kill Count 기준: 공개되지 않았다.",
  "DMZ Cash가 게임 안에서 원(Won)으로 표시되는지: GameRant는 ‘Won’, IW는 ‘DMZ Cash’로 쓴다.",
  "PvP 조우를 늘리는 DMZ 매치메이킹 변경(BestLoadout 헤드라인, 2026년 10월 30일): 공식 노트에서 찾을 수 없어 미확인이다.",
  "시즌 1 X01이 MW2 Building 21 같은 소규모 PvP 중심 맵이라는 루머(DETONATED, Insider Gaming 경유, 2026년 10월 26–27일): 미확인이다. 공식 블로그는 폐쇄형 터널·비밀 시설로만 설명한다.",
  "Hajin 북부·러시아 국경이 열리는 시기(IW AMA, GamerFuzion 경유): 날짜가 없다.",
  "야간 모드·야간 출격: 출시 시점엔 없다고 전해지며, 추가 계획은 확인되지 않았다.",
  "주간 Story Mission 보상(CODMunity: 무작위 Story Mission 주 3회 완료) 존재 여부: 미확인이다.",
  "스토리 챕터 전체 목록(‘Dark Zone’, ‘Fallout’, ‘Underground’, ‘Counterfeit’)과 6개 Story Mission의 관계: 정리된 자료가 없다.",
  "출시 전 목격된 PvE 옵션이 개발자 전용 플레이리스트였다는 보도: 미확인이다.",
];
