export const siteConfig = {
  name: 'Property Management Harrow',
  tagline: 'Vetted Property Management Specialists',
  url: 'https://www.propertymanagementharrow.co.uk',
  phone: '',
  email: '',
  description:
    'We connect Harrow landlords with vetted property management professionals — ARLA Propertymark members with client money protection, specialising in residential lettings management, tenant find, block management, and HMO licensing across every Harrow postcode.',
}

export const navLinks = [
  { label: 'Services',           href: '/services/' },
  { label: 'Landlords',          href: '/landlords/' },
  { label: 'Harrow Specialists', href: '/property-management-harrow/' },
  { label: 'Free Tools',         href: '/tools/' },
  { label: 'Guides',             href: '/guides/' },
  { label: 'About',              href: '/about/' },
]

export const trustBadges = [
  {
    label: 'ARLA Propertymark Members',
    title: 'ARLA Propertymark Members',
    icon: 'Award',
    description: 'Every agent in our network holds current ARLA Propertymark membership, verified before any introduction is made.',
  },
  {
    label: 'Client Money Protection',
    title: 'Client Money Protection',
    icon: 'ShieldCheck',
    description: 'All recommended agents carry client money protection insurance, safeguarding your rental income at every stage.',
  },
  {
    label: 'Property Specialists Only',
    title: 'Property Specialists Only',
    icon: 'UserCheck',
    description: 'We match you with agents whose business is built around property management — not generalist estate agents.',
  },
  {
    label: 'Free Matching for Landlords',
    title: 'Free Matching for Landlords',
    icon: 'PoundSterling',
    description: 'The matching service is completely free for landlords. You pay only the managing agent you choose to instruct.',
  },
]

export const stats = [
  { number: '1,200+', label: 'Properties under management' },
  { number: '340+',   label: 'Harrow landlords matched' },
  { number: '24hr',   label: 'Introduction guarantee' },
]

// Real, attributable testimonials only. The previous entries could not be
// verified as genuine attributable reviews, so the array is emptied:
// fabricated reviews are a DMCCA and E-E-A-T risk. Re-add only verifiable,
// consented client reviews.
export const testimonials: {
  id: string; name: string; location: string; portfolioType: string;
  service: string; rating: number; quote: string; text: string;
}[] = [];

export const homeFaqs = [
  {
    q: 'How does the matching service work?',
    a: 'Tell us about your property — type, location across Harrow, number of units, and what you need help with. We review your situation and connect you with a vetted property management specialist from our Harrow network who has direct experience managing properties like yours. The matching service is completely free for landlords.',
  },
  {
    q: 'Is there a cost for using this service?',
    a: 'No. The matching service is entirely free for landlords. You only pay the managing agent directly for their services once you have been introduced and agreed terms. We are compensated by the professionals in our network.',
  },
  {
    q: 'How quickly will I be matched?',
    a: 'Most landlords are matched within 24 hours. For urgent situations — where a tenant has given notice or a property is already vacant — we can often arrange same-day introductions from our Harrow and wider London network.',
  },
  {
    q: 'I already have a managing agent. Is it worth switching?',
    a: "Many landlords we work with had an agent before they came to us. The difference is specialism and accountability. If your current agent is slow to respond to maintenance, struggles to fill voids, or sends vague monthly statements, a better-matched specialist can make a measurable difference. Tell us your situation and we'll give you an honest assessment of whether switching would add real value.",
  },
  {
    q: 'Are all specialists ARLA or RICS qualified?',
    a: 'Yes, without exception. Every managing agent in our network holds ARLA Propertymark membership or RICS accreditation and carries client money protection insurance. We do not introduce unregulated agents or generalist estate agents who occasionally take on management clients.',
  },
  {
    q: 'Do you cover all areas of Harrow?',
    a: 'Yes. Our network covers all Harrow areas including Stanmore, Pinner, Harrow on the Hill, Wealdstone, Kenton, Edgware, North Harrow, South Harrow, and the surrounding HA postcodes. Most specialists manage properties across multiple Harrow areas.',
  },
]

export const footerLinks = {
  services: [
    { label: 'Residential Lettings Management', href: '/services/residential-lettings-management/' },
    { label: 'Tenant Find & Letting',          href: '/services/tenant-find-letting/' },
    { label: 'Block Management',               href: '/services/block-management/' },
    { label: 'HMO Management',                 href: '/services/hmo-management/' },
    { label: 'Rent Collection & Accounting',    href: '/services/rent-collection-accounting/' },
  ],
  harrow: [
    { label: 'All Harrow Specialists',          href: '/property-management-harrow/' },
    { label: 'Stanmore',                        href: '/harrow/stanmore/' },
    { label: 'Pinner',                          href: '/harrow/pinner/' },
    { label: 'Wealdstone',                      href: '/harrow/wealdstone/' },
    { label: 'Harrow on the Hill',              href: '/harrow/harrow-on-the-hill/' },
    { label: 'Edgware',                         href: '/harrow/edgware/' },
  ],
  landlords: [
    { label: 'Single Property Landlords',       href: '/landlords/single-property/' },
    { label: 'Portfolio Landlords',             href: '/landlords/portfolio-landlords/' },
    { label: 'HMO Landlords',                  href: '/landlords/hmo-landlords/' },
    { label: 'Overseas Landlords',              href: '/landlords/overseas-landlords/' },
  ],
  tools: [
    { label: 'Rental Yield Calculator',         href: '/tools/rental-yield-calculator/' },
    { label: 'Management Fee Calculator',       href: '/tools/management-fee-calculator/' },
    { label: 'Void Cost Calculator',            href: '/tools/void-cost-calculator/' },
    { label: 'All Free Tools',                  href: '/tools/' },
  ],
  guides: [
    { label: 'Guide: HMO Licensing Harrow',     href: '/guides/hmo-licensing-harrow/' },
    { label: 'Guide: Tenant Screening',         href: '/guides/tenant-screening/' },
    { label: 'All Guides',                      href: '/guides/' },
  ],
  legal: [
    { label: 'Privacy Policy',  href: '/privacy-policy/' },
    { label: 'Terms of Use',    href: '/terms/' },
    { label: 'About Us',        href: '/about/' },
    { label: 'Contact',         href: '/contact/' },
    { label: 'How We Match You',href: '/how-we-match-you/' },
  ],
}

// Legacy export — required by old location pages
export const FAQS_LOCATION = [
  {
    question: 'Do you cover all areas of Harrow?',
    answer: 'Yes. Our network covers all Harrow areas including Stanmore, Pinner, Harrow on the Hill, Wealdstone, Kenton, Edgware, North Harrow, South Harrow, and surrounding HA postcodes.',
  },
  {
    question: 'Why use a local Harrow property management specialist?',
    answer: 'Harrow-based specialists understand local rental values, HMO licensing requirements in the London Borough of Harrow, tenant demand patterns, and the property types that make up the local housing stock — knowledge that directly reduces voids and compliance risk.',
  },
  {
    question: 'Can you match specialists for portfolio landlords?',
    answer: 'Yes. Managing a portfolio requires specialist expertise in multi-property maintenance coordination, rent collection across units, void minimisation, and regulatory compliance. We match you with agents who have direct experience managing portfolios of your size across Harrow.',
  },
]
