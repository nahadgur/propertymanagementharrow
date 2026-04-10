// ── Harrow borough-wide data ─────────────────────────────────────────────────

export const harrowBoroughData = {
  name:          'London Borough of Harrow',
  council:       'Harrow Council',
  postcodes:     'HA1, HA2, HA3, HA5, HA7, HA8',
  avgYield:      '4.5–5.5%',
  avgPrice:      '£420,000',
  priceRange:    '£290,000–£1,100,000+',
  hmoLicensing: {
    mandatory:   'Required for 5 or more people in 2 or more households',
    additional:  'Harrow Council operates additional licensing schemes covering smaller HMOs in designated areas — check current scheme coverage before acquisition',
    renewal:     'HMO licences are typically issued for 5 years and must be renewed in advance of expiry',
    penalty:     'Operating an unlicensed HMO is a criminal offence and allows tenants to apply for a Rent Repayment Order of up to 12 months\u2019 rent',
  },
  marketContext: [
    'Harrow is one of London\u2019s most diverse investment boroughs — spanning everything from high-value estate property in Stanmore and Pinner to high-yield HMO stock in Wealdstone and South Harrow. This range creates very different tax exposures depending on where an investor holds property and what strategy they are pursuing.',
    'Average property values across the borough sit around \u00a3420,000, but this figure masks a considerable spread. A detached house in Stanmore or Hatch End can easily exceed \u00a31 million, while Victorian terraces in Wealdstone and South Harrow can still be acquired in the \u00a3300,000\u2013\u00a3400,000 range. Rental yields reflect this split \u2014 lower in the affluent southern areas, stronger in the northern and central neighbourhoods with higher HMO concentration.',
    'Section 24 affects a large proportion of Harrow\u2019s landlord base, many of whom are higher-rate taxpayers who acquired leveraged portfolios before the restriction was introduced. SPV incorporation enquiries have increased significantly since 2022. Meanwhile, the generational transfer of high-value Stanmore and Pinner estates is creating growing demand for Inheritance Tax and CGT planning.',
  ],
  faqs: [
    {
      q: 'Do I need an HMO licence in Harrow?',
      a: 'You will need a mandatory HMO licence if your property is occupied by five or more people forming two or more separate households. Harrow Council may also require a licence for smaller HMOs under its additional licensing schemes. The licensing position should be confirmed with the council before any HMO acquisition or conversion. A specialist can assess the licensing requirements for your specific property and manage the application process.',
    },
    {
      q: 'What are typical rental yields across Harrow?',
      a: 'Yields across the borough vary considerably by area and property type. HMO properties in Wealdstone, South Harrow, and Rayners Lane can achieve gross yields of 6\u20138% or more. Standard single-let buy-to-lets in North Harrow and Kenton typically yield 4\u20135%. Higher-value properties in Stanmore and Pinner generally yield 3\u20134% gross. Net yields depend heavily on financing costs and management approach.',
    },
    {
      q: 'Is Section 24 particularly acute for Harrow landlords?',
      a: 'Yes. A significant proportion of Harrow\u2019s landlord base are higher-rate taxpayers who built portfolios using leverage during the low-interest-rate period. The combination of higher mortgage interest rates since 2022 and the Section 24 restriction means many are now paying tax on profits they are not actually receiving. The financial case for restructuring has strengthened considerably as interest rates have risen.',
    },
    {
      q: 'Are Harrow property values suitable for SPV incorporation?',
      a: 'It depends on the area and the portfolio. For higher-value properties in Stanmore and Pinner with significant built-in gains, the CGT on transfer may make full incorporation uneconomic. For more recent acquisitions in Wealdstone and South Harrow with limited gain, the SDLT and CGT costs of transfer can be recovered more quickly from the annual Section 24 saving. A specialist will model the breakeven point for your specific portfolio.',
    },
  ],
}

// ── Spoke area profiles ───────────────────────────────────────────────────────

export interface SpokeArea {
  slug:             string
  name:             string
  postcode:         string
  lat:              number
  lng:              number
  avgPrice:         string
  priceRange:       string
  avgYield:         string
  primaryFocus:     string
  focusSlugs:       string[]           // service slugs most relevant
  heroHeadline:     string
  heroDesc:         string
  metaTitle:        string
  metaDesc:         string
  marketProfile:    string[]           // 2-3 paragraphs
  taxAngles:        { head: string; body: string }[]  // 3 specific tax angles
  keyFacts:         { label: string; value: string }[]
  localInsight:     string             // one unique insight paragraph
}

export const spokeAreas: SpokeArea[] = [
  {
    slug:         'stanmore',
    name:         'Stanmore',
    postcode:     'HA7',
    lat:          51.6176,
    lng:          -0.3027,
    avgPrice:     '\u00a3780,000',
    priceRange:   '\u00a3500,000\u2013\u00a31,200,000+',
    avgYield:     '3.2\u20133.8%',
    primaryFocus: 'Capital Gains Tax & Inheritance Tax',
    focusSlugs:   ['capital-gains-tax-planning', 'property-inheritance-tax', 'spv-company-incorporation'],
    heroHeadline: 'Property Tax Specialists for Stanmore Landlords and Investors',
    heroDesc:     'Stanmore\u2019s high-value property market creates significant CGT and Inheritance Tax exposure for landlords and investors. Our ACCA and ICAEW certified specialists help protect the wealth built in Stanmore\u2019s HA7 estates.',
    metaTitle:    'Property Tax Accountants Stanmore HA7 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Stanmore landlords and investors. CGT planning, inheritance tax structuring, and SPV advice for HA7 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Stanmore is Harrow\u2019s most affluent residential area, with property values among the highest in the London Borough of Harrow. Detached houses in the HA7 postcode regularly exceed \u00a31 million, and the area\u2019s strong executive housing stock has seen sustained capital appreciation over the past two decades. Average property values in Stanmore sit around \u00a3780,000 \u2014 nearly double the Harrow borough average.',
      'The rental market in Stanmore is less concentrated than in other parts of Harrow, but landlords who do hold investment property here typically own higher-value assets with correspondingly higher built-in capital gains. Gross rental yields of 3.2\u20133.8% are typical for the area, reflecting the premium purchase prices relative to achievable rents.',
      'The primary tax challenges for Stanmore property investors are CGT on disposal \u2014 where significant gains have accumulated over long ownership periods \u2014 and Inheritance Tax, where high estate values and the absence of Business Property Relief on residential property create substantial IHT exposure for families who have accumulated property wealth in the area.',
    ],
    taxAngles: [
      {
        head: 'Capital Gains Tax on Stanmore disposals',
        body: 'Stanmore properties purchased in the early 2000s or before have typically doubled or tripled in value. A property acquired for \u00a3350,000 and now worth \u00a3850,000 carries a \u00a3500,000 gain \u2014 with a potential CGT liability of up to \u00a3120,000 at current rates. Private Residence Relief eligibility, lettings relief, disposal timing, and spousal ownership structure can each make a material difference to the net CGT bill on a Stanmore disposal.',
      },
      {
        head: 'Inheritance Tax on high-value Stanmore estates',
        body: 'A Stanmore property portfolio of three or four detached houses can easily represent an estate value of \u00a33\u20134 million. Without IHT planning, 40% of the value above the nil-rate band passes to HMRC. Family Investment Companies, lifetime gifting programmes, and trust structures are all tools available to Stanmore investors \u2014 but each requires careful design and a sufficient planning horizon.',
      },
      {
        head: 'SPV incorporation economics for Stanmore portfolios',
        body: 'For Stanmore properties with significant built-in gains, the CGT on transfer to an SPV can be prohibitive. A specialist will model whether incorporation makes financial sense for a specific Stanmore portfolio \u2014 or whether holding existing properties personally while acquiring future ones through a company is the more cost-effective approach.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',       value: 'HA7' },
      { label: 'Avg price',      value: '\u00a3780,000' },
      { label: 'Price range',    value: '\u00a3500k\u2013\u00a31.2M+' },
      { label: 'Gross yield',    value: '3.2\u20133.8%' },
      { label: 'Primary focus',  value: 'CGT & Inheritance Tax' },
      { label: 'Area type',      value: 'Affluent residential / executive' },
    ],
    localInsight: 'Stanmore has one of the highest concentrations of long-term property ownership in the borough. Many landlords here acquired properties through inheritance or as investment properties decades ago and have never had a formal CGT or IHT review. The gap between what they paid and what their properties are now worth \u2014 and what that means for their families \u2014 is often a significant surprise.',
  },

  {
    slug:         'pinner',
    name:         'Pinner',
    postcode:     'HA5',
    lat:          51.5930,
    lng:          -0.3756,
    avgPrice:     '\u00a3650,000',
    priceRange:   '\u00a3420,000\u2013\u00a3950,000',
    avgYield:     '3.5\u20134.2%',
    primaryFocus: 'SPV Incorporation & Portfolio Structuring',
    focusSlugs:   ['spv-company-incorporation', 'capital-gains-tax-planning', 'property-inheritance-tax'],
    heroHeadline: 'Property Tax Specialists for Pinner Portfolio Investors',
    heroDesc:     'Pinner\u2019s affluent property market attracts serious portfolio investors facing complex Section 24 and SPV structuring decisions. Our ACCA and ICAEW certified specialists model the full economics for HA5 portfolios before any action is taken.',
    metaTitle:    'Property Tax Accountants Pinner HA5 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Pinner landlords and investors. SPV incorporation, CGT planning, and Section 24 mitigation for HA5 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Pinner is one of Harrow\u2019s most sought-after residential areas, known for its well-preserved Victorian and Edwardian housing stock, conservation area, and strong family rental demand. Property values average around \u00a3650,000, with detached houses in the most desirable streets exceeding \u00a3900,000. The area draws both owner-occupiers and portfolio investors attracted by the quality of the housing stock and consistent rental demand.',
      'Landlords in Pinner tend to hold fewer but higher-value properties than those in other parts of Harrow. The typical Pinner portfolio investor owns two to four properties, often including a family home alongside investment properties, and is commonly a higher-rate or additional-rate taxpayer for whom Section 24 creates a significant ongoing tax cost.',
      'SPV incorporation enquiries are particularly common among Pinner landlords \u2014 the combination of high leverage, high rental income, and higher-rate tax status creates a strong economic case for restructuring in many cases. The key question is always whether the SDLT and CGT cost of transfer can be recovered from the annual tax saving within a reasonable timeframe.',
    ],
    taxAngles: [
      {
        head: 'Section 24 exposure for Pinner\u2019s leveraged landlords',
        body: 'A Pinner landlord with two mortgaged investment properties worth \u00a3650,000 each at 65% LTV could have \u00a3845,000 of mortgage debt. At 5% interest, that is \u00a342,250 of annual finance costs \u2014 generating over \u00a38,000 of additional annual tax for a higher-rate taxpayer under Section 24. Across a typical Pinner portfolio, the cumulative Section 24 cost can easily reach five figures per year.',
      },
      {
        head: 'SPV incorporation \u2014 the Pinner calculation',
        body: 'For Pinner properties with modest built-in gains \u2014 perhaps purchased in the 2015\u20132019 period \u2014 the SDLT and CGT cost of SPV transfer can be recovered relatively quickly from the annual Section 24 saving. A specialist will model the exact breakeven point for a specific Pinner portfolio before any recommendation is made.',
      },
      {
        head: 'CGT planning on Pinner disposals',
        body: 'Pinner\u2019s conservation area properties and period houses have seen strong capital appreciation. Landlords who originally occupied a property before letting it out may have significant PRR eligibility that substantially reduces the CGT on disposal. A specialist will review the full occupation and letting history before any sale is agreed.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',       value: 'HA5' },
      { label: 'Avg price',      value: '\u00a3650,000' },
      { label: 'Price range',    value: '\u00a3420k\u2013\u00a3950k' },
      { label: 'Gross yield',    value: '3.5\u20134.2%' },
      { label: 'Primary focus',  value: 'SPV Incorporation' },
      { label: 'Area type',      value: 'Affluent residential / family' },
    ],
    localInsight: 'Pinner has a higher concentration of accidental landlords than most Harrow areas \u2014 people who moved out of their first home rather than selling, or who inherited family property in the area. Many are paying more Section 24 tax than they realise, and most have never had a formal review of whether incorporation or restructuring would be cost-effective for their specific situation.',
  },

  {
    slug:         'wealdstone',
    name:         'Wealdstone',
    postcode:     'HA3',
    lat:          51.5985,
    lng:          -0.3349,
    avgPrice:     '\u00a3390,000',
    priceRange:   '\u00a3280,000\u2013\u00a3520,000',
    avgYield:     '5.0\u20136.0%',
    primaryFocus: 'HMO Management & Section 24 Mitigation',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'sdlt-stamp-duty-planning'],
    heroHeadline: 'Property Tax Specialists for Wealdstone HMO Operators and BTL Investors',
    heroDesc:     'Wealdstone\u2019s high-yield rental market and HMO concentration creates specific tax challenges around Section 24, HMO compliance, and acquisition SDLT. Our ACCA and ICAEW specialists understand the Wealdstone landlord\u2019s position.',
    metaTitle:    'Property Tax Accountants Wealdstone HA3 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Wealdstone HMO operators and buy-to-let landlords. Section 24 mitigation, HMO tax advice, SDLT planning for HA3 portfolios. Vetted ACCA/ICAEW.',
    marketProfile: [
      'Wealdstone is one of Harrow\u2019s most active buy-to-let and HMO investment areas. Lower entry prices relative to the rest of the borough \u2014 Victorian terraces and purpose-built flats in the \u00a3280,000\u2013\u00a3450,000 range \u2014 combined with strong rental demand from young professionals and workers commuting to Central London, generate gross yields of 5\u20136% on single lets and higher on well-managed HMOs.',
      'The area has undergone significant regeneration investment in recent years, with the Wealdstone town centre redevelopment and improved transport links increasing its attractiveness to both tenants and investors. Buy-to-let acquisition activity has been strong, and a growing number of investors have converted standard terraces into licensed HMOs to maximise yield.',
      'The tax environment for Wealdstone landlords is dominated by Section 24. Highly leveraged acquisitions \u2014 particularly those made at the peak of the 2021\u20132022 market at higher loan-to-value ratios \u2014 are bearing the full cost of the finance cost restriction at a time when interest rates have also risen sharply. SPV incorporation is increasingly discussed, but the economics vary significantly depending on when the property was purchased and what gain has accumulated.',
    ],
    taxAngles: [
      {
        head: 'Section 24 and the Wealdstone HMO landlord',
        body: 'A Wealdstone HMO landlord with four mortgaged properties at 75% LTV paying 5.5% interest on \u00a31.2 million of debt faces \u00a366,000 of annual finance costs. Under Section 24, a 40% taxpayer recovers only \u00a313,200 of that as a tax credit \u2014 losing over \u00a313,000 per year compared to the pre-2017 position. SPV incorporation can restore full deductibility and materially change the economics of holding a leveraged Wealdstone portfolio.',
      },
      {
        head: 'HMO capital allowances \u2014 an underused relief',
        body: 'HMO properties with communal facilities often qualify for capital allowances on embedded plant and machinery \u2014 boilers, water systems, electrical installations, fire safety equipment \u2014 that can be offset against rental income. This relief is frequently unclaimed by Wealdstone HMO operators whose generalist accountants lack the specialist knowledge to identify qualifying expenditure.',
      },
      {
        head: 'SDLT planning on Wealdstone acquisitions',
        body: 'With multiple acquisition activity common among Wealdstone portfolio builders, SDLT costs accumulate quickly. A specialist reviews each acquisition before exchange to identify applicable reliefs, confirm the 3% surcharge position, and model whether linked transactions between related purchasers affect the SDLT calculation.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',       value: 'HA3' },
      { label: 'Avg price',      value: '\u00a3390,000' },
      { label: 'Price range',    value: '\u00a3280k\u2013\u00a3520k' },
      { label: 'Gross yield',    value: '5.0\u20136.0%' },
      { label: 'Primary focus',  value: 'Section 24 & HMO Tax' },
      { label: 'Area type',      value: 'High-yield BTL & HMO' },
    ],
    localInsight: 'Wealdstone has seen a sharp increase in the number of landlords seeking Section 24 restructuring advice since interest rates began rising in 2022. The combination of higher finance costs and the Section 24 restriction has turned previously profitable portfolios into tax-heavy burdens for many HA3 investors. The window for cost-effective SPV incorporation is narrowing as rental values rise and gain accumulates.',
  },

  {
    slug:         'harrow-on-the-hill',
    name:         'Harrow on the Hill',
    postcode:     'HA1',
    lat:          51.5796,
    lng:          -0.3354,
    avgPrice:     '\u00a3460,000',
    priceRange:   '\u00a3300,000\u2013\u00a3700,000',
    avgYield:     '4.5\u20135.2%',
    primaryFocus: 'Non-Resident Landlords & Section 24 Mitigation',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'capital-gains-tax-planning'],
    heroHeadline: 'Property Tax Specialists for Harrow on the Hill Landlords',
    heroDesc:     'Harrow on the Hill attracts both local and international property investors. Our ACCA and ICAEW certified specialists handle Section 24 restructuring, non-resident landlord compliance, and SPV planning for HA1 portfolios.',
    metaTitle:    'Property Tax Accountants Harrow on the Hill HA1 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Harrow on the Hill landlords. Section 24, non-resident landlord compliance, and CGT planning for HA1 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Harrow on the Hill is the historic core of the London Borough of Harrow and one of its most recognisable addresses. The area benefits from strong transport links \u2014 Harrow & Wealdstone and Harrow-on-the-Hill stations on the Metropolitan, Bakerloo, and Overground lines \u2014 making it attractive to renters commuting across London. Property values average around \u00a3460,000, with purpose-built flats and Victorian terraces making up a significant portion of the investment stock.',
      'The rental market in Harrow on the Hill is diverse, serving young professionals, families, and international tenants with connections to the area\u2019s schools and community. This international tenant base is partly mirrored on the landlord side \u2014 Harrow on the Hill has a higher proportion of non-resident and overseas landlords than most Harrow areas, many of whom face specific NRLS (Non-Resident Landlord Scheme) compliance requirements.',
      'Section 24 is the dominant tax concern for the majority of HA1 landlords, with many having acquired leveraged portfolios during the 2010s. The combination of strong rental demand and relatively affordable purchase prices made Harrow on the Hill a popular buy-to-let destination, and many of those investors are now facing the full consequences of the finance cost restriction.',
    ],
    taxAngles: [
      {
        head: 'Non-Resident Landlord Scheme compliance',
        body: 'Overseas landlords and UK nationals living abroad who let property in Harrow on the Hill must register with HMRC\u2019s Non-Resident Landlord Scheme. Without approval, letting agents and tenants are required to deduct basic rate tax from rental payments before passing them on. NRLS compliance \u2014 registering, filing UK tax returns, and managing the interaction between UK and overseas tax obligations \u2014 requires specialist knowledge that most general accountants lack.',
      },
      {
        head: 'Section 24 for Harrow on the Hill portfolio investors',
        body: 'HA1\u2019s mix of purpose-built flats and terraced houses made it attractive for leveraged buy-to-let acquisition. Many landlords hold three to six mortgaged properties in and around the Hill, generating significant finance costs that are now only partially relievable. A specialist review of the Section 24 position \u2014 and the economics of SPV incorporation for this specific portfolio type \u2014 is a priority for most Harrow on the Hill investors who have not restructured since 2017.',
      },
      {
        head: 'CGT planning for Harrow on the Hill disposals',
        body: 'Properties acquired near the tube stations in Harrow on the Hill during the 2010s have seen strong capital appreciation. Landlords selling HA1 properties need to review PRR eligibility, letting relief availability, and disposal timing before exchange \u2014 not after. A specialist can identify the optimal structure for each disposal to minimise the net CGT liability.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',       value: 'HA1' },
      { label: 'Avg price',      value: '\u00a3460,000' },
      { label: 'Price range',    value: '\u00a3300k\u2013\u00a3700k' },
      { label: 'Gross yield',    value: '4.5\u20135.2%' },
      { label: 'Primary focus',  value: 'Non-Resident & Section 24' },
      { label: 'Area type',      value: 'Mixed BTL / International' },
    ],
    localInsight: 'Harrow on the Hill has a higher proportion of non-resident landlords than any other area in the borough \u2014 including a significant number of UK nationals who have relocated abroad and retained UK investment properties. NRLS non-compliance is common among this group, often because the landlord is unaware of the requirement or believes their letting agent is managing the obligation. The penalties for non-compliance can be significant.',
  },

  {
    slug:         'edgware',
    name:         'Edgware',
    postcode:     'HA8',
    lat:          51.6147,
    lng:          -0.2756,
    avgPrice:     '\u00a3480,000',
    priceRange:   '\u00a3320,000\u2013\u00a3700,000',
    avgYield:     '4.2\u20135.0%',
    primaryFocus: 'Portfolio Expansion & SDLT Planning',
    focusSlugs:   ['sdlt-stamp-duty-planning', 'section-24-tax-mitigation', 'spv-company-incorporation'],
    heroHeadline: 'Property Tax Specialists for Edgware Portfolio Investors',
    heroDesc:     'Edgware\u2019s growing buy-to-let market and active portfolio expansion activity creates specific SDLT and Section 24 planning needs. Our ACCA and ICAEW certified specialists support HA8 investors at every stage of portfolio growth.',
    metaTitle:    'Property Tax Accountants Edgware HA8 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Edgware landlords and portfolio investors. SDLT planning, Section 24 mitigation, and SPV advice for HA8 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Edgware sits on the northern edge of the London Borough of Harrow, straddling the HA8 postcode and benefiting from the Northern Line terminus at Edgware station. The area\u2019s transport links, school catchments, and strong community character have made it a consistent buy-to-let destination for investors seeking solid rental demand with lower entry prices than the more southerly Harrow areas.',
      'Property values in Edgware average around \u00a3480,000, with the 1930s semi-detached stock that characterises much of the area sitting in the \u00a3400,000\u2013\u00a3600,000 range. Purpose-built flats and smaller terraces offer lower entry points, while larger detached properties in the more residential streets can approach \u00a3700,000. Rental yields of 4.2\u20135.0% on single lets are typical, with some HMO conversions pushing higher.',
      'Edgware attracts a high proportion of active portfolio builders \u2014 investors who are in the process of expanding from one or two properties to five or more. This acquisition-active profile creates specific tax planning needs around SDLT on each purchase, the growing Section 24 burden as the portfolio scales, and the long-term question of whether a company structure should be adopted before the portfolio grows further.',
    ],
    taxAngles: [
      {
        head: 'SDLT planning as the Edgware portfolio grows',
        body: 'Each new Edgware acquisition triggers SDLT at the standard residential rate plus the 3% additional dwelling surcharge. On a \u00a3480,000 purchase, the SDLT bill for an existing property investor is approximately \u00a323,500. Across five acquisitions, that is over \u00a3100,000 in SDLT. A specialist reviews each purchase before exchange to confirm the correct SDLT position and identify any applicable reliefs.',
      },
      {
        head: 'Section 24 \u2014 plan early before the portfolio scales',
        body: 'Edgware investors who are still in portfolio-building mode have an important structural decision to make: continue acquiring in personal name, or establish an SPV before the next purchase and grow the company portfolio from there. The Section 24 burden grows with each leveraged personal acquisition. A specialist will model the long-term tax position under both structures before the next purchase is committed.',
      },
      {
        head: 'Incorporation timing \u2014 before or after the next acquisition?',
        body: 'For Edgware investors who are planning their next purchase, the timing of SPV incorporation relative to that acquisition matters significantly. Acquiring within the company from the outset avoids the SDLT and CGT cost of later transferring that property. A specialist models the total cost of both approaches \u2014 incorporating now versus acquiring personally and transferring later \u2014 and identifies the optimal timing.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',       value: 'HA8' },
      { label: 'Avg price',      value: '\u00a3480,000' },
      { label: 'Price range',    value: '\u00a3320k\u2013\u00a3700k' },
      { label: 'Gross yield',    value: '4.2\u20135.0%' },
      { label: 'Primary focus',  value: 'SDLT & Portfolio Planning' },
      { label: 'Area type',      value: 'Active BTL / Portfolio building' },
    ],
    localInsight: 'Edgware sees a higher proportion of first-time property investors and growing portfolio landlords than many Harrow areas. Many are making their second or third acquisition without having had a formal tax structure review since their first purchase. The cost of not having a structure in place \u2014 in terms of Section 24 exposure and future transfer costs \u2014 grows with each acquisition made in personal name.',
  },
]

export const getSpokeBySlug = (slug: string): SpokeArea | undefined =>
  spokeAreas.find(a => a.slug === slug)

export const getAllSpokeSlugs = (): string[] => spokeAreas.map(a => a.slug)
