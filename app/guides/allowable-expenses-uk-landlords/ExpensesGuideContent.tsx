'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'

const TOC = [
  { id: 'revenue-vs-capital',       label: 'Revenue vs capital expenses' },
  { id: 'fully-allowable',          label: 'Fully allowable revenue expenses' },
  { id: 'finance-costs',            label: 'Finance costs (Section 24)' },
  { id: 'repairs-vs-improvements',  label: 'Repairs vs improvements' },
  { id: 'replacement-furniture',    label: 'Replacement furniture relief' },
  { id: 'home-office-mileage',      label: 'Home office and mileage' },
  { id: 'pre-letting-expenses',     label: 'Pre-letting expenses' },
  { id: 'capital-expenses',         label: 'Capital expenses and CGT' },
  { id: 'what-you-cannot-claim',    label: 'What you cannot claim' },
  { id: 'record-keeping',           label: 'Record keeping' },
  { id: 'faqs',                     label: 'FAQs' },
]

const allowableExpenses = [
  { category: 'Letting agent fees', detail: 'Management fees, tenant find fees, renewal fees, check-in and check-out fees. All fully deductible as revenue expenses.', hmrc: 'PIM2090' },
  { category: 'Mortgage interest (restricted)', detail: 'Subject to Section 24 — only a 20% tax credit applies for higher-rate taxpayers, not full deduction. The full interest figure is still reported and the credit applied.', hmrc: 'PIM2052' },
  { category: 'Buildings and contents insurance', detail: 'Landlord\'s insurance premiums for the rental property, including buildings, contents, and liability cover.', hmrc: 'PIM2030' },
  { category: 'Repairs and maintenance', detail: 'Routine repairs that restore the property to its original condition — not improvements. Includes plumbing repairs, repainting, replacing broken tiles, fixing appliances.', hmrc: 'PIM2020' },
  { category: 'Utilities (if paid by landlord)', detail: 'Gas, electricity, water, and council tax paid by the landlord during void periods or where included in the rent.', hmrc: 'PIM2010' },
  { category: 'Council tax (void periods)', detail: 'Council tax paid by the landlord during periods when the property is unoccupied between tenancies.', hmrc: 'PIM2010' },
  { category: 'Ground rent and service charges', detail: 'Ground rent on leasehold properties and service charges for communal areas and facilities.', hmrc: 'PIM2030' },
  { category: 'Accountancy and professional fees', detail: 'Accountant fees for preparing rental accounts and tax returns. Legal fees related to tenancy disputes or debt collection (not property purchase or sale).', hmrc: 'PIM2100' },
  { category: 'Advertising and marketing', detail: 'Costs of advertising the property for let — online listing fees, photography, signage.', hmrc: 'PIM2090' },
  { category: 'Travel to the property', detail: 'Mileage or travel costs for inspections, dealing with repairs, or collecting rent — if genuine and documented. HMRC scrutinises excessive travel claims.', hmrc: 'PIM2210' },
  { category: 'Replacement furniture relief', detail: 'The cost of replacing domestic items in furnished lets — sofas, beds, white goods — where the replacement is like-for-like. The initial purchase is not deductible.', hmrc: 'PIM3210' },
  { category: 'Cleaning costs', detail: 'End-of-tenancy cleaning, periodic cleaning of communal areas, and window cleaning.', hmrc: 'PIM2010' },
  { category: 'Gardening and grounds maintenance', detail: 'Ongoing gardening costs included in the tenancy arrangement, or required to maintain the property between lets.', hmrc: 'PIM2010' },
  { category: 'Property management software', detail: 'Subscriptions to property management platforms used exclusively for the rental business.', hmrc: 'PIM2100' },
]

const faqs = [
  {
    q: 'Can I claim the cost of a new boiler as an allowable expense?',
    a: 'It depends on whether the boiler is a like-for-like replacement or an improvement. Replacing a faulty boiler with a similar boiler is a repair — fully deductible as a revenue expense under HMRC\'s Property Income Manual PIM2020. Installing a boiler for the first time, or replacing a basic system with a significantly more advanced one, may be treated as a capital improvement — deductible only against CGT on disposal, not against rental income.',
  },
  {
    q: 'Is a new kitchen allowable as a repair or a capital expense?',
    a: 'HMRC draws a distinction between replacing a worn-out kitchen with a modern equivalent (a repair, fully deductible) and fitting a substantially enhanced kitchen that goes beyond restoring the property to its original standard (a capital improvement, deductible against CGT). The test is whether the work restores or improves. A specialist reviews the specific work and advises on the correct treatment before the tax return is prepared.',
  },
  {
    q: 'Can I claim mileage for driving to view a property I am considering buying?',
    a: 'No. Pre-acquisition expenses — including travel to view potential investment properties — are not allowable against rental income. They may be allowable costs that are added to the CGT base cost on disposal, but they cannot be deducted from rental profits.',
  },
  {
    q: 'Can I claim a home office allowance against my rental income?',
    a: 'HMRC allows a deduction for the portion of home costs attributable to managing your rental portfolio, where a part of the home is used exclusively and regularly for that purpose. In practice, HMRC scrutinises home office claims by landlords carefully. The claim must be proportionate — based on the number of rooms used and the time spent — and must relate to the actual management of the rental business, not general personal administration.',
  },
  {
    q: 'Are pre-letting expenses allowable?',
    a: 'Expenses incurred before the first letting may be deductible where they are of the same type as expenses that would be allowable during the letting period, and where they were incurred within a reasonable period before the letting began. HMRC\'s Property Income Manual at PIM2505 covers this. Costs such as initial advertising, professional fees for tenancy preparation, and certain repairs before a first let may qualify. Costs incurred while the property was a private residence do not qualify.',
  },
  {
    q: 'Can I claim the cost of replacing furniture in an unfurnished let?',
    a: 'No. Replacement Furniture Relief applies only to furnished residential lets — where domestic items are provided as part of the tenancy. An unfurnished property that provides only white goods (cooker, fridge) may still claim on those items under the relief. The relief covers like-for-like replacement only — the initial purchase of furniture when the property is first let is not deductible.',
  },
]

export default function ExpensesGuideContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Ultimate List of Allowable Expenses for UK Landlords (2025/26)',
    description: 'A comprehensive guide to allowable expenses for UK landlords — revenue vs capital, the definitive list, Section 24, replacement furniture relief, and what HMRC will not accept.',
    datePublished: '2025-02-01',
    dateModified: '2026-01-15',
    author: { '@type': 'Organization', name: 'Property Accountants Harrow', url: 'https://www.propertyaccountantsharrow.co.uk' },
    publisher: { '@type': 'Organization', name: 'Property Accountants Harrow' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertyaccountantsharrow.co.uk/guides/allowable-expenses-uk-landlords/' },
    citation: [
      { '@type': 'WebPage', name: 'HMRC Property Income Manual', url: 'https://www.gov.uk/hmrc-internal-manuals/property-income-manual' },
      { '@type': 'WebPage', name: 'HMRC PIM2020: Repairs', url: 'https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2020' },
      { '@type': 'WebPage', name: 'HMRC PIM3210: Replacement Furniture Relief', url: 'https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim3210' },
    ],
  }

  const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <h2 id={id} className="font-display text-[2rem] md:text-h2 text-text mb-5 leading-tight scroll-mt-24">{children}</h2>
  )
  const P = ({ children }: { children: React.ReactNode }) => (
    <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-5">{children}</p>
  )
  const H3 = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-display text-[21px] text-text mb-3 mt-8 leading-snug">{children}</h3>
  )
  const Cite = ({ url, label }: { url: string; label: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-sans text-[11px] text-brand font-medium border border-brand/20 px-2 py-0.5 rounded-sm hover:bg-brand/5 transition-colors no-underline ml-1">
      ↗ {label}
    </a>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Allowable Expenses Guide" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/property-maintenance-coordination.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Allowable Expenses' }]} />
            <div className="max-w-2xl">
              <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 mb-6"
                style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                High-Volume Reference Guide — Updated January 2026
              </span>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                The Ultimate List of Allowable Expenses for UK Landlords (2025/26)
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                The definitive guide to what landlords can and cannot claim against their rental income — with the critical distinction between revenue and capital expenses, and citations to HMRC&apos;s Property Income Manual.
              </p>
              <div className="flex items-center gap-6 font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span>Property Accountants Harrow</span><span>&middot;</span>
                <span>Updated: January 2026</span><span>&middot;</span>
                <span>~20 min read</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16 items-start">

              {/* ToC */}
              <div className="sticky top-24 hidden lg:block">
                <p className="eyebrow mb-4">Contents</p>
                <nav className="flex flex-col gap-0">
                  {TOC.map((item, i) => (
                    <a key={item.id} href={`#${item.id}`}
                      className="flex items-start gap-3 py-3 border-b border-[#f0eee8] no-underline hover:text-brand group font-sans text-[13px] text-text-muted">
                      <span className="flex-shrink-0 font-display text-[11px] mt-0.5" style={{ color: 'var(--green-mid)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="group-hover:text-brand transition-colors">{item.label}</span>
                    </a>
                  ))}
                </nav>
                <button onClick={() => setModalOpen(true)} className="btn-primary w-full mt-8 text-[12px] py-3">
                  Get a Tax Review — Free
                </button>
                <div className="mt-6 p-4 border border-[#e8f0e8]" style={{ background: 'var(--green-soft)' }}>
                  <p className="eyebrow mb-3 text-[9px]">HMRC References</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: 'Property Income Manual', url: 'https://www.gov.uk/hmrc-internal-manuals/property-income-manual' },
                      { label: 'PIM2010: Expenses overview', url: 'https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2010' },
                      { label: 'PIM2020: Repairs', url: 'https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2020' },
                      { label: 'PIM3210: Replacement furniture', url: 'https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim3210' },
                    ].map(s => (
                      <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
                        className="font-sans text-[11px] text-brand no-underline hover:underline flex items-center gap-1">
                        ↗ {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Article */}
              <article className="max-w-2xl">

                <H2 id="revenue-vs-capital">The most important distinction: Revenue vs Capital expenses</H2>
                <P>The single most important concept in landlord tax is the distinction between revenue expenses and capital expenses. Getting this wrong is one of the most common — and costly — mistakes on a landlord&apos;s self-assessment return.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2010" label="HMRC PIM2010" />
                </P>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-5 border border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
                    <h3 className="font-display text-[17px] text-text mb-3">Revenue expenses</h3>
                    <p className="font-sans text-[13px] text-text-muted leading-relaxed mb-2">Deducted from rental income <strong>each year</strong> — reducing your annual tax bill.</p>
                    <ul className="font-sans text-[13px] text-text-muted space-y-1">
                      <li>— Letting agent fees</li>
                      <li>— Repairs and maintenance</li>
                      <li>— Insurance premiums</li>
                      <li>— Mortgage interest (restricted)</li>
                      <li>— Professional fees</li>
                    </ul>
                  </div>
                  <div className="p-5 border border-[#f0eee8] bg-white">
                    <h3 className="font-display text-[17px] text-text mb-3">Capital expenses</h3>
                    <p className="font-sans text-[13px] text-text-muted leading-relaxed mb-2">Deducted from the <strong>CGT gain on disposal</strong> — reducing your tax bill when you sell.</p>
                    <ul className="font-sans text-[13px] text-text-muted space-y-1">
                      <li>— Purchase price + SDLT</li>
                      <li>— Extensions and conversions</li>
                      <li>— Structural improvements</li>
                      <li>— Legal fees on purchase/sale</li>
                      <li>— New bathrooms (enhancement)</li>
                    </ul>
                  </div>
                </div>
                <P>The boundary between repairs (revenue) and improvements (capital) is one of the most contested areas in property tax. HMRC&apos;s test is whether the work restores the property to its original condition or enhances it beyond that condition.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2020" label="HMRC PIM2020: Repairs" />
                </P>

                <H2 id="fully-allowable">The definitive list of allowable revenue expenses</H2>
                <P>The following expenses are deductible from gross rental income in the year they are incurred, provided they are wholly and exclusively for the purpose of the rental business.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2050" label="HMRC PIM2050" />
                </P>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full font-sans text-[13px] border-collapse">
                    <thead>
                      <tr style={{ background: 'var(--green-deep)' }}>
                        <th className="text-left py-3 px-4 text-white font-semibold text-[12px]">Expense</th>
                        <th className="text-left py-3 px-4 text-white font-semibold text-[12px]">What qualifies</th>
                        <th className="text-left py-3 px-4 text-white font-semibold text-[12px] hidden md:table-cell">HMRC reference</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allowableExpenses.map((row, i) => (
                        <tr key={i} className={`border-b border-[#f0eee8] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafaf8]'}`}>
                          <td className="py-3 px-4 font-medium text-text align-top">{row.category}</td>
                          <td className="py-3 px-4 text-text-muted leading-relaxed align-top">{row.detail}</td>
                          <td className="py-3 px-4 align-top hidden md:table-cell">
                            <a href={`https://www.gov.uk/hmrc-internal-manuals/property-income-manual/${row.hmrc.toLowerCase()}`}
                              target="_blank" rel="noopener noreferrer"
                              className="text-brand text-[11px] no-underline hover:underline">
                              {row.hmrc}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <H2 id="finance-costs">Finance costs and Section 24</H2>
                <P>Mortgage interest and other finance costs are still reported in full on the property income pages of your self-assessment return — but they are no longer deducted as an expense. Instead, a 20% tax credit is applied against your income tax liability.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2052" label="HMRC PIM2052: Finance costs" />
                </P>
                <P>For basic rate (20%) taxpayers, this makes no practical difference — the credit equals the tax that would have been saved by the deduction. For higher rate (40%) and additional rate (45%) taxpayers, the restriction costs 20p and 25p respectively for every pound of mortgage interest. This is the Section 24 problem.</P>
                <P>Finance costs that qualify for the restricted credit include: mortgage interest (not capital repayments), arrangement fees spread over the loan term, interest on loans taken out to fund improvements to a rental property, and overdraft interest on a landlord&apos;s bank account used exclusively for the rental business.</P>

                <H2 id="repairs-vs-improvements">Repairs vs improvements — the critical boundary</H2>
                <P>HMRC draws a distinction that landlords frequently get wrong:</P>
                <H3>Repairs (revenue — deductible from income)</H3>
                <P>Work that restores the property to its original condition. Key examples:
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2020" label="HMRC PIM2020" />
                </P>
                <ul className="font-sans text-[14px] text-text-muted leading-relaxed mb-5 space-y-2 pl-4">
                  <li>— Replacing a broken boiler with a comparable model</li>
                  <li>— Repainting and redecorating</li>
                  <li>— Fixing a leaking roof (if the structure itself is sound)</li>
                  <li>— Replacing broken windows with equivalent windows</li>
                  <li>— Replastering after water damage</li>
                  <li>— Replacing a worn kitchen with a modern equivalent</li>
                </ul>
                <H3>Improvements (capital — deductible against CGT)</H3>
                <P>Work that enhances the property beyond its original condition. Key examples:</P>
                <ul className="font-sans text-[14px] text-text-muted leading-relaxed mb-5 space-y-2 pl-4">
                  <li>— Adding an extension or conservatory</li>
                  <li>— Converting a loft into a habitable room</li>
                  <li>— Installing central heating for the first time</li>
                  <li>— Replacing a basic bathroom with a high-specification suite</li>
                  <li>— Adding a garage or outbuilding</li>
                </ul>
                <P>The boundary is not always clear. HMRC accepts that improvements can contain an element of repair — where this is the case, the repair element can be apportioned and deducted as revenue expenditure. A specialist identifies and apportions correctly.</P>

                <H2 id="replacement-furniture">Replacement Furniture Relief</H2>
                <P>The Replacement of Domestic Items Relief (commonly called Replacement Furniture Relief) allows landlords of furnished residential properties to deduct the cost of replacing domestic items — but not the cost of the initial purchase.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim3210" label="HMRC PIM3210" />
                </P>
                <P>Qualifying items include: sofas and armchairs, beds and mattresses, wardrobes, dining tables and chairs, fridges, washing machines, dishwashers, cookers, televisions, and curtains. The relief is calculated as the cost of a like-for-like replacement — if the landlord upgrades (replacing a basic sofa with a premium model), only the cost of the equivalent basic item is deductible; the upgrade element is capital expenditure.</P>
                <P>The relief applies to furnished and part-furnished lets. It does not apply to unfurnished lets where only bare fixtures are provided. It was introduced from April 2016, replacing the old 10% Wear and Tear Allowance that previously applied to furnished lets.</P>

                <H2 id="home-office-mileage">Home office and mileage claims</H2>
                <P>Landlords who manage their own portfolios can claim a proportion of home costs where part of the home is used exclusively for rental administration — but HMRC scrutinises these claims carefully.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2210" label="HMRC PIM2210: Home expenses" />
                </P>
                <P>The claim must be based on actual use. A reasonable basis might be the proportion of rooms used exclusively for rental management, multiplied by the proportion of time used for this purpose. General domestic use of the same room disqualifies the room entirely — the exclusivity test is strict. In practice, modest, well-documented claims are accepted; speculative claims for significant proportions of home costs invite enquiry.</P>
                <P>Mileage to the rental property — for inspections, dealing with contractors, or tenant meetings — is allowable at HMRC&apos;s approved mileage rates (45p per mile for the first 10,000 miles, 25p per mile thereafter for a personal vehicle). A detailed mileage log with dates, destinations, and purposes is essential.</P>

                <H2 id="pre-letting-expenses">Pre-letting expenses</H2>
                <P>Expenses incurred before the first letting of a property may be deductible where they are of the same nature as expenses that would be allowable during the letting period, and where they were incurred in preparation for letting.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2505" label="HMRC PIM2505: Pre-letting expenses" />
                </P>
                <P>HMRC allows a deduction for pre-letting expenses going back up to 7 years before the first letting, provided the property was acquired with the intention of letting. Allowable pre-letting expenses include: advertising the property before a tenant is found, professional fees for preparing the tenancy agreement, and certain repairs carried out before the first let (where they would be allowable as a revenue expense if incurred during the letting).</P>
                <P>Expenses incurred while the property was used as a private residence, or relating to the purchase of the property, are not allowable as pre-letting revenue expenses — though they may be deductible as capital expenses against the eventual CGT gain.</P>

                <H2 id="capital-expenses">Capital expenses and CGT</H2>
                <P>Capital expenditure that cannot be claimed against rental income is not lost — it can be added to the CGT base cost of the property, reducing the taxable gain when the property is eventually sold.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg15180" label="HMRC CG15180: Enhancement expenditure" />
                </P>
                <P>Allowable capital costs include: the original purchase price, Stamp Duty Land Tax paid on acquisition, legal and surveying fees on purchase, the cost of extensions and structural improvements, and legal costs on sale. Keeping detailed records of all capital expenditure — including invoices, contracts, and planning permissions — is essential for accurate CGT calculation on disposal, which may occur many years later.</P>

                <H2 id="what-you-cannot-claim">What you cannot claim</H2>
                <P>The following are commonly claimed but not allowable as revenue expenses:</P>
                <ul className="font-sans text-[14px] text-text-muted leading-relaxed mb-5 space-y-2 pl-4">
                  <li>— Capital expenditure (improvements, extensions — these go against CGT instead)</li>
                  <li>— The purchase price of the property</li>
                  <li>— Stamp Duty Land Tax on acquisition (deductible from CGT, not income)</li>
                  <li>— Legal fees on purchase (CGT deduction, not income)</li>
                  <li>— Costs related to a private residential element of the property</li>
                  <li>— Mortgage capital repayments (only the interest element qualifies)</li>
                  <li>— Expenses for periods when the property was not available for letting</li>
                  <li>— Initial cost of furnishing an unfurnished property</li>
                  <li>— Fines, penalties, and illegal payments</li>
                </ul>

                <H2 id="record-keeping">Record keeping requirements</H2>
                <P>HMRC requires landlords to keep records for at least 5 years after the self-assessment deadline for the relevant tax year (so a minimum of 6 years from the end of the tax year). For CGT purposes, records of capital expenditure should be kept for the entire period of ownership plus at least 6 years after disposal.
                  <Cite url="https://www.gov.uk/self-assessment-tax-returns/record-keeping" label="HMRC: Self-assessment record keeping" />
                </P>
                <P>Essential records include: rental income receipts, all expense invoices and receipts, bank statements for the rental account, tenancy agreements, correspondence with tenants and agents, mileage logs, and details of any improvements made to the property. A specialist accountant will advise on an appropriate record-keeping system for your portfolio size.</P>

                <H2 id="faqs">Frequently asked questions</H2>
                <div>
                  {faqs.map((faq, i) => (
                    <div key={i} className="faq-item">
                      <button className="faq-q w-full text-left bg-transparent border-0 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        <span className="font-display text-[17px]">{faq.q}</span>
                        <span className="flex-shrink-0 ml-4 font-sans text-[17px]" style={{ color: 'var(--green)' }}>{openFaq === i ? '−' : '+'}</span>
                      </button>
                      {openFaq === i && <p className="faq-a">{faq.a}</p>}
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-5 bg-[#fafaf8] border border-[#f0eee8] font-sans text-[12px] text-text-faint leading-relaxed">
                  <strong className="text-text-muted">Disclaimer:</strong> This guide is for general information only. Allowable expenses depend on individual circumstances and HMRC may challenge claims that are not properly documented. Always seek advice from a qualified ACCA or ICAEW certified property tax accountant. References are to HMRC guidance current as of January 2026.
                </div>
              </article>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--green)' }} className="py-16 md:py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-[1.8rem] md:text-h2 text-white mb-4 leading-tight">
              Are you claiming everything you&apos;re entitled to?
            </h2>
            <p className="font-sans text-[16px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Our Harrow property tax specialists review your rental accounts and identify missed deductions — free initial matching, within 48 hours.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>
                Get a Free Tax Review
              </button>
              <Link href="/services/section-24-tax-mitigation/" className="font-sans text-[14px] font-medium no-underline flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Section 24 mitigation &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
