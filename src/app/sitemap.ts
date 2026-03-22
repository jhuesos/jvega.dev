import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.jvega.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://www.jvega.dev/about-me',
      lastModified: new Date(),
    },
    {
      url: 'https://www.jvega.dev/about-this-page',
      lastModified: new Date(),
    },
  ];
}
