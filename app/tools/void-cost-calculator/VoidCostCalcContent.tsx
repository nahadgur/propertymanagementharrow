'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import VoidCostCalculator from '@/components/VoidCostCalculator'

export default function VoidCostCalcContent() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Void Cost Calculator — Property Management Harrow',
        url: 'https://www.propertymanagementharrow.co.uk/tools/void-cost-calculator/',
        description: 'Calculate the true cost of void periods including lost rent, re-letting costs, and mortgage payments during empty periods. See how professional management can pay for itself.',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Void Cost Calculator" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <section className="relative py-16 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'Void Cost Calculator' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Free Tool</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-4 leading-tight">Void Cost Calculator</h1>
            <p className="font-sans text-[17px] max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Calculate the true cost of empty periods on your rental property — including lost rent, re-letting expenses, and ongoing mortgage payments. See how many days faster a professional manager needs to let your property to pay for themselves.
            </p>
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="site-container">
            <VoidCostCalculator onOpenModal={() => setModalOpen(true)} />
          </div>
        </section>
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container max-w-3xl">
            <p className="eyebrow mb-4">How to use this tool</p>
            <h2 className="font-display text-h2 text-text mb-8 leading-tight">Understanding void costs</h2>
            <div className="flex flex-col gap-5 font-sans text-[15px] text-text-muted leading-relaxed mb-8">
              <p>Void periods are one of the biggest hidden costs in property investment. Most landlords think about voids purely in terms of lost rent, but the true cost is much higher when you factor in mortgage payments that continue during empty periods, cleaning and preparation costs, marketing expenses, and tenant referencing fees.</p>
              <p>The break-even analysis in this calculator shows something many landlords overlook: professional property management often pays for itself purely through reduced void periods. If a managing agent can let your property even two or three weeks faster than you could self-manage — through better marketing reach, faster viewings, and professional tenant screening — their annual fee may cost you nothing in net terms.</p>
              <p>In the Harrow rental market, well-managed properties typically experience void periods of less than one week between tenancies, compared to three to four weeks for self-managed properties. The difference comes down to proactive tenant communication, early re-marketing before a tenant moves out, and established relationships with relocation agents and corporate tenants.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-primary">Get Matched With a Specialist</button>
            </div>
          </div>
        </section>
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4">Stop losing money to empty periods.</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>A vetted Harrow specialist can reduce your void periods and protect your rental income — free matching, within 24 hours.</p>
            <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>Get Matched — Free</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
