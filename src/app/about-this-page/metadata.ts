import type { Metadata } from 'next';
import { ogImage, SITE_NAME, SITE_URL } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'About This Page',
  description:
    'Learn about the technology stack and tools used to build jvega.dev.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'About This Page | Jaime Vega',
    description:
      'Learn about the technology stack and tools used to build jvega.dev.',
    url: `${SITE_URL}/about-this-page`,
    images: [ogImage],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'About This Page | Jaime Vega',
    description:
      'Learn about the technology stack and tools used to build jvega.dev.',
    images: [ogImage.url],
  },
};
