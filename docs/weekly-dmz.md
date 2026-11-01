# DMZ 주간 공략 수집

## 실행 방식

`.github/workflows/weekly-dmz.yml`은 매주 월요일 09:17 KST(UTC 월요일 00:17)에 실행된다. 기본 브랜치에 워크플로가 있어야 예약 실행되며, GitHub 부하에 따라 지연될 수 있다. Actions → Weekly DMZ guide discovery → Run workflow로 수동 실행도 가능하다.

공개 RSS/Atom 피드(PC Gamer, Windows Central, GamesRadar+, Gamers Heroes)에서 제목에 DMZ와 MW4/Modern Warfare 4가 모두 있는 최근 30일 글을 찾는다. 공략 외 뉴스도 검토 후보에 포함된다. 피드에 남아 있는 항목만 볼 수 있으므로 지난주 모든 글을 빠짐없이 수집하거나 기존 기사의 본문 수정을 탐지하지는 못한다. 0건은 새 공략이 전혀 없다는 의미가 아니다.

기사 본문·피드 설명·이미지는 저장하지 않는다. 제목·HTTPS 원문 URL·매체·피드 게시일·발견일만 `research/dmz-candidates.json`에 저장한다. 원문 URL은 등록 매체 도메인만 허용하며, 추적 쿼리와 끝 슬래시를 제거해 중복을 줄인다. 날짜가 없거나 잘못된 항목·오래된 항목·다른 게임은 제외한다.

변경이 있으면 `automation/dmz-weekly` 검토용 브랜치를 갱신한다. 브랜치에만 있는 후보도 다음 주에 보존한다. 이 브랜치는 자동화 전용으로, main을 기준으로 재생성하며 force-with-lease로 갱신한다. 직접 수정한 공략·검토 상태는 main에 반영한다. 보고서와 후보 JSON은 실행 아티팩트에도 저장한다. 새 항목 없이 실행하면 날짜만 바뀌는 커밋은 만들지 않는다. 피드 일부가 실패하면 성공한 수집분은 보존하고 보고서 업로드 후 실행을 실패 처리한다. 오류는 다음 실행에서 다시 시도한다.

## 권한과 배포

별도 API 키나 AI 모델 비용은 없다. `GITHUB_TOKEN`에 contents:write만 작업 범위에서 지정한다. 2026-11-01 저장소 설정 API 확인 결과, 조직 정책이 Actions의 PR 생성·승인을 금지한다(설정 변경 요청 HTTP 409). 조직 설정은 변경하지 않았다. 검토 브랜치 저장과 수동 PR 방식으로 동작한다. Actions 실행 요약의 비교 링크를 열어 PR을 만들 수 있다.

수집 브랜치에는 main 대비 후보 JSON 변경만 포함된다. 후보 JSON은 사이트에서 읽지 않으므로 병합만으로 공략이 게시되지는 않는다. 검토한 공략 요약과 출처를 `src/data/dmz-guides.ts`에 추가하고 병합하면 기존 main 푸시 기반 Pages 배포가 실행된다. 봇이 만든 PR에서 다른 CI가 자동 실행되지 않을 수 있으므로 공략 반영 전 로컬 검증도 수행한다.

## 로컬 실행 및 검토

```sh
npm run dmz:collect
npm run test:collector
```

Python 3.10 이상, 외부 패키지 불필요. 피드 목록은 `scripts/dmz-feeds.json`, 실행 보고서는 Git에서 제외하는 `.source-check/dmz-report.json`이다. 범위를 바꾸려면 `python3 scripts/collect_dmz.py --days 14`처럼 지정한다(1~90일).

1. 원문을 열어 실제 게시일·대상 게임·공략의 패치 적용 여부·재사용 조건을 확인한다. 제목만으로 사실 확인을 대신하지 않는다.
2. 공략을 한국어로 직접 요약하고 단일 출처·개인 제보에는 미확인 표시를 붙인다. 수집일을 게시일로 사용하지 않는다.
3. 수동 PR에서 `dmz-guides.ts`의 확인일, 출처, 요약을 추가한다. 전체 데이터 반영일도 필요에 따라 갱신한다.
4. 후보의 status를 reviewed 또는 rejected로 바꾼다. 다음 실행은 상태와 최초 발견일을 보존한다. 기존 `src/data/*.ts`에 등록된 동일 URL은 새 후보로 추가하지 않는다.
5. `npm test`, `npm run test:collector`, `npm run lint`, `npx tsc --noEmit`과 페이지 표시를 확인하고 병합한다.

공식 패치의 본문 변경 감지는 별도의 `npm run sources:check`를 사용한다. 이 주간 작업은 새로운 글 발견용이며, 공식 패치 반영 여부나 사이트의 `DATA_UPDATED_AT`을 자동으로 바꾸지 않는다.
