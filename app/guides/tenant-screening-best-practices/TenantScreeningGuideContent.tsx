'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'

const TOC = [
  { id: 'why-screening-matters',       label: 'Why tenant screening matters' },
  { id: 'the-referencing-process',     label: 'The referencing process' },
  { id: 'credit-checks',              label: 'Credit checks' },
  { id: 'employer-verification',       label: 'Employer verification' },
  { id: 'previous-landlord-references', label: 'Previous landlord references' },
  { id: 'right-to-rent-screening',    label: 'Right to Rent screening' },
  { id: 'affordability-assessment',    label: 'Affordability assessment' },
  { id: 'guarantors',                 label: 'When to require a guarantor' },
  { id: 'red-flags',                  label: 'Red flags to watch for' },
  { id: 'discrimination-law',         label: 'Discrimination and the law' },
  { id: 'faqs',                       label: 'FAQs' },
]

export default function TenantScreeningGuideContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const faqs = [
    { q: 'Can I reject a tenant based on their credit score alone?', a: 'You can use a poor credit score as a factor in your decision, but it should not be the sole reason for rejection without further context. Some tenants with low credit scores have excellent rental track records — a county court judgment from years ago may not reflect current financial behaviour. Best practice is to consider the credit check alongside employer verification, previous landlord references, and an affordability assessment to form a rounded view.' },
    { q: 'How long does professional tenant referencing take?', a: 'Most professional referencing agencies complete the process within 24 to 48 hours, provided the applicant supplies all required information promptly. Delays typically arise when previous landlords or employers are slow to respond to reference requests. Some agencies offer expedited services that can return results within a few hours for an additional fee.' },
    { q: 'Can I charge tenants for referencing?', a: 'No. The Tenant Fees Act 2019 prohibits landlords and agents in England from charging tenants for referencing checks, credit searches, or any other fees associated with the application process. The only permitted payments are rent, a capped security deposit (maximum five weeks\' rent), a capped holding deposit (maximum one week\'s rent), and payments for specific contractual defaults.' },
    { q: 'Should I reference all occupants or just the lead tenant?', a: 'Best practice is to reference all adult occupants who will be named on the tenancy agreement and who will be contributing to the rent. At minimum, you should reference the tenant or tenants who are contractually liable for the rent. Right to Rent checks must be conducted on all adult occupants regardless of whether they are named on the tenancy.' },
    { q: 'What should I do if a reference comes back with mixed results?', a: 'A mixed reference — for example, a good employer reference but a cautious previous landlord reference — requires professional judgment. Consider requesting additional information, asking the applicant to provide a guarantor, or requesting bank statements to verify payment history. A managing agent with experience in tenant placement can help you weigh the risks and make an informed decision.' },
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
        headline: 'Tenant Screening Best Practices for UK Landlords',
        description: 'Expert guide to tenant screening for UK landlords covering credit checks, employer verification, previous landlord references, Right to Rent, affordability assessments, and red flags.',
        datePublished: '2026-02-01',
        dateModified: '2026-04-01',
        author: { '@type': 'Organization', name: 'Property Management Harrow', url: 'https://www.propertymanagementharrow.co.uk' },
        publisher: { '@type': 'Organization', name: 'Property Management Harrow' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertymanagementharrow.co.uk/guides/tenant-screening-best-practices/' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Tenant Screening Guide" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Tenant Screening Best Practices' }]} />
            <div className="max-w-2xl">
              <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 mb-6" style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                Definitive Guide — Updated April 2026
              </span>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                Tenant Screening Best Practices for UK Landlords
              </h1>
              <p className="font-sans text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                How to find reliable tenants, avoid problem lettings, and stay compliant with UK referencing, discrimination, and Right to Rent law.
              </p>
              <div className="flex items-center gap-6 font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span>By Property Management Harrow</span>
                <span>&middot;</span>
                <span>Updated: April 2026</span>
                <span>&middot;</span>
                <span>~16 min read</span>
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

                <H2 id="why-screening-matters">Why tenant screening matters</H2>
                <P>The quality of your tenant is the single most important factor in determining whether a rental property generates reliable income or becomes a source of stress, cost, and legal disputes. A thorough screening process protects your property, your rental income, and your time — while a rushed or superficial process creates exposure to rent arrears, property damage, and lengthy eviction proceedings.</P>
                <P>In England, the eviction process — even when the landlord has grounds — can take six to twelve months through the courts. During this period, a non-paying tenant can accumulate thousands of pounds in rent arrears while the landlord continues to bear mortgage, insurance, and maintenance costs. The cost of one bad tenant placement can easily exceed the entire annual management fee for the property.</P>
                <P>Professional tenant screening is not about excluding people — it is about making an informed, evidence-based decision on whether the applicant can afford the rent, has a track record of meeting their obligations, and is legally entitled to rent property in the UK. Conducted properly, it protects both the landlord and the tenant by ensuring the tenancy is sustainable from the outset.</P>

                <H2 id="the-referencing-process">The referencing process</H2>
                <P>A comprehensive referencing process has five core components: a credit check, employer verification, a previous landlord reference, a Right to Rent check, and an affordability assessment. Each component addresses a different aspect of the applicant&apos;s suitability, and all five should be completed before a tenancy offer is confirmed.</P>
                <P>Most professional referencing is now handled by specialist agencies such as HomeLet, Goodlord, or OpenRent&apos;s built-in referencing service. These agencies pull data from credit reference agencies, contact employers and previous landlords on the agent&apos;s behalf, and produce a structured report with a recommendation. The cost of professional referencing is borne by the landlord or agent — it cannot be passed to the tenant under the Tenant Fees Act 2019.</P>
                <H3>Setting expectations with applicants</H3>
                <P>Before beginning the referencing process, make clear to the applicant what information will be required, how long the process typically takes, and that the tenancy is conditional on satisfactory references. Requesting a holding deposit (capped at one week&apos;s rent) demonstrates the applicant&apos;s commitment and protects the landlord from time wasting. The holding deposit must be returned or offset against the first month&apos;s rent within 15 days of the tenancy starting, or within 7 days if the landlord decides not to proceed.</P>

                <H2 id="credit-checks">Credit checks</H2>
                <P>A credit check retrieves the applicant&apos;s financial history from one or more of the UK&apos;s three main credit reference agencies: Experian, Equifax, and TransUnion. The report shows county court judgments (CCJs), individual voluntary arrangements (IVAs), bankruptcy, and the applicant&apos;s payment history on credit commitments such as mortgages, loans, and credit cards.</P>
                <P>A clean credit history is a positive indicator but is not the whole picture. Some applicants — particularly younger tenants or those who have recently moved to the UK — may have a thin credit file with limited history, which does not necessarily indicate risk. Conversely, an applicant with a strong credit score may have financial commitments that leave insufficient disposable income to cover the rent reliably.</P>
                <H3>What to look for</H3>
                <ul className="list-disc pl-6 mb-6 font-sans text-[16px] text-text-muted leading-relaxed space-y-2">
                  <li><strong>CCJs:</strong> A county court judgment within the last six years indicates a debt dispute that was resolved through the courts. Recent or multiple CCJs are a significant risk factor.</li>
                  <li><strong>IVAs and bankruptcy:</strong> These indicate a formal insolvency arrangement. An active IVA means the applicant is making repayments on existing debts, which reduces their disposable income.</li>
                  <li><strong>Missed payments:</strong> A pattern of late or missed payments on existing credit commitments suggests cash flow difficulties that may extend to rent payments.</li>
                  <li><strong>Electoral roll registration:</strong> Registration at the stated address helps verify identity and is a positive indicator of stability.</li>
                </ul>

                <H2 id="employer-verification">Employer verification</H2>
                <P>Employer verification confirms that the applicant is employed where they claim to be, earning the salary they have stated, and that their employment is permanent or on a contract of sufficient length to cover the tenancy term. The reference should be obtained directly from the employer&apos;s HR department or payroll team — not from a personal email address or a colleague.</P>
                <P>For employed applicants, request confirmation of the start date, job title, salary (gross and net), and whether the employment is permanent, fixed-term, or subject to a probationary period. For self-employed applicants, request the last two to three years&apos; SA302 tax calculations and corresponding tax year overviews from HMRC, or certified accounts from an accountant.</P>
                <H3>Verifying self-employed income</H3>
                <P>Self-employed applicants present additional challenges because their income can fluctuate. In addition to HMRC documentation, request three to six months of business bank statements showing regular income. Where the applicant&apos;s income is variable, base the affordability assessment on the lower end of the range rather than the most recent or highest month. Requiring a guarantor for self-employed applicants is common practice, particularly where the income history is short.</P>

                <H2 id="previous-landlord-references">Previous landlord references</H2>
                <P>A reference from the applicant&apos;s current or most recent landlord provides direct evidence of their behaviour as a tenant. The reference should confirm the dates of the tenancy, whether rent was paid on time and in full, whether the property was maintained in good condition, and whether there were any complaints, disputes, or breaches of the tenancy agreement.</P>
                <P>The most reliable references come from professional managing agents, who maintain records and provide factual, structured responses. References from private landlords should be verified independently — for example, by checking that the named landlord matches the Land Registry record for the property. This guards against fabricated references provided by friends or associates posing as the previous landlord.</P>
                <H3>Questions to ask the previous landlord</H3>
                <ul className="list-disc pl-6 mb-6 font-sans text-[16px] text-text-muted leading-relaxed space-y-2">
                  <li>Was rent paid on time throughout the tenancy?</li>
                  <li>Were there any rent arrears at any point during the tenancy?</li>
                  <li>Was the property returned in a condition consistent with fair wear and tear?</li>
                  <li>Were there any complaints from neighbours?</li>
                  <li>Would you rent to this tenant again?</li>
                </ul>

                <H2 id="right-to-rent-screening">Right to Rent screening</H2>
                <P>Under the Immigration Act 2014, landlords in England must check that all prospective adult occupants have the right to rent before granting a tenancy. This is a legal obligation that applies to every letting — not just cases where the landlord has reason to question the tenant&apos;s immigration status. The check must be applied consistently to all applicants to avoid allegations of discrimination.</P>
                <P>The check involves obtaining original identity documents from the applicant, verifying them in the presence of the document holder, taking clear copies of all documents, and recording the date of the check. Acceptable documents are listed in the Home Office&apos;s Right to Rent document checks guidance and include passports, biometric residence permits, and share codes obtained from the Home Office online service.</P>
                <P>For applicants with time-limited permission to remain in the UK, a follow-up check must be conducted before the permission expires. Landlords who conduct the check correctly and retain the required records have a statutory excuse against liability if the tenant&apos;s immigration status later changes.</P>

                <H2 id="affordability-assessment">Affordability assessment</H2>
                <P>The affordability assessment determines whether the applicant&apos;s income is sufficient to cover the rent alongside their other financial commitments. The industry standard benchmark is that rent should not exceed 30 to 35 percent of the tenant&apos;s gross income, or 40 to 45 percent of net income. Some agents and referencing agencies apply a stricter threshold of 2.5 times the monthly rent as a minimum monthly net income requirement.</P>
                <P>The assessment should take into account all sources of income — employment, self-employment, pension, investment income, and any housing benefit or Universal Credit housing element that the applicant receives. Where housing benefit forms a significant portion of the rent, confirm the entitlement directly with the relevant local authority or through the applicant&apos;s Universal Credit journal.</P>
                <H3>Joint tenancies</H3>
                <P>For joint tenancies, the affordability assessment should consider both tenants&apos; combined income. However, it is good practice to assess whether either tenant could sustain the rent independently if the other were to leave — since joint and several liability means each tenant is legally responsible for the full rent, but in practice a departing co-tenant can leave the remaining occupant struggling to pay.</P>

                <H2 id="guarantors">When to require a guarantor</H2>
                <P>A guarantor provides an additional layer of financial security by agreeing to cover the tenant&apos;s obligations if the tenant defaults. Guarantors are commonly required for applicants who do not meet the standard affordability threshold, have a limited credit history, are students, are self-employed with variable income, or have adverse credit markers.</P>
                <P>The guarantor must be referenced to the same standard as the tenant, including a credit check, income verification, and identity confirmation. The guarantor should typically earn at least three times the annual rent and own property in the UK. The guarantee agreement must be a separate legal document, clearly setting out the guarantor&apos;s obligations, and must be signed before the tenancy commences.</P>
                <P>It is important to note that a guarantor&apos;s liability may be affected by changes to the tenancy — such as a rent increase or extension — that the guarantor has not consented to. The guarantee agreement should address this by including a clause covering variations to the tenancy terms.</P>

                <H2 id="red-flags">Red flags to watch for</H2>
                <P>While no single factor should automatically disqualify an applicant, there are patterns and behaviours that experienced agents recognise as warning signs. Awareness of these red flags allows landlords to ask the right questions and make better-informed decisions.</P>
                <ul className="list-disc pl-6 mb-6 font-sans text-[16px] text-text-muted leading-relaxed space-y-2">
                  <li><strong>Pressure to move in immediately:</strong> Applicants who push for same-day move-in or try to bypass referencing may have been evicted from their previous property or be fleeing a dispute.</li>
                  <li><strong>Cash-only offers:</strong> An offer to pay several months&apos; rent upfront in cash, while superficially attractive, can indicate money laundering or an attempt to avoid the referencing process.</li>
                  <li><strong>Inconsistent information:</strong> Discrepancies between the application form, verbal statements, and reference results should be explored. A stated salary that does not match the employer&apos;s confirmation is a serious concern.</li>
                  <li><strong>Reluctance to provide references:</strong> A legitimate applicant with a clean rental history should be willing to provide references. Resistance or excuses may indicate that previous tenancies ended badly.</li>
                  <li><strong>Frequent moves:</strong> A history of short tenancies (less than six months each) can indicate instability, though there may be legitimate explanations such as contract work or relocation.</li>
                  <li><strong>Unverifiable previous landlord:</strong> If the previous landlord cannot be verified through the Land Registry or other independent means, treat the reference with caution.</li>
                </ul>

                <H2 id="discrimination-law">Discrimination and the law</H2>
                <P>The Equality Act 2010 prohibits discrimination in the letting of residential property on the grounds of age, disability, gender reassignment, marriage or civil partnership, pregnancy and maternity, race, religion or belief, sex, or sexual orientation. A landlord or agent who refuses to let to an applicant because of any protected characteristic commits an unlawful act of discrimination.</P>
                <P>Screening criteria must be applied consistently and objectively to all applicants. Financial criteria (income thresholds, credit checks) are lawful provided they are applied equally. However, blanket policies that disproportionately disadvantage a protected group — such as a policy of refusing all applicants on housing benefit — have been challenged in the courts and may constitute indirect discrimination.</P>
                <P>Best practice is to assess each application on its individual merits, using objective criteria, and to document the reasons for any decision to decline an application. This documentation provides evidence of a fair process if a discrimination claim is made.</P>
                <div className="mt-6 mb-12">
                  <button onClick={() => setModalOpen(true)} className="btn-primary">
                    Find a Tenant Screening Specialist — Free
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
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">Let a specialist find the right tenants for you.</h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Our vetted Harrow agents handle referencing, Right to Rent checks, and affordability assessments — placing reliable tenants who pay on time.
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
