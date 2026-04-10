'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import Section24Calculator from '@/components/Section24Calculator'
import Link from 'next/link'

export default function Section24CalculatorPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Section 24 Tax Calculator — Property Accountants Harrow',
        url: 'https://www.propertyaccountantsharrow.co.uk/tools/section-24-calculator/',
        description: 'Calculate the annual tax cost of Section 24 for UK landlords. Enter your rental income and mortgage interest to see exactly how much the finance cost restriction is costing you.',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Section 24 Calculator" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <section style={{ background: 'var(--green-deep)' }} className="py-16">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'Section 24 Calculator' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Free Tool</p>
            <h1 className="font-display text-h1 text-white mb-4 leading-tight">Section 24 Tax Calculator</h1>
            <p className="font-sans text-[17px] max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Enter your rental income and mortgage interest to calculate exactly how much the finance cost restriction is costing you each year.
            </p>
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="site-container">
            <Section24Calculator onOpenModal={() => setModalOpen(true)} />
          </div>
        </section>
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container max-w-3xl">
            <p className="eyebrow mb-4">How Section 24 works</p>
            <h2 className="font-display text-h2 text-text mb-8 leading-tight">Understanding the finance cost restriction</h2>
            <div className="flex flex-col gap-5 font-sans text-[15px] text-text-muted leading-relaxed mb-8">
              <p>Before 2017, landlords could deduct 100% of mortgage interest as a business expense against rental income. A higher-rate taxpayer with £10,000 of mortgage interest received £4,000 of tax relief (40% of the deduction). This was phased out between 2017 and 2020, replaced by a flat 20% tax credit regardless of the landlord's tax rate.</p>
              <p>Under current rules, a 40% taxpayer with the same £10,000 of mortgage interest receives only £2,000 of tax credit — losing £2,000 per year. For a 45% taxpayer, the annual loss is £2,500 per £10,000 of finance cost. Across a leveraged portfolio with £100,000+ of annual mortgage interest, the cumulative cost can be substantial.</p>
              <p>The key insight from this calculator is that the Section 24 cost is entirely determined by two variables: the amount of mortgage interest and the gap between your tax rate and 20%. If you pay basic rate tax (20%), Section 24 costs you nothing. If you pay 40%, you lose 20p for every pound of mortgage interest. At 45%, you lose 25p per pound.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-primary">Find a Section 24 Specialist</button>
              <Link href="/services/section-24-tax-mitigation/" className="btn-outline">Section 24 Mitigation</Link>
              <Link href="/guides/ultimate-guide-section-24/" className="btn-ghost">Read the full guide</Link>
            </div>
          </div>
        </section>
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4">Know your number. Now get the strategy.</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>A specialist will model the right mitigation approach for your exact portfolio — free, within 48 hours.</p>
            <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>Find My Specialist — Free</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
