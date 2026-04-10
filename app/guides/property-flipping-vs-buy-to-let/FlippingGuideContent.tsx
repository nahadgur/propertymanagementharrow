'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'

const TOC = [
  { id: 'investor-or-trader',       label: 'Investor or trader? The core question' },
  { id: 'badges-of-trade',          label: 'The six badges of trade' },
  { id: 'tax-as-investor',          label: 'Tax treatment: investor (CGT)' },
  { id: 'tax-as-trader',            label: 'Tax treatment: trader (income tax)' },
  { id: 'the-cost-of-misclassification', label: 'The cost of getting it wrong' },
  { id: 'hmrc-enquiries',           label: 'How HMRC investigates flippers' },
  { id: 'mixed-portfolios',         label: 'Mixed portfolios: trading and investment' },
  { id: 'cis-obligations',          label: 'CIS obligations for developers' },
  { id: 'vat-on-development',       label: 'VAT on property development' },
  { id: 'structuring-correctly',    label: 'Structuring your development business' },
  { id: 'faqs',                     label: 'FAQs' },
]

const faqs = [
  {
    q: 'How many properties do I have to sell before HMRC treats me as a trader?',
    a: 'There is no fixed threshold. HMRC considers the totality of the circumstances — the badges of trade — not simply the number of transactions. A single property disposal can be treated as trading activity if the surrounding facts (intention at acquisition, the nature of the work done, the profit motive, the speed of disposal) point strongly to trading. Conversely, a landlord who sells ten properties over a lifetime of buy-to-let investment will generally be taxed on CGT, not income tax.',
  },
  {
    q: 'Can I claim Principal Private Residence (PPR) relief on a property I renovated and lived in briefly?',
    a: 'HMRC is alert to arrangements where a person moves into a property, renovates it, and sells it — claiming PPR to avoid CGT and arguing it was their main home. Whether PPR applies depends on whether the occupation was genuine and whether the property was truly the main residence, not merely occupied temporarily for tax purposes. A pattern of doing this repeatedly will attract HMRC scrutiny and is likely to be challenged as trading activity.',
  },
  {
    q: 'What is the difference between income tax and CGT on a £100,000 property gain?',
    a: 'For a higher rate taxpayer: as a capital gain, the tax would be approximately £24,000 (24% of £100,000, less the £3,000 AEA = £23,280). As trading income, the same £100,000 would be added to total income and taxed at 40% — generating £40,000 of income tax plus Class 4 NICs of approximately £3,000, for a total of around £43,000. The difference — roughly £20,000 on a single transaction — explains why HMRC is motivated to reclassify apparent investment gains as trading income.',
  },
  {
    q: 'Do I need to register for CIS if I am doing my own building work?',
    a: 'If you engage subcontractors to carry out construction work, you must register as a contractor under the Construction Industry Scheme and deduct tax at source from payments to subcontractors (20% for registered subcontractors, 30% for those not registered). This applies regardless of whether your property development is structured as a company or conducted personally. Failure to operate CIS correctly results in penalties equal to the amount that should have been deducted.',
  },
  {
    q: 'Is a property development company subject to Section 24?',
    a: 'Section 24 (the mortgage interest restriction) applies to income tax — not corporation tax. A limited company carrying out property development pays corporation tax on its trading profits and can deduct finance costs in full. However, a property development company is a trading company, not a buy-to-let SPV, and the tax treatment of its profits, losses, and asset disposals differs significantly from an SPV holding investment property. A specialist structures the company correctly for its actual activities.',
  },
  {
    q: 'Can I reduce my exposure by selling through a limited company?',
    a: 'Operating a property development business through a limited company can be tax-efficient — corporation tax rates (19%/25%) are lower than higher-rate income tax — but the structure introduces additional complexity. Extracting profits from the company (as salary or dividends) creates further tax. The company cannot claim CGT rates on disposals since it pays corporation tax on all gains at the standard rate. And residential development companies cannot use buy-to-let mortgage products. A specialist models the total tax cost before recommending any structure.',
  },
]

export default function FlippingGuideContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Property Flipping vs. Buy-to-Let: The UK Tax Rules Explained',
    description: 'Are you an investor or a trader? How HMRC classifies UK property projects, the badges of trade, income tax vs CGT on flipping, CIS obligations, and how to structure a property development business.',
    datePublished: '2025-02-01',
    dateModified: '2026-01-15',
    author: { '@type': 'Organization', name: 'Property Accountants Harrow', url: 'https://www.propertyaccountantsharrow.co.uk' },
    publisher: { '@type': 'Organization', name: 'Property Accountants Harrow' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertyaccountantsharrow.co.uk/guides/property-flipping-vs-buy-to-let/' },
    citation: [
      { '@type': 'WebPage', name: 'HMRC BIM20050: The badges of trade', url: 'https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim20050' },
      { '@type': 'WebPage', name: 'HMRC BIM60505: Trading in land', url: 'https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim60505' },
      { '@type': 'WebPage', name: 'HMRC: Construction Industry Scheme', url: 'https://www.gov.uk/what-is-the-construction-industry-scheme' },
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
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Property Flipping Guide" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/tenant-find-referencing.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Property Flipping vs Buy-to-Let' }]} />
            <div className="max-w-2xl">
              <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 mb-6"
                style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                The Developer Guide — Updated January 2026
              </span>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                Property Flipping vs Buy-to-Let: The UK Tax Rules Explained
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Are you an investor or a trader? How HMRC classifies your property projects, what it costs you, and how to structure your development activities correctly — with citations to HMRC&apos;s Business Income Manual.
              </p>
              <div className="flex items-center gap-6 font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span>Property Accountants Harrow</span><span>&middot;</span>
                <span>Updated: January 2026</span><span>&middot;</span>
                <span>~18 min read</span>
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
                  Get Developer Advice — Free
                </button>
                <div className="mt-6 p-4 border border-[#e8f0e8]" style={{ background: 'var(--green-soft)' }}>
                  <p className="eyebrow mb-3 text-[9px]">HMRC References</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: 'BIM20050: Badges of trade', url: 'https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim20050' },
                      { label: 'BIM60505: Trading in land', url: 'https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim60505' },
                      { label: 'CIS: What it is', url: 'https://www.gov.uk/what-is-the-construction-industry-scheme' },
                      { label: 'VAT: Land and property', url: 'https://www.gov.uk/guidance/vat-on-land-and-property-notice-742' },
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

                {/* Warning callout */}
                <div className="p-5 mb-8 border-l-4" style={{ borderColor: '#c0392b', background: '#fef9f9' }}>
                  <p className="font-display text-[17px] text-text mb-2">HMRC actively targets this area</p>
                  <p className="font-sans text-[14px] leading-relaxed" style={{ color: '#7a2a2a' }}>
                    Property developers who pay Capital Gains Tax when HMRC considers them to be trading are one of the most common targets for HMRC compliance activity. The difference in tax between the two treatments can be tens of thousands of pounds on a single transaction.
                  </p>
                </div>

                <H2 id="investor-or-trader">Investor or trader? The question that determines your tax rate</H2>
                <P>UK tax law treats property disposals in one of two fundamentally different ways, depending on whether the person making the disposal is classified as an investor or a trader in relation to that property.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim60505" label="HMRC BIM60505" />
                </P>
                <P>An <strong>investor</strong> holds property as a capital asset — for rental income, long-term appreciation, or both. When they sell, they pay Capital Gains Tax on the profit: 18% within the basic rate band, 24% above it, after applying the Annual Exempt Amount and any available reliefs such as Private Residence Relief.</P>
                <P>A <strong>trader</strong> buys and sells property as a business activity — acquiring properties with the intention of reselling them at a profit. Their profits are treated as trading income, subject to income tax at up to 45% plus National Insurance Contributions. There is no Annual Exempt Amount, no CGT rates, and no Private Residence Relief available on trading stock.</P>
                <P>The difference between these two treatments on a single £150,000 gain can easily exceed £25,000 in additional tax. HMRC knows this, and allocates significant compliance resource to identifying individuals who have paid CGT when income tax should have applied.</P>

                <H2 id="badges-of-trade">The six badges of trade</H2>
                <P>Courts and HMRC use a framework of &ldquo;badges of trade&rdquo; to determine whether a disposal is a trading transaction or a capital disposal. No single badge is conclusive — HMRC considers the totality of the facts.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim20050" label="HMRC BIM20050: Badges of trade" />
                </P>

                <div className="flex flex-col gap-4 mb-8">
                  {[
                    {
                      n: '01',
                      title: 'The subject matter of the transaction',
                      body: 'Assets that yield income or personal enjoyment in their existing state (a buy-to-let generating rent) point toward investment. Assets that only produce a profit on disposal (a property bought to renovate and sell quickly) point toward trading.',
                    },
                    {
                      n: '02',
                      title: 'The frequency and number of similar transactions',
                      body: 'Repeated buying and selling of similar property types — buying distressed properties, renovating, and selling — is strong evidence of trading. A single disposal, isolated in the context of a long-term portfolio, is less likely to be treated as trading.',
                    },
                    {
                      n: '03',
                      title: 'The length of ownership',
                      body: 'Short holding periods — acquiring a property, renovating it, and selling within months — point strongly toward trading. Long periods of ownership, especially where rental income has been received, point toward investment.',
                    },
                    {
                      n: '04',
                      title: 'The intention at the time of acquisition',
                      body: 'This is the most heavily weighted badge. If HMRC can demonstrate that the intention at the time of purchase was to sell at a profit — rather than to hold as an investment — this points powerfully toward trading. Email evidence, planning applications, marketing activity, and communications with agents are all discoverable on enquiry.',
                    },
                    {
                      n: '05',
                      title: 'How the asset was financed',
                      body: 'Financing a purchase with a short-term bridging loan (designed for renovation and resale) rather than a buy-to-let mortgage points toward trading. The nature of the finance reveals the underlying intention.',
                    },
                    {
                      n: '06',
                      title: 'The degree of work done to the asset',
                      body: 'Significant development or renovation work carried out specifically to increase the sale value — rather than to maintain the property in a lettable condition — is evidence of a trading intention. Adding value through development is a trading activity; maintaining value through repair is consistent with investment.',
                    },
                  ].map(b => (
                    <div key={b.n} className="flex gap-4 p-5 border border-[#f0eee8]">
                      <span className="font-display text-[28px] flex-shrink-0 leading-none mt-1" style={{ color: 'var(--green-mid)' }}>{b.n}</span>
                      <div>
                        <h3 className="font-display text-[17px] text-text mb-2">{b.title}</h3>
                        <p className="font-sans text-[14px] text-text-muted leading-relaxed">{b.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <H2 id="tax-as-investor">Tax treatment as an investor (CGT)</H2>
                <P>Where a disposal is correctly classified as an investment disposal, CGT applies to the net gain after deducting allowable costs and reliefs. For 2025/26:</P>
                <ul className="font-sans text-[14px] text-text-muted leading-relaxed mb-5 space-y-2 pl-4">
                  <li>— Annual Exempt Amount: £3,000</li>
                  <li>— Basic rate: 18% on gains within the basic rate band</li>
                  <li>— Higher/additional rate: 24% on gains above the basic rate band</li>
                  <li>— Private Residence Relief available if ever a main home</li>
                  <li>— 60-day reporting obligation after completion</li>
                  <li>— Allowable costs: purchase price, SDLT, legal fees, capital improvements</li>
                </ul>
                <P>The effective tax rate for a higher-rate taxpayer on a pure investment disposal — with no reliefs — is 24% of the gain. With strategic use of PRR, spousal transfers, and disposal timing, this can often be reduced materially.</P>

                <H2 id="tax-as-trader">Tax treatment as a trader (income tax)</H2>
                <P>Where HMRC treats the disposal as a trading transaction, the entire profit — purchase price and costs deducted from the sale proceeds — is treated as trading income subject to income tax and National Insurance.</P>
                <ul className="font-sans text-[14px] text-text-muted leading-relaxed mb-5 space-y-2 pl-4">
                  <li>— Basic rate taxpayer: income tax at 20% + Class 4 NICs at 6% = 26% effective rate</li>
                  <li>— Higher rate taxpayer: income tax at 40% + Class 4 NICs at 6% = 46% effective rate</li>
                  <li>— No Annual Exempt Amount</li>
                  <li>— No CGT rates or residential property rates</li>
                  <li>— No Private Residence Relief</li>
                  <li>— Self-employment rules apply — trading losses can be offset against other income</li>
                </ul>
                <P>Trading through a limited company attracts corporation tax (19%/25%) rather than income tax — which appears lower but profit extraction (salary, dividends) creates additional personal tax. The structure must be modelled in full to identify the true effective rate.</P>

                <H2 id="the-cost-of-misclassification">The cost of getting it wrong</H2>
                <P>Consider a property developer who buys a house for £320,000, spends £60,000 renovating it, and sells for £500,000 eight months later. They report a capital gain of £120,000 and pay CGT of approximately £28,080 (24% of £117,000 after the AEA).</P>
                <P>HMRC opens an enquiry and determines that the disposal was trading activity. The £120,000 gain is reclassified as trading profit. At a 40% income tax rate plus NICs, the additional tax is approximately £26,000. Add interest on unpaid tax, and a potential 30% penalty for inaccuracy (where HMRC considers the return to have been carelessly prepared), and the total additional cost can reach £60,000 on that single transaction.</P>
                <P>HMRC can open an enquiry into a return for up to four years after the filing deadline — six years where there has been a loss of tax due to careless behaviour, and twenty years in cases of deliberate understatement.</P>

                <H2 id="hmrc-enquiries">How HMRC investigates property developers</H2>
                <P>HMRC&apos;s Connect computer system cross-references Land Registry data, planning application records, Companies House filings, and self-assessment returns.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/enquiry-manual/em1505" label="HMRC EM1505" />
                  It can identify individuals who have bought and sold multiple properties within short periods, who have obtained planning permissions before selling, or whose declared income appears inconsistent with the activity in their property portfolios.</P>
                <P>On enquiry, HMRC typically requests: all correspondence with estate agents and solicitors relating to the acquisition; planning applications and correspondence; bridging loan documentation; schedules of work carried out; invoices from contractors; and marketing materials used when selling. The intention at the time of acquisition — not at the time of sale — is the key question, and HMRC constructs the picture from contemporaneous documentation.</P>

                <H2 id="mixed-portfolios">Mixed portfolios: trading and investment</H2>
                <P>Many experienced property investors operate both investment and development activities. The classification of each asset depends on its own facts — a developer who also holds buy-to-let properties does not automatically convert the investment properties into trading stock, or vice versa.</P>
                <P>However, the boundary must be clearly maintained and documented. Where the same person or company carries out both activities, HMRC scrutinises whether assets labelled as investments are genuinely being held for rental income and long-term growth, or whether they are trading stock being temporarily held. A specialist structures the business — often using separate legal entities for the trading and investment activities — and maintains clear records that distinguish each property&apos;s status from acquisition.</P>

                <H2 id="cis-obligations">Construction Industry Scheme (CIS) obligations</H2>
                <P>The Construction Industry Scheme requires contractors who engage subcontractors for construction work to deduct tax at source from payments and pass it to HMRC.
                  <Cite url="https://www.gov.uk/what-is-the-construction-industry-scheme" label="HMRC: CIS overview" />
                  Property developers who engage builders, plumbers, electricians, or other subcontractors must register as CIS contractors — even if property development is not their primary business activity.</P>
                <P>The deduction rate is 20% for subcontractors registered under CIS, 30% for those who are not registered, and 0% for subcontractors with gross payment status. As a CIS contractor, you must:</P>
                <ul className="font-sans text-[14px] text-text-muted leading-relaxed mb-5 space-y-2 pl-4">
                  <li>— Verify each subcontractor with HMRC before the first payment</li>
                  <li>— Deduct the correct amount from each payment</li>
                  <li>— Pay the deducted amounts to HMRC by the 19th of the following month</li>
                  <li>— File monthly CIS returns (even if nil) by the 19th of each month</li>
                  <li>— Provide subcontractors with written statements of deductions made</li>
                </ul>
                <P>Penalties for failure to operate CIS correctly are substantial — equal to the amount that should have been deducted, plus interest. HMRC has no discretion on the penalty calculation. A specialist accountant manages CIS compliance as part of the development accounting function.</P>

                <H2 id="vat-on-development">VAT considerations for property developers</H2>
                <P>VAT on property development is one of the most complex areas of UK tax law. The general rule is that the sale of residential property is exempt from VAT — but significant exceptions apply.
                  <Cite url="https://www.gov.uk/guidance/vat-on-land-and-property-notice-742" label="HMRC Notice 742: Land and property VAT" />
                </P>
                <P>The first sale of a newly constructed residential property is zero-rated — meaning VAT is charged at 0% and the developer can recover input VAT on construction costs. Substantially converting a non-residential building to residential use also qualifies for zero-rating on the first sale. Renovating and selling an existing residential property is generally exempt from VAT, meaning no VAT is charged on sale but input VAT on renovation costs cannot be recovered — representing a genuine irrecoverable cost in the project economics.</P>
                <P>The difference between a zero-rated new build project (where input VAT is fully recoverable) and an exempt residential renovation project (where it is not) can represent a significant cost — particularly on large projects with substantial materials and contractor costs. A specialist reviews the VAT treatment of each development project before work begins.</P>

                <H2 id="structuring-correctly">Structuring your property development business</H2>
                <P>The choice of structure for property development activity — personal trading, a limited company, or a partnership — has significant implications for tax efficiency, liability, CIS management, and mortgage access.</P>
                <H3>Personal trading (sole trader or partnership)</H3>
                <P>Simplest structure, with profits taxed as personal income. Full flexibility to use trading losses against other income. No requirement to file company accounts or pay corporation tax. But higher effective tax rate than a company for profits above the basic rate threshold, and unlimited personal liability for business debts.</P>
                <H3>Limited company</H3>
                <P>Profits taxed at corporation tax rates (19%/25%) — lower than higher-rate income tax. Trading losses carried forward against future profits. Personal liability limited. But profit extraction (salary and dividends) creates additional personal tax. Cannot use buy-to-let mortgage products. Higher ongoing accountancy cost (annual accounts, corporation tax return, confirmation statement). And any retained profits on winding up the company are taxed — often at the higher CGT rate since Business Asset Disposal Relief (formerly Entrepreneurs&apos; Relief) is less accessible for property companies.</P>
                <H3>The hybrid approach</H3>
                <P>Many experienced developers use a limited company for development activity and hold their buy-to-let investment portfolio personally (or in a separate SPV). This separates the trading and investment tax treatments, maintains access to buy-to-let mortgage products for the investment portfolio, and keeps CIS compliance within the company structure. A specialist designs the right architecture for your specific activity mix before you begin scaling.</P>

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
                  <strong className="text-text-muted">Disclaimer:</strong> This guide is for general information only and does not constitute tax or legal advice. The classification of property transactions as trading or investment depends on specific facts and circumstances. Always seek advice from a qualified ACCA or ICAEW certified property tax accountant before structuring any development activity. References are to HMRC guidance current as of January 2026.
                </div>
              </article>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--green)' }} className="py-16 md:py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-[1.8rem] md:text-h2 text-white mb-4 leading-tight">
              Get matched with a property development specialist — Free
            </h2>
            <p className="font-sans text-[16px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Our network includes ACCA and ICAEW certified accountants who specialise in property development tax, CIS compliance, and mixed portfolio structuring. Free matching, 48-hour introduction.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>
                Find My Development Specialist — Free
              </button>
              <Link href="/how-we-match-you/" className="font-sans text-[14px] font-medium no-underline flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
                How we vet specialists &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
