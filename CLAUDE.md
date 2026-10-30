# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — Next.js/ESLint (`next/core-web-vitals`)
- `npm run typecheck` — `tsc --noEmit`
- `npm run format` / `npm run format:check` — Prettier write/check

There is no test suite/runner configured in this repo.

CI (`.github/workflows/ci.yml`) runs on push/PR to `main`: `format:check` → `lint` → `typecheck` → `build` → `npm audit` (audit step is non-blocking). Match this order locally before pushing.

Node version is pinned via `.nvmrc` (24).

## Architecture

This is a single-page Next.js 16 (App Router) portfolio site — effectively one route (`app/page.tsx`) composed of section components, no routing complexity beyond `app/contact/page.tsx`.

**Content is data-driven.** All CV/portfolio content lives in `app/constants/index.ts` as plain exported objects/arrays (`PROFILE`, `SUMMARY`, `SKILLS`, `EXPERIENCE`, `PERSONAL_PROJECTS`, `EDUCATION`). Client projects are nested inside their `EXPERIENCE` job; personal projects carry an optional screenshot (`image`, files in `public/projects/`). Page components map over these constants to render sections — to update site content, edit the constants file, not the components. Types (`Job`, `ClientProject`, `PersonalProject`) live in `app/constants/types.ts`.

**Styling is mixed CSS Modules + MUI:**

- Component-scoped styles use CSS/SCSS Modules (`*.module.css` / `*.module.scss`), composed with `classnames` (imported as `cx`).
- `app/theme.ts` defines a single dark-mode MUI theme, applied globally via `ThemeProvider` in `app/layout.tsx`, wrapped in `AppRouterCacheProvider` (MUI's Next.js App Router emotion cache integration — required for MUI SSR in App Router).
- `app/globals.css` holds global styles outside the MUI/module system.

**Component structure:**

- `app/components/PageShell.tsx` — shared layout for `/` and `/contact`: a sticky `Sidebar` (name, role, tagline, `SectionNav`, CV/contact links) beside a scrolling `<main>`; collapses to one column under 1024px. `SectionNav` (scroll-spy), `PointerGlow` and `CopyButton` are the only client components.
- `app/styles/_breakpoints.scss` — shared breakpoint mixins (`single-column`, `narrow-columns`, `narrow`, `phone`); `@use` it in modules instead of hardcoding widths.
- `app/components/` also holds the homepage sections (`ExperienceList`, `RecentWorks`, `StackPills`) and `Footer`.
- `app/page.tsx` assembles the homepage from anchor-linked sections (`#about`, `#experience`, `#works`, `#skills`, `#education`) that `SectionNav` links to.

**Formatting:** Prettier config uses tabs and double quotes (`.prettierrc.json`) — `format:check` is enforced in CI, run `npm run format` before committing.

Deployed to Vercel.

## Git

- Commits and PRs credit only the user: no `Co-Authored-By: Claude` trailer and no "Generated with Claude Code" footer.
- Do feature work on a branch, not directly on `main`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
