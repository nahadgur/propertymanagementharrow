import type { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { spokeAreas } from '@/data/harrowData'
import { avatarContent } from '@/data/avatarContent'
import { siteConfig } from '@/data/site'

// Last updated dates — update these when content changes
const NOW     = new Date('2026-01-15')
const MONTHLY = new Date('2025-12-01')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  // ── Core pages ─────────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    {
      url:             `${base}/`,
      lastModified:    NOW,
      changeFrequency: 'weekly',
      priority:        1.0,
    },
    {
      url:             `${base}/property-accountants-harrow/`,
      lastModified:    NOW,
      changeFrequency: 'weekly',
      priority:        0.95,
    },
    {
      url:             `${base}/locations/`,
      lastModified:    NOW,
      changeFrequency: 'weekly',
      priority:        0.85,
    },
    {
      url:             `${base}/how-we-match-you/`,
      lastModified:    NOW,
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/about/`,
      lastModified:    MONTHLY,
      changeFrequency: 'monthly',
      priority:        0.6,
    },
    {
      url:             `${base}/contact/`,
      lastModified:    MONTHLY,
      changeFrequency: 'monthly',
      priority:        0.7,
    },
  ]

  // ── Services ────────────────────────────────────────────────────────────────
  const serviceIndex: MetadataRoute.Sitemap = [
    {
      url:             `${base}/services/`,
      lastModified:    NOW,
      changeFrequency: 'weekly',
      priority:        0.9,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url:             `${base}/services/${s.slug}/`,
    lastModified:    NOW,
    changeFrequency: 'weekly' as const,
    priority:        0.9,
  }))

  // ── Harrow spoke areas ──────────────────────────────────────────────────────
  const harrowPages: MetadataRoute.Sitemap = spokeAreas.map(area => ({
    url:             `${base}/harrow/${area.slug}/`,
    lastModified:    NOW,
    changeFrequency: 'weekly' as const,
    priority:        0.85,
  }))

  // ── Landlord avatar pages ───────────────────────────────────────────────────
  const landlordIndex: MetadataRoute.Sitemap = [
    {
      url:             `${base}/landlords/`,
      lastModified:    NOW,
      changeFrequency: 'weekly',
      priority:        0.85,
    },
  ]

  const landlordPages: MetadataRoute.Sitemap = avatarContent.map(a => ({
    url:             `${base}/landlords/${a.slug}/`,
    lastModified:    NOW,
    changeFrequency: 'weekly' as const,
    priority:        0.8,
  }))

  // ── Guides ──────────────────────────────────────────────────────────────────
  const guideSlugs = [
    'ultimate-guide-section-24',
    'incorporating-buy-to-let-portfolio',
    'capital-gains-tax-uk-property',
    'allowable-expenses-uk-landlords',
    'property-flipping-vs-buy-to-let',
  ]

  const guideIndex: MetadataRoute.Sitemap = [
    {
      url:             `${base}/guides/`,
      lastModified:    NOW,
      changeFrequency: 'weekly',
      priority:        0.85,
    },
  ]

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map(slug => ({
    url:             `${base}/guides/${slug}/`,
    lastModified:    NOW,
    changeFrequency: 'monthly' as const,
    priority:        0.9,
  }))

  // ── Tools ───────────────────────────────────────────────────────────────────
  const toolSlugs = [
    'section-24-calculator',
    'spv-vs-personal-tax-calculator',
    'capital-gains-tax-calculator-uk',
  ]

  const toolIndex: MetadataRoute.Sitemap = [
    {
      url:             `${base}/tools/`,
      lastModified:    NOW,
      changeFrequency: 'weekly',
      priority:        0.8,
    },
  ]

  const toolPages: MetadataRoute.Sitemap = toolSlugs.map(slug => ({
    url:             `${base}/tools/${slug}/`,
    lastModified:    NOW,
    changeFrequency: 'monthly' as const,
    priority:        0.85,
  }))

  // ── Legal ───────────────────────────────────────────────────────────────────
  const legalPages: MetadataRoute.Sitemap = [
    {
      url:             `${base}/privacy-policy/`,
      lastModified:    MONTHLY,
      changeFrequency: 'yearly',
      priority:        0.3,
    },
    {
      url:             `${base}/terms/`,
      lastModified:    MONTHLY,
      changeFrequency: 'yearly',
      priority:        0.3,
    },
  ]

  // ── Service × Location pages ───────────────────────────────────────────────
  const serviceLocationPages: MetadataRoute.Sitemap = []
  for (const service of services) {
    for (const area of spokeAreas) {
      serviceLocationPages.push({
        url:             `${base}/services/${service.slug}/${area.slug}/`,
        lastModified:    NOW,
        changeFrequency: 'monthly' as const,
        priority:        0.75,
      })
    }
  }

  return [
    ...corePages,
    ...serviceIndex,
    ...servicePages,
    ...harrowPages,
    ...landlordIndex,
    ...landlordPages,
    ...guideIndex,
    ...guidePages,
    ...toolIndex,
    ...toolPages,
    ...legalPages,
    ...serviceLocationPages,
  ]
}
