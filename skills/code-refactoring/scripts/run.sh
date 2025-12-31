#!/bin/bash
# 리팩토링 후 검증 스크립트

cd "$(dirname "$0")/../../../app" || exit 1

echo "=== ESLint 검사 ==="
npm run lint

echo ""
echo "=== TypeScript 빌드 ==="
npm run build

echo ""
echo "=== 완료 ==="
