'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import RentalYieldCalculator from '@/components/RentalYieldCalculator'

export default function RentalYieldCalcContent() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Rental Yield Calculator — Property Management Harrow',
        url: 'https://www.propertymanagementharrow.co.uk/tools/rental-yield-calculator/',
        description: 'Calculate gross and net rental yield for your property. Enter property value, monthly rent, and annual costs to see your true return on investment.',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Rental Yield Calculator" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <section className="relative py-16 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'Rental Yield Calculator' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Free Tool</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-4 leading-tight">Rental Yield Calculator</h1>
            <p className="font-sans text-[17px] max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Calculate your gross and net rental yield instantly. Enter your property value, monthly rent, and running costs to understand your true return on investment.
            </p>
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="site-container">
            <RentalYieldCalculator onOpenModal={() => setModalOpen(true)} />
          </div>
        </section>
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container max-w-3xl">
            <p className="eyebrow mb-4">How to use this tool</p>
            <h2 className="font-display text-h2 text-text mb-8 leading-tight">Understanding rental yield</h2>
            <div className="flex flex-col gap-5 font-sans text-[15px] text-text-muted leading-relaxed mb-8">
              <p>Rental yield is the most important metric for evaluating whether a buy-to-let property is delivering a good return. Gross yield gives you the headline figure — annual rent as a percentage of property value — but it does not tell the full story.</p>
              <p>Net yield accounts for the real costs of ownership: management fees, insurance, maintenance, and void periods. A property with a 6% gross yield might only deliver 3.5% net once costs are factored in. Understanding this gap is essential for making informed investment decisions.</p>
              <p>In Harrow, typical gross yields range from 4% to 6% depending on property type and area. HMOs and multi-unit properties tend to deliver higher yields but come with greater management complexity. A professional property manager can help maximise your net yield by reducing void periods, controlling maintenance costs, and ensuring your rent stays competitive.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-primary">Get Matched With a Specialist</button>
            </div>
          </div>
        </section>
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4">Know your yield. Now optimise it.</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>A vetted Harrow property manager can help maximise your net yield through better tenant retention, faster lettings, and smarter maintenance — free matching, within 24 hours.</p>
            <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>Get Matched — Free</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
