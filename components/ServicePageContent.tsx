'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import HeroLeadForm from '@/components/HeroLeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { trustBadges } from '@/data/site'
import { spokeAreas } from '@/data/harrowData'
import { type Service } from '@/data/services'
import { type ServiceContent } from '@/data/serviceContent'

interface ServicePageContentProps {
  service: Service
  content: ServiceContent
}


const serviceImages: Record<string, string> = {
  'residential-lettings-management': '/images/residential-lettings-management.png',
  'tenant-find-letting':             '/images/tenant-find-referencing.png',
  'block-management':                '/images/block-estate-management.png',
  'hmo-management':                  '/images/hmo-management.png',
  'rent-collection-accounting':      '/images/rent-collection-arrears-management.png',
}

export default function ServicePageContent({ service, content }: ServicePageContentProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  return (
    <>
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service={service.title}
        location={`Service: ${service.slug}`}
      />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] max-w-[1280px] mx-auto w-full">
            {/* Left — image background */}
            <div
              className="relative flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 lg:py-20 overflow-hidden"
              style={{ background: 'var(--green-deep)' }}
            >
              {/* Background image */}
              <img
                src={serviceImages[service.slug] ?? '/images/hero-services.png'}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--green-deep) 60%, rgba(15,51,32,0.9) 100%)' }} />
              <div className="relative z-10">
              <Breadcrumbs
                items={[
                  { label: 'Home',     href: '/' },
                  { label: 'Services', href: '/services/' },
                  { label: service.shortTitle },
                ]}
              />

              <div
                className="inline-flex items-center gap-2 mb-6 font-sans text-[10px] uppercase tracking-[0.18em] font-semibold px-3 py-1.5 self-start"
                style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}
              >
                {service.pill}
              </div>

              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                {content.h1}
              </h1>

              <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-[540px]"
                style={{ color: 'rgba(255,255,255,0.6)' }}>
                {service.heroDesc}
              </p>

              {/* Trust signals */}
              <div className="flex flex-col gap-2.5">
                {[
                  'ARLA Propertymark and RICS qualified specialists only',
                  'Full economics modelled before any action is taken',
                  'Matched to your portfolio type within 48 hours',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 font-sans text-[14px]"
                    style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="#277649" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              </div>
            </div>

            {/* Right — form */}
            <HeroLeadForm service={service.title} location={`Hero: ${service.slug}`} image={serviceImages[service.slug] ?? '/images/hero-services.png'} />
          </div>
        </section>

        {/* ── TRUST STRIP ──────────────────────────────────────────── */}
        <div className="bg-[#f8fbf8] border-y border-[#e8f0e8]">
          <div className="site-container py-5">
            <div className="trust-strip justify-between">
              {trustBadges.map(b => (
                <div key={b.label} className="trust-strip-item text-text-muted">
                  <div className="trust-dot" />
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── INTRO / BODY COPY ─────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">
              <div className="flex flex-col gap-6">
                {content.intro.map((para, i) => (
                  <p key={i} className="font-sans text-[16px] text-text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Stat callout */}
              <div className="border border-[#f0eee8] p-8 sticky top-24" style={{ background: 'var(--green-soft)' }}>
                <p className="eyebrow mb-6">Why it matters now</p>
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="font-display text-[40px] leading-none block mb-1"
                      style={{ color: 'var(--green)' }}>
                      48hr
                    </span>
                    <p className="font-sans text-[13px] text-text-muted">
                      Introduction to a matched specialist
                    </p>
                  </div>
                  <div className="border-t border-[#e0e9e0] pt-6">
                    <span className="font-display text-[40px] leading-none block mb-1"
                      style={{ color: 'var(--green)' }}>
                      100%
                    </span>
                    <p className="font-sans text-[13px] text-text-muted">
                      ARLA Propertymark or RICS qualified
                    </p>
                  </div>
                  <div className="border-t border-[#e0e9e0] pt-6">
                    <span className="font-display text-[40px] leading-none block mb-1"
                      style={{ color: 'var(--green)' }}>
                      Free
                    </span>
                    <p className="font-sans text-[13px] text-text-muted">
                      Matching service for all landlords
                    </p>
                  </div>
                </div>
                <button onClick={() => setModalOpen(true)} className="btn-primary w-full mt-8 text-[13px] py-3">
                  Find My Specialist
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM / AGITATION ──────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <p className="eyebrow mb-4">The Problem</p>
            <h2 className="font-display text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] text-text mb-12 leading-tight max-w-2xl">
              {content.problemHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.problems.map((p, i) => (
                <div key={i} className="bg-white border border-[#e8e4de] p-8">
                  <div className="font-display text-[36px] leading-none mb-4"
                    style={{ color: 'var(--green-mid)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-[18px] text-text mb-3 leading-snug">{p.head}</h3>
                  <p className="font-sans text-[13px] text-text-muted leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <p className="eyebrow mb-4">What You Get</p>
            <h2 className="font-display text-h2 text-text mb-12 leading-tight">
              What our specialists deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.benefits.map((b, i) => (
                <div key={i} className="flex gap-6 p-8 border border-[#f0eee8]">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center font-display text-[14px] font-semibold text-white"
                    style={{ background: 'var(--green)' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-[19px] text-text mb-2 leading-snug">{b.title}</h3>
                    <p className="font-sans text-[14px] text-text-muted leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE (optional) ─────────────────────── */}
        {content.comparison && (
          <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
            <div className="site-container">
              <p className="eyebrow mb-4">The Numbers</p>
              <h2 className="font-display text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] text-text mb-3 leading-tight">
                {content.comparison.heading}
              </h2>
              <p className="font-sans text-[15px] text-text-muted mb-10 max-w-2xl">
                {content.comparison.subheading}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse font-sans text-[14px]">
                  <thead>
                    <tr style={{ background: 'var(--green-deep)' }}>
                      <th className="text-left py-4 px-6 text-white font-semibold text-[12px] uppercase tracking-wide">Factor</th>
                      <th className="text-left py-4 px-6 text-white font-semibold text-[12px] uppercase tracking-wide">Self-management</th>
                      <th className="text-left py-4 px-6 text-white font-semibold text-[12px] uppercase tracking-wide">Professional management</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.comparison.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8fbf8]'}>
                        <td className="py-4 px-6 text-text font-medium border-b border-[#f0eee8]">{row.factor}</td>
                        <td className={`py-4 px-6 border-b border-[#f0eee8] ${row.winner === 'personal' ? 'font-semibold' : 'text-text-muted'}`}
                          style={row.winner === 'personal' ? { color: 'var(--green)' } : {}}>
                          {row.winner === 'personal' && (
                            <span className="inline-block w-2 h-2 rounded-full mr-2 flex-shrink-0 align-middle"
                              style={{ background: 'var(--green)' }} />
                          )}
                          {row.personal}
                        </td>
                        <td className={`py-4 px-6 border-b border-[#f0eee8] ${row.winner === 'company' ? 'font-semibold' : 'text-text-muted'}`}
                          style={row.winner === 'company' ? { color: 'var(--green)' } : {}}>
                          {row.winner === 'company' && (
                            <span className="inline-block w-2 h-2 rounded-full mr-2 flex-shrink-0 align-middle"
                              style={{ background: 'var(--green)' }} />
                          )}
                          {row.company}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-sans text-[12px] text-text-faint mt-4">
                The right structure depends on your specific portfolio, income level, and long-term objectives. A specialist will model the economics for your exact situation before any recommendation is made.
              </p>
            </div>
          </section>
        )}

        {/* ── PROCESS STEPS ────────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <p className="eyebrow mb-4">How It Works</p>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] text-text mb-6 leading-tight">
                  {content.processHeading}
                </h2>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-8">
                  Every match is made by a member of our team — not an algorithm. We review your enquiry, identify the right specialist, and make a direct, personal introduction within 48 hours.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Start Your Matching Process
                </button>
              </div>
              <div className="flex flex-col gap-0">
                {content.processSteps.map((step, i) => (
                  <div key={i}
                    className={`flex gap-8 py-8 ${i > 0 ? 'border-t border-[#f0eee8]' : ''}`}>
                    <div
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-sans text-[12px] font-bold text-white"
                      style={{ background: 'var(--green)' }}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-[19px] text-text mb-2">{step.title}</h3>
                      <p className="font-sans text-[14px] text-text-muted leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20">
              <div>
                <p className="eyebrow mb-4">Common Questions</p>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] text-text mb-6 leading-tight">
                  {service.shortTitle} — frequently asked questions.
                </h2>
                <button onClick={() => setModalOpen(true)} className="btn-primary mt-2">
                  Ask Us Directly
                </button>
              </div>
              <div>
                {service.faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <button
                      className="faq-q w-full text-left bg-transparent border-0 cursor-pointer"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-display text-[18px]">{faq.q}</span>
                      <span className="flex-shrink-0 ml-4 font-sans text-[18px]"
                        style={{ color: 'var(--green)' }}>
                        {openFaq === i ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === i && (
                      <p className="faq-a">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NATIONAL-TO-LOCAL BRIDGE ─────────────────────────────── */}
        <section className="py-16 bg-white border-y border-[#f0eee8]">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="eyebrow mb-4">Local Specialists</p>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] text-text mb-4 leading-tight">
                  Looking for a local Harrow {service.shortTitle.toLowerCase()} expert?
                </h2>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-8">
                  {content.localBridge}
                </p>
                <Link href="/property-management-harrow/" className="btn-primary inline-flex">
                  See Harrow Specialists
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Stanmore',          href: '/harrow/stanmore/' },
                  { label: 'Pinner',            href: '/harrow/pinner/' },
                  { label: 'Wealdstone',        href: '/harrow/wealdstone/' },
                  { label: 'Harrow on the Hill',href: '/harrow/harrow-on-the-hill/' },
                  { label: 'Edgware',           href: '/harrow/edgware/' },
                  { label: 'All Harrow areas',  href: '/property-management-harrow/' },
                ].map(area => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="flex items-center justify-between p-4 border border-[#f0eee8] no-underline hover:border-brand transition-colors group text-[14px]"
                  >
                    <span className="font-sans text-text group-hover:text-brand transition-colors">
                      {area.label}
                    </span>
                    <span style={{ color: 'var(--green)' }}>&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section style={{ background: 'var(--green)' }} className="py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] text-white mb-4 leading-tight">
              Ready to get started?
            </h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              Get matched with a Harrow {service.title.toLowerCase()} specialist — free. ARLA Propertymark and RICS qualified. 48-hour introduction guarantee.
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <button
                onClick={() => setModalOpen(true)}
                className="font-sans font-bold text-[14px] tracking-wide px-10 py-4 border-0 cursor-pointer"
                style={{ background: 'white', color: 'var(--green)' }}
              >
                Find My {service.shortTitle} Specialist — Free
              </button>
              <Link href="/how-we-match-you/"
                className="font-sans text-[14px] font-medium no-underline flex items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.75)' }}>
                How we vet specialists &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
