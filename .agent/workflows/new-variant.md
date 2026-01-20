---
description: Scaffold a new landing variant route and wire it into the home index.
---

---
title: New Landing Variant
description: Scaffold a new landing variant route and wire it into the home index.
---

## Steps
1. Ask for the variant slug (e.g. v1, brutalist, glass, minimal).
2. Create: `src/app/(variants)/<slug>/page.tsx`
   - Include semantic sections: header/hero, features, social proof, CTA, footer.
   - Keep it presentational; no external deps.
3. Update `src/app/page.tsx` to include a link to the new variant.
4. Ensure TypeScript passes and code is readable.
5. Propose ONE atomic conventional commit message for this scaffold.
