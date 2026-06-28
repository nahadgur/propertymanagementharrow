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

function CtaBanner({ onClick }: { onClick: () => void }) {
  return (
    <div className="my-10 px-6 py-6 md:px-10 md:py-7 rounded-lg border border-[#e8e5dd] bg-[#faf9f6] text-center">
      <p className="eyebrow mb-2 text-xs">Get matched</p>
      <p className="font-display text-[18px] lg:text-[21px] text-text mb-1.5 leading-snug">Find a property manager in Harrow</p>
      <p className="font-sans text-[15px] text-text-muted leading-snug mb-4 max-w-xl mx-auto">
        Free for landlords. We connect you with vetted ARLA Propertymark agents in Harrow.
      </p>
      <button onClick={onClick} className="btn-primary py-2.5">Find a Specialist, Free</button>
    </div>
  )
}

export default function BlogPostContent({
  article,
  hub,
}: {
  article: BlogArticle
  hub: { slug: string; title: string } | null
}) {
  const [modalOpen, setModalOpen] = useState(false)

  // Index of the 2nd h2 so we can inject a CTA banner immediately before it.
  let h2Count = 0
  let secondH2Index = -1
  article.content.forEach((b, i) => {
    if (b.type === 'h2') {
      h2Count += 1
      if (h2Count === 2 && secondH2Index === -1) secondH2Index = i
    }
  })

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
            <div className="mt-6">
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
            <article className="max-w-none">
              {article.content.flatMap((b, i) =>
                i === secondH2Index
                  ? [<CtaBanner key="cta-mid" onClick={() => setModalOpen(true)} />, <Block key={i} block={b} />]
                  : [<Block key={i} block={b} />]
              )}

              {article.faqs && article.faqs.length > 0 && (
                <div className="mt-12">
                  <FAQ faqs={article.faqs} title="Frequently asked questions" />
                </div>
              )}

              <CtaBanner onClick={() => setModalOpen(true)} />

              <div className="mt-10">
                <Link href="/blog/" className="text-brand font-semibold no-underline hover:underline">&larr; Back to all articles</Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
