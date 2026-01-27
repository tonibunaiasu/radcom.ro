import { ENV } from './_core/env';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Generate sitemap.xml dynamically for all pages
 * Follows sitemap.org protocol for SEO optimization
 */
export function generateSitemap(): string {
  // Use the deployed URL or localhost for development
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://radcom-website.manus.space' 
    : 'http://localhost:3000';
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  const urls: SitemapUrl[] = [
    // Homepage - highest priority, updated daily
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
    },

    // Services overview page
    {
      loc: `${baseUrl}/servicii`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },

    // Product pages - high priority
    {
      loc: `${baseUrl}/servicii/ifleet`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/servicii/optifare`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/servicii/exact`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },

    // Solutions by industry
    {
      loc: `${baseUrl}/solutii/transport`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/solutii/medical`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/solutii/telecom`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/solutii/media-mobile`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/solutii/internet`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },

    // Company pages
    {
      loc: `${baseUrl}/compania`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    },

    // Careers page
    {
      loc: `${baseUrl}/cariere`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7,
    },

    // Blog/News page
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7,
    },

    // Contact page
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
    },
  ];

  // Generate XML
  const urlsXml = urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;
}
