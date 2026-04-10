'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroHome from '@/components/HeroHome'
import LeadFormModal from '@/components/LeadFormModal'
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

// ── Shared divider line ──────────────────────────────────────────────────────
const GreenLine = () => (
  <div style={{ width: 36, height: 2, background: 'var(--green)', marginBottom: 16 }} />
)

export default function HomePageContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Homepage" />
      <Header />

      <main className="flex-grow">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <HeroHome />

        {/* ── 2. TRUST STRIP ──────────────────────────────────────────────── */}
        <div style={{ background: 'var(--cream-2)', borderBottom: '1px solid var(--border)' }}>
          <div className="site-container">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3 py-4">
              {trustBadges.map(b => (
                <div key={b.label} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="font-raleway" style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.03em' }}>
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3. SERVICES ─────────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: '#fff' }}>
          <div className="site-container">

            {/* Heading row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <GreenLine />
                <p className="eyebrow mb-3">Specialist Services</p>
                <h2 className="font-baskerville" style={{ fontSize: 'clamp(22px, 3vw, 34px)', color: 'var(--text)', lineHeight: 1.2 }}>
                  Five services. One team. <em>All of Harrow.</em>
                </h2>
              </div>
              <Link
                href="/services/"
                className="font-raleway no-underline self-start md:self-auto"
                style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: '0.04em', textTransform: 'uppercase' }}
              >
                View all services →
              </Link>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
              {services.map(svc => (
                <Link
                  key={svc.id}
                  href={`/services/${svc.slug}/`}
                  className="no-underline group block"
                  style={{ background: '#fff', padding: '28px 24px', borderTop: '3px solid transparent', transition: 'border-color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderTopColor = 'var(--green)')}
                  onMouseLeave={e => (e.currentTarget.style.borderTopColor = 'transparent')}
                >
                  <p className="eyebrow mb-3">{svc.pill}</p>
                  <h3 className="font-baskerville mb-2" style={{ fontSize: 18, color: 'var(--text)', lineHeight: 1.25 }}>
                    {svc.title}
                  </h3>
                  <p className="font-raleway" style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    {svc.tagline}
                  </p>
                  <p className="font-raleway mt-4" style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Learn more →
                  </p>
                </Link>
              ))}

              {/* CTA cell */}
              <div
                className="flex flex-col justify-between"
                style={{ background: 'var(--green)', padding: '28px 24px' }}
              >
                <div>
                  <p className="font-raleway mb-3" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                    Not sure where to start?
                  </p>
                  <h3 className="font-baskerville text-white mb-4" style={{ fontSize: 18, lineHeight: 1.3 }}>
                    Tell us your situation — we'll identify the right service for you.
                  </h3>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="font-raleway self-start"
                  style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff', padding: '9px 18px', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', transition: 'border-color 0.15s' }}
                >
                  Get Matched Free →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. WHY IT MATTERS ────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-pale)' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div>
                <GreenLine />
                <p className="eyebrow mb-3">The Landlord Reality</p>
                <h2 className="font-baskerville mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)', color: 'var(--text)', lineHeight: 1.2 }}>
                  Managing property in Harrow is getting harder — <em>is your agent keeping up?</em>
                </h2>
                <p className="font-raleway mb-6" style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  Evolving compliance obligations, HMO licensing rules, and rising tenant expectations mean reactive management no longer works. Regulatory failures can cost up to £30,000 in civil penalties — and void periods erode yields month by month.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Find Out How We Can Help
                </button>
              </div>

              {/* Right — 3 clean numbered points */}
              <div className="flex flex-col gap-0">
                {[
                  {
                    n: '01',
                    title: 'Compliance burden is rising every year',
                    body: 'Right to Rent, EICR, gas safety, EPCs, deposit protection — missing any obligation risks prosecution, rent repayment orders, or fines. Most generalist agents aren\'t equipped to track this.',
                  },
                  {
                    n: '02',
                    title: 'Void periods and poor vetting destroy returns',
                    body: 'A single vacant month costs the average Harrow landlord over £1,400. Weak tenant referencing leads to arrears, damage, and costly eviction — compounding across a portfolio.',
                  },
                  {
                    n: '03',
                    title: 'Most high-street agents offer a reactive service',
                    body: 'Specialist property management requires local knowledge, proactive compliance, and dedicated teams. Generalist lettings agents rarely deliver what a growing portfolio needs.',
                  },
                ].map((item, i) => (
                  <div
                    key={item.n}
                    className="flex gap-6 py-7"
                    style={{ borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}
                  >
                    <span
                      className="font-baskerville flex-shrink-0"
                      style={{ fontSize: 28, lineHeight: 1, color: 'var(--green-mid)', paddingTop: 2 }}
                    >
                      {item.n}
                    </span>
                    <div>
                      <h3 className="font-baskerville mb-2" style={{ fontSize: 16, color: 'var(--text)', lineHeight: 1.3 }}>
                        {item.title}
                      </h3>
                      <p className="font-raleway" style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.75 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. HOW WE WORK ───────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: '#fff' }}>
          <div className="site-container">
            <div className="text-center mb-14" style={{ maxWidth: 560, margin: '0 auto 56px' }}>
              <GreenLine />
              <p className="eyebrow mb-3">Our Process</p>
              <h2 className="font-baskerville" style={{ fontSize: 'clamp(22px, 3vw, 34px)', color: 'var(--text)', lineHeight: 1.2 }}>
                Not just any property manager. <em>The right one.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
              {[
                {
                  step: '01',
                  title: 'Tell us about your portfolio',
                  desc: 'Share your portfolio size, location across Harrow, property types, and what you need — lettings, HMO, block management, or compliance support.',
                },
                {
                  step: '02',
                  title: 'We identify your specialist',
                  desc: 'We match your enquiry against our vetted Harrow network — checking qualification, specialism, portfolio type, and local experience. Only verified, ARLA registered agents.',
                },
                {
                  step: '03',
                  title: 'Direct introduction, within 48 hours',
                  desc: 'You receive a direct introduction to your matched specialist. No call centres, no referral chains. A professional handoff — and our service is free to landlords.',
                },
              ].map((step, i) => (
                <div key={step.step} style={{ background: '#fff', padding: '36px 28px' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-raleway"
                      style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', letterSpacing: '0.1em' }}
                    >
                      STEP {step.step}
                    </span>
                    <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                  </div>
                  <h3 className="font-baskerville mb-3" style={{ fontSize: 18, color: 'var(--text)', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <p className="font-raleway" style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.75 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/how-we-match-you/" className="btn-primary inline-flex">
                See Our Full Vetting Process
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. TESTIMONIALS ──────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <GreenLine />
                <p className="eyebrow mb-3">Client Feedback</p>
                <h2 className="font-baskerville" style={{ fontSize: 'clamp(22px, 3vw, 34px)', color: 'var(--text)', lineHeight: 1.2 }}>
                  What Harrow landlords say.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <div
                  key={t.id}
                  className="flex flex-col"
                  style={{ background: '#fff', padding: '28px 24px', border: '1px solid var(--border)' }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--green)">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="font-raleway flex-grow mb-6" style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, fontStyle: 'italic' }}>
                    "{t.quote}"
                  </blockquote>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                    <p className="font-baskerville" style={{ fontSize: 15, color: 'var(--text)' }}>{t.name}</p>
                    <p className="font-raleway" style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{t.location}</p>
                    <p className="font-raleway mt-1" style={{ fontSize: 10, fontWeight: 700, color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {t.portfolioType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. LOCAL AREAS ───────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: '#fff' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
              <div>
                <GreenLine />
                <p className="eyebrow mb-3">Coverage</p>
                <h2 className="font-baskerville mb-4" style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--text)', lineHeight: 1.2 }}>
                  Every area of <em>Harrow</em> covered.
                </h2>
                <p className="font-raleway" style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  From Stanmore and Pinner to Wealdstone and Edgware — our specialist network covers every postcode in the London Borough of Harrow.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { label: 'Stanmore',           sub: 'Premium lettings & family homes',             href: '/harrow/stanmore/' },
                  { label: 'Pinner',             sub: 'Affluent portfolios & tenant vetting',        href: '/harrow/pinner/' },
                  { label: 'Wealdstone',         sub: 'Regeneration area — HMO management',          href: '/harrow/wealdstone/' },
                  { label: 'Harrow on the Hill', sub: 'Premium rentals — full lettings management',  href: '/harrow/harrow-on-the-hill/' },
                  { label: 'Edgware',            sub: 'Expanding portfolios — compliance & lettings', href: '/harrow/edgware/' },
                  { label: 'Kenton',             sub: 'BTL portfolios & tenant sourcing',            href: '/harrow/kenton/' },
                ].map(area => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="no-underline flex items-center justify-between py-4 px-5 group"
                    style={{ border: '1px solid var(--border)', transition: 'border-color 0.15s, background 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.background = 'var(--green-soft)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
                  >
                    <div>
                      <p className="font-baskerville" style={{ fontSize: 15, color: 'var(--text)' }}>{area.label}</p>
                      <p className="font-raleway" style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{area.sub}</p>
                    </div>
                    <span style={{ color: 'var(--green)', fontSize: 16 }}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/property-management-harrow/"
                className="font-raleway no-underline"
                style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', letterSpacing: '0.04em', textTransform: 'uppercase' }}
              >
                View all Harrow areas →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ───────────────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--cream-2)' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">
              <div>
                <GreenLine />
                <p className="eyebrow mb-3">Common Questions</p>
                <h2 className="font-baskerville mb-4" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', color: 'var(--text)', lineHeight: 1.25 }}>
                  Frequently asked questions.
                </h2>
                <p className="font-raleway mb-8" style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  Questions not answered here? Call us directly or submit via the form — we respond within 24 hours.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Ask Us Directly
                </button>
              </div>

              <div>
                {homeFaqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <button
                      className="w-full text-left bg-transparent border-0 cursor-pointer flex justify-between items-center"
                      style={{ padding: '20px 0', gap: 16 }}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-baskerville" style={{ fontSize: 17, color: 'var(--text)', lineHeight: 1.3 }}>
                        {faq.q}
                      </span>
                      <span
                        className="font-raleway flex-shrink-0"
                        style={{ fontSize: 20, color: 'var(--green)', lineHeight: 1, fontWeight: 300 }}
                      >
                        {openFaq === i ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === i && (
                      <p className="font-raleway" style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, paddingBottom: 20 }}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA ─────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: 'var(--green)' }}>
          <div className="site-container text-center">
            <p className="font-raleway mb-3" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
              Free Matching Service · Harrow
            </p>
            <h2 className="font-baskerville text-white mb-5" style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1.15 }}>
              Ready to find your Harrow property<br />
              management <em style={{ color: 'var(--green-mid)' }}>specialist?</em>
            </h2>
            <p className="font-raleway mx-auto mb-10" style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', maxWidth: 520 }}>
              Get matched with a vetted, ARLA Propertymark or RICS qualified specialist — free. 48-hour introduction guarantee.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button
                onClick={() => setModalOpen(true)}
                className="font-raleway"
                style={{ background: '#fff', color: 'var(--green)', border: 'none', padding: '14px 36px', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--cream-2)')}
                onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
              >
                Find My Specialist — Free
              </button>
              <Link
                href="/how-we-match-you/"
                className="font-raleway no-underline"
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.04em' }}
              >
                How we vet our network →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
