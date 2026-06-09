// data/guides.ts
//
// Data-driven pillar hubs for /guides/[slug]. The first five hubs (H1-H5)
// migrate the previously hand-coded guide pages; H6-H10 are new. Each hub
// aligns to a /services pillar, links to a calculator where relevant, and
// renders a child-spoke grid (data/blog.ts, matched by `hub`). UK English,
// no em dashes, matching framing (we connect landlords with vetted ARLA
// Propertymark agents; we do not manage property). Current law cited:
// Renters' Rights, Tenant Fees Act 2019, Housing Act 2004, MEES, Section 24.

export interface GuideBlock {
  type: 'p' | 'h3' | 'list';
  text?: string;
  items?: string[];
}

export interface GuideSection {
  id: string;
  heading: string;
  blocks: GuideBlock[];
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeading: string;
  heroIntro: string;
  serviceSlug?: string;
  toolSlug?: string;
  relatedHubs: string[];
  sections: GuideSection[];
  faqs: GuideFAQ[];
  publishDate: string;
  updatedDate: string;
}

const PUBLISHED = '2026-02-01';
const REVIEWED = '2026-06-09';

export const guides: Guide[] = [
  // H1 -------------------------------------------------------------------
  {
    slug: 'switching-property-managers',
    title: 'How to Switch Property Managers Without Disrupting Your Tenants',
    metaTitle: 'How to Switch Property Managers Without Disrupting Your Tenants | Property Management Harrow',
    metaDescription: 'Step-by-step guide to switching property managers: reviewing agreements, serving notice, the handover process, tenant communication, and what to transfer to your new agent.',
    heroEyebrow: 'Choosing and switching',
    heroHeading: 'How to switch property managers without disrupting your tenants',
    heroIntro: 'Switching managing agent in Harrow is more straightforward than most landlords expect. This guide covers reviewing your agreement, serving notice correctly, the handover, and keeping the change invisible to your tenants.',
    serviceSlug: 'residential-lettings-management',
    relatedHubs: ['landlord-compliance-checklist', 'the-lettings-process-harrow'],
    sections: [
      { id: 'why-landlords-switch', heading: 'Why landlords switch property managers', blocks: [
        { type: 'p', text: `Landlords switch property managers for many reasons: poor communication, hidden fees, slow maintenance response, lack of transparency over income and expenditure, or simply outgrowing a generalist agent who cannot handle a growing portfolio. In Harrow, where the rental market is competitive and regulatory requirements are increasing, the quality of property management has a direct impact on rental income, void periods, and long-term asset value.` },
        { type: 'p', text: `Whatever the reason, switching is a straightforward process if handled correctly. The key is preparation: understanding your contractual obligations, planning the handover carefully, and communicating clearly with your tenants so that the transition is seamless from their perspective.` },
      ]},
      { id: 'reviewing-your-agreement', heading: 'Reviewing your management agreement', blocks: [
        { type: 'p', text: `Before doing anything else, read your existing management agreement in full. This is the contract between you and your current property manager, and it governs how the relationship can be ended. Pay particular attention to the notice period, any minimum term, early termination fees, handover obligations, and any commission tail clause.` },
        { type: 'list', items: [
          `The notice period required to terminate the agreement (typically one to three months).`,
          `Any minimum contract term or tie-in period during which you cannot terminate without penalty.`,
          `Early termination fees or exit charges.`,
          `Obligations regarding the handover of documents, keys, and funds.`,
          `Any clauses relating to ongoing commission on tenancies introduced by the outgoing agent.`,
        ]},
        { type: 'h3', text: 'Agreements without a written contract' },
        { type: 'p', text: `If you do not have a written management agreement, which is more common than it should be with smaller or informal agents, the default position is that either party can terminate on reasonable notice. One month is generally considered the minimum for a professional relationship of this kind.` },
      ]},
      { id: 'notice-periods-and-clauses', heading: 'Notice periods and key clauses', blocks: [
        { type: 'p', text: `The notice period is the most important practical consideration. Most management agreements require between one and three months' written notice, and some specify that notice can only be served on particular dates. Read the termination clause carefully and calculate the earliest date on which you can lawfully end the agreement.` },
        { type: 'h3', text: 'Commission tail clauses' },
        { type: 'p', text: `A commission tail clause entitles the outgoing agent to continue receiving their fee (or a reduced percentage) for a period after the agreement ends, in respect of tenancies they introduced. These clauses are common and can extend for six to twelve months after termination. Factor this cost into your decision, though in many cases the improved service from a new agent more than offsets the temporary double payment.` },
      ]},
      { id: 'serving-notice', heading: 'Serving notice on your current manager', blocks: [
        { type: 'p', text: `Once you have reviewed the agreement and confirmed the notice period, serve your notice in writing. Include the date of the notice, a reference to the termination clause, the date you expect the agreement to end, and a request for a handover meeting. Keep a copy and proof of delivery, and follow any specified method of service exactly.` },
      ]},
      { id: 'choosing-a-new-manager', heading: 'Choosing a new property manager', blocks: [
        { type: 'p', text: `Ideally, identify and select your new property manager before serving notice on the existing one, so there is no gap in management coverage. When selecting, consider their experience with your type of property, local knowledge of the Harrow market, fee structure and what is included, regulatory memberships (ARLA Propertymark, RICS), client money protection arrangements, and their approach to maintenance and tenant communication.` },
      ]},
      { id: 'the-handover-process', heading: 'The handover process', blocks: [
        { type: 'p', text: `The handover is the most critical phase. Start it at least two weeks before the termination date and coordinate it between you, the outgoing agent, and the incoming agent. The following should transfer from the outgoing agent:` },
        { type: 'list', items: [
          `All sets of keys (including communal area, meter cupboard, and window keys).`,
          `Original or certified copies of all tenancy agreements.`,
          `Deposit protection certificates and prescribed information records.`,
          `Current gas safety certificates, EICRs, and EPCs.`,
          `Inventory and schedule of condition reports.`,
          `Rent payment records and any outstanding arrears information.`,
          `Maintenance records, contractor details, and outstanding repair requests.`,
          `Any funds held on account (rent collected, maintenance float, reserve funds).`,
        ]},
      ]},
      { id: 'tenant-communication', heading: 'Communicating the change to tenants', blocks: [
        { type: 'p', text: `Notify your tenants in writing at least two weeks before the changeover. The notification should come from you, the landlord, not from either agent. Include confirmation that you are changing managing agent, the new agent's contact details, the date they take over, new bank details for rent if applicable, and reassurance that the tenancy agreement and deposit protection are unaffected.` },
      ]},
      { id: 'what-to-transfer', heading: 'Deposits, standing orders and accounts', blocks: [
        { type: 'p', text: `If the outgoing agent holds deposits in an insured scheme, these must be transferred or re-registered, and the new agent must serve fresh prescribed information on each tenant within 30 days. If deposits are in the custodial DPS scheme, the registration details must be updated. This is one of the most commonly overlooked steps and one of the most consequential given the penalties for non-compliance.` },
        { type: 'p', text: `Tenants will need to update standing orders to the new agent's client account; allow at least one full rent cycle for this to take effect. Utility and council tax accounts managed on the landlord's behalf will also need transferring or the providers notified.` },
      ]},
      { id: 'common-pitfalls', heading: 'Common pitfalls to avoid', blocks: [
        { type: 'p', text: `The most common mistakes are: serving notice incorrectly and having termination challenged; failing to coordinate the deposit transfer, breaching deposit protection requirements; not notifying tenants in advance; leaving a gap between agents during which maintenance goes unaddressed; and not obtaining all documents and keys before the relationship ends. Each is avoidable with careful planning and a structured handover.` },
      ]},
    ],
    faqs: [
      { question: 'Can I switch property managers mid-tenancy?', answer: `Yes. Switching property managers does not affect the tenancy agreement, which is between the landlord and the tenant. You can change your managing agent at any time, subject to the notice period in your management agreement. The tenancy continues uninterrupted; only the day-to-day management arrangements change.` },
      { question: 'Will my tenants need to sign anything when I switch?', answer: `Tenants do not need to sign a new tenancy agreement, but they should receive written confirmation of the change of managing agent, including the new agent's contact details, the new address for rent payments, and confirmation that their deposit protection is unaffected.` },
      { question: 'What happens to the deposit when I switch managers?', answer: `If the deposit is held in a custodial scheme such as the DPS, the registration details are updated to reflect the new managing agent. If it is held in an insured scheme, it must be transferred or re-registered, and the new agent must serve fresh prescribed information on the tenant within 30 days.` },
      { question: 'Can my current manager refuse to hand over documents?', answer: `No. Your managing agent has a professional and contractual obligation to hand over all documents, keys, and funds once the agreement has been properly terminated. If an agent refuses to cooperate, put your request in writing, set a clear deadline, and escalate to their professional body such as ARLA Propertymark or RICS if necessary.` },
      { question: 'How long does the entire switching process usually take?', answer: `From the decision to switch to full handover completion, the process typically takes between four and eight weeks, including the notice period, onboarding the new agent, coordinating the handover, and communicating the change to tenants. Starting the search before serving notice helps reduce the overall timeline.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H2 -------------------------------------------------------------------
  {
    slug: 'landlord-compliance-checklist',
    title: 'The Harrow Landlord Compliance Checklist',
    metaTitle: 'Landlord Compliance Checklist 2026 | Property Management Harrow',
    metaDescription: 'Every statutory obligation for Harrow landlords: gas safety, EICR, EPC and MEES, deposit protection, Right to Rent, alarms, Section 21 prerequisites, and the fitness standard.',
    heroEyebrow: 'Compliance and legal obligations',
    heroHeading: 'The landlord compliance checklist',
    heroIntro: 'Landlord compliance is a legal framework with real financial and criminal consequences. This checklist sets out every requirement before and during a tenancy in a single, actionable reference for Harrow landlords.',
    serviceSlug: 'residential-lettings-management',
    relatedHubs: ['hmo-licensing-harrow', 'repairs-maintenance-and-safety-certificates-harrow'],
    sections: [
      { id: 'why-compliance-matters', heading: 'Why compliance matters', blocks: [
        { type: 'p', text: `Landlord compliance is not optional. In England, a landlord who fails to meet their statutory obligations faces civil penalties of up to 30,000 pounds per offence, criminal prosecution with unlimited fines, rent repayment orders, and the inability to regain possession through the Section 21 no-fault route.` },
        { type: 'p', text: `For Harrow landlords the compliance burden has increased significantly since 2020, with mandatory electrical safety inspections, strengthened smoke and carbon monoxide alarm rules, and tighter Section 21 prerequisites. Each requirement exists because its absence has historically resulted in tenant injury or harm.` },
      ]},
      { id: 'gas-safety', heading: 'Gas safety certificates (CP12)', blocks: [
        { type: 'p', text: `Under the Gas Safety (Installation and Use) Regulations 1998, landlords must have all gas appliances, fittings, and flues checked annually by a Gas Safe registered engineer, who issues a Gas Safety Certificate (CP12). The certificate must be renewed every 12 months, provided to existing tenants within 28 days of the check and to new tenants before they move in, and retained for at least two years. A valid certificate is also a Section 21 prerequisite.` },
      ]},
      { id: 'electrical-safety', heading: 'Electrical safety (EICR)', blocks: [
        { type: 'p', text: `The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 require the electrical installation to be inspected and tested by a qualified electrician at least every five years. The resulting EICR must classify the installation as satisfactory or identify defects. Where a C1 or C2 defect is identified, remedial work must be completed within 28 days (or sooner if specified). A copy must be provided to tenants within 28 days of the inspection.` },
      ]},
      { id: 'energy-performance', heading: 'Energy Performance Certificates (EPC) and MEES', blocks: [
        { type: 'p', text: `Every rental property must have a valid EPC rated at least E before it can be let, under the Minimum Energy Efficiency Standards (MEES). An EPC is valid for ten years. Letting a property rated F or G without a registered exemption can result in a fine of up to 5,000 pounds. The government has consulted on raising the minimum to C for new tenancies, though implementation dates have moved.` },
        { type: 'h3', text: 'Exemptions' },
        { type: 'p', text: `Where all relevant improvements have been made, or their cost would exceed the 3,500 pound cap (including VAT), a temporary exemption can be registered on the PRS Exemptions Register. Exemptions last five years and must be re-registered if the property is still sub-standard.` },
      ]},
      { id: 'deposit-protection', heading: 'Deposit protection', blocks: [
        { type: 'p', text: `Any deposit taken for an assured shorthold tenancy must be protected in a government-approved scheme (DPS, MyDeposits, or TDS) within 30 days of receipt, and the prescribed information served within the same period. Failure prevents a valid Section 21 notice and exposes the landlord to a court penalty of between one and three times the deposit.` },
      ]},
      { id: 'right-to-rent', heading: 'Right to Rent checks', blocks: [
        { type: 'p', text: `Under the Immigration Act 2014, landlords in England must verify that all adult tenants have the right to rent before granting a tenancy. The check must be carried out no more than 28 days before the tenancy starts, with copies retained and the date recorded. Acceptable documents include a UK or EU passport, a biometric residence permit, or a Home Office share code.` },
        { type: 'p', text: `A landlord who fails to conduct proper checks faces a civil penalty of up to 3,000 pounds per tenant for a first offence and up to 10,000 pounds for a repeat offence. Knowingly renting to someone without the right to rent is a criminal offence carrying an unlimited fine and up to five years imprisonment.` },
      ]},
      { id: 'smoke-co-alarms', heading: 'Smoke and carbon monoxide alarms', blocks: [
        { type: 'p', text: `The Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022 require a smoke alarm on each storey with a room used as living accommodation, and a carbon monoxide alarm in any room with a fixed combustion appliance, which now includes gas boilers and gas fires. The alarms must be in working order at the start of each new tenancy. The penalty for non-compliance is up to 5,000 pounds.` },
      ]},
      { id: 'section-21-prerequisites', heading: 'Section 21 prerequisites', blocks: [
        { type: 'p', text: `A Section 21 notice can only be served if the landlord has met every prerequisite. Missing any single one invalidates the notice.` },
        { type: 'list', items: [
          `The deposit must be protected and the prescribed information served.`,
          `A valid Gas Safety Certificate must have been provided to the tenant.`,
          `A valid EICR must have been provided to the tenant.`,
          `A valid EPC must have been provided to the tenant.`,
          `The current How to Rent guide must have been provided at the start of the tenancy.`,
          `If the property is a licensable HMO, the licence must be in force.`,
          `No outstanding improvement or emergency remedial action notice against the property.`,
        ]},
      ]},
      { id: 'homes-fitness-standard', heading: 'Homes (Fitness for Human Habitation) Act 2018', blocks: [
        { type: 'p', text: `The Act requires landlords to ensure the property is fit for human habitation at the start of and throughout the tenancy, and lets tenants take the landlord to court directly if it is unfit. The fitness standard covers 29 HHSRS hazards including damp and mould, excess cold, and fire safety. For Harrow landlords, damp and mould in older properties and conversions are the most common cause of claims; proactive inspections and prompt maintenance are the best defence.` },
      ]},
    ],
    faqs: [
      { question: 'Can I serve a Section 21 notice if I have not protected the deposit?', answer: `No. Under section 215 of the Housing Act 2004 you cannot serve a valid Section 21 notice if the deposit has not been protected in a government-approved scheme and the prescribed information served. You must first protect the deposit and serve the prescribed information.` },
      { question: 'How often does an EICR need to be renewed?', answer: `An Electrical Installation Condition Report must be renewed at least every five years for rented properties, or sooner if the previous report recommends an earlier re-inspection. The requirement has applied to all existing tenancies since April 2021.` },
      { question: 'What is the minimum EPC rating for rental properties?', answer: `The current minimum EPC rating for rental properties in England and Wales is E. Properties rated F or G cannot be let unless a valid exemption is registered on the PRS Exemptions Register. The government has consulted on raising the minimum to C, though implementation dates have changed.` },
      { question: 'Do I need a gas safety certificate if the property has no gas supply?', answer: `No. A CP12 is only required where the property has a gas supply and gas appliances. If the property is entirely electric with no gas meter or appliances, the requirement does not apply, though it is worth documenting this for your records.` },
      { question: 'What happens if a tenant fails the Right to Rent check?', answer: `If a prospective tenant cannot demonstrate their right to rent, you must not grant them a tenancy. Renting to a person without the right to rent is a criminal offence carrying an unlimited fine and up to five years imprisonment for repeat offenders. Retain copies of the documents checked and record the date of the check.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H3 -------------------------------------------------------------------
  {
    slug: 'hmo-licensing-harrow',
    title: 'HMO Licensing in Harrow: The Complete Guide',
    metaTitle: 'HMO Licensing Harrow 2026: What Landlords Must Know | Property Management Harrow',
    metaDescription: 'HMO licensing in the London Borough of Harrow: mandatory and additional licensing, the application process, room sizes, fire safety, penalties, and rent repayment orders.',
    heroEyebrow: 'HMO licensing',
    heroHeading: 'HMO licensing in Harrow',
    heroIntro: 'Harrow operates both mandatory and additional HMO licensing, so almost every shared property in the borough needs a licence. This guide covers when a licence is required, the application, the conditions, and the cost of getting it wrong.',
    serviceSlug: 'hmo-management',
    relatedHubs: ['landlord-compliance-checklist', 'repairs-maintenance-and-safety-certificates-harrow'],
    sections: [
      { id: 'what-is-an-hmo', heading: 'What is an HMO?', blocks: [
        { type: 'p', text: `A House in Multiple Occupation (HMO) is a property occupied by three or more people forming two or more separate households who share facilities such as a kitchen, bathroom, or toilet. The definition is set out in Part 7 of the Housing Act 2004. The key legal test is the household test: three unrelated individuals each renting a room constitute three separate households, making the property an HMO even under a single tenancy agreement.` },
        { type: 'p', text: `In Harrow, the HMO stock includes many converted Victorian and Edwardian family homes, particularly in Wealdstone, Harrow town centre, and South Harrow. These are often divided into bedsits or studio rooms with shared facilities, and almost all require some form of HMO licence.` },
      ]},
      { id: 'mandatory-licensing', heading: 'Mandatory HMO licensing', blocks: [
        { type: 'p', text: `Since October 2018, mandatory HMO licensing applies to any property occupied by five or more people forming two or more separate households, regardless of the number of storeys. It is a national requirement under Part 2 of the Housing Act 2004, and Harrow Council has no discretion to exempt properties that fall within the criteria. There is no grace period and no exemption for landlords who were unaware.` },
      ]},
      { id: 'additional-licensing-harrow', heading: 'Additional licensing in Harrow', blocks: [
        { type: 'p', text: `In addition to the mandatory national scheme, the London Borough of Harrow operates an additional licensing scheme that captures HMOs occupied by three or four people from two or more households, regardless of storeys. The combined effect is that virtually every shared property in the borough requires an HMO licence. Check the council website for the current designation period and geographic coverage.` },
      ]},
      { id: 'application-process', heading: 'The application process', blocks: [
        { type: 'p', text: `Applications are submitted online through the council's licensing portal. You will need the full property description, number of storeys and rooms, proposed maximum occupancy, amenity facilities and their dimensions, the details of everyone involved in management, a floor plan showing fire detection and escape routes, and gas, electrical (EICR), energy (EPC), and fire risk assessment documents.` },
        { type: 'h3', text: 'The fit and proper person test' },
        { type: 'p', text: `The proposed licence holder and any manager must satisfy the fit and proper person test. The council checks for relevant criminal convictions, previous licensing offences, contraventions of housing law, and evidence of discrimination. A history of non-compliance may result in refusal.` },
        { type: 'h3', text: 'Licence fees' },
        { type: 'p', text: `Harrow Council charges a fee, typically in two parts (on application and on grant). As of 2026, fees range from approximately 600 to over 1,200 pounds depending on property size and whether it is a new application or renewal. Check the current fee schedule on the council website.` },
      ]},
      { id: 'minimum-room-sizes', heading: 'Minimum room sizes', blocks: [
        { type: 'p', text: `The Housing Act 2004 (as amended) prescribes minimum sleeping room sizes that Harrow Council enforces as a licence condition.` },
        { type: 'list', items: [
          `A room used for sleeping by one person aged over 10 must be at least 6.51 square metres.`,
          `A room used for sleeping by two persons aged over 10 must be at least 10.22 square metres.`,
          `A room used for sleeping by one child aged under 10 must be at least 4.64 square metres.`,
        ]},
        { type: 'p', text: `Any room below the applicable minimum cannot be used as sleeping accommodation and must not be counted in the maximum occupancy.` },
      ]},
      { id: 'fire-safety-requirements', heading: 'Fire safety requirements', blocks: [
        { type: 'p', text: `Fire safety is one of the most scrutinised aspects of HMO licensing. Most licensed HMOs require an interlinked fire detection and alarm system to at least LD2 standard (BS 5839-6), with heat detectors in kitchens, fire-resisting doors (typically FD30) on habitable rooms and kitchens opening onto the escape route, and a clear, unobstructed escape route from every room. The responsible person must carry out and review a fire risk assessment for the common parts.` },
      ]},
      { id: 'penalties-enforcement', heading: 'Penalties and enforcement', blocks: [
        { type: 'p', text: `Operating an HMO without the required licence is a criminal offence under section 72 of the Housing Act 2004. On prosecution the maximum fine is unlimited. As an alternative, Harrow Council can impose a civil penalty of up to 30,000 pounds per offence, recorded on the national database of rogue landlords. In the most serious cases the council can make a management order and take over the property.` },
      ]},
      { id: 'rent-repayment-orders', heading: 'Rent repayment orders', blocks: [
        { type: 'p', text: `Under the Housing and Planning Act 2016, tenants (or the local authority where housing benefit was paid) can apply to the First-tier Tribunal for a rent repayment order requiring the landlord to repay up to 12 months' rent. For a five-bedroom Harrow HMO generating 3,000 pounds per month, a successful order could require repaying up to 36,000 pounds, on top of any penalty or fine. RROs also block valid Section 21 notices during the unlicensed period.` },
      ]},
    ],
    faqs: [
      { question: 'How long does an HMO licence last in Harrow?', answer: `An HMO licence in Harrow is typically granted for a maximum of five years, though the council may issue a shorter licence where there are concerns about the property or the landlord's track record. Apply for renewal before the existing licence expires to avoid operating unlicensed.` },
      { question: 'Can I be fined if I did not know my property needed a licence?', answer: `Yes. Ignorance of the licensing requirement is not a defence. The council can prosecute or issue a civil penalty regardless of whether you were aware. The onus is on the landlord to determine whether the property falls within the licensing criteria before letting it.` },
      { question: 'Does an HMO licence transfer if I sell the property?', answer: `No. An HMO licence is granted to a specific licence holder for a specific property. If the property is sold, the new owner must apply for their own licence; the existing licence becomes invalid on change of ownership.` },
      { question: 'What happens if my licence application is refused?', answer: `You will receive written reasons and can appeal to the First-tier Tribunal (Property Chamber) within 28 days. During the appeal period the property should not be occupied as an HMO unless the tribunal grants interim permission.` },
      { question: 'Do I need planning permission as well as an HMO licence?', answer: `Potentially yes. Larger HMOs (typically seven or more occupants) need planning permission. Smaller HMOs of three to six occupants fall within use class C4, and in Harrow an Article 4 direction means you also need planning permission for that change of use. The licence and planning permission are separate requirements.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H4 -------------------------------------------------------------------
  {
    slug: 'tenant-screening-best-practices',
    title: 'Tenant Screening and Referencing: Best Practice',
    metaTitle: 'Tenant Screening and Referencing Best Practice | Property Management Harrow',
    metaDescription: 'How to screen tenants properly: referencing, credit checks, employer and previous-landlord references, Right to Rent, affordability, guarantors, red flags, and discrimination law.',
    heroEyebrow: 'Tenant screening',
    heroHeading: 'Tenant screening and referencing',
    heroIntro: 'The quality of your tenant is the single biggest factor in whether a let runs smoothly. This guide covers an evidence-based referencing process and the legal lines around it, including the Tenant Fees Act and the Equality Act.',
    serviceSlug: 'tenant-find-letting',
    relatedHubs: ['deposit-protection-guide', 'the-lettings-process-harrow'],
    sections: [
      { id: 'why-screening-matters', heading: 'Why tenant screening matters', blocks: [
        { type: 'p', text: `In England the eviction process, even with grounds, can take six to twelve months through the courts, during which a non-paying tenant can accumulate thousands of pounds in arrears while the landlord still bears mortgage, insurance, and maintenance costs. The cost of one bad tenant placement can exceed an entire year's management fee.` },
        { type: 'p', text: `Professional screening is not about excluding people; it is about making an evidence-based decision on whether the applicant can afford the rent, has a track record of meeting obligations, and is legally entitled to rent in the UK. Done properly, it protects both landlord and tenant by ensuring the tenancy is sustainable.` },
      ]},
      { id: 'the-referencing-process', heading: 'The referencing process', blocks: [
        { type: 'p', text: `A comprehensive process has five components: a credit check, employer verification, a previous-landlord reference, a Right to Rent check, and an affordability assessment. The cost of referencing is borne by the landlord or agent; under the Tenant Fees Act 2019 it cannot be passed to the tenant.` },
        { type: 'p', text: `A holding deposit (capped at one week's rent) demonstrates the applicant's commitment. It must be returned or offset against the first month's rent within 15 days of the tenancy starting, or within 7 days if the landlord decides not to proceed.` },
      ]},
      { id: 'credit-checks', heading: 'Credit checks', blocks: [
        { type: 'p', text: `A credit check retrieves the applicant's financial history from the UK's main credit reference agencies, showing county court judgments, IVAs, bankruptcy, and payment history. A clean history is a positive indicator but not the whole picture: younger tenants or recent arrivals may have a thin file, while a strong score can mask commitments that leave little disposable income for rent.` },
      ]},
      { id: 'employer-verification', heading: 'Employer verification', blocks: [
        { type: 'p', text: `Confirm the applicant is employed where they claim, earning what they have stated, on a permanent or sufficiently long contract. Obtain the reference directly from the employer's HR or payroll, not a personal email. For self-employed applicants, request two to three years' SA302 tax calculations and tax year overviews, or certified accounts, plus three to six months of business bank statements; base affordability on the lower end of variable income.` },
      ]},
      { id: 'previous-landlord-references', heading: 'Previous landlord references', blocks: [
        { type: 'p', text: `A reference from the current or most recent landlord provides direct evidence of behaviour as a tenant. The most reliable come from professional managing agents; references from private landlords should be verified independently, for example by checking the named landlord against the Land Registry record, to guard against fabricated references.` },
        { type: 'list', items: [
          `Was rent paid on time throughout the tenancy?`,
          `Were there any rent arrears at any point?`,
          `Was the property returned consistent with fair wear and tear?`,
          `Were there any complaints from neighbours?`,
          `Would you rent to this tenant again?`,
        ]},
      ]},
      { id: 'right-to-rent-screening', heading: 'Right to Rent screening', blocks: [
        { type: 'p', text: `Under the Immigration Act 2014, landlords must check that all prospective adult occupants have the right to rent before granting a tenancy. Apply it consistently to all applicants to avoid discrimination. Obtain original documents (or a Home Office share code), verify them, take copies, and record the date. For time-limited permission, a follow-up check is required before it expires.` },
      ]},
      { id: 'affordability-assessment', heading: 'Affordability assessment', blocks: [
        { type: 'p', text: `The benchmark is that rent should not exceed 30 to 35 percent of gross income, or 40 to 45 percent of net income; some agencies apply a minimum net income of 2.5 times the monthly rent. Account for all income sources. For joint tenancies, consider combined income but also whether either tenant could sustain the rent alone, since joint and several liability makes each responsible for the full amount.` },
      ]},
      { id: 'guarantors', heading: 'When to require a guarantor', blocks: [
        { type: 'p', text: `A guarantor agrees to cover the tenant's obligations on default, and is commonly required for applicants who do not meet the affordability threshold, have limited credit history, are students, or are self-employed with variable income. The guarantor must be referenced to the same standard, should typically earn at least three times the annual rent and own UK property, and must sign a separate guarantee agreement before the tenancy begins.` },
      ]},
      { id: 'discrimination-law', heading: 'Discrimination and the law', blocks: [
        { type: 'p', text: `The Equality Act 2010 prohibits discrimination on the grounds of protected characteristics. Screening criteria must be applied consistently and objectively. Financial criteria are lawful provided they are applied equally, but blanket policies that disproportionately disadvantage a protected group, such as refusing all applicants on housing benefit, have been challenged as indirect discrimination. Assess each application on its merits and document the reasons for any decision to decline.` },
      ]},
    ],
    faqs: [
      { question: 'Can I reject a tenant based on their credit score alone?', answer: `You can use a poor credit score as a factor, but it should not be the sole reason for rejection without context. Some tenants with low scores have excellent rental track records. Best practice is to consider the credit check alongside employer verification, previous-landlord references, and an affordability assessment.` },
      { question: 'How long does professional tenant referencing take?', answer: `Most agencies complete the process within 24 to 48 hours, provided the applicant supplies all information promptly. Delays usually arise when previous landlords or employers are slow to respond. Expedited services can return results within hours for an additional fee.` },
      { question: 'Can I charge tenants for referencing?', answer: `No. The Tenant Fees Act 2019 prohibits charging tenants in England for referencing, credit searches, or application fees. The only permitted payments are rent, a capped security deposit (maximum five weeks' rent), a capped holding deposit (maximum one week's rent), and payments for specific contractual defaults.` },
      { question: 'Should I reference all occupants or just the lead tenant?', answer: `Best practice is to reference all adult occupants named on the tenancy who will contribute to the rent; at minimum, reference those contractually liable. Right to Rent checks must be conducted on all adult occupants regardless of whether they are named on the tenancy.` },
      { question: 'What should I do if a reference comes back with mixed results?', answer: `A mixed reference requires judgment. Consider requesting additional information, asking for a guarantor, or requesting bank statements to verify payment history. An experienced managing agent can help you weigh the risks and make an informed decision.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H5 -------------------------------------------------------------------
  {
    slug: 'deposit-protection-guide',
    title: 'Deposit Protection: The Landlord Guide',
    metaTitle: 'Deposit Protection Guide for Landlords | Property Management Harrow',
    metaDescription: 'Tenancy deposit protection explained: the three approved schemes, the 30-day deadline, prescribed information, custodial vs insured, penalties, deductions, and dispute resolution.',
    heroEyebrow: 'Deposit protection',
    heroHeading: 'Deposit protection for landlords',
    heroIntro: 'Protecting a tenancy deposit correctly is a strict legal requirement with severe penalties for getting it wrong. This guide covers the approved schemes, the deadlines, the prescribed information, and end-of-tenancy deductions.',
    serviceSlug: 'rent-collection-accounting',
    relatedHubs: ['tenant-screening-best-practices', 'landlord-compliance-checklist'],
    sections: [
      { id: 'what-is-deposit-protection', heading: 'What is deposit protection?', blocks: [
        { type: 'p', text: `Deposit protection is a legal requirement for all assured shorthold tenancies in England and Wales. When a landlord or agent takes a deposit, they must protect it in one of three government-approved schemes within 30 days of receiving it. The requirement was introduced by the Housing Act 2004 and strengthened by the Localism Act 2011.` },
        { type: 'p', text: `The rules apply regardless of the size of the deposit. Whether the deposit is 200 pounds or the maximum permitted under the Tenant Fees Act 2019 (five weeks' rent for annual rents below 50,000 pounds, or six weeks' rent at or above 50,000 pounds), the same protection and information obligations apply.` },
      ]},
      { id: 'government-approved-schemes', heading: 'Government-approved schemes', blocks: [
        { type: 'p', text: `There are three approved schemes: the Deposit Protection Service (DPS), MyDeposits, and the Tenancy Deposit Scheme (TDS). Each offers a custodial option (the scheme holds the deposit, free to use) and an insured option (the landlord or agent holds the deposit and pays a fee). All three provide free alternative dispute resolution. Tenants do not choose the scheme but must be told which one holds their deposit.` },
      ]},
      { id: 'the-30-day-deadline', heading: 'The 30-day deadline', blocks: [
        { type: 'p', text: `The deposit must be protected within 30 days of the landlord or agent receiving it. This is a strict deadline with no extensions, and the clock starts from the date the money is received, not the tenancy start date. The prescribed information must also be served within the same 30-day period; protecting the deposit without serving the information is treated as non-compliance.` },
      ]},
      { id: 'prescribed-information', heading: 'Prescribed information', blocks: [
        { type: 'p', text: `The prescribed information is a set of specific details the landlord must provide in writing within 30 days, set out in the Housing (Tenancy Deposits) (Prescribed Information) Order 2007. It includes:` },
        { type: 'list', items: [
          `The name and contact details of the scheme protecting the deposit.`,
          `The name and contact details of the landlord or agent, and of the tenant.`,
          `The address of the rented property and the amount of the deposit.`,
          `The circumstances in which deductions may be made.`,
          `Information about the scheme's alternative dispute resolution process.`,
        ]},
        { type: 'p', text: `Failure to serve the prescribed information, even where the deposit is protected, carries the same penalties as failing to protect it at all.` },
      ]},
      { id: 'penalties-for-non-compliance', heading: 'Penalties for non-compliance', blocks: [
        { type: 'p', text: `Tenants can apply to the county court for an order requiring the landlord to protect the deposit and serve the prescribed information or return the deposit, plus compensation of between one and three times the deposit amount. The minimum penalty of one times the deposit is automatic; the court has no discretion to award less. For a deposit of 1,500 pounds, compensation is between 1,500 and 4,500 pounds, in addition to returning the deposit.` },
      ]},
      { id: 'section-21-restrictions', heading: 'Section 21 restrictions', blocks: [
        { type: 'p', text: `A landlord cannot serve a valid Section 21 notice at any time when the deposit is not protected or the prescribed information has not been served. This applies even where protection lapsed after the tenancy began. The only route to possession then is a Section 8 notice, which requires proving statutory grounds and is longer and less certain.` },
      ]},
      { id: 'end-of-tenancy-deductions', heading: 'End-of-tenancy deductions', blocks: [
        { type: 'p', text: `Permitted deductions include unpaid rent, damage beyond fair wear and tear, cleaning to restore the property to its check-in condition, replacement of missing items, and costs from breach of the agreement. A detailed, dated inventory with photographs at check-in and check-out is the single most important document for supporting deductions. Landlords cannot deduct for fair wear and tear, the natural deterioration of normal daily use.` },
      ]},
      { id: 'dispute-resolution', heading: 'Dispute resolution', blocks: [
        { type: 'p', text: `If landlord and tenant cannot agree on deductions, either can refer the dispute to the scheme's free alternative dispute resolution (ADR). The process is paper-based: both parties submit evidence and an independent adjudicator makes a binding decision. The burden of proof lies with the landlord, so thorough documentation (inventories, photographs, receipts) is critical. ADR typically takes four to eight weeks.` },
      ]},
    ],
    faqs: [
      { question: 'Can I protect a deposit after the 30-day deadline has passed?', answer: `Yes, and you should do so immediately, but late protection does not cure the breach. Tenants can still claim compensation of between one and three times the deposit for the unprotected period, and you cannot serve a valid Section 21 notice until the deposit is properly protected and the prescribed information served.` },
      { question: 'Does deposit protection apply to lodgers?', answer: `No. Deposit protection only applies to assured shorthold tenancies. A lodger who shares your home has a licence rather than an AST, so the rules do not apply. If a lodger occupies a self-contained part of the property without sharing living accommodation, the arrangement may be an AST and protection would then be required.` },
      { question: 'What happens to the deposit if the property is sold?', answer: `If you sell with a sitting tenant, the deposit obligation transfers to the new owner. Transfer the deposit (or update the scheme registration), and the new owner must serve fresh prescribed information within 30 days of acquiring the property.` },
      { question: 'Can I make deductions for normal wear and tear?', answer: `No. Deductions can only be made for damage beyond fair wear and tear, unpaid rent, breach of tenancy terms, or cleaning to restore the property to its check-in condition. A detailed inventory with photographs is essential to support any deduction claim.` },
      { question: 'How long does the dispute resolution process take?', answer: `The alternative dispute resolution process typically takes between four and eight weeks from when both parties submit their evidence. The adjudicator's decision is binding and there is no oral hearing or right of appeal, though either party can use the courts instead of ADR.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H6 -------------------------------------------------------------------
  {
    slug: 'property-management-fees-harrow',
    title: 'Property Management Fees and Costs in Harrow',
    metaTitle: 'Property Management Fees in Harrow: What You Pay | Property Management Harrow',
    metaDescription: 'What property management costs in Harrow: typical fee percentages, what is included versus extra, setup and tenant-find fees, comparing quotes, and the tax treatment of fees.',
    heroEyebrow: 'Fees and costs',
    heroHeading: 'Property management fees and costs in Harrow',
    heroIntro: 'Management fees are easy to misread. The headline percentage is only part of the picture. This guide explains what Harrow landlords typically pay, what should be included, and how to compare quotes properly.',
    serviceSlug: 'rent-collection-accounting',
    toolSlug: 'management-fee-calculator',
    relatedHubs: ['rental-yield-landlord-finances-harrow', 'switching-property-managers'],
    sections: [
      { id: 'typical-fees', heading: 'Typical management fee percentages', blocks: [
        { type: 'p', text: `Full management fees in Harrow typically range from 8 to 15 percent of the monthly rent plus VAT, with rent-collection-only services lower and let-only (tenant-find) charged as a one-off. The percentage reflects the level of service: full management covers maintenance coordination, inspections, compliance tracking, and rent collection, whereas rent-collection-only stops at handling the money.` },
        { type: 'p', text: `Use our management fee calculator to see what a given percentage costs in pounds against your actual rent before comparing agents.` },
      ]},
      { id: 'included-vs-extra', heading: 'What is included versus extra', blocks: [
        { type: 'p', text: `The headline fee rarely covers everything. Ask specifically about tenant-find fees (often one to two weeks' rent charged separately), maintenance markup percentages, renewal fees, inspection fees, deposit registration, and notice or court-attendance fees. A 10 percent management fee with a 15 percent maintenance markup can cost more than a 14 percent all-inclusive fee.` },
        { type: 'list', items: [
          `Management fee (percentage of rent, the headline figure).`,
          `Tenant-find or setup fee (often charged separately).`,
          `Maintenance markup on contractor invoices.`,
          `Renewal fee when a tenancy is extended.`,
          `Inspection and inventory fees.`,
          `Deposit registration and prescribed information.`,
        ]},
      ]},
      { id: 'tenant-fees-act', heading: 'Fee transparency and the Tenant Fees Act', blocks: [
        { type: 'p', text: `The Tenant Fees Act 2019 banned most fees charged to tenants, but it does not cap what agents charge landlords. It does require agents to publish their fees transparently. A reputable Harrow agent will give you a clear, written schedule of every charge before you sign, with no surprises in the monthly statement.` },
      ]},
      { id: 'comparing-quotes', heading: 'How to compare quotes', blocks: [
        { type: 'p', text: `Compare quotes on total annual cost, not the headline percentage. Build a simple model: the management fee on your rent, plus the tenant-find or renewal fee spread over the expected tenancy length, plus a realistic maintenance markup. The cheapest headline fee is frequently the most expensive once add-ons are included.` },
      ]},
      { id: 'tax', heading: 'Are management fees tax-deductible?', blocks: [
        { type: 'p', text: `Letting agent and management fees are an allowable expense that can be deducted from rental income when calculating your taxable profit, as can many other running costs. This is general information rather than tax advice; confirm your position with an accountant, particularly given the Section 24 restrictions on mortgage interest relief covered in our landlord finances hub.` },
      ]},
    ],
    faqs: [
      { question: 'What is a typical property management fee in Harrow?', answer: `Full management in Harrow typically runs from 8 to 15 percent of monthly rent plus VAT. The right figure depends on the service level and what is included; always compare the total annual cost rather than the headline percentage.` },
      { question: 'Are letting agent fees tax-deductible for landlords?', answer: `Yes, letting agent and management fees are generally an allowable expense deductible from rental income when working out taxable profit. Confirm your specific position with an accountant.` },
      { question: 'Can agents still charge tenants fees?', answer: `No. The Tenant Fees Act 2019 bans most fees to tenants in England. It does not cap fees to landlords but does require agents to publish their charges transparently.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H7 -------------------------------------------------------------------
  {
    slug: 'rental-yield-landlord-finances-harrow',
    title: 'Rental Yield and Landlord Finances in Harrow',
    metaTitle: 'Rental Yield and Landlord Tax in Harrow | Property Management Harrow',
    metaDescription: 'How to calculate rental yield, gross versus net, ways to improve it, and landlord tax basics including Section 24, allowable expenses, and incorporation, in the Harrow market.',
    heroEyebrow: 'Yield and finances',
    heroHeading: 'Rental yield and landlord finances in Harrow',
    heroIntro: 'Yield is the number that tells you whether a Harrow rental is working as an investment. This guide covers how to calculate it, how to improve it, and the tax rules that shape a landlord\'s real return.',
    serviceSlug: 'rent-collection-accounting',
    toolSlug: 'rental-yield-calculator',
    relatedHubs: ['property-management-fees-harrow', 'voids-arrears-and-rent-collection-harrow'],
    sections: [
      { id: 'calculate-yield', heading: 'How to calculate rental yield', blocks: [
        { type: 'p', text: `Gross yield is the annual rent divided by the property value, expressed as a percentage. Net yield subtracts running costs (management fees, maintenance, insurance, void periods, ground rent and service charge where applicable) before dividing by the value, and is the more honest measure. Our rental yield calculator works both out from your figures.` },
      ]},
      { id: 'gross-vs-net', heading: 'Gross versus net yield', blocks: [
        { type: 'p', text: `A property advertised at a strong gross yield can deliver a weak net yield once costs are realistic. Always model net yield with a genuine maintenance allowance and an expected void period, because those are the figures that determine what actually reaches your account. Harrow's mix of period conversions and purpose-built flats means maintenance budgets vary widely by property type.` },
      ]},
      { id: 'improving-yield', heading: 'Improving yield', blocks: [
        { type: 'p', text: `Yield improves by raising net income or reducing cost: minimising voids through good tenant retention, keeping maintenance proactive rather than reactive, reviewing the rent at renewal in line with the local market, and in some cases converting a single let to a licensed HMO where the layout and licensing allow. Each route has trade-offs in management intensity and compliance.` },
      ]},
      { id: 'section-24', heading: 'Landlord tax: Section 24 and allowable expenses', blocks: [
        { type: 'p', text: `Section 24 of the Finance Act restricts the deduction of mortgage interest for individual landlords; instead of deducting interest as an expense, landlords receive a basic-rate (20 percent) tax credit. This can push higher-rate taxpayers into a materially higher tax bill on the same rent. Allowable expenses that can still be deducted include letting agent fees, repairs (not improvements), insurance, and ground rent and service charges.` },
        { type: 'p', text: `This is general information, not tax advice. The interaction of Section 24, allowable expenses, and your overall income is specific to your circumstances, so confirm with an accountant.` },
      ]},
      { id: 'incorporation', heading: 'Incorporation and capital gains', blocks: [
        { type: 'p', text: `Some landlords consider holding property through a limited company, where mortgage interest remains fully deductible and profits are taxed at corporation rates, though this brings its own costs and is not right for everyone. When a rental is sold, capital gains tax may apply on the gain above the annual exemption. Both are areas where professional tax advice pays for itself.` },
      ]},
    ],
    faqs: [
      { question: 'What is a good rental yield in Harrow?', answer: `There is no single figure, because it depends on property type, finance, and costs. Focus on net yield (after management, maintenance, insurance, and voids) rather than the gross headline, and compare it against your own cost of capital. Our rental yield calculator works out both from your numbers.` },
      { question: 'How does Section 24 affect landlords?', answer: `Section 24 restricts individual landlords from deducting mortgage interest as an expense; instead you receive a basic-rate tax credit. For higher-rate taxpayers this can significantly increase the tax due on the same rental income. Confirm your position with an accountant.` },
      { question: 'Which expenses can I deduct from rental income?', answer: `Allowable expenses include letting agent and management fees, repairs (not improvements), landlord insurance, ground rent and service charges, and certain other running costs. Mortgage interest is treated separately under Section 24. This is general information, not tax advice.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H8 -------------------------------------------------------------------
  {
    slug: 'voids-arrears-and-rent-collection-harrow',
    title: 'Voids, Arrears and Rent Collection in Harrow',
    metaTitle: 'Reducing Voids and Handling Arrears in Harrow | Property Management Harrow',
    metaDescription: 'How to reduce void periods, the true cost of a void, handling rent arrears compliantly, rent guarantee insurance, and the eviction process under the current and reformed rules.',
    heroEyebrow: 'Voids and arrears',
    heroHeading: 'Voids, arrears and rent collection in Harrow',
    heroIntro: 'Empty weeks and unpaid rent are where landlord returns quietly leak away. This guide covers reducing voids, the real cost of one, and handling arrears and possession lawfully.',
    serviceSlug: 'rent-collection-accounting',
    toolSlug: 'void-cost-calculator',
    relatedHubs: ['rental-yield-landlord-finances-harrow', 'the-lettings-process-harrow'],
    sections: [
      { id: 'reducing-voids', heading: 'Reducing void periods', blocks: [
        { type: 'p', text: `A void is any period the property sits empty between tenancies. The most effective ways to reduce voids are good tenant retention (a fair renewal rather than churn), starting remarketing before the current tenancy ends, pricing the rent to the actual local market, and presenting the property well for viewings. In Harrow's competitive market, a well-priced, well-presented property re-lets quickly.` },
      ]},
      { id: 'cost-of-a-void', heading: 'The cost of a void', blocks: [
        { type: 'p', text: `A void costs more than the lost rent. While empty, the landlord typically pays council tax, utilities standing charges, and continues to bear the mortgage, with no income against them. Our void cost calculator turns a number of empty weeks into a real pounds figure so you can judge whether holding out for a higher rent is worth the empty period it creates.` },
      ]},
      { id: 'handling-arrears', heading: 'Handling rent arrears compliantly', blocks: [
        { type: 'p', text: `Arrears are best handled early and on a clear process: a prompt, polite reminder when a payment is missed, a documented follow-up, and an open conversation about whether a temporary issue can be resolved. Keep records of every contact. Aggressive or unlawful tactics (harassment, threats, or anything resembling an illegal eviction) expose the landlord to serious liability, so a measured, documented approach is both fairer and safer.` },
      ]},
      { id: 'rent-guarantee', heading: 'Rent guarantee insurance', blocks: [
        { type: 'p', text: `Rent guarantee insurance covers lost rent (and often legal costs) if a referenced tenant stops paying, usually conditional on proper referencing having been carried out at the outset. For landlords who cannot absorb a long arrears period, it converts an unpredictable risk into a fixed annual cost. It is one reason thorough tenant screening and insurance go hand in hand.` },
      ]},
      { id: 'eviction-process', heading: 'The eviction process and reform', blocks: [
        { type: 'p', text: `Possession is currently sought through a Section 21 (no-fault) notice or a Section 8 notice based on statutory grounds such as rent arrears. A valid Section 21 depends on having met every compliance prerequisite (deposit, certificates, How to Rent guide). The Renters' Rights reforms are set to abolish Section 21 no-fault evictions and move to a system of strengthened grounds, so landlords should follow current guidance closely and take advice before serving any notice.` },
      ]},
    ],
    faqs: [
      { question: 'How can I reduce void periods on my Harrow rental?', answer: `Retain good tenants with a fair renewal, start remarketing before the current tenancy ends, price to the genuine local market, and present the property well. A correctly priced, well-presented Harrow property typically re-lets quickly.` },
      { question: 'What does a void period actually cost?', answer: `More than the lost rent: while empty you usually pay council tax and utility standing charges and continue to bear the mortgage with no income. Our void cost calculator converts empty weeks into a pounds figure so you can weigh holding out for a higher rent against the void it creates.` },
      { question: 'Is Section 21 being abolished?', answer: `The Renters' Rights reforms are set to abolish Section 21 no-fault evictions and replace them with strengthened possession grounds. Timelines have moved, so follow current GOV.UK guidance and take advice before serving any notice.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H9 -------------------------------------------------------------------
  {
    slug: 'repairs-maintenance-and-safety-certificates-harrow',
    title: 'Repairs, Maintenance and Safety Certificates',
    metaTitle: 'Repairs and Safety Certificates for Harrow Landlords | Property Management Harrow',
    metaDescription: 'A landlord guide to repairs and the key safety certificates: gas safety (CP12), EICR electrical checks, EPC, smoke and CO alarms, repairing obligations, and damp and mould.',
    heroEyebrow: 'Repairs and safety',
    heroHeading: 'Repairs, maintenance and safety certificates',
    heroIntro: 'The certificates and repairing duties below are where most enforcement and most tenant disputes arise. This guide sets out what each one requires and how often it is needed.',
    serviceSlug: 'residential-lettings-management',
    relatedHubs: ['landlord-compliance-checklist', 'hmo-licensing-harrow'],
    sections: [
      { id: 'gas-safety', heading: 'Gas safety certificates (CP12)', blocks: [
        { type: 'p', text: `Landlords must have all gas appliances, fittings, and flues checked annually by a Gas Safe registered engineer, who issues the Gas Safety Record (CP12). Renew every 12 months, provide a copy to existing tenants within 28 days and to new tenants before they move in, and keep records for at least two years. A missing or expired certificate is a criminal offence and blocks a valid Section 21 notice.` },
      ]},
      { id: 'eicr', heading: 'EICR electrical checks', blocks: [
        { type: 'p', text: `The electrical installation must be inspected and tested at least every five years by a qualified electrician, producing an EICR. Any C1 (danger present) or C2 (potentially dangerous) defect must be remedied within 28 days or sooner if the report specifies. Provide the EICR to tenants within 28 days of the inspection.` },
      ]},
      { id: 'epc', heading: 'EPC requirements', blocks: [
        { type: 'p', text: `A valid EPC rated at least E is required before letting, under MEES. The EPC is valid for ten years and must be given to prospective tenants free of charge before the tenancy starts. Letting below E without a registered exemption can attract a fine of up to 5,000 pounds, and the minimum standard may rise to C for new tenancies in future.` },
      ]},
      { id: 'alarms', heading: 'Smoke and carbon monoxide alarms', blocks: [
        { type: 'p', text: `A smoke alarm is required on every storey with living accommodation, and a carbon monoxide alarm in any room with a fixed combustion appliance, including gas boilers and fires since the 2022 amendment. The alarms must be working at the start of each new tenancy.` },
      ]},
      { id: 'repairing-obligations', heading: 'Repairing obligations', blocks: [
        { type: 'p', text: `Under section 11 of the Landlord and Tenant Act 1985, the landlord is responsible for the structure and exterior, and for the installations for water, gas, electricity, sanitation, and heating. Repairs should be handled promptly and on a clear urgency scale, with genuine emergencies (loss of heating in winter, a dangerous fault, a major leak) addressed without delay. A managing agent with a vetted contractor network and out-of-hours cover is the practical difference here.` },
      ]},
      { id: 'damp-and-mould', heading: 'Damp, mould and Awaab\'s Law', blocks: [
        { type: 'p', text: `Damp and mould are the most common cause of fitness-standard complaints in older Harrow stock. Awaab's Law introduces strict timescales for investigating and fixing damp and mould hazards once reported. The safe approach is to treat any report seriously, investigate the cause rather than just the symptom, document the response, and act within the required timescales.` },
      ]},
    ],
    faqs: [
      { question: 'How often does a landlord gas safety check need doing?', answer: `Every 12 months. A Gas Safe registered engineer must check all gas appliances, fittings, and flues and issue a Gas Safety Record (CP12). Provide a copy to tenants and keep records for at least two years.` },
      { question: 'How often is an EICR required?', answer: `At least every five years, or sooner if the previous report recommends it. Any C1 or C2 defect must be remedied within 28 days or the period the report specifies.` },
      { question: 'What are my repair responsibilities as a landlord?', answer: `Under section 11 of the Landlord and Tenant Act 1985 you are responsible for the structure and exterior and the installations for water, gas, electricity, sanitation, and heating. Damp and mould reports must be handled within the timescales introduced by Awaab's Law.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H10 ------------------------------------------------------------------
  {
    slug: 'the-lettings-process-harrow',
    title: 'The Lettings Process: Marketing, Viewings and Tenancy Agreements',
    metaTitle: 'The Lettings Process in Harrow: Step by Step | Property Management Harrow',
    metaDescription: 'A step-by-step guide to letting a property in Harrow: marketing and pricing, viewings and offers, the tenancy agreement, the inventory and check-in, and ending a tenancy correctly.',
    heroEyebrow: 'The lettings process',
    heroHeading: 'The lettings process in Harrow',
    heroIntro: 'From first marketing the property to handing back the keys, the let runs through a fixed sequence. This guide walks through each stage so nothing that protects your position is missed.',
    serviceSlug: 'tenant-find-letting',
    relatedHubs: ['tenant-screening-best-practices', 'voids-arrears-and-rent-collection-harrow'],
    sections: [
      { id: 'marketing', heading: 'Marketing and pricing the rent', blocks: [
        { type: 'p', text: `A good let starts with accurate pricing and strong presentation. Price to recent comparable lets in the same Harrow area and property type rather than to an asking-price wish, because an overpriced property sits empty and the void usually costs more than the extra rent would have earned. Quality photographs, a clear floor plan, and an honest description bring better-qualified enquiries.` },
      ]},
      { id: 'viewings-offers', heading: 'Viewings and offers', blocks: [
        { type: 'p', text: `Conduct viewings safely and consistently, gather genuine enquiries, and take offers in writing with the proposed move-in date, term, and any conditions. A holding deposit (capped at one week's rent under the Tenant Fees Act 2019) reserves the property while referencing is completed and demonstrates the applicant's commitment.` },
      ]},
      { id: 'tenancy-agreement', heading: 'The tenancy agreement (AST)', blocks: [
        { type: 'p', text: `Most private lets are assured shorthold tenancies. The written agreement should set out the rent, term, deposit, the responsibilities of each party, and any permitted clauses, and must not include prohibited fees. At the start of the tenancy the landlord must provide the current How to Rent guide, the EPC, the gas safety record, and the EICR, and protect the deposit within 30 days, all of which are also Section 21 prerequisites.` },
      ]},
      { id: 'inventory-check-in', heading: 'The inventory and check-in', blocks: [
        { type: 'p', text: `A detailed, dated inventory with photographs, completed at check-in and signed by the tenant, is the single most important document for the end of the tenancy. It records the condition of every room, fixture, and item, plus meter readings and keys. Without it, justifying any deposit deduction later is extremely difficult.` },
      ]},
      { id: 'renewals-endings', heading: 'Renewals and ending a tenancy', blocks: [
        { type: 'p', text: `Toward the end of the term, decide whether to renew (often the lower-cost, lower-void option with a good tenant) or let the tenancy become periodic. Ending a tenancy must follow the correct legal route and notice, which is changing under the Renters' Rights reforms, so use current guidance. A professional check-out against the inventory then determines any fair deductions, handled through the deposit scheme.` },
      ]},
    ],
    faqs: [
      { question: 'What documents must I give a tenant at the start of a tenancy?', answer: `The current How to Rent guide, the EPC, the gas safety record, and the EICR, and you must protect the deposit and serve the prescribed information within 30 days. These are also prerequisites for a valid Section 21 notice.` },
      { question: 'How should I price the rent on my Harrow property?', answer: `Price to recent comparable lets in the same area and property type, not to an asking-price wish. Overpricing leads to a void, which usually costs more than the extra rent would have earned. A local managing agent can benchmark the rent accurately.` },
      { question: 'Why is the inventory so important?', answer: `A detailed, dated inventory with photographs, signed at check-in, is the key evidence for any end-of-tenancy deposit deduction. Without it, the burden of proof at adjudication is very hard to meet and deductions are usually refused.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },
];

export const GUIDE_SLUGS = guides.map(g => g.slug);

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}
