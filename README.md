# Cyriel Basilio — Portfolio

[![CI](https://github.com/cyriel04/cyriel-basilio-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/cyriel04/cyriel-basilio-portfolio/actions/workflows/ci.yml)

Personal portfolio and resume site for Cyriel Basilio, Frontend / React developer.

**Live site:** [cyriel-basilio.vercel.app](https://cyriel-basilio.vercel.app)

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI 7](https://mui.com/) (dark theme, Emotion via `@mui/material-nextjs`)
- CSS / SCSS Modules composed with [`classnames`](https://github.com/JedWatson/classnames)
- ESLint (`next/core-web-vitals`), Prettier, Husky
- GitHub Actions CI, deployed on [Vercel](https://vercel.com/)

## Getting started

Requires **Node.js 24** (pinned in `.nvmrc`).

```bash
nvm use          # switch to the pinned Node version
npm install      # install dependencies (also sets up the Husky git hooks)
npm run dev      # start the dev server at http://localhost:3000
```

No environment variables are required.

## Scripts

| Script                 | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| `npm run dev`          | Start the development server on `localhost:3000`              |
| `npm run build`        | Create a production build                                     |
| `npm run start`        | Serve the production build (run `build` first)                |
| `npm run lint`         | Lint with ESLint (`next/core-web-vitals`)                     |
| `npm run typecheck`    | Type-check the project with `tsc --noEmit`                    |
| `npm run format`       | Format all files with Prettier                                |
| `npm run format:check` | Check formatting without writing changes                      |
| `npm run prepare`      | Install Husky git hooks (runs automatically on `npm install`) |

## Project structure

```
app/
├── constants/index.ts   # All site content: profile, summary, skills, experience, projects, education
├── components/          # Reusable UI: Navigation, Footer, ContentCard
├── layout/Article.tsx   # Projects grid (renders PROJECTS as ContentCards)
├── contact/page.tsx     # /contact route
├── page.tsx             # Homepage: #experience, #projects, #skills, #education sections
├── layout.tsx           # Root layout: metadata, JSON-LD, MUI theme provider
├── theme.ts             # MUI dark theme
├── globals.css          # Global styles
├── icon.tsx, apple-icon.tsx, opengraph-image.tsx   # Generated icons and OG image
└── manifest.ts, robots.ts, sitemap.ts              # Web manifest and SEO routes
```

## Updating content

The site is data-driven. To change what the site says (bio, skills, jobs, projects, education), edit the exported constants in [`app/constants/index.ts`](app/constants/index.ts). You don't need to touch the components.

- `PROFILE` also feeds the page metadata, Open Graph image, manifest and contact page.
- `EXPERIENCE` and `PROJECTS` render in array order, so keep them newest first.
- A project with no public link should use `url: null`.

## Code quality

- **Formatting:** Prettier with tabs and double quotes (`.prettierrc.json`).
- **Pre-commit hook:** Husky runs `npm run format:check` before each commit. Run `npm run format` to fix failures.
- **CI:** [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on every push and pull request to `main`:

  `format:check` → `lint` → `typecheck` → `build` → `npm audit` (non-blocking)

  To match CI locally before pushing:

  ```bash
  npm run format:check && npm run lint && npm run typecheck && npm run build
  ```

## Deployment

The site deploys to Vercel from the `main` branch. The canonical URL (`https://cyriel-basilio.vercel.app`) is hardcoded in `app/layout.tsx`, `app/robots.ts` and `app/sitemap.ts`. If the domain changes, update all three.
