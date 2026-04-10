'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'How We Match You — Property Management Harrow',
  url: `${siteConfig.url}/how-we-match-you/`,
  description:
    'Learn how Property Management Harrow vets and matches landlords with ARLA Propertymark and RICS qualified property management specialists.',
  isPartOf: { '@id': `${siteConfig.url}/#website` },
}

const vettingCriteria = [
  {
    num: '01',
    title: 'ARLA Propertymark or RICS membership',
    body: 'Every specialist in our network holds current ARLA Propertymark or RICS membership. We verify membership status directly with each professional body before any introduction is made. We do not introduce unqualified agents, unregulated operators, or firms without recognised industry accreditation.',
  },
  {
    num: '02',
    title: 'Property management expertise',
    body: 'We require evidence that property management represents a substantial and defined component of the specialist\'s practice — not occasional landlord work absorbed into a general lettings caseload. This means dedicated property management knowledge, continuing professional development in landlord and tenant legislation, and a demonstrable track record managing portfolios in the Harrow area.',
  },
  {
    num: '03',
    title: 'Compliance management capability',
    body: 'Any agent can list a property. Very few have the systems and expertise to manage the full compliance burden — gas safety certificates, electrical safety inspections, EPC requirements, deposit protection, Right to Rent checks, and HMO licensing. We assess each specialist\'s compliance management processes and verify that nothing falls through the cracks.',
  },
  {
    num: '04',
    title: 'Client references from landlords',
    body: 'We speak directly with existing landlord clients of prospective network members before approving their inclusion. References are assessed for responsiveness, proactivity, quality of management, and whether the property manager identified ways to improve portfolio performance the landlord had not previously considered.',
  },
  {
    num: '05',
    title: 'Professional indemnity and client money protection',
    body: 'All network specialists carry professional indemnity insurance and are members of a client money protection scheme. We verify coverage levels and confirm that property management work is within the scope of each specialist\'s policy. Agents without adequate coverage or client money protection are not included in our network.',
  },
  {
    num: '06',
    title: 'Property redress scheme and data compliance',
    body: 'All specialists in our network are registered with a government-approved property redress scheme and the Information Commissioner\'s Office. They operate in compliance with UK GDPR. We do not make introductions to practitioners who cannot confirm appropriate complaint resolution procedures and data handling for the confidential information shared during a management relationship.',
  },
]

const matchingSteps = [
  {
    title: 'Your enquiry arrives',
    body: 'When you complete our matching form or call us directly, we capture the detail of your portfolio — size, location, property types, current management arrangement (if any), and the specific management need you are trying to address.',
  },
  {
    title: 'We assess your situation',
    body: 'A member of our team reviews your enquiry, categorises the primary management need, and identifies which area of Harrow or London our network specialists cover for your property locations.',
  },
  {
    title: 'We identify your specialist',
    body: 'We match your enquiry against our active network — looking for a specialist with the right accreditation, relevant portfolio experience (HMO vs standard buy-to-let, single property vs portfolio, residential vs mixed-use), and capacity to take on new management instructions.',
  },
  {
    title: 'We make the introduction',
    body: 'Within 48 hours of your initial enquiry, we make a direct, personal introduction between you and your matched specialist. You receive the specialist\'s contact details and they receive a brief of your situation. There are no intermediaries in the conversation from this point.',
  },
  {
    title: 'You control the engagement',
    body: 'The decision to engage the specialist — and on what terms — is entirely yours. We do not mandate service packages, minimum fees, or any commitment to proceed. Our role ends at the introduction. What follows is a direct relationship between you and a professional you can trust.',
  },
]

export default function HowWeMatchContent() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="How We Match You" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="relative z-10">
          <div className="site-container">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <Link href="/" className="no-underline hover:text-white/70 transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>How We Match You</span>
            </nav>
            <div className="max-w-2xl">
              <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Our Process</p>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                How we match you with the right property management specialist.
              </h1>
              <p className="font-sans text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Every specialist in our Harrow network is vetted against six mandatory criteria before any introduction is made. This page explains exactly what we check, why we check it, and how we match your specific portfolio to the right professional.
              </p>
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Start Your Matching Process
              </button>
            </div>
          </div>
                  </div>
        </section>

        {/* The guarantee */}
        <section className="py-12 border-b border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { n: '100%', l: 'ARLA or RICS qualified' },
                { n: '6',    l: 'Mandatory vetting criteria' },
                { n: '48hr', l: 'Introduction guarantee' },
                { n: 'Free', l: 'For all property investors' },
              ].map(s => (
                <div key={s.n} className="text-center">
                  <span className="font-display text-[44px] leading-none block" style={{ color: 'var(--green)' }}>
                    {s.n}
                  </span>
                  <p className="font-sans text-[13px] text-text-muted mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vetting criteria */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <p className="eyebrow mb-4">Vetting Standards</p>
            <h2 className="font-display text-h2 text-text mb-4 leading-tight max-w-xl">
              Six criteria. Every specialist. No exceptions.
            </h2>
            <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-14 max-w-2xl">
              These are not aspirational standards. Every specialist in our active network has been assessed against each of these criteria and maintains them as a condition of network membership. Specialists who fall below standard are removed.
            </p>

            <div className="flex flex-col gap-0">
              {vettingCriteria.map((c, i) => (
                <div key={c.num}
                  className={`grid grid-cols-[80px_1fr] gap-10 py-10 ${i > 0 ? 'border-t border-[#f0eee8]' : ''}`}>
                  <div>
                    <span className="font-display text-[13px] font-semibold" style={{ color: 'var(--green)' }}>
                      {c.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-[21px] text-text mb-3">{c.title}</h3>
                    <p className="font-sans text-[15px] text-text-muted leading-relaxed max-w-2xl">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Matching process */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <p className="eyebrow mb-4">The Matching Process</p>
                <h2 className="font-display text-h2 text-text mb-6 leading-tight">
                  What happens after you submit your enquiry.
                </h2>
                <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-8">
                  From the moment your enquiry arrives to the point at which you speak directly with your matched specialist, the entire process takes no longer than 48 hours. Here is exactly what happens.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Submit Your Enquiry
                </button>
              </div>

              <div className="flex flex-col gap-0">
                {matchingSteps.map((step, i) => (
                  <div key={i} className={`flex gap-8 py-8 ${i > 0 ? 'border-t border-[#e0e9e0]' : ''}`}>
                    <div
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-sans text-[12px] font-bold"
                      style={{ background: 'var(--green)', color: 'white', borderRadius: 0 }}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-[18px] text-text mb-2">{step.title}</h3>
                      <p className="font-sans text-[14px] text-text-muted leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What we are not */}
        <section className="section-pad bg-white">
          <div className="site-container max-w-3xl">
            <p className="eyebrow mb-4">Transparency</p>
            <h2 className="font-display text-h2 text-text mb-8 leading-tight">
              What this service is. And what it is not.
            </h2>
            {[
              {
                q: 'We are not a property management company.',
                a: 'Property Management Harrow does not provide property management services directly. We are a specialist matching service. Every specialist we introduce is an independently regulated professional — ARLA Propertymark or RICS qualified — with their own professional obligations and indemnity coverage.',
              },
              {
                q: 'We are not a referral mill.',
                a: 'We do not pass your details to multiple property managers simultaneously, or add you to a circulation list. Each enquiry receives a single, considered match. If the first match is not right, we reassess and introduce an alternative — we do not flood your inbox.',
              },
              {
                q: 'We are paid by the specialists, not by you.',
                a: "Our network specialists pay a membership fee to be included. This does not influence who we introduce — specialists are matched on suitability, not commercial preference. Landlords who use the service pay nothing and are under no obligation to engage any specialist we introduce.",
              },
              {
                q: 'Your information is protected.',
                a: 'We are ICO registered and operate in compliance with UK GDPR. Portfolio details shared with us during the matching process are used only to make the introduction and are not shared beyond the matched specialist without your explicit consent.',
              },
            ].map(item => (
              <div key={item.q} className="py-8 border-b border-[#f0eee8]">
                <h3 className="font-display text-[20px] text-text mb-3">{item.q}</h3>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--green)' }} className="py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">
              Ready to be matched?
            </h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-md mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              Free. No obligation. A direct introduction to the right specialist within 48 hours.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="font-sans font-bold text-[14px] tracking-wide px-10 py-4 border-0 cursor-pointer"
              style={{ background: 'white', color: 'var(--green)' }}
            >
              Start Your Matching Process
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
