// lib/schema.ts
// Shared JSON-LD builders for hubs and spokes. The editorial author is the
// brand acronym "PMH" (Property Management Harrow), an editorial Organization
// entity, not an invented person. Pages reference it by @id.
import { siteConfig } from '@/data/site';

const ORG_ID = `${siteConfig.url}/#organization`;
export const AUTHOR_ID = `${siteConfig.url}/#editorial`;

export function editorialAuthorJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': AUTHOR_ID,
    name: 'PMH',
    alternateName: `${siteConfig.name} editorial team`,
    url: siteConfig.url,
    parentOrganization: { '@id': ORG_ID },
    description:
      'Editorial team for Property Management Harrow. Compliance and tax points are checked against current GOV.UK landlord guidance, ARLA Propertymark, the deposit protection schemes, and London Borough of Harrow licensing. We are a matching service, not a managing agent.',
  };
}

interface ArticleOpts {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

export function buildArticleSchema(opts: ArticleOpts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@id': AUTHOR_ID },
    reviewedBy: { '@id': AUTHOR_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: opts.url,
    inLanguage: 'en-GB',
  };
}

export function buildBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: `${siteConfig.url}${it.url}` } : {}),
    })),
  };
}

export function buildFaqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer.replace(/<[^>]+>/g, '') },
    })),
  };
}
