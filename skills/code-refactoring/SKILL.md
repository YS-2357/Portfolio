---
name: "code-refactoring"
description: "코드 중복 제거 및 구조 개선을 위한 리팩토링 스킬."
---

# 목적
- 중복 코드 제거
- 공통 컴포넌트/유틸 분리
- 유지보수성 향상

# 우선순위 작업

| 순위 | 작업 | 예상 시간 |
|------|------|----------|
| 1 | fetchText 유틸 분리 | 5분 |
| 2 | PageLayout 컴포넌트 | 15분 |
| 3 | 파일명 오타 수정 | 1분 |

# 절차

## fetchText 분리
1. `src/utils/fetchText.ts` 생성
2. 4개 파일에서 중복 함수 삭제
3. import 문 추가

## PageLayout 분리
1. `src/components/PageLayout.tsx` 생성
2. 각 페이지 컴포넌트에서 레이아웃 코드 제거
3. PageLayout으로 래핑

# 참고 문서
- `reference/processes/refactoring-guide.md`

# 스크립트
- `scripts/run.sh`: 린트 및 빌드 확인용
