'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'

const TOC = [
  { id: 'why-compliance-matters',    label: 'Why compliance matters' },
  { id: 'gas-safety',                label: 'Gas safety certificates' },
  { id: 'electrical-safety',         label: 'Electrical safety (EICR)' },
  { id: 'energy-performance',        label: 'Energy Performance Certificates' },
  { id: 'deposit-protection',        label: 'Deposit protection' },
  { id: 'right-to-rent',             label: 'Right to Rent checks' },
  { id: 'smoke-co-alarms',           label: 'Smoke and CO alarms' },
  { id: 'section-21-prerequisites',  label: 'Section 21 prerequisites' },
  { id: 'homes-fitness-standard',    label: 'Homes (Fitness for Habitation)' },
  { id: 'annual-compliance-calendar', label: 'Annual compliance calendar' },
  { id: 'faqs',                      label: 'FAQs' },
]

export default function ComplianceChecklistContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const faqs = [
    { q: 'Can I serve a Section 21 notice if I have not protected the deposit?', a: 'No. Under section 215 of the Housing Act 2004, you cannot serve a valid Section 21 notice if the deposit has not been protected in a government-approved scheme and the prescribed information has not been served on the tenant. You must first protect the deposit, serve the prescribed information, and then wait before serving the Section 21 notice.' },
    { q: 'How often does an EICR need to be renewed?', a: 'An Electrical Installation Condition Report must be renewed at least every five years for rented properties, or sooner if the previous report recommends an earlier re-inspection. The requirement applies to all new tenancies from July 2020 and all existing tenancies from April 2021.' },
    { q: 'What is the minimum EPC rating for rental properties?', a: 'The current minimum EPC rating for rental properties in England and Wales is E. Properties rated F or G cannot be let unless a valid exemption has been registered on the PRS Exemptions Register. The government has consulted on raising the minimum to C for new tenancies, though implementation dates have been subject to change.' },
    { q: 'Do I need a gas safety certificate if the property has no gas supply?', a: 'No. A Gas Safety Certificate (CP12) is only required where the property has a gas supply and gas appliances. If the property is entirely electric with no gas meter or gas appliances, the requirement does not apply. However, it is worth documenting this in writing for your records.' },
    { q: 'What happens if a tenant fails the Right to Rent check?', a: 'If a prospective tenant cannot demonstrate their right to rent in the UK, you must not grant them a tenancy. Renting to a person who does not have the right to rent is a criminal offence carrying an unlimited fine and up to five years imprisonment for repeat offenders. You must retain copies of the documents checked and record the date of the check.' },
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
        headline: 'The Complete Landlord Compliance Checklist for UK Rental Properties',
        description: 'Comprehensive landlord compliance checklist covering gas safety, EICR, EPC, deposit protection, Right to Rent, smoke and CO alarms, and Section 21 prerequisites.',
        datePublished: '2026-01-20',
        dateModified: '2026-04-01',
        author: { '@type': 'Organization', name: 'Property Management Harrow', url: 'https://www.propertymanagementharrow.co.uk' },
        publisher: { '@type': 'Organization', name: 'Property Management Harrow' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertymanagementharrow.co.uk/guides/landlord-compliance-checklist/' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Compliance Checklist Guide" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Landlord Compliance Checklist' }]} />
            <div className="max-w-2xl">
              <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 mb-6" style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                Definitive Guide — Updated April 2026
              </span>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                The Complete Landlord Compliance Checklist for UK Rental Properties
              </h1>
              <p className="font-sans text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Every legal obligation UK landlords must meet before and during a tenancy — gas safety, electrical inspections, EPC, deposit protection, Right to Rent, alarms, and Section 21 prerequisites.
              </p>
              <div className="flex items-center gap-6 font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span>By Property Management Harrow</span>
                <span>&middot;</span>
                <span>Updated: April 2026</span>
                <span>&middot;</span>
                <span>~20 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

              {/* ToC sidebar */}
              <div className="sticky top-24 hidden lg:block">
                <p className="eyebrow mb-4">Contents</p>
                <nav className="flex flex-col gap-0">
                  {TOC.map((item, i) => (
                    <a key={item.id} href={`#${item.id}`}
                      className="flex items-start gap-3 py-3 border-b border-[#f0eee8] no-underline transition-colors hover:text-brand group font-sans text-[13px] text-text-muted">
                      <span className="flex-shrink-0 font-display text-[12px] mt-0.5" style={{ color: 'var(--green-mid)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="group-hover:text-brand transition-colors">{item.label}</span>
                    </a>
                  ))}
                </nav>
                <button onClick={() => setModalOpen(true)} className="btn-primary w-full mt-8 text-[12px] py-3">
                  Find a Specialist — Free
                </button>
              </div>

              {/* Article body */}
              <article className="max-w-2xl">

                <H2 id="why-compliance-matters">Why compliance matters</H2>
                <P>Landlord compliance is not optional — it is a legal framework with real financial and criminal consequences for non-compliance. In England, a landlord who fails to meet their statutory obligations faces civil penalties of up to 30,000 pounds per offence, criminal prosecution with unlimited fines, rent repayment orders, and the inability to regain possession of their property through the Section 21 no-fault eviction route.</P>
                <P>Beyond the legal risk, non-compliant properties endanger tenants. Faulty gas appliances cause carbon monoxide poisoning. Defective electrical installations cause fires. Missing smoke alarms delay evacuation. Each compliance requirement exists because its absence has historically resulted in tenant injury or death.</P>
                <P>For Harrow landlords, the compliance burden has increased significantly since 2020. The introduction of mandatory electrical safety inspections, the strengthening of smoke and carbon monoxide alarm regulations, and the tightening of Section 21 prerequisites mean that the checklist of obligations before and during a tenancy is now longer than ever. This guide sets out every requirement in a single, actionable reference.</P>

                <H2 id="gas-safety">Gas safety certificates (CP12)</H2>
                <P>Under the Gas Safety (Installation and Use) Regulations 1998, landlords must have all gas appliances, fittings, and flues in their rental property checked annually by a Gas Safe registered engineer. The engineer issues a Gas Safety Certificate (also known as a CP12) confirming that each appliance has been inspected, tested, and is safe for continued use.</P>
                <P>The certificate must be renewed every 12 months. The landlord must provide a copy to existing tenants within 28 days of the check and to new tenants before they move in. A copy must be retained for at least two years. Failure to hold a valid gas safety certificate is a criminal offence and also prevents a valid Section 21 notice from being served.</P>
                <H3>What the engineer checks</H3>
                <P>A gas safety check covers all gas appliances provided by the landlord — boilers, gas fires, gas cookers (if landlord-supplied), and any other gas-burning equipment. The engineer tests for gas tightness, checks the burner pressure and gas rate, tests the flue flow and spillage, and inspects ventilation provision. They also check for signs of unsafe operation such as incomplete combustion, which can produce lethal carbon monoxide.</P>
                <P>Tenants&apos; own gas appliances are not covered by the landlord&apos;s obligation, but the flues and pipework serving those appliances remain the landlord&apos;s responsibility.</P>

                <H2 id="electrical-safety">Electrical safety (EICR)</H2>
                <P>The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 require landlords to have the electrical installation in their property inspected and tested by a qualified electrician at least every five years. The resulting Electrical Installation Condition Report (EICR) must classify the installation as satisfactory or identify any defects requiring remedial action.</P>
                <P>Where the EICR identifies a defect classified as C1 (danger present) or C2 (potentially dangerous), the landlord must complete the necessary remedial work within 28 days or within the period specified in the report, whichever is shorter. A copy of the EICR must be provided to existing tenants within 28 days of the inspection and to prospective tenants within 28 days of receiving a request.</P>
                <H3>Who can carry out the inspection</H3>
                <P>The inspection must be carried out by a person who is qualified and competent. In practice, this means an electrician registered with an approved competent person scheme such as NICEIC, NAPIT, or ELECSA. The regulations do not prescribe a specific qualification, but landlords should ensure the electrician holds a current inspection and testing qualification (such as the City and Guilds 2391) and is registered with a Part P scheme.</P>

                <H2 id="energy-performance">Energy Performance Certificates (EPC)</H2>
                <P>Every rental property in England must have a valid Energy Performance Certificate with a minimum rating of E before it can be let. An EPC is valid for ten years and rates the property from A (most efficient) to G (least efficient). The Minimum Energy Efficiency Standards (MEES) regulations prohibit landlords from granting a new tenancy or renewing an existing tenancy for a property rated below E, unless a valid exemption is registered.</P>
                <P>The EPC must be provided to prospective tenants free of charge at the earliest opportunity and in any event before a tenancy agreement is entered into. Failure to hold a valid EPC or letting a sub-standard property without an exemption can result in a fine of up to 5,000 pounds.</P>
                <H3>Exemptions</H3>
                <P>Where a landlord can demonstrate that all relevant energy efficiency improvements have been made (or that the cost of improvements would exceed the cost cap of 3,500 pounds including VAT), they can register a temporary exemption on the PRS Exemptions Register. Exemptions last for five years and must be re-registered if the property is still below the minimum standard at the end of that period. Properties where consent from a third party (such as a freeholder) is required but has been refused may also qualify for an exemption.</P>

                <H2 id="deposit-protection">Deposit protection</H2>
                <P>Under the Housing Act 2004, any deposit taken in connection with an assured shorthold tenancy must be protected in a government-approved tenancy deposit scheme within 30 days of receipt. The landlord must also serve the tenant with the prescribed information about the deposit within the same 30-day period.</P>
                <P>There are three government-approved schemes in England: the Deposit Protection Service (DPS), MyDeposits, and the Tenancy Deposit Scheme (TDS). Landlords can choose between a custodial scheme (where the scheme holds the deposit) and an insured scheme (where the landlord holds the deposit but pays an insurance premium to the scheme).</P>
                <P>Failure to protect a deposit or serve the prescribed information prevents the landlord from serving a valid Section 21 notice. The tenant can also apply to the county court for a penalty of between one and three times the deposit amount.</P>

                <H2 id="right-to-rent">Right to Rent checks</H2>
                <P>Under the Immigration Act 2014, landlords in England must verify that all adult tenants have the right to rent residential property in the UK before granting a tenancy. The check must be carried out no more than 28 days before the tenancy starts, and the landlord must retain copies of the documents checked.</P>
                <H3>How to conduct the check</H3>
                <P>The landlord must obtain original documents from the prospective tenant, check them in the presence of the document holder, take copies, and record the date of the check. Acceptable documents include a UK or EU passport, a biometric residence permit, a share code from the Home Office online checking service, or other specified immigration documents.</P>
                <P>For tenants with time-limited permission to remain in the UK, follow-up checks must be carried out before the permission expires. If a follow-up check reveals that the tenant no longer has the right to rent, the landlord must report the situation to the Home Office.</P>
                <H3>Penalties for non-compliance</H3>
                <P>A landlord who fails to conduct proper Right to Rent checks faces a civil penalty of up to 3,000 pounds per tenant for a first offence and up to 10,000 pounds for a repeat offence. Knowingly renting to someone without the right to rent is a criminal offence carrying an unlimited fine and up to five years imprisonment.</P>

                <H2 id="smoke-co-alarms">Smoke and carbon monoxide alarms</H2>
                <P>The Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022 strengthened the requirements for alarms in rental properties. Landlords must ensure that a smoke alarm is installed on each storey of the property where there is a room used as living accommodation. A carbon monoxide alarm must be installed in any room containing a fixed combustion appliance — this now includes gas boilers and gas fires, not just solid fuel appliances as was previously the case.</P>
                <P>The alarms must be in working order at the start of each new tenancy. While the tenant is responsible for testing alarms during the tenancy, the landlord must check and confirm they are working on the first day of the tenancy. The penalty for non-compliance is a fine of up to 5,000 pounds.</P>

                <H2 id="section-21-prerequisites">Section 21 prerequisites</H2>
                <P>A Section 21 notice — the no-fault eviction notice that allows a landlord to regain possession at the end of a fixed term or during a periodic tenancy — can only be served if the landlord has met a number of prerequisites. Missing any single prerequisite invalidates the notice.</P>
                <H3>The full checklist</H3>
                <ul className="list-disc pl-6 mb-6 font-sans text-[16px] text-text-muted leading-relaxed space-y-2">
                  <li>The deposit must be protected in a government-approved scheme and the prescribed information served.</li>
                  <li>A valid Gas Safety Certificate must have been provided to the tenant.</li>
                  <li>A valid EICR must have been provided to the tenant.</li>
                  <li>A valid EPC must have been provided to the tenant.</li>
                  <li>The How to Rent guide (current version) must have been provided to the tenant at the start of the tenancy.</li>
                  <li>If the property is an HMO requiring a licence, the licence must be in force.</li>
                  <li>No improvement notice or emergency remedial action notice must be outstanding against the property.</li>
                </ul>
                <P>If any of these conditions is not met, the Section 21 notice is invalid and the landlord cannot rely on it to obtain a possession order. Courts regularly strike out possession claims where landlords cannot demonstrate compliance with every prerequisite.</P>

                <H2 id="homes-fitness-standard">Homes (Fitness for Human Habitation) Act 2018</H2>
                <P>The Homes (Fitness for Human Habitation) Act 2018 requires landlords to ensure that their property is fit for human habitation at the start of the tenancy and throughout its duration. The Act gives tenants the right to take their landlord to court if the property is unfit, without needing to go through the local authority first.</P>
                <P>The fitness standard covers 29 hazards assessed under the Housing Health and Safety Rating System (HHSRS), including damp and mould, excess cold, falls on stairs, fire safety, electrical hazards, and crowding and space. If a property is found to be unfit, the court can order the landlord to carry out repairs and award compensation to the tenant.</P>
                <P>For Harrow landlords, damp and mould issues are the most common cause of claims under this Act, particularly in older properties and conversions. Proactive property inspections and prompt maintenance response are the most effective defence against claims.</P>

                <H2 id="annual-compliance-calendar">Annual compliance calendar</H2>
                <P>Keeping track of compliance deadlines across a portfolio can be challenging. A well-structured annual calendar ensures nothing is missed.</P>
                <ul className="list-disc pl-6 mb-6 font-sans text-[16px] text-text-muted leading-relaxed space-y-2">
                  <li><strong>Every 12 months:</strong> Gas Safety Certificate renewal (CP12) — must be completed before the anniversary of the previous check.</li>
                  <li><strong>Every 5 years:</strong> EICR renewal — or sooner if the report recommends an earlier re-inspection date.</li>
                  <li><strong>Every 10 years:</strong> EPC renewal — or sooner if improvements are made that change the energy rating.</li>
                  <li><strong>At each new tenancy:</strong> Smoke and CO alarm check, deposit protection within 30 days, prescribed information served, How to Rent guide provided, Right to Rent check completed.</li>
                  <li><strong>Annually recommended:</strong> Property inspection (quarterly is better practice), fire risk assessment review (HMOs), review of insurance cover, legionella risk assessment review.</li>
                </ul>
                <P>A professional managing agent will track all of these deadlines across your portfolio and ensure that every certificate, inspection, and document is current before it is needed — removing the risk of an inadvertent lapse that could invalidate a Section 21 notice or trigger enforcement action.</P>
                <div className="mt-6 mb-12">
                  <button onClick={() => setModalOpen(true)} className="btn-primary">
                    Find a Compliance-Focused Agent — Free
                  </button>
                </div>

                <H2 id="faqs">Frequently asked questions</H2>
                <div>
                  {faqs.map((faq, i) => (
                    <div key={i} className="faq-item">
                      <button className="faq-q w-full text-left bg-transparent border-0 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        <span className="font-display text-[18px]">{faq.q}</span>
                        <span className="flex-shrink-0 ml-4 font-sans text-[18px]" style={{ color: 'var(--green)' }}>{openFaq === i ? '−' : '+'}</span>
                      </button>
                      {openFaq === i && <p className="faq-a">{faq.a}</p>}
                    </div>
                  ))}
                </div>

              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--green)' }} className="py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">Stay compliant without the headache.</h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              A vetted Harrow property management specialist will handle every compliance obligation for your portfolio — so you never miss a deadline.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>
                Find My Specialist — Free
              </button>
              <Link href="/guides/" className="font-sans text-[14px] font-medium no-underline flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
                View all guides &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
