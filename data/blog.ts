// data/blog.ts

export interface ContentBlock {
  type: string; text?: string; src?: string; alt?: string;
  items?: string[]; articles?: { slug: string; title: string; image?: string }[];
}
export interface BlogArticle {
  slug: string; title: string; metaTitle: string; metaDescription: string;
  category: string; publishDate: string; featuredImage: string; excerpt: string;
  content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'harrow-landlord-guide-property-management-2026',
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
  }
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined => blogArticles.find(a => a.slug === slug);
export const getAllArticleSlugs = (): string[] => blogArticles.map(a => a.slug);
