import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageContent from '@/components/ServicePageContent'
import { services, getServiceBySlug } from '@/data/services'
import { getServiceContentBySlug } from '@/data/serviceContent'
import { siteConfig } from '@/data/site'

interface Props {
  params: { serviceSlug: string }
}

// Pre-render all 5 service pages at build time
export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getServiceContentBySlug(params.serviceSlug)
  const service = getServiceBySlug(params.serviceSlug)

  if (!content || !service) return { title: 'Service Not Found' }

  return {
    title:       content.metaTitle,
    description: content.metaDesc,
    alternates:  { canonical: `${siteConfig.url}/services/${service.slug}/` },
    openGraph: {
      title:       content.metaTitle,
      description: content.metaDesc,
      url:         `${siteConfig.url}/services/${service.slug}/`,
      type:        'website',
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.serviceSlug)
  const content = getServiceContentBySlug(params.serviceSlug)

  if (!service || !content) notFound()

  // Schema: ProfessionalService + FAQPage + BreadcrumbList
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type':    'ProfessionalService',
      name:       `${service.title} — ${siteConfig.name}`,
      url:        `${siteConfig.url}/services/${service.slug}/`,
      description: service.description,
      serviceType: service.title,
      provider: {
        '@type': 'Organization',
        name:    siteConfig.name,
        url:     siteConfig.url,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name:    'United Kingdom',
      },
    },
    {
      '@context':   'https://schema.org',
      '@type':      'FAQPage',
      mainEntity:   service.faqs.map(faq => ({
        '@type':  'Question',
        name:     faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@context':       'https://schema.org',
      '@type':          'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services/` },
        { '@type': 'ListItem', position: 3, name: service.title },
      ],
    },
  ]

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <ServicePageContent service={service} content={content} />
    </>
  )
}
