'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import SPVCalculator from '@/components/SPVCalculator'
import Link from 'next/link'

export default function SPVCalcContent() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'SPV vs Personal Tax Calculator — Property Accountants Harrow',
        url: 'https://www.propertyaccountantsharrow.co.uk/tools/spv-vs-personal-tax-calculator/',
        description: 'Compare the tax position of holding buy-to-let property in personal name vs an SPV limited company. Includes breakeven analysis on transfer costs.',
        applicationCategory: 'FinanceApplication', operatingSystem: 'Web browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="SPV Calculator" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <section className="relative py-16 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/block-estate-management.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'SPV vs Personal Tax Calculator' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Free Tool</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-4 leading-tight">SPV vs Personal Tax Calculator</h1>
            <p className="font-sans text-[17px] max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Compare the annual tax in personal name against an SPV limited company — and calculate how long it takes to recover the transfer costs.
            </p>
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="site-container"><SPVCalculator onOpenModal={() => setModalOpen(true)} /></div>
        </section>
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container max-w-3xl">
            <p className="eyebrow mb-4">Important limitations</p>
            <h2 className="font-display text-h2 text-text mb-6 leading-tight">What this calculator does not include</h2>
            <div className="flex flex-col gap-4 font-sans text-[15px] text-text-muted leading-relaxed mb-8">
              <p>The SDLT and CGT estimates in this calculator are simplified. SDLT is calculated using standard residential rates plus the 3% surcharge on the full portfolio value — it does not account for linked transaction rules, potential mixed-use relief, or partnership relief that may apply in specific circumstances. The CGT estimate uses a flat 24% rate on the full estimated gain, without accounting for annual exempt amounts, spousal ownership, or staged disposals.</p>
              <p>Additional transfer costs not included: mortgage product fees (most residential mortgages cannot be transferred to a company and must be refinanced), solicitor fees for the transfer documentation, and the ongoing additional accountancy cost of running a limited company (corporation tax return, annual accounts, confirmation statement).</p>
              <p>The profit extraction question is also not modelled here. Salary and dividends extracted from the company are subject to further personal taxation. A specialist will model the full picture — including the most tax-efficient extraction strategy — before any recommendation is made.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-primary">Get a Full SPV Analysis</button>
              <Link href="/services/spv-company-incorporation/" className="btn-outline">SPV Incorporation Service</Link>
            </div>
          </div>
        </section>
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4">The real calculation needs a specialist.</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>This tool gives you the direction. A specialist gives you the numbers you can act on — free, within 48 hours.</p>
            <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>Find My SPV Specialist — Free</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
