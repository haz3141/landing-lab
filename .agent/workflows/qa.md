---
description: Run the minimal quality gate for a landing variant branch.
---

---
title: QA Checks
description: Run the minimal quality gate for a landing variant branch.
---

## Steps
1. Run `pnpm lint`. If it fails, fix only what is necessary.
2. Run `pnpm build`. If it fails, fix only what is necessary.
3. Summarize results and list files changed.
4. Propose ONE atomic conventional commit message for the fixes (if any).
