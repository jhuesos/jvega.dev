# AGENTS.md

## Project Overview

jvega.dev — Personal portfolio site for Jaime Vega, Front-end Engineer / Tech Lead.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: CSS Modules with CSS custom properties (NO Tailwind — this is a deliberate choice)
- **Package Manager**: pnpm
- **Linting**: Biome (replaces ESLint + Prettier) + stylelint for CSS
- **Testing**: Vitest + React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (auto-deploys on push to master)
- **Analytics**: Vercel Analytics + Speed Insights (no Google Analytics)
- **Fonts**: next/font/google (Roboto) — no self-hosted font files

## Project Structure

- `src/app/` — Next.js App Router pages and layouts
- `src/components/` — Reusable React components (each in its own directory with .tsx + .module.css)
- `public/` — Static assets (icons, images, logos)

## Design System

- Dark theme: background #191919, accent #5addf3, accent-bg #0b8296, text #ffffff
- CSS custom properties defined in `src/app/globals.css`
- All components use CSS Modules (`.module.css` files) — never global class names
- Use modern CSS features: nesting, color-mix(), container queries where appropriate

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run Biome + stylelint
- `pnpm lint:fix` — auto-fix lint issues
- `pnpm test` — run Vitest
- `pnpm test:watch` — run Vitest in watch mode
- `pnpm typecheck` — run TypeScript type checking
- `pnpm build:analyze` — production build with bundle analyzer

## Conventions

- All components are Server Components by default; only add `'use client'` when truly needed
- Conventional Commits enforced via commitlint (feat:, fix:, chore:, etc.)
- Pre-commit hooks run lint-staged (Biome for TS/TSX, stylelint for CSS)
- Images use `next/image` — never manual `<img>` tags
- No Tailwind CSS — styling uses CSS Modules with real CSS. This is intentional.
- TypeScript strict mode — no `any` types, no `@ts-ignore`

## Performance & Quality Targets

- Lighthouse: 100/100/100/100 (Performance, Accessibility, Best Practices, SEO)
- securityheaders.com: A+
- Mozilla Observatory: A+ (125+)
- SSL Labs: A+ (Vercel automatic)
- Core Web Vitals: all "Good" (LCP <2.5s, CLS <0.1, INP <200ms)
- WCAG 2.2 AA compliant
- All pages statically generated (SSG) — zero server compute at runtime
- All security headers configured in next.config.ts headers() function

## Content

- Content is hardcoded in page components (no CMS)
- Static assets in public/ — only highest-resolution images stored (next/image handles resizing)
