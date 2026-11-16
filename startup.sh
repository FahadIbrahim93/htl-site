#!/bin/sh
# Revive the preview. Idempotent: exit if the dev server is already healthy.
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
cd /workspace || exit 1
npm run dev > /tmp/dev-server.log 2>&1 &
exit 0
