'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'

const TOC = [
  { id: 'why-deposit-protection-matters',  label: 'Why deposit protection matters' },
  { id: 'the-legal-requirement',           label: 'The legal requirement' },
  { id: 'government-approved-schemes',     label: 'Government-approved schemes' },
  { id: 'the-30-day-deadline',             label: 'The 30-day deadline' },
  { id: 'prescribed-information',          label: 'Prescribed information' },
  { id: 'penalties-for-non-compliance',    label: 'Penalties for non-compliance' },
  { id: 'end-of-tenancy-deductions',       label: 'End-of-tenancy deductions' },
  { id: 'disputes-and-adjudication',       label: 'Disputes and adjudication' },
  { id: 'faqs',                            label: 'FAQs' },
]

export default function DepositProtectionGuideContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const faqs = [
    { q: 'What happens if I protect the deposit late?', a: 'If you protect the deposit after the 30-day deadline, you are technically in breach of the Housing Act 2004. The tenant can apply to the county court for compensation of between one and three times the deposit amount. You also lose the ability to serve a valid Section 21 notice until the deposit has been properly protected and prescribed information served.' },
    { q: 'Do I need to protect a holding deposit?', a: 'No. A holding deposit taken before a tenancy agreement is signed does not need to be protected in a government-approved scheme. However, once the tenancy begins and the holding deposit is converted into the tenancy deposit, it must be protected within 30 days of the tenancy start date.' },
    { q: 'Can I make deductions from the deposit without the tenant agreeing?', a: 'You cannot simply keep deposit funds unilaterally. If the tenant disputes your proposed deductions, the matter must be referred to the free adjudication service provided by the deposit protection scheme. The adjudicator makes a binding decision based on the evidence provided by both parties, including the inventory, check-in and check-out reports, and photographic evidence.' },
    { q: 'Does the deposit transfer if I change managing agent?', a: 'The deposit protection must be maintained continuously. If your new agent uses a different scheme, the deposit may need to be transferred, and new prescribed information must be served on the tenant within 30 days. Your managing agent should handle this as part of the handover process.' },
    { q: 'What if my tenant pays the deposit to my agent, not me?', a: 'The legal obligation to protect the deposit remains with the landlord, regardless of who physically receives the money. If your managing agent collects the deposit, they are typically responsible for protecting it on your behalf. Ensure your management agreement clearly states that the agent will protect deposits and serve prescribed information. If the agent fails to do so, you as the landlord face the legal consequences.' },
  ]

  const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <h2 id={id} className="font-display text-h2 text-text mb-6 leading-tight scroll-mt-24">{children}</h2>
  )
  const P = ({ children }: { children: React.ReactNode }) => (
    <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-5">{children}</p>
  )
  const H3 = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-display text-[22px] text-text mb-4 mt-8 leading-snug">{children}</h3>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Deposit Protection Guide for UK Landlords: Rules, Schemes & Penalties',
        description: 'Complete guide to deposit protection for UK landlords covering government-approved schemes, the 30-day deadline, prescribed information, penalties, and end-of-tenancy deductions.',
        datePublished: '2026-02-15',
        dateModified: '2026-04-01',
        author: { '@type': 'Organization', name: 'Property Management Harrow', url: 'https://www.propertymanagementharrow.co.uk' },
        publisher: { '@type': 'Organization', name: 'Property Management Harrow' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertymanagementharrow.co.uk/guides/deposit-protection-guide/' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Deposit Protection Guide" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="relative z-10">
            <div className="site-container">
              <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Deposit Protection' }]} />
              <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Landlord Compliance Guide</p>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight max-w-3xl">
                Deposit Protection Guide for UK Landlords
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Everything you need to know about protecting tenancy deposits — the legal requirements, approved schemes, deadlines, prescribed information, and the penalties for getting it wrong.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
              {/* Main */}
              <div className="max-w-none">

                <H2 id="why-deposit-protection-matters">Why deposit protection matters</H2>
                <P>Deposit protection is one of the most fundamental compliance obligations for UK landlords. Since the Housing Act 2004 introduced mandatory deposit protection for assured shorthold tenancies, failure to comply has been one of the most common — and most expensive — mistakes landlords make.</P>
                <P>The consequences of non-compliance are severe: tenants can claim compensation of up to three times the deposit amount, and landlords lose the ability to serve a Section 21 no-fault eviction notice. For landlords who may need to recover possession of their property, this single compliance failure can block the entire process.</P>

                <H2 id="the-legal-requirement">The legal requirement</H2>
                <P>Under the Housing Act 2004, any deposit taken in connection with an assured shorthold tenancy in England must be protected in a government-approved tenancy deposit scheme within 30 days of receipt. This applies regardless of the deposit amount, and regardless of whether the landlord manages the property directly or through an agent.</P>
                <P>The obligation has two distinct parts: protecting the deposit itself, and serving the tenant with prescribed information about where and how it is protected. Both parts must be completed within the 30-day window. Protecting the deposit without serving prescribed information — or vice versa — still constitutes non-compliance.</P>

                <H2 id="government-approved-schemes">Government-approved schemes</H2>
                <P>There are three government-approved deposit protection schemes in England, operating two different models:</P>
                <H3>Custodial schemes</H3>
                <P>The Deposit Protection Service (DPS) operates the main custodial scheme. The landlord or agent transfers the deposit to the DPS, which holds it for the duration of the tenancy. At the end of the tenancy, both parties must agree on any deductions before the money is released. The custodial scheme is free to use.</P>
                <H3>Insurance-based schemes</H3>
                <P>MyDeposits and the Tenancy Deposit Scheme (TDS) offer insurance-based protection. The landlord or agent retains the deposit but pays an annual fee to insure it. If the landlord fails to return the deposit when required, the scheme pays the tenant and pursues the landlord for reimbursement. Insurance-based schemes are preferred by many agents as they retain control of the funds.</P>

                <H2 id="the-30-day-deadline">The 30-day deadline</H2>
                <P>The deposit must be protected within 30 days of the date the landlord or agent receives it — not 30 days from the start of the tenancy. In most cases these dates are the same, but where a deposit is collected before the tenancy starts, the clock begins on the day the money is received.</P>
                <P>The prescribed information must also be served within this 30-day window. Protecting the deposit on day 15 but serving the prescribed information on day 35 constitutes non-compliance, even though the deposit itself was protected on time.</P>

                <H2 id="prescribed-information">Prescribed information</H2>
                <P>The prescribed information that must be served on the tenant includes:</P>
                <ul className="list-disc pl-6 mb-6 font-sans text-[15px] text-text-muted leading-relaxed space-y-2">
                  <li>The name and contact details of the deposit protection scheme used</li>
                  <li>The landlord&apos;s name, address, and contact details (or the agent&apos;s, if applicable)</li>
                  <li>The address of the rental property</li>
                  <li>The amount of the deposit and how it is protected</li>
                  <li>Information about the purpose of the deposit</li>
                  <li>How to apply to get the deposit back at the end of the tenancy</li>
                  <li>What to do if there is a dispute about the deposit</li>
                  <li>The scheme&apos;s dispute resolution procedure</li>
                </ul>
                <P>Most deposit protection schemes provide a standard prescribed information form that satisfies these requirements. The tenant must sign to confirm receipt. Retain a signed copy as evidence of compliance.</P>

                <H2 id="penalties-for-non-compliance">Penalties for non-compliance</H2>
                <P>If a landlord fails to protect a deposit or serve prescribed information within 30 days, the tenant can apply to the county court. The court must order the landlord to either repay the deposit or protect it within 14 days, and must also order the landlord to pay compensation of between one and three times the deposit amount.</P>
                <P>Critically, a landlord who has not complied with deposit protection requirements cannot serve a valid Section 21 notice. This means that even if there are legitimate grounds for seeking possession — the landlord wants to sell, or needs the property for personal use — the no-fault eviction route is blocked until the deposit is properly protected and prescribed information served.</P>
                <P>The tenant can bring a deposit protection claim at any time during the tenancy, or up to six years after the tenancy ends. There is no time limit on when the penalty can be sought, as long as the claim is brought within the limitation period.</P>

                <H2 id="end-of-tenancy-deductions">End-of-tenancy deductions</H2>
                <P>Deductions from the deposit at the end of a tenancy are only permissible for specific reasons:</P>
                <ul className="list-disc pl-6 mb-6 font-sans text-[15px] text-text-muted leading-relaxed space-y-2">
                  <li>Damage to the property beyond fair wear and tear</li>
                  <li>Missing or damaged items listed on the inventory</li>
                  <li>Unpaid rent or utility bills that are the tenant&apos;s responsibility</li>
                  <li>Professional cleaning costs where the tenancy agreement requires the property to be returned in a professionally cleaned condition and it has not been</li>
                </ul>
                <P>The key to successful deductions is evidence. A professional, photographic inventory at check-in and a comparative check-out report at the end of the tenancy provide the documentation needed to support any claim. Without this evidence, adjudicators are unlikely to award deductions.</P>
                <P>Fair wear and tear is not defined in statute and is assessed on a case-by-case basis. Generally, it means the reasonable deterioration that would occur through normal use over the length of the tenancy. A carpet that has worn slightly over five years is fair wear and tear; a carpet stained with paint is damage.</P>

                <H2 id="disputes-and-adjudication">Disputes and adjudication</H2>
                <P>If the landlord and tenant cannot agree on deductions, either party can refer the dispute to the free adjudication service provided by the deposit protection scheme. The adjudicator reviews evidence from both sides — typically the inventory, check-in and check-out reports, photographs, correspondence, and receipts — and makes a binding decision.</P>
                <P>The adjudication process is evidence-based and impartial. Landlords who rely on verbal assertions without documentary evidence consistently lose. Professional property managers maintain the documentation needed to protect your position from the start of the tenancy.</P>

                {/* FAQs */}
                <H2 id="faqs">Frequently asked questions</H2>
                <div className="flex flex-col gap-3 mt-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-[#f0eee8]">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex justify-between items-center text-left px-5 py-4 bg-transparent border-0 cursor-pointer"
                      >
                        <span className="font-sans text-[15px] font-semibold text-text pr-4">{faq.q}</span>
                        <span className="text-text-faint text-[18px] flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5">
                          <p className="font-sans text-[14px] text-text-muted leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar TOC */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-text-faint font-semibold mb-4">In this guide</p>
                  <ul className="flex flex-col gap-2 list-none p-0 m-0">
                    {TOC.map(item => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="text-[13px] text-text-muted no-underline hover:text-text transition-colors font-sans">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-5 border border-[#f0eee8]">
                    <p className="font-sans text-[14px] font-semibold text-text mb-2">Need a property manager?</p>
                    <p className="font-sans text-[13px] text-text-muted mb-4">We match Harrow landlords with vetted specialists who handle deposit protection as standard.</p>
                    <button onClick={() => setModalOpen(true)} className="btn-primary text-[12px] py-2.5 w-full">Get Matched — Free</button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-[1.8rem] md:text-h2 text-white mb-4">Let a professional handle deposit compliance for you.</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Get matched with a vetted Harrow property management specialist — free, within 24 hours.
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
