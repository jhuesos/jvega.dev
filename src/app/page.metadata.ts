import type { Metadata } from 'next';
import { ogImage, SITE_NAME, SITE_URL } from '@/lib/metadata';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'Jaime Vega - Front-end Engineer & Tech Lead',
    description:
      "jvega.dev is Jaime Vega's (front-end engineer and tech lead from Amsterdam) personal website.",
    url: SITE_URL,
    images: [ogImage],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Jaime Vega - Front-end Engineer & Tech Lead',
    description:
      "jvega.dev is Jaime Vega's (front-end engineer and tech lead from Amsterdam) personal website.",
    images: [ogImage.url],
  },
};
