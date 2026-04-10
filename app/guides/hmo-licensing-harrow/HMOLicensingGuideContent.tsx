'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'

const TOC = [
  { id: 'what-is-an-hmo',              label: 'What is an HMO?' },
  { id: 'mandatory-licensing',         label: 'Mandatory HMO licensing' },
  { id: 'additional-licensing-harrow', label: 'Additional licensing in Harrow' },
  { id: 'application-process',         label: 'The application process' },
  { id: 'licence-conditions',          label: 'Licence conditions explained' },
  { id: 'minimum-room-sizes',          label: 'Minimum room sizes' },
  { id: 'fire-safety-requirements',    label: 'Fire safety requirements' },
  { id: 'penalties-enforcement',       label: 'Penalties and enforcement' },
  { id: 'rent-repayment-orders',       label: 'Rent repayment orders' },
  { id: 'managing-a-licensed-hmo',     label: 'Managing a licensed HMO' },
  { id: 'faqs',                        label: 'FAQs' },
]

export default function HMOLicensingGuideContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openFaq, setOpenFaq]     = useState<number | null>(null)

  const faqs = [
    { q: 'How long does an HMO licence last in Harrow?', a: 'An HMO licence in Harrow is typically granted for a maximum of five years. However, the council may issue a shorter licence if there are concerns about the property or the landlord\'s management track record. You must apply for renewal before the existing licence expires to avoid operating unlicensed.' },
    { q: 'Can I be fined if I did not know my property needed a licence?', a: 'Yes. Ignorance of the licensing requirement is not a defence. The council can prosecute or issue a civil penalty regardless of whether you were aware that a licence was needed. The onus is on the landlord to determine whether their property falls within the licensing criteria before letting it.' },
    { q: 'Does an HMO licence transfer if I sell the property?', a: 'No. An HMO licence is granted to a specific licence holder for a specific property. If the property is sold, the new owner must apply for their own licence. The existing licence cannot be transferred and becomes invalid upon change of ownership.' },
    { q: 'What happens if my licence application is refused?', a: 'If Harrow Council refuses your application, you will receive written reasons and have the right to appeal to the First-tier Tribunal (Property Chamber) within 28 days. During the appeal period, the property should not be occupied as an HMO unless the tribunal grants interim permission.' },
    { q: 'Do I need planning permission as well as an HMO licence?', a: 'Potentially, yes. Converting a dwelling house (C3 use class) to a large HMO (sui generis, typically seven or more occupants) requires planning permission. Smaller HMOs of three to six occupants fall within use class C4, and in Harrow an Article 4 direction means you also need planning permission for this change of use. The HMO licence and planning permission are separate legal requirements.' },
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
        headline: 'HMO Licensing in Harrow: Complete Landlord Guide (2026)',
        description: 'A comprehensive guide to HMO licensing in Harrow covering mandatory and additional licensing, application process, licence conditions, room sizes, fire safety, penalties, and rent repayment orders.',
        datePublished: '2026-01-10',
        dateModified: '2026-04-01',
        author: { '@type': 'Organization', name: 'Property Management Harrow', url: 'https://www.propertymanagementharrow.co.uk' },
        publisher: { '@type': 'Organization', name: 'Property Management Harrow' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.propertymanagementharrow.co.uk/guides/hmo-licensing-harrow/' },
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="HMO Licensing Guide" />
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img src="/images/hero-services.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'HMO Licensing Harrow' }]} />
            <div className="max-w-2xl">
              <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 mb-6" style={{ background: 'rgba(39,118,73,0.25)', color: 'var(--green-mid)' }}>
                Definitive Guide — Updated April 2026
              </span>
              <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
                HMO Licensing in Harrow: Complete Landlord Guide (2026)
              </h1>
              <p className="font-sans text-[17px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Everything Harrow landlords need to know about mandatory and additional HMO licensing — the application process, licence conditions, minimum room sizes, fire safety, penalties, and rent repayment orders.
              </p>
              <div className="flex items-center gap-6 font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span>By Property Management Harrow</span>
                <span>&middot;</span>
                <span>Updated: April 2026</span>
                <span>&middot;</span>
                <span>~18 min read</span>
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

                <H2 id="what-is-an-hmo">What is an HMO?</H2>
                <P>A House in Multiple Occupation (HMO) is a property occupied by three or more people who form two or more separate households and share facilities such as a kitchen, bathroom, or toilet. The definition is set out in Part 7, sections 254 to 260 of the Housing Act 2004, and it captures a wide range of property configurations — from traditional shared houses to bedsit conversions and purpose-built student accommodation.</P>
                <P>The key legal test is the household test. Two people living together as a couple, or members of the same family, constitute a single household. Three unrelated individuals each renting a room in the same property constitute three separate households — making the property an HMO even if they share a single tenancy agreement. This distinction is critical because many landlords do not realise their property qualifies as an HMO until enforcement action is taken.</P>
                <P>In Harrow, the HMO stock includes a significant number of converted Victorian and Edwardian family homes, particularly in areas such as Wealdstone, Harrow town centre, and South Harrow. These properties are often divided into bedsits or studio rooms with shared kitchen and bathroom facilities, and almost all will require some form of HMO licence.</P>

                <H2 id="mandatory-licensing">Mandatory HMO licensing</H2>
                <P>Since October 2018, mandatory HMO licensing applies to any property occupied by five or more people forming two or more separate households, regardless of the number of storeys. Before this date, the mandatory scheme only applied to HMOs of three or more storeys — the 2018 extension significantly widened the scope and brought many more Harrow properties into the licensing net.</P>
                <P>The mandatory licensing regime is a national requirement under Part 2 of the Housing Act 2004. Every local authority in England must operate it, and Harrow Council has no discretion to exempt properties that fall within the criteria. If your property meets the threshold, you must hold a licence — there is no grace period and no exemption for landlords who were previously unaware of the requirement.</P>
                <H3>Properties that require a mandatory licence</H3>
                <P>A mandatory HMO licence is required where the property is occupied by five or more persons who form two or more separate households and who share one or more basic amenities (toilet, bathroom, kitchen, or cooking facilities). This applies to houses, flats, converted buildings, and purpose-built accommodation. The test is based on actual occupation, not the number of tenancy agreements in place.</P>
                <P>Self-contained flats within a purpose-built block of three or more self-contained flats are exempt from mandatory licensing, though the block itself may be subject to separate regulatory requirements. Buildings managed by registered social landlords, educational establishments, and religious communities may also be exempt in specific circumstances.</P>

                <H2 id="additional-licensing-harrow">Additional licensing in Harrow</H2>
                <P>In addition to the mandatory national scheme, the London Borough of Harrow operates an additional licensing scheme that captures HMOs not covered by the mandatory criteria. This means HMOs occupied by three or four people from two or more households also require a licence in Harrow, regardless of the number of storeys.</P>
                <P>The additional licensing scheme was introduced because the council identified a significant number of smaller HMOs across the borough that were poorly managed and presented health and safety risks to tenants. The scheme is renewed periodically and landlords should check the council website for the current designation period and any changes to the geographic coverage.</P>
                <H3>What this means in practice</H3>
                <P>The combined effect of mandatory and additional licensing in Harrow is that virtually every shared property in the borough requires an HMO licence. If you let a property to three or more unrelated tenants who share any facilities, you almost certainly need a licence. The only common exceptions are properties where all occupants form a single household (for example, a family) or purpose-built self-contained flats in blocks of three or more.</P>

                <H2 id="application-process">The application process</H2>
                <P>HMO licence applications in Harrow are submitted online through the council&apos;s licensing portal. The process requires the proposed licence holder — typically the landlord or their managing agent — to provide detailed information about the property, the occupants, and the management arrangements.</P>
                <H3>Information you will need</H3>
                <P>The application form requires the full address and description of the property, the number of storeys, rooms, and maximum occupancy proposed. You must provide details of all amenity facilities (kitchens, bathrooms, toilets) including their dimensions and specifications. The names and contact details of the property owner, managing agent, and any other person involved in the management of the property must be disclosed.</P>
                <P>You will also need to provide a floor plan showing room dimensions, the location of fire detection equipment, escape routes, and amenity facilities. Gas safety certificates, electrical installation condition reports (EICR), energy performance certificates (EPC), and fire risk assessments must be submitted with the application or within a specified period after submission.</P>
                <H3>The fit and proper person test</H3>
                <P>The proposed licence holder and any manager must satisfy the fit and proper person test. The council will check for any relevant criminal convictions, previous licensing offences, contraventions of housing law, and evidence of discrimination in connection with the management of housing. A history of non-compliance — including previous licence refusals or revocations — will be taken into account and may result in the application being refused.</P>
                <H3>Licence fees</H3>
                <P>Harrow Council charges a fee for processing HMO licence applications. The fee typically has two parts: a first payment on application and a second payment on the grant of the licence. Fees vary depending on the size of the HMO and whether it is a new application or a renewal. As of 2026, application fees in Harrow range from approximately 600 to over 1,200 pounds depending on the property size and type. Landlords should check the current fee schedule on the council website as fees are reviewed periodically.</P>

                <H2 id="licence-conditions">Licence conditions explained</H2>
                <P>Every HMO licence comes with a set of conditions that the licence holder must comply with throughout the licence period. These are divided into mandatory conditions (set by statute and included on every licence) and discretionary conditions (imposed by the council based on the specific property).</P>
                <H3>Mandatory conditions</H3>
                <P>The mandatory licence conditions include: providing a current gas safety certificate annually and to the council on demand; keeping electrical appliances and furniture supplied by the landlord in a safe condition; ensuring smoke alarms are installed on each storey and kept in working order; ensuring carbon monoxide alarms are installed in rooms with a solid fuel burning appliance; and supplying each tenant with a written statement of the terms of their occupation.</P>
                <H3>Discretionary conditions</H3>
                <P>Harrow Council typically imposes additional conditions covering the frequency of property inspections, the standard of decoration and maintenance, waste disposal arrangements, the provision of adequate heating and hot water, and restrictions on maximum occupancy for each room. Some licences include conditions requiring specific fire safety measures — such as fire doors, emergency lighting, or a fire blanket in the kitchen — depending on the layout and risk assessment of the property.</P>
                <P>Breaching any licence condition is a criminal offence and can result in prosecution or a civil penalty of up to 30,000 pounds per offence. Persistent or serious breaches may also lead to revocation of the licence.</P>

                <H2 id="minimum-room-sizes">Minimum room sizes</H2>
                <P>The Housing Act 2004 (as amended) prescribes minimum sleeping room sizes for licensed HMOs. These are national standards that Harrow Council must enforce as a condition of every HMO licence.</P>
                <ul className="list-disc pl-6 mb-6 font-sans text-[16px] text-text-muted leading-relaxed space-y-2">
                  <li>A room used for sleeping by one person aged over 10 must be at least 6.51 square metres.</li>
                  <li>A room used for sleeping by two persons aged over 10 must be at least 10.22 square metres.</li>
                  <li>A room used for sleeping by one child aged under 10 must be at least 4.64 square metres.</li>
                </ul>
                <P>Any room that does not meet the applicable minimum size cannot be used as sleeping accommodation and must not be counted when determining the maximum occupancy of the HMO. The licence holder must not allow a room to be occupied for sleeping that falls below these thresholds — doing so is a breach of licence conditions.</P>
                <P>Harrow Council may also impose additional space standards for kitchens and living areas based on the number of occupants. A kitchen serving five occupants, for example, will typically need to be larger and contain more cooking appliances, sinks, and food storage than a kitchen serving three. The council will assess amenity provision against their published standards during the application process.</P>

                <H2 id="fire-safety-requirements">Fire safety requirements</H2>
                <P>Fire safety is one of the most scrutinised aspects of HMO licensing. The Regulatory Reform (Fire Safety) Order 2005 applies to the common parts of all HMOs, and the licence conditions will typically require additional fire precautions based on the specific risk profile of the property.</P>
                <H3>Fire detection and alarm systems</H3>
                <P>All HMOs require a fire detection and alarm system. The minimum standard for most licensed HMOs is an LD2 category system as defined by BS 5839-6, which provides detection in escape routes, kitchens, and the rooms that open onto escape routes. Larger or higher-risk HMOs may require an LD1 system, which provides detection in all rooms including bedrooms.</P>
                <P>Smoke alarms must be installed on every storey of the property. In kitchens, heat detectors are used instead of smoke detectors to reduce false alarms. The entire system must be interlinked so that activation of any detector triggers all alarms throughout the property simultaneously.</P>
                <H3>Escape routes and fire doors</H3>
                <P>All HMOs must have a clear and unobstructed escape route from every room to a final exit. In most two-storey HMOs, this means ensuring the hallway and staircase are kept clear of obstructions and that fire-resisting doors (typically FD30 rated, providing 30 minutes of fire resistance) are fitted to all habitable rooms and kitchens that open onto the escape route.</P>
                <P>For HMOs of three or more storeys, or where the layout creates a higher risk (such as inner rooms accessible only through another room), additional measures may be required. These can include protected escape routes with upgraded fire resistance, emergency lighting, and in some cases, external escape stairs or alternative exit routes.</P>
                <H3>Fire risk assessments</H3>
                <P>The responsible person (typically the landlord or managing agent) must carry out a fire risk assessment for the common parts of the HMO and review it regularly. The assessment must identify fire hazards, assess the risk to occupants, and set out the measures taken to mitigate those risks. It should be documented and made available to the council on request. Many Harrow landlords commission a specialist fire risk assessor to carry out this work, particularly for larger or more complex HMOs.</P>

                <H2 id="penalties-enforcement">Penalties and enforcement</H2>
                <P>Operating an HMO without the required licence is a criminal offence under section 72 of the Housing Act 2004. The penalties are significant and have been strengthened in recent years as councils have been given greater enforcement powers.</P>
                <H3>Criminal prosecution</H3>
                <P>On prosecution in the magistrates&apos; court, the maximum fine for operating an unlicensed HMO is unlimited. Landlords convicted of licensing offences may also find it more difficult to pass the fit and proper person test for future licence applications, creating a lasting impact on their ability to let HMO properties.</P>
                <H3>Civil penalties</H3>
                <P>As an alternative to prosecution, Harrow Council can impose a civil penalty of up to 30,000 pounds for operating an unlicensed HMO or breaching licence conditions. Civil penalties do not result in a criminal record but are recorded on a national database of rogue landlords and property agents. The council sets the penalty amount based on the severity of the offence, the landlord&apos;s track record, the harm caused or risked, and any financial benefit gained from non-compliance.</P>
                <H3>Management orders</H3>
                <P>In the most serious cases, the council can make an interim or final management order, taking over the management of the property entirely. This power is used where the council is satisfied that the landlord has failed to licence the property and there is no reasonable prospect of a licence being granted, or where the health and safety of occupants is at risk.</P>

                <H2 id="rent-repayment-orders">Rent repayment orders</H2>
                <P>One of the most significant financial risks for unlicensed HMO landlords is the rent repayment order (RRO). Under sections 40 to 45 of the Housing and Planning Act 2016, tenants (or the local authority, where housing benefit has been paid) can apply to the First-tier Tribunal for an order requiring the landlord to repay up to 12 months&apos; rent.</P>
                <P>The tribunal will consider the conduct of the landlord, their financial circumstances, and whether they have been convicted of a relevant offence. In practice, tribunals frequently award the full 12 months&apos; rent, particularly where the landlord was aware of the licensing requirement and chose not to comply.</P>
                <H3>The financial exposure</H3>
                <P>For a five-bedroom HMO in Harrow generating 3,000 pounds per month in rent, a successful RRO could require the landlord to repay up to 36,000 pounds — on top of any civil penalty or prosecution fine. Where the property has been unlicensed for an extended period, there is nothing preventing multiple tenants from each making their own RRO application, and the council can make a separate application for any housing benefit paid during the unlicensed period.</P>
                <P>RROs also prevent landlords from serving valid Section 21 notices during the unlicensed period, meaning that eviction through the no-fault route is blocked until a licence is obtained and the prescribed information has been served.</P>

                <H2 id="managing-a-licensed-hmo">Managing a licensed HMO effectively</H2>
                <P>Holding a licence is only the starting point. Ongoing compliance requires active management — regular inspections, maintenance of safety systems, monitoring of occupancy levels, and prompt action when issues arise. Many Harrow landlords who self-manage their HMOs underestimate the time and expertise involved.</P>
                <P>A specialist HMO managing agent will handle licence renewals, schedule and document safety inspections, manage tenant turnover (which is typically higher in HMOs than in single-let properties), and ensure that the property continues to meet all licence conditions between inspections. They will also maintain the fire risk assessment, arrange annual gas safety checks, commission five-yearly EICRs, and keep records that satisfy the council&apos;s audit requirements.</P>
                <P>For Harrow landlords with one or more licensed HMOs, the cost of professional management is typically a fraction of the potential financial exposure from non-compliance. A single civil penalty or rent repayment order can exceed several years&apos; worth of management fees.</P>
                <div className="mt-6 mb-12">
                  <button onClick={() => setModalOpen(true)} className="btn-primary">
                    Find an HMO Management Specialist — Free
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
            <h2 className="font-display text-h2 text-white mb-4 leading-tight">Need help with HMO licensing in Harrow?</h2>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Our vetted HMO management specialists handle licensing applications, compliance, and ongoing management — so you stay legal and protected.
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
