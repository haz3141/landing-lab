---
description: Scaffold a new landing variant route and wire it into the home index.
---

---
title: New Landing Variant
description: Scaffold a single landing variant route and wire it into the home index.
---

## Usage
- Preferred: Run this workflow with an inline slug, like: `/new-variant v1-minimal`
- If no slug is provided inline, STOP and ask the user for the slug before making changes.

## Steps
1. Determine the variant slug:
   - If the user invoked the workflow with an inline slug (e.g. `/new-variant v2-editorial`), use that slug exactly.
   - Otherwise STOP and ask: "What variant slug should I create?" Do not choose a slug yourself.

2. Create: `src/app/(variants)/<slug>/page.tsx`
   - Include semantic sections: header/hero, how-it-works, services, social proof, CTA, footer.
   - Keep it presentational; no external deps.
   - Match the project tone: minimal + premium, trustworthy + modern, primary CTA = book free water test.

3. Update `src/app/page.tsx` to include a visible link to the new variant route.

4. Ensure TypeScript and code quality:
   - No unused imports.
   - Use `@/*` imports where appropriate.
   - Keep components readable; avoid premature abstractions.

5. Propose ONE atomic conventional commit message for this scaffold (do not commit automatically unless asked).
