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
    id:         'section-24',
    slug:       'section-24-tax-mitigation',
    title:      'Section 24 Tax Mitigation',
    shortTitle: 'Section 24',
    tagline:    'Stop the mortgage interest restriction destroying your returns',
    pill:       'Most requested',
    description:
      'The mortgage interest finance cost restriction has been stripping income from leveraged UK landlords since 2017. Higher-rate taxpayers can no longer deduct mortgage interest as an expense — instead receiving only a 20% tax credit. For many, this turns profitable portfolios into loss-making ones on paper while generating real tax bills. Our specialist accountants model your exact position and implement legal restructuring strategies to recapture as much relief as possible.',
    heroDesc:
      'The finance cost restriction is the single biggest threat to highly leveraged UK property portfolios. Our Harrow specialists model your exact exposure and implement the right mitigation strategy — before HMRC takes more than they should.',
    faqs: [
      {
        q: 'Who does Section 24 affect most?',
        a: 'Higher and additional rate taxpayers with mortgaged buy-to-let properties are worst affected. If your total income — including rental income — pushes you into the 40% or 45% tax band, you receive only a 20% tax credit on finance costs rather than full relief. Landlords with high loan-to-value ratios on multiple properties often face the largest cumulative losses.',
      },
      {
        q: 'Can Section 24 be avoided legally?',
        a: "Yes, through a range of legitimate strategies depending on your situation. The most comprehensive solution is incorporating your portfolio into a limited company (SPV), which allows the company to deduct 100% of mortgage interest as a business expense. Other strategies include spousal income splitting, pension contributions to reduce taxable income, and strategic use of capital allowances on qualifying HMO properties. The right solution depends on your specific portfolio, income level, and long-term plans.",
      },
      {
        q: 'How much could restructuring save me?',
        a: 'This varies enormously by portfolio. A higher-rate taxpayer with £400,000 of buy-to-let mortgage debt at 5% interest might be paying over £4,000 per year in avoidable additional tax under Section 24. Across a larger leveraged portfolio, the figure can run to five figures annually. A specialist will model your exact position before any advice is given.',
      },
    ],
  },
  {
    id:         'spv',
    slug:       'spv-company-incorporation',
    title:      'SPV Company Incorporation',
    shortTitle: 'SPV Incorporation',
    tagline:    'Move your portfolio into a limited company structure — the right way',
    pill:       'High impact',
    description:
      "Incorporating a buy-to-let portfolio into a Special Purpose Vehicle limited company allows landlords to reclaim full mortgage interest relief, pay corporation tax (currently 25%) rather than income tax on profits, and build a more transferable asset structure. But the SDLT and CGT implications on transfer are significant — and must be modelled before any action is taken. Our specialists calculate the exact breakeven point for your specific portfolio before a single property moves.",
    heroDesc:
      'SPV incorporation is one of the most powerful tools available to leveraged UK landlords. The tax benefits are substantial — but only when the transfer is structured correctly. Our Harrow specialists model the full picture before you commit to anything.',
    faqs: [
      {
        q: 'What is an SPV and how does it differ from a standard limited company?',
        a: 'A Special Purpose Vehicle (SPV) is a limited company established specifically to hold property investments. Unlike a trading company, an SPV has a defined SIC code (68100 or 68209) that mortgage lenders recognise as a property holding entity — which is important for accessing buy-to-let mortgage products within the company structure. Most lenders require this distinction. Your accountant will set the company up correctly from the outset.',
      },
      {
        q: 'Will I pay Stamp Duty Land Tax on transferring my existing portfolio?',
        a: "In most cases, yes. When you transfer a personally-held property into a limited company, HMRC treats it as a disposal and a purchase — triggering SDLT at the rates applicable to the transfer value, including the 3% additional dwelling surcharge. This is one of the most significant costs of incorporation and must be modelled against projected tax savings to determine the breakeven timeline. Some partnerships may qualify for SDLT partnership relief — a specialist will assess whether this applies.",
      },
      {
        q: 'Should I incorporate my existing portfolio or only buy new properties in the company?',
        a: "Both approaches are used, depending on circumstances. For portfolios with significant built-in gains, it often makes more sense to hold existing properties personally and acquire future properties via the SPV — avoiding the CGT and SDLT double hit on transfer. For portfolios with little gain, or where leveraged Section 24 losses are severe, full incorporation may justify the transfer costs. Your specialist will model both scenarios before recommending either.",
      },
    ],
  },
  {
    id:         'cgt',
    slug:       'capital-gains-tax-planning',
    title:      'Capital Gains Tax Planning',
    shortTitle: 'CGT Planning',
    tagline:    'Preserve wealth when selling — before the disposal, not after',
    pill:       'Wealth preservation',
    description:
      "Unplanned property disposals can trigger substantial Capital Gains Tax liabilities that are entirely avoidable with the right structure in place before the sale. Private Residence Relief, lettings relief, principal private residence nominations, holdover elections, and careful disposal timing are all tools available to property investors — but only when applied correctly and in advance. Our specialists structure disposals to preserve maximum wealth.",
    heroDesc:
      'Every pound of CGT paid on a property disposal is a pound that should have gone to you. Our Harrow specialists plan exits — before the sale is agreed, not after it completes.',
    faqs: [
      {
        q: 'What CGT reliefs are available on property disposals?',
        a: "Private Residence Relief (PRR) exempts gains on a property that has been your main home for any part of the ownership period — including the final 9 months regardless of occupation. Lettings relief of up to £40,000 per owner applies where PRR is also available and the property was let during occupation. Holdover relief, business asset disposal relief, and gift relief may apply in specific circumstances. The availability of each depends on the property's history and your broader tax position.",
      },
      {
        q: 'How does the Annual Exempt Amount work for property investors?',
        a: 'The CGT Annual Exempt Amount for individuals is currently £3,000 (2024/25), significantly reduced from the £12,300 that applied until 2022/23. For properties held jointly, each owner has their own exemption. Strategic use of spousal transfers and careful disposal timing across tax years can make meaningful differences to the net CGT liability on portfolio disposals.',
      },
      {
        q: 'What is the CGT rate on residential property?',
        a: 'Residential property gains above your Annual Exempt Amount are taxed at 18% for basic rate taxpayers and 24% for higher and additional rate taxpayers (from October 2024, reduced from 28%). Where a disposal pushes you from basic into higher rate, a blended rate applies to the portion in each band. A specialist will model your exact liability across different disposal scenarios before you commit to a sale.',
      },
    ],
  },
  {
    id:         'sdlt',
    slug:       'sdlt-stamp-duty-planning',
    title:      'SDLT & Stamp Duty Planning',
    shortTitle: 'SDLT Planning',
    tagline:    'Mitigate the 3% surcharge and apply every relief available',
    pill:       'Acquisition strategy',
    description:
      "Stamp Duty Land Tax is often the largest single transaction cost for property investors — particularly since the 3% additional dwelling surcharge was introduced in 2016. Multiple dwellings relief, mixed-use relief, linked transaction analysis, and first-time buyer edge cases all represent legitimate mitigation opportunities that many solicitors miss. Our specialist accountants review every acquisition before exchange to ensure no SDLT is paid unnecessarily.",
    heroDesc:
      'SDLT mistakes are expensive and often irreversible. Our Harrow specialists review acquisitions before exchange to apply every legitimate relief — and model portfolio-level SDLT exposure across planned purchases.',
    faqs: [
      {
        q: 'What is Multiple Dwellings Relief and who qualifies?',
        a: 'Multiple Dwellings Relief (MDR) allows buyers of two or more residential properties in a single transaction (or linked transactions) to calculate SDLT based on the mean consideration per dwelling rather than the aggregate total — which can move the entire purchase into a lower SDLT band. MDR was announced as being abolished from June 2024, so its availability depends on the completion date of your transaction. A specialist will confirm the current position and model any alternative reliefs.',
      },
      {
        q: 'Can I reclaim the 3% surcharge if I sell my main home after buying a new one?',
        a: 'Yes. If you purchase a new main residence before selling your previous one, you pay the 3% additional dwelling surcharge at completion. If you then sell your previous main home within three years, you can reclaim the surcharge from HMRC. The refund claim must be made within 12 months of the sale (or the three-year deadline, whichever is earlier). This is a frequently missed reclaim opportunity for owner-occupiers who also hold investment property.',
      },
      {
        q: 'Does mixed-use SDLT apply to my property?',
        a: "Properties with both residential and non-residential elements — such as a flat above a commercial unit, or a farmhouse with agricultural land — may qualify for non-residential SDLT rates, which are significantly lower than residential rates and carry no 3% surcharge. The classification of a property as mixed-use depends on its specific characteristics at the point of purchase. This is a contested area with active HMRC scrutiny, and specialist advice is strongly recommended before submitting any mixed-use SDLT return.",
      },
    ],
  },
  {
    id:         'iht',
    slug:       'property-inheritance-tax',
    title:      'Property Inheritance Tax',
    shortTitle: 'Inheritance Tax',
    tagline:    'Structure your portfolio to pass wealth across generations',
    pill:       'Generational planning',
    description:
      "For high-net-worth property investors, Inheritance Tax can represent the single largest threat to intergenerational wealth transfer. Residential property does not qualify for Business Property Relief — meaning portfolios sitting in personal names are fully exposed to 40% IHT above the nil-rate band. Limited company structures, family investment companies, discretionary trusts, and lifetime gifting programmes each play a role in a comprehensive succession plan. Our specialists design structures around your family's specific goals and timeline.",
    heroDesc:
      'Your property portfolio has taken years to build. Without the right structure, up to 40% of it could pass to HMRC rather than your family. Our Harrow specialists plan succession properly — while there is still time.',
    faqs: [
      {
        q: "Does Business Property Relief apply to my property portfolio?",
        a: "Business Property Relief (BPR) at 100% applies to qualifying business assets — but standard residential buy-to-let portfolios do not qualify, as HMRC treats them as investment activities rather than trading businesses. HMO portfolios with significant active management may qualify in limited circumstances, but this is a contested area. Furnished Holiday Let portfolios have historically received more favourable treatment, though this is subject to the FHL abolition from April 2025. A specialist will assess your portfolio's BPR position accurately.",
      },
      {
        q: 'How can a Family Investment Company help with IHT planning?',
        a: "A Family Investment Company (FIC) is a private limited company through which the founder holds investments — typically via preference shares retaining value and income rights — while younger family members hold growth shares that appreciate in value outside the estate. Over time, the growth in the company's asset value accumulates in the children's shares rather than the founder's estate. FICs are a legitimate and HMRC-acknowledged planning structure, though they require careful setup and ongoing compliance.",
      },
      {
        q: 'What is the seven-year gifting rule and how does it interact with property?',
        a: "Lifetime gifts to individuals (other than your spouse) fall out of your estate for IHT purposes after seven years, with taper relief reducing the IHT charge for gifts made three to seven years before death. Gifting property directly triggers CGT on the gain at the date of gift — which must be modelled against the IHT saving to determine the net benefit. Holdover relief can defer the CGT in some circumstances but is not always available on residential property. A specialist will model the combined CGT and IHT impact across different gifting scenarios.",
      },
    ],
  },
]

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug)
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(s => s.slug === slug)
