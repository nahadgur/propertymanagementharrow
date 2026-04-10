'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'

const TOC = [
  { id: 'when-to-switch',              label: 'When to switch managers' },
  { id: 'reviewing-your-agreement',    label: 'Reviewing your agreement' },
  { id: 'finding-your-new-agent',      label: 'Finding your new agent first' },
  { id: 'serving-notice',              label: 'Serving notice' },
  { id: 'the-handover-checklist',      label: 'The handover checklist' },
  { id: 'tenant-communication',        label: 'Tenant communication' },
  { id: 'deposit-transfer',            label: 'Deposit transfer' },
  { id: 'common-mistakes',             label: 'Common mistakes to avoid' },
  { id: 'faqs',                        label: 'FAQs' },
]

export default function SwitchingManagersGuideContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const faqs = [
    { q: 'How long does it take to switch property managers?', a: 'Most management agreements require between one and three months written notice. The actual handover of files, keys, and tenant communication typically takes two to four weeks after the notice period ends. If you instruct your new agent before serving notice, the transition can begin immediately once the notice period expires.' },
    { q: 'Will my tenants be disrupted during the switch?', a: 'A professionally managed handover should be virtually invisible to tenants. They receive a formal written notification of the change, updated contact details for maintenance and rent queries, and confirmation that their tenancy terms remain unchanged. The only difference they should notice is an improvement in service quality.' },
    { q: 'Can I switch managers during a fixed-term tenancy?', a: 'Yes. Your management agreement with your agent is a separate contract from your tenancy agreement with your tenant. Changing managing agent does not affect the tenancy in any way. The tenancy continues on the same terms with the same landlord — only the managing agent changes.' },
    { q: 'What if my current agent refuses to hand over documents?', a: 'Your agent is legally obliged to return your property documents, keys, and any client money held on your behalf. If they refuse, you can complain to their professional body (ARLA Propertymark, RICS) and to the Property Redress Scheme. In extreme cases, you can seek a court order for the return of your property and documents.' },
    { q: 'Do I have to pay an exit fee to my current agent?', a: 'Check your management agreement carefully. Some agreements include early termination fees or charges for ending during a minimum contract period. Others charge for specific handover activities. Legitimate handover costs exist, but excessive exit fees may be challengeable — particularly if the agent has been underperforming. Your new agent can advise on whether any proposed exit fee is reasonable.' },
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
        headline: 'How to Switch Property Managers Without Disrupting Your Tenants',
        description: 'Step-by-step guide to switching property managers — reviewing agreements, serving notice, the handover process, tenant communication, and what to transfer.',
        datePublished: '2026-03-01',
        dateModified: '2026-04-01',
        author: { '@type': 'Organization', name: 'Property Management Harrow', url: 'https://www.propertymanagementharrow.co.uk' },
        publisher: { '@type': 'Organization', name: 'Property Management Harrow' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertymanagementharrow.co.uk/guides/switching-property-managers/' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Switching Managers Guide" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="relative z-10">
            <div className="site-container">
              <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Switching Property Managers' }]} />
              <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Landlord Guide</p>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight max-w-3xl">
                How to Switch Property Managers Without Disrupting Your Tenants
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                A practical guide to changing your managing agent — reviewing your agreement, serving notice, managing the handover, and ensuring continuity for your tenants.
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

                <H2 id="when-to-switch">When to switch property managers</H2>
                <P>Many landlords tolerate poor management for longer than they should because they assume switching will be complicated or disruptive. In practice, a managed transition between professional agents is straightforward and rarely noticed by tenants.</P>
                <P>Common signs that it is time to change include: persistent communication failures — calls and emails going unanswered for days; maintenance issues left unresolved for weeks; compliance deadlines missed or forgotten; unexplained charges on statements; high tenant turnover that your agent cannot explain; and the general sense that your property is not being actively managed.</P>
                <P>The cost of staying with a poor agent is almost always higher than the cost of switching. A single void month caused by slow re-letting costs more than a full year of management fees. A missed gas safety certificate creates legal liability that no fee saving can justify.</P>

                <H2 id="reviewing-your-agreement">Reviewing your agreement</H2>
                <P>Before doing anything else, read your current management agreement in full. Look specifically for:</P>
                <ul className="list-disc pl-6 mb-6 font-sans text-[15px] text-text-muted leading-relaxed space-y-2">
                  <li>The notice period required — typically one to three months in writing</li>
                  <li>Any minimum contract term or fixed period that has not yet expired</li>
                  <li>Early termination fees or penalties for leaving before the minimum term</li>
                  <li>Whether notice must be given in a specific format (letter, email, recorded delivery)</li>
                  <li>Any tie-in clauses relating to tenants the agent placed — some agreements claim a percentage of rent for the remainder of any tenancy they arranged</li>
                </ul>
                <P>Tie-in clauses that extend beyond a reasonable period may be challengeable, but it is better to understand them before serving notice rather than discovering them afterwards.</P>

                <H2 id="finding-your-new-agent">Finding your new agent first</H2>
                <P>Always instruct your new managing agent before serving notice on the old one. This ensures there is no gap in management, and your new agent can plan the transition properly. They will advise on the handover timeline, coordinate document transfer, and take responsibility for tenant communication from day one of their instruction.</P>
                <P>When selecting your new agent, ask specifically about their handover process. A professional agent will have a documented transition procedure and will manage the entire process on your behalf, including chasing the outgoing agent for documents if necessary.</P>

                <H2 id="serving-notice">Serving notice</H2>
                <P>Serve notice in writing — email is sufficient in most cases, but check your agreement for specific requirements. State the termination date clearly, referencing the notice period in your agreement. Keep the tone professional and factual. There is no need to explain your reasons unless you want to.</P>
                <P>Send the notice by a method that provides proof of delivery. If your agreement requires written notice by post, send it by recorded delivery. If email is acceptable, request a read receipt or follow up with a confirmation request.</P>

                <H2 id="the-handover-checklist">The handover checklist</H2>
                <P>Your outgoing agent is obliged to provide the following to your new agent within a reasonable timeframe:</P>
                <ul className="list-disc pl-6 mb-6 font-sans text-[15px] text-text-muted leading-relaxed space-y-2">
                  <li>All tenancy agreements and any deeds of variation</li>
                  <li>Deposit protection certificates and prescribed information records</li>
                  <li>Current Gas Safety Records</li>
                  <li>EICR certificates</li>
                  <li>Energy Performance Certificates</li>
                  <li>Inventory and check-in reports for each tenancy</li>
                  <li>Maintenance history and any outstanding repair issues</li>
                  <li>Rent payment history and any arrears records</li>
                  <li>Tenant contact details and emergency contacts</li>
                  <li>Service charge accounts and records (for leasehold properties)</li>
                  <li>All keys — property keys, communal keys, meter cupboard keys</li>
                  <li>Any client money held on your behalf — rent collected, deposit funds (if using an insurance-based scheme)</li>
                </ul>
                <P>Your new agent should provide you with a handover completion checklist confirming receipt of each item. Any gaps should be flagged immediately with the outgoing agent.</P>

                <H2 id="tenant-communication">Tenant communication</H2>
                <P>Tenants should receive a formal written notification of the change of managing agent. This should include the new agent&apos;s contact details for maintenance reporting, rent payment instructions if these are changing, and confirmation that the tenancy terms remain exactly the same.</P>
                <P>The best transitions are those where tenants notice the improvement in service rather than the change itself. A professional new agent will introduce themselves directly to each tenant, confirm existing arrangements, and establish clear communication channels from the outset.</P>

                <H2 id="deposit-transfer">Deposit transfer</H2>
                <P>If your outgoing agent held the deposit in an insurance-based scheme, the deposit protection must be transferred to your new agent&apos;s scheme. This must be done without any gap in protection. Your new agent should manage this process, ensuring the deposit is re-protected and new prescribed information is served on the tenant within 30 days.</P>
                <P>If the deposit was held in the custodial DPS scheme, it remains protected regardless of the change of agent. However, the scheme records should be updated to reflect the new managing agent&apos;s details.</P>

                <H2 id="common-mistakes">Common mistakes to avoid</H2>
                <P>The most common mistake is giving notice before instructing a new agent, creating a management gap during which compliance deadlines can be missed, maintenance goes uncoordinated, and rent collection lapses.</P>
                <P>The second most common mistake is not checking for tie-in clauses before serving notice. Some agreements contain provisions that require the landlord to pay the outgoing agent a percentage of rent for the duration of any tenancy they arranged — even after the management agreement has ended. These clauses vary in enforceability, but it is better to know about them in advance.</P>
                <P>Finally, do not assume the outgoing agent will cooperate promptly with the handover. Build a reasonable timeline into your plan, and ensure your new agent is prepared to chase for documents if necessary. Most handovers complete smoothly, but having a contingency plan avoids delays.</P>

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
                    <p className="font-sans text-[14px] font-semibold text-text mb-2">Ready to switch?</p>
                    <p className="font-sans text-[13px] text-text-muted mb-4">We match Harrow landlords with vetted property managers who handle the full handover for you.</p>
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
            <h2 className="font-display text-[1.8rem] md:text-h2 text-white mb-4">Ready to find a better property manager?</h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Get matched with a vetted Harrow property management specialist — free, within 24 hours. They will handle the full transition.
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
