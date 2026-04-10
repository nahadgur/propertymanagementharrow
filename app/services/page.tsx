'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import { services } from '@/data/services'
import { siteConfig } from '@/data/site'

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Services Index" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="relative z-10">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  National Property Tax Services
                </p>
                <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                  Specialist property tax services for UK investors.
                </h1>
                <p className="font-sans text-[17px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Every service in our network is delivered by an ACCA or ICAEW certified accountant whose practice is built exclusively around property tax — not a generalist who occasionally takes on landlord clients.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-5 border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div>
                    <p className="font-display text-[36px] text-white leading-none">340+</p>
                    <p className="font-sans text-[12px] mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>Harrow landlords matched</p>
                  </div>
                  <div className="w-px h-12 bg-white/10 mx-4" />
                  <div>
                    <p className="font-display text-[36px] text-white leading-none">&pound;2.4M+</p>
                    <p className="font-sans text-[12px] mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>In tax savings identified</p>
                  </div>
                </div>
                <button onClick={() => setModalOpen(true)} className="btn-primary self-start">
                  Find My Specialist — Free
                </button>
              </div>
            </div>
          </div>
                  </div>
        </section>

        {/* Service grid */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="flex flex-col gap-0">
              {services.map((svc, i) => (
                <div key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-[280px_1fr_200px] gap-10 py-12 items-start ${i > 0 ? 'border-t border-[#f0eee8]' : ''}`}>
                  {/* Label */}
                  <div>
                    <span className="inline-block font-sans text-[10px] uppercase tracking-[0.15em] font-semibold px-3 py-1.5 mb-4"
                      style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
                      {svc.pill}
                    </span>
                    <h2 className="font-display text-[26px] text-text leading-snug">{svc.title}</h2>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-5">{svc.tagline}</p>
                    <p className="font-sans text-[14px] text-text-muted leading-relaxed line-clamp-3">
                      {svc.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-3">
                    <Link href={`/services/${svc.slug}/`} className="btn-primary text-[12px] py-3 text-center">
                      Learn more &rarr;
                    </Link>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="font-sans text-[12px] text-text-muted hover:text-brand transition-colors cursor-pointer bg-transparent border-0 text-center"
                    >
                      Get matched free
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* National-to-Local bridge */}
        <section className="py-16 border-t border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container text-center">
            <p className="eyebrow mb-4">Local Specialists</p>
            <h2 className="font-display text-h2 text-text mb-4 leading-tight">
              Looking for a Harrow-based specialist?
            </h2>
            <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-8 max-w-lg mx-auto">
              All services above are available through our Harrow specialist network — accountants who understand local property yields, HMO licensing in the London Borough of Harrow, and the local portfolio landscape.
            </p>
            <Link href="/property-accountants-harrow/" className="btn-primary inline-flex">
              See Harrow Property Tax Specialists
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">
              Not sure which service applies to you?
            </h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Tell us about your portfolio and we will identify the highest-impact intervention. Free, no obligation.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="font-sans font-bold text-[14px] tracking-wide px-10 py-4 border-0 cursor-pointer"
              style={{ background: 'white', color: 'var(--green)' }}
            >
              Get Matched — Free
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
