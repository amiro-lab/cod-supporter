# MW4 무장 정보 수집·갱신

2026-10-31 확인. 이 저장소는 Modern Warfare 4(2026)를 대상으로 한다.

## 현재 상태와 수집 경로

| 정보 | 우선 출처 | 반영 위치 | 검증 |
|---|---|---|---|
| 무기 분류·해금·기본 사양 | 공식 Create-a-Class 안내 + 인게임 화면 | `src/data/weapons.ts` | 무기명·단위·모드·패치 버전 확인 |
| 일반 파츠·Apex·슬롯 제한 | 공식 건스미스 안내 + 직접 캡처 | 빌드는 `builds.ts`, Apex는 `mw4.ts` | 실제 장착 가능 여부 확인 |
| 피해량·사거리·ADS·장전·반동 | 직접 측정 | 측정 데이터 구조 추가 후 연결 | 거리·체력·방어구·부위·FPS·모드·반복 횟수·원본 캡처 필수 |
| 밸런스 변경 | 공식 패치노트 | `weapon-patches.ts`, `data.ts` | MP와 DMZ를 구분하고 적용일 확인 |
| 최근 추천 개조 | 원문 매체 기사 수동 확인 | `builds.ts`, `sources-weapons.ts` | 게시/수정일, 슬롯·코드·패치 적용 확인 |
| 매체 평가 | 여러 매체의 원문 비교 | `tier-lists.ts` | 매체 의견이며 실제 이용자 픽률이 아님 |

`/attachments`는 기존 추천 빌드를 슬롯+파츠명으로 묶은 도감이다. 해당 빌드에 등장했다는 기록만 제공하며, 전체 파츠 목록·호환성·스탯 효과를 보증하지 않는다. 낮은 신뢰도 빌드도 포함하므로 원문 확인이 필요하다.

## 확인한 출처

- [공식 무장·건스미스 안내](https://www.callofduty.com/blog/2026/10/call-of-duty-modern-warfare-4-launch-multiplayer-operators-weapons-equipment-create-a-class): 무장과 Apex 체계 확인용.
- [공식 출시 패치노트](https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes): 같은 URL에 패치가 누적된다. MP·DMZ 별도 밸런싱임을 명시한다.
- [Dexerto 티어 원문](https://www.dexerto.com/wikis/modern-warfare-4/weapon-tier-list/): 10월 30일 갱신 표기를 확인했다. 원문 날짜가 최근이어도 개별 세팅이 재검증됐다고 간주하지 않는다.

수집 가능한 공개 API는 이번 조사에서 확인하지 못했다. 공식 페이지 변경 감지 + 원문 수동 검토 + 인게임 측정을 결합한다. WZStats·WarzoneLoadout·CODMunity의 메타 데이터는 기존 제외 원칙을 유지한다. 새 매체를 추가할 때 접근·재사용 조건을 확인한다.

## 변경 감지 실행

```sh
npm run sources:check
```

공식 두 페이지를 한 번씩 순차 조회한다. `.source-check/report.json`에 `baseline`(첫 관측), `unchanged`, `changed`, `error`를 기록한다. HTML 본문의 텍스트 지문만 저장하고 기사 전문·로드아웃 데이터는 저장하지 않는다. 성공한 관측은 다음 실행의 비교 기준이 되므로 검토 전에 report를 보관한다. 동시에 여러 실행을 하지 않는다.

이 도구는 페이지 변경 알림 후보만 만든다. 새 페이지 발견, 패치 내용 해석, 빌드 자동 갱신, 사이트 배포는 하지 않는다. 메뉴/동적 본문 때문에 오탐이 생길 수 있다. 실패·리다이렉트·본문 구조 변경은 오류 처리하며 이전 지문을 보존한다. HTML 구조가 달라지면 추출기를 수정해야 한다.

## 반영 순서

1. 공식 페이지 본문 변경이 있으면 패치 적용일·대상 모드·수치 변경을 직접 확인한다.
2. 새 출처를 레지스트리에 등록하고, 무기·파츠 영문명을 원문 그대로 연결한다. 기존 무기 ID를 재사용한다.
3. 파츠 효과는 증거가 없으면 미수집으로 둔다. TTK는 체력·거리·부위·방어구·발사 지연 없이 RPM만으로 추정하지 않는다. [캡처 절차](../captures/README.md)를 따른다.
4. 패치 이력·무기 사양·추천 빌드·티어를 수정한다. 매체끼리 충돌하면 `lowConfidence`나 설명을 남긴다. MP 패치를 DMZ에 임의 적용하지 않는다.
5. 실제 반영한 날짜에만 `DATA_UPDATED_AT`을 변경한다. 밸런스 패치를 반영할 때 `LATEST_BALANCE_PATCH`와 각 리스트의 `postPatch`를 함께 재검토한다. 같은 날짜의 기사도 패치 이후 작성 여부는 원문으로 확인한다.
6. `npm test`, `npm run lint`, `npm run build` 후 무기 상세·파츠 검색·메타 화면을 확인한다.

자동 주기 실행은 설정하지 않았다. 운영 환경이 정해지면 하루 1회 정도 실행하고 오류와 변경 후보를 검토 큐로 전달하는 방식으로 확장할 수 있다.
