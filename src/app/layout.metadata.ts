import type { Metadata } from 'next';
import { ogImage, SITE_NAME, SITE_URL } from '@/lib/metadata';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jaime Vega',
  url: SITE_URL,
  email: 'jaime.vega@gmail.com',
  jobTitle: 'Front-end Engineer & Tech Lead',
  image: `${SITE_URL}/images/profile-pic-600.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amsterdam',
    addressCountry: 'NL',
  },
  sameAs: ['https://linkedin.com/in/jvegadev', 'https://github.com/jhuesos'],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Vue',
    'Web Components',
    'Progressive Web Apps',
    'Redux',
    'CSS',
    'HTML',
  ],
} as const;

export const metadata: Metadata = {
  title: {
    default: 'Jaime Vega - Front-end Engineer & Tech Lead',
    template: '%s | Jaime Vega',
  },
  description:
    "jvega.dev is Jaime Vega's (front-end engineer and tech lead from Amsterdam) personal website.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/logo/favicon.ico',
    apple: '/logo/apple-touch-icon.png',
  },
  other: {
    'theme-color': '#0B8296',
  },
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
