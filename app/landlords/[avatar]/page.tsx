import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AvatarPageContent from '@/components/AvatarPageContent'
import { avatarContent, getAvatarBySlug, getAllAvatarSlugs } from '@/data/avatarContent'
import { siteConfig } from '@/data/site'

interface Props {
  params: { avatar: string }
}

export function generateStaticParams() {
  return getAllAvatarSlugs().map(slug => ({ avatar: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const avatar = getAvatarBySlug(params.avatar)
  if (!avatar) return { title: 'Not Found' }

  return {
    title:       avatar.metaTitle,
    description: avatar.metaDesc,
    alternates:  { canonical: `${siteConfig.url}/landlords/${avatar.slug}/` },
    openGraph: {
      title:       avatar.metaTitle,
      description: avatar.metaDesc,
      url:         `${siteConfig.url}/landlords/${avatar.slug}/`,
      type:        'website',
    },
  }
}

export default function AvatarPage({ params }: Props) {
  const avatar = getAvatarBySlug(params.avatar)
  if (!avatar) notFound()

  const schema = [
    {
      '@context':    'https://schema.org',
      '@type':       'WebPage',
      name:          avatar.metaTitle,
      url:           `${siteConfig.url}/landlords/${avatar.slug}/`,
      description:   avatar.metaDesc,
      isPartOf:      { '@id': `${siteConfig.url}/#website` },
      about: {
        '@type': 'Thing',
        name:    avatar.title,
      },
    },
    {
      '@context':   'https://schema.org',
      '@type':      'FAQPage',
      mainEntity:   avatar.faqs.map(faq => ({
        '@type':  'Question',
        name:     faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@context':       'https://schema.org',
      '@type':          'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',      item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Landlords', item: `${siteConfig.url}/landlords/` },
        { '@type': 'ListItem', position: 3, name: avatar.title },
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
      <AvatarPageContent avatar={avatar} />
    </>
  )
}
