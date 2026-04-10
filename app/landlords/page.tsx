'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import { avatarContent } from '@/data/avatarContent'

const icons = [
  // House key
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  // Chart growth
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  // Building
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  // Globe
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
]

export default function LandlordsIndexPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Landlords Index" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero */}
        <section style={{ background: 'var(--green-deep)' }} className="py-20">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Landlords' }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Find Your Match
                </p>
                <h1 className="font-display text-h1 text-white mb-6 leading-tight">
                  Which type of landlord are you?
                </h1>
                <p className="font-sans text-[17px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Different landlord situations require different specialist expertise. Select your profile to see the services, tools, and Harrow specialists most relevant to your position.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {avatarContent.map((a, i) => (
                  <Link
                    key={a.slug}
                    href={`/landlords/${a.slug}/`}
                    className="flex items-center gap-5 p-5 border border-white/10 no-underline transition-all group"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                  >
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(39,118,73,0.3)', color: 'var(--green-mid)' }}>
                      {icons[i]}
                    </div>
                    <div className="flex-grow">
                      <p className="font-display text-[18px] text-white leading-none mb-1">{a.title}</p>
                      <p className="font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{a.pill}</p>
                    </div>
                    <span style={{ color: 'var(--green-mid)' }} className="font-sans">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Avatar grid */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <p className="eyebrow mb-4">All Landlord Profiles</p>
            <h2 className="font-display text-h2 text-text mb-12 leading-tight">
              Specialist advice matched to your situation.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {avatarContent.map((avatar, i) => (
                <div key={avatar.slug} className="border border-[#f0eee8] p-8 flex flex-col">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--green-light)', color: 'var(--green)' }}>
                      {icons[i]}
                    </div>
                    <div>
                      <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-2 py-1 mb-2"
                        style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
                        {avatar.pill}
                      </span>
                      <h3 className="font-display text-[24px] text-text leading-tight">{avatar.title}</h3>
                    </div>
                  </div>

                  <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4 italic">
                    &ldquo;{avatar.profile}&rdquo;
                  </p>

                  <p className="font-sans text-[14px] text-text-muted leading-relaxed flex-grow mb-6">
                    {avatar.empathyBody[0]}
                  </p>

                  <div className="flex flex-col gap-1.5 mb-6">
                    {avatar.relevantServices.map(rs => (
                      <div key={rs.slug} className="flex items-center gap-2 font-sans text-[12px] text-text-muted">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--green)' }} />
                        {rs.title}
                      </div>
                    ))}
                  </div>

                  <Link href={`/landlords/${avatar.slug}/`} className="btn-primary self-start text-[13px] py-3">
                    My situation &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bridges */}
        <section className="py-16 border-t border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container text-center">
            <p className="eyebrow mb-4">Not sure which profile fits?</p>
            <h2 className="font-display text-h2 text-text mb-4 leading-tight">
              Tell us your situation and we will identify the right specialist.
            </h2>
            <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-8 max-w-lg mx-auto">
              Free, no obligation. A member of our team reviews every enquiry before making a specialist introduction.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Get Matched — Free
              </button>
              <Link href="/property-accountants-harrow/" className="btn-outline">
                See Harrow Specialists
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
