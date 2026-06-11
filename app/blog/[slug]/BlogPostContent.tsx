'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQ } from '@/components/FAQ'
import { SpokeHero } from '@/components/SpokeHero'
import type { BlogArticle, ContentBlock } from '@/data/blog'

interface Related { slug: string; title: string }

function estimateReadMins(blocks: ContentBlock[]): number {
  let words = 0
  for (const b of blocks) {
    if (b.text) words += b.text.trim().split(/\s+/).length
    if (b.html) words += b.html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length
    if (b.items) for (const it of b.items) words += it.trim().split(/\s+/).length
  }
  return Math.max(3, Math.round(words / 200))
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === 'h2') return <h2 className="font-display text-h2 text-text mb-5 mt-10 leading-tight">{block.text}</h2>
  if (block.type === 'h3') return <h3 className="font-display text-[22px] text-text mb-3 mt-8 leading-snug">{block.text}</h3>
  if (block.type === 'list') {
    return (
      <ul className="list-disc pl-6 mb-6 font-sans text-[16px] text-text-muted leading-relaxed space-y-2">
        {(block.items ?? []).map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )
  }
  if (block.html) return <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-5 [&_a]:text-brand [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:underline" dangerouslySetInnerHTML={{ __html: block.html }} />
  return <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-5">{block.text}</p>
}

export default function BlogPostContent({
  article,
  hub,
  related,
}: {
  article: BlogArticle
  hub: { slug: string; title: string } | null
  related: Related[]
}) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Blog Article" />
      <Header />

      <main id="main">
        <section className="section-pad bg-white pb-0">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Articles', href: '/blog/' }, { label: article.title }]} />
            <h1 className="sr-only">{article.title}</h1>
            <div className="mt-6">
              <SpokeHero
                title={article.title}
                hubName={hub ? hub.title : null}
                hubSlug={hub ? hub.slug : article.hub}
                readMins={estimateReadMins(article.content)}
              />
            </div>
            <div className="max-w-3xl mt-6">
              <div className="flex items-center gap-3 font-sans text-[12px] text-text-muted mb-4">
                <span>{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-[#d8d4c8]" />
                <span>{article.publishDate}</span>
                <span className="w-1 h-1 rounded-full bg-[#d8d4c8]" />
                <span>By PMH</span>
              </div>
              <p className="font-sans text-[17px] text-text-muted leading-relaxed">{article.excerpt}</p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
              <article className="max-w-2xl">
                {hub && (
                  <p className="font-sans text-[13px] text-text-muted mb-6">
                    Part of our guide:{' '}
                    <Link href={`/guides/${hub.slug}/`} className="text-brand font-semibold no-underline hover:underline">{hub.title}</Link>
                  </p>
                )}

                {article.content.map((b, i) => <Block key={i} block={b} />)}

                {article.faqs && article.faqs.length > 0 && (
                  <div className="mt-12">
                    <FAQ faqs={article.faqs} title="Frequently asked questions" />
                  </div>
                )}

                <div className="mt-10">
                  <button onClick={() => setModalOpen(true)} className="btn-primary">Find a Specialist, Free</button>
                </div>
              </article>

              <aside>
                <div className="lg:sticky lg:top-24 space-y-6">
                  <div className="p-6 rounded-lg border border-[#e8e5dd] bg-[#faf9f6]">
                    <p className="eyebrow mb-2">Get matched</p>
                    <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">
                      Free for landlords. We connect you with vetted ARLA Propertymark agents in Harrow.
                    </p>
                    <button onClick={() => setModalOpen(true)} className="btn-primary w-full text-[13px] py-3">Find a Specialist</button>
                  </div>

                  {related.length > 0 && (
                    <div className="p-6 rounded-lg border border-[#e8e5dd]">
                      <p className="eyebrow mb-3">More in this guide</p>
                      <ul className="space-y-3">
                        {related.map(r => (
                          <li key={r.slug}>
                            <Link href={`/blog/${r.slug}/`} className="font-sans text-[14px] text-text leading-snug no-underline hover:text-brand transition-colors">{r.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
