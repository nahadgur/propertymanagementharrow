'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQ } from '@/components/FAQ'
import type { Guide, GuideBlock } from '@/data/guides'

interface Spoke { slug: string; title: string; excerpt: string }

function Block({ block }: { block: GuideBlock }) {
  if (block.type === 'h3') {
    return <h3 className="font-display text-[22px] text-text mb-3 mt-8 leading-snug">{block.text}</h3>
  }
  if (block.type === 'list') {
    return (
      <ul className="list-disc pl-6 mb-6 font-sans text-[16px] text-text-muted leading-relaxed space-y-2">
        {(block.items ?? []).map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )
  }
  return <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-5">{block.text}</p>
}

export default function GuideHubContent({
  guide,
  spokes,
  service,
  tool,
  relatedHubs,
}: {
  guide: Guide
  spokes: Spoke[]
  service: { slug: string; title: string } | null
  tool: { slug: string; label: string } | null
  relatedHubs: { slug: string; title: string }[]
}) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location={`${guide.heroEyebrow} Guide`} />
      <Header />

      <main id="main">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: guide.heroEyebrow }]} />
            <div className="max-w-3xl">
              <p className="eyebrow text-white/70 mb-4">{guide.heroEyebrow}</p>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                {guide.heroHeading}
              </h1>
              <p className="font-sans text-[17px] text-white/85 leading-relaxed mb-4">{guide.heroIntro}</p>
              <p className="font-sans text-[12px] text-white/55">
                By PMH, the Property Management Harrow editorial team. Reviewed {guide.updatedDate}.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

              {/* ToC sidebar */}
              <div className="sticky top-24 hidden lg:block">
                <p className="eyebrow mb-4">Contents</p>
                <nav className="flex flex-col gap-0">
                  {guide.sections.map((s, i) => (
                    <a key={s.id} href={`#${s.id}`}
                      className="flex items-start gap-3 py-3 border-b border-[#f0eee8] no-underline transition-colors hover:text-brand group font-sans text-[13px] text-text-muted">
                      <span className="flex-shrink-0 font-display text-[12px] mt-0.5" style={{ color: 'var(--green-mid)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="group-hover:text-brand transition-colors">{s.heading}</span>
                    </a>
                  ))}
                </nav>
                <button onClick={() => setModalOpen(true)} className="btn-primary w-full mt-8 text-[12px] py-3">
                  Find a Specialist, Free
                </button>
              </div>

              {/* Article body */}
              <article className="max-w-2xl">
                {guide.sections.map(section => (
                  <section key={section.id} id={section.id} className="scroll-mt-24 mb-2">
                    <h2 className="font-display text-h2 text-text mb-6 mt-10 leading-tight">{section.heading}</h2>
                    {section.blocks.map((b, i) => <Block key={i} block={b} />)}
                  </section>
                ))}

                {/* Calculator link */}
                {tool && (
                  <div className="my-8 p-6 rounded-lg border border-[#e8e5dd] bg-[#faf9f6]">
                    <p className="eyebrow mb-2">Try the calculator</p>
                    <Link href={`/tools/${tool.slug}/`} className="font-display text-[20px] text-text hover:text-brand transition-colors">
                      {tool.label} &rarr;
                    </Link>
                  </div>
                )}

                {/* Child spokes */}
                {spokes.length > 0 && (
                  <div className="mt-12">
                    <p className="eyebrow mb-4">More on {guide.heroEyebrow.toLowerCase()}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {spokes.map(sp => (
                        <Link key={sp.slug} href={`/blog/${sp.slug}/`} className="block p-5 rounded-lg border border-[#e8e5dd] bg-white hover:border-brand transition-colors no-underline">
                          <p className="font-display text-[17px] text-text mb-1.5 leading-snug">{sp.title}</p>
                          <p className="font-sans text-[13px] text-text-muted leading-relaxed line-clamp-2">{sp.excerpt}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-12">
                  <FAQ faqs={guide.faqs} title="Frequently asked questions" />
                </div>

                {/* Service pillar + related hubs */}
                {(service || relatedHubs.length > 0) && (
                  <div className="mt-12 pt-8 border-t border-[#e8e5dd]">
                    {service && (
                      <p className="font-sans text-[15px] text-text-muted mb-4">
                        Related service:{' '}
                        <Link href={`/services/${service.slug}/`} className="text-brand font-semibold no-underline hover:underline">{service.title}</Link>
                      </p>
                    )}
                    {relatedHubs.length > 0 && (
                      <div className="flex flex-wrap gap-2.5">
                        {relatedHubs.map(h => (
                          <Link key={h.slug} href={`/guides/${h.slug}/`} className="inline-flex text-[13px] font-medium text-brand bg-[#f3f6f3] border border-[#dde6dd] rounded-full px-3.5 py-1.5 no-underline hover:bg-[#e8efe8] transition-colors">
                            {h.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--green)' }} className="py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">Match with a vetted Harrow property manager</h2>
            <p className="font-sans text-[16px] text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
              Free for landlords. We connect you with ARLA Propertymark agents who handle compliance, voids, and day-to-day management.
            </p>
            <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>
              Find a Specialist, Free
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
