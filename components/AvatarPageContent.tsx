'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import HeroLeadForm from '@/components/HeroLeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { type AvatarContent } from '@/data/avatarContent'
import { getServiceBySlug } from '@/data/services'
import { trustBadges } from '@/data/site'

interface AvatarPageContentProps {
  avatar: AvatarContent
}


const avatarImages: Record<string, string> = {
  'accidental-landlords':  '/images/residential-lettings-management.png',
  'portfolio-investors':   '/images/block-estate-management.png',
  'hmo-operators':         '/images/hmo-management.png',
  'non-resident':          '/images/rent-collection-arrears-management.png',
}

export default function AvatarPageContent({ avatar }: AvatarPageContentProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const resolvedServices = avatar.relevantServices
    .map(rs => {
      const svc = getServiceBySlug(rs.slug)
      return svc ? { ...rs, fullTitle: svc.title, pill: svc.pill } : null
    })
    .filter(Boolean) as (AvatarContent['relevantServices'][0] & { fullTitle: string; pill: string })[]

  return (
    <>
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        location={`Avatar: ${avatar.slug}`}
      />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] max-w-[1280px] mx-auto w-full">
            <div className="relative flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 lg:py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
              <img src={avatarImages[avatar.slug] ?? '/images/hero-services.png'} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--green-deep) 60%, rgba(15,51,32,0.9) 100%)' }} />
              <div className="relative z-10">
              <Breadcrumbs
                items={[
                  { label: 'Home',      href: '/' },
                  { label: 'Landlords', href: '/landlords/' },
                  { label: avatar.title },
                ]}
              />

              <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 mb-6 self-start"
                style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                {avatar.pill}
              </span>

              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                {avatar.heroHeadline}
              </h1>

              <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-[540px]"
                style={{ color: 'rgba(255,255,255,0.6)' }}>
                {avatar.heroDesc}
              </p>

              <div className="flex gap-4 items-center flex-wrap">
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Find My Specialist — Free
                </button>
                <Link href="/how-we-match-you/"
                  className="font-sans text-[14px] font-medium no-underline flex items-center gap-2"
                  style={{ color: 'rgba(255,255,255,0.6)' }}>
                  How we vet specialists &rarr;
                </Link>
              </div>
              </div>
            </div>
            <HeroLeadForm location={`${avatar.title} Hero`} />
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

        {/* ── EMPATHY SECTION ───────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <p className="eyebrow mb-4">Your Situation</p>
                <h2 className="font-display text-h2 text-text mb-8 leading-tight">
                  {avatar.empathyHeading}
                </h2>
                <div className="flex flex-col gap-5">
                  {avatar.empathyBody.map((para, i) => (
                    <p key={i} className="font-sans text-[15px] text-text-muted leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Profile card */}
              <div className="border border-[#f0eee8] p-8 sticky top-24" style={{ background: 'var(--green-soft)' }}>
                <p className="eyebrow mb-5">You are a {avatar.shortTitle} if:</p>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-8 italic">
                  &ldquo;{avatar.profile}&rdquo;
                </p>

                <div className="border-t border-[#e0e9e0] pt-6">
                  <p className="font-sans text-[12px] text-text-faint uppercase tracking-widest font-medium mb-4">
                    Most relevant services
                  </p>
                  <div className="flex flex-col gap-2">
                    {resolvedServices.map(rs => (
                      <Link key={rs.slug} href={`/services/${rs.slug}/`}
                        className="font-sans text-[13px] no-underline flex items-center gap-2 py-2 border-b border-[#e8f0e8] last:border-0"
                        style={{ color: 'var(--green-dark)' }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--green)' }} />
                        {rs.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <button onClick={() => setModalOpen(true)} className="btn-primary w-full mt-8 text-[13px] py-3">
                  Find My Specialist — Free
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ───────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-deep)' }}>
          <div className="site-container">
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Where It Goes Wrong</p>
            <h2 className="font-display text-h2 text-white mb-12 leading-tight max-w-2xl">
              {avatar.painHeading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
              {avatar.pains.map((pain, i) => (
                <div key={i} className="p-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="font-display text-[40px] leading-none mb-5" style={{ color: 'rgba(255,255,255,0.08)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-[20px] text-white mb-3 leading-snug">{pain.head}</h3>
                  <p className="font-sans text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {pain.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Get a Specialist Review — Free
              </button>
            </div>
          </div>
        </section>

        {/* ── RELEVANT SERVICES ─────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <p className="eyebrow mb-4">Matched Services</p>
            <h2 className="font-display text-h2 text-text mb-4 leading-tight">
              {avatar.servicesHeading}
            </h2>
            <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-12 max-w-xl">
              Every service below is delivered by an ACCA or ICAEW certified specialist in our Harrow network — matched to your specific situation, not sent generically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {resolvedServices.map(rs => (
                <Link
                  key={rs.slug}
                  href={`/services/${rs.slug}/`}
                  className="flex flex-col p-7 border border-[#f0eee8] no-underline hover:border-brand transition-colors group"
                >
                  <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 mb-4 self-start"
                    style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
                    {rs.pill}
                  </span>
                  <h3 className="font-display text-[20px] text-text mb-2 group-hover:text-brand transition-colors leading-snug">
                    {rs.title}
                  </h3>
                  <p className="font-sans text-[13px] text-text-muted leading-relaxed flex-grow mb-4 italic">
                    {rs.why}
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

        {/* ── FREE TOOLS ────────────────────────────────────────────── */}
        <section className="py-16 border-y border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-center">
              <div>
                <p className="eyebrow mb-4">Free Tools</p>
                <h2 className="font-display text-h2 text-text mb-4 leading-tight">
                  {avatar.toolsTeaser.heading}
                </h2>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                  {avatar.toolsTeaser.desc}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {avatar.toolsTeaser.tools.map(tool => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="flex items-start gap-5 p-6 bg-white border border-[#e0e9e0] no-underline hover:border-brand transition-colors group"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                      style={{ background: 'var(--green-light)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#277649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-[18px] text-text group-hover:text-brand transition-colors mb-1">
                        {tool.label}
                      </p>
                      <p className="font-sans text-[13px] text-text-muted leading-relaxed">{tool.desc}</p>
                    </div>
                    <span className="ml-auto font-sans text-[16px] flex-shrink-0 mt-1"
                      style={{ color: 'var(--green)' }}>&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HARROW AREAS ─────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow mb-4">Harrow Specialists</p>
                <h2 className="font-display text-h2 text-text mb-4 leading-tight">
                  Looking for a specialist in your Harrow area?
                </h2>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-8">
                  Our network covers the full London Borough of Harrow. These areas have the highest concentration of {avatar.shortTitle.toLowerCase()} situations in the borough.
                </p>
                <Link href="/property-accountants-harrow/" className="btn-primary inline-flex">
                  All Harrow Specialists
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                {avatar.harrowAreas.map(area => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="flex items-start gap-5 p-5 border border-[#f0eee8] no-underline hover:border-brand transition-colors group"
                  >
                    <div>
                      <p className="font-display text-[18px] text-text group-hover:text-brand transition-colors mb-1">
                        {area.name}
                      </p>
                      <p className="font-sans text-[12px] text-text-faint">{area.why}</p>
                    </div>
                    <span className="ml-auto font-sans text-[16px] flex-shrink-0"
                      style={{ color: 'var(--green)' }}>&rarr;</span>
                  </Link>
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
                <h2 className="font-display text-h2 text-text mb-6 leading-tight">
                  {avatar.title} ask us.
                </h2>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Ask Us Directly
                </button>
              </div>
              <div>
                {avatar.faqs.map((faq, i) => (
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
              {avatar.finalCta}
            </h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              Free matching. ACCA and ICAEW certified. Matched to your exact situation within 48 hours.
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <button
                onClick={() => setModalOpen(true)}
                className="font-sans font-bold text-[14px] tracking-wide px-10 py-4 border-0 cursor-pointer"
                style={{ background: 'white', color: 'var(--green)' }}
              >
                Find My Specialist — Free
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
              </div>
