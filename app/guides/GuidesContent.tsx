'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import { guides as GUIDE_DATA } from '@/data/guides'

// Data-driven from data/guides.ts so all 10 hubs list automatically.
const guides = GUIDE_DATA.map(g => ({
  title: g.title,
  desc: g.metaDescription,
  href: `/guides/${g.slug}/`,
  pill: g.heroEyebrow,
  readTime: `~${Math.max(8, Math.round(g.sections.length * 2.5))} min`,
  tags: [] as string[],
}))

export default function GuidesContent() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Guides Index" />
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/block-estate-management.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="relative z-10">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>In-Depth Guides</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
              Property management guides for UK landlords and investors.
            </h1>
            <p className="font-sans text-[16px] md:text-[17px] max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Comprehensive, specialist-written guides covering the full property management lifecycle — lettings, compliance, tenant screening, and portfolio oversight. All include practical checklists and direct links to specialist advice.
            </p>
          </div>
                  </div>
        </section>

        {/* Guides list */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="flex flex-col gap-6">
              {guides.map((guide, i) => (
                <div key={guide.href} className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-6 p-6 md:p-8 border border-[#f0eee8] items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1"
                        style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
                        {guide.pill}
                      </span>
                      <span className="font-sans text-[11px] text-text-faint">{guide.readTime} read</span>
                    </div>
                    <h2 className="font-display text-[22px] md:text-[24px] text-text mb-3 leading-snug">{guide.title}</h2>
                    <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">{guide.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.tags.map(tag => (
                        <span key={tag} className="font-sans text-[11px] text-text-faint border border-[#f0eee8] px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 lg:items-end">
                    <Link href={guide.href} className="btn-primary text-[13px] py-3 px-6 text-center whitespace-nowrap">
                      Read guide &rarr;
                    </Link>
                    <button onClick={() => setModalOpen(true)}
                      className="font-sans text-[12px] text-text-muted cursor-pointer bg-transparent border-0 text-center hover:text-brand transition-colors">
                      Get matched free
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-[1.8rem] md:text-h2 text-white mb-4">Ready to act on what you have read?</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              A vetted Harrow property management specialist will assess the right approach for your portfolio — free, within 48 hours.
            </p>
            <button onClick={() => setModalOpen(true)}
              className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer"
              style={{ background: 'white', color: 'var(--green)' }}>
              Find My Specialist — Free
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
