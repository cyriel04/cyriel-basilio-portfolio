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

This is a single-page Next.js 15 (App Router) portfolio site — effectively one route (`app/page.tsx`) composed of section components, no routing complexity beyond `app/contact/page.tsx`.

**Content is data-driven.** All resume/portfolio content (profile info, summary, skills, experience, projects, education) lives in `app/constants/index.ts` as plain exported objects/arrays (`PROFILE`, `SUMMARY`, `SKILLS`, `EXPERIENCE`, `PROJECTS`, `EDUCATION`). Page components map over these constants to render sections — to update site content, edit the constants file, not the components. The `Project` type is defined in `app/components/ContentCard.tsx` and consumed by `app/constants/index.ts` and `app/layout/Article.tsx`.

**Styling is mixed CSS Modules + MUI:**

- Component-scoped styles use CSS/SCSS Modules (`*.module.css` / `*.module.scss`), composed with `classnames` (imported as `cx`).
- `app/theme.ts` defines a single dark-mode MUI theme, applied globally via `ThemeProvider` in `app/layout.tsx`, wrapped in `AppRouterCacheProvider` (MUI's Next.js App Router emotion cache integration — required for MUI SSR in App Router).
- `app/globals.css` holds global styles outside the MUI/module system.

**Component structure:**

- `app/components/` — reusable UI pieces (`Navigation`, `Footer`, `ContentCard`).
- `app/layout/Article.tsx` — renders the `PROJECTS` list as a grid of `ContentCard`s (distinct from `app/layout.tsx`, the Next.js root layout).
- `app/page.tsx` assembles the homepage from anchor-linked sections (`#experience`, `#projects`, `#skills`, `#education`) that `Navigation` scroll-links to.

**Formatting:** Prettier config uses tabs and double quotes (`.prettierrc.json`) — `format:check` is enforced in CI, run `npm run format` before committing.

Deployed to Vercel.
