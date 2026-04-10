'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import ManagementFeeCalculator from '@/components/ManagementFeeCalculator'

export default function ManagementFeeCalcContent() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Management Fee Calculator — Property Management Harrow',
        url: 'https://www.propertymanagementharrow.co.uk/tools/management-fee-calculator/',
        description: 'Calculate property management fees and compare the cost of professional management against self-management. Includes tenant find fees and portfolio costs.',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Management Fee Calculator" />
      <Header />
      <main className="flex-grow">
        <section className="relative py-16 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'Management Fee Calculator' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Free Tool</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-4 leading-tight">Management Fee Calculator</h1>
            <p className="font-sans text-[17px] max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Calculate the true cost of professional property management and compare it against self-management. Includes management fees, tenant find costs, and portfolio-level analysis.
            </p>
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="site-container">
            <ManagementFeeCalculator onOpenModal={() => setModalOpen(true)} />
          </div>
        </section>
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container max-w-3xl">
            <p className="eyebrow mb-4">How to use this tool</p>
            <h2 className="font-display text-h2 text-text mb-8 leading-tight">Understanding management fees</h2>
            <div className="flex flex-col gap-5 font-sans text-[15px] text-text-muted leading-relaxed mb-8">
              <p>Property management fees in Harrow typically range from 8% to 15% of monthly rent for full management, with most ARLA-registered agents charging between 10% and 12%. This covers rent collection, maintenance coordination, tenant communication, inspections, and compliance management.</p>
              <p>Tenant find fees are a separate one-off charge, typically equivalent to 4-6 weeks of rent, covering marketing, viewings, referencing, and tenancy setup. The longer your tenants stay, the less this fee costs you on an annualised basis — which is why good management that promotes tenant retention can save you money overall.</p>
              <p>Self-management appears cheaper on paper, but most landlords underestimate the true cost of their own time. When you factor in responding to maintenance calls, arranging contractor visits, chasing late payments, handling compliance paperwork, and managing tenant changeovers, the time commitment adds up significantly — especially across multiple properties.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-primary">Compare Specialist Quotes — Free</button>
            </div>
          </div>
        </section>
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4">Know the cost. Now find the right agent.</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>Get matched with a vetted Harrow property management specialist and compare real quotes — free, within 24 hours.</p>
            <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>Get Matched — Free</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
