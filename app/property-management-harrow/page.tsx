import type { Metadata } from 'next'
import LocalHubContent from '@/components/LocalHubContent'
import { siteConfig } from '@/data/site'
import { harrowBoroughData, spokeAreas } from '@/data/harrowData'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title:       'Property Management Harrow | Vetted Local Specialist Network',
  description: 'Find vetted ARLA Propertymark and RICS qualified property management specialists across the London Borough of Harrow. Experts in lettings management, tenant sourcing, compliance, and portfolio management for Harrow landlords.',
  alternates:  { canonical: `${siteConfig.url}/property-management-harrow/` },
  openGraph: {
    title:       'Property Management Harrow | Vetted Local Specialist Network',
    description: 'Find vetted ARLA Propertymark and RICS qualified property management specialists across the London Borough of Harrow.',
    url:         `${siteConfig.url}/property-management-harrow/`,
    type:        'website',
  },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type':    ['LocalBusiness', 'ProfessionalService'],
    '@id':      `${siteConfig.url}/property-management-harrow/#local`,
    name:       'Property Management Harrow',
    url:        `${siteConfig.url}/property-management-harrow/`,
    description:
      'Vetted ARLA Propertymark and RICS qualified property management network serving the London Borough of Harrow. Specialists in lettings management, tenant sourcing, rent collection, compliance, and portfolio management for landlords.',
    telephone:  siteConfig.phone,
    email:      siteConfig.email,
    areaServed: {
      '@type': 'AdministrativeArea',
      name:    'London Borough of Harrow',
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
    hasOfferCatalog: {
      '@type':          'OfferCatalog',
      name:             'Property Management Services',
      itemListElement:  services.map(s => ({
        '@type':      'Offer',
        itemOffered:  { '@type': 'Service', name: s.title },
      })),
    },
  },
  {
    '@context':       'https://schema.org',
    '@type':          'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',                item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Harrow Specialists',  item: `${siteConfig.url}/property-management-harrow/` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: harrowBoroughData.faqs.map(faq => ({
      '@type': 'Question',
      name:    faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  },
]

export default function PropertyManagementHarrowPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <LocalHubContent />
    </>
  )
}
