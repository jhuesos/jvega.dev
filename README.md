# jvega.dev

Personal portfolio site for Jaime Vega — Front-end Engineer & Tech Lead

## Tech Stack

| Category   | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 15 (App Router)             |
| Language   | TypeScript (strict)                 |
| Styling    | CSS Modules + CSS custom properties |
| Linting    | Biome + stylelint                   |
| Testing    | Vitest + React Testing Library      |
| CI/CD      | GitHub Actions                      |
| Deployment | Vercel                              |
| Analytics  | Vercel Analytics + Speed Insights   |

## Getting Started

**Prerequisites:** Node.js >= 20, pnpm

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command              | Description                |
| -------------------- | -------------------------- |
| `pnpm dev`           | Start dev server           |
| `pnpm build`         | Production build           |
| `pnpm lint`          | Run Biome + stylelint      |
| `pnpm lint:fix`      | Auto-fix lint issues       |
| `pnpm test`          | Run tests                  |
| `pnpm test:watch`    | Run tests in watch mode    |
| `pnpm typecheck`     | TypeScript type checking   |
| `pnpm build:analyze` | Build with bundle analyzer |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about-me/           # /about-me
│   └── about-this-page/    # /about-this-page
├── components/             # Reusable components
│   ├── Header/
│   ├── Chip/
│   ├── ProgressBar/
│   └── Disclaimer/
public/                     # Static assets
├── icons/
├── images/
└── logo/
```

## Quality Targets

| Metric                    | Target     |
| ------------------------- | ---------- |
| Lighthouse Performance    | 100        |
| Lighthouse Accessibility  | 100        |
| Lighthouse Best Practices | 100        |
| Lighthouse SEO            | 100        |
| securityheaders.com       | A+         |
| Mozilla Observatory       | A+         |
| SSL Labs                  | A+         |
| Core Web Vitals           | All "Good" |
| WCAG 2.2 AA               | Compliant  |

## Deployment

Auto-deploys to Vercel on push to `master`. Every PR gets a preview URL.

## License

See [LICENSE](LICENSE).
