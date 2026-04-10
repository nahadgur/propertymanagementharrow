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
  // ── 1. ACCIDENTAL LANDLORD ────────────────────────────────────────────────
  {
    slug:       'accidental-landlords',
    title:      'Accidental Landlords',
    shortTitle: 'Accidental Landlord',
    pill:       '1–2 properties',
    profile:    'You became a landlord through circumstance — not strategy. Inherited property, kept a home after moving, or held onto a flat. Now compliance and tax are more complex than expected.',
    metaTitle:  'Property Tax Advice for Accidental Landlords | Property Accountants Harrow',
    metaDesc:   'Specialist property tax accountants for accidental landlords in Harrow. Clear, practical advice on compliance, Section 24, and CGT for 1–2 property landlords. ACCA/ICAEW certified.',
    heroHeadline: 'You didn\'t plan to become a landlord. But you still need the right accountant.',
    heroDesc:     'Whether you inherited a property, moved out of your first home, or kept a flat after relocating — the tax obligations of being a landlord are real and can be more complex than they appear. Our Harrow specialists give accidental landlords clear, practical guidance without the jargon.',
    empathyHeading: 'We understand your position.',
    empathyBody: [
      'Most accidental landlords didn\'t sit down one day and decide to build a property portfolio. A parent passed away and left a house. A relationship ended and selling the flat didn\'t make sense. A job move happened before the property market was right for selling. The result is the same: you\'re a landlord, whether or not that\'s how you think of yourself.',
      'What surprises most accidental landlords is how quickly the tax picture becomes complicated. Rental income must be declared. Mortgage interest relief is now restricted under Section 24 if you\'re a higher-rate taxpayer. If you eventually sell, Capital Gains Tax may apply — potentially on gains that have been building for years. And if the property was inherited, the CGT calculation starts from the date of death, not the original purchase price.',
      'The good news is that with one or two properties and the right specialist, this is all manageable. The risk is leaving it to a generalist who files your rental income figures but misses the planning opportunities — the PRR review before you sell, the income-splitting strategy that could drop you below the higher-rate threshold, the Section 24 check that confirms whether you\'re actually affected. Our specialists know what to look for.',
    ],
    painHeading: 'The three things accidental landlords get wrong most often.',
    pains: [
      {
        head: 'Not knowing whether Section 24 applies to them',
        body: 'Section 24 only creates additional tax for higher-rate taxpayers with mortgage-funded properties. Many accidental landlords with one or two properties and modest other income are entirely unaffected. Others are paying hundreds or thousands more in tax than they should because they have never had the calculation done. Knowing your actual Section 24 position — rather than assuming it is or isn\'t a problem — is the starting point for any tax review.',
      },
      {
        head: 'Missing Private Residence Relief on a sale',
        body: 'Accidental landlords who previously lived in the property they are now letting are often entitled to Private Residence Relief on the gain for the period of occupation — plus the final nine months of ownership regardless of whether they still live there. This relief is frequently overlooked, particularly when the property was a main home years before. A specialist will review the full occupation history before any sale is agreed.',
      },
      {
        head: 'Inheriting a property without a CGT baseline review',
        body: 'When a property is inherited, the base cost for CGT purposes is the probate value at the date of death — not what the original owner paid for it. This often means the CGT gain on an inherited property is smaller than expected. But it also means the calculation must be done correctly: using the wrong base cost can result in either overpaid or underpaid CGT, both of which create problems with HMRC.',
      },
    ],
    servicesHeading: 'The services most relevant to accidental landlords.',
    relevantServices: [
      {
        slug:  'capital-gains-tax-planning',
        title: 'Capital Gains Tax Planning',
        why:   'PRR review, inherited property base cost, and disposal timing advice — structured before the sale is agreed.',
      },
      {
        slug:  'section-24-tax-mitigation',
        title: 'Section 24 Tax Mitigation',
        why:   'Confirm whether Section 24 actually affects your position — and if it does, identify the most practical response.',
      },
      {
        slug:  'sdlt-stamp-duty-planning',
        title: 'SDLT & Stamp Duty Planning',
        why:   'If you\'re buying a new main home while letting your previous one, SDLT planning and potential surcharge reclaims apply.',
      },
    ],
    toolsTeaser: {
      heading: 'Free tools for accidental landlords.',
      desc:    'Use our calculators to get a quick sense of your tax position before speaking to a specialist.',
      tools: [
        { label: 'Section 24 Calculator', href: '/tools/section-24-calculator/', desc: 'See whether and how much Section 24 is costing you based on your actual figures.' },
        { label: 'CGT Calculator',        href: '/tools/capital-gains-tax-calculator-uk/', desc: 'Estimate your Capital Gains Tax liability on a property disposal.' },
      ],
    },
    harrowAreas: [
      { name: 'Pinner',            href: '/harrow/pinner/',            why: 'High concentration of accidental landlords from period housing stock' },
      { name: 'Harrow on the Hill',href: '/harrow/harrow-on-the-hill/',why: 'Inherited property and PRR cases are common in this area' },
      { name: 'Stanmore',          href: '/harrow/stanmore/',          why: 'High-value inherited estates with significant CGT and IHT implications' },
    ],
    faqs: [
      {
        q: 'Do I need a specialist accountant if I only have one rental property?',
        a: 'A generalist accountant can file your rental income figures accurately. But a property specialist does more than file — they review your Section 24 position, check PRR eligibility before any sale, identify income-splitting opportunities, and flag inherited property CGT issues that a generalist may not think to look for. The cost of missing one of these reviews typically exceeds the cost of specialist advice many times over.',
      },
      {
        q: 'I inherited a property and I\'m now letting it. What are my tax obligations?',
        a: 'Rental income from an inherited property must be declared on a self-assessment return in the same way as any other letting income. The Section 24 restriction applies if you are a higher-rate taxpayer and the property carries a mortgage. When you eventually sell, CGT is calculated on the gain since the date of inheritance (using the probate value as the base cost) — which is often more favourable than many landlords expect. A specialist can model the full tax picture for you.',
      },
      {
        q: 'I lived in my property before letting it. Does that help with CGT?',
        a: 'Yes, potentially significantly. Private Residence Relief exempts the gain for any period the property was your main home, plus the final nine months of ownership regardless of occupation. Lettings relief of up to £40,000 per owner may also apply. Both reliefs must be formally claimed and the calculations done correctly — this is one area where specialist advice can make a material difference to the tax outcome.',
      },
      {
        q: 'Is the matching service free if I only have one property?',
        a: 'Yes, completely. The matching service is free for all landlords regardless of portfolio size. We match accidental landlords with specialists who work comfortably with one or two-property situations and charge fees appropriate to the work involved — not to the portfolio value.',
      },
    ],
    finalCta: 'Get clear on your tax position — without jargon.',
  },

  // ── 2. PORTFOLIO INVESTOR ─────────────────────────────────────────────────
  {
    slug:       'portfolio-investors',
    title:      'Portfolio Investors',
    shortTitle: 'Portfolio Investor',
    pill:       '3+ properties',
    profile:    'You built a portfolio deliberately. Now Section 24 is eroding returns, SPV incorporation is on your radar, and your generalist accountant doesn\'t have the answers you need.',
    metaTitle:  'Property Tax Advice for Portfolio Landlords | Property Accountants Harrow',
    metaDesc:   'Specialist property tax accountants for portfolio landlords with 3+ properties in Harrow. Section 24 restructuring, SPV modelling, CGT planning. ACCA/ICAEW certified network.',
    heroHeadline: 'You built the portfolio deliberately. The tax strategy should be equally deliberate.',
    heroDesc:     'Section 24 is the defining tax challenge for highly leveraged portfolio investors. SPV incorporation may be the answer — but only when the economics are modelled first. Our Harrow specialists work with portfolio landlords who need more than compliance: they need strategy.',
    empathyHeading: 'You know what the problem is. What you need is someone who knows how to solve it.',
    empathyBody: [
      'Portfolio landlords are rarely surprised by Section 24. Most have known about it for years, have watched it phase in, and have felt the impact on their annual tax bill growing year on year. What surprises them is how difficult it is to find an accountant who knows what to actually do about it.',
      'The SPV question is typically where this becomes most acute. In theory, incorporating a portfolio into a limited company restores full mortgage interest relief and reduces the effective tax rate on rental profits from up to 45% to 25%. In practice, the SDLT on transfer, CGT on the disposal into the company, and the legal and refinancing costs of the move have to be modelled against the projected annual saving — and most generalist accountants are not equipped to do this accurately.',
      'Our network specialists work with portfolio landlords every day. They understand the Section 24 maths, the SPV economics, the SDLT surcharge reclaim opportunities, and the CGT planning needed when disposing of assets. If you have three or more properties and have not had a specialist property tax review in the past two years, the cost of inaction is almost certainly higher than the cost of the review.',
    ],
    painHeading: 'Where portfolio landlords are losing most money.',
    pains: [
      {
        head: 'Section 24 compounding on a leveraged portfolio',
        body: 'The larger and more leveraged the portfolio, the more acute the Section 24 impact. A portfolio investor with seven mortgaged properties at 65% LTV and an average rate of 5% could have over £200,000 of annual finance costs — generating a Section 24 additional tax bill of over £20,000 per year for a 40% taxpayer. This is not a compliance issue: it is a structural one that requires a strategic response.',
      },
      {
        head: 'SPV modelling done incorrectly — or not at all',
        body: 'The question of whether to incorporate is the most consequential financial decision most portfolio landlords face. Getting it wrong — either paying transfer costs that will never be recovered, or failing to incorporate and continuing to overpay tax for years — is expensive in both directions. The answer requires property-specific financial modelling that accounts for your portfolio\'s exact gain position, LTV, rental income, and personal tax rate.',
      },
      {
        head: 'Using a generalist accountant for specialist problems',
        body: 'Most portfolio landlords are with accountants who are perfectly capable of filing self-assessment returns and company accounts. Very few are with accountants who proactively model restructuring options, identify SDLT reclaim opportunities across past acquisitions, review CGT positions before disposals are agreed, or stay current with the specific legislation affecting leveraged residential portfolios. The difference in outcome — over five or ten years — is significant.',
      },
    ],
    servicesHeading: 'The services most relevant to portfolio investors.',
    relevantServices: [
      {
        slug:  'section-24-tax-mitigation',
        title: 'Section 24 Tax Mitigation',
        why:   'Full exposure modelling and restructuring strategy — SPV, spousal splitting, or pension contributions — based on your specific portfolio.',
      },
      {
        slug:  'spv-company-incorporation',
        title: 'SPV Company Incorporation',
        why:   'SDLT and CGT cost of transfer modelled against projected annual savings — breakeven timeline calculated before any decision is made.',
      },
      {
        slug:  'capital-gains-tax-planning',
        title: 'Capital Gains Tax Planning',
        why:   'Structured disposal planning across portfolio assets — PRR, spousal transfers, timing — before each sale is agreed.',
      },
      {
        slug:  'sdlt-stamp-duty-planning',
        title: 'SDLT & Stamp Duty Planning',
        why:   'Pre-exchange SDLT review on every new acquisition — and retrospective review of past purchases for missed reclaims.',
      },
    ],
    toolsTeaser: {
      heading: 'Run the numbers before the call.',
      desc:    'Our calculators are built specifically for portfolio investors who want to understand the economics before engaging a specialist.',
      tools: [
        { label: 'Section 24 Calculator',         href: '/tools/section-24-calculator/',            desc: 'Model your exact annual Section 24 cost across your full portfolio.' },
        { label: 'SPV vs Personal Tax Calculator', href: '/tools/spv-vs-personal-tax-calculator/',   desc: 'Compare personal vs limited company tax across your specific income level and portfolio.' },
        { label: 'CGT Calculator',                 href: '/tools/capital-gains-tax-calculator-uk/',  desc: 'Estimate the CGT liability on individual portfolio disposals.' },
      ],
    },
    harrowAreas: [
      { name: 'Wealdstone',         href: '/harrow/wealdstone/',         why: 'Active portfolio building — Section 24 restructuring is a priority' },
      { name: 'Pinner',             href: '/harrow/pinner/',             why: 'Affluent portfolios — SPV modelling is most frequently relevant' },
      { name: 'Edgware',            href: '/harrow/edgware/',            why: 'Portfolio expansion — SDLT planning on each new acquisition' },
    ],
    faqs: [
      {
        q: 'At what portfolio size does a specialist accountant become essential?',
        a: 'From the moment you have a second mortgaged property, the Section 24 question becomes relevant. From the third property, the SPV decision becomes material. From the fifth property, the interaction between multiple assets — CGT on disposals, linked transaction SDLT, portfolio-level income splitting — makes specialist knowledge genuinely necessary rather than merely helpful. The cost of generalist advice at portfolio scale is typically measured in missed opportunities rather than errors.',
      },
      {
        q: 'Should I incorporate now or wait until the portfolio is larger?',
        a: 'There is no universal answer — it depends on your portfolio\'s current gain position, LTV, annual Section 24 cost, and your plans for future acquisitions. What is clear is that the decision becomes more expensive to implement as the portfolio grows (more SDLT, more CGT), and the annual cost of not incorporating grows with every leveraged acquisition made in personal name. Most specialists recommend modelling the economics at the current portfolio size and annually thereafter.',
      },
      {
        q: 'Can I move only some of my properties into an SPV?',
        a: 'Yes. A partial incorporation — moving properties with the smallest built-in gains while retaining those with larger gains personally — is a common approach for portfolio landlords where a full transfer is not cost-effective. Future acquisitions can also be made through the company while the personal portfolio is held and managed down over time. A specialist will model the partial incorporation scenario alongside full incorporation to identify the most cost-effective path.',
      },
    ],
    finalCta: 'Stop overpaying tax on your portfolio. Get the specialist review.',
  },

  // ── 3. HMO OPERATOR ──────────────────────────────────────────────────────
  {
    slug:       'hmo-operators',
    title:      'HMO Operators',
    shortTitle: 'HMO Operator',
    pill:       'High-yield strategy',
    profile:    'You run HMOs for yield. Licensing compliance, complex expense tracking, and Section 24 on leveraged properties make this the most tax-intensive landlord profile.',
    metaTitle:  'Property Tax Advice for HMO Operators | Property Accountants Harrow',
    metaDesc:   'Specialist property tax accountants for HMO operators in Harrow. Section 24 restructuring, capital allowances, HMO licensing compliance advice. ACCA/ICAEW certified network.',
    heroHeadline: 'HMO tax is more complex than most accountants realise. Ours specialise in it.',
    heroDesc:     'HMO operators face a distinct combination of tax challenges — Section 24 on leveraged stock, capital allowances that most generalists miss, and HMO licensing obligations that interact with the tax treatment of the property. Our Harrow specialists understand the HMO model in detail.',
    empathyHeading: 'Running HMOs is not like running a standard buy-to-let portfolio.',
    empathyBody: [
      'The HMO model is fundamentally different from standard single-let investing — and the tax position reflects that complexity. Higher gross yields come with higher gross costs: utilities, licences, maintenance, and management fees are substantially higher per property. The result is a cost structure that needs specialist tracking and a tax return that is considerably more complex than a simple rental income declaration.',
      'The Section 24 impact is particularly acute for HMO operators. Properties are typically more leveraged than standard buy-to-lets — either because of the higher acquisition cost of larger properties, or because operators have used bridging and development finance to fund conversions. The finance cost restriction on a six-bedroom HMO with £400,000 of mortgage debt at 5.5% generates a meaningful annual Section 24 bill for any higher-rate taxpayer.',
      'Capital allowances are the most commonly missed tax relief in the HMO sector. The communal facilities of an HMO — boilers, water systems, communal furniture, electrical installations, fire safety equipment — often qualify as plant and machinery eligible for capital allowances. These are claimable against rental income and can generate significant tax relief in the year of purchase or conversion. The majority of HMO operators never claim them because their accountant does not know to look.',
    ],
    painHeading: 'The three biggest tax issues for HMO operators.',
    pains: [
      {
        head: 'Section 24 on high-leverage HMO stock',
        body: 'An HMO operator with three properties mortgaged at £350,000 each at 6% interest has over £63,000 of annual finance costs. Under Section 24, a 40% taxpayer recovers only £12,600 as a tax credit — losing over £12,600 per year compared to the pre-2017 position. For larger HMO portfolios, this annual loss compounds quickly. SPV incorporation can restore full deductibility — but the economics must be modelled first.',
      },
      {
        head: 'Unclaimed capital allowances on HMO conversions',
        body: 'When a standard property is converted to an HMO — or when a purpose-built HMO is acquired — significant capital expenditure typically qualifies for plant and machinery allowances. Boilers, water systems, electrical installations, security systems, fire doors, and communal furnishings can all qualify. This relief is rarely claimed, and unlike some other reliefs, it can be claimed retrospectively in some circumstances through a specialist capital allowances review.',
      },
      {
        head: 'HMO licensing costs and their tax treatment',
        body: 'HMO licence fees, fire safety surveys, safety certificate costs, and the professional costs of the licence application are all deductible as revenue expenditure against rental income. The cost of physical works required as a licence condition — fire doors, emergency lighting, alarm systems — can be deductible or qualify for capital allowances depending on their nature. Most HMO operators\' accountants treat all of this as a lump sum rather than reviewing each item for optimal tax treatment.',
      },
    ],
    servicesHeading: 'Services most relevant to HMO operators.',
    relevantServices: [
      {
        slug:  'section-24-tax-mitigation',
        title: 'Section 24 Tax Mitigation',
        why:   'Model your exact Section 24 exposure on your HMO portfolio — and identify the most cost-effective restructuring approach.',
      },
      {
        slug:  'spv-company-incorporation',
        title: 'SPV Company Incorporation',
        why:   'Transfer HMO stock into a limited company to restore full mortgage interest deductibility — with SDLT and CGT fully modelled first.',
      },
      {
        slug:  'sdlt-stamp-duty-planning',
        title: 'SDLT & Stamp Duty Planning',
        why:   'Pre-exchange SDLT review on HMO acquisitions — including mixed-use classification assessment where applicable.',
      },
    ],
    toolsTeaser: {
      heading: 'Calculate your HMO tax position.',
      desc:    'Use our Section 24 and SPV calculators to get a quick read on your current position before a specialist review.',
      tools: [
        { label: 'Section 24 Calculator',         href: '/tools/section-24-calculator/',           desc: 'Input your HMO finance costs and income to see the exact Section 24 impact.' },
        { label: 'SPV vs Personal Tax Calculator', href: '/tools/spv-vs-personal-tax-calculator/', desc: 'Compare the tax position of holding your HMO stock personally vs in a limited company.' },
      ],
    },
    harrowAreas: [
      { name: 'Wealdstone',         href: '/harrow/wealdstone/',         why: 'Harrow\'s highest concentration of HMOs — licensing compliance and Section 24 are both active concerns' },
      { name: 'Harrow on the Hill', href: '/harrow/harrow-on-the-hill/', why: 'Student and professional HMO market near transport links' },
      { name: 'Edgware',            href: '/harrow/edgware/',            why: 'Growing HMO conversion activity — capital allowances planning relevant on new conversions' },
    ],
    faqs: [
      {
        q: 'Can I claim capital allowances on my HMO?',
        a: 'Potentially yes. HMO properties with communal facilities often contain embedded plant and machinery — boilers, water systems, electrical installations, fire safety equipment, communal furniture — that qualifies for capital allowances claimable against rental income. The availability and quantum of allowances depends on the specific property and what capital expenditure has been incurred. A capital allowances specialist can review your HMO\'s expenditure history and identify qualifying items.',
      },
      {
        q: 'How does Section 24 interact with HMO rental income?',
        a: 'Section 24 applies to HMO properties in the same way as standard buy-to-lets: higher-rate taxpayers cannot deduct mortgage interest as an expense and instead receive only a 20% tax credit on finance costs. HMOs are typically more leveraged than standard properties, which amplifies the Section 24 impact. The deductibility of other HMO-specific costs — utilities included in rent, management fees, licensing costs — is not affected by Section 24.',
      },
      {
        q: 'Is an SPV the right structure for holding HMOs?',
        a: 'For leveraged HMO portfolios, SPV incorporation frequently makes economic sense because the annual Section 24 saving is larger relative to the portfolio size. However, the SDLT on transferring HMO stock — which may carry a higher value than standard buy-to-lets due to the HMO premium — needs to be calculated accurately. Some HMO properties with commercial elements (ground floor commercial, mixed-use buildings) may qualify for non-residential SDLT treatment on transfer, which changes the economics of incorporation significantly.',
      },
    ],
    finalCta: 'Your HMO portfolio deserves a specialist who understands it.',
  },

  // ── 4. NON-RESIDENT LANDLORD ──────────────────────────────────────────────
  {
    slug:       'non-resident',
    title:      'Non-Resident Landlords',
    shortTitle: 'Non-Resident Landlord',
    pill:       'Overseas / expat',
    profile:    'You live outside the UK but hold UK property. NRLS compliance, UK tax returns, and the interaction with your overseas tax position require specialist knowledge most accountants simply do not have.',
    metaTitle:  'Property Tax Advice for Non-Resident Landlords | Property Accountants Harrow',
    metaDesc:   'Specialist property tax accountants for non-resident landlords with UK property in Harrow. NRLS compliance, CGT planning, UK self-assessment. ACCA/ICAEW certified network.',
    heroHeadline: 'You live abroad. Your UK property still has UK tax obligations. We can help.',
    heroDesc:     'Non-resident landlords face a distinct compliance and planning challenge: UK tax obligations that persist regardless of where you live, combined with overseas tax positions that must be considered alongside them. Our Harrow specialists have handled non-resident cases across the UK\'s most common expat destinations.',
    empathyHeading: 'UK tax does not stop at the border — and neither should your advice.',
    empathyBody: [
      'Whether you are a UK national who relocated for work, a returning expat maintaining a UK property investment, or an overseas investor who acquired UK residential property, your tax obligations to HMRC continue regardless of where you live. Rental income is taxable in the UK. Capital gains on UK residential property are taxable in the UK. And failure to comply with the Non-Resident Landlord Scheme creates both financial and legal risk.',
      'The NRLS is the most commonly misunderstood obligation for non-resident landlords. Without HMRC approval to receive rent gross, letting agents and tenants are legally required to deduct basic rate income tax from rent before paying it to you. Many non-resident landlords discover this only when a letting agent refuses to pay the full rent, or when an HMRC enquiry identifies undeclared withholding. The process of registering, receiving approval, and then filing annual UK self-assessment returns must be managed correctly from the outset.',
      'Beyond compliance, there are genuine planning opportunities for non-resident landlords. The interaction between UK Capital Gains Tax and overseas tax on a property disposal, the use of double tax treaties to avoid double taxation on rental income, and the structuring of ownership to reflect personal and family circumstances all require specialist knowledge that combines UK property tax expertise with an understanding of non-resident rules. Our specialists have this combination.',
    ],
    painHeading: 'The compliance and planning risks non-resident landlords face most often.',
    pains: [
      {
        head: 'NRLS non-compliance — not knowing what you don\'t know',
        body: 'A significant number of non-resident landlords are unaware that letting agents are legally required to deduct 20% basic rate tax from gross rent without an NRLS exemption certificate. Some letting agents fail to apply the deduction, leaving the landlord with an undeclared tax liability. Others deduct it without the landlord understanding why. The solution is NRLS registration, HMRC approval to receive rent gross, and annual UK self-assessment filing — all of which a specialist can manage on your behalf.',
      },
      {
        head: 'CGT on UK property disposals by non-residents',
        body: 'Non-UK residents have been subject to UK CGT on disposals of UK residential property since April 2015, with reporting required within 60 days of completion regardless of whether any tax is payable. The calculation of the gain, the availability of Private Residence Relief for periods of UK occupation, and the interaction with any overseas CGT liability must all be handled correctly. Late filing attracts automatic penalties regardless of the tax position.',
      },
      {
        head: 'Double taxation — paying tax twice on the same income',
        body: 'Most countries with significant UK expat populations have double tax treaties with the UK that allow UK tax paid on rental income and gains to be credited against the overseas tax bill. But applying these treaties correctly — and making sure the treaty provisions are invoked on both the UK return and the overseas return — requires knowledge of both tax systems. Without specialist advice, many non-resident landlords inadvertently pay tax twice on the same income.',
      },
    ],
    servicesHeading: 'Services most relevant to non-resident landlords.',
    relevantServices: [
      {
        slug:  'capital-gains-tax-planning',
        title: 'Capital Gains Tax Planning',
        why:   'Non-resident CGT on UK property disposals — 60-day reporting, PRR review, and double tax treaty interaction.',
      },
      {
        slug:  'section-24-tax-mitigation',
        title: 'Section 24 Tax Mitigation',
        why:   'Section 24 applies to non-resident higher-rate UK taxpayers with mortgaged UK property — review your position and restructuring options.',
      },
      {
        slug:  'property-inheritance-tax',
        title: 'Property Inheritance Tax',
        why:   'UK residential property held by non-residents is fully within the UK IHT net — succession planning is often more urgent than UK-resident landlords realise.',
      },
    ],
    toolsTeaser: {
      heading: 'Understand your UK tax position before speaking to a specialist.',
      desc:    'Our calculators give non-resident landlords a quick read on their Section 24 and CGT position from wherever they are in the world.',
      tools: [
        { label: 'Section 24 Calculator', href: '/tools/section-24-calculator/',           desc: 'Check whether Section 24 applies to your UK rental income and estimate the annual cost.' },
        { label: 'CGT Calculator',        href: '/tools/capital-gains-tax-calculator-uk/', desc: 'Estimate your UK CGT liability on a residential property disposal as a non-resident.' },
      ],
    },
    harrowAreas: [
      { name: 'Harrow on the Hill', href: '/harrow/harrow-on-the-hill/', why: 'Higher proportion of non-resident landlords than any other Harrow area' },
      { name: 'Stanmore',           href: '/harrow/stanmore/',           why: 'High-value estates — IHT planning is a priority for non-resident owners of Stanmore property' },
      { name: 'Pinner',             href: '/harrow/pinner/',             why: 'Period properties held by expats who moved abroad rather than selling' },
    ],
    faqs: [
      {
        q: 'What is the Non-Resident Landlord Scheme and do I need to register?',
        a: 'The Non-Resident Landlord Scheme (NRLS) is HMRC\'s mechanism for collecting UK income tax from non-UK resident landlords. Without an NRLS exemption, letting agents and tenants must deduct 20% basic rate tax from gross rent before paying it to you. To receive rent gross, you must apply to HMRC for approval, demonstrate that your UK tax affairs are up to date, and commit to filing an annual UK self-assessment return. A specialist can manage the registration and ongoing compliance on your behalf.',
      },
      {
        q: 'Do I pay UK Capital Gains Tax when I sell my UK property as a non-resident?',
        a: 'Yes. Non-UK residents have been subject to UK CGT on disposals of UK residential property since April 2015. The gain is calculated from the April 2015 market value (or original purchase price if acquired after that date), and the disposal must be reported to HMRC within 60 days of completion — regardless of whether any tax is payable. Private Residence Relief may be available for periods when the property was your main UK home. The interaction with any overseas CGT charge must also be considered.',
      },
      {
        q: 'Can I avoid double taxation on my UK rental income?',
        a: 'Most countries with significant UK non-resident landlord populations have double tax treaties with the UK. These treaties typically allow the UK tax paid on rental income (via NRLS or self-assessment) to be credited against the overseas tax liability on the same income. Applying the treaty correctly on both returns — and making sure the overseas tax authority accepts the credit — requires specialist knowledge of both tax systems. A specialist familiar with your country of residence can manage this.',
      },
      {
        q: 'Can I manage my UK tax obligations entirely remotely?',
        a: 'Yes. Our matching service, and the specialists in our network, are fully capable of operating remotely for non-resident clients. HMRC correspondence, self-assessment filing, NRLS registration, and CGT reporting can all be managed without you needing to be in the UK. Most non-resident client relationships involve video calls, digital document sharing, and electronic authorisation of HMRC forms.',
      },
    ],
    finalCta: 'Manage your UK property tax obligations confidently — from anywhere in the world.',
  },
]

export const getAvatarBySlug = (slug: string): AvatarContent | undefined =>
  avatarContent.find(a => a.slug === slug)

export const getAllAvatarSlugs = (): string[] => avatarContent.map(a => a.slug)
