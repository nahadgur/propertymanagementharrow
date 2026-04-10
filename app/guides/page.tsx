'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

const guides = [
  { title: 'The Ultimate Guide to Section 24 Tax for UK Landlords', desc: 'Everything you need to understand the mortgage interest finance cost restriction — how it works, the impact on your returns, and the legal strategies available to mitigate it. Includes the Section 24 calculator.', href: '/guides/ultimate-guide-section-24/', pill: 'Definitive guide', readTime: '~15 min read' },
  { title: 'The Complete Guide to Incorporating a Buy-to-Let Portfolio', desc: 'A step-by-step guide to SPV company incorporation for UK landlords — the SDLT cost, CGT on transfer, annual saving, breakeven calculation, and how to set up the company correctly. Includes the SPV calculator.', href: '/guides/incorporating-buy-to-let-portfolio/', pill: 'Step-by-step', readTime: '~20 min read' },
]

export default function GuidesPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Guides Index" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <section style={{ background: 'var(--green-deep)' }} className="py-20">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>In-Depth Guides</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">Property tax guides for UK landlords.</h1>
            <p className="font-sans text-[17px] max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>Comprehensive, expert-written guides on the tax challenges facing UK property investors — with embedded calculators and direct links to specialist advice.</p>
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="flex flex-col gap-8">
              {guides.map((guide, i) => (
                <div key={guide.href} className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-8 p-8 border border-[#f0eee8] items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1" style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>{guide.pill}</span>
                      <span className="font-sans text-[11px] text-text-faint">{guide.readTime}</span>
                    </div>
                    <h2 className="font-display text-[24px] text-text mb-3 leading-snug">{guide.title}</h2>
                    <p className="font-sans text-[14px] text-text-muted leading-relaxed">{guide.desc}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link href={guide.href} className="btn-primary text-[13px] py-3 text-center">Read guide &rarr;</Link>
                    <button onClick={() => setModalOpen(true)} className="font-sans text-[12px] text-text-muted cursor-pointer bg-transparent border-0 text-center hover:text-brand transition-colors">Get matched free</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4">Ready to act on what you have read?</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>A specialist will model the right strategy for your portfolio — free, within 48 hours.</p>
            <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>Find My Specialist — Free</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
