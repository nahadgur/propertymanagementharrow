'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import HeroLeadForm from '@/components/HeroLeadForm'
import { siteConfig, stats, testimonials, homeFaqs, trustBadges } from '@/data/site'
import { services } from '@/data/services'
import Link from 'next/link'

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'London Borough of Harrow',
        containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
      },
      knowsAbout: [
        'Section 24 Tax Mitigation',
        'SPV Company Incorporation',
        'Capital Gains Tax Planning',
        'SDLT Planning',
        'Property Inheritance Tax',
        'Property Tax',
        'Buy-to-Let Tax',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { '@id': `${siteConfig.url}/#organization` },
    },
  ],
}

export default function HomePageContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Homepage" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] max-w-[1280px] mx-auto w-full">
            {/* Left — copy */}
            <div className="flex flex-col justify-between px-6 py-12 md:px-12 lg:px-16 lg:py-20 bg-white">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div style={{ width: 36, height: 2, background: 'var(--green)' }} />
                  <span className="eyebrow">Property Tax Accountants Harrow — ACCA &amp; ICAEW Certified</span>
                </div>

                <h1 className="font-display text-[2.6rem] md:text-[3.2rem] lg:text-[4rem] xl:text-[4.5rem] leading-tight text-text mb-6">
                  Harrow&apos;s specialist<br />
                  property tax<br />
                  <em style={{ color: 'var(--green)', fontStyle: 'italic', fontWeight: 300 }}>accountants.</em>
                </h1>

                <p className="font-sans text-[15px] md:text-[17px] text-text-muted leading-relaxed max-w-[500px] mb-8 md:mb-10">
                  We match Harrow landlords and property investors with vetted, ACCA and ICAEW certified accountants who specialise exclusively in property tax — Section 24 mitigation, SPV company incorporation, CGT planning, and inheritance tax structuring.
                </p>

                <div className="flex gap-4 items-center mb-16">
                  <button onClick={() => setModalOpen(true)} className="btn-primary text-[14px] py-4">
                    Find My Specialist — Free
                  </button>
                  <Link href="/how-we-match-you/" className="btn-ghost text-[14px]">
                    How we vet specialists &rarr;
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 border-t border-[#f0eee8] pt-8 md:pt-10">
                {stats.map((s, i) => (
                  <div key={s.number}
                    className="flex flex-col">
                    <span className="font-display text-[40px] leading-none" style={{ color: 'var(--green)' }}>
                      {s.number}
                    </span>
                    <p className="font-sans text-[12px] text-text-faint mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form panel */}
            <HeroLeadForm location="Homepage Hero" />
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

        {/* ── SECTION 24 AGITATION ─────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
              <div>
                <p className="eyebrow mb-4">The Problem</p>
                <h2 className="font-display text-h2 text-text mb-6 leading-tight">
                  Section 24 is costing Harrow landlords thousands every year. Is your property tax accountant doing anything about it?
                </h2>
                <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-6">
                  Since 2017, the mortgage interest finance cost restriction has been stripping income from leveraged UK landlords. Higher-rate taxpayers can no longer deduct mortgage interest as an expense — instead receiving only a 20% tax credit that fails to reflect their actual cost.
                </p>
                <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-8">
                  For many Harrow landlords, this transforms a profitable portfolio into a loss-making one on paper — while generating a very real tax bill. Most still have no restructuring strategy in place.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Find Out What You Could Save
                </button>
              </div>

              {/* Problem cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    num: '01',
                    head: 'Your mortgage interest is no longer fully deductible',
                    body: 'Under Section 24, higher and additional rate taxpayers receive only a 20% tax credit on finance costs — not full deduction. If you pay 40% income tax, you are losing 20p in every pound of mortgage interest. Permanently.',
                  },
                  {
                    num: '02',
                    head: 'The impact compounds as portfolios grow',
                    body: 'A higher-rate taxpayer with £500,000 of buy-to-let mortgage debt at 5% interest faces up to £5,000 per year in avoidable additional tax. Across a larger leveraged portfolio, the annual figure can run into five figures.',
                  },
                  {
                    num: '03',
                    head: 'Most generalist accountants have no restructuring strategy',
                    body: 'Understanding Section 24 in theory and knowing how to restructure around it are very different things. SPV modelling, spousal income splitting, and pension contributions require property-specific expertise that most high-street accountants simply do not have.',
                  },
                ].map(card => (
                  <div key={card.num}
                    className="flex gap-6 p-6 border border-[#f0eee8] bg-[#faf9f6]">
                    <span className="font-display text-[32px] leading-none flex-shrink-0"
                      style={{ color: 'var(--green-mid)' }}>
                      {card.num}
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] text-text mb-2 leading-snug">{card.head}</h3>
                      <p className="font-sans text-[13px] text-text-muted leading-relaxed">{card.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pivot CTA */}
            <div style={{ background: 'var(--green-soft)' }}
              className="border border-[var(--green-mid)] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-[22px] text-text mb-1">
                  There are legal strategies that work.
                </h3>
                <p className="font-sans text-[14px] text-text-muted">
                  SPV incorporation, spousal splitting, and pension contributions — all modelled to your specific portfolio before any action is taken.
                </p>
              </div>
              <button onClick={() => setModalOpen(true)} className="btn-primary flex-shrink-0">
                Match Me With a Specialist
              </button>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-deep)' }}>
          <div className="site-container">
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Specialist Services
                </p>
                <h2 className="font-display text-h2 text-white leading-tight">
                  Five specialist property tax<br />services for Harrow investors.
                </h2>
              </div>
              <Link href="/services/"
                className="font-sans text-[13px] font-semibold no-underline hidden md:flex items-center gap-2"
                style={{ color: 'var(--green-mid)' }}>
                All services &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {services.map(svc => (
                <Link
                  key={svc.id}
                  href={`/services/${svc.slug}/`}
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  className="p-8 no-underline group hover:bg-white/6 transition-colors block"
                >
                  <div className="eyebrow mb-4" style={{ color: 'var(--green)' }}>
                    {svc.pill}
                  </div>
                  <h3 className="font-display text-[22px] text-white mb-3 leading-snug group-hover:text-white/90 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="font-sans text-[13px] leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {svc.tagline}
                  </p>
                  <span className="font-sans text-[12px] font-semibold uppercase tracking-wide flex items-center gap-2"
                    style={{ color: 'var(--green-mid)' }}>
                    Learn more &rarr;
                  </span>
                </Link>
              ))}

              {/* 6th cell — CTA */}
              <div
                className="p-8 flex flex-col justify-between"
                style={{ background: 'var(--green)' }}
              >
                <div>
                  <p className="eyebrow mb-4 text-white/70">Not sure where to start?</p>
                  <h3 className="font-display text-[22px] text-white mb-3 leading-snug">
                    Tell us your situation. We will identify the highest-impact intervention.
                  </h3>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="font-sans text-[12px] font-bold uppercase tracking-wide text-white border border-white/30 px-6 py-3 hover:bg-white/10 transition-colors cursor-pointer bg-transparent self-start"
                >
                  Get matched free &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE MATCH YOU ─────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <p className="eyebrow mb-4">Our Process</p>
                <h2 className="font-display text-h2 text-text mb-6 leading-tight">
                  Not just any property tax accountant.<br />
                  <em style={{ color: 'var(--green)', fontStyle: 'italic', fontWeight: 300 }}>The right one.</em>
                </h2>
                <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-8">
                  Every specialist in our Harrow network is rigorously vetted before joining. We check professional qualifications, verify property-specific experience, review client history, and confirm professional indemnity coverage. You are never sent a generic list — you are introduced to one matched specialist who has handled portfolios like yours before.
                </p>
                <Link href="/how-we-match-you/" className="btn-primary inline-flex">
                  See Our Vetting Process
                </Link>
              </div>

              {/* Steps */}
              <div className="flex flex-col gap-0">
                {[
                  {
                    step: '01',
                    title: 'Tell us about your portfolio',
                    desc: 'Share your portfolio size, location, mortgage levels, and the tax issue you need to address. The more detail, the better the match.',
                  },
                  {
                    step: '02',
                    title: 'We identify the right specialist',
                    desc: 'Our team reviews your enquiry against our vetted Harrow network — matching on qualification, specialism, portfolio type, and availability.',
                  },
                  {
                    step: '03',
                    title: 'We make the introduction',
                    desc: 'Within 48 hours, we introduce you directly to your matched specialist. No call centres, no referral chains. A direct, professional introduction.',
                  },
                ].map((step, i) => (
                  <div key={step.step}
                    className={`flex gap-8 py-8 ${i > 0 ? 'border-t border-[#f0eee8]' : ''}`}>
                    <div className="flex-shrink-0 w-12">
                      <span className="font-display text-[13px] font-semibold" style={{ color: 'var(--green)' }}>
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-[19px] text-text mb-2">{step.title}</h3>
                      <p className="font-sans text-[14px] text-text-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <p className="eyebrow mb-4">Client Feedback</p>
            <h2 className="font-display text-h2 text-text mb-12 leading-tight max-w-lg">
              What Harrow property investors say about our specialist matching service.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <div key={t.id} className="bg-white p-8 border border-[#e8e4de] flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24"
                        fill="#277649" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="font-sans text-[14px] text-text-muted leading-relaxed flex-grow mb-8 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="border-t border-[#f0eee8] pt-5">
                    <p className="font-display text-[16px] text-text">{t.name}</p>
                    <p className="font-sans text-[12px] text-text-faint mt-0.5">{t.location}</p>
                    <p className="font-sans text-[11px] uppercase tracking-wide mt-1"
                      style={{ color: 'var(--green)' }}>
                      {t.portfolioType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCAL CITADEL CTA ─────────────────────────────────────── */}
        <section className="py-16 bg-white border-y border-[#f0eee8]">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <p className="eyebrow mb-4">Harrow Specialists</p>
                <h2 className="font-display text-h2 text-text mb-4 leading-tight">
                  Looking for a property tax accountant in your area of Harrow?
                </h2>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                  Our Harrow network covers Stanmore, Pinner, Harrow on the Hill, Wealdstone, Edgware, Kenton, and all surrounding areas. Specialists who understand local yields, HMO licensing in the London Borough of Harrow, and the specific property types that make up the local stock.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Stanmore', desc: 'High-value estates — CGT &amp; Inheritance Tax', href: '/harrow/stanmore/' },
                  { label: 'Pinner', desc: 'Affluent portfolios — SPV incorporation', href: '/harrow/pinner/' },
                  { label: 'Wealdstone', desc: 'Regeneration area — HMO operators', href: '/harrow/wealdstone/' },
                  { label: 'Harrow on the Hill', desc: 'Premium rentals — non-resident landlords', href: '/harrow/harrow-on-the-hill/' },
                  { label: 'Edgware', desc: 'Expanding portfolios — trade compliance', href: '/harrow/edgware/' },
                ].map(area => (
                  <Link key={area.href} href={area.href}
                    className="flex justify-between items-center p-4 border border-[#f0eee8] no-underline hover:border-brand hover:bg-[var(--green-soft)] transition-colors group">
                    <div>
                      <span className="font-display text-[17px] text-text group-hover:text-brand transition-colors">
                        {area.label}
                      </span>
                      <span className="font-sans text-[12px] text-text-faint ml-3"
                        dangerouslySetInnerHTML={{ __html: area.desc }} />
                    </div>
                    <span style={{ color: 'var(--green)' }} className="font-sans text-sm">&rarr;</span>
                  </Link>
                ))}
                <Link href="/property-accountants-harrow/"
                  className="font-sans text-[13px] font-semibold no-underline flex items-center gap-2 mt-2"
                  style={{ color: 'var(--green)' }}>
                  View all Harrow specialists &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-20">
              <div>
                <p className="eyebrow mb-4">Common Questions</p>
                <h2 className="font-display text-h2 text-text mb-6 leading-tight">
                  Frequently asked questions about our Harrow property tax accountant matching service.
                </h2>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-8">
                  If you have a question we have not answered here, call us directly or use the form and we will respond within 24 hours.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Ask Us Directly
                </button>
              </div>

              <div>
                {homeFaqs.map((faq, i) => (
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

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section style={{ background: 'var(--green)' }} className="py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">
              Ready to find your Harrow property tax accountant?
            </h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              Get matched with a vetted, ACCA or ICAEW certified property tax accountant in Harrow — free. Specialists in Section 24, SPV incorporation, CGT and inheritance tax. 48-hour introduction guarantee.
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <button
                onClick={() => setModalOpen(true)}
                className="font-sans font-bold text-[14px] tracking-wide px-10 py-4 border-0 cursor-pointer transition-colors duration-200"
                style={{ background: 'white', color: 'var(--green)' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
                onMouseLeave={e => (e.currentTarget.style.background = 'white')}
              >
                Find My Specialist — Free
              </button>
              <Link href="/how-we-match-you/"
                className="font-sans text-[14px] font-medium no-underline flex items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.75)' }}>
                How we vet our network &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
