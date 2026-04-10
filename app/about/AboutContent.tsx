'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

export default function AboutContent() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="About" />
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/property-maintenance-coordination.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="relative z-10">
          <div className="site-container max-w-3xl">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <Link href="/" className="no-underline" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>About</span>
            </nav>
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>About Us</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
              Who runs Property Management Harrow.
            </h1>
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We are a Harrow-based specialist matching service connecting landlords with vetted, ARLA Propertymark and RICS qualified property management professionals. We do not provide property management services ourselves — our expertise is knowing which specialists to trust with your portfolio.
            </p>
          </div>
                  </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container max-w-3xl">
            <div className="flex flex-col gap-10">
              {[
                {
                  h: 'Why this service exists',
                  p: "Managing rental property in Harrow has become increasingly complex. Evolving legislation around tenant deposits, gas safety certificates, EPC requirements, Right to Rent checks, and HMO licensing means landlords need professional management — not a general letting agent who treats property management as an afterthought. Property Management Harrow was built to solve this problem for Harrow's landlord community.",
                },
                {
                  h: 'Our standards',
                  p: 'Every specialist in our network has been assessed against six mandatory criteria: ARLA Propertymark or RICS membership, property management experience in the Harrow area, client money protection scheme membership, property redress scheme registration, verified client references from landlords, and professional indemnity insurance. These are not aspirational standards — they are the baseline for network inclusion.',
                },
                {
                  h: 'Our coverage',
                  p: 'Our network covers the London Borough of Harrow in full — Stanmore, Pinner, Harrow on the Hill, Wealdstone, Kenton, Edgware, North Harrow, South Harrow, Rayners Lane, and the surrounding HA postcodes. Most specialists also hold clients across wider North-West London.',
                },
              ].map(s => (
                <div key={s.h}>
                  <h2 className="font-display text-h3 text-text mb-4">{s.h}</h2>
                  <p className="font-sans text-[15px] text-text-muted leading-relaxed">{s.p}</p>
                </div>
              ))}

              <div>
                <h2 className="font-display text-h3 text-text mb-4">Contact us</h2>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                  Telephone:{' '}
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-brand font-medium">
                    {siteConfig.phone}
                  </a>
                  <br />
                  Email:{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-brand font-medium">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>

            <button onClick={() => setModalOpen(true)} className="btn-primary mt-12">
              Find My Specialist — Free
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
