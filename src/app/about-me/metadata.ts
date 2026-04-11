import type { Metadata } from 'next';
import { ogImage, SITE_NAME, SITE_URL } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn about Jaime Vega, front-end engineer and tech lead from Amsterdam.',
  openGraph: {
    type: 'profile',
    firstName: 'Jaime',
    lastName: 'Vega',
    username: 'jvegadev',
    siteName: SITE_NAME,
    title: 'About Me | Jaime Vega',
    description:
      'Learn about Jaime Vega, front-end engineer and tech lead from Amsterdam.',
    url: `${SITE_URL}/about-me`,
    images: [ogImage],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'About Me | Jaime Vega',
    description:
      'Learn about Jaime Vega, front-end engineer and tech lead from Amsterdam.',
    images: [ogImage.url],
  },
};
