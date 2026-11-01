import type { InfoItem, Source } from "@/lib/types";

export const DMZ_COMMUNITY_CHECKED_AT = "2026-11-01";

// 게시일 대신 직접 확인한 날짜를 표시한다. 댓글의 상대 시간은 게시일로 추정하지 않는다.
export const dmzCommunitySources: Source[] = [
  { id: "dmz-community-solo-blueprints", title: "Reddit — Best way to get blueprints/launchers in DMZ?", publisher: "Reddit · r/modernwarfare4", url: "https://www.reddit.com/r/modernwarfare4/comments/1xfj9sr/best_way_to_get_blueprintslaunchers_in_dmz/" },
  { id: "dmz-community-blueprints-manuals", title: "Reddit — Blueprints & Manuals", publisher: "Reddit · r/DMZ", url: "https://www.reddit.com/r/DMZ/comments/1xgerkq/blueprints_manuals/" },
  { id: "dmz-community-blueprint-drops", title: "Reddit — Weapon Blueprint Drops", publisher: "Reddit · r/DMZ", url: "https://www.reddit.com/r/DMZ/comments/1xenlfj/weapon_blueprint_drops/" },
  { id: "dmz-community-cheaper-blueprints", title: "Reddit — Save Weapon Blueprints in Multiplier with No Attachments, So You can Buy Theam Cheaper in DMZ", publisher: "Reddit · r/DMZ", url: "https://www.reddit.com/r/DMZ/comments/1xd0jr1/save_weapon_blueprints_in_multiplier_with_no/" },
];

export const dmzBlueprintReports: InfoItem[] = [
  {
    title: "파밍 장소 제보: 금고·지휘관·고등급 열쇠 방",
    body: "솔로 도안 파밍 질문에 금고, 지휘관(LT), 전설·울트라 열쇠 방을 추천하는 댓글이 있습니다. 고등급 열쇠 방에서 자주 얻는다는 개인 경험이며, 확정 드롭이나 공식 드롭률로 확인된 내용은 아닙니다. 글에서 도안과 매뉴얼을 혼용했을 가능성도 있습니다.",
    certainty: "unconfirmed", sources: ["dmz-community-solo-blueprints"],
  },
  {
    title: "획득 경험담: M4·Oden 등과 낮은 드롭률 체감",
    body: "M4·Oden 등의 무기 제작법을 얻었다는 댓글과 무기 관련 도안이 너무 드물다는 의견이 있습니다. 작성자가 도안·매뉴얼·제작법을 혼용하므로 정확한 아이템 종류는 재확인이 필요합니다. 표본·시도 횟수가 집계된 드롭률 자료는 아닙니다.",
    certainty: "unconfirmed", sources: ["dmz-community-blueprints-manuals"],
  },
  {
    title: "변경 의혹: 공군기지 벙커의 설계도 드롭",
    body: "Door Breacher로 여는 공군기지 벙커에서 예전보다 설계도가 안 나온다는 글이 있습니다. 댓글에는 문 개방 도구가 소모되지 않던 문제가 수정됐다는 주장도 있으나, 해당 글에는 공식 패치 근거가 제시되지 않았습니다. 드롭률 너프와 문 개방 방식 변경 모두 미확인입니다.",
    certainty: "unconfirmed", sources: ["dmz-community-blueprint-drops"],
  },
  {
    title: "구매 팁 제보: 부착물을 제거한 도안 빌드 저장",
    body: "보유 무기 도안의 부착물을 제거하고 빌드로 저장하면 DMZ에서 더 저렴하게 구매할 수 있다는 팁입니다. 기본 무기 매뉴얼 없이도 가능하다는 댓글 주장은 현재 패치에서 재검증이 필요합니다. 아래 공식 비용 버그 수정과는 별개의 주장으로, 항상 무료이거나 무기 매뉴얼이 영구 해제된다는 뜻은 아닙니다.",
    certainty: "unconfirmed", sources: ["dmz-community-cheaper-blueprints"],
  },
];

export const dmzBlueprintOfficialNotes: InfoItem[] = [
  {
    title: "공식 수정 내역: 수정한 도안 빌드의 구매 비용",
    body: "공식 출시 패치노트에는 도안을 수정해 저장한 빌드를 구매할 때 원래 도안의 전체 가격이 잘못 청구될 수 있던 문제를 수정했다고 기록되어 있습니다. 과거의 구매 비용 경험담은 이 변경을 고려해야 합니다. 이 수정이 위 커뮤니티 구매 팁의 모든 조건을 보증하지는 않습니다.",
    sources: ["dmz-cod-patch-notes"],
  },
];
