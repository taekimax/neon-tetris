# NEON TETRIS — vs AI

플레이어와 AI가 대결하는 테트리스. 네온 신스웨이브 3D 그래픽 + 파티클 연출. 로컬 서버에서 실행되는 웹앱.

## 실행

```bash
npm install
npm run dev          # 개발 서버 → http://localhost:5173
```

배포용 빌드/프리뷰:

```bash
npm run build
npm run preview      # 프로덕션 로컬 서버
```

테스트:

```bash
npm test             # 코어 로직 단위 테스트(Vitest)
```

## 게임 방법

- 시작 화면에서 **난이도 1(Easy) / 2(Normal) / 3(Hard)** 선택.
- 라인을 클리어하면 **(지운 줄 수 − 1)** 줄의 가비지가 상대에게 전달된다(예: 테트리스 4줄 → 가비지 3줄).
- 콤보/백투백 시 가비지가 추가. 들어오는 가비지는 약 1초 경고 후 적용되며, 그 전에 라인을 클리어하면 상쇄된다.
- 상대를 먼저 탑아웃(블록이 꼭대기까지 쌓임)시키면 승리.

### 조작

| 키 | 동작 |
|---|---|
| ← → (또는 A D) | 좌우 이동 |
| ↓ (또는 S) | 소프트 드롭 |
| Space | 하드 드롭 |
| ↑ / X | 시계 방향 회전 |
| Z / Ctrl | 반시계 방향 회전 |
| C / Shift | 홀드 |
| P / Esc | 일시정지 |
| R | 게임오버 시 재시작 |

## 기술 스택

- **TypeScript**(strict) + **Vite**
- **three.js** — 3D 렌더링(InstancedMesh 블록, 그리드 바닥, 별빛, 카메라 연출)
- **WebAudio** — BGM/효과음 자체 합성(외부 음원 에셋 없음)
- **Vitest** — 코어 로직 단위 테스트
- AI는 **순수 자체 휴리스틱 스크립트**(LLM/네트워크 호출 없음)

## 아키텍처

코어 게임 로직은 프레임워크·렌더와 무관한 순수 모듈로 분리해 단위 테스트가 가능하다.

```
src/
  core/       tetromino · board · randomizer · rules · engine · ai   (순수 로직, 테스트 대상)
  versus/     match — 두 엔진 연결, 가비지 라우팅/상쇄, 승패
  render/     scene · boardView · effects · input · audio            (three.js + WebAudio)
  ui/         hud · menu · styles.css                                (네온 DOM 오버레이)
  main.ts     게임 루프(고정 타임스텝 + RAF) + 상태머신 통합
tests/core/   코어 로직 단위 테스트
```

설계 문서: `docs/superpowers/specs/2026-06-21-ai-tetris-design.md`
구현 계획: `docs/superpowers/plans/2026-06-21-ai-tetris.md`
