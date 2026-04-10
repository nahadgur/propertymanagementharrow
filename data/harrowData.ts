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

  // ── PHASE 2 AREAS ──────────────────────────────────────────────────────────

  {
    slug:         'north-harrow',
    name:         'North Harrow',
    postcode:     'HA2',
    lat:          51.5854,
    lng:          -0.3658,
    avgPrice:     '£400,000',
    priceRange:   '£270,000–£600,000',
    avgYield:     '4.5–5.5%',
    primaryFocus: 'Section 24 Mitigation',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'capital-gains-tax-planning'],
    heroHeadline: 'Property Tax Specialists for North Harrow Landlords',
    heroDesc:     `North Harrow's mix of terraced stock and strong rental demand makes it a popular buy-to-let area — but Section 24 is quietly eroding returns for many HA2 investors. Our ACCA and ICAEW certified specialists help North Harrow landlords identify and implement the right mitigation strategy.`,
    metaTitle:    'Property Tax Accountants North Harrow HA2 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for North Harrow landlords. Section 24 mitigation, SPV incorporation, and CGT planning for HA2 buy-to-let investors. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'North Harrow occupies the HA2 postcode, sitting between the established residential areas of Pinner to the north and South Harrow to the south. The area is well served by the Piccadilly and Metropolitan lines, making it popular with professionals renting close to the tube — a factor that has sustained rental demand through shifting economic conditions.',
      'Property values average around £400,000, with a significant stock of 1930s terraced and semi-detached housing. The entry price point is lower than neighbouring Pinner, making North Harrow a natural choice for investors at the portfolio-building stage. Gross yields of 4.5–5.5% on single lets are typical, with scope for higher returns on HMO conversions subject to licensing.',
      'The investor profile in North Harrow skews toward mid-size portfolios — landlords who have built from two to five properties over a decade and are now feeling the full impact of Section 24 on their higher-rate tax positions. Many acquired at lower values and have significant unrealised gains, creating both a Section 24 burden and a CGT consideration on any future disposal or restructuring.',
    ],
    taxAngles: [
      {
        head: 'Section 24 on leveraged HA2 portfolios',
        body: 'North Harrow landlords with multiple properties and mortgage finance are among the most exposed to Section 24. A typical HA2 investor with three terraced properties and £300,000 of outstanding mortgage at 5% is paying £15,000 per year in mortgage interest — and losing £3,000 of tax relief annually if they are a 40% taxpayer. A specialist models the exact exposure and the options available.',
      },
      {
        head: 'SPV timing — before or after the next purchase',
        body: 'Many North Harrow investors are considering whether to acquire their next property in personal name or in a company. The decision has long-term tax consequences that compound with each subsequent acquisition. A specialist will model the total tax position under both structures over a 5–10 year horizon before any recommendation is made.',
      },
      {
        head: 'Accumulated gains and disposal planning',
        body: 'Properties acquired in North Harrow in the 2010–2015 period have typically appreciated by 30–50%. This built-in gain is a CGT liability in waiting — one that grows with each year of continued ownership. Pre-disposal planning, including PRR analysis and spousal transfer strategies, can significantly reduce the eventual bill.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',      value: 'HA2' },
      { label: 'Avg price',     value: '£400,000' },
      { label: 'Price range',   value: '£270k–£600k' },
      { label: 'Gross yield',   value: '4.5–5.5%' },
      { label: 'Primary focus', value: 'Section 24 Mitigation' },
      { label: 'Area type',     value: 'Mid-size BTL portfolios' },
    ],
    localInsight: 'North Harrow has a notably high concentration of landlords who built their portfolios between 2008 and 2016 — benefiting from low interest rates and rising capital values. Many of those investors are now at a crossroads: Section 24 is eroding their annual returns, their properties have significant built-in gains, and they have never had a formal structure review. The cost of inaction grows with each year.',
  },

  {
    slug:         'south-harrow',
    name:         'South Harrow',
    postcode:     'HA2',
    lat:          51.5708,
    lng:          -0.3613,
    avgPrice:     '£370,000',
    priceRange:   '£250,000–£550,000',
    avgYield:     '5.0–6.5%',
    primaryFocus: 'HMO Tax & Section 24',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'sdlt-stamp-duty-planning'],
    heroHeadline: 'Property Tax Specialists for South Harrow HMO Operators and Landlords',
    heroDesc:     `South Harrow's strong rental yields and active HMO market create specific tax challenges — Section 24, HMO licensing costs, and the question of whether to incorporate. Our ACCA and ICAEW certified specialists serve HA2 investors across the full range of tax issues.`,
    metaTitle:    'Property Tax Accountants South Harrow HA2 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for South Harrow HMO operators and buy-to-let landlords. Section 24, SPV advice, and SDLT planning for HA2 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'South Harrow is one of the higher-yield areas of the borough, with strong rental demand from a diverse tenant base and property values that remain accessible relative to more southerly London areas. The Piccadilly line station provides direct access to central London, sustaining occupancy rates and making South Harrow a consistent BTL investment area.',
      'Average property values sit around £370,000, with Victorian and Edwardian terraced stock forming the backbone of the investment market. HMO conversions are common in South Harrow, particularly on the larger three- and four-bedroom terraces, where room-by-room letting can push gross yields to 7–8% or above. Single-let yields on standard stock typically run at 5.0–6.5%.',
      'South Harrow attracts active investors who are specifically seeking yield over capital growth — a different profile from the longer-term wealth preservation investors found in Stanmore or Pinner. This active approach creates a range of tax planning needs: SDLT on frequent acquisitions, Section 24 on leveraged portfolios, and the ongoing question of whether HMO income should be operated through a company structure.',
    ],
    taxAngles: [
      {
        head: 'HMO income and the company question',
        body: 'South Harrow HMO operators are among the most likely to benefit from operating through a limited company — the combination of higher rental income, significant mortgage interest, and higher-rate personal tax creates a substantial Section 24 cost. Inside a company, the full mortgage interest deduction is preserved and profits are taxed at the corporation tax rate. A specialist will model the breakeven for your specific HMO portfolio.',
      },
      {
        head: 'Section 24 on high-yield, leveraged portfolios',
        body: 'The higher rental income from South Harrow HMOs does not eliminate Section 24 exposure — it can in fact increase it, by pushing more income into the higher rate band. A landlord with £90,000 of HMO rental income and £40,000 of mortgage interest faces a significant Section 24 cost that grows with each interest rate rise. A specialist will identify the optimal mitigation approach.',
      },
      {
        head: 'SDLT on multiple acquisitions',
        body: `South Harrow's lower entry prices make it attractive for investors building portfolios quickly. Each acquisition attracts SDLT at standard rates plus the 3% surcharge. On a £370,000 property, the surcharge alone is £11,100. Across a portfolio build of five properties, the aggregate SDLT can exceed £80,000. Pre-purchase SDLT planning on each acquisition is essential.`,
      },
    ],
    keyFacts: [
      { label: 'Postcode',      value: 'HA2' },
      { label: 'Avg price',     value: '£370,000' },
      { label: 'Price range',   value: '£250k–£550k' },
      { label: 'Gross yield',   value: '5.0–6.5%' },
      { label: 'Primary focus', value: 'HMO Tax & Section 24' },
      { label: 'Area type',     value: 'High-yield / HMO active' },
    ],
    localInsight: 'South Harrow has one of the highest concentrations of HMO properties in the borough. Many operators manage their HMOs personally without a formal company structure, paying income tax on profits at up to 45% when the same portfolio in a company would be taxed at 25% or less. The cumulative cost of this structural gap, compounded over five to ten years, is often the most powerful argument for a restructuring review.',
  },

  {
    slug:         'kenton',
    name:         'Kenton',
    postcode:     'HA3',
    lat:          51.5893,
    lng:          -0.3170,
    avgPrice:     '£450,000',
    priceRange:   '£300,000–£650,000',
    avgYield:     '4.2–5.2%',
    primaryFocus: 'Inheritance Tax & CGT',
    focusSlugs:   ['property-inheritance-tax', 'capital-gains-tax-planning', 'section-24-tax-mitigation'],
    heroHeadline: 'Property Tax Specialists for Kenton Landlords and Property Investors',
    heroDesc:     `Kenton's established residential character and long-term property ownership make inheritance tax and CGT planning a priority for many HA3 investors. Our ACCA and ICAEW certified specialists support Kenton landlords at every stage of portfolio planning and generational transfer.`,
    metaTitle:    'Property Tax Accountants Kenton HA3 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Kenton landlords and investors. Inheritance tax planning, CGT advice, and Section 24 mitigation for HA3 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Kenton sits in the HA3 postcode, sharing a postcode with Wealdstone but with a very different character — quieter, more residential, and with a stronger owner-occupier base that reflects in the investment property market. The Metropolitan and Bakerloo lines both serve Kenton, making it accessible for commuter tenants and sustaining steady rental demand.',
      'Property values average around £450,000, with 1930s semi-detached housing forming the dominant stock. The area attracts longer-term buy-to-let investors rather than active portfolio builders, and many properties in Kenton have been held for decades — accumulating significant unrealised capital gains. This long ownership profile creates particular CGT and inheritance tax planning needs.',
      `Kenton's investor profile is weighted toward established landlords in their 50s and 60s who are beginning to think about succession planning and generational transfer. Many have never had a formal inheritance tax review, and the value of their Kenton portfolio — combined with other assets — often places them well above the IHT threshold.`,
    ],
    taxAngles: [
      {
        head: 'Inheritance tax on long-held Kenton property',
        body: 'A Kenton semi-detached acquired for £150,000 in 2000 may now be worth £450,000 or more. Combined with other assets, this pushes many Kenton landlords well above the nil-rate band. Standard residential buy-to-let does not qualify for Business Property Relief, meaning the full value above the threshold is exposed to 40% IHT at death. A specialist designs a succession structure that begins moving value out of the estate while the landlord is able to act.',
      },
      {
        head: 'CGT on long-held Kenton properties',
        body: 'Properties held for 20+ years in Kenton carry substantial built-in gains. A disposal that looked simple on paper — £150,000 purchase, £450,000 sale — generates a £300,000 gain and a CGT bill of up to £72,000. Pre-disposal planning, including spousal transfers and disposal timing, can significantly reduce this. A specialist reviews the full CGT position before any sale is agreed.',
      },
      {
        head: `Section 24 for Kenton's longer-term investors`,
        body: 'Many Kenton landlords remortgaged their properties in the 2010s as values rose — releasing equity for further investment. This finance now attracts Section 24 treatment, creating an additional tax cost that was not anticipated when the mortgages were taken out. A specialist reviews whether the current structure remains optimal or whether restructuring would recover a meaningful portion of this cost.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',      value: 'HA3' },
      { label: 'Avg price',     value: '£450,000' },
      { label: 'Price range',   value: '£300k–£650k' },
      { label: 'Gross yield',   value: '4.2–5.2%' },
      { label: 'Primary focus', value: 'IHT & CGT Planning' },
      { label: 'Area type',     value: 'Established / Long-term ownership' },
    ],
    localInsight: 'Kenton has a high proportion of landlords who have held property for 15 years or more without ever commissioning a formal tax review. The combination of significant accumulated gains, potential inheritance tax exposure, and ongoing Section 24 costs makes this one of the most important areas for proactive tax planning in the borough. The cost of a specialist review is routinely a small fraction of the tax saving identified.',
  },

  {
    slug:         'rayners-lane',
    name:         'Rayners Lane',
    postcode:     'HA2',
    lat:          51.5743,
    lng:          -0.3714,
    avgPrice:     '£380,000',
    priceRange:   '£260,000–£540,000',
    avgYield:     '4.8–5.8%',
    primaryFocus: 'Section 24 & Portfolio Structure',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'sdlt-stamp-duty-planning'],
    heroHeadline: 'Property Tax Specialists for Rayners Lane Buy-to-Let Investors',
    heroDesc:     `Rayners Lane's competitive yields and active BTL market make it one of Harrow's most popular investment areas — and one where Section 24 has the biggest impact on investor returns. Our ACCA and ICAEW certified specialists help HA2 landlords structure their portfolios for long-term tax efficiency.`,
    metaTitle:    'Property Tax Accountants Rayners Lane HA2 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Rayners Lane landlords. Section 24 mitigation, SPV advice, and SDLT planning for HA2 buy-to-let investors. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Rayners Lane sits at the junction of the Piccadilly and Metropolitan lines, giving it exceptional transport connectivity that underpins consistent tenant demand. The area is popular with both working professionals and families, creating a diverse tenant market that sustains occupancy and rental values across economic cycles.',
      'Property values average around £380,000, with 1930s terraced and semi-detached stock forming most of the investment market. Entry prices are accessible relative to more central London areas, and gross yields of 4.8–5.8% on single lets make Rayners Lane a reliable yield play. The area attracts a range of investor types — from first-time landlords to experienced portfolio operators.',
      'Rayners Lane has seen significant BTL acquisition activity over the past decade, meaning many investors hold properties purchased with buy-to-let mortgages that are now subject to Section 24. The combination of competitive yields and meaningful mortgage finance creates a substantial Section 24 exposure for higher-rate taxpayers — and the question of whether to incorporate has become pressing for many HA2 investors.',
    ],
    taxAngles: [
      {
        head: 'Section 24 — the silent cost on Rayners Lane portfolios',
        body: 'A Rayners Lane landlord with three properties, £350,000 of mortgage finance at 5%, and higher-rate tax status is paying approximately £3,500 per year more in income tax than they would under the pre-2017 rules. This cost compounds as interest rates rise. Most landlords in this position have not quantified the exact figure — a specialist will do so in the initial review and present the available options.',
      },
      {
        head: 'SPV incorporation — the timing question for active investors',
        body: 'Rayners Lane investors who are still adding to their portfolios face a strategic decision with each new acquisition: personal name or company? The tax benefit of company ownership is clear for higher-rate taxpayers. The cost of getting there from existing personal holdings is the variable. A specialist models the optimal path — whether that is incorporating existing properties, acquiring future ones in a company, or a hybrid of both.',
      },
      {
        head: 'SDLT on frequent Rayners Lane acquisitions',
        body: 'The 3% SDLT surcharge on a £380,000 Rayners Lane property is £11,400. Across a portfolio of five properties acquired over five years, the aggregate SDLT surcharge exceeds £55,000. Pre-purchase SDLT planning on each acquisition ensures the correct position is calculated and any applicable reliefs are claimed before completion.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',      value: 'HA2' },
      { label: 'Avg price',     value: '£380,000' },
      { label: 'Price range',   value: '£260k–£540k' },
      { label: 'Gross yield',   value: '4.8–5.8%' },
      { label: 'Primary focus', value: 'Section 24 & SPV' },
      { label: 'Area type',     value: 'Active BTL / yield-focused' },
    ],
    localInsight: `Rayners Lane consistently appears in our network's top five areas for Section 24 mitigation enquiries. The combination of meaningful mortgage finance, competitive yields, and a high proportion of higher-rate taxpaying investors creates exactly the profile where Section 24 has the greatest impact and restructuring offers the greatest return. The average Section 24 cost we identify for Rayners Lane landlords in an initial review is over £4,000 per year.`,
  },

  {
    slug:         'hatch-end',
    name:         'Hatch End',
    postcode:     'HA5',
    lat:          51.6072,
    lng:          -0.3716,
    avgPrice:     '£650,000',
    priceRange:   '£420,000–£1,200,000',
    avgYield:     '3.2–4.0%',
    primaryFocus: 'Inheritance Tax & Wealth Structuring',
    focusSlugs:   ['property-inheritance-tax', 'capital-gains-tax-planning', 'spv-company-incorporation'],
    heroHeadline: 'Property Tax Specialists for Hatch End High-Value Property Investors',
    heroDesc:     `Hatch End's premium property values and long-term ownership patterns create substantial inheritance tax and CGT planning needs. Our ACCA and ICAEW certified specialists help HA5 investors structure and protect generational wealth.`,
    metaTitle:    'Property Tax Accountants Hatch End HA5 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Hatch End landlords and investors. Inheritance tax planning, CGT advice, and wealth structuring for high-value HA5 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Hatch End is one of the most desirable residential areas in the London Borough of Harrow, with a strong owner-occupier base, excellent schools, and a village character that commands a significant premium over neighbouring areas. Investment property in Hatch End typically targets the top end of the rental market — professional families seeking quality housing in a prestigious postcode.',
      'Property values average around £650,000, with the range extending well above £1 million for larger detached homes. Gross rental yields are lower than in other Harrow areas — typically 3.2–4.0% — reflecting the capital growth focus of most Hatch End investors. Many properties in the area have been held for 20 years or more, with unrealised gains that represent the most significant tax liability the owner faces.',
      'Hatch End investors are typically high-net-worth individuals for whom rental income is secondary to long-term capital appreciation and estate planning. The primary tax concerns are inheritance tax on high-value estates and CGT on eventual disposals — not the annual Section 24 cost that dominates in higher-yield areas. The planning horizon is generational rather than annual.',
    ],
    taxAngles: [
      {
        head: 'Inheritance tax on high-value Hatch End estates',
        body: 'A single detached property in Hatch End can represent £800,000–£1,200,000 of estate value. Combined with a main residence, pension assets, and other investments, many Hatch End property owners face IHT liabilities of £200,000–£400,000 or more. Standard residential property does not qualify for Business Property Relief, leaving the full value exposed to 40% IHT. A specialist designs a lifetime structuring programme that progressively reduces this exposure.',
      },
      {
        head: 'CGT on long-held Hatch End properties',
        body: 'Properties acquired in Hatch End in the 1990s or 2000s may have tripled or quadrupled in value. A property bought for £250,000 in 2000 and now worth £700,000 carries a gain of £450,000 — generating CGT of up to £108,000 on disposal. Pre-disposal planning, including spousal transfers, PRR analysis, and phased disposals, can significantly reduce this figure. A specialist reviews the position before any sale is agreed.',
      },
      {
        head: 'Family Investment Companies for Hatch End portfolios',
        body: 'A Family Investment Company (FIC) is a tax-efficient vehicle for holding high-value property and gradually transferring wealth to the next generation. Unlike standard buy-to-let SPVs, FICs are designed specifically for wealth preservation and succession planning. A specialist with IHT and trust expertise will assess whether an FIC is appropriate for your Hatch End portfolio and model the long-term estate planning benefit.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',      value: 'HA5' },
      { label: 'Avg price',     value: '£650,000' },
      { label: 'Price range',   value: '£420k–£1.2M' },
      { label: 'Gross yield',   value: '3.2–4.0%' },
      { label: 'Primary focus', value: 'IHT & Wealth Structuring' },
      { label: 'Area type',     value: 'High-value / Long-term hold' },
    ],
    localInsight: 'Hatch End has the highest concentration of unreviewed inheritance tax exposure in the borough. Many property owners here have significant wealth tied up in property that will pass to their families — but with a 40% IHT charge that could have been significantly reduced with earlier planning. The earlier a specialist reviews the position, the more options are available.',
  },

  {
    slug:         'canons-park',
    name:         'Canons Park',
    postcode:     'HA8',
    lat:          51.6075,
    lng:          -0.2944,
    avgPrice:     '£620,000',
    priceRange:   '£400,000–£1,100,000',
    avgYield:     '3.5–4.2%',
    primaryFocus: 'CGT & Inheritance Tax',
    focusSlugs:   ['capital-gains-tax-planning', 'property-inheritance-tax', 'spv-company-incorporation'],
    heroHeadline: 'Property Tax Specialists for Canons Park Landlords and Investors',
    heroDesc:     `Canons Park's premium residential character and high property values create significant CGT and inheritance tax planning needs. Our ACCA and ICAEW certified specialists serve HA8 investors with bespoke, generational tax planning.`,
    metaTitle:    'Property Tax Accountants Canons Park HA8 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Canons Park landlords and investors. CGT planning, inheritance tax advice, and wealth structuring for HA8 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Canons Park is one of the quieter, more residential areas of the HA8 postcode, sitting between Edgware and Stanmore and sharing many of the character traits of both. The Jubilee line station at Canons Park provides direct access to central London, and the area is popular with families seeking space and schools in a well-established neighbourhood.',
      'Property values average around £620,000, with detached and large semi-detached homes dominating the investment market. The area attracts longer-term investors rather than active portfolio builders, and many properties have been held for extended periods. Gross yields of 3.5–4.2% reflect the capital appreciation focus of most Canons Park investors.',
      'The investor profile in Canons Park is similar to Stanmore and Hatch End — established landlords and property owners for whom the primary tax concern is generational rather than annual. Inheritance tax planning, CGT on eventual disposals, and the structuring of estates for the next generation are the dominant advisory needs.',
    ],
    taxAngles: [
      {
        head: 'CGT planning before disposal of long-held stock',
        body: 'Properties acquired in Canons Park in the early 2000s have often appreciated by 150–200%. The CGT on disposal of a property that has doubled in value from £300,000 to £620,000 can reach £76,800 for a higher-rate taxpayer — before any reliefs. A specialist reviews PRR eligibility, spousal transfer opportunities, and disposal timing before any sale is agreed, and typically identifies meaningful savings.',
      },
      {
        head: 'Inheritance tax and the value of early planning',
        body: 'A Canons Park property at £620,000, combined with a main residence and other assets, can easily push an estate to £1.5 million or more — creating an IHT liability exceeding £300,000. The seven-year rule for lifetime gifts means that planning begun today is significantly more effective than planning begun at 75. A specialist designs a programme that begins reducing the estate value progressively.',
      },
      {
        head: 'Section 24 — less acute but still present',
        body: 'Canons Park landlords with mortgage finance still face Section 24 exposure. While the impact is proportionally smaller than in higher-yield areas (because rental income relative to property value is lower), it is still a real annual cost. A specialist reviews whether the current structure is optimal and whether any mitigation action is cost-effective given the specific portfolio.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',      value: 'HA8' },
      { label: 'Avg price',     value: '£620,000' },
      { label: 'Price range',   value: '£400k–£1.1M' },
      { label: 'Gross yield',   value: '3.5–4.2%' },
      { label: 'Primary focus', value: 'CGT & IHT' },
      { label: 'Area type',     value: 'Premium residential / long-term' },
    ],
    localInsight: 'Canons Park investors frequently come to us after a property sale has been agreed and the CGT bill has been calculated by their solicitor for the first time. At that stage, the options for planning are limited. The most valuable conversations happen before the sale decision is made — when disposal timing, spousal transfers, and PRR elections can still materially affect the outcome.',
  },

  {
    slug:         'harrow-town-centre',
    name:         'Harrow Town Centre',
    postcode:     'HA1',
    lat:          51.5803,
    lng:          -0.3412,
    avgPrice:     '£360,000',
    priceRange:   '£220,000–£600,000',
    avgYield:     '5.0–6.5%',
    primaryFocus: 'Section 24 & HMO Tax',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'sdlt-stamp-duty-planning'],
    heroHeadline: 'Property Tax Specialists for Harrow Town Centre Landlords',
    heroDesc:     `Harrow Town Centre's dense rental market and mix of flats, terraces and HMO conversions creates a range of tax planning needs for HA1 investors. Our ACCA and ICAEW certified specialists help town centre landlords structure their portfolios for maximum tax efficiency.`,
    metaTitle:    'Property Tax Accountants Harrow Town Centre HA1 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Harrow Town Centre landlords. Section 24 mitigation, HMO tax advice, and SPV planning for HA1 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Harrow Town Centre is the commercial and transport hub of the London Borough of Harrow, served by both the Metropolitan line and a network of bus routes. The area offers the densest rental market in the borough, with strong demand from students, young professionals, and commuters attracted by the central location and accessibility.',
      'Property values average around £360,000, with a significant stock of purpose-built flats, converted maisonettes, and terraced houses. The entry price point is among the lowest in the borough, making Harrow Town Centre a popular first investment for new landlords. Gross yields of 5.0–6.5% on single lets are typical, with HMO conversions on larger properties achieving higher returns.',
      'The investor profile is diverse — from single-property landlords managing their first buy-to-let to active portfolio operators with five or more town centre properties. The common thread is meaningful mortgage finance and higher-rate tax status, creating a Section 24 burden that is frequently the most immediately impactful tax issue.',
    ],
    taxAngles: [
      {
        head: 'Section 24 on flat and terraced portfolios',
        body: 'Harrow Town Centre landlords with three or four leveraged properties are typically paying £3,000–£8,000 per year more in tax than they would have under the pre-2017 rules. The exact figure depends on the mortgage balance, interest rate, and tax rate. A specialist quantifies this in the initial review and presents the available options — from income restructuring to phased incorporation.',
      },
      {
        head: 'Purpose-built flats — incorporation complications',
        body: 'Many town centre properties are purpose-built flats, which can create complications when considering SPV incorporation. Some lenders restrict buy-to-let mortgages on flats in certain blocks, and some developments have restrictions on corporate ownership. A specialist reviews the specific properties and blocks before any incorporation recommendation is made.',
      },
      {
        head: 'High-turnover acquisitions and SDLT',
        body: `Harrow Town Centre's accessible price point attracts investors who acquire multiple properties quickly. SDLT planning on each acquisition — including the 3% surcharge, correct calculation for linked transactions, and any applicable reliefs — is essential. Getting SDLT wrong at the point of acquisition cannot be corrected after completion without significant cost.`,
      },
    ],
    keyFacts: [
      { label: 'Postcode',      value: 'HA1' },
      { label: 'Avg price',     value: '£360,000' },
      { label: 'Price range',   value: '£220k–£600k' },
      { label: 'Gross yield',   value: '5.0–6.5%' },
      { label: 'Primary focus', value: 'Section 24 & Structure' },
      { label: 'Area type',     value: 'High-density / mixed BTL' },
    ],
    localInsight: 'Harrow Town Centre has a higher proportion of accidental landlords than most of the borough — people who bought flats for personal use and subsequently let them out rather than selling. Many of this group have never formally reviewed their tax position, are unaware of their Section 24 exposure, and are operating without the correct tax structure for their specific situation.',
  },

  {
    slug:         'queensbury',
    name:         'Queensbury',
    postcode:     'HA8',
    lat:          51.5929,
    lng:          -0.2887,
    avgPrice:     '£520,000',
    priceRange:   '£340,000–£780,000',
    avgYield:     '3.8–4.8%',
    primaryFocus: 'SPV Incorporation & CGT',
    focusSlugs:   ['spv-company-incorporation', 'capital-gains-tax-planning', 'section-24-tax-mitigation'],
    heroHeadline: 'Property Tax Specialists for Queensbury Landlords and Investors',
    heroDesc:     `Queensbury's strong residential character and growing investor interest create specific tax planning needs around SPV structure and CGT. Our ACCA and ICAEW certified specialists help HA8 investors manage their tax position at every stage.`,
    metaTitle:    'Property Tax Accountants Queensbury HA8 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Queensbury landlords and investors. SPV incorporation, CGT planning, and Section 24 mitigation for HA8 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Queensbury sits in the HA8 postcode, served by the Jubilee line and benefiting from the residential spillover from both Stanmore and Edgware. The area offers a mix of property types — from post-war semis to more modern developments — at price points that remain accessible for investors relative to the premium areas further north.',
      `Average property values of around £520,000 reflect Queensbury's position as a mid-tier investment area within HA8. Gross yields of 3.8–4.8% are moderate, attracting investors who are balancing yield and capital growth objectives. The area has seen increasing investor interest over the past five years as nearby areas have become less affordable.`,
      `Queensbury's investor base skews toward established landlords who have built portfolios over ten years or more, and newer investors who are considering the area as a value alternative to pricier locations. Both groups have distinct tax planning needs — the former around CGT and structure optimisation, the latter around SDLT and initial structure decisions.`,
    ],
    taxAngles: [
      {
        head: 'First SPV — the structure decision for Queensbury investors',
        body: 'Many Queensbury investors who are planning their next acquisition have not yet decided whether to buy in personal name or in a company. For higher-rate taxpayers, the Section 24 cost of personal acquisition compounds with each purchase. Establishing an SPV before the next Queensbury acquisition costs no more in SDLT but eliminates the future Section 24 burden on that property. A specialist models both paths.',
      },
      {
        head: 'CGT on maturing Queensbury investments',
        body: 'Properties acquired in Queensbury between 2010 and 2015 have typically appreciated by 40–70% in value. As these properties mature and investors consider exit or restructuring, the CGT position on each needs to be reviewed before any decision is made. Timing the disposal correctly — including considering the tax year, income in that year, and available reliefs — can make a material difference to the outcome.',
      },
      {
        head: 'Transferring from personal to company — is it worth it?',
        body: 'Queensbury landlords considering incorporating existing personal holdings need a full breakeven analysis before making any decision. The SDLT on a £520,000 property transfer is approximately £25,600 (standard rates plus 3% surcharge). The CGT on a property with a £150,000 gain could add a further £36,000. A specialist models these against the annual tax saving inside the company to determine whether and when incorporation is cost-effective.',
      },
    ],
    keyFacts: [
      { label: 'Postcode',      value: 'HA8' },
      { label: 'Avg price',     value: '£520,000' },
      { label: 'Price range',   value: '£340k–£780k' },
      { label: 'Gross yield',   value: '3.8–4.8%' },
      { label: 'Primary focus', value: 'SPV & CGT' },
      { label: 'Area type',     value: 'Mid-tier / growing investor interest' },
    ],
    localInsight: 'Queensbury is increasingly appearing on the radar of investors who have been priced out of Stanmore and Edgware but are seeking similar residential character and transport connectivity at a lower entry price. This new investor activity makes it an important area for getting the initial structure decision right — a company acquisition from the outset avoids the future cost of restructuring a personally-held portfolio.',
  },


  {
    slug:         'west-harrow',
    name:         'West Harrow',
    postcode:     'HA2',
    lat:          51.5750,
    lng:          -0.3790,
    avgPrice:     '£390,000',
    priceRange:   '£260,000–£560,000',
    avgYield:     '4.6–5.4%',
    primaryFocus: 'Section 24 Mitigation',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'capital-gains-tax-planning'],
    heroHeadline: 'Property Tax Specialists for West Harrow Landlords',
    heroDesc:     `West Harrow's accessible entry prices and steady rental demand make it a consistent BTL investment area — but Section 24 is quietly eroding annual returns for many HA2 investors. Our ACCA and ICAEW certified specialists help West Harrow landlords identify the right mitigation strategy.`,
    metaTitle:    'Property Tax Accountants West Harrow HA2 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for West Harrow landlords. Section 24 mitigation, SPV incorporation, and CGT planning for HA2 buy-to-let investors. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'West Harrow is a quiet residential area in the HA2 postcode, sitting between Harrow on the Hill and Rayners Lane and served by the Piccadilly line. The area attracts a stable tenant base of families and commuters, creating reliable rental demand that has made it a consistent BTL investment choice over the past decade.',
      'Property values average around £390,000, with a mix of 1930s terraced housing and semi-detached stock. Entry prices are accessible for investors building their first or second property portfolio, and gross yields of 4.6–5.4% on single lets are typical. The area does not attract the speculative activity of higher-yield areas but offers steady, reliable returns.',
      'West Harrow investors tend to be medium-term holders — people who bought one or two properties in the area five to fifteen years ago and have benefited from moderate capital appreciation. Many are now at the point where Section 24 has made a meaningful difference to their annual returns, and the question of whether to restructure is becoming pressing.',
    ],
    taxAngles: [
      { head: `Section 24 on West Harrow's leveraged portfolios`, body: "A West Harrow landlord with two properties and £250,000 of mortgage finance at 5% is paying £12,500 per year in mortgage interest — and losing £2,500 annually to Section 24 as a 40% taxpayer. Across a ten-year horizon, this is £25,000 of avoidable tax. A specialist quantifies the exact cost and models the available options before any recommendation is made." },
      { head: 'SPV incorporation — the timing question for HA2 investors', body: 'West Harrow investors who are considering their next acquisition face a key decision: personal name or company? For higher-rate taxpayers, each new leveraged purchase in personal name increases the Section 24 burden. Acquiring through a company from the outset avoids this. A specialist models the full economics of both approaches before any commitment is made.' },
      { head: 'Accumulated gains on West Harrow properties', body: 'Properties acquired in West Harrow between 2010 and 2016 have typically appreciated by 35–55%. This built-in gain creates a CGT liability that must be considered in any disposal or restructuring decision. A specialist reviews the CGT position for each property and identifies the most tax-efficient approach before any action is taken.' },
    ],
    keyFacts: [
      { label: 'Postcode', value: 'HA2' }, { label: 'Avg price', value: '£390,000' },
      { label: 'Price range', value: '£260k–£560k' }, { label: 'Gross yield', value: '4.6–5.4%' },
      { label: 'Primary focus', value: 'Section 24 Mitigation' }, { label: 'Area type', value: 'Steady BTL / medium-term hold' },
    ],
    localInsight: 'West Harrow has a concentrated base of landlords who acquired property between 2008 and 2016 and have been managing it personally ever since, without a formal tax review. Many are paying more Section 24 tax than they realise and have never modelled the economics of a company structure. The potential saving is often larger than expected for portfolios in this size range.',
  },

  {
    slug:         'headstone',
    name:         'Headstone',
    postcode:     'HA2',
    lat:          51.5941,
    lng:          -0.3532,
    avgPrice:     '£420,000',
    priceRange:   '£280,000–£620,000',
    avgYield:     '4.4–5.2%',
    primaryFocus: 'Section 24 & SPV',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'sdlt-stamp-duty-planning'],
    heroHeadline: 'Property Tax Specialists for Headstone Landlords and Investors',
    heroDesc:     `Headstone's residential appeal and strong rental market make it a reliable BTL investment area in HA2. Our ACCA and ICAEW certified specialists help Headstone landlords manage Section 24 exposure and structure their portfolios for long-term tax efficiency.`,
    metaTitle:    'Property Tax Accountants Headstone HA2 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Headstone landlords. Section 24 mitigation, SPV advice, and SDLT planning for HA2 buy-to-let portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Headstone sits in the HA2 postcode, straddling the boundary between North Harrow and Wealdstone and benefiting from proximity to both the Metropolitan and Piccadilly line networks. The area has a predominantly residential character, with strong demand from families and professionals seeking good schools and transport connectivity.',
      'Property values average around £420,000, with 1930s and post-war semi-detached and terraced stock forming the core of the investment market. Gross yields of 4.4–5.2% on standard single lets are typical, making Headstone an attractive proposition for investors seeking reliable returns without the management complexity of HMO properties.',
      'Headstone attracts a mix of established landlords who have held property for many years and newer investors who see the area as a solid yield play. Both groups face the same Section 24 challenge where mortgage finance is involved, and the question of whether to hold, incorporate, or exit is increasingly common across the HA2 landlord base.',
    ],
    taxAngles: [
      { head: 'Section 24 on HA2 single-let portfolios', body: 'Headstone landlords with mortgage finance are typically paying £2,000–£5,000 per year more in income tax than they would have under the pre-2017 rules, depending on their portfolio size and interest rate. Most have not formally quantified this cost. A specialist calculates the exact figure and presents the available mitigation options in the initial review.' },
      { head: 'SDLT planning on each Headstone acquisition', body: 'The 3% SDLT surcharge on a £420,000 Headstone property is £12,600. Across a portfolio build of three properties, the aggregate surcharge exceeds £35,000. Pre-purchase SDLT planning on each acquisition confirms the correct position and ensures any available reliefs are claimed before completion.' },
      { head: 'Is incorporation right for your Headstone portfolio?', body: 'For Headstone landlords with two or more leveraged properties, the annual tax saving from operating through a company can be substantial. A specialist models the SDLT and CGT cost of transferring existing properties into a company against the annual saving, and calculates the breakeven timeline before any recommendation is made.' },
    ],
    keyFacts: [
      { label: 'Postcode', value: 'HA2' }, { label: 'Avg price', value: '£420,000' },
      { label: 'Price range', value: '£280k–£620k' }, { label: 'Gross yield', value: '4.4–5.2%' },
      { label: 'Primary focus', value: 'Section 24 & SPV' }, { label: 'Area type', value: 'Residential BTL / mixed portfolio' },
    ],
    localInsight: 'Headstone has seen growing interest from property investors over the past five years as nearby areas have become more expensive. Many new entrants to the area have acquired with buy-to-let mortgages in personal name without considering the long-term Section 24 implications. Getting the structure right now — before the portfolio grows further — is significantly cheaper than restructuring later.',
  },

  {
    slug:         'ruislip',
    name:         'Ruislip',
    postcode:     'HA4',
    lat:          51.5741,
    lng:          -0.4320,
    avgPrice:     '£480,000',
    priceRange:   '£320,000–£750,000',
    avgYield:     '3.8–4.8%',
    primaryFocus: 'CGT & SPV Incorporation',
    focusSlugs:   ['capital-gains-tax-planning', 'spv-company-incorporation', 'property-inheritance-tax'],
    heroHeadline: 'Property Tax Specialists for Ruislip Landlords and Property Investors',
    heroDesc:     `Ruislip's premium residential character and strong capital growth history create significant CGT and IHT planning needs for HA4 investors. Our ACCA and ICAEW certified specialists support Ruislip landlords at every stage of portfolio planning and exit.`,
    metaTitle:    'Property Tax Accountants Ruislip HA4 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Ruislip landlords and investors. CGT planning, SPV incorporation, and inheritance tax advice for HA4 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Ruislip is one of the most desirable areas on the western edge of the London Borough of Harrow, straddling the HA4 postcode and served by the Central, Piccadilly, and Metropolitan lines. The area has a strong owner-occupier character, excellent schools, and a suburban quality of life that sustains premium property values and consistent tenant demand from high-income professionals and families.',
      'Property values average around £480,000, with a range extending to £750,000 or above for larger detached homes in sought-after streets. Gross yields of 3.8–4.8% reflect the capital appreciation focus of most Ruislip investors. Many properties in the area have been held for fifteen years or more, accumulating significant unrealised capital gains that represent the primary tax planning need.',
      'Ruislip attracts longer-term, higher-net-worth investors who are focused on capital preservation and generational transfer rather than maximising annual yield. Inheritance tax planning, CGT on eventual disposals, and the structuring of family wealth across generations are the dominant advisory needs — a different profile from the Section 24-dominated areas closer to central Harrow.',
    ],
    taxAngles: [
      { head: 'CGT on long-held Ruislip properties', body: 'A Ruislip property acquired for £250,000 in 2005 may now be worth £480,000 or more. The gain of £230,000 generates CGT of up to £55,200 for a higher-rate taxpayer. Pre-disposal planning — including spousal transfers, disposal timing, and PRR analysis — can materially reduce this. A specialist reviews the full position before any sale is agreed.' },
      { head: 'Inheritance tax on high-value Ruislip estates', body: 'A Ruislip investment property at £480,000, combined with a main residence and other assets, can push an estate well above the nil-rate band. The 40% IHT charge on the excess is a substantial liability that grows with each year of inaction. A specialist designs a succession structure that begins reducing the estate value progressively while the landlord is able to act.' },
      { head: 'SPV incorporation for new Ruislip acquisitions', body: 'Ruislip investors who are planning further acquisitions face a clear structural decision. Acquiring in a company from the outset preserves full mortgage interest deductibility for the life of the property. For a higher-rate taxpayer planning a £480,000 Ruislip acquisition with £300,000 of mortgage at 5%, the annual Section 24 cost of personal acquisition is £3,000 per year. A company acquisition eliminates this from day one.' },
    ],
    keyFacts: [
      { label: 'Postcode', value: 'HA4' }, { label: 'Avg price', value: '£480,000' },
      { label: 'Price range', value: '£320k–£750k' }, { label: 'Gross yield', value: '3.8–4.8%' },
      { label: 'Primary focus', value: 'CGT & Wealth Planning' }, { label: 'Area type', value: 'Premium / long-term hold' },
    ],
    localInsight: `Ruislip investors frequently have the most to gain from a formal tax review — and the most to lose from not having one. The combination of significant unrealised gains, high estate values, and a long planning horizon means that early action on CGT and IHT structuring can save hundreds of thousands of pounds across a generation. The cost of a specialist review is routinely a fraction of a single year's potential tax saving.`,
  },

  {
    slug:         'northwood',
    name:         'Northwood',
    postcode:     'HA6',
    lat:          51.6119,
    lng:          -0.4227,
    avgPrice:     '£680,000',
    priceRange:   '£420,000–£1,400,000',
    avgYield:     '2.8–3.8%',
    primaryFocus: 'Inheritance Tax & Wealth Structuring',
    focusSlugs:   ['property-inheritance-tax', 'capital-gains-tax-planning', 'spv-company-incorporation'],
    heroHeadline: 'Property Tax Specialists for Northwood High-Value Property Investors',
    heroDesc:     `Northwood's premium property values and established residential character create substantial inheritance tax and CGT planning needs. Our ACCA and ICAEW certified specialists help HA6 investors structure and protect generational wealth.`,
    metaTitle:    'Property Tax Accountants Northwood HA6 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Northwood landlords and investors. Inheritance tax planning, CGT advice, and wealth structuring for high-value HA6 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Northwood is the most premium residential area within the HA6 postcode, characterised by large detached homes, leafy roads, and one of the highest concentrations of high-net-worth residents in the London Borough of Harrow. The Metropolitan line provides direct access to Baker Street and the City, sustaining demand from senior professionals who value space, quality, and connectivity.',
      'Property values in Northwood average around £680,000, with the range extending well above £1 million for larger properties on the most desirable roads. Gross rental yields of 2.8–3.8% reflect the capital appreciation and wealth preservation focus of most Northwood investors. Many properties have been held for twenty years or more, creating some of the largest unrealised gains in the borough.',
      'Northwood attracts the most wealth-focused investor profile in the area — high-net-worth individuals for whom property is one component of a broader estate. Inheritance tax planning on multi-million pound estates, CGT planning on high-value disposals, and the structuring of family wealth for the next generation are the primary advisory needs. Annual income optimisation is secondary.',
    ],
    taxAngles: [
      { head: `IHT on Northwood's high-value estates`, body: "A single Northwood property at £680,000, combined with a main residence, investments, and other assets, can create an estate with £600,000–£1,000,000 or more above the nil-rate band threshold. At 40%, the potential IHT liability on this excess is £240,000–£400,000. A specialist designs a structured programme of lifetime giving, trust arrangements, and asset repositioning that progressively reduces this exposure." },
      { head: 'CGT planning on long-held Northwood investments', body: 'Properties acquired in Northwood in the 1990s and early 2000s may have appreciated by 200–300% in value. The CGT on disposal of a property acquired for £200,000 and now worth £680,000 could reach £115,200 before any reliefs. Pre-disposal planning — including the use of both spouses' annual exempt amounts, disposal timing, and PRR analysis — is essential. A specialist reviews the full position well before any sale is agreed.' },
      { head: 'Family Investment Companies for Northwood portfolios', body: 'For Northwood investors with multiple high-value properties and a clear succession objective, a Family Investment Company (FIC) can provide a tax-efficient framework for transferring wealth to the next generation while maintaining control. Unlike standard buy-to-let SPVs, FICs are specifically designed for estate planning purposes. A specialist with both property tax and estate planning expertise will assess whether an FIC is appropriate and model the long-term benefit.' },
    ],
    keyFacts: [
      { label: 'Postcode', value: 'HA6' }, { label: 'Avg price', value: '£680,000' },
      { label: 'Price range', value: '£420k–£1.4M' }, { label: 'Gross yield', value: '2.8–3.8%' },
      { label: 'Primary focus', value: 'IHT & Wealth Structuring' }, { label: 'Area type', value: 'Ultra-premium / generational' },
    ],
    localInsight: 'Northwood has the highest average unreviewed IHT exposure of any area in our network. Many property owners here have significant wealth — in property, investments, and pensions — but have never had a formal estate planning review. The potential saving from early, well-structured IHT planning regularly exceeds £200,000 per estate. The earlier a specialist reviews the position, the more options remain available.',
  },

  {
    slug:         'pinner-green',
    name:         'Pinner Green',
    postcode:     'HA5',
    lat:          51.6017,
    lng:          -0.3869,
    avgPrice:     '£570,000',
    priceRange:   '£380,000–£900,000',
    avgYield:     '3.5–4.2%',
    primaryFocus: 'CGT & Inheritance Tax',
    focusSlugs:   ['capital-gains-tax-planning', 'property-inheritance-tax', 'spv-company-incorporation'],
    heroHeadline: 'Property Tax Specialists for Pinner Green Landlords and Investors',
    heroDesc:     `Pinner Green's premium residential character and long-term ownership patterns create significant CGT and inheritance tax planning needs. Our ACCA and ICAEW certified specialists help HA5 investors structure their portfolios and protect generational wealth.`,
    metaTitle:    'Property Tax Accountants Pinner Green HA5 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Pinner Green landlords and investors. CGT planning, inheritance tax advice, and wealth structuring for HA5 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Pinner Green is the more affluent, leafy northern end of the HA5 postcode, characterised by larger detached and semi-detached homes on wider roads than those found in Pinner itself. The area sits between Pinner and Hatch End and shares many of the characteristics of both — premium residential quality, excellent schools, and strong long-term capital growth.',
      'Property values average around £570,000, with the range extending to £900,000 and above for the larger properties on the most sought-after roads. Gross yields of 3.5–4.2% reflect the capital appreciation focus of most Pinner Green investors. The area is characterised by long-term ownership, with many properties held for fifteen years or more.',
      'The investor profile in Pinner Green mirrors that of Hatch End — established landlords who are primarily focused on capital preservation and generational transfer. Inheritance tax on high-value estates and CGT on eventual disposals are the primary planning concerns, rather than the annual Section 24 cost that dominates in higher-yield areas of the borough.',
    ],
    taxAngles: [
      { head: 'CGT on maturing Pinner Green investments', body: 'Properties acquired in Pinner Green in the mid-2000s have typically appreciated by 80–120% in value. The CGT on a property acquired for £280,000 and now worth £570,000 could reach £69,600 for a higher-rate taxpayer before reliefs. Pre-disposal planning — including disposal timing, spousal transfers, and PRR analysis — can significantly reduce this. A specialist reviews the position before any sale is agreed.' },
      { head: 'Inheritance tax on Pinner Green estates', body: 'A Pinner Green property at £570,000, combined with a main residence and other assets, creates a substantial estate. Many Pinner Green property owners are above the IHT threshold without realising it, and without a plan in place, 40% of the excess will pass to HMRC rather than their families. A specialist designs a programme that progressively reduces this exposure.' },
      { head: 'Section 24 — relevant even at lower yields', body: 'Pinner Green landlords with mortgage finance still face Section 24, even at lower yield levels. The interest rate on a £350,000 mortgage at 5% creates a £3,500 annual Section 24 cost for a 40% taxpayer — a figure that compounds over a ten-year holding period to £35,000. A specialist reviews whether restructuring is cost-effective given the specific portfolio profile.' },
    ],
    keyFacts: [
      { label: 'Postcode', value: 'HA5' }, { label: 'Avg price', value: '£570,000' },
      { label: 'Price range', value: '£380k–£900k' }, { label: 'Gross yield', value: '3.5–4.2%' },
      { label: 'Primary focus', value: 'CGT & IHT' }, { label: 'Area type', value: 'Premium residential / long-term' },
    ],
    localInsight: 'Pinner Green shares the same planning gap as its neighbour Hatch End — significant property wealth, long-term ownership, and an absence of formal tax planning. The combination of unrealised CGT and potential IHT exposure is often the largest financial risk facing Pinner Green property owners, and it is consistently underestimated until a specialist puts a number on it.',
  },

  {
    slug:         'north-wembley',
    name:         'North Wembley',
    postcode:     'HA9',
    lat:          51.5653,
    lng:          -0.3028,
    avgPrice:     '£390,000',
    priceRange:   '£260,000–£560,000',
    avgYield:     '4.8–5.8%',
    primaryFocus: 'Section 24 & HMO Tax',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'sdlt-stamp-duty-planning'],
    heroHeadline: 'Property Tax Specialists for North Wembley Landlords and Investors',
    heroDesc:     `North Wembley's strong rental yields and active investment market create specific Section 24 and structure planning needs for HA9 landlords. Our ACCA and ICAEW certified specialists help North Wembley investors manage their tax position efficiently.`,
    metaTitle:    'Property Tax Accountants North Wembley HA9 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for North Wembley landlords. Section 24 mitigation, SPV advice, and SDLT planning for HA9 buy-to-let investors. Vetted ACCA/ICAEW network.',
    marketProfile: [
      `North Wembley sits in the HA9 postcode, on the southern edge of the London Borough of Harrow, served by the Bakerloo line. The area benefits from Wembley's wider regeneration — improved transport links, new residential development, and growing commercial activity — which has increased investor interest over the past five years.`,
      'Property values average around £390,000, with a mix of inter-war terraced housing and more recent purpose-built developments. Gross yields of 4.8–5.8% on single lets are typical, with HMO conversions on larger properties achieving higher returns. The accessible entry price and strong yield profile make North Wembley popular with investors focused on cash flow.',
      'North Wembley attracts active investors who are building or managing portfolios of two to six properties. The majority have buy-to-let mortgages and are higher-rate taxpayers, creating a straightforward Section 24 exposure that is the most pressing immediate tax issue for most in this area.',
    ],
    taxAngles: [
      { head: `Section 24 on North Wembley's yield-focused portfolios`, body: "A North Wembley landlord with three leveraged properties, £280,000 of mortgage at 5%, and higher-rate tax status is paying approximately £2,800 per year more in tax than they would under the pre-2017 rules. A specialist quantifies this precisely and models the options — from income restructuring to staged SPV incorporation." },
      { head: 'Company structure for active HA9 investors', body: 'North Wembley investors who are still in the portfolio-building phase have the most to gain from establishing a company structure early. Each property acquired in personal name increases the future transfer cost if incorporation is pursued later. A specialist models the long-term tax position under both structures and identifies the optimal point to introduce a company.' },
      { head: `SDLT on active North Wembley acquisition`, body: `North Wembley's accessible entry price makes it popular for investors acquiring multiple properties. The 3% SDLT surcharge on each acquisition adds up quickly — £11,700 on a £390,000 property. Pre-purchase SDLT planning ensures the correct position is established before completion and that any available reliefs are claimed.` },
    ],
    keyFacts: [
      { label: 'Postcode', value: 'HA9' }, { label: 'Avg price', value: '£390,000' },
      { label: 'Price range', value: '£260k–£560k' }, { label: 'Gross yield', value: '4.8–5.8%' },
      { label: 'Primary focus', value: 'Section 24 & Structure' }, { label: 'Area type', value: 'Active BTL / yield-focused' },
    ],
    localInsight: 'North Wembley is one of the areas where we most frequently see landlords who have built portfolios quickly — three or four properties in three or four years — without ever having a formal tax review. The Section 24 cost accumulates with each leveraged acquisition, and the longer it goes unaddressed, the more expensive the eventual restructuring becomes.',
  },

  {
    slug:         'burnt-oak',
    name:         'Burnt Oak',
    postcode:     'HA8',
    lat:          51.6033,
    lng:          -0.2691,
    avgPrice:     '£420,000',
    priceRange:   '£280,000–£620,000',
    avgYield:     '4.5–5.5%',
    primaryFocus: 'Section 24 & Portfolio Building',
    focusSlugs:   ['section-24-tax-mitigation', 'spv-company-incorporation', 'sdlt-stamp-duty-planning'],
    heroHeadline: 'Property Tax Specialists for Burnt Oak Landlords and Investors',
    heroDesc:     `Burnt Oak's competitive yields and active BTL market in HA8 create specific Section 24 and structure planning needs. Our ACCA and ICAEW certified specialists help Burnt Oak landlords manage their tax position as their portfolios grow.`,
    metaTitle:    'Property Tax Accountants Burnt Oak HA8 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Burnt Oak landlords. Section 24 mitigation, SPV incorporation, and SDLT planning for HA8 buy-to-let investors. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Burnt Oak sits on the eastern edge of the HA8 postcode, served by the Northern line at Burnt Oak station. The area has undergone significant change over the past decade — improving transport links, new residential development, and growing demand from tenants priced out of more central areas have combined to make it an increasingly active BTL investment area.',
      'Property values average around £420,000, with a mix of inter-war terraced housing and purpose-built flats. Gross yields of 4.5–5.5% on single lets make Burnt Oak competitive with other HA8 areas, and the lower entry price relative to Edgware and Canons Park attracts a more active investor profile — people who are building portfolios rather than preserving existing wealth.',
      'The BTL investor base in Burnt Oak skews toward active buyers who have made two to four acquisitions in the area over the past five to eight years. Most have mortgage finance and higher-rate tax status, and many are now facing the cumulative Section 24 cost on multiple leveraged properties for the first time.',
    ],
    taxAngles: [
      { head: 'Section 24 as the Burnt Oak portfolio grows', body: 'A Burnt Oak landlord with four properties and £350,000 of mortgage finance at 5% is paying approximately £3,500 per year more in income tax than they would under the pre-2017 rules. This cost grows with each additional leveraged acquisition in personal name. A specialist models the total Section 24 exposure across the current and planned portfolio and identifies the optimal mitigation strategy.' },
      { head: 'SPV timing — before or after the next HA8 acquisition', body: 'Burnt Oak investors who are planning their next acquisition face the structural decision that has the most long-term tax consequence. Acquiring in a company from the outset avoids the future SDLT and CGT cost of transferring that property. A specialist models both scenarios — personal acquisition with later transfer versus direct company acquisition — before any purchase is committed.' },
      { head: 'SDLT on multiple Burnt Oak properties', body: 'Active Burnt Oak investors who have made three or four acquisitions over the past five years have collectively paid £40,000–£60,000 in SDLT surcharges. Pre-purchase SDLT planning on each remaining acquisition ensures the correct position is confirmed and any applicable reliefs are identified before completion.' },
    ],
    keyFacts: [
      { label: 'Postcode', value: 'HA8' }, { label: 'Avg price', value: '£420,000' },
      { label: 'Price range', value: '£280k–£620k' }, { label: 'Gross yield', value: '4.5–5.5%' },
      { label: 'Primary focus', value: 'Section 24 & Building' }, { label: 'Area type', value: 'Active BTL / portfolio building' },
    ],
    localInsight: 'Burnt Oak is one of the fastest-growing BTL acquisition areas in HA8. Many investors who started here with one or two properties are now at five or six, and the Section 24 cost has grown with them. The most common outcome of a specialist review with a Burnt Oak landlord at this portfolio size is the decision to incorporate — and the realisation that it should have been done two properties earlier.',
  },

  {
    slug:         'eastcote',
    name:         'Eastcote',
    postcode:     'HA4',
    lat:          51.5762,
    lng:          -0.3974,
    avgPrice:     '£500,000',
    priceRange:   '£340,000–£780,000',
    avgYield:     '3.8–4.6%',
    primaryFocus: 'CGT & SPV Incorporation',
    focusSlugs:   ['capital-gains-tax-planning', 'spv-company-incorporation', 'property-inheritance-tax'],
    heroHeadline: 'Property Tax Specialists for Eastcote Landlords and Investors',
    heroDesc:     `Eastcote's premium residential character and long-term capital growth profile create specific CGT and inheritance tax planning needs for HA4 investors. Our ACCA and ICAEW certified specialists help Eastcote landlords structure their portfolios for both annual efficiency and generational transfer.`,
    metaTitle:    'Property Tax Accountants Eastcote HA4 | Property Accountants Harrow',
    metaDesc:     'Specialist property tax accountants for Eastcote landlords and investors. CGT planning, SPV incorporation, and inheritance tax advice for HA4 portfolios. Vetted ACCA/ICAEW network.',
    marketProfile: [
      'Eastcote is a desirable residential area in the HA4 postcode, served by both the Piccadilly and Metropolitan lines at Eastcote station. The area shares much of the character of neighbouring Ruislip and Pinner — quiet residential streets, good schools, and a suburban quality that attracts professional families and long-term residents.',
      'Property values average around £500,000, with a range from purpose-built flats at the lower end to larger detached houses approaching £800,000. Gross yields of 3.8–4.6% on single lets are typical, reflecting the capital appreciation focus of most Eastcote investors. Many properties in the area have been held for ten years or more, accumulating meaningful unrealised gains.',
      `Eastcote attracts a mix of established landlords who have held property for the long term and newer investors attracted by the area's residential quality and transport links. The established group tends to have CGT and IHT as their primary planning concerns; newer investors face the Section 24 and structure decision that comes with any leveraged buy-to-let acquisition.`,
    ],
    taxAngles: [
      { head: `CGT on Eastcote's maturing investment properties`, body: "Properties acquired in Eastcote between 2008 and 2015 have typically appreciated by 50–80% in value. A property acquired for £280,000 in 2010 and now worth £500,000 carries a potential CGT bill of £52,800 for a higher-rate taxpayer. Pre-disposal planning — including disposal timing, spousal transfers, and PRR analysis — can materially reduce this. A specialist reviews the position before any sale is agreed." },
      { head: 'SPV for future Eastcote acquisitions', body: 'Eastcote investors who are considering further acquisitions face a clear decision on structure. For higher-rate taxpayers, each new leveraged personal acquisition increases the ongoing Section 24 burden. Acquiring through a company from the outset preserves full finance cost deductibility. A specialist models both paths and identifies the optimal approach for the specific investor profile.' },
      { head: `Inheritance tax on Eastcote's long-held portfolios`, body: "Eastcote investors who have held property for twenty years or more often have significant estate planning needs. A property worth £500,000, combined with other assets, contributes materially to an IHT exposure. A specialist reviews the full estate picture and designs a lifetime structuring programme that progressively reduces the 40% charge that would otherwise apply on death." },
    ],
    keyFacts: [
      { label: 'Postcode', value: 'HA4' }, { label: 'Avg price', value: '£500,000' },
      { label: 'Price range', value: '£340k–£780k' }, { label: 'Gross yield', value: '3.8–4.6%' },
      { label: 'Primary focus', value: 'CGT & SPV' }, { label: 'Area type', value: 'Premium residential / mid-term' },
    ],
    localInsight: 'Eastcote sits in an interesting position in the Harrow investment landscape — premium enough to attract the CGT and IHT planning needs of the high-value areas, but accessible enough to still draw active investors building leveraged portfolios. This dual profile means a specialist review of an Eastcote portfolio often uncovers both annual Section 24 savings and longer-term estate planning opportunities in the same conversation.',
  },

]

export const getSpokeBySlug = (slug: string): SpokeArea | undefined =>
  spokeAreas.find(a => a.slug === slug)

export const getAllSpokeSlugs = (): string[] => spokeAreas.map(a => a.slug)
