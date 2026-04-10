import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SpokePageContent from '@/components/SpokePageContent'
import { spokeAreas, getSpokeBySlug, getAllSpokeSlugs } from '@/data/harrowData'
import { siteConfig } from '@/data/site'

interface Props {
  params: { area: string }
}

export function generateStaticParams() {
  return getAllSpokeSlugs().map(slug => ({ area: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getSpokeBySlug(params.area)
  if (!area) return { title: 'Area Not Found' }

  return {
    title:       area.metaTitle,
    description: area.metaDesc,
    alternates:  { canonical: `${siteConfig.url}/harrow/${area.slug}/` },
    openGraph: {
      title:       area.metaTitle,
      description: area.metaDesc,
      url:         `${siteConfig.url}/harrow/${area.slug}/`,
      type:        'website',
    },
  }
}

export default function SpokeAreaPage({ params }: Props) {
  const area = getSpokeBySlug(params.area)
  if (!area) notFound()

  const schema = [
    {
      '@context':   'https://schema.org',
      '@type':      ['LocalBusiness', 'ProfessionalService'],
      '@id':        `${siteConfig.url}/harrow/${area.slug}/#local`,
      name:         `Property Management ${area.name}`,
      url:          `${siteConfig.url}/harrow/${area.slug}/`,
      description:  area.metaDesc,
      telephone:    siteConfig.phone,
      email:        siteConfig.email,
      areaServed: [
        {
          '@type': 'City',
          name:    area.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name:    'London Borough of Harrow',
          },
        },
        {
          '@type': 'PostalCode',
          postalCode: area.postcode,
          containedInPlace: {
            '@type': 'Country',
            name:    'United Kingdom',
          },
        },
      ],
      geo: {
        '@type':    'GeoCoordinates',
        latitude:   area.lat,
        longitude:  area.lng,
      },
      priceRange: '\u00a3\u00a3',
    },
    {
      '@context':       'https://schema.org',
      '@type':          'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',               item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Harrow Specialists',  item: `${siteConfig.url}/property-management-harrow/` },
        { '@type': 'ListItem', position: 3, name: area.name },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type':    'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name:    `Do you cover ${area.name} specifically?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text:    `Yes. Our network includes ARLA Propertymark and RICS qualified specialists who actively manage properties in the ${area.postcode} postcode area. Most also cover neighbouring Harrow postcodes and wider North-West London.`,
          },
        },
        {
          '@type': 'Question',
          name:    `What is the primary property management focus for ${area.name} landlords?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text:    `${area.name}'s primary management focus is ${area.primaryFocus}. ${area.managementAngles[0].body}`,
          },
        },
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
      <SpokePageContent area={area} />
    </>
  )
}
