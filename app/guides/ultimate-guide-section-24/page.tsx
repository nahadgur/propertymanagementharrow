'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import Section24Calculator from '@/components/Section24Calculator'

const TOC = [
  { id: 'what-is-section-24',         label: 'What is Section 24?' },
  { id: 'who-is-affected',            label: 'Who does Section 24 affect?' },
  { id: 'the-tax-calculation',        label: 'The old vs new calculation' },
  { id: 'real-world-examples',        label: 'Real-world worked examples' },
  { id: 'mitigation-spv',             label: 'Mitigation: SPV incorporation' },
  { id: 'mitigation-spousal',         label: 'Mitigation: Spousal splitting' },
  { id: 'mitigation-pension',         label: 'Mitigation: Pension contributions' },
  { id: 'calculator',                 label: 'Section 24 calculator' },
  { id: 'getting-specialist-advice',  label: 'Getting specialist advice' },
  { id: 'faqs',                       label: 'FAQs' },
]

export default function Section24GuidePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const faqs = [
    { q: 'Can basic rate taxpayers ignore Section 24?', a: 'If your total income — including rental income — stays within the basic rate band (up to £50,270), Section 24 creates no additional tax. The 20% tax credit matches the 20% income tax rate, so there is no loss. However, your position can shift into the higher rate band if your rental income grows, you receive a pay rise, or you acquire additional properties. It is worth checking annually.' },
    { q: 'Does Section 24 apply to furnished holiday lets?', a: 'Furnished Holiday Lets (FHLs) were historically treated as trading income, allowing full mortgage interest deduction. However, the Government announced the abolition of the FHL tax regime from April 2025, after which FHL income is treated as ordinary rental income subject to the same Section 24 restriction as standard buy-to-lets.' },
    { q: 'Can I deduct the arrangement fee on my mortgage?', a: 'Mortgage arrangement fees can be deducted as finance costs and are subject to the same Section 24 treatment as interest — receiving a 20% tax credit rather than full deduction for higher-rate taxpayers. The deduction is spread over the term of the loan rather than taken entirely in the year of arrangement.' },
    { q: 'Does Section 24 apply to commercial property?', a: 'No. Section 24 applies specifically to residential property. Landlords with commercial or mixed-use property portfolios can still deduct finance costs in full against rental income from those properties.' },
    { q: 'What happens if I incorporate my portfolio — does Section 24 still apply?', a: 'No. Section 24 applies to income tax, not corporation tax. A limited company can deduct 100% of mortgage interest as a business expense against corporation tax profits. This is the primary tax driver behind the increase in SPV incorporations since Section 24 was introduced.' },
    { q: 'Can HMRC investigate my Section 24 position retrospectively?', a: "HMRC can open an enquiry into any tax year within the limitation period — typically 4 years for innocent errors, 6 years for negligence, and 20 years for deliberate understatement. Most Section 24 issues arise from incorrectly claiming full deductions rather than the 20% credit. A specialist review of past returns can identify any exposure before HMRC does." },
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
        headline: 'The Ultimate Guide to Section 24 Tax for UK Landlords',
        description: 'A comprehensive guide to Section 24 — how the mortgage interest tax relief restriction works, who is affected, how much it costs, and the legal strategies available to mitigate it.',
        datePublished: '2025-01-15',
        dateModified: '2025-03-01',
        author: { '@type': 'Organization', name: 'Property Accountants Harrow', url: 'https://www.propertyaccountantsharrow.co.uk' },
        publisher: { '@type': 'Organization', name: 'Property Accountants Harrow' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertyaccountantsharrow.co.uk/guides/ultimate-guide-section-24/' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Section 24 Guide" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero */}
        <section style={{ background: 'var(--green-deep)' }} className="py-20">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Section 24 Guide' }]} />
            <div className="max-w-2xl">
              <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 mb-6" style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                Definitive Guide — Updated March 2025
              </span>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                The Ultimate Guide to Section 24 Tax for UK Landlords
              </h1>
              <p className="font-sans text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Everything you need to understand the mortgage interest finance cost restriction — how it works, how much it is costing you, and the legal strategies available to mitigate it.
              </p>
              <div className="flex items-center gap-6 font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span>By Property Accountants Harrow</span>
                <span>&middot;</span>
                <span>Updated: March 2025</span>
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

                <H2 id="what-is-section-24">What is Section 24?</H2>
                <P>Section 24 of the Finance (No. 2) Act 2015 introduced what is formally known as the finance cost restriction for residential property landlords. In plain terms, it removed the ability of higher-rate taxpaying landlords to deduct mortgage interest as a business expense against rental income — replacing it with a flat 20% tax credit that bears no relation to the landlord's actual tax rate.</P>
                <P>The measure was phased in between April 2017 and April 2020. During the transition, landlords could deduct a reducing percentage of their finance costs (75% in 2017/18, 50% in 2018/19, 25% in 2019/20) before the restriction became fully operational from April 2020. Since that point, 100% of finance costs have been subject to the restriction with no grandfather provisions.</P>
                <P>The policy objective, as stated by HMRC, was to create a level playing field between property investors and other investors whose asset finance costs are not deductible. The practical effect was to significantly increase the tax burden on leveraged residential landlords — particularly those with high loan-to-value ratios and limited rental income cushion above finance costs.</P>

                <H2 id="who-is-affected">Who does Section 24 affect?</H2>
                <P>Section 24 only creates additional tax for taxpayers who pay income tax above the basic rate (20%). For basic rate taxpayers, the 20% tax credit matches their income tax rate on profits — there is no additional cost. For higher rate (40%) and additional rate (45%) taxpayers, the gap between their tax rate and the 20% credit represents the annual Section 24 cost.</P>
                <H3>The threshold problem</H3>
                <P>One of the most counterintuitive effects of Section 24 is its impact on landlords who might otherwise be basic rate taxpayers. Because rental income must be added to a landlord's other income before determining the tax rate, and because the finance costs are added back to calculate the gross income figure for threshold purposes, a landlord with relatively modest other income can find themselves in the higher rate band simply because their rental income — before deducting mortgage interest — crosses the threshold.</P>
                <P>Consider a landlord with a salary of £30,000 and rental income of £24,000. Their finance costs are £18,000 — leaving net rental profit of £6,000. In isolation, they appear to be a basic rate taxpayer with total income of £36,000. But under Section 24, the £18,000 of finance costs is added back to determine the income threshold, making their effective income £54,000 — pushing £3,730 of income into the higher rate band. The additional tax on that £3,730 at 40% (rather than 20%) costs £746, and the lost relief on the portion of mortgage interest corresponding to the higher-rate band creates a further cost. This effect — sometimes called the mortgage interest trap — means the true impact of Section 24 can be significantly larger than a simple calculation suggests.</P>

                <H2 id="the-tax-calculation">The old rules vs the current calculation</H2>
                <P>Understanding the mechanical difference between the old and current rules is essential for quantifying your Section 24 exposure.</P>
                <H3>Under the old rules (pre-2017)</H3>
                <P>Rental profit was calculated as: Rental income minus all allowable expenses including mortgage interest. The resulting profit was taxed at the landlord's marginal rate. A higher-rate taxpayer with £20,000 of rental income, £12,000 of mortgage interest, and £2,000 of other costs would have a taxable profit of £6,000, generating income tax of £2,400 (40% of £6,000).</P>
                <H3>Under the current rules</H3>
                <P>Rental profit is now calculated without deducting mortgage interest: £20,000 minus £2,000 of other costs equals a taxable profit of £18,000. Tax at 40% on £18,000 is £7,200. A 20% tax credit of £12,000 (the mortgage interest) × 20% = £2,400 is then applied. Net tax: £7,200 minus £2,400 equals £4,800 — compared to £2,400 under the old rules. The additional annual cost is £2,400.</P>
                <P>The formula for the Section 24 cost for any taxpayer above the basic rate is: Annual mortgage interest × (tax rate minus 20%). For a 40% taxpayer: £12,000 × (40% minus 20%) = £12,000 × 20% = £2,400. For a 45% taxpayer with the same mortgage: £12,000 × 25% = £3,000.</P>

                <H2 id="real-world-examples">Real-world worked examples</H2>
                <H3>Example 1: The Harrow portfolio investor</H3>
                <P>David holds four buy-to-let properties in Harrow, purchased between 2013 and 2018. Total mortgage balance: £900,000. Average interest rate: 5%. Annual mortgage interest: £45,000. Annual gross rental income: £72,000. Other allowable costs: £12,000. David is an employee earning £55,000 — pushing him into higher rate tax on all of his rental income.</P>
                <P>Under the old rules, David&apos;s taxable rental profit would have been £15,000 (£72,000 minus £45,000 minus £12,000), generating income tax of £6,000. Under current rules, his taxable rental profit is £60,000 (£72,000 minus £12,000), generating income tax of £24,000, with a tax credit of £9,000 (£45,000 × 20%). Net tax: £15,000. Section 24 additional annual cost: £9,000. Over ten years: £90,000.</P>
                <H3>Example 2: The additional rate landlord</H3>
                <P>Priya is a consultant earning £130,000. She holds three properties in Stanmore with a combined mortgage of £1.4 million at 5.5%, generating annual interest of £77,000. Her rental income is £84,000 and other costs are £10,000. As an additional rate taxpayer, every pound of mortgage interest creates a Section 24 cost of 25p. Annual Section 24 cost: £77,000 × 25% = £19,250. Over five years: £96,250.</P>

                <H2 id="mitigation-spv">Mitigation strategy: SPV incorporation</H2>
                <P>The most comprehensive response to Section 24 is incorporating the residential portfolio into a Special Purpose Vehicle limited company. Inside a company, mortgage interest is treated as a fully deductible business expense against corporation tax profits — there is no finance cost restriction. Company profits are taxed at the corporation tax rate (19% for small profits, 25% for profits above £50,000) rather than at income tax rates of up to 45%.</P>
                <P>The economics of incorporation depend on three variables: the annual tax saving inside the company, the SDLT payable on transferring the properties (at standard rates plus the 3% surcharge on the full portfolio value), and the CGT triggered on the disposal into the company. For portfolios with modest built-in gains and high leverage, the breakeven can be achieved in two to four years. For portfolios with significant gains, the CGT cost on transfer can extend the payback period substantially or make incorporation uneconomic.</P>
                <P>A specialist will model the exact breakeven for your specific portfolio — factoring in mortgage arrangement fees, legal costs, and the ongoing higher accountancy cost of running a company — before any recommendation is made. The use of our SPV vs Personal Tax Calculator above gives a directional estimate, but the full analysis requires your specific gain profile and LTV data.</P>

                <H2 id="mitigation-spousal">Mitigation strategy: Spousal income splitting</H2>
                <P>Where one spouse or civil partner is a higher-rate taxpayer and the other pays basic rate or no tax, transferring an interest in the buy-to-let property to the lower-rate taxpayer can move some or all of the rental income into a lower tax band — reducing or eliminating the Section 24 cost on the transferred portion.</P>
                <P>A property transfer between spouses is exempt from CGT (the lower-rate spouse takes the property at the original owner&apos;s base cost). However, SDLT may apply if the transferee assumes any share of the outstanding mortgage — this depends on the structure of the transfer and the amount of debt involved. The income split must also be genuine and reflect the actual beneficial ownership of the property, not simply a tax-motivated arrangement with a Form 17 declaration that does not correspond to reality.</P>
                <P>The effectiveness of this strategy depends entirely on the tax rates of both spouses and whether the lower-rate taxpayer has sufficient basic rate band capacity to absorb the additional rental income without crossing into the higher rate band themselves. A specialist will model the post-transfer position for both individuals before recommending this approach.</P>

                <H2 id="mitigation-pension">Mitigation strategy: Pension contributions</H2>
                <P>Making pension contributions (either personal or employer contributions via a company) reduces the contributor&apos;s adjusted net income — the figure used to determine their income tax band. By reducing taxable income below the higher rate threshold, it is possible to move rental income from the 40% band to the 20% band, eliminating the Section 24 cost on the income that moves bands.</P>
                <P>The pension contribution approach works best for landlords who are marginally in the higher rate band — where relatively modest contributions can shift a significant portion of rental income back into the basic rate band. It is less effective for landlords with very high total income, where the pension contributions required to eliminate the Section 24 cost entirely would exceed the annual allowance or become impractical. The annual pension allowance is currently £60,000 (or 100% of earnings, whichever is lower), with higher-rate relief available on contributions up to this limit.</P>

                <div id="calculator" className="scroll-mt-24 my-12 p-8 border border-[#e8e4de]">
                  <p className="eyebrow mb-3">Try the calculator</p>
                  <h2 className="font-display text-h2 text-text mb-4 leading-tight">Calculate your Section 24 cost</h2>
                  <p className="font-sans text-[15px] text-text-muted mb-8">
                    Enter your rental income and mortgage interest to see exactly how much Section 24 is costing you annually.
                  </p>
                  <Section24Calculator onOpenModal={() => setModalOpen(true)} />
                </div>

                <H2 id="getting-specialist-advice">Getting the right specialist advice</H2>
                <P>Section 24 is a structural problem that requires a structural response. Filing self-assessment returns correctly is table stakes — the real value of a specialist is the proactive identification and implementation of the right mitigation strategy for your specific portfolio, income level, and long-term objectives.</P>
                <P>Not all of the strategies above will be appropriate for every landlord. SPV incorporation makes sense only when the transfer costs can be recovered from the annual tax saving within a reasonable timeframe. Spousal splitting requires both spouses to genuinely own a beneficial interest and the income to genuinely belong to both. Pension contributions are most effective when the amount needed is within the annual allowance and when the landlord has sufficient earnings to qualify for higher-rate relief on the contributions.</P>
                <P>A specialist will assess all three approaches against your specific position — and model the combined multi-year tax outcome of each — before recommending any action. The matching service on this site connects Harrow landlords with ACCA and ICAEW certified specialists who focus specifically on this kind of work.</P>
                <div className="mt-6 mb-12">
                  <button onClick={() => setModalOpen(true)} className="btn-primary">
                    Find a Section 24 Specialist — Free
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

        {/* Moat funnel CTA */}
        <section style={{ background: 'var(--green)' }} className="py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">Now get the strategy — not just the understanding.</h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Our Harrow specialists will model the right Section 24 mitigation strategy for your exact portfolio — free, within 48 hours.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>
                Find My Specialist — Free
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
