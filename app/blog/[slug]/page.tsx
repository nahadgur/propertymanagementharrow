import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getPublishedArticles } from '@/data/blog'
import { getGuideBySlug } from '@/data/guides'
import { siteConfig } from '@/data/site'
import {
  editorialAuthorJsonLd,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
} from '@/lib/schema'
import BlogPostContent from './BlogPostContent'

export const dynamicParams = false

export function generateStaticParams() {
  // Draft spokes are not pre-rendered; they 404 until the publisher flips them.
  return getPublishedArticles().map(a => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article || article.draft) return { title: 'Not Found' }
  const url = `${siteConfig.url}/blog/${article.slug}/`
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `${siteConfig.url}/blog/${article.slug}/` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: 'article',
      publishedTime: article.publishDate,
      modifiedTime: article.dateModified ?? article.publishDate,
      locale: 'en_GB',
    },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription },
    robots: { index: true, follow: true },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article || article.draft) notFound()

  const url = `${siteConfig.url}/blog/${article.slug}/`
  const dateModified = article.dateModified ?? article.publishDate

  const hubGuide = getGuideBySlug(article.hub)
  const hub = hubGuide ? { slug: hubGuide.slug, title: hubGuide.title } : null

  const schemas: object[] = [
    editorialAuthorJsonLd(),
    buildBreadcrumbSchema([
      { name: 'Articles', url: '/blog/' },
      { name: article.title, url: `/blog/${article.slug}/` },
    ]),
    buildArticleSchema({
      url,
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishDate,
      dateModified,
    }),
  ]
  if (article.faqs && article.faqs.length > 0) schemas.push(buildFaqPageSchema(article.faqs))

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <BlogPostContent article={article} hub={hub} />
    </>
  )
}
