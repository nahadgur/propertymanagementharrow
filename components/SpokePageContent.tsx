'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import HeroLeadForm from '@/components/HeroLeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { type SpokeArea, spokeAreas } from '@/data/harrowData'
import { services, getServiceBySlug } from '@/data/services'
import { trustBadges } from '@/data/site'

interface SpokePageContentProps {
  area: SpokeArea
}

export default function SpokePageContent({ area }: SpokePageContentProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const focusServices = area.focusSlugs
    .map(slug => getServiceBySlug(slug))
    .filter(Boolean) as typeof services

  const otherSpokes = spokeAreas.filter(a => a.slug !== area.slug)

  return (
    <>
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        location={`Spoke: ${area.name}`}
      />
      <Header />

      <main className="flex-grow">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] max-w-[1280px] mx-auto w-full">
            <div className="relative flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 lg:py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
              <img src={"/images/property-maintenance-coordination.png"} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--green-deep) 60%, rgba(15,51,32,0.9) 100%)' }} />
              <div className="relative z-10">
              <Breadcrumbs
                items={[
                  { label: 'Home',               href: '/' },
                  { label: 'Harrow Specialists',  href: '/property-management-harrow/' },
                  { label: area.name },
                ]}
              />

              <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 mb-6 self-start"
                style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                {area.postcode} — {area.name}
              </span>

              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                {area.heroHeadline}
              </h1>

              <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-[540px]"
                style={{ color: 'rgba(255,255,255,0.6)' }}>
                {area.heroDesc}
              </p>

              {/* Key facts strip */}
              <div className="flex flex-wrap gap-6">
                {area.keyFacts.slice(0, 3).map(fact => (
                  <div key={fact.label}>
                    <p className="font-display text-[22px] text-white leading-none">{fact.value}</p>
                    <p className="font-sans text-[10px] uppercase tracking-wide mt-1"
                      style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {fact.label}
                    </p>
                  </div>
                ))}
              </div>
              </div>
            </div>
            

<HeroLeadForm location={`${area.name} Hero`} />
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

        {/* ── MARKET PROFILE ────────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
              <div>
                <p className="eyebrow mb-4">{area.name} Property Market</p>
                <h2 className="font-display text-h2 text-text mb-8 leading-tight">
                  The {area.name} landlord&apos;s management profile.
                </h2>
                <div className="flex flex-col gap-5">
                  {area.marketProfile.map((para, i) => (
                    <p key={i} className="font-sans text-[15px] text-text-muted leading-relaxed">{para}</p>
                  ))}
                </div>

                {/* Local insight */}
                <div className="mt-8 p-6 border-l-[3px] bg-[#fafaf8]"
                  style={{ borderColor: 'var(--green)' }}>
                  <p className="eyebrow mb-2" style={{ color: 'var(--green)' }}>Local insight</p>
                  <p className="font-sans text-[14px] text-text-muted leading-relaxed italic">
                    &ldquo;{area.localInsight}&rdquo;
                  </p>
                </div>
              </div>

              {/* Area stats card */}
              <div className="border border-[#f0eee8] p-7 sticky top-24" style={{ background: 'var(--green-soft)' }}>
                <p className="eyebrow mb-6">{area.name} at a glance</p>
                <div className="flex flex-col gap-0">
                  {area.keyFacts.map((fact, i) => (
                    <div key={fact.label}
                      className={`flex justify-between items-center py-3.5 ${i > 0 ? 'border-t border-[#e0e9e0]' : ''}`}>
                      <span className="font-sans text-[12px] text-text-faint uppercase tracking-wide">{fact.label}</span>
                      <span className="font-display text-[16px] text-text">{fact.value}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setModalOpen(true)} className="btn-primary w-full mt-6 text-[13px] py-3">
                  Find a {area.name} Specialist
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── TAX ANGLES ────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <p className="eyebrow mb-4">Key Management Challenges</p>
            <h2 className="font-display text-h2 text-text mb-12 leading-tight max-w-2xl">
              The property management challenges specific to {area.name} landlords.
            </h2>

            <div className="flex flex-col gap-px bg-[#e0e9e0]">
              {area.managementAngles.map((angle, i) => (
                <div key={i} className="bg-white p-8 grid grid-cols-[60px_1fr] gap-8">
                  <div className="font-display text-[36px] leading-none" style={{ color: 'var(--green-mid)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display text-[21px] text-text mb-3 leading-snug">{angle.head}</h3>
                    <p className="font-sans text-[14px] text-text-muted leading-relaxed">{angle.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELEVANT SERVICES ─────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <p className="eyebrow mb-4">Matched Services</p>
            <h2 className="font-display text-h2 text-text mb-4 leading-tight">
              Services most relevant to {area.name} investors.
            </h2>
            <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-12 max-w-xl">
              Based on {area.name}&apos;s property profile and typical landlord situations, these are the services our specialists most frequently deliver in the {area.postcode} area.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {focusServices.map(svc => (
                <Link
                  key={svc.id}
                  href={`/services/${svc.slug}/`}
                  className="flex flex-col p-7 border border-[#f0eee8] no-underline hover:border-brand transition-colors group"
                >
                  <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 mb-4 self-start"
                    style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
                    {svc.pill}
                  </span>
                  <h3 className="font-display text-[20px] text-text mb-2 group-hover:text-brand transition-colors leading-snug">{svc.title}</h3>
                  <p className="font-sans text-[13px] text-text-muted leading-relaxed flex-grow mb-4">{svc.tagline}</p>
                  <span className="font-sans text-[12px] font-semibold flex items-center gap-2 uppercase tracking-wide"
                    style={{ color: 'var(--green)' }}>
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>

            <Link href="/services/" className="btn-ghost text-[14px]">
              View all five specialist services &rarr;
            </Link>
          </div>
        </section>

        {/* ── OTHER HARROW AREAS ────────────────────────────────────── */}
        <section className="py-16 border-y border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="eyebrow mb-2">Other Harrow Areas</p>
                <h2 className="font-display text-[28px] text-text leading-tight">
                  Also covering across the borough.
                </h2>
              </div>
              {/* Citadel Rule — link back up to hub */}
              <Link href="/property-management-harrow/"
                className="btn-primary text-[13px] py-3 hidden md:inline-flex">
                All Harrow Specialists
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {otherSpokes.map(spoke => (
                <Link
                  key={spoke.slug}
                  href={`/harrow/${spoke.slug}/`}
                  className="flex flex-col p-5 border border-[#e0e9e0] bg-white no-underline hover:border-brand transition-colors group"
                >
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--green)' }}>
                    {spoke.postcode}
                  </span>
                  <span className="font-display text-[18px] text-text group-hover:text-brand transition-colors mb-1">
                    {spoke.name}
                  </span>
                  <span className="font-sans text-[11px] text-text-faint">{spoke.primaryFocus}</span>
                </Link>
              ))}
            </div>

            {/* Citadel Rule — mobile hub link */}
            <Link href="/property-management-harrow/"
              className="btn-primary text-[13px] py-3 mt-6 md:hidden inline-flex">
              All Harrow Specialists
            </Link>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20">
              <div>
                <p className="eyebrow mb-4">Common Questions</p>
                <h2 className="font-display text-h2 text-text mb-6 leading-tight">
                  {area.name} landlords ask us.
                </h2>
                <p className="font-sans text-[14px] text-text-muted mb-8 leading-relaxed">
                  Questions specific to investing and holding property in the {area.postcode} area of Harrow.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Ask Us Directly
                </button>
              </div>
              <div>
                {[
                  {
                    q: `Do you cover ${area.name} specifically?`,
                    a: `Yes. Our property management service covers ${area.name} and the ${area.postcode} postcode area specifically. We also cover neighbouring Harrow postcodes and wider North-West London. When we take on a property, we manage it with direct knowledge of ${area.name}'s rental market, tenant demographics, and typical landlord requirements — not a generic one-size-fits-all approach.`,
                  },
                  {
                    q: `What is the primary property management focus for ${area.name} landlords?`,
                    a: `${area.name}'s primary management focus is ${area.primaryFocus}. ${area.managementAngles[0].body}`,
                  },
                  {
                    q: `How quickly can you start managing my ${area.name} property?`,
                    a: `Most new instructions are onboarded within one to two weeks of initial contact, including property inspection, compliance audit, and tenancy review. For urgent situations — where a property is vacant and needs immediate letting, or where an HMO licence issue needs addressing — we can begin work within days.`,
                  },
                ].map((faq, i) => (
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
              Find your {area.name} property management specialist.
            </h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              Local expertise. Professional management. Tailored to your {area.postcode} portfolio.
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <button
                onClick={() => setModalOpen(true)}
                className="font-sans font-bold text-[14px] tracking-wide px-10 py-4 border-0 cursor-pointer"
                style={{ background: 'white', color: 'var(--green)' }}
              >
                Get Matched — Free
              </button>
              <Link href="/property-management-harrow/"
                className="font-sans text-[14px] font-medium no-underline flex items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.75)' }}>
                All Harrow specialists &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
