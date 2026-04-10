'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CGTCalculator from '@/components/CGTCalculator'
import Link from 'next/link'

export default function CGTCalculatorPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'UK Property Capital Gains Tax Calculator — Property Accountants Harrow',
        url: 'https://www.propertyaccountantsharrow.co.uk/tools/capital-gains-tax-calculator-uk/',
        description: 'Estimate your UK Capital Gains Tax on a residential property disposal. Includes Private Residence Relief, lettings relief, and the Annual Exempt Amount.',
        applicationCategory: 'FinanceApplication', operatingSystem: 'Web browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="CGT Calculator" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <section className="relative py-16 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/rent-collection-arrears-management.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'CGT Calculator' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Free Tool</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-4 leading-tight">UK Property CGT Calculator</h1>
            <p className="font-sans text-[17px] max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Estimate your Capital Gains Tax on a residential property disposal — including Private Residence Relief, lettings relief, and the Annual Exempt Amount.
            </p>
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="site-container"><CGTCalculator onOpenModal={() => setModalOpen(true)} /></div>
        </section>
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container max-w-3xl">
            <p className="eyebrow mb-4">CGT rates from October 2024</p>
            <h2 className="font-display text-h2 text-text mb-6 leading-tight">What changed in the Autumn Budget 2024</h2>
            <div className="flex flex-col gap-4 font-sans text-[15px] text-text-muted leading-relaxed mb-8">
              <p>From 30 October 2024, CGT rates on residential property were reduced from 18% (basic rate) and 28% (higher rate) to 18% and 24% respectively. The Annual Exempt Amount remains at £3,000 for the 2024/25 tax year, reduced from the £12,300 that applied until April 2023. This calculator uses the current rates and exemption.</p>
              <p>The 60-day reporting rule means that gains on UK residential property must be reported and the CGT paid within 60 days of the completion date — not at the end of the tax year. This is a separate process from the annual self-assessment return. Missing the 60-day deadline attracts automatic penalties of £100, increasing to £300 for delays exceeding 6 months.</p>
              <p>For non-UK residents, CGT on UK residential property has applied since April 2015, with the 60-day reporting requirement applying regardless of whether any tax is payable.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-primary">Get CGT Planning Advice</button>
              <Link href="/services/capital-gains-tax-planning/" className="btn-outline">CGT Planning Service</Link>
            </div>
          </div>
        </section>
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4">Plan the disposal before you agree the sale.</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>A specialist will review PRR eligibility, spousal transfers, and disposal timing to reduce your CGT liability — free, within 48 hours.</p>
            <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>Find My CGT Specialist — Free</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
