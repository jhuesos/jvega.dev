import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.jvega.dev',
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.jvega.dev/about-me',
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.jvega.dev/about-this-page',
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
