---
description: Run minimal quality gates for a landing variant branch (pnpm only).
---

---
title: QA Checks
description: Run minimal quality gates for a landing variant branch (pnpm only).
---

## Steps
1. Run `pnpm lint` (NOT npm). If it fails, fix only what is necessary.

2. Run `pnpm build` (NOT npm). If it fails, fix only what is necessary.

3. If npm was used accidentally at any point:
   - STOP and re-run the same command(s) with pnpm.
   - Note the correction explicitly in the summary.

4. Summarize results and list files changed.

5. Propose ONE atomic conventional commit message for the fixes (if any).
