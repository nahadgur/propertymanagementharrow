'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import SPVCalculator from '@/components/SPVCalculator'

const TOC = [
  { id: 'why-incorporate',            label: 'Why landlords incorporate' },
  { id: 'what-is-an-spv',             label: 'What is an SPV?' },
  { id: 'annual-tax-saving',          label: 'The annual tax saving' },
  { id: 'sdlt-on-transfer',           label: 'SDLT on transfer' },
  { id: 'cgt-on-transfer',            label: 'CGT on transfer' },
  { id: 'breakeven-calculation',      label: 'Calculating the breakeven' },
  { id: 'full-vs-partial',            label: 'Full vs partial incorporation' },
  { id: 'future-acquisitions',        label: 'Future acquisitions in the company' },
  { id: 'setting-up-correctly',       label: 'Setting up the SPV correctly' },
  { id: 'calculator',                 label: 'SPV vs personal tax calculator' },
  { id: 'faqs',                       label: 'FAQs' },
]

export default function IncorporationGuidePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const faqs = [
    { q: 'Can I use an existing limited company to hold my properties?', a: 'Technically yes, but it is rarely advisable. Using a trading company or a company engaged in other activities creates mortgage complications (most buy-to-let lenders will not lend to a non-SPV company), potential HMRC scrutiny of the arrangement, and mixed-purpose accounting complexity. The standard approach is to establish a new SPV with the appropriate SIC code specifically for the property portfolio.' },
    { q: 'Can I live in a property owned by my SPV?', a: 'If you live in a property owned by your company without paying a market-rate rent, it will be treated as a benefit in kind — taxable on you personally as employment income and creating a national insurance liability for the company. Properties held in an SPV should be investment properties only. Your main residence must be held personally.' },
    { q: 'What happens to my existing buy-to-let mortgages when I incorporate?', a: 'In most cases, you cannot transfer an existing residential mortgage from personal name to a company. The property must be refinanced — the personal mortgage is repaid using the transfer proceeds, and a new company buy-to-let mortgage is arranged. This means mortgage arrangement fees and potentially higher rates, as company buy-to-let mortgages historically carry a slight premium over personal name mortgages. These costs must be factored into the breakeven calculation.' },
    { q: 'What is the correct SIC code for a property SPV?', a: 'Most buy-to-let mortgage lenders require the SPV to have SIC code 68100 (buying and selling of own real estate) or 68209 (other letting and operating of own or leased real estate). Using the wrong SIC code can result in mortgage applications being declined or existing mortgages being called in. Your accountant will set the company up with the correct code from the outset.' },
    { q: 'Can I sell properties from my personal name into the SPV rather than transferring them?', a: 'Yes — this is a market-value sale from you personally to the company, which is the mechanism that triggers SDLT and CGT. The transfer price must be set at market value; artificial undervaluation can trigger HMRC anti-avoidance provisions. Some landlords stagger transfers over multiple tax years to manage the CGT burden, particularly where the annual exempt amount can be used across years.' },
    { q: 'How do I extract profits from the SPV?', a: 'Profits retained in the company are subject only to corporation tax. When you want to access those profits personally, the most common mechanisms are salary (deductible from company profits, subject to income tax and NI), dividends (taxed at 8.75% for basic rate, 33.75% for higher rate, or 39.35% for additional rate beyond the £500 annual dividend allowance), or director loans (interest-free up to £10,000, otherwise creating benefit-in-kind issues). A specialist will model the most tax-efficient extraction strategy for your income profile.' },
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
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'The Complete Guide to Incorporating a Buy-to-Let Portfolio into an SPV',
        description: 'A step-by-step guide to SPV company incorporation for UK landlords — the tax saving, SDLT cost, CGT on transfer, breakeven calculation, and how to set up the company correctly.',
        datePublished: '2025-01-15', dateModified: '2025-03-01',
        author: { '@type': 'Organization', name: 'Property Accountants Harrow', url: 'https://www.propertyaccountantsharrow.co.uk' },
        publisher: { '@type': 'Organization', name: 'Property Accountants Harrow' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertyaccountantsharrow.co.uk/guides/incorporating-buy-to-let-portfolio/' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Incorporation Guide" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/block-estate-management.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Incorporating a Buy-to-Let Portfolio' }]} />
            <div className="max-w-2xl">
              <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 mb-6" style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                Complete Guide — Updated March 2025
              </span>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                The Complete Guide to Incorporating a Buy-to-Let Portfolio into an SPV
              </h1>
              <p className="font-sans text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                A step-by-step guide to SPV company incorporation for UK landlords — the economics, the costs, the risks, and how to decide whether incorporation is right for your portfolio.
              </p>
              <div className="flex items-center gap-6 font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span>By Property Accountants Harrow</span>
                <span>&middot;</span>
                <span>Updated: March 2025</span>
                <span>&middot;</span>
                <span>~20 min read</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

              {/* ToC sidebar */}
              <div className="sticky top-24 hidden lg:block">
                <p className="eyebrow mb-4">Contents</p>
                <nav className="flex flex-col gap-0">
                  {TOC.map((item, i) => (
                    <a key={item.id} href={`#${item.id}`}
                      className="flex items-start gap-3 py-3 border-b border-[#f0eee8] no-underline hover:text-brand group font-sans text-[13px] text-text-muted">
                      <span className="flex-shrink-0 font-display text-[12px] mt-0.5" style={{ color: 'var(--green-mid)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="group-hover:text-brand transition-colors">{item.label}</span>
                    </a>
                  ))}
                </nav>
                <button onClick={() => setModalOpen(true)} className="btn-primary w-full mt-8 text-[12px] py-3">
                  Get SPV Advice — Free
                </button>
              </div>

              {/* Article body */}
              <article className="max-w-2xl">

                <H2 id="why-incorporate">Why landlords are incorporating in 2025</H2>
                <P>SPV incorporation enquiries have increased dramatically since 2020. The reason is almost entirely attributable to Section 24 — the mortgage interest finance cost restriction that has been costing higher-rate taxpaying landlords thousands of pounds per year since it was fully implemented in April 2020. Inside a limited company, that restriction does not apply: mortgage interest is a fully deductible business expense, and profits are taxed at the corporation tax rate rather than at income tax rates of up to 45%.</P>
                <P>For highly leveraged landlords — particularly those with multiple properties, significant mortgage debt, and higher-rate income — the annual tax saving from holding the same portfolio in a company rather than in personal name can be substantial. A portfolio with £100,000 of annual mortgage interest generates an additional tax cost of £20,000 per year for a 40% taxpayer under Section 24. Inside a company, that cost disappears.</P>
                <P>The question is never whether the annual saving justifies incorporation in principle — for most higher-rate leveraged landlords, it does. The question is whether the one-off cost of transferring the portfolio into the company can be recovered from the annual saving in a reasonable timeframe. That calculation is the core of any serious SPV incorporation analysis.</P>

                <H2 id="what-is-an-spv">What is an SPV and how is it different from a standard company?</H2>
                <P>A Special Purpose Vehicle (SPV) is a limited company established specifically to hold a property investment portfolio. The term &lsquo;special purpose&rsquo; reflects the fact that the company has a defined, narrow purpose — property ownership and letting — rather than operating as a general trading company.</P>
                <P>The distinction matters for two practical reasons. First, buy-to-let mortgage lenders have developed specific products for SPV companies and will typically require the company to have an appropriate Standard Industrial Classification (SIC) code — either 68100 (buying and selling of own real estate) or 68209 (other letting and operating of own or leased real estate) — to qualify for those products. A company with a general or trading SIC code will be rejected by most BTL lenders.</P>
                <P>Second, HMRC and Companies House treat the SPV as a distinct legal entity. All rental income, expenses, and profits belong to the company, not to the individual shareholder/director. This creates a clear separation that is important both for tax purposes and for legal liability.</P>

                <H2 id="annual-tax-saving">Calculating the annual tax saving</H2>
                <P>The annual saving from incorporating is the difference between the tax you pay personally on rental profits under Section 24, and the corporation tax the company would pay on the same profits. This is not simply the Section 24 cost — it is the total tax difference between the two structures.</P>
                <H3>Personal name tax on £60,000 net profit (before finance costs) with £40,000 of mortgage interest — 40% taxpayer</H3>
                <P>Taxable profit: £60,000 (mortgage interest not deducted). Tax at 40%: £24,000. Section 24 tax credit: £40,000 × 20% = £8,000. Net income tax: £16,000.</P>
                <H3>Same position in an SPV (25% corporation tax)</H3>
                <P>Taxable profit: £60,000 minus £40,000 mortgage interest = £20,000. Corporation tax at 25%: £5,000. Annual saving versus personal: £11,000.</P>
                <P>This annual saving is the numerator in the breakeven calculation. The transfer costs — SDLT and CGT — are the denominator. If the total transfer cost is £33,000, the breakeven is three years (£33,000 ÷ £11,000). If the total transfer cost is £110,000, the breakeven is ten years. Different portfolios produce very different outcomes.</P>

                <H2 id="sdlt-on-transfer">SDLT on transferring properties to a company</H2>
                <P>When you transfer a personally-held property to a limited company, HMRC treats the transaction as a disposal from you and a purchase by the company at market value. This means SDLT is payable at the standard residential rates — plus the 3% additional dwelling surcharge — on the full market value of each property transferred.</P>
                <P>On a single property worth £450,000, the SDLT payable on transfer is approximately £24,000 (using 2024 residential rates plus the 3% surcharge). On a portfolio of five properties with a combined value of £1.8 million, the aggregate SDLT burden can approach £100,000. This is a substantial and real cost that must be modelled before any transfer proceeds.</P>
                <H3>Partnership relief: a potential exception</H3>
                <P>One significant relief that applies in some circumstances is SDLT partnership relief. Where a property business has been operated as a genuine partnership — typically between spouses or family members — and that partnership is incorporated into a company in exchange for shares, it may be possible to obtain significant SDLT relief under Schedule 15 of the Finance Act 2003. The relief applies only where the partnership interests and the resulting share ownership are structured correctly. It is a complex area with specific anti-avoidance provisions and requires specialist legal and accounting input. Where it does apply, it can transform the economics of incorporation completely.</P>

                <H2 id="cgt-on-transfer">CGT on the transfer into the company</H2>
                <P>The transfer of a property from personal name to a company is a disposal for Capital Gains Tax purposes. The deemed proceeds are the market value of the property at the date of transfer (not what the company actually pays, which may be a credit to a director&apos;s loan account). If the market value exceeds the original purchase price plus acquisition costs, CGT is payable on the gain — at 18% or 24% depending on the landlord&apos;s income in the year of transfer.</P>
                <P>For properties purchased before 2015 in areas with strong capital growth — including much of the Harrow market — the built-in gain can be significant. A property bought for £320,000 in 2012 and now worth £580,000 carries a gain of £260,000, generating potential CGT of up to £62,400. Across a five-property portfolio with similar gains, the aggregate CGT on transfer can run to several hundred thousand pounds.</P>
                <P>This is why many portfolio landlords choose not to transfer existing high-gain properties into an SPV, and instead adopt a hybrid strategy: holding existing properties personally and acquiring future properties through the company from the outset.</P>

                <H2 id="breakeven-calculation">The breakeven calculation</H2>
                <P>The breakeven analysis is the central tool in any SPV incorporation decision. It answers the question: how long does it take to recover the one-off transfer costs from the annual tax saving? A breakeven of three to five years is generally considered acceptable for most landlords. A breakeven of ten years or more typically makes incorporation uneconomic on a standalone basis.</P>
                <P>The inputs required for an accurate breakeven are: the total SDLT payable on each property being transferred, the CGT payable on each transfer (based on the specific gain in each property), the mortgage arrangement fees for refinancing into company names, legal costs for the transfer documentation, and the ongoing additional cost of running a company (corporation tax return, statutory accounts, confirmation statement — typically £500 to £1,500 per year more than personal self-assessment). These costs are compared against the annual after-tax saving from holding the portfolio in the company.</P>

                <H2 id="full-vs-partial">Full incorporation vs partial incorporation</H2>
                <P>Full incorporation — transferring all properties into the company simultaneously — maximises the annual tax saving from day one but concentrates all the transfer costs into a single year. This approach makes most sense where the portfolio has limited built-in gains (recently purchased properties), high leverage (large Section 24 cost), and a long planned holding period.</P>
                <P>Partial incorporation — transferring only those properties with the smallest gains, or those with the highest leverage relative to gain — allows the landlord to capture the most cost-effective portion of the saving while deferring or avoiding the transfer costs on high-gain properties. The hybrid strategy (existing properties held personally, new acquisitions in the company) is another form of partial incorporation that avoids transfer costs entirely on future acquisitions.</P>
                <P>The right approach depends on your specific portfolio composition. A specialist will map each property — its gain, its LTV, its annual mortgage interest cost — and model the economics of each approach before making a recommendation.</P>

                <H2 id="future-acquisitions">Future acquisitions in the company</H2>
                <P>For landlords who are still in portfolio-building mode, one of the most impactful decisions they can make is to acquire future properties through an SPV from the outset — even if they do not transfer existing properties. A new acquisition made through the company costs the same in SDLT as a personal acquisition (since the 3% surcharge applies in both cases), but the ongoing tax treatment is dramatically better for higher-rate taxpayers.</P>
                <P>Establishing an SPV before the next acquisition costs relatively little: the company formation fee is under £50, and the time involved for a specialist is modest. The benefit — full mortgage interest deductibility for the life of the property — begins immediately. For a landlord planning three or four further acquisitions over the next five years, this decision alone can save tens of thousands in tax compared to continuing to acquire in personal name.</P>

                <H2 id="setting-up-correctly">Setting up the SPV correctly from day one</H2>
                <P>The company must be set up with the correct SIC code for BTL mortgage lenders to accept it. The share structure matters: a simple single-class share structure works for sole investors, but where multiple family members are involved, a carefully designed alphabet share structure can facilitate tax-efficient income distribution. The director and shareholder arrangements must be consistent with the intended ownership structure and succession plan.</P>
                <P>The company name, registered address, and articles of association are all standard items that an accountant will handle. More important is the relationship between the SPV and any existing company or property business structure you operate — ensuring there is no inadvertent grouping that creates complications for mortgage lending or VAT.</P>

                <div id="calculator" className="scroll-mt-24 my-12 p-8 border border-[#e8e4de]">
                  <p className="eyebrow mb-3">Run the numbers</p>
                  <h2 className="font-display text-h2 text-text mb-4 leading-tight">SPV vs personal tax calculator</h2>
                  <p className="font-sans text-[15px] text-text-muted mb-8">Compare your annual tax in personal name against an SPV, and estimate the transfer cost breakeven.</p>
                  <SPVCalculator onOpenModal={() => setModalOpen(true)} />
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
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">Ready to run the real numbers?</h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Our Harrow specialists will model the full SPV economics for your specific portfolio — SDLT, CGT, annual saving, and breakeven — free, within 48 hours.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>
                Find My SPV Specialist — Free
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
