export interface ServiceFAQ {
  q: string
  a: string
}

export interface Service {
  id:          string
  slug:        string
  title:       string
  shortTitle:  string
  tagline:     string
  description: string
  heroDesc:    string
  pill:        string
  faqs:        ServiceFAQ[]
}

export const services: Service[] = [
  {
    id:         'residential-lettings',
    slug:       'residential-lettings-management',
    title:      'Residential Lettings Management',
    shortTitle: 'Lettings Management',
    tagline:    'Full-service letting and management — so you never chase a tenant again',
    pill:       'Most requested',
    description:
      'Owning rental property in Harrow should generate income, not headaches. Our full-service residential lettings management covers every stage of the tenancy lifecycle — from sourcing and referencing quality tenants through to rent collection, routine inspections, and coordinating maintenance. We handle all legal compliance obligations including annual gas safety certificates, EICR electrical checks, deposit protection with a government-approved scheme, and Right to Rent verification under the Immigration Act 2014. Whether you own a single flat in Wealdstone or a growing portfolio across the borough, we act as the professional buffer between you and the day-to-day demands of being a landlord.',
    heroDesc:
      'Managing a rental property properly takes time most landlords do not have. Our Harrow lettings management team handles tenant sourcing, rent collection, inspections, maintenance, and full legal compliance — so your investment works without your constant involvement.',
    faqs: [
      {
        q: 'What does full-service lettings management include?',
        a: 'Our full management service covers tenant sourcing and referencing, professional photography and marketing across major portals, accompanied viewings, tenancy agreement preparation, deposit registration, rent collection and monthly landlord statements, periodic property inspections, 24/7 maintenance coordination with vetted contractors, end-of-tenancy management including checkout, deposit negotiation, and void period minimisation. We also handle all statutory compliance — gas safety, EICR, EPC, smoke and carbon monoxide alarms, and Right to Rent checks.',
      },
      {
        q: 'How do you handle maintenance issues reported by tenants?',
        a: 'Tenants report maintenance issues directly to our team via phone, email, or our online portal. We triage every request, distinguish between emergency and routine work, and instruct from our network of vetted, insured contractors in the Harrow area. Landlords are consulted before any non-emergency expenditure above an agreed threshold. Emergency repairs — such as boiler failures in winter or water leaks — are actioned immediately to protect the property and maintain the tenancy relationship.',
      },
      {
        q: 'What compliance responsibilities do landlords have in Harrow?',
        a: 'Landlords in Harrow must hold a valid gas safety certificate (renewed annually), an EICR electrical inspection (every five years or at each new tenancy), an in-date EPC rated E or above, working smoke alarms on every floor, and a carbon monoxide alarm in any room with a fixed combustion appliance. Right to Rent checks must be completed before the tenancy starts. Tenancy deposits must be protected in a government-approved scheme within 30 days. Failure to comply with any of these can result in fines, rent repayment orders, or inability to serve a valid Section 21 notice. We manage all of this on your behalf.',
      },
    ],
  },
  {
    id:         'tenant-find',
    slug:       'tenant-find-letting',
    title:      'Tenant Find & Letting Services',
    shortTitle: 'Tenant Find',
    tagline:    'We find the right tenant — you take it from there',
    pill:       'One-off service',
    description:
      'Not every landlord wants or needs full management. Some are hands-on, experienced, and happy to deal with tenants directly — but recognise that finding the right tenant in the first place is the single most important decision in any tenancy. Our tenant find service handles the entire front end: professional property marketing across Rightmove, Zoopla, and OnTheMarket, accompanied viewings, comprehensive referencing through an independent agency, Right to Rent verification, tenancy agreement preparation, deposit registration, and a thorough inventory and check-in. Once the tenant is in and the keys are handed over, the tenancy is yours to manage.',
    heroDesc:
      'The quality of your tenant determines almost everything about the next twelve months. Our Harrow tenant find service handles marketing, viewings, referencing, and check-in — placing a properly vetted tenant before handing the tenancy over to you.',
    faqs: [
      {
        q: 'What referencing checks do you carry out on tenants?',
        a: 'Every prospective tenant undergoes a comprehensive referencing process through an independent third-party agency. This includes a credit check and search for CCJs or insolvency markers, employment verification and affordability assessment, a reference from their current or most recent landlord, identity verification, and Right to Rent document checks. Where affordability is borderline, we advise on the use of guarantors and carry out guarantor referencing to the same standard. We do not place tenants who fail referencing.',
      },
      {
        q: 'How long does it typically take to find a tenant in Harrow?',
        a: 'For competitively priced properties in good condition, we typically secure a referenced tenant within two to three weeks of marketing going live. Harrow benefits from strong rental demand driven by its Metropolitan line links, local schools, and proximity to central London. Properties priced significantly above market rate or with condition issues may take longer. We advise on pricing and presentation before marketing begins to minimise void periods.',
      },
      {
        q: 'What happens after the tenant moves in?',
        a: 'Once the check-in is completed and the inventory signed, we hand the tenancy over to you along with all documentation — the signed tenancy agreement, referencing reports, inventory, deposit protection certificate, and compliance records. From that point, you manage the tenancy directly, including rent collection, maintenance, and any renewals or notices. We are available for re-letting when the tenancy ends, or you can upgrade to our full management service at any time during the tenancy.',
      },
    ],
  },
  {
    id:         'block-management',
    slug:       'block-management',
    title:      'Block Management',
    shortTitle: 'Block Management',
    tagline:    'Professional management for leasehold blocks and resident-owned buildings',
    pill:       'Freeholders & RMCs',
    description:
      'Managing a leasehold block properly requires a clear understanding of landlord and tenant law, service charge accounting, insurance procurement, and building maintenance — along with the patience to communicate effectively with multiple leaseholders who each have different expectations. Our block management service covers the full scope: annual service charge budgeting and collection, Section 20 consultation for major works, communal area maintenance and cleaning contracts, buildings insurance arrangement and claims handling, health and safety compliance including fire risk assessments, and transparent financial reporting to directors and leaseholders. We work with freeholders, Resident Management Companies, and Right to Manage companies across Harrow.',
    heroDesc:
      'Leasehold block management demands specialist knowledge and consistent administration. Our Harrow block management team handles service charges, Section 20 consultations, communal maintenance, insurance, and leaseholder relations — keeping your building compliant and well maintained.',
    faqs: [
      {
        q: 'What is a Section 20 consultation and when is it required?',
        a: 'A Section 20 consultation is the statutory process a landlord or managing agent must follow before carrying out qualifying works costing any leaseholder more than £250, or entering into a qualifying long-term agreement costing any leaseholder more than £100 per year. The consultation involves a formal notice of intention, a period for leaseholder observations, obtaining estimates, a further notice with the estimates, and another observation period. Failure to follow the process correctly limits the amount recoverable from leaseholders to the statutory threshold. We manage the entire consultation process on behalf of the freeholder or RMC.',
      },
      {
        q: 'How do you handle service charge disputes with leaseholders?',
        a: 'Transparency is the best defence against disputes. We provide fully itemised annual service charge accounts, make supporting invoices available for inspection, and issue clear budgets at the start of each financial year. Where a leaseholder challenges a charge, we engage directly to explain the expenditure and its basis in the lease. If a dispute cannot be resolved informally, we support the freeholder or RMC through the First-tier Tribunal (Property Chamber) process, including preparation of the management file and relevant documentation.',
      },
      {
        q: 'Do you manage buildings insurance for the block?',
        a: 'Yes. We arrange buildings insurance through specialist block insurance brokers, ensuring the sum insured reflects the full reinstatement value of the building — not the market value, which is a common and potentially costly mistake. Cover typically includes buildings, common parts, landlord fixtures, and employer and public liability. We handle claims on behalf of the freeholder or RMC, liaise with loss adjusters, and recharge premiums through the service charge in accordance with the lease terms.',
      },
    ],
  },
  {
    id:         'hmo-management',
    slug:       'hmo-management',
    title:      'HMO Management',
    shortTitle: 'HMO Management',
    tagline:    'Specialist management for multi-tenant, high-yield properties',
    pill:       'High-yield properties',
    description:
      'Houses in Multiple Occupation generate higher yields than standard single-let properties — but they also carry higher regulatory risk, more intensive management demands, and greater tenant turnover. Our HMO management service is built specifically for this asset class. We handle mandatory and additional HMO licensing applications with Harrow Council, ensure ongoing compliance with fire safety regulations including alarm systems, fire doors, and escape routes, manage room-by-room lettings to maintain occupancy, coordinate utility accounts and council tax arrangements for shared houses, and maintain communal areas to the standards required by both the licence conditions and the Management of Houses in Multiple Occupation Regulations 2006.',
    heroDesc:
      'HMOs in Harrow demand specialist management that understands licensing, fire safety, multi-tenant dynamics, and the regulations that apply specifically to shared housing. Our team keeps your HMO compliant, occupied, and generating the returns it should.',
    faqs: [
      {
        q: 'Does my property in Harrow need an HMO licence?',
        a: 'Mandatory HMO licensing applies to any property occupied by five or more people forming two or more separate households. In addition, Harrow Council operates an additional licensing scheme that may cover smaller HMOs depending on the area and property type. Penalties for operating an unlicensed HMO are severe — unlimited fines and the potential for rent repayment orders covering up to twelve months of rent per tenant. We assess your property against current licensing requirements, prepare and submit the application, and manage ongoing compliance with all licence conditions.',
      },
      {
        q: 'What fire safety requirements apply to HMOs?',
        a: 'HMOs must comply with the LACORS fire safety guidance, which sets standards based on the risk category of the property. Requirements typically include a fire detection and alarm system (often mains-wired, interlinked alarms as a minimum), fire doors to kitchens and bedrooms with intumescent strips and cold smoke seals, protected escape routes with emergency lighting, fire extinguishers and fire blankets in kitchen areas, and clearly posted escape route signage. Larger or higher-risk HMOs may require a full fire alarm system to BS 5839. We arrange fire risk assessments and implement all required works before the licence inspection.',
      },
      {
        q: 'How do you handle room voids and tenant turnover in an HMO?',
        a: 'Tenant turnover is a normal part of HMO management, and minimising void periods is critical to maintaining yield. When a room becomes available, we market it immediately through specialist room-share platforms and our own tenant database, conduct viewings promptly, and complete referencing as quickly as possible without compromising standards. We also manage the existing tenant dynamic carefully — a bad fit in a shared house can trigger multiple departures. Our approach to tenant selection considers compatibility as well as affordability and references.',
      },
    ],
  },
  {
    id:         'rent-collection',
    slug:       'rent-collection-accounting',
    title:      'Rent Collection & Accounting',
    shortTitle: 'Rent Collection',
    tagline:    'We handle the money — you handle the property',
    pill:       'Hands-on landlords',
    description:
      'Some landlords prefer to manage their properties directly — dealing with tenants, arranging maintenance, and handling inspections themselves. What they want help with is the financial side: consistent rent collection, firm but professional arrears management when payments fall behind, and clear monthly accounting that makes self-assessment straightforward. Our rent collection and accounting service sits between a tenant find and full management. We collect rent on your behalf, chase late payments through a structured arrears process, provide monthly landlord statements, and issue annual income and expenditure summaries ready for your accountant or tax return. You stay in control of the property — we make sure the money flows.',
    heroDesc:
      'You manage the property. We manage the money. Our Harrow rent collection service ensures consistent cash flow, professional arrears management, and clear financial reporting — giving hands-on landlords the back-office support they actually need.',
    faqs: [
      {
        q: 'What happens when a tenant falls behind on rent?',
        a: 'We operate a structured arrears process that begins on the first day rent is overdue. Initial contact is made by phone and followed up in writing. If rent remains unpaid after seven days, a formal arrears letter is issued. We keep you informed at every stage and advise on the legal options available — including serving a Section 8 notice on mandatory Ground 8 (two months arrears) or discretionary rent arrears grounds. Our goal is to recover the rent or resolve the situation before it escalates to possession proceedings, but we prepare the groundwork for court action if that becomes necessary.',
      },
      {
        q: 'What financial reporting do you provide to landlords?',
        a: 'Each month you receive a landlord statement showing rent received, any deductions (for example, management fees), and the net amount remitted to your account. At the end of the tax year, we provide an annual income and expenditure summary for each property, setting out total rental income received, management fees paid, and any other costs processed through our client account. This summary is designed to drop straight into your self-assessment tax return or be handed to your accountant without further work on your part.',
      },
      {
        q: 'Can I use this service alongside my own tenant management?',
        a: 'Absolutely — that is exactly what it is designed for. You continue to manage the tenancy relationship, handle maintenance, carry out inspections, and deal with renewals or notices. We collect the rent, manage arrears if they arise, and provide the financial reporting. If your circumstances change and you decide you need more support, you can upgrade to our full management service at any point without disrupting the tenancy.',
      },
    ],
  },
]

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug)
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(s => s.slug === slug)
