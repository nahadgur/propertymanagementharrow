'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import HeroLeadForm from '@/components/HeroLeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { trustBadges } from '@/data/site'
import { type Service } from '@/data/services'
import { type ServiceContent } from '@/data/serviceContent'
import { type SpokeArea } from '@/data/harrowData'

interface Props {
  service: Service
  content: ServiceContent
  area:    SpokeArea
}

const serviceImages: Record<string, string> = {
  'residential-lettings-management': '/images/residential-lettings-management.png',
  'tenant-find-letting':             '/images/tenant-find-referencing.png',
  'block-management':                '/images/block-estate-management.png',
  'hmo-management':                  '/images/hmo-management.png',
  'rent-collection-accounting':      '/images/rent-collection-arrears-management.png',
}

// Dynamic intro paragraph combining service + area context
function getIntro(service: Service, area: SpokeArea): string {
  const s = service.slug
  const a = area
  if (s === 'residential-lettings-management')
    return `${a.name} landlords with buy-to-let portfolios face some of the most demanding lettings management challenges in the London Borough of Harrow. With average property values of ${a.avgPrice} in the ${a.postcode} postcode and gross yields of ${a.avgYield}, effective lettings management is essential to protect your investment. A specialist will assess your current tenancy arrangements, identify compliance gaps, and implement a structured management plan for your ${a.name} portfolio — covering tenant vetting, rent collection, maintenance coordination, and regulatory compliance.`
  if (s === 'tenant-find-referencing')
    return `${a.name} property investors looking for quality tenants need a service that understands the local rental market. With ${a.postcode} properties averaging ${a.avgPrice} and typical yields of ${a.avgYield}, finding the right tenant quickly is critical to minimising void periods and protecting your asset. A specialist will handle the full tenant find process for your ${a.name} portfolio — marketing, viewings, referencing, Right to Rent checks, and tenancy agreement preparation.`
  if (s === 'block-management')
    return `Property investors in ${a.name} with freehold blocks or shared buildings in the ${a.postcode} area need specialist block management. With average values of ${a.avgPrice} in the area, the service charge budgeting, Section 20 consultation requirements, and communal maintenance obligations require dedicated expertise. A specialist will handle the day-to-day management of your ${a.name} block — from leaseholder communications to contractor coordination and regulatory compliance.`
  if (s === 'hmo-management')
    return `HMO properties in ${a.name} require specialist management to ensure licensing compliance and maximise occupancy. With ${a.postcode} properties averaging ${a.avgPrice}, HMO landlords need a managing agent who understands Harrow Council's licensing requirements, room-by-room letting strategies, and the higher maintenance demands of multi-tenant properties. A specialist will manage your ${a.name} HMO end-to-end — ensuring full compliance while maximising rental income across all rooms.`
  if (s === 'rent-collection-accounting')
    return `${a.name} property investors with ${a.postcode} holdings averaging ${a.avgPrice} need reliable rent collection and transparent financial reporting. Late payments, arrears, and poor record-keeping can erode returns and create problems at year-end. A specialist will handle rent collection, chase arrears proactively, and provide monthly statements formatted for your accountant — ensuring your ${a.name} portfolio runs efficiently and every pound is accounted for.`
  return `${a.name} landlords and property investors can get matched with an ARLA Propertymark or RICS qualified specialist in ${service.title.toLowerCase()} through our vetted ${a.postcode} network. Free matching, 48-hour introduction.`
}

export default function ServiceLocationContent({ service, content, area }: Props) {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)
  const intro = getIntro(service, area)

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)}
        service={service.title} location={`${service.title} — ${area.name}`} />
      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] max-w-[1280px] mx-auto w-full">
            <div className="relative flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 lg:py-20 overflow-hidden"
              style={{ background: 'var(--green-deep)' }}>
              <img src={serviceImages[service.slug] ?? '/images/hero-services.png'} alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10" />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, var(--green-deep) 60%, rgba(15,51,32,0.9) 100%)' }} />
              <div className="relative z-10">
                <Breadcrumbs items={[
                  { label: 'Home',     href: '/' },
                  { label: 'Services', href: '/services/' },
                  { label: service.shortTitle, href: `/services/${service.slug}/` },
                  { label: area.name },
                ]} />
                <div className="inline-flex items-center gap-2 mb-5 font-sans text-[10px] uppercase tracking-[0.18em] font-semibold px-3 py-1.5 self-start"
                  style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                  {area.postcode} · {area.name}
                </div>
                <h1 className="font-display text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] text-white mb-5 leading-tight">
                  {service.title} in {area.name}
                </h1>
                <p className="font-sans text-[16px] leading-relaxed mb-8 max-w-[520px]"
                  style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Specialist {service.title.toLowerCase()} advice for {area.name} landlords and property investors. Vetted ARLA Propertymark and RICS qualified specialists, free matching.
                </p>
                <div className="flex flex-col gap-2.5">
                  {['ARLA Propertymark and RICS qualified specialists only', `Specialists who know the ${area.name} market`, 'Matched within 48 hours — free'].map(item => (
                    <div key={item} className="flex items-center gap-3 font-sans text-[13px]"
                      style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#277649" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <HeroLeadForm service={service.title} location={`${service.slug}-${area.slug}`}
              image={serviceImages[service.slug] ?? '/images/hero-services.png'} />
          </div>
        </section>

        {/* Trust strip */}
        <div className="bg-[#f8fbf8] border-y border-[#e8f0e8]">
          <div className="site-container py-4">
            <div className="trust-strip justify-between">
              {trustBadges.map(b => (
                <div key={b.label} className="trust-strip-item text-text-muted">
                  <div className="trust-dot" /><span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intro + area stats */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
              <div>
                <p className="eyebrow mb-4">{service.title} — {area.name}</p>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] text-text mb-6 leading-tight">
                  Why {area.name} landlords need specialist {service.shortTitle.toLowerCase()} advice
                </h2>
                <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-5">{intro}</p>
                <p className="font-sans text-[16px] text-text-muted leading-relaxed">{content.intro[0]}</p>
              </div>

              {/* Area stats */}
              <div className="border border-[#f0eee8] p-6 sticky top-24" style={{ background: 'var(--green-soft)' }}>
                <p className="eyebrow mb-4">{area.name} — {area.postcode}</p>
                <div className="flex flex-col gap-3 mb-6">
                  {area.keyFacts.map(f => (
                    <div key={f.label} className="flex justify-between border-b border-[#e0e9e0] pb-2.5">
                      <span className="font-sans text-[12px] text-text-faint">{f.label}</span>
                      <span className="font-sans text-[13px] font-semibold text-text">{f.value}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setModalOpen(true)} className="btn-primary w-full text-[12px] py-3">
                  Find My {area.name} Specialist
                </button>
                <p className="font-sans text-[11px] text-text-faint text-center mt-2">
                  Free &middot; 48hr introduction &middot; No obligation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <p className="eyebrow mb-4">The Problem</p>
            <h2 className="font-display text-[1.8rem] md:text-[2.2rem] text-text mb-10 leading-tight max-w-2xl">
              {content.problemHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {content.problems.map((p, i) => (
                <div key={i} className="bg-white border border-[#e8e4de] p-6">
                  <div className="font-display text-[32px] leading-none mb-3" style={{ color: 'var(--green-mid)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-[17px] text-text mb-2 leading-snug">{p.head}</h3>
                  <p className="font-sans text-[13px] text-text-muted leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <p className="eyebrow mb-4">What You Get</p>
            <h2 className="font-display text-[1.8rem] md:text-[2.2rem] text-text mb-10 leading-tight">
              What our {area.name} specialists deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {content.benefits.map((b, i) => (
                <div key={i} className="flex gap-5 p-6 border border-[#f0eee8]">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-display text-[13px] font-semibold text-white"
                    style={{ background: 'var(--green)' }}>{i + 1}</div>
                  <div>
                    <h3 className="font-display text-[18px] text-text mb-1.5 leading-snug">{b.title}</h3>
                    <p className="font-sans text-[13px] text-text-muted leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local insight */}
        <section className="py-12 bg-white border-y border-[#f0eee8]">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="eyebrow mb-3">{area.name} Market Context</p>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] text-text mb-4 leading-tight">
                  The {area.name} property landscape
                </h2>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-4">{area.marketProfile[0]}</p>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed">{area.localInsight}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: `${area.name} area guide`,  href: `/harrow/${area.slug}/` },
                  { label: `${service.title} overview`, href: `/services/${service.slug}/` },
                  { label: 'All Harrow specialists',    href: '/property-management-harrow/' },
                  { label: 'How we match you',          href: '/how-we-match-you/' },
                ].map(link => (
                  <Link key={link.href} href={link.href}
                    className="flex items-center justify-between p-4 border border-[#f0eee8] no-underline hover:border-brand transition-colors group text-[13px]">
                    <span className="font-sans text-text group-hover:text-brand transition-colors">{link.label}</span>
                    <span style={{ color: 'var(--green)' }}>&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">
              <div>
                <p className="eyebrow mb-4">Common Questions</p>
                <h2 className="font-display text-[1.8rem] md:text-[2.2rem] text-text mb-4 leading-tight">
                  {service.shortTitle} in {area.name} — FAQs
                </h2>
                <button onClick={() => setModalOpen(true)} className="btn-primary mt-2">
                  Ask a Specialist
                </button>
              </div>
              <div>
                {service.faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <button className="faq-q w-full text-left bg-transparent border-0 cursor-pointer"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span className="font-display text-[17px]">{faq.q}</span>
                      <span className="flex-shrink-0 ml-4 font-sans text-[17px]"
                        style={{ color: 'var(--green)' }}>{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && <p className="faq-a">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-[1.8rem] md:text-[2.2rem] text-white mb-4 leading-tight">
              Find a {service.shortTitle} specialist in {area.name} — free
            </h2>
            <p className="font-sans text-[16px] leading-relaxed mb-8 max-w-lg mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              ARLA Propertymark and RICS qualified. 48-hour introduction. Serving {area.name} and all {area.postcode} postcodes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)}
                className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer"
                style={{ background: 'white', color: 'var(--green)' }}>
                Get Matched — Free
              </button>
              <Link href={`/harrow/${area.slug}/`}
                className="font-sans text-[14px] font-medium no-underline flex items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.75)' }}>
                {area.name} area guide &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
