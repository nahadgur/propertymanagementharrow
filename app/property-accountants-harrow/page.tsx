import type { Metadata } from 'next'
import LocalHubContent from '@/components/LocalHubContent'
import { siteConfig } from '@/data/site'
import { harrowBoroughData, spokeAreas } from '@/data/harrowData'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title:       'Property Tax Accountants Harrow | Vetted Local Specialist Network',
  description: 'Find vetted ACCA and ICAEW certified property tax accountants across the London Borough of Harrow. Specialists in Section 24, SPV incorporation, CGT planning and inheritance tax for Harrow landlords.',
  alternates:  { canonical: `${siteConfig.url}/property-accountants-harrow/` },
  openGraph: {
    title:       'Property Tax Accountants Harrow | Vetted Local Specialist Network',
    description: 'Find vetted ACCA and ICAEW certified property tax accountants across the London Borough of Harrow.',
    url:         `${siteConfig.url}/property-accountants-harrow/`,
    type:        'website',
  },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type':    ['LocalBusiness', 'ProfessionalService'],
    '@id':      `${siteConfig.url}/property-accountants-harrow/#local`,
    name:       'Property Accountants Harrow',
    url:        `${siteConfig.url}/property-accountants-harrow/`,
    description:
      'Vetted ACCA and ICAEW certified property tax accountant network serving the London Borough of Harrow. Specialists in Section 24 mitigation, SPV incorporation, CGT planning, SDLT, and inheritance tax for property investors.',
    telephone:  siteConfig.phone,
    email:      siteConfig.email,
    areaServed: {
      '@type': 'AdministrativeArea',
      name:    'London Borough of Harrow',
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
    hasOfferCatalog: {
      '@type':          'OfferCatalog',
      name:             'Property Tax Services',
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
      { '@type': 'ListItem', position: 1, name: 'Home',               item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Harrow Specialists',  item: `${siteConfig.url}/property-accountants-harrow/` },
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

export default function PropertyAccountantsHarrowPage() {
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
