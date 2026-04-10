'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

const guides = [
  {
    title: 'The Complete Guide to HMO Licensing in Harrow',
    desc: 'Everything Harrow landlords need to know about mandatory and additional HMO licensing — when a licence is required, the application process, conditions, penalties for non-compliance, and how to ensure your property meets all licensing standards.',
    href: '/guides/hmo-licensing-harrow/',
    pill: 'HMO — Compliance',
    readTime: '~15 min',
    tags: ['HMO licensing', 'Compliance', 'Harrow Council'],
  },
  {
    title: 'The Landlord Compliance Checklist for 2025/26',
    desc: 'A comprehensive checklist covering every legal obligation for UK landlords — gas safety certificates, electrical inspections, EPC requirements, Right to Rent checks, deposit protection, and smoke & CO alarms. Stay compliant and avoid penalties.',
    href: '/guides/landlord-compliance-checklist/',
    pill: 'Compliance — Essentials',
    readTime: '~20 min',
    tags: ['Compliance', 'Safety certificates', 'Legal obligations'],
  },
  {
    title: 'Tenant Screening Best Practices for UK Landlords',
    desc: 'How to find and vet quality tenants — referencing processes, affordability checks, Right to Rent verification, guarantor requirements, and red flags to watch for. Reduce arrears, protect your property, and minimise void periods.',
    href: '/guides/tenant-screening-best-practices/',
    pill: 'Tenant Find — Vetting',
    readTime: '~18 min',
    tags: ['Tenant screening', 'Referencing', 'Void periods'],
  },
  {
    title: 'The Deposit Protection Guide for UK Landlords',
    desc: 'Everything you need to know about tenancy deposit protection — the three government-approved schemes, prescribed information requirements, deadlines, and the consequences of non-compliance including potential claims of up to 3x the deposit.',
    href: '/guides/deposit-protection-guide/',
    pill: 'Deposits — Protection',
    readTime: '~15 min',
    tags: ['Deposit protection', 'TDS', 'Tenancy compliance'],
  },
  {
    title: 'How to Switch Property Managers Without Disruption',
    desc: 'A step-by-step guide to changing your managing agent — notice periods, handover checklists, tenant communication, key and document transfers, and how to ensure continuity of rent collection and maintenance throughout the transition.',
    href: '/guides/switching-property-managers/',
    pill: 'Management — Transition',
    readTime: '~12 min',
    tags: ['Switching agents', 'Handover', 'Portfolio management'],
  },
]

export default function GuidesContent() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Guides Index" />
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/block-estate-management.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="relative z-10">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>In-Depth Guides</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
              Property management guides for UK landlords and investors.
            </h1>
            <p className="font-sans text-[16px] md:text-[17px] max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Comprehensive, specialist-written guides covering the full property management lifecycle — lettings, compliance, tenant screening, and portfolio oversight. All include practical checklists and direct links to specialist advice.
            </p>
          </div>
                  </div>
        </section>

        {/* Guides list */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="flex flex-col gap-6">
              {guides.map((guide, i) => (
                <div key={guide.href} className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-6 p-6 md:p-8 border border-[#f0eee8] items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1"
                        style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
                        {guide.pill}
                      </span>
                      <span className="font-sans text-[11px] text-text-faint">{guide.readTime} read</span>
                    </div>
                    <h2 className="font-display text-[22px] md:text-[24px] text-text mb-3 leading-snug">{guide.title}</h2>
                    <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">{guide.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.tags.map(tag => (
                        <span key={tag} className="font-sans text-[11px] text-text-faint border border-[#f0eee8] px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 lg:items-end">
                    <Link href={guide.href} className="btn-primary text-[13px] py-3 px-6 text-center whitespace-nowrap">
                      Read guide &rarr;
                    </Link>
                    <button onClick={() => setModalOpen(true)}
                      className="font-sans text-[12px] text-text-muted cursor-pointer bg-transparent border-0 text-center hover:text-brand transition-colors">
                      Get matched free
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-[1.8rem] md:text-h2 text-white mb-4">Ready to act on what you have read?</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              A vetted Harrow property management specialist will assess the right approach for your portfolio — free, within 48 hours.
            </p>
            <button onClick={() => setModalOpen(true)}
              className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer"
              style={{ background: 'white', color: 'var(--green)' }}>
              Find My Specialist — Free
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
