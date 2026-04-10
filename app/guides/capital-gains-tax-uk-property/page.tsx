'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CGTCalculator from '@/components/CGTCalculator'

const TOC = [
  { id: 'what-is-cgt',              label: 'What is CGT on property?' },
  { id: 'cgt-rates-2026',           label: 'CGT rates for 2025/26' },
  { id: 'annual-exempt-amount',     label: 'Annual Exempt Amount' },
  { id: 'private-residence-relief', label: 'Private Residence Relief' },
  { id: 'lettings-relief',          label: 'Lettings relief' },
  { id: 'the-60-day-rule',          label: 'The 60-day reporting rule' },
  { id: 'disposal-timing',          label: 'Disposal timing strategies' },
  { id: 'spousal-transfers',        label: 'Spousal transfers' },
  { id: 'holdover-relief',          label: 'Holdover and rollover relief' },
  { id: 'calculator',               label: 'CGT calculator' },
  { id: 'non-residents',            label: 'Non-resident landlords' },
  { id: 'faqs',                     label: 'FAQs' },
]

const faqs = [
  {
    q: 'Do I have to pay CGT if I sell my only buy-to-let property?',
    a: 'Yes, if the property has increased in value since you purchased it. CGT is payable on the gain — the difference between the sale price and the purchase price, after allowable costs and any applicable reliefs. If you previously lived in the property as your main home, Private Residence Relief may substantially reduce or eliminate the gain. The Annual Exempt Amount (£3,000 for 2025/26) can further reduce the taxable amount.',
  },
  {
    q: 'What CGT rate will I pay on a residential property disposal?',
    a: 'From 30 October 2024, CGT on UK residential property is charged at 18% for gains falling within the basic rate band and 24% for gains in the higher or additional rate band. The rate depends on your total income and the size of the gain in the tax year of disposal. If the gain pushes you from basic into higher rate, a blended rate applies to the portion in each band.',
  },
  {
    q: 'How long do I have to report and pay CGT after selling a property?',
    a: 'You must report and pay any CGT due within 60 days of the completion date — not the exchange date. This applies regardless of whether any tax is actually payable. Missing the 60-day deadline results in an automatic £100 penalty, rising to £300 after six months. The disposal must also be included in your annual self-assessment return.',
  },
  {
    q: 'Can my spouse or civil partner reduce my CGT bill?',
    a: 'Yes. Transfers between spouses and civil partners living together are exempt from CGT — the recipient takes the asset at the transferor\'s original base cost. By transferring a share of a property to a lower-rate taxpaying spouse before disposal, you can use both Annual Exempt Amounts and potentially apply two different CGT rates. The transfer must be genuine, completed before exchange, and reflected in the actual ownership structure.',
  },
  {
    q: 'Does Private Residence Relief apply if I only lived in the property briefly?',
    a: 'Yes — PRR is available for any period of genuine occupation as a main residence, however short. Even one year of occupation can create a substantial PRR exemption when the final 9 months of ownership (which are always exempt) is added. The relief is calculated as: (qualifying period ÷ total ownership period) × total gain. A specialist will review the full occupation history before any disposal is agreed.',
  },
  {
    q: 'What allowable costs can I deduct from my CGT calculation?',
    a: 'Allowable deductions include the original purchase price, Stamp Duty Land Tax paid on acquisition, legal and professional fees on purchase and sale, estate agent fees on sale, the cost of capital improvements (extensions, conversions — not repairs), and the cost of establishing or defending legal title. Revenue expenses such as mortgage interest, letting agent fees, and repairs cannot be deducted from the CGT calculation.',
  },
]

export default function CGTGuidePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Complete Guide to Capital Gains Tax (CGT) on UK Property',
    description: 'A comprehensive guide to Capital Gains Tax on UK residential property — rates, Private Residence Relief, the 60-day rule, spousal transfers, and legal strategies to minimise your CGT bill.',
    datePublished: '2025-02-01',
    dateModified: '2026-01-15',
    author: { '@type': 'Organization', name: 'Property Accountants Harrow', url: 'https://www.propertyaccountantsharrow.co.uk' },
    publisher: { '@type': 'Organization', name: 'Property Accountants Harrow' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertyaccountantsharrow.co.uk/guides/capital-gains-tax-uk-property/' },
    citation: [
      { '@type': 'WebPage', name: 'HMRC: Capital Gains Tax rates', url: 'https://www.gov.uk/capital-gains-tax/rates' },
      { '@type': 'WebPage', name: 'HMRC: Tax when you sell your home', url: 'https://www.gov.uk/tax-sell-home' },
      { '@type': 'WebPage', name: 'HMRC: Report and pay CGT on property', url: 'https://www.gov.uk/report-and-pay-your-capital-gains-tax' },
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
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="CGT Guide" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero */}
        <section style={{ background: 'var(--green-deep)' }} className="py-16 md:py-20">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'CGT on UK Property' }]} />
            <div className="max-w-2xl">
              <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 mb-6"
                style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                The Wealth Preservation Guide — Updated January 2026
              </span>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                The Complete Guide to Capital Gains Tax on UK Property
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                How to legally minimise your CGT bill when selling a UK buy-to-let property. Rates, reliefs, the 60-day rule, and strategies — with citations to official HMRC guidance.
              </p>
              <div className="flex items-center gap-6 font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span>Property Accountants Harrow</span>
                <span>&middot;</span>
                <span>Updated: January 2026</span>
                <span>&middot;</span>
                <span>~18 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
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
                  Get CGT Advice — Free
                </button>

                {/* HMRC Citations box */}
                <div className="mt-6 p-4 border border-[#e8f0e8]" style={{ background: 'var(--green-soft)' }}>
                  <p className="eyebrow mb-3 text-[9px]">Official HMRC Sources</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: 'CGT Rates', url: 'https://www.gov.uk/capital-gains-tax/rates' },
                      { label: 'Tax When Selling Home', url: 'https://www.gov.uk/tax-sell-home' },
                      { label: 'Report & Pay CGT', url: 'https://www.gov.uk/report-and-pay-your-capital-gains-tax' },
                      { label: 'HMRC CG Manual', url: 'https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual' },
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

                <H2 id="what-is-cgt">What is Capital Gains Tax on property?</H2>
                <P>Capital Gains Tax (CGT) is a tax on the profit — the &lsquo;gain&rsquo; — made when you dispose of an asset that has increased in value. For UK property investors, CGT applies whenever a residential investment property is sold, gifted, or otherwise disposed of at a value higher than its original acquisition cost.
                  <Cite url="https://www.gov.uk/capital-gains-tax" label="HMRC: CGT overview" />
                </P>
                <P>CGT is not charged on your entire sale proceeds. It is charged only on the gain — calculated as the disposal proceeds minus the original purchase price, minus allowable acquisition and disposal costs, minus any reliefs to which you are entitled. Only the net taxable gain, after applying the Annual Exempt Amount, is subject to tax.</P>
                <P>CGT on UK residential property is separate from CGT on other assets. Different rates apply, different reporting deadlines apply, and specific reliefs — most notably Private Residence Relief — are available only on residential property. Getting this right requires specialist knowledge.</P>

                <H2 id="cgt-rates-2026">CGT rates for residential property in 2025/26</H2>
                <P>From 30 October 2024, the CGT rates for UK residential property were reduced:
                  <Cite url="https://www.gov.uk/capital-gains-tax/rates" label="HMRC: CGT rates" />
                </P>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full font-sans text-[14px] border-collapse">
                    <thead>
                      <tr style={{ background: 'var(--green-deep)' }}>
                        <th className="text-left py-3 px-4 text-white text-[12px] font-semibold">Taxpayer</th>
                        <th className="text-left py-3 px-4 text-white text-[12px] font-semibold">Previous rate (to Oct 2024)</th>
                        <th className="text-left py-3 px-4 text-white text-[12px] font-semibold">Current rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#f0eee8]">
                        <td className="py-3 px-4 text-text font-medium">Basic rate taxpayer</td>
                        <td className="py-3 px-4 text-text-muted">18%</td>
                        <td className="py-3 px-4 font-semibold" style={{ color: 'var(--green)' }}>18%</td>
                      </tr>
                      <tr className="border-b border-[#f0eee8] bg-[#fafaf8]">
                        <td className="py-3 px-4 text-text font-medium">Higher / additional rate taxpayer</td>
                        <td className="py-3 px-4 text-text-muted">28%</td>
                        <td className="py-3 px-4 font-semibold" style={{ color: 'var(--green)' }}>24%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <P>The applicable rate depends on your total taxable income in the year of disposal. Where a gain straddles the basic and higher rate threshold, the portion within the basic rate band is taxed at 18% and the remainder at 24%. A specialist models your disposal-year income before advising on timing.</P>

                <H2 id="annual-exempt-amount">The Annual Exempt Amount (AEA)</H2>
                <P>Every UK individual has an Annual Exempt Amount — a CGT-free allowance each tax year. For 2025/26, the AEA is £3,000.
                  <Cite url="https://www.gov.uk/capital-gains-tax/allowances" label="HMRC: CGT allowances" />
                </P>
                <P>The AEA was £12,300 as recently as 2022/23. The subsequent reductions to £6,000 (2023/24) and then £3,000 (2024/25 onwards) have significantly increased the CGT liability for many landlords on disposal. For jointly owned properties, each owner has their own AEA — making joint ownership structurally advantageous for CGT purposes.</P>
                <P>Strategic use of the AEA includes: disposing of assets in different tax years to use each year&apos;s exemption; using a spouse&apos;s unused exemption via an inter-spousal transfer before disposal; and ensuring the AEA is applied against residential property gains (taxed at 18%/24%) before other gains taxed at lower rates.</P>

                <H2 id="private-residence-relief">Private Residence Relief (PRR)</H2>
                <P>Private Residence Relief is the most valuable CGT relief available to UK property investors who have at any point lived in the property as their main home.
                  <Cite url="https://www.gov.uk/tax-sell-home" label="HMRC: PRR guidance" />
                </P>
                <P>PRR exempts the gain attributable to any period when the property was the owner&apos;s main residence — plus, automatically, the final 9 months of ownership (reduced from 18 months in April 2020 for most landlords). The relief is calculated as:</P>
                <div className="p-5 border-l-4 bg-[#fafaf8] mb-6 font-sans text-[14px] text-text-muted" style={{ borderColor: 'var(--green)' }}>
                  <strong className="text-text">PRR Relief = (Qualifying period ÷ Total ownership period) × Total gain</strong>
                </div>
                <H3>Election between residences</H3>
                <P>Where an individual owns more than one property and occupies both, they can elect which property is treated as their main residence for PRR purposes.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg64485" label="HMRC CG64485" />
                  The election must be made within 2 years of acquiring a second home. Careful use of this election — switching between properties at the right time — can significantly increase the total PRR available across a portfolio.</P>
                <H3>Periods of absence</H3>
                <P>Certain periods of absence from the property can still qualify for PRR, provided the property was the main residence at some point and the owner returns to it afterwards. Qualifying absences include: any period of absence up to 3 years (for any reason); absence due to working away from home in the UK (any duration); and absence due to working abroad (any duration). Each absence rule has specific conditions — a specialist will review whether they apply in your circumstances.</P>

                <H2 id="lettings-relief">Lettings relief</H2>
                <P>Lettings relief provides an additional CGT exemption of up to £40,000 per owner — but only where PRR is also available on the same property. Since April 2020, lettings relief applies only where the owner was in shared occupancy with the tenant during the letting period.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg64717" label="HMRC CG64717" />
                </P>
                <P>This restriction substantially reduced the value of lettings relief for most buy-to-let investors, as very few live in the same property as their tenants. For houses in multiple occupation where the landlord occupies one room, or for granny annexe situations, lettings relief may still be available and should be reviewed before disposal.</P>

                <H2 id="the-60-day-rule">The 60-day CGT reporting rule</H2>
                <P>Since April 2020, UK residents disposing of UK residential property must report and pay any CGT due within 60 days of the completion date — not the exchange date, not the end of the tax year.
                  <Cite url="https://www.gov.uk/report-and-pay-your-capital-gains-tax" label="HMRC: Report and pay CGT" />
                </P>
                <P>This reporting obligation applies even where no tax is payable — for example, where the gain is fully covered by PRR or the AEA. The 60-day return is a separate submission to HMRC&apos;s online property disposal service, distinct from the annual self-assessment return (which must also include the disposal).</P>
                <P>Penalties for late reporting begin at £100 and increase to £300 after 6 months, with further daily penalties possible after 12 months. Interest accrues on any unpaid tax from day 61. A specialist manages the 60-day return as part of the disposal process — not as an afterthought.</P>

                <H2 id="disposal-timing">Disposal timing strategies</H2>
                <P>The tax year in which a disposal completes affects the CGT calculation in two ways: the applicable AEA, and the applicable rates (based on your total income that year). Careful timing can make a material difference.</P>
                <H3>Straddling a tax year</H3>
                <P>Exchanging before 5 April but completing after 6 April means the disposal is treated as occurring in the later tax year — the completion date determines the tax year for CGT purposes. This can be valuable where your income is lower in the following year, or where you have not yet used your AEA.</P>
                <H3>Staging a portfolio disposal</H3>
                <P>Where a landlord plans to sell multiple properties, spreading disposals across different tax years uses multiple annual exempt amounts and can keep gains within the basic rate band in each year. The saving depends on the individual&apos;s income profile and the size of the gains on each property.</P>
                <H3>Pre-sale improvements</H3>
                <P>Capital expenditure incurred to improve a property — not merely maintain it — is deductible from the CGT gain. A loft conversion, extension, or new kitchen (where it genuinely enhances the property beyond its original state) can reduce the gain pound-for-pound.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg15180" label="HMRC CG15180: Enhancement expenditure" />
                </P>

                <H2 id="spousal-transfers">Spousal transfers and CGT planning</H2>
                <P>Transfers between spouses and civil partners who are living together are exempt from CGT — the recipient takes the asset at the transferor&apos;s original acquisition cost (the &ldquo;no gain, no loss&rdquo; rule).
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg22040" label="HMRC CG22040" />
                </P>
                <P>This creates a planning opportunity: by transferring a share of a property to a lower-rate taxpaying spouse before disposal, the gain can be split between two individuals — each using their own AEA (£3,000 each = £6,000 combined) and potentially applying lower CGT rates on the lower-rate spouse&apos;s share. The transfer must be genuine, completed before exchange, and reflected in the actual title and beneficial ownership.</P>
                <P>HMRC scrutinises pre-disposal spousal transfers where the timing is clearly motivated by tax avoidance. A specialist structures the transfer correctly and ensures the documentation reflects the genuine position.</P>

                <H2 id="holdover-relief">Holdover and rollover relief on property</H2>
                <P>Business Asset Rollover Relief allows CGT on the disposal of a qualifying business asset to be deferred where the proceeds are reinvested in a new qualifying asset.
                  <Cite url="https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg60250" label="HMRC CG60250: Rollover relief" />
                  Residential investment property generally does not qualify as a business asset for rollover relief purposes — HMRC treats standard buy-to-let as investment activity rather than a trading business.</P>
                <P>Gift relief (holdover relief) allows the gain on a gift of a business asset to be held over so that the recipient takes the asset at the donor&apos;s original base cost. Again, residential investment property usually does not qualify. Gift relief is available on agricultural property and certain trading business assets — a specialist will advise whether your specific asset qualifies.</P>

                {/* Calculator */}
                <div id="calculator" className="scroll-mt-24 my-10 p-6 md:p-8 border border-[#e8e4de]">
                  <p className="eyebrow mb-3">Try it yourself</p>
                  <h2 className="font-display text-[1.8rem] md:text-h2 text-text mb-4 leading-tight">Calculate your CGT liability</h2>
                  <p className="font-sans text-[15px] text-text-muted mb-8">
                    Estimate your Capital Gains Tax on a UK residential property disposal — including PRR, lettings relief, and the Annual Exempt Amount.
                  </p>
                  <CGTCalculator onOpenModal={() => setModalOpen(true)} />
                </div>

                <H2 id="non-residents">CGT for non-resident landlords</H2>
                <P>Non-UK residents disposing of UK residential property have been subject to CGT since 6 April 2015 under the Non-Resident Capital Gains Tax (NRCGT) regime.
                  <Cite url="https://www.gov.uk/guidance/capital-gains-tax-for-non-residents-uk-residential-property" label="HMRC: NRCGT guidance" />
                </P>
                <P>For properties acquired before April 2015, only the gain accruing from that date is subject to UK CGT — the &ldquo;rebasing&rdquo; date. Non-residents must report disposals within 60 days of completion (the same rule as UK residents) and calculate the gain using the April 2015 market value as the base cost (unless they elect for a time-apportionment basis or the full gain basis).</P>
                <P>The interaction between UK CGT and any overseas tax on the same gain must be managed carefully. Most countries with significant UK expat populations have double tax treaties with the UK that allow UK tax paid to be credited against the overseas liability. The treaty must be correctly invoked on both returns.</P>

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

                {/* Disclaimer */}
                <div className="mt-10 p-5 bg-[#fafaf8] border border-[#f0eee8] font-sans text-[12px] text-text-faint leading-relaxed">
                  <strong className="text-text-muted">Disclaimer:</strong> This guide is for general information purposes only and does not constitute tax advice. CGT rules are complex and depend on individual circumstances. Always consult a qualified ACCA or ICAEW certified accountant before making decisions based on this content. All figures refer to UK legislation as of January 2026 and are subject to change.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--green)' }} className="py-16 md:py-20">
          <div className="site-container text-center">
            <h2 className="font-display text-[1.8rem] md:text-h2 text-white mb-4 leading-tight">
              Get a CGT Mitigation Consultation — Free
            </h2>
            <p className="font-sans text-[16px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Our Harrow specialists review PRR eligibility, spousal transfer strategy, and disposal timing — before you exchange, not after.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer" style={{ background: 'white', color: 'var(--green)' }}>
                Find My CGT Specialist — Free
              </button>
              <Link href="/services/capital-gains-tax-planning/" className="font-sans text-[14px] font-medium no-underline flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
                CGT planning service &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
