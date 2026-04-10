'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="About" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <section style={{ background: 'var(--green-deep)' }} className="py-20">
          <div className="site-container max-w-3xl">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <Link href="/" className="no-underline" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>About</span>
            </nav>
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>About Us</p>
            <h1 className="font-display text-h1 text-white mb-6 leading-tight">
              Who runs Property Accountants Harrow.
            </h1>
            <p className="font-sans text-[17px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We are a Harrow-based specialist matching service connecting property investors with vetted, ACCA and ICAEW certified property tax accountants. We do not provide accountancy advice ourselves — our expertise is knowing which specialists to trust with your portfolio.
            </p>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container max-w-3xl">
            <div className="flex flex-col gap-10">
              {[
                {
                  h: 'Why this service exists',
                  p: "The property tax landscape in the UK has changed dramatically since 2017. Section 24, the 3% SDLT surcharge, and tightening CGT rules have created a specialist advisory need that most general accountancy practices are simply not equipped to meet. A landlord with a leveraged portfolio needs an accountant who spends most of their working week on property tax — not one who dabbles in it between VAT returns and company accounts. Property Accountants Harrow was built to solve this problem for Harrow's property investor community.",
                },
                {
                  h: 'Our standards',
                  p: 'Every specialist in our network has been assessed against six mandatory criteria: professional qualification (ACCA or ICAEW only), property-specific practice evidence, Section 24 and SPV modelling capability, client reference verification, professional indemnity coverage, and ICO registration. These are not aspirational standards — they are the baseline for network inclusion.',
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
