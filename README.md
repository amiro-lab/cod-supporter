# COD 서포터

콜 오브 듀티: 모던 워페어 4(2026) 기본 정보, DMZ 가이드, 매체 종합 총기 메타를 정리한 한국어 팬 사이트.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 정적 페이지로 프리렌더링
```

## 페이지

| 경로 | 내용 |
|---|---|
| `/` | 종합 상위 무기, 최신 밸런스 패치 요약 |
| `/meta/multiplayer`, `/meta/dmz` | 종합 티어, 매체별 비교표, 추천 빌드(총기·역할 필터) |
| `/weapons`, `/weapons/[id]` | 무기 목록, 무기별 평가·빌드·패치 이력 |
| `/dmz` | 하진 맵, 배치 모드, 규칙·시스템, 팁, 시즌 1, 패치 |
| `/mw4` | 출시 정보, 캠페인, 맵·모드, 퍼크·장비·킬스트릭, 건스미스, 시즌, 패치노트 |
| `/sources` | 전체 출처, 수집하지 않은 사이트와 이유 |

## 데이터

모든 데이터는 `src/data/*.ts`에 있고, 각 항목의 `sources`에는 출처 ID를 단다.

| 파일 | 내용 |
|---|---|
| `weapons.ts` | 무기 (분류, RPM, 해금, 요약) |
| `builds.ts` | 매체 추천 빌드 (부착물, 퍼크, 빌드 코드) |
| `tier-lists.ts` | 매체별 티어 리스트 원본 + 링크만 거는 외부 사이트 |
| `weapon-patches.ts` | 무기별 밸런스 변경 |
| `mw4.ts` / `dmz.ts` | 기본 게임 / DMZ 정보 |
| `sources-*.ts`, `mw4Sources`, `dmzSources` | 출처 목록 |

- 종합 티어는 `src/lib/meta.ts`가 빌드 시점에 계산한다. 점수는 S=4 … D=0이고, 최신 패치 이후 작성된 리스트에 2배 가중치를 준다.
- 정보의 확실성은 `certainty`로 표시한다. 값이 없으면 확인된 정보, `prelaunch`는 출시 전 정보, `unconfirmed`는 미확인이다.
- 데이터를 고치면 `src/lib/data.ts`의 `DATA_UPDATED_AT`도 바꾼다. 새 밸런스 패치를 반영하면 `LATEST_BALANCE_PATCH`도 바꾸고, 티어 리스트의 `postPatch` 값도 다시 판단한다.

### 수집 원칙

- 공식 발표(callofduty.com)와 게임 매체 기사만 사용한다. 빌드 설명은 직접 다시 쓴다.
- WZStats, WarzoneLoadout은 약관이 재배포를 금지하므로 데이터를 가져오지 않는다. CODMunity는 약관이 없고 산정 방식이 불분명해서 티어·픽률·빌드 데이터는 가져오지 않는다(DMZ 가이드 기사는 일반 매체처럼 링크를 달아 인용). 세 곳의 메타 페이지는 링크로만 안내한다.
- 부착물 스탯과 반동 패턴은 직접 캡처한 인게임 화면으로 측정한다. 캡처 방법은 `captures/README.md`에 있다.
