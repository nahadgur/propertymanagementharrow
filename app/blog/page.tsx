import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getPublishedArticles } from '@/data/blog'
import { getGuideBySlug } from '@/data/guides'
import { siteConfig } from '@/data/site'

const TITLE = 'Harrow Landlord Articles | Property Management Harrow'
const DESCRIPTION = 'Practical articles for Harrow landlords on choosing a property manager, HMO licensing, compliance, deposits, and tenant screening. Plain-English, current UK law.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.url}/blog/` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${siteConfig.url}/blog/`, type: 'website', locale: 'en_GB' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

export default function BlogIndexPage() {
  const articles = getPublishedArticles()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteConfig.url}/blog/#blog`,
    name: 'Harrow Landlord Articles',
    description: DESCRIPTION,
    url: `${siteConfig.url}/blog/`,
    inLanguage: 'en-GB',
    publisher: { '@id': `${siteConfig.url}/#organization` },
    blogPost: articles.slice(0, 20).map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `${siteConfig.url}/blog/${a.slug}/`,
      datePublished: a.publishDate,
      dateModified: a.dateModified ?? a.publishDate,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main id="main">
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Articles' }]} />
            <div className="max-w-3xl">
              <p className="eyebrow text-white/70 mb-4">Articles</p>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                Harrow landlord articles
              </h1>
              <p className="font-sans text-[17px] text-white/85 leading-relaxed">
                Plain-English articles for Harrow landlords, written around current UK law. For the full reference, see our{' '}
                <Link href="/guides/" className="text-white underline">guides</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container">
            {articles.length === 0 ? (
              <p className="font-sans text-[16px] text-text-muted">New articles are on the way. In the meantime, browse our <Link href="/guides/" className="text-brand no-underline hover:underline">guides</Link>.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {articles.map(a => {
                  const hub = getGuideBySlug(a.hub)
                  return (
                    <Link key={a.slug} href={`/blog/${a.slug}/`} className="block p-6 rounded-lg border border-[#e8e5dd] bg-white hover:border-brand transition-colors no-underline">
                      <p className="eyebrow text-text-faint mb-2">{a.category}</p>
                      <h2 className="font-display text-[19px] text-text mb-2 leading-snug">{a.title}</h2>
                      <p className="font-sans text-[13.5px] text-text-muted leading-relaxed line-clamp-3 mb-3">{a.excerpt}</p>
                      {hub && <span className="font-sans text-[12px] text-brand">In: {hub.title}</span>}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
