---
trigger: always_on
---

# Landing Lab Rule (Always On)

## Mission
This repository is a landing-page design lab. Optimize for visual quality, clarity, and iteration speed.

- Treat the current git branch name as the active baseline context (e.g. baseline/next-html-tailwind vs baseline/next-shadcn) and follow the stack implied by that branch.

## Product & Conversion Context (Always On)

- Business: Eco One Water, a residential water treatment services company.
- Audience: Homeowners researching or ready to purchase water treatment systems.
- Primary conversion goal: Book an in-home appointment for a free water test.
- The free water test is the main offer and primary CTA.
- Services include water softeners, filtration systems, reverse osmosis (point-of-use and whole-house), and well water treatment.
- Design tone: minimal and premium.
- The page must feel trustworthy and modern to encourage inviting a technician into the home.

## Scope constraints (hard rules)
- Build ONLY marketing/landing page UI. No auth, no dashboards, no backend, no APIs, no CMS, no complex state.
- No new dependencies unless the user explicitly approves.
- Do not refactor unrelated files. Keep diffs minimal and intentional.

## Variant structure (required)
- All landing variants live under: `src/app/(variants)/<name>/page.tsx`
- The home page `src/app/page.tsx` is a simple index linking to all variants.
- Each variant should be mostly presentational and use semantic HTML.

## Styling constraints
- Tailwind-only for baseline/next-html-tailwind unless explicitly told otherwise.
- Do not use shadcn/ui or Radix components on baseline/next-html-tailwind unless explicitly instructed.
- Keep styles consistent: spacing scale, typography scale, and color tokens should not be random per section.
- Prefer CSS-first layout solutions; avoid JS layout measurement.

## Accessibility + UX baseline
- All interactive controls must be keyboard accessible.
- Provide visible focus states (do not remove focus outlines).
- Images must have appropriate `alt` text (or empty alt for decorative).
- Headings must follow a logical order (one H1 per page).

## Code quality
- Keep components small and readable.
- Avoid introducing unused components or abstractions.
- Use `@/*` imports, not deep relative paths.

## Git discipline (atomic conventional commits)
- Work in small, atomic steps.
- Every commit MUST be Conventional Commits format:
  - feat:, fix:, chore:, docs:, refactor:, test:, style:
- One commit = one change intent. Do not bundle multiple intents.
- Provide a short commit message + 1–3 bullet body lines describing what changed and why.
- If unsure, propose the next commit message before proceeding.
