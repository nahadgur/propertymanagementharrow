export interface AvatarService {
  slug:  string
  title: string
  why:   string  // why this service is relevant to this avatar
}

export interface AvatarArea {
  name: string
  href: string
  why:  string
}

export interface AvatarContent {
  slug:           string
  title:          string
  shortTitle:     string
  metaTitle:      string
  metaDesc:       string
  heroHeadline:   string
  heroDesc:       string
  pill:           string
  profile:        string        // one-line avatar description
  empathyHeading: string
  empathyBody:    string[]      // 2-3 paragraphs
  painHeading:    string
  pains:          { head: string; body: string }[]
  servicesHeading: string
  relevantServices: AvatarService[]
  toolsTeaser:    { heading: string; desc: string; tools: { label: string; href: string; desc: string }[] }
  harrowAreas:    AvatarArea[]
  faqs:           { q: string; a: string }[]
  finalCta:       string
}

export const avatarContent: AvatarContent[] = [
  // ── 1. SINGLE PROPERTY LANDLORD ──────────────────────────────────────────
  {
    slug:       'single-property',
    title:      'Single Property Landlords',
    shortTitle: 'Single Property Landlord',
    pill:       '1-2 properties',
    profile:    'You own one or two rental properties and want reliable, professional management without the overhead and impersonal service of a large agency.',
    metaTitle:  'Property Management for Single Property Landlords | Property Management Harrow',
    metaDesc:   'Professional property management for landlords with 1-2 properties in Harrow. Compliance handled, maintenance coordinated, tenants managed. Local Harrow expertise without the agency overhead.',
    heroHeadline: 'You don\'t need a large agency. You need a local manager who treats your property like it matters.',
    heroDesc:     'Whether you let a flat in Pinner or a house in Stanmore, the compliance obligations and day-to-day management demands are the same as for a portfolio of twenty. Our Harrow property managers give single property landlords the same professional service, legal compliance, and responsive communication — without the cost or impersonal approach of a high-street chain.',
    empathyHeading: 'We understand what single property landlords actually need.',
    empathyBody: [
      'Most landlords with one or two properties did not set out to build a property business. You may have kept a home after relocating, inherited a property, or made a single investment purchase. Whatever the route, the reality is the same: you are legally responsible for gas safety certificates, electrical inspections, deposit protection, EPC compliance, right-to-rent checks, and a growing list of regulatory requirements that change regularly.',
      'The challenge for single property landlords is that the compliance burden is identical whether you own one property or fifty — but you do not have the infrastructure, systems, or time to manage it all yourself. Missed safety certificates carry unlimited fines. A poorly referenced tenant can cost months of lost rent and thousands in legal fees. A maintenance issue left unresolved can escalate into a far more expensive repair.',
      'What most single property landlords need is straightforward: someone local, responsive, and competent who will keep the property compliant, find and manage good tenants, handle maintenance promptly, and keep you informed without you having to chase. That is exactly what we provide — and we do it at a cost that makes sense for a one or two-property landlord.',
    ],
    painHeading: 'The three issues single property landlords face most often.',
    pains: [
      {
        head: 'Compliance overwhelm — too many regulations, too little time',
        body: 'Landlord legislation has expanded significantly in recent years. Gas safety certificates, electrical installation condition reports, EPC requirements, deposit protection rules, Section 21 reform, right-to-rent checks, and smoke and carbon monoxide alarm regulations all carry specific deadlines and penalties for non-compliance. For a landlord with one property and a full-time job, keeping on top of every obligation is genuinely difficult. A single missed certificate can result in an inability to serve valid notice or, worse, an unlimited fine.',
      },
      {
        head: 'Maintenance stress — dealing with emergencies and unreliable tradespeople',
        body: 'When a boiler fails on a Friday evening or a leak appears while you are on holiday, you need someone who can respond immediately with trusted, vetted contractors. Single property landlords without a management arrangement often find themselves scrambling to find available tradespeople, negotiating costs without benchmark knowledge, and dealing with tenant frustration in the meantime. A professional manager has established contractor relationships, agreed rates, and 24-hour emergency protocols already in place.',
      },
      {
        head: 'Tenant issues — from selection to disputes',
        body: 'The wrong tenant can turn a straightforward investment into a costly nightmare. Inadequate referencing, poorly drafted tenancy agreements, late rent left unchallenged, and disputes over deposit deductions are all common problems for self-managing landlords. Professional tenant selection — with comprehensive referencing, proper right-to-rent checks, and a well-drafted AST — dramatically reduces the risk of problem tenancies and protects your legal position if issues do arise.',
      },
    ],
    servicesHeading: 'The services most relevant to single property landlords.',
    relevantServices: [
      {
        slug:  'residential-lettings-management',
        title: 'Residential Lettings Management',
        why:   'Full property management covering compliance, tenant communication, maintenance coordination, and regular inspections — so you can be hands-off with confidence.',
      },
      {
        slug:  'tenant-find-letting',
        title: 'Tenant Find & Letting',
        why:   'Professional marketing, comprehensive referencing, and legally compliant tenancy setup — ensuring the right tenant from day one.',
      },
      {
        slug:  'rent-collection-accounting',
        title: 'Rent Collection & Accounting',
        why:   'Guaranteed rent collection, transparent monthly statements, and end-of-year summaries — keeping your finances clear and your cash flow predictable.',
      },
    ],
    toolsTeaser: {
      heading: 'Free tools for single property landlords.',
      desc:    'Use our calculators to understand your property\'s performance and management costs before speaking to us.',
      tools: [
        { label: 'Rental Yield Calculator',     href: '/tools/rental-yield-calculator/',     desc: 'Calculate the gross and net rental yield on your property based on current market rents.' },
        { label: 'Management Fee Calculator',   href: '/tools/management-fee-calculator/',   desc: 'See exactly what professional management would cost for your property — with no hidden extras.' },
      ],
    },
    harrowAreas: [
      { name: 'Pinner',             href: '/harrow/pinner/',             why: 'Popular with single property landlords — period homes and family lets in high demand' },
      { name: 'Harrow on the Hill', href: '/harrow/harrow-on-the-hill/', why: 'Strong rental demand from professionals and families near excellent transport links' },
      { name: 'Stanmore',           href: '/harrow/stanmore/',           why: 'Higher-value properties where professional management protects your investment' },
    ],
    faqs: [
      {
        q: 'Is professional management worth the cost for just one property?',
        a: 'For most single property landlords, yes. The management fee is typically a percentage of the monthly rent — and in return you receive full compliance management, tenant vetting, maintenance coordination, and legal protection. The cost of a single compliance failure, a bad tenant, or an unmanaged maintenance issue almost always exceeds the annual management fee. Many landlords who start self-managing switch to professional management after their first difficult experience.',
      },
      {
        q: 'What compliance obligations do I have as a landlord in Harrow?',
        a: 'You are legally required to hold a valid gas safety certificate (annually), an electrical installation condition report (every five years), a valid EPC, and working smoke and carbon monoxide alarms. You must protect the tenant\'s deposit in a government-backed scheme within 30 days and serve the prescribed information. Right-to-rent checks must be completed before the tenancy starts. Harrow Council also requires licensing for certain property types. We manage all of this as standard.',
      },
      {
        q: 'Can I switch from self-managing to professional management mid-tenancy?',
        a: 'Yes, and it is a common arrangement. We can take over management of an existing tenancy without disrupting the tenant. We review the current compliance position, introduce ourselves to the tenant, set up rent collection, and ensure all certificates and documentation are up to date. The transition is typically completed within a week.',
      },
    ],
    finalCta: 'Get professional management for your property — without the agency overhead.',
  },

  // ── 2. PORTFOLIO LANDLORD ────────────────────────────────────────────────
  {
    slug:       'portfolio-landlords',
    title:      'Portfolio Landlords',
    shortTitle: 'Portfolio Landlord',
    pill:       '3+ properties',
    profile:    'You own multiple rental properties and need consistent, professional management across your entire portfolio — with clear reporting and coordinated maintenance.',
    metaTitle:  'Property Management for Portfolio Landlords | Property Management Harrow',
    metaDesc:   'Professional property management for portfolio landlords with 3+ properties in Harrow. Consistent standards, consolidated reporting, and coordinated maintenance across your portfolio.',
    heroHeadline: 'Managing multiple properties requires systems, not spreadsheets.',
    heroDesc:     'When you own three or more rental properties, the management challenge changes. Individual property issues become portfolio-wide patterns. Maintenance becomes a logistics exercise. Compliance tracking across multiple tenancies requires proper systems. Our Harrow team manages portfolios with the consistency, reporting, and coordination that serious landlords expect.',
    empathyHeading: 'You need consistency across every property — not a different standard at each one.',
    empathyBody: [
      'Portfolio landlords know that the real challenge is not managing one property well — it is maintaining the same standard across every property simultaneously. When you have tenants in Wealdstone, Edgware, and Kenton, each with different tenancy dates, different certificate renewal schedules, and different maintenance requirements, the administrative burden grows exponentially. One missed gas certificate across a portfolio of eight properties carries the same legal consequences as missing it on one.',
      'The reporting gap is where most portfolio landlords feel the pain most acutely. You need to know — at a glance — which properties are occupied, which certificates are due for renewal, what maintenance is outstanding, and what your net rental position is across the portfolio. Most managing agents provide property-by-property updates but no consolidated portfolio view. The result is that you spend your evenings compiling your own spreadsheets from multiple sources.',
      'Coordinated maintenance is the other area where portfolio landlords benefit most from professional management. A single contractor relationship for boiler servicing, a consistent approach to property inspections, and bulk pricing on routine maintenance all reduce costs and improve response times. We manage portfolios as portfolios — not as a collection of individual properties that happen to have the same landlord.',
    ],
    painHeading: 'Where portfolio landlords lose time and money.',
    pains: [
      {
        head: 'Inconsistent standards across properties',
        body: 'When different properties are managed by different agents — or self-managed alongside professionally managed stock — standards inevitably vary. One property has a thorough inventory and regular inspections; another has not been inspected in eighteen months. One tenancy agreement is up to date; another still references regulations that have since changed. Inconsistency creates risk, and across a portfolio, that risk compounds. A single management approach across all properties eliminates these gaps.',
      },
      {
        head: 'Reporting gaps — no consolidated portfolio view',
        body: 'Most portfolio landlords cannot answer basic questions about their portfolio without significant effort: what is the current void rate, which certificates expire this quarter, what is the total maintenance spend year-to-date, and what is the net yield across all properties? Without consolidated reporting, these questions require manual aggregation from multiple sources. We provide portfolio-level reporting as standard — giving you the information you need to make informed decisions.',
      },
      {
        head: 'Maintenance coordination across multiple properties',
        body: 'A boiler service at one property, a damp investigation at another, and an emergency plumbing call at a third — all in the same week. Without coordinated contractor management, each issue is handled in isolation, often at different rates, with different response times, and with no overview of total maintenance expenditure. Portfolio-level contractor relationships mean better rates, faster response, and a single point of accountability for all works across your properties.',
      },
    ],
    servicesHeading: 'The services most relevant to portfolio landlords.',
    relevantServices: [
      {
        slug:  'residential-lettings-management',
        title: 'Residential Lettings Management',
        why:   'Consistent, full-service management across every property in your portfolio — with a single point of contact and unified standards.',
      },
      {
        slug:  'rent-collection-accounting',
        title: 'Rent Collection & Accounting',
        why:   'Consolidated rent collection and portfolio-level financial reporting — monthly statements and annual summaries across all properties.',
      },
      {
        slug:  'tenant-find-letting',
        title: 'Tenant Find & Letting',
        why:   'Professional tenant sourcing with consistent referencing standards — reducing void periods and ensuring quality tenants across the portfolio.',
      },
    ],
    toolsTeaser: {
      heading: 'Understand your portfolio economics.',
      desc:    'Our calculators help portfolio landlords model management costs and void impact across multiple properties.',
      tools: [
        { label: 'Management Fee Calculator', href: '/tools/management-fee-calculator/', desc: 'Calculate the total management cost across your portfolio and compare against self-management.' },
        { label: 'Void Cost Calculator',      href: '/tools/void-cost-calculator/',      desc: 'See the true cost of void periods across your portfolio — and how faster letting reduces losses.' },
      ],
    },
    harrowAreas: [
      { name: 'Wealdstone',  href: '/harrow/wealdstone/',  why: 'High rental demand and strong yields — popular for portfolio building in Harrow' },
      { name: 'Edgware',     href: '/harrow/edgware/',     why: 'Excellent transport links driving consistent tenant demand across property types' },
      { name: 'Kenton',      href: '/harrow/kenton/',      why: 'Affordable entry points for portfolio expansion with reliable family tenant demand' },
    ],
    faqs: [
      {
        q: 'Do you offer discounted management fees for larger portfolios?',
        a: 'Yes. We offer tiered management fee structures for landlords with three or more properties under our management. The per-property cost reduces as the portfolio size increases, reflecting the efficiencies of managing multiple properties for the same landlord. We are transparent about our fee structure and will provide a clear, written proposal before you commit to anything.',
      },
      {
        q: 'Can you take over management of properties currently with different agents?',
        a: 'Yes, and we do this regularly. We coordinate the transition from each existing agent, review all current tenancy agreements and compliance documentation, and bring every property up to a consistent standard. The process is managed to minimise disruption to existing tenants, and we handle all communication with outgoing agents on your behalf.',
      },
      {
        q: 'What reporting do you provide for portfolio landlords?',
        a: 'We provide monthly property-level statements and a consolidated portfolio summary covering rent collected, maintenance expenditure, void periods, and compliance status across all properties. Annual summaries are provided in a format suitable for your accountant. You will have a clear, up-to-date picture of your portfolio\'s financial and operational position at all times.',
      },
      {
        q: 'How do you handle maintenance across multiple properties?',
        a: 'We use established contractor relationships to deliver consistent, competitively priced maintenance across your portfolio. Routine works such as boiler servicing and safety inspections are scheduled proactively. Emergency repairs are handled through our 24-hour response process. All works are approved, supervised, and documented centrally — giving you a single point of accountability.',
      },
    ],
    finalCta: 'Bring your portfolio under one roof — with management that scales.',
  },

  // ── 3. HMO LANDLORD ─────────────────────────────────────────────────────
  {
    slug:       'hmo-landlords',
    title:      'HMO Landlords',
    shortTitle: 'HMO Landlord',
    pill:       'High-yield properties',
    profile:    'You operate houses in multiple occupation and need a management partner who understands licensing compliance, multi-tenant coordination, and the specific demands of shared living.',
    metaTitle:  'HMO Property Management for Landlords | Property Management Harrow',
    metaDesc:   'Specialist HMO property management in Harrow. Licensing compliance, multi-tenant management, fire safety, and utilities coordination. Local expertise for high-yield HMO landlords.',
    heroHeadline: 'HMO management is not standard lettings with more bedrooms. It requires specialist knowledge.',
    heroDesc:     'HMOs generate higher yields — but they also demand higher standards of management. Mandatory and additional licensing, fire safety compliance, multi-tenant coordination, and utilities management all require specific expertise that most general letting agents do not have. Our Harrow team specialises in HMO management and understands the regulations, the practicalities, and the tenant dynamics.',
    empathyHeading: 'We know what it takes to run an HMO properly.',
    empathyBody: [
      'Operating an HMO is fundamentally different from managing a single-let property. You are not dealing with one tenant or one household — you are managing multiple individuals, often unrelated, sharing communal spaces. The potential for interpersonal conflict, inconsistent cleaning standards, and competing expectations is built into the model. Without proactive management, small issues escalate quickly into tenancy failures and costly void periods.',
      'The licensing regime adds a layer of complexity that most letting agents are not equipped to handle. Harrow Council operates both mandatory and additional HMO licensing schemes, each with specific requirements around room sizes, amenity provision, fire safety, and management standards. A licence application involves detailed floor plans, fire risk assessments, management declarations, and compliance with conditions that are enforced through inspections. Getting the licence is only the beginning — maintaining compliance with its conditions throughout the licence period is where most HMO landlords need ongoing support.',
      'Fire safety in HMOs is not optional and is not the same as in a standard rental property. Fire doors, emergency lighting, fire alarm systems, fire blankets, extinguishers, and clear escape routes are all licence conditions in most cases. These systems require regular testing, maintenance, and documentation. A missed fire safety inspection or a failed alarm test can result in licence revocation, prosecution, or — in the worst case — a tragedy that could have been prevented.',
    ],
    painHeading: 'The three biggest management challenges for HMO landlords.',
    pains: [
      {
        head: 'Licensing requirements — getting it right and keeping it right',
        body: 'HMO licensing in Harrow involves mandatory licensing for properties with five or more occupants forming two or more households, and additional licensing schemes that can capture smaller HMOs. The application process requires detailed documentation, and the licence conditions impose ongoing obligations around property standards, management practices, and safety compliance. Non-compliance carries civil penalty notices of up to £30,000 per offence, rent repayment orders, and potential criminal prosecution. A specialist HMO manager ensures your licence is obtained correctly and every condition is maintained throughout.',
      },
      {
        head: 'Fire safety — the non-negotiable obligation',
        body: 'Fire safety in an HMO goes well beyond a working smoke alarm. Depending on the property size and layout, you may need a Grade A fire alarm system, fire doors to every habitable room and kitchen, emergency lighting on escape routes, fire blankets and extinguishers in kitchens, and a documented fire risk assessment reviewed annually. Each element requires regular testing and maintenance records. We manage the full fire safety compliance programme — from initial risk assessment through to ongoing testing and documentation.',
      },
      {
        head: 'Tenant conflicts and communal area management',
        body: 'Multiple unrelated tenants sharing kitchens, bathrooms, and living spaces creates a management dynamic that does not exist in single-let properties. Disputes over cleanliness, noise, personal belongings in communal areas, and utility usage are routine. Without a responsive management presence, these issues drive good tenants out and create void periods that erode the yield advantage of the HMO model. Proactive tenant management, clear house rules, and prompt intervention when issues arise are essential.',
      },
    ],
    servicesHeading: 'The services most relevant to HMO landlords.',
    relevantServices: [
      {
        slug:  'hmo-management',
        title: 'HMO Management',
        why:   'Specialist HMO management covering licensing, fire safety compliance, multi-tenant coordination, and communal area maintenance.',
      },
      {
        slug:  'residential-lettings-management',
        title: 'Residential Lettings Management',
        why:   'Full property management for any single-let properties alongside your HMO stock — consistent standards across your entire portfolio.',
      },
      {
        slug:  'tenant-find-letting',
        title: 'Tenant Find & Letting',
        why:   'Specialist HMO tenant sourcing — finding compatible tenants who understand shared living and meet referencing standards.',
      },
    ],
    toolsTeaser: {
      heading: 'Calculate your HMO performance.',
      desc:    'Use our tools to understand the yield and void cost dynamics of your HMO properties.',
      tools: [
        { label: 'Rental Yield Calculator', href: '/tools/rental-yield-calculator/', desc: 'Calculate the gross and net yield on your HMO — factoring in higher running costs and management fees.' },
        { label: 'Void Cost Calculator',    href: '/tools/void-cost-calculator/',    desc: 'See the true cost of room voids in your HMO — and how faster re-letting protects your yield.' },
      ],
    },
    harrowAreas: [
      { name: 'Wealdstone',         href: '/harrow/wealdstone/',         why: 'Harrow\'s highest concentration of HMOs — licensing compliance and tenant management are active priorities' },
      { name: 'Harrow on the Hill', href: '/harrow/harrow-on-the-hill/', why: 'Strong demand for professional and student HMOs near transport and amenities' },
      { name: 'South Harrow',       href: '/harrow/edgware/',            why: 'Growing HMO market with good transport links and affordable room rates' },
    ],
    faqs: [
      {
        q: 'Does my property need an HMO licence in Harrow?',
        a: 'If your property is occupied by five or more people forming two or more separate households, it requires a mandatory HMO licence. Harrow Council also operates additional licensing schemes that can capture smaller HMOs — typically properties occupied by three or more people forming two or more households in designated areas. We can assess your property against current licensing requirements and manage the full application process if a licence is needed.',
      },
      {
        q: 'What fire safety requirements apply to my HMO?',
        a: 'Fire safety requirements depend on the size, layout, and number of storeys. Most HMOs require fire doors to habitable rooms and kitchens, a fire detection and alarm system (the grade depends on the property), emergency lighting on escape routes, fire extinguishers and fire blankets in kitchen areas, and a documented fire risk assessment. These systems must be tested and maintained regularly, with records kept for inspection. We manage the full fire safety programme as part of our HMO management service.',
      },
      {
        q: 'How do you handle tenant disputes in shared properties?',
        a: 'We set clear expectations from the outset through comprehensive house rules that form part of the tenancy agreement. When disputes arise — and they do in any shared property — we intervene promptly, mediate where possible, and take formal action where necessary. Our experience is that most disputes are resolved through early, direct communication. Where a tenant consistently breaches the tenancy terms, we manage the formal process to address the situation.',
      },
      {
        q: 'Can you manage the HMO licence application for me?',
        a: 'Yes. We manage the entire licensing process — from initial assessment of whether a licence is required, through the preparation of floor plans, fire risk assessments, and supporting documentation, to the submission of the application and liaison with Harrow Council throughout. Once the licence is granted, we ensure ongoing compliance with all licence conditions for the duration of the licence period.',
      },
    ],
    finalCta: 'Get specialist HMO management that protects your licence and your yield.',
  },

  // ── 4. OVERSEAS LANDLORD ─────────────────────────────────────────────────
  {
    slug:       'overseas-landlords',
    title:      'Overseas Landlords',
    shortTitle: 'Overseas Landlord',
    pill:       'Remote management',
    profile:    'You own property in Harrow but live abroad. You need a local management team you can trust to handle everything — from tenant issues to compliance — without you needing to be in the country.',
    metaTitle:  'Property Management for Overseas Landlords | Property Management Harrow',
    metaDesc:   'Full-service property management for overseas landlords with properties in Harrow. Local presence, responsive communication, and complete compliance management — wherever you are in the world.',
    heroHeadline: 'You live abroad. Your Harrow property still needs someone on the ground.',
    heroDesc:     'Overseas landlords face a unique challenge: you have all the same legal obligations as any UK landlord, but you cannot attend to them in person. You need a local management team that is genuinely responsive, proactively manages compliance, coordinates maintenance without delay, and communicates clearly across time zones. Our Harrow team manages properties for landlords based across the world.',
    empathyHeading: 'Distance should not mean uncertainty about your property.',
    empathyBody: [
      'Whether you relocated for work, returned to your home country, or invested in Harrow property from overseas, the management challenge is the same: you need someone local who will look after your property as if it were their own. The reality for many overseas landlords is very different — calls that go unanswered, maintenance requests that sit unresolved for weeks, compliance certificates that lapse without anyone noticing, and a general sense that your property is not a priority.',
      'The compliance burden on overseas landlords is particularly acute. You have the same obligations as any UK landlord — gas safety, electrical inspections, EPC, deposit protection, right-to-rent checks — but you cannot attend the property to verify that work has been done or that standards are being maintained. You are relying entirely on your managing agent to fulfil these obligations on your behalf, and if they fail, the legal liability falls on you as the landlord, not on the agent.',
      'Communication is the area where most overseas landlords feel the frustration most keenly. Time zone differences, unresponsive agents, and a lack of proactive updates leave you feeling disconnected from your own investment. You should not have to chase your agent for basic information. You should receive regular, structured updates — and when something urgent arises, you should hear about it immediately, not days later. That is the standard we hold ourselves to.',
    ],
    painHeading: 'The three biggest risks for overseas landlords.',
    pains: [
      {
        head: 'No local presence — and no one to rely on',
        body: 'When you live thousands of miles away, every issue that would be a minor inconvenience for a local landlord becomes a significant concern. A tenant reports a leak and you cannot visit the property. A certificate expires and you cannot arrange the renewal yourself. A neighbour complains and you cannot attend to the situation. Without a reliable local management team, these issues accumulate — and the consequences of neglect are borne by you as the property owner, regardless of where you live.',
      },
      {
        head: 'Reliance on unresponsive or passive agents',
        body: 'Many overseas landlords have experienced the frustration of agents who are slow to respond, reluctant to deal with issues proactively, and difficult to reach across time zones. Emails go unanswered for days. Maintenance requests are acknowledged but not actioned. Compliance renewals are missed until the landlord chases them. This is not acceptable for any landlord — but for an overseas landlord who cannot simply visit the property, it is a genuine risk to both the investment and your legal position.',
      },
      {
        head: 'Compliance from afar — the legal risk you cannot see',
        body: 'As an overseas landlord, you are legally responsible for every compliance obligation that applies to your property. Gas safety certificates, electrical inspections, smoke and carbon monoxide alarms, deposit protection, licensing requirements, and right-to-rent checks must all be completed on time and documented correctly. If your agent allows a certificate to lapse or fails to complete a right-to-rent check, the penalty falls on you. Professional management with rigorous compliance tracking is not a luxury for overseas landlords — it is a necessity.',
      },
    ],
    servicesHeading: 'The services most relevant to overseas landlords.',
    relevantServices: [
      {
        slug:  'residential-lettings-management',
        title: 'Residential Lettings Management',
        why:   'Full-service property management with proactive compliance, regular inspections, and structured communication — giving you confidence from any distance.',
      },
      {
        slug:  'rent-collection-accounting',
        title: 'Rent Collection & Accounting',
        why:   'Reliable rent collection with clear monthly statements and annual summaries — sent to you wherever you are, in a format your accountant can work with.',
      },
      {
        slug:  'block-management',
        title: 'Block Management',
        why:   'If you own a freehold or share of freehold in Harrow, we manage the block — service charges, communal maintenance, and leaseholder communication — on your behalf.',
      },
    ],
    toolsTeaser: {
      heading: 'Understand your property\'s performance from anywhere.',
      desc:    'Our calculators help overseas landlords evaluate their Harrow property\'s yield and management costs remotely.',
      tools: [
        { label: 'Rental Yield Calculator',   href: '/tools/rental-yield-calculator/',   desc: 'Calculate the gross and net yield on your Harrow property based on current market rents.' },
        { label: 'Management Fee Calculator', href: '/tools/management-fee-calculator/', desc: 'See exactly what full-service management would cost — so you can budget with confidence from abroad.' },
      ],
    },
    harrowAreas: [
      { name: 'Harrow on the Hill', href: '/harrow/harrow-on-the-hill/', why: 'Popular with overseas landlords — strong rental demand and excellent transport connections to central London' },
      { name: 'Stanmore',           href: '/harrow/stanmore/',           why: 'Higher-value properties where professional management protects your investment from a distance' },
      { name: 'Pinner',             href: '/harrow/pinner/',             why: 'Family homes in high demand — consistent tenancies with lower turnover for overseas owners' },
    ],
    faqs: [
      {
        q: 'Can you manage everything without me needing to visit the UK?',
        a: 'Yes. We manage all aspects of your property remotely on your behalf — from tenant sourcing and referencing through to compliance management, maintenance coordination, and rent collection. All documentation is handled digitally, and we communicate via email, phone, or video call at times that work across your time zone. Many of our overseas landlord clients have not visited their property in years and are entirely comfortable with the level of service and communication they receive.',
      },
      {
        q: 'How will I know what is happening with my property?',
        a: 'You will receive monthly statements covering rent collected, any maintenance works carried out, and the compliance status of your property. Inspection reports with photographs are sent after every property visit. If anything urgent arises — a maintenance emergency, a tenant issue, or a compliance matter — we contact you immediately. You will never need to chase us for information.',
      },
      {
        q: 'Do I have any additional tax obligations as an overseas landlord?',
        a: 'Yes. Under the Non-Resident Landlord Scheme (NRLS), letting agents are required to deduct basic rate tax from your rent unless you have HMRC approval to receive it gross. We can guide you on the NRLS registration process and ensure your rental income is handled correctly. We recommend working with a specialist tax adviser for your full UK tax obligations — we can provide referrals if needed.',
      },
      {
        q: 'What happens if there is an emergency at my property?',
        a: 'We operate a 24-hour emergency response process for all managed properties. If a tenant reports an emergency — such as a burst pipe, boiler failure, or security issue — we dispatch a vetted contractor immediately, without waiting for your approval. You are notified as soon as the situation is under control, with a full summary of the issue, the action taken, and the cost. For non-emergency maintenance, we seek your approval before instructing works above an agreed threshold.',
      },
    ],
    finalCta: 'Get reliable local management for your Harrow property — from wherever you are.',
  },
]

export const getAvatarBySlug = (slug: string): AvatarContent | undefined =>
  avatarContent.find(a => a.slug === slug)

export const getAllAvatarSlugs = (): string[] => avatarContent.map(a => a.slug)
