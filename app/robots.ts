import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
        ],
      },
      // Block AI training crawlers
      { userAgent: 'GPTBot',        disallow: ['/'] },
      { userAgent: 'ChatGPT-User',  disallow: ['/'] },
      { userAgent: 'Google-Extended', disallow: ['/'] },
      { userAgent: 'CCBot',         disallow: ['/'] },
      { userAgent: 'anthropic-ai',  disallow: ['/'] },
      { userAgent: 'ClaudeBot',     disallow: ['/'] },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host:    siteConfig.url,
  }
}
