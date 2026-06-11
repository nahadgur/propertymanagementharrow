// data/blog.ts

export interface ContentBlock {
  type: string; text?: string; html?: string; src?: string; alt?: string;
  items?: string[]; articles?: { slug: string; title: string; image?: string }[];
}
export interface BlogArticle {
  slug: string; title: string; metaTitle: string; metaDescription: string;
  category: string; hub: string; draft: boolean;
  publishDate: string; dateModified?: string; featuredImage: string; excerpt: string;
  faqs?: { question: string; answer: string }[];
  content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'harrow-landlord-guide-property-management-2026',
    hub: 'switching-property-managers',
    draft: false,
    title: 'Harrow Landlord Guide: Choosing the Right Property Manager in 2026',
    metaTitle: 'Harrow Property Management Guide 2026 | Landlord Advice',
    metaDescription: 'Everything Harrow landlords need to know about choosing a property manager in 2026 — fees, qualifications, compliance requirements, and what to look for before signing a management agreement.',
    category: 'Landlord Guides',
    publishDate: '2026-01-10',
    featuredImage: '/images/hero-main.png',
    excerpt: 'Choosing the right property manager in Harrow is one of the most important decisions a landlord makes. This guide covers what to look for, what to avoid, and how to compare agents on more than just headline fees.',
    content: [
      { type: 'p', text: 'The Harrow rental market in 2026 is one of the most active in outer London. Strong demand across HA1 to HA3, a growing HMO sector, and increasing compliance obligations for landlords have all contributed to a market where professional property management is no longer optional for most landlords — it is essential.' },
      { type: 'p', text: 'But not all property managers are equal. Choosing on headline fee alone is one of the most common mistakes Harrow landlords make. A cheap agent with a poor maintenance network, inconsistent compliance practices, or high staff turnover can cost significantly more in void periods, arrears, and regulatory penalties than a professional agent charges in fees.' },
      { type: 'h2', text: 'What to Look for in a Harrow Property Manager' },
      { type: 'p', text: 'The first thing to verify is professional membership. ARLA Propertymark membership requires agents to hold client money protection insurance, comply with a code of practice, and undertake regular professional development. RICS membership indicates additional qualifications relevant to higher-value properties and block management. Both provide recourse if things go wrong.' },
      { type: 'list', items: ['ARLA Propertymark or RICS membership', 'Client money protection insurance (legally required)', 'Property Redress Scheme membership', 'Transparent published fee schedule', 'References from landlords with similar portfolios', 'Demonstrated local knowledge of Harrow rental values'] },
      { type: 'h2', text: 'Understanding Management Fee Structures' },
      { type: 'p', text: 'Full management fees in Harrow typically range from 8% to 15% of monthly rent. The headline percentage is only part of the picture. Ask specifically about: tenant find fees (usually one to two weeks rent charged separately), maintenance markup percentages, renewal fees, inspection fees, and notice fees. A 10% management fee with a 15% maintenance markup may cost more than a 14% all-inclusive fee.' },
      { type: 'h2', text: 'Compliance: What Your Manager Should Be Handling' },
      { type: 'p', text: 'A professional property manager should track and renew all statutory certificates without prompting: Gas Safety Records annually, EICR certificates every five years, and EPC certificates every ten years. They should register deposits within 30 days and serve prescribed information correctly. They should conduct Right to Rent checks for all adult occupiers. Failure in any of these areas creates direct legal exposure for the landlord.' },
      { type: 'p', text: 'Ask any prospective manager how they track compliance deadlines. A spreadsheet managed by one person is a single point of failure. A proper property management system with automated reminders is a meaningful difference.' },
    ]
  },
  {
    slug: 'hmo-licensing-harrow-2026-landlord-checklist',
    hub: 'hmo-licensing-harrow',
    draft: false,
    title: 'HMO Licensing in Harrow 2026: Complete Landlord Checklist',
    metaTitle: 'HMO Licensing Harrow 2026: What Landlords Must Know',
    metaDescription: 'A complete guide to HMO licensing requirements in the London Borough of Harrow for 2026 — mandatory licensing thresholds, application process, licence conditions, and the penalties for non-compliance.',
    category: 'HMO Guidance',
    publishDate: '2026-02-05',
    featuredImage: '/images/hero-services.png',
    excerpt: 'HMO licensing in Harrow is actively enforced. This checklist covers mandatory licensing requirements, the application process, what licence conditions typically require, and the financial consequences of getting it wrong.',
    content: [
      { type: 'p', text: 'The London Borough of Harrow actively enforces HMO licensing requirements. Landlords operating properties that meet the HMO threshold without a licence face criminal prosecution, civil financial penalties, and — critically — Rent Repayment Orders that can strip up to 12 months of rental income from their accounts.' },
      { type: 'h2', text: 'When Does Mandatory HMO Licensing Apply?' },
      { type: 'p', text: 'A property requires a mandatory HMO licence in Harrow when it is occupied by five or more people forming two or more separate households, and at least some of the occupants share facilities such as a kitchen or bathroom. This threshold catches the majority of larger shared houses and professional lets.' },
      { type: 'p', text: 'The council may also operate additional licensing schemes covering smaller HMOs — properties with three or four occupants that would not otherwise require a mandatory licence. Landlords should check directly with the London Borough of Harrow licensing team for the current position on additional licensing in their specific area.' },
      { type: 'h2', text: 'HMO Licence Conditions: What is Typically Required' },
      { type: 'list', items: [
        'Minimum room sizes — typically 6.51m² for one adult, 10.22m² for two adults',
        'Interlinked mains-wired smoke alarms on every floor and in every habitable room',
        'Heat detectors in kitchens',
        'Fire doors on habitable rooms and kitchen',
        'Emergency lighting in communal areas (in larger HMOs)',
        'Annual gas safety inspection and valid Gas Safety Record',
        'EICR certificate within the required period',
        'Adequate bathroom and kitchen facilities for the number of occupants',
        'Fit and proper person declaration from the licence holder'
      ]},
      { type: 'h2', text: 'The Cost of Non-Compliance' },
      { type: 'p', text: 'Operating an unlicensed HMO is a criminal offence. The London Borough of Harrow can impose civil financial penalties of up to £30,000 per offence. Tenants living in an unlicensed HMO can apply to the First-tier Tribunal (Property Chamber) for a Rent Repayment Order, recovering up to 12 months of rent paid during the period of unlicensed operation.' },
      { type: 'p', text: 'Landlords who have been prosecuted or received a civil penalty for HMO offences may also be found not to be a fit and proper person for future licence applications — effectively barring them from operating HMOs in the future.' },
    ]
  },
  {
    slug: 'switching-property-manager-harrow-guide',
    hub: 'switching-property-managers',
    draft: false,
    title: 'How to Switch Property Managers in Harrow Without Disrupting Your Tenants',
    metaTitle: 'Switching Property Managers in Harrow | Step-by-Step Guide',
    metaDescription: 'A practical guide to switching property managers in Harrow — reviewing your management agreement, serving notice, managing the handover, and ensuring your tenants are not disrupted during the transition.',
    category: 'Landlord Guides',
    publishDate: '2026-03-01',
    featuredImage: '/images/hero-services.png',
    excerpt: 'Switching property managers in Harrow is simpler than most landlords expect. This guide walks through the process from reviewing your current agreement through to completing the handover without disrupting tenancies.',
    content: [
      { type: 'p', text: 'Many Harrow landlords stay with an underperforming property manager for longer than they should because they assume switching will be disruptive, complicated, or trigger fees that make it not worthwhile. In practice, a managed handover between professional agents is straightforward and rarely noticed by tenants.' },
      { type: 'h2', text: 'Step 1: Review Your Current Management Agreement' },
      { type: 'p', text: 'Before serving notice, review your existing management agreement carefully. Most agreements require between one and three months notice in writing. Check for any restrictions on switching during a fixed-term tenancy, and note any fees that may apply on termination — such as a retained percentage of remaining tenancy rent in some agreements.' },
      { type: 'h2', text: 'Step 2: Find Your New Manager Before Giving Notice' },
      { type: 'p', text: 'Instructing your new manager before serving notice on the old one means there is no gap in management and the transition can be planned properly. Your new manager will advise on the handover process and take responsibility for coordinating the transfer of documents and records from the outgoing agent.' },
      { type: 'h2', text: 'Step 3: Serve Notice in Writing' },
      { type: 'p', text: 'Serve notice on your existing agent in writing — email is sufficient but keep a record. State the effective date of termination clearly. Your existing agent is obliged to cooperate with the handover, provide all documentation, and transfer any client money held within a reasonable timeframe.' },
      { type: 'h2', text: 'What the Handover Should Include' },
      { type: 'list', items: [
        'Copies of all tenancy agreements and any deed of variation',
        'Deposit registration details for each tenancy',
        'Gas Safety Records, EICR certificates, and EPC certificates',
        'Inventory and check-in reports',
        'Maintenance history and any outstanding issues',
        'Service charge accounts if applicable',
        'Tenant contact details and any rent payment history',
        'Keys to all properties'
      ]},
      { type: 'p', text: 'Tenants should receive a formal written notification of the change of managing agent, the new contact details for maintenance and rent payment, and reassurance that their tenancy terms remain unchanged. A professionally managed transition should be entirely transparent to tenants — they notice the improvement in service, not the change itself.' },
    ]
  },
  {
    slug: 'tenant-find-fees-explained-harrow-landlords',
    hub: 'property-management-fees-harrow',
    draft: true,
    title: 'Tenant Find Fees Explained for Harrow Landlords',
    metaTitle: 'Tenant Find Fees for Harrow Landlords Explained',
    metaDescription: 'What Harrow landlords pay in tenant find and setup fees, how the charge is structured, what it includes, the hidden extras to check, and how to weigh it against full management.',
    category: 'Landlord Guides',
    publishDate: '2026-06-10',
    dateModified: '2026-06-10',
    featuredImage: '/images/hero-services.png',
    excerpt: 'A tenant find fee is the one-off charge for sourcing and referencing a tenant and setting up the tenancy. This guide explains what Harrow landlords pay, what the fee covers, and the extras to check before you sign.',
    content: [
      { type: 'p', text: 'A tenant find fee is the one-off charge a letting agent makes for finding and referencing a tenant and setting up the tenancy, typically one to two weeks rent plus VAT in Harrow. It covers marketing, viewings, referencing and the paperwork, but the agent steps away once the tenant has moved in.' },
      { type: 'h2', text: 'What a Tenant Find Fee Actually Covers' },
      { type: 'p', text: 'Tenant find, also called let-only, is the lightest service a letting agent offers. The agent values the rent, markets the property across the major portals, arranges and conducts viewings, vets applicants, references the chosen tenant, drafts the tenancy agreement, registers the deposit, and hands over the keys. After move-in the landlord takes over day-to-day management: collecting rent, handling repairs, conducting inspections, and tracking compliance deadlines.' },
      { type: 'p', text: 'That scope matters because the fee is sometimes mistaken for an ongoing service. It is not. Once the tenancy starts, a let-only landlord is the point of contact for the tenant and carries the full legal responsibility for gas safety, electrical safety, deposit rules and the rest. The fee buys you the start of the tenancy, not its management.' },
      { type: 'h2', text: 'How the Fee Is Charged in Harrow' },
      { type: 'p', text: 'Tenant find fees in Harrow are usually structured in one of three ways: a percentage of the first month rent, a fixed number of weeks rent (commonly one to two weeks), or a flat fee. With average Harrow rents, a one-week charge on a typical two-bedroom flat can run to several hundred pounds plus VAT, while higher-value or HMO lettings cost more because the referencing and marketing work is greater.' },
      { type: 'list', items: [
        'Percentage of the first month rent, charged once on move-in.',
        'A set number of weeks rent, most often one to two weeks plus VAT.',
        'A flat fee fixed regardless of the rent achieved.',
        'Renewal fees if the same tenant signs a further fixed term.',
      ]},
      { type: 'p', text: 'Always confirm whether the quoted figure includes VAT, and whether referencing, the tenancy agreement, deposit registration and the inventory are inside the fee or billed separately. The headline number tells you little until you know what sits underneath it.' },
      { type: 'p', text: 'Local demand is a factor in how quickly a let-only instruction pays off. Strong tenant interest in HA1 around the town centre, HA2 across South Harrow and Rayners Lane, and HA3 in Wealdstone and Kenton means a well-marketed property at the right rent often lets within days, which is the point of a tenant find service. A weak listing, or a rent set above the local level, leaves the property empty while the fee still falls due once a tenant is eventually found.' },
      { type: 'h2', text: 'Tenant Find Versus Full Management' },
      { type: 'html', html: 'The right choice depends on how much of the work you want to keep. Tenant find suits hands-on landlords who live locally and have time for repairs and rent chasing. Full management, charged as an ongoing percentage of rent, suits landlords who are time-poor, hold property at a distance, or run higher-risk lettings such as HMOs. Our <a href="/guides/property-management-fees-harrow/">guide to Harrow management costs</a> sets out how the ongoing percentage compares with the one-off let-only charge.' },
      { type: 'html', html: 'If you do want a managed service rather than let-only, the <a href="/services/tenant-find-letting/">tenant find and letting service</a> can be arranged through an agent who also offers ongoing management, so you can step up later without changing provider. We are a matching service: we connect Harrow landlords with vetted ARLA Propertymark agents and do not manage property ourselves, so the comparison we help with is impartial.' },
      { type: 'h2', text: 'Hidden Extras to Check Before You Sign' },
      { type: 'p', text: 'The let-only fee is rarely the only cost. Before instructing an agent, ask for a written schedule covering every charge that could appear on a tenant find arrangement, so there are no surprises at move-in or renewal.' },
      { type: 'list', items: [
        'Referencing and Right to Rent checks, if billed on top of the headline fee.',
        'The inventory and check-in report, often a separate line.',
        'Deposit registration and serving the prescribed information.',
        'Renewal fees each time the tenant signs a further term.',
        'Re-marketing costs if the first let falls through before move-in.',
      ]},
      { type: 'html', html: 'It is also worth knowing where the law sits. The <a href="https://www.gov.uk/government/publications/tenant-fees-act-2019-guidance" target="_blank" rel="noopener noreferrer">Tenant Fees Act 2019</a>, as the Government guidance explains, banned most fees charged to tenants in England but did not cap what agents may charge landlords. It does require agents to publish their landlord fees transparently, so a clear written schedule is a reasonable thing to expect.' },
      { type: 'h2', text: 'Working Out the True Cost' },
      { type: 'html', html: 'To compare a one-off tenant find fee against ongoing management fairly, look at the total cost across the likely length of the tenancy rather than the headline figure. A let-only fee that looks cheap can work out dearer if you face an early void, a renewal charge, and the cost of your own time. Our <a href="/tools/management-fee-calculator/">management fee calculator</a> lets you model the let-only charge against a full-management percentage across the rent you actually expect to achieve.' },
      { type: 'p', text: 'Whichever route you choose, the agents matched through this site hold ARLA Propertymark membership, which requires client money protection and a published code of practice. That gives Harrow landlords recourse if a fee dispute or a service failure ever arises, on let-only just as on full management.' },
    ],
    faqs: [
      { question: 'How much is a tenant find fee in Harrow?', answer: 'Tenant find fees in Harrow are typically one to two weeks rent plus VAT, or a percentage of the first month rent, charged once when the tenant moves in. Higher-value lettings and HMOs cost more because the referencing and marketing work is greater. Always confirm whether VAT, referencing, the tenancy agreement and the inventory are included.' },
      { question: 'What does a tenant find or let-only fee include?', answer: 'It usually covers valuing the rent, marketing the property, arranging viewings, vetting and referencing the tenant, drafting the tenancy agreement, registering the deposit and handing over the keys. After move-in the landlord takes over rent collection, repairs, inspections and compliance, as the agent has no ongoing role.' },
      { question: 'Is a tenant find fee cheaper than full management?', answer: 'A one-off tenant find fee is lower upfront than an ongoing management percentage, but it only covers setting up the tenancy. Whether it is cheaper overall depends on void risk, renewal fees and the value of your own time managing the let. Compare the total cost across the expected tenancy length rather than the headline figure.' },
      { question: 'Can a letting agent charge the tenant a fee instead?', answer: 'No. The Tenant Fees Act 2019 banned most fees charged to tenants in England. It does not cap what agents charge landlords, but it does require them to publish their landlord fees transparently. A reputable Harrow agent will give you a clear written schedule before you sign.' },
      { question: 'Are tenant find fees tax-deductible for landlords?', answer: 'Letting agent fees, including tenant find charges, are generally an allowable expense that can be deducted from rental income when working out taxable profit. This is general information rather than tax advice, so confirm your own position with an accountant.' },
      { question: 'Do I pay a tenant find fee again at renewal?', answer: 'Some agents charge a renewal fee when the same tenant signs a further fixed term, which is separate from the original tenant find fee. Ask whether renewals are charged and at what rate before you instruct, as it affects the true cost of a longer tenancy.' },
    ]
  },
  {
    slug: 'section-24-mortgage-interest-relief-landlords',
    hub: 'rental-yield-landlord-finances-harrow',
    draft: true,
    title: 'How Section 24 Affects Mortgage Interest for Harrow Landlords',
    metaTitle: 'Section 24 Mortgage Interest Relief for Landlords',
    metaDescription: 'How Section 24 changed mortgage interest relief for Harrow landlords, how the 20 percent tax credit works, who it hits hardest, and the costs it does not restrict.',
    category: 'Landlord Finances',
    publishDate: '2026-06-10',
    dateModified: '2026-06-10',
    featuredImage: '/images/hero-services.png',
    excerpt: 'Section 24 stopped individual landlords deducting mortgage interest from rental income, replacing it with a 20 percent tax credit. This guide explains how the rule works, why it hits higher-rate Harrow landlords hardest, and what it means for your real return.',
    content: [
      { type: 'p', text: 'Section 24 stops individual landlords deducting mortgage interest from their rental income. Instead you are taxed on the full rent and receive a 20 percent tax credit on your finance costs. For higher and additional rate Harrow landlords this raises the real tax bill and can push taxable income into a higher band.' },
      { type: 'h2', text: 'What Section 24 Changed' },
      { type: 'html', html: 'Section 24 of the Finance (No. 2) Act 2015 reformed how mortgage interest is treated for individual landlords of residential property. Before the change, landlords deducted mortgage interest and other finance costs in full from rental income before tax was worked out. As the <a href="https://www.gov.uk/guidance/changes-to-tax-relief-for-residential-landlords-how-its-worked-out-including-worked-examples" target="_blank" rel="noopener noreferrer">GOV.UK guidance on tax relief for residential landlords</a> sets out, that deduction was withdrawn in stages between April 2017 and April 2020. Since the 2020 to 2021 tax year the deduction has gone entirely, replaced by a basic-rate tax credit.' },
      { type: 'p', text: 'The rule applies to individuals who hold residential property in their own name, including those letting in Harrow as a sideline alongside employment. It does not apply to companies, which can still treat mortgage interest as a business expense. That single distinction sits behind most of the restructuring landlords have considered since the change took full effect.' },
      { type: 'h2', text: 'How the 20 Percent Tax Credit Works' },
      { type: 'p', text: 'Under the current rules you declare the full rent as income, deduct your allowable running costs but not the mortgage interest, and pay tax on the resulting figure. You then reduce your tax bill by a credit worth 20 percent of your finance costs. The credit is capped at the basic rate, so it gives back the same proportion to every landlord regardless of their tax band.' },
      { type: 'p', text: 'A simplified Harrow example shows the effect. Take a landlord receiving £18,000 a year in rent on a two-bedroom flat, paying £9,000 in mortgage interest and £2,000 in other allowable costs. Taxable rental profit is now £16,000 (rent less the £2,000, with interest excluded), and the landlord receives a credit of £1,800 against the tax due, being 20 percent of the £9,000 interest. A basic-rate taxpayer ends up in broadly the same position as under the old rules. A higher-rate taxpayer does not, because the tax charged on that £16,000 is far larger than the credit returns.' },
      { type: 'h2', text: 'Why It Hits Higher-Rate Harrow Landlords Hardest' },
      { type: 'p', text: 'Harrow property values mean mortgages, and therefore interest costs, are often substantial. Because the full rent now counts as income before the credit is applied, that income can lift a landlord from the basic-rate band into the higher-rate band, or from higher into additional rate. The result is a higher headline tax bill and, in some cases, the loss of allowances that taper away as income rises.' },
      { type: 'p', text: 'For a higher-rate taxpayer the maths is stark. Tax is charged at 40 percent on rental profit that still has to cover the mortgage, but only 20 percent of the interest comes back as a credit. On a heavily geared Harrow let the effective tax rate on real profit can climb well above the headline band. This is why net yield, rather than the rent on paper, is the figure that matters once Section 24 is in play.' },
      { type: 'html', html: 'Modelling that properly is worth the effort. Our <a href="/tools/rental-yield-calculator/">rental yield calculator</a> lets you work net yield after realistic costs, and the wider <a href="/guides/rental-yield-landlord-finances-harrow/">guide to rental yield and landlord finances in Harrow</a> puts Section 24 in the context of the other numbers that decide what reaches your account.' },
      { type: 'h2', text: 'Costs Section 24 Does Not Restrict' },
      { type: 'p', text: 'Section 24 only restricts finance costs. The everyday costs of running a let remain fully deductible from rental income when you work out taxable profit, which makes keeping clean records more valuable than ever.' },
      { type: 'list', items: [
        'Letting and management agent fees.',
        'Repairs and maintenance (though not improvements).',
        'Landlord insurance premiums.',
        'Ground rent and service charges on a leasehold flat.',
        'Safety certificate costs such as gas and electrical checks.',
        'Accountancy fees for preparing the rental accounts.',
      ]},
      { type: 'html', html: 'Because these costs still reduce taxable profit in full, accurate bookkeeping protects your position. A managed landlord receives an itemised statement that captures every deductible cost, which is part of what a <a href="/services/rent-collection-accounting/">rent collection and accounting service</a> provides. We are a matching service: we connect Harrow landlords with vetted ARLA Propertymark agents and do not manage property ourselves, so the agents we match can supply the records your accountant needs without us holding your money.' },
      { type: 'h2', text: 'Options Landlords Consider' },
      { type: 'p', text: 'Some landlords respond to Section 24 by holding property through a limited company, because companies pay corporation tax on profit after deducting mortgage interest and are outside the restriction. Incorporation is not automatically better. It can trigger stamp duty and capital gains tax on transfer, brings company running costs, and changes how you draw income. Others reduce gearing, move to fixed lower-rate finance, or simply accept the position and focus on net yield.' },
      { type: 'p', text: 'None of these routes suits every landlord, and the right answer depends on your income, your wider tax position and your plans for the property. This is general information rather than tax advice, so take advice from a qualified accountant before acting. Areas such as Wealdstone, where higher-yielding and often more heavily geared stock is common, are exactly where the Section 24 sums deserve a careful look before you commit, and the local picture is covered on our <a href="/harrow/wealdstone/">Wealdstone property management page</a>.' },
      { type: 'html', html: 'If the administration of all this is the burden, matching with a managed agent removes much of it. <a href="/contact/">Tell us about your Harrow property</a> and we will connect you with vetted ARLA Propertymark agents who can keep your compliance and accounting records in order, leaving the tax planning to your accountant.' },
    ],
    faqs: [
      { question: 'What is Section 24 for landlords?', answer: 'Section 24 of the Finance (No. 2) Act 2015 stops individual landlords deducting mortgage interest from rental income before tax. Instead, the full rent is taxed and landlords receive a tax credit worth 20 percent of their finance costs. It was phased in between April 2017 and April 2020 and has applied in full since the 2020 to 2021 tax year.' },
      { question: 'Does Section 24 apply to limited companies?', answer: 'No. Section 24 applies to individuals holding residential property in their own name. Companies can still deduct mortgage interest as a business expense and pay corporation tax on the profit after that deduction. This is why some landlords consider incorporation, though it carries its own tax and cost consequences that should be assessed with an accountant.' },
      { question: 'How does the 20 percent mortgage interest tax credit work?', answer: 'You declare the full rent, deduct allowable running costs but not the mortgage interest, and pay tax on the result. You then reduce your tax bill by a credit equal to 20 percent of your finance costs. Because the credit is fixed at the basic rate, basic-rate taxpayers are broadly unaffected while higher and additional rate taxpayers pay more than under the old deduction.' },
      { question: 'Why are higher-rate landlords worse off under Section 24?', answer: 'The full rent now counts as income before the credit is applied, which can push a landlord into a higher tax band. Tax may be charged at 40 or 45 percent on profit that still has to service the mortgage, while only 20 percent of the interest is returned as a credit. On a heavily geared Harrow property the effective tax rate on real profit can rise sharply.' },
      { question: 'What costs can landlords still deduct under Section 24?', answer: 'Section 24 only restricts finance costs such as mortgage interest. Letting agent and management fees, repairs and maintenance, landlord insurance, ground rent and service charges, safety certificate costs and accountancy fees all remain fully deductible from rental income. Keeping accurate records of these costs is important to work out taxable profit correctly.' },
      { question: 'Should I move my Harrow rental into a limited company?', answer: 'It depends on your circumstances. A company is outside Section 24 and deducts mortgage interest in full, but transferring property in can trigger stamp duty and capital gains tax, and a company has its own running costs and rules for drawing income. There is no one-size answer, so take advice from a qualified accountant before deciding.' },
    ]
  }
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined => blogArticles.find(a => a.slug === slug);

// Draft gate: draft spokes 404 and are excluded from /blog, hub grids and the
// sitemap until the publisher flips them live.
export const getPublishedArticles = (): BlogArticle[] => blogArticles.filter(a => !a.draft);
export const getArticlesByHub = (hub: string): BlogArticle[] => blogArticles.filter(a => a.hub === hub && !a.draft);
export const getAllArticleSlugs = (): string[] => getPublishedArticles().map(a => a.slug);
