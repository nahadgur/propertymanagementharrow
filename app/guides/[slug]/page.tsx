import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { guides, getGuideBySlug, GUIDE_SLUGS } from '@/data/guides'
import { getArticlesByHub } from '@/data/blog'
import { getServiceBySlug } from '@/data/services'
import { siteConfig } from '@/data/site'
import {
  editorialAuthorJsonLd,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
} from '@/lib/schema'
import GuideHubContent from './GuideHubContent'

export const dynamicParams = false

export function generateStaticParams() {
  return GUIDE_SLUGS.map(slug => ({ slug }))
}

const TOOL_LABELS: Record<string, string> = {
  'management-fee-calculator': 'Management fee calculator',
  'rental-yield-calculator': 'Rental yield calculator',
  'void-cost-calculator': 'Void cost calculator',
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return { title: 'Guide not found' }
  const url = `${siteConfig.url}/guides/${guide.slug}/`
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `${siteConfig.url}/guides/${guide.slug}/` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: 'article',
      publishedTime: guide.publishDate,
      modifiedTime: guide.updatedDate,
      locale: 'en_GB',
    },
    twitter: { card: 'summary_large_image', title: guide.metaTitle, description: guide.metaDescription },
    robots: { index: true, follow: true },
  }
}

export default function GuideHubPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) notFound()

  const url = `${siteConfig.url}/guides/${guide.slug}/`

  const spokes = getArticlesByHub(guide.slug).map(a => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
  }))

  const pillar = guide.serviceSlug ? getServiceBySlug(guide.serviceSlug) : undefined
  const service = pillar ? { slug: pillar.slug, title: pillar.title } : null

  const tool = guide.toolSlug ? { slug: guide.toolSlug, label: TOOL_LABELS[guide.toolSlug] ?? 'Calculator' } : null

  const relatedHubs = guide.relatedHubs
    .map(s => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))
    .map(g => ({ slug: g.slug, title: g.title }))

  const schemas = [
    editorialAuthorJsonLd(),
    buildBreadcrumbSchema([
      { name: 'Guides', url: '/guides/' },
      { name: guide.title, url: `/guides/${guide.slug}/` },
    ]),
    buildArticleSchema({
      url,
      headline: guide.title,
      description: guide.metaDescription,
      datePublished: guide.publishDate,
      dateModified: guide.updatedDate,
    }),
    buildFaqPageSchema(guide.faqs),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <GuideHubContent guide={guide} spokes={spokes} service={service} tool={tool} relatedHubs={relatedHubs} />
    </>
  )
}
