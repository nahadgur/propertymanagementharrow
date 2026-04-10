import type { MetadataRoute } from 'next'
import { services }       from '@/data/services'
import { spokeAreas }     from '@/data/harrowData'
import { avatarContent }  from '@/data/avatarContent'
import { blogArticles }   from '@/data/blog'
import { siteConfig }     from '@/data/site'

// Bump these dates when content changes
const NOW     = new Date('2026-04-10')
const MONTHLY = new Date('2026-01-15')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  // ── Core pages ──────────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    { url: `${base}/`,                             lastModified: NOW,     changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${base}/property-management-harrow/`, lastModified: NOW,     changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/how-we-match-you/`,            lastModified: NOW,     changeFrequency: 'monthly', priority: 0.8  },
    { url: `${base}/about/`,                       lastModified: MONTHLY, changeFrequency: 'monthly', priority: 0.6  },
    { url: `${base}/contact/`,                     lastModified: MONTHLY, changeFrequency: 'monthly', priority: 0.7  },
  ]

  // ── Services ────────────────────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${base}/services/`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    ...services.map(s => ({
      url:             `${base}/services/${s.slug}/`,
      lastModified:    NOW,
      changeFrequency: 'weekly' as const,
      priority:        0.9,
    })),
  ]

  // ── Harrow spoke areas (21 pages) ───────────────────────────────────────────
  const harrowPages: MetadataRoute.Sitemap = spokeAreas.map(area => ({
    url:             `${base}/harrow/${area.slug}/`,
    lastModified:    NOW,
    changeFrequency: 'weekly' as const,
    priority:        0.85,
  }))

  // ── Landlord avatar pages ───────────────────────────────────────────────────
  const landlordPages: MetadataRoute.Sitemap = [
    { url: `${base}/landlords/`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    ...avatarContent.map(a => ({
      url:             `${base}/landlords/${a.slug}/`,
      lastModified:    NOW,
      changeFrequency: 'weekly' as const,
      priority:        0.8,
    })),
  ]

  // ── Guides ──────────────────────────────────────────────────────────────────
  const guideSlugs = [
    'hmo-licensing-harrow',
    'landlord-compliance-checklist',
    'tenant-screening-best-practices',
    'deposit-protection-guide',
    'switching-property-managers',
  ]

  const guidePages: MetadataRoute.Sitemap = [
    { url: `${base}/guides/`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.85 },
    ...guideSlugs.map(slug => ({
      url:             `${base}/guides/${slug}/`,
      lastModified:    NOW,
      changeFrequency: 'monthly' as const,
      priority:        0.9,
    })),
  ]

  // ── Tools ───────────────────────────────────────────────────────────────────
  const toolSlugs = [
    'rental-yield-calculator',
    'landlord-compliance-checker',
    'void-period-cost-calculator',
  ]

  const toolPages: MetadataRoute.Sitemap = [
    { url: `${base}/tools/`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.8 },
    ...toolSlugs.map(slug => ({
      url:             `${base}/tools/${slug}/`,
      lastModified:    NOW,
      changeFrequency: 'monthly' as const,
      priority:        0.85,
    })),
  ]

  // ── Blog (3 posts) ──────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${base}/blog/`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.75 },
    ...blogArticles.map(post => ({
      url:             `${base}/blog/${post.slug}/`,
      lastModified:    NOW,
      changeFrequency: 'monthly' as const,
      priority:        0.7,
    })),
  ]

  // ── Legal ───────────────────────────────────────────────────────────────────
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${base}/privacy-policy/`, lastModified: MONTHLY, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms/`,          lastModified: MONTHLY, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // ── Service × Location (5 services × 21 spoke areas = 105 pages) ───────────
  const serviceLocationPages: MetadataRoute.Sitemap = services.flatMap(service =>
    spokeAreas.map(area => ({
      url:             `${base}/services/${service.slug}/${area.slug}/`,
      lastModified:    NOW,
      changeFrequency: 'monthly' as const,
      priority:        0.75,
    }))
  )

  return [
    ...corePages,
    ...servicePages,
    ...harrowPages,
    ...landlordPages,
    ...guidePages,
    ...toolPages,
    ...blogPages,
    ...legalPages,
    ...serviceLocationPages,
  ]
}
