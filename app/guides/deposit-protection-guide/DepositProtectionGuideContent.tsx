'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'

const TOC = [
  { id: 'what-is-deposit-protection',    label: 'What is deposit protection?' },
  { id: 'government-approved-schemes',   label: 'Government-approved schemes' },
  { id: 'the-30-day-deadline',           label: 'The 30-day deadline' },
  { id: 'prescribed-information',        label: 'Prescribed information' },
  { id: 'custodial-vs-insured',          label: 'Custodial vs insured schemes' },
  { id: 'penalties-for-non-compliance',  label: 'Penalties for non-compliance' },
  { id: 'section-21-restrictions',       label: 'Section 21 restrictions' },
  { id: 'end-of-tenancy-deductions',     label: 'End-of-tenancy deductions' },
  { id: 'dispute-resolution',            label: 'Dispute resolution' },
  { id: 'managing-deposits-professionally', label: 'Managing deposits professionally' },
  { id: 'faqs',                          label: 'FAQs' },
]

export default function DepositProtectionGuideContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const faqs = [
    { q: 'Can I protect a deposit after the 30-day deadline has passed?', a: 'Yes, you can still protect a deposit after the 30-day deadline, and you should do so immediately. However, late protection does not retrospectively cure the breach. Tenants can still bring a claim for compensation of between one and three times the deposit amount for the period during which the deposit was unprotected, and you will be unable to serve a valid Section 21 notice until the deposit is properly protected and prescribed information served.' },
    { q: 'Does deposit protection apply to lodgers?', a: 'No. Deposit protection requirements only apply to assured shorthold tenancies (ASTs). If you take in a lodger who shares your home, the tenancy is a licence rather than an AST, and the deposit protection rules do not apply. However, if a lodger occupies a self-contained part of your property without sharing living accommodation with you, the arrangement may be an AST and deposit protection would then be required.' },
    { q: 'What happens to the deposit if the property is sold?', a: 'If you sell a property with a sitting tenant, the deposit obligation transfers to the new owner. You should transfer the deposit to the new landlord (or ensure it remains in the scheme and the registration details are updated). The new owner must serve fresh prescribed information within 30 days of acquiring the property. Failure to do so exposes the new landlord to the same penalties as if the deposit had never been protected.' },
    { q: 'Can I make deductions for normal wear and tear?', a: 'No. Deductions can only be made for damage beyond fair wear and tear, unpaid rent, breach of tenancy terms, or cleaning costs to restore the property to its condition at the start of the tenancy. Normal wear and tear — such as minor scuff marks on walls, slight carpet wear in high-traffic areas, or faded curtains — cannot be deducted. A detailed inventory with photographs taken at check-in and check-out is essential for supporting any deduction claim.' },
    { q: 'How long does the dispute resolution process take?', a: 'The alternative dispute resolution (ADR) process offered by each scheme typically takes between four and eight weeks from the date both parties submit their evidence. The adjudicator will review the evidence and make a binding decision. There is no oral hearing — the process is entirely paper-based (or online). The decision is final and there is no right of appeal, though either party can pursue the matter through the courts instead of using ADR.' },
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
        description: 'A comprehensive guide to deposit protection for UK landlords covering government-approved schemes, the 30-day deadline, prescribed information, penalties for non-compliance, and end-of-tenancy deductions.',
        datePublished: '2026-01-15',
        dateModified: '2026-04-01',
        author: { '@type': 'Organization', name: 'Property Management Harrow', url: 'https://www.propertymanagementharrow.co.uk' },
        publisher: { '@type': 'Organization', name: 'Property Management Harrow' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertymanagementharrow.co.uk/guides/deposit-protection-guide/' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Deposit Protection Guide" />
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Deposit Protection Guide' }]} />
            <div className="max-w-2xl">
              <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 mb-6" style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                Definitive Guide — Updated April 2026
              </span>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                Deposit Protection Guide for UK Landlords: Rules, Schemes &amp; Penalties
              </h1>
              <p className="font-sans text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Everything landlords need to know about protecting tenancy deposits — government-approved schemes, the 30-day deadline, prescribed information requirements, penalties, and handling end-of-tenancy deductions.
              </p>
              <div className="flex items-center gap-6 font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span>By Property Management Harrow</span>
                <span>&middot;</span>
                <span>Updated: April 2026</span>
                <span>&middot;</span>
                <span>~15 min read</span>
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

                <H2 id="what-is-deposit-protection">What is deposit protection?</H2>
                <P>Deposit protection is a legal requirement that applies to all assured shorthold tenancies (ASTs) in England and Wales. When a landlord or letting agent takes a tenancy deposit, they must protect it in one of three government-approved deposit protection schemes within 30 days of receiving it. The requirement was introduced by the Housing Act 2004 and has been strengthened by subsequent legislation, most notably the Localism Act 2011.</P>
                <P>The purpose of the deposit protection regime is to ensure that tenants&apos; deposits are held securely, that tenants know where their deposit is protected and how to get it back, and that there is an independent dispute resolution mechanism available if landlord and tenant cannot agree on deductions at the end of the tenancy. Before the legislation, disputes over deposits were one of the most common sources of conflict in the private rented sector.</P>
                <P>The rules apply regardless of the size of the deposit. Whether you take a deposit of 200 pounds or the maximum permitted under the Tenant Fees Act 2019 (five weeks&apos; rent for annual rents below 50,000 pounds, or six weeks&apos; rent for annual rents of 50,000 pounds or more), the same protection and information obligations apply.</P>

                <H2 id="government-approved-schemes">Government-approved schemes</H2>
                <P>There are three government-approved tenancy deposit protection schemes operating in England. Each scheme is authorised by the Department for Levelling Up, Housing and Communities (DLUHC) and offers both custodial and insured options (with the exception of the Deposit Protection Service, which operates the only free custodial scheme).</P>
                <H3>Deposit Protection Service (DPS)</H3>
                <P>The DPS operates the government-backed custodial scheme, which is free to use. The landlord or agent transfers the deposit to the DPS, which holds it for the duration of the tenancy. At the end of the tenancy, the deposit is returned according to the agreement of both parties or the outcome of a dispute resolution. The DPS also offers an insured scheme for landlords and agents who prefer to hold the deposit themselves.</P>
                <H3>MyDeposits</H3>
                <P>MyDeposits offers both custodial and insured deposit protection. The insured scheme allows the landlord or agent to hold the deposit in their own account while MyDeposits provides insurance-backed protection. There is an annual fee per deposit for the insured scheme. MyDeposits is widely used by letting agents and managing agents who handle multiple deposits.</P>
                <H3>Tenancy Deposit Scheme (TDS)</H3>
                <P>The TDS also offers custodial and insured options. Like MyDeposits, the insured scheme involves an annual fee and allows the deposit holder to retain the funds. The TDS is particularly popular with large property management firms and has a well-established adjudication process for handling disputes.</P>
                <P>All three schemes are required to provide alternative dispute resolution (ADR) services free of charge to both landlords and tenants. The choice of scheme is at the landlord&apos;s or agent&apos;s discretion — tenants do not choose the scheme, but must be told which scheme holds their deposit.</P>

                <H2 id="the-30-day-deadline">The 30-day deadline</H2>
                <P>The deposit must be protected within 30 days of the landlord or agent receiving it. This is a strict deadline with no exceptions or extensions. The 30-day clock starts from the date the money is received, not from the start of the tenancy. If the tenant pays the deposit two weeks before moving in, the 30-day period begins on the date of payment, not the tenancy start date.</P>
                <P>In addition to protecting the deposit within 30 days, the landlord must also serve the prescribed information on the tenant within the same 30-day period. Protection and information are two separate requirements — protecting the deposit without serving the prescribed information is treated as non-compliance, just as serving the information without actually protecting the deposit would be.</P>
                <H3>What counts as the date of receipt?</H3>
                <P>The date of receipt is the date the landlord or agent actually receives the deposit funds. For a bank transfer, this is the date the funds clear into the account. For a cheque, it is the date the cheque clears. If the deposit is paid in cash, the date of receipt is the date the cash is physically handed over. Landlords should keep clear records of the date of receipt to demonstrate compliance with the 30-day deadline.</P>

                <H2 id="prescribed-information">Prescribed information</H2>
                <P>The prescribed information is a set of specific details that the landlord must provide to the tenant in writing within 30 days of receiving the deposit. The requirements are set out in the Housing (Tenancy Deposits) (Prescribed Information) Order 2007 (as amended) and include the following:</P>
                <ul className="list-disc pl-6 mb-6 font-sans text-[16px] text-text-muted leading-relaxed space-y-2">
                  <li>The name, address, telephone number, and email address of the scheme in which the deposit is protected.</li>
                  <li>The name, address, telephone number, and email address of the landlord or agent.</li>
                  <li>The name, address, telephone number, and email address of the tenant.</li>
                  <li>The address of the rented property.</li>
                  <li>The amount of the deposit paid and protected.</li>
                  <li>Details of the circumstances in which deductions may be made from the deposit.</li>
                  <li>Information about the alternative dispute resolution process offered by the scheme.</li>
                  <li>Confirmation of which scheme is used and its contact details.</li>
                </ul>
                <P>The prescribed information must be signed by both the landlord (or agent) and the tenant, and the tenant must confirm receipt in writing. The landlord should retain a signed copy as evidence of compliance. Failure to serve the prescribed information — even if the deposit itself is protected — constitutes a breach and carries the same penalties as failing to protect the deposit at all.</P>

                <H2 id="custodial-vs-insured">Custodial vs insured schemes</H2>
                <P>The custodial scheme is free. The landlord or agent transfers the deposit to the scheme, which holds the money for the duration of the tenancy. At the end of the tenancy, the scheme releases the deposit according to the instructions of both parties or the outcome of a dispute. The landlord does not earn interest on a deposit held in a custodial scheme.</P>
                <P>The insured scheme allows the landlord or agent to hold the deposit themselves — typically in their own bank account. The scheme provider charges an annual fee per deposit and provides insurance-backed protection. If the landlord fails to return the deposit at the end of the tenancy, the scheme will pay the tenant and pursue the landlord for reimbursement. Many professional letting agents prefer the insured scheme because it allows them to earn interest on deposits held and manage cash flow more efficiently.</P>
                <H3>Which scheme should you choose?</H3>
                <P>For landlords managing a small number of properties, the free custodial DPS scheme is often the simplest option. There are no fees, the scheme handles the money, and the administration is straightforward. For agents or landlords with larger portfolios, the insured schemes offer more flexibility and integration with property management software, but come with annual per-deposit fees that need to be factored into operating costs.</P>

                <H2 id="penalties-for-non-compliance">Penalties for non-compliance</H2>
                <P>The penalties for failing to protect a deposit or serve the prescribed information are severe. Tenants can apply to the county court for an order requiring the landlord to either protect the deposit and serve the prescribed information or return the deposit to the tenant. In either case, the court must also order the landlord to pay compensation of between one and three times the deposit amount.</P>
                <P>The court has no discretion to award less than one times the deposit — the minimum penalty is automatic. The multiple (one, two, or three times) is determined by the court based on the seriousness of the landlord&apos;s non-compliance, whether the failure was deliberate, and the landlord&apos;s conduct in the proceedings. Repeat offenders and landlords who show a pattern of non-compliance can expect to receive the higher multiplier.</P>
                <H3>Financial exposure</H3>
                <P>For a property with a deposit of 1,500 pounds, the compensation payable on a finding of non-compliance is between 1,500 and 4,500 pounds — in addition to returning the deposit itself. Where a landlord has multiple properties with unprotected deposits, the exposure multiplies across every tenancy. A portfolio landlord with ten unprotected deposits of 1,500 pounds each faces potential liability of between 15,000 and 45,000 pounds before legal costs.</P>

                <H2 id="section-21-restrictions">Section 21 restrictions</H2>
                <P>One of the most significant consequences of failing to protect a deposit is the restriction on serving Section 21 notices. A landlord cannot serve a valid Section 21 notice — the no-fault eviction notice used to end an assured shorthold tenancy — at any time when a deposit is not protected in an approved scheme or when the prescribed information has not been served.</P>
                <P>This restriction applies even if the deposit was initially protected and the protection has subsequently lapsed (for example, if the landlord failed to renew insurance cover on an insured scheme). It also applies where the deposit was protected but the prescribed information was never served, or was served incorrectly.</P>
                <P>In practical terms, this means that a landlord who has failed to comply with the deposit protection requirements is unable to recover possession of their property using the Section 21 no-fault ground. The only route to possession is a Section 8 notice, which requires the landlord to prove one or more statutory grounds — such as rent arrears or breach of tenancy terms — and is a longer, more expensive, and less certain process.</P>

                <H2 id="end-of-tenancy-deductions">End-of-tenancy deductions</H2>
                <P>At the end of the tenancy, the landlord may propose deductions from the deposit for specific reasons. Permitted deductions include unpaid rent, damage to the property beyond fair wear and tear, cleaning costs to restore the property to its condition at the start of the tenancy (evidenced by the inventory), replacement of missing items, and costs arising from the tenant&apos;s breach of the tenancy agreement.</P>
                <H3>The importance of the inventory</H3>
                <P>A detailed, dated inventory with photographs is the single most important document for supporting deposit deductions. The inventory should be prepared at the start of the tenancy (check-in) and updated at the end (check-out). It should record the condition of every room, fixture, fitting, and item of furniture, together with meter readings and key numbers. Without an inventory, it is extremely difficult to evidence the condition of the property at the start of the tenancy and therefore extremely difficult to justify deductions for damage.</P>
                <H3>Fair wear and tear</H3>
                <P>Landlords cannot deduct for fair wear and tear. This is the natural deterioration that occurs through normal daily use over the course of a tenancy. Examples include minor scuff marks on paintwork, slight fading of carpets in high-traffic areas, small nail holes from picture hooks, and general wear on kitchen worktops. The longer the tenancy, the greater the allowance for fair wear and tear. A carpet that shows wear after five years of occupation is expected; the same carpet showing significant staining after six months is not.</P>
                <P>The distinction between damage and wear and tear is one of the most common sources of dispute. Professional inventory clerks and check-out reports provide independent evidence that can help resolve disagreements and strengthen a landlord&apos;s position in any adjudication.</P>

                <H2 id="dispute-resolution">Dispute resolution</H2>
                <P>If the landlord and tenant cannot agree on how the deposit should be divided at the end of the tenancy, either party can refer the dispute to the alternative dispute resolution (ADR) service provided by the scheme that holds the deposit. ADR is free and both parties must consent to using it — if either party declines, the dispute must be resolved through the courts.</P>
                <P>The ADR process is paper-based (or online). Both parties submit their evidence — including the tenancy agreement, inventory, check-in and check-out reports, photographs, receipts for repairs, and any correspondence — and an independent adjudicator reviews the evidence and makes a binding decision. The adjudicator will consider whether each proposed deduction is reasonable, supported by evidence, and consistent with the tenancy agreement.</P>
                <P>The burden of proof lies with the landlord. If the landlord claims a deduction, they must provide evidence to support it. If the evidence is insufficient, the adjudicator will find in the tenant&apos;s favour on that item. This is why thorough documentation — inventories, photographs, and schedules of condition — is so critical.</P>

                <H2 id="managing-deposits-professionally">Managing deposits professionally</H2>
                <P>For landlords with one or more rental properties, deposit protection compliance is a non-negotiable part of property management. The consequences of non-compliance — financial penalties, inability to serve Section 21 notices, and reputational damage — far outweigh the minimal effort required to comply.</P>
                <P>A professional managing agent will handle the entire deposit protection process: registering the deposit with the chosen scheme within the 30-day deadline, serving and obtaining signatures on the prescribed information, maintaining records, handling end-of-tenancy negotiations, and managing any dispute resolution proceedings. For portfolio landlords, this removes a significant administrative burden and eliminates the risk of inadvertent non-compliance.</P>
                <P>In Harrow, where the private rented sector is large and diverse, deposit disputes are among the most common issues raised by tenants with the council&apos;s housing team. Landlords who manage their own deposits without professional support are disproportionately represented in complaint statistics. Engaging a specialist property management company is the most effective way to ensure compliance and protect your investment.</P>
                <div className="mt-6 mb-12">
                  <button onClick={() => setModalOpen(true)} className="btn-primary">
                    Find a Deposit Management Specialist — Free
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
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">Need help with deposit protection?</h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Our vetted property management specialists handle deposit registration, prescribed information, and end-of-tenancy disputes — so you stay compliant and protected.
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
