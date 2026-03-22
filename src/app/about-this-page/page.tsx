import type { Metadata } from 'next';
import { Header } from '@/components/Header/Header';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About This Page',
  description:
    'Learn about the technology stack and tools used to build jvega.dev.',
};

export default function AboutThisPage() {
  return (
    <>
      <Header />
      <article className={styles.content}>
        <h2>About this page</h2>
        <p>
          This website is my personal portfolio and playground for experimenting
          with the latest web technologies. It is built with a focus on
          performance, accessibility, and security.
        </p>

        <section>
          <h3>Tech Stack</h3>
          <ul className={styles.stackList}>
            <li>
              <strong>Next.js 15</strong> — React framework with App Router,
              static generation, and file-based routing
            </li>
            <li>
              <strong>TypeScript</strong> — Type-safe JavaScript with strict
              mode enabled
            </li>
            <li>
              <strong>CSS Modules</strong> — Scoped CSS per component with
              modern CSS features (nesting, custom properties)
            </li>
            <li>
              <strong>Biome</strong> — Fast linter and formatter replacing
              ESLint + Prettier
            </li>
            <li>
              <strong>Vitest</strong> — Modern test runner with React Testing
              Library
            </li>
            <li>
              <strong>Vercel</strong> — Edge deployment with automatic preview
              URLs and analytics
            </li>
          </ul>
        </section>

        <section>
          <h3>Quality Targets</h3>
          <ul className={styles.stackList}>
            <li>Lighthouse: 100/100/100/100</li>
            <li>Security Headers: A+ (securityheaders.com)</li>
            <li>Mozilla Observatory: A+</li>
            <li>WCAG 2.2 AA compliant</li>
            <li>Core Web Vitals: all &quot;Good&quot;</li>
          </ul>
        </section>

        <section>
          <h3>Source Code</h3>
          <p>
            The source code is available on{' '}
            <a
              href="https://github.com/jhuesos/jvega.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </article>
    </>
  );
}
