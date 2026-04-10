'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import HeroLeadForm from '@/components/HeroLeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { harrowBoroughData, spokeAreas } from '@/data/harrowData'
import { services } from '@/data/services'
import { trustBadges } from '@/data/site'

export default function LocalHubContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Harrow Hub" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] max-w-[1280px] mx-auto w-full">
            <div className="flex flex-col justify-center px-16 py-20" style={{ background: 'var(--green-deep)' }}>
              <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Harrow Specialists' }]} />

              <p className="eyebrow mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {harrowBoroughData.name}
              </p>

              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                Harrow&apos;s Vetted Property Tax Accountant Network.
              </h1>

              <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-[540px]"
                style={{ color: 'rgba(255,255,255,0.6)' }}>
                We connect Harrow landlords and property investors with ACCA and ICAEW certified accountants who specialise exclusively in property tax — across all {harrowBoroughData.postcodes} postcode areas in the London Borough of Harrow.
              </p>

              {/* Borough postcodes */}
              <div className="flex flex-wrap gap-2">
                {harrowBoroughData.postcodes.split(', ').map(pc => (
                  <span key={pc}
                    className="font-sans text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5"
                    style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                    {pc}
                  </span>
                ))}
              </div>
            </div>
            <HeroLeadForm location="Harrow Hub Hero" />
          </div>
        </section>

        {/* ── TRUST STRIP ──────────────────────────────────────────── */}
        <div className="bg-[#f8fbf8] border-y border-[#e8f0e8]">
          <div className="site-container py-5">
            <div className="trust-strip justify-between">
              {trustBadges.map(b => (
                <div key={b.label} className="trust-strip-item text-text-muted">
                  <div className="trust-dot" /><span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HARROW MARKET OVERVIEW ────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <p className="eyebrow mb-4">The Harrow Property Market</p>
                <h2 className="font-display text-h2 text-text mb-8 leading-tight">
                  Why Harrow landlords face distinct tax challenges.
                </h2>
                <div className="flex flex-col gap-5">
                  {harrowBoroughData.marketContext.map((para, i) => (
                    <p key={i} className="font-sans text-[15px] text-text-muted leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Borough stats grid */}
              <div className="flex flex-col gap-4">
                {/* HMO licensing callout */}
                <div className="p-8 border border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
                  <p className="eyebrow mb-4">Harrow HMO Licensing</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: 'Mandatory licence', value: harrowBoroughData.hmoLicensing.mandatory },
                      { label: 'Additional licensing', value: harrowBoroughData.hmoLicensing.additional },
                      { label: 'Licence renewal', value: harrowBoroughData.hmoLicensing.renewal },
                    ].map(item => (
                      <div key={item.label} className="border-t border-[#e0e9e0] pt-3 first:border-t-0 first:pt-0">
                        <p className="font-sans text-[10px] uppercase tracking-widest text-text-faint font-semibold mb-1">
                          {item.label}
                        </p>
                        <p className="font-sans text-[13px] text-text-muted leading-relaxed">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Borough stats */}
                <div className="grid grid-cols-3 gap-px bg-[#f0eee8]">
                  {[
                    { label: 'Avg borough price', value: harrowBoroughData.avgPrice },
                    { label: 'Avg gross yield',   value: harrowBoroughData.avgYield },
                    { label: 'Postcodes covered', value: '6' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white p-6 text-center">
                      <p className="font-display text-[28px] text-text leading-none mb-2" style={{ color: 'var(--green)' }}>
                        {stat.value}
                      </p>
                      <p className="font-sans text-[11px] text-text-faint uppercase tracking-wide">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE 5 BOROUGH SPOKES ──────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-deep)' }}>
          <div className="site-container">
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Local Specialists by Area</p>
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">
              Find your Harrow area specialist.
            </h2>
            <p className="font-sans text-[16px] mb-12 max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Each area has distinct property types, yield profiles, and tax challenges. Our network specialists are matched to the specific area — not sent generically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {spokeAreas.map(area => (
                <Link
                  key={area.slug}
                  href={`/harrow/${area.slug}/`}
                  className="block p-8 no-underline group transition-colors"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                >
                  {/* Postcode badge */}
                  <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 mb-5"
                    style={{ background: 'rgba(39,118,73,0.3)', color: 'var(--green-mid)' }}>
                    {area.postcode}
                  </span>

                  <h3 className="font-display text-[26px] text-white mb-2 leading-snug">
                    {area.name}
                  </h3>

                  <p className="font-sans text-[12px] uppercase tracking-wide mb-5"
                    style={{ color: 'var(--green)' }}>
                    {area.primaryFocus}
                  </p>

                  {/* Mini stats */}
                  <div className="flex gap-6 mb-6">
                    <div>
                      <p className="font-display text-[20px] text-white leading-none">{area.avgPrice}</p>
                      <p className="font-sans text-[10px] mt-1 uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>Avg price</p>
                    </div>
                    <div>
                      <p className="font-display text-[20px] text-white leading-none">{area.avgYield}</p>
                      <p className="font-sans text-[10px] mt-1 uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>Gross yield</p>
                    </div>
                  </div>

                  <span className="font-sans text-[12px] font-semibold uppercase tracking-wide flex items-center gap-2"
                    style={{ color: 'var(--green-mid)' }}>
                    View {area.name} specialists &rarr;
                  </span>
                </Link>
              ))}

              {/* 6th cell — CTA */}
              <div className="p-8 flex flex-col justify-between" style={{ background: 'var(--green)' }}>
                <div>
                  <p className="eyebrow mb-4 text-white/70">All Harrow areas</p>
                  <h3 className="font-display text-[24px] text-white mb-3 leading-snug">
                    Not in one of these areas? We cover the whole borough.
                  </h3>
                  <p className="font-sans text-[13px] mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    Our network covers HA1 through HA8 — including South Harrow, Rayners Lane, Kenton, North Harrow, and all surrounding postcodes.
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="font-sans text-[12px] font-bold uppercase tracking-wide text-white border border-white/30 px-6 py-3 cursor-pointer bg-transparent self-start hover:bg-white/10 transition-colors"
                >
                  Get matched free &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <p className="eyebrow mb-4">Specialist Services</p>
            <h2 className="font-display text-h2 text-text mb-4 leading-tight">
              What our Harrow specialists cover.
            </h2>
            <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-12 max-w-2xl">
              Every service below is available through our Harrow network — delivered by accountants who understand the local property market, not generalists working from a national template.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(svc => (
                <Link
                  key={svc.id}
                  href={`/services/${svc.slug}/`}
                  className="flex flex-col p-7 border border-[#f0eee8] no-underline hover:border-brand transition-colors group"
                >
                  <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 mb-5 self-start"
                    style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
                    {svc.pill}
                  </span>
                  <h3 className="font-display text-[20px] text-text mb-2 group-hover:text-brand transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="font-sans text-[13px] text-text-muted leading-relaxed flex-grow mb-5">
                    {svc.tagline}
                  </p>
                  <span className="font-sans text-[12px] font-semibold uppercase tracking-wide flex items-center gap-2"
                    style={{ color: 'var(--green)' }}>
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20">
              <div>
                <p className="eyebrow mb-4">Common Questions</p>
                <h2 className="font-display text-h2 text-text mb-6 leading-tight">
                  Harrow landlords ask us.
                </h2>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Ask Us Directly
                </button>
              </div>
              <div>
                {harrowBoroughData.faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <button
                      className="faq-q w-full text-left bg-transparent border-0 cursor-pointer"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-display text-[18px]">{faq.q}</span>
                      <span className="flex-shrink-0 ml-4 font-sans text-[18px]" style={{ color: 'var(--green)' }}>
                        {openFaq === i ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === i && <p className="faq-a">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section style={{ background: 'var(--green)' }} className="py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">
              Find your Harrow property tax specialist.
            </h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              Free. ACCA and ICAEW certified. Matched to your Harrow area and portfolio type within 48 hours.
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
