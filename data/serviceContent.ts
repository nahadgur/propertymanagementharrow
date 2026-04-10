export interface Benefit {
  title: string
  desc:  string
}

export interface ProcessStep {
  title: string
  body:  string
}

export interface ComparisonRow {
  factor:   string
  personal: string
  company:  string
  winner:   'personal' | 'company' | 'neutral'
}

export interface ServiceContent {
  slug:           string
  metaTitle:      string
  metaDesc:       string
  h1:             string
  intro:          string[]
  problemHeading: string
  problems:       { head: string; body: string }[]
  benefits:       Benefit[]
  processHeading: string
  processSteps:   ProcessStep[]
  comparison?:    { heading: string; subheading: string; rows: ComparisonRow[] }
  localBridge:    string
}

export const serviceContent: Record<string, ServiceContent> = {

  'section-24-tax-mitigation': {
    slug:      'section-24-tax-mitigation',
    metaTitle: 'Section 24 Tax Mitigation for UK Landlords | Property Accountants Harrow',
    metaDesc:
      'Specialist Section 24 tax mitigation for UK landlords. ACCA and ICAEW certified property accountants who model your exposure and implement legal restructuring strategies. Harrow network.',
    h1: 'Section 24 Tax Mitigation for Property Investors',
    intro: [
      'The mortgage interest finance cost restriction — commonly known as Section 24 — has been the single most damaging piece of legislation for leveraged UK landlords since it was fully phased in from April 2020. For higher and additional rate taxpayers, the ability to deduct mortgage interest as a business expense has been replaced by a 20% tax credit that bears no relation to actual finance costs.',
      'The result is that landlords who have borrowed to build their portfolios — which is to say, most serious property investors — are now paying income tax on profits they never actually received. A landlord paying 40% income tax with £30,000 of annual mortgage interest loses £6,000 per year to Section 24 compared to the pre-2017 position. Across a larger portfolio, that figure can reach five or even six figures annually.',
      'The good news is that legal mitigation strategies exist. The right approach depends on your specific portfolio — its size, leverage ratio, income composition, and long-term objectives. Our Harrow specialists model the full picture before recommending any action.',
    ],
    problemHeading: 'Who Section 24 hits hardest — and why most landlords are underreacting',
    problems: [
      {
        head: 'Higher-rate taxpayers with mortgaged portfolios',
        body: 'If your total income — including rental income — pushes you above the basic rate threshold, you receive only a 20% tax credit on finance costs. The gap between what you pay in mortgage interest and what you recover in relief grows with every percentage point of income tax above 20%. For a 45% additional rate taxpayer, three quarters of every pound of mortgage interest generates no relief whatsoever.',
      },
      {
        head: 'Landlords approaching the higher-rate threshold',
        body: "Section 24 is particularly cruel to landlords whose rental income alone crosses into higher-rate territory. Even if their other income is modest, adding rental income to the calculation — and then adding back the grossed-up finance cost for threshold purposes — pushes thousands of accidental higher-rate taxpayers into a position where they pay more in tax than they earn in profit.",
      },
      {
        head: 'Landlords who have not reviewed their position since 2020',
        body: "Section 24 was fully implemented in April 2020. Many landlords absorbed the initial shock, made no structural changes, and have been quietly haemorrhaging tax ever since. Without a specialist review, there is no way to know whether the amount being paid is unavoidable or whether restructuring could recover a significant portion of it.",
      },
    ],
    benefits: [
      {
        title: 'Full exposure modelling before any action',
        desc:  'Your specialist calculates your exact annual Section 24 cost based on your actual finance costs, rental income, and personal tax position — before recommending any strategy.',
      },
      {
        title: 'SPV incorporation economics assessed',
        desc:  'Where incorporation is the right answer, your specialist models the SDLT and CGT cost of transfer against projected annual tax savings to give you a precise breakeven timeline.',
      },
      {
        title: 'Alternative strategies where incorporation does not stack up',
        desc:  'Spousal income splitting, pension contributions to reduce taxable income, and selective portfolio disposal are all modelled where SPV transfer is not cost-effective.',
      },
      {
        title: 'Ongoing compliance and annual review',
        desc:  'Section 24 interacts with other elements of your tax position that can shift year to year. Your specialist reviews your position annually to ensure the strategy remains optimal.',
      },
    ],
    processHeading: 'How we match you with a Section 24 specialist',
    processSteps: [
      {
        title: 'Tell us about your portfolio and finance costs',
        body:  'Share the number of properties, approximate mortgage balances, current interest rates, and your estimated rental income and personal income. The more detail, the more accurate the initial assessment.',
      },
      {
        title: 'We identify your specialist',
        body:  'We match your enquiry to an ACCA or ICAEW certified accountant in our network who focuses specifically on Section 24 restructuring and has handled portfolios of your size and leverage profile before.',
      },
      {
        title: 'Initial assessment within 48 hours',
        body:  'Your matched specialist contacts you directly. Most begin with a brief call to understand your position before preparing a written assessment of your exposure and the available mitigation options.',
      },
      {
        title: 'Strategy implementation',
        body:  'Once you agree on an approach, your specialist implements the strategy — whether that means a phased SPV transfer, income adjustments, or a combination. All actions are taken with full awareness of the tax implications at each stage.',
      },
    ],
    localBridge: 'Looking for a Section 24 specialist in Harrow? Our local network covers all Harrow areas — including Stanmore, Pinner, Wealdstone, and Harrow on the Hill — with specialists who understand local rental yields and portfolio profiles.',
  },

  'spv-company-incorporation': {
    slug:      'spv-company-incorporation',
    metaTitle: 'SPV Company Incorporation for Property Investors | Property Accountants Harrow',
    metaDesc:
      'Specialist SPV company incorporation advice for UK landlords. ACCA and ICAEW certified property accountants who model SDLT, CGT and the full economics before any transfer. Harrow network.',
    h1: 'SPV Company Incorporation for Property Portfolios',
    intro: [
      'Incorporating a buy-to-let portfolio into a Special Purpose Vehicle limited company is one of the most powerful tools available to highly leveraged UK landlords. Inside a limited company, mortgage interest is a fully deductible business expense — not subject to the Section 24 restriction. Profits are taxed at the corporation tax rate (currently 25% for profits above £50,000, or 19% for smaller companies) rather than at income tax rates of up to 45%. And the company structure creates a more flexible, transferable asset for succession planning purposes.',
      'But SPV incorporation is not a decision that should be made quickly, or on the basis of the tax benefits alone. The Stamp Duty Land Tax payable on transferring personally-held properties into a company — at standard rates plus the 3% additional dwelling surcharge — can be substantial. The Capital Gains Tax triggered on disposal from personal name to company must also be calculated. In many cases, these transfer costs run to tens of thousands of pounds, and the payback period can stretch to several years.',
      'The right approach is to model the full economics of incorporation before a single property moves — and to consider whether a full transfer, a partial transfer, or purchasing only future acquisitions through the company is the most cost-effective strategy for your specific situation.',
    ],
    problemHeading: 'Why most SPV decisions go wrong — and how to avoid it',
    problems: [
      {
        head: 'Underestimating the transfer costs',
        body: 'SDLT on a portfolio transfer to a company is calculated at the same rates as a market-value purchase — including the 3% additional dwelling surcharge. On a portfolio of five properties worth £250,000 each, the SDLT alone could exceed £37,000. This figure must be modelled against projected annual tax savings before any transfer is agreed.',
      },
      {
        head: 'Ignoring Capital Gains Tax on transfer',
        body: 'Transferring a personally-held property to a company is a disposal for CGT purposes. If the property has increased in value since purchase, CGT is payable on the gain at the point of transfer — even though no cash changes hands. Holdover relief is generally not available on residential investment property, making CGT planning critical before any transfer.',
      },
      {
        head: 'Choosing the wrong company structure',
        body: "Not all limited companies are treated equally by buy-to-let mortgage lenders. Using the correct SIC code (68100 or 68209) is essential for accessing buy-to-let mortgage products within the company. Setting up a trading company rather than a property SPV, or using an existing company that trades in other activities, can create significant mortgage and compliance complications.",
      },
    ],
    benefits: [
      {
        title: 'Full SDLT and CGT modelling before transfer',
        desc:  'Your specialist calculates the exact transfer cost for your portfolio before any decision is made — including SDLT, CGT, legal fees, and mortgage arrangement costs.',
      },
      {
        title: 'Breakeven analysis and payback timeline',
        desc:  'The annual tax saving inside the company is compared against the total transfer cost to produce a precise breakeven point — typically expressed in years to recoup the transfer costs.',
      },
      {
        title: 'Correct company structure from day one',
        desc:  'Your specialist sets up the SPV with the right SIC code, share structure, and director/shareholder arrangements — ensuring mortgage lender compatibility and optimising the ownership structure for succession planning.',
      },
      {
        title: 'Future acquisition strategy',
        desc:  'Where a full transfer does not stack up economically, your specialist identifies the optimal strategy for future acquisitions — typically purchasing new properties through the company while holding existing ones personally.',
      },
    ],
    processHeading: 'How we match you with an SPV incorporation specialist',
    processSteps: [
      {
        title: 'Share your portfolio details',
        body:  'Tell us the number of properties, current values, original purchase prices, outstanding mortgage balances, and your personal income tax position. This enables an accurate initial modelling of transfer costs and projected savings.',
      },
      {
        title: 'We match you with a specialist',
        body:  'We identify an ACCA or ICAEW certified accountant in our Harrow network with specific experience in SPV incorporations — including the SDLT and CGT modelling that most generalist accountants are not equipped to perform accurately.',
      },
      {
        title: 'Full economics modelled and presented',
        body:  'Your specialist presents a written analysis of the transfer costs, annual savings, and breakeven timeline before any action is taken. You make a fully informed decision.',
      },
      {
        title: 'Company setup and transfer execution',
        body:  'If incorporation proceeds, your specialist manages the company formation, coordinates with your solicitor on the SDLT return, and plans the transfer sequencing to minimise avoidable costs.',
      },
    ],
    comparison: {
      heading:    'Personal ownership vs SPV limited company',
      subheading: 'How the two structures compare across the factors that matter most to leveraged property investors.',
      rows: [
        { factor: 'Mortgage interest relief',   personal: '20% tax credit only (Section 24)',  company: '100% deductible business expense',     winner: 'company' },
        { factor: 'Income tax on profits',      personal: '20–45% income tax',                 company: '19–25% corporation tax',               winner: 'company' },
        { factor: 'SDLT on transfer',           personal: 'N/A (already owned)',               company: 'Full SDLT + 3% surcharge on transfer',  winner: 'personal' },
        { factor: 'CGT on transfer',            personal: 'N/A (already owned)',               company: 'CGT payable on gain at transfer',       winner: 'personal' },
        { factor: 'CGT on eventual sale',       personal: '18–24% personal CGT',              company: 'Within company, then dividend/salary',  winner: 'neutral' },
        { factor: 'Succession planning',        personal: 'Complex — IHT at 40% on estate',  company: 'Share transfer — more flexible',        winner: 'company' },
        { factor: 'Profit extraction',          personal: 'Direct — all rental income yours', company: 'Via salary or dividend — more tax steps', winner: 'personal' },
        { factor: 'Mortgage product access',   personal: 'Full standard BTL range',           company: 'Growing range — SPV-specific products',  winner: 'personal' },
        { factor: 'Accountancy complexity',    personal: 'Self-assessment return',            company: 'Corporation tax return + accounts',      winner: 'personal' },
      ],
    },
    localBridge: 'Searching for an SPV incorporation specialist in Harrow? Our network includes accountants who have structured SPV transfers for landlords across Stanmore, Pinner, Kenton, and the wider Harrow area — with full knowledge of local portfolio types and yield profiles.',
  },

  'capital-gains-tax-planning': {
    slug:      'capital-gains-tax-planning',
    metaTitle: 'Capital Gains Tax Planning for Property Investors | Property Accountants Harrow',
    metaDesc:
      'Specialist Capital Gains Tax planning for UK property investors. PRR, lettings relief, holdover elections and disposal timing — structured before the sale is agreed. Harrow network.',
    h1: 'Capital Gains Tax Planning for Property Investors',
    intro: [
      'Capital Gains Tax on property disposals is one of the most expensive and most avoidable costs in property investment — provided the planning happens before the sale is agreed, not after it completes. The reliefs available to property investors are numerous and sometimes surprising, but each carries specific conditions that must be met at the right time and in the right sequence.',
      'Private Residence Relief can exempt the entire gain on a property that has been your main home, including the final nine months of ownership regardless of whether you still live there. Lettings relief of up to £40,000 per owner applies where PRR is also available and the property was let during part of the ownership period. Holdover relief, Business Asset Disposal Relief, and gift relief each play a role in specific circumstances — though availability on residential investment property is more limited than many landlords assume.',
      'The CGT rate on residential property disposals is 18% for basic rate taxpayers and 24% for higher and additional rate taxpayers (reduced from 28% in October 2024). Across a significant property gain, the difference between a planned and unplanned disposal can represent tens of thousands of pounds. Our Harrow specialists structure exits in advance — not as an afterthought.',
    ],
    problemHeading: 'The CGT mistakes property investors make — and what they cost',
    problems: [
      {
        head: 'Selling without reviewing PRR eligibility',
        body: 'Many landlords who previously lived in a property they later let out are entitled to Private Residence Relief for the period of occupation — plus the final nine months of ownership — but never claim it. A property lived in for two years and let for six years still qualifies for PRR on approximately 27% of the gain, plus potential lettings relief. This relief is frequently missed by generalist accountants.',
      },
      {
        head: 'Failing to use the Annual Exempt Amount strategically',
        body: 'The CGT Annual Exempt Amount is currently £3,000 per individual (2024/25). For jointly owned properties, both owners have their own exemption. Staggering disposals across two tax years — where practical — effectively doubles the exempt amount per owner. On a significant gain, this simple timing strategy can save up to £1,440 in CGT per individual owner.',
      },
      {
        head: 'Ignoring the interaction between CGT and income tax',
        body: "Where a disposal pushes a basic rate taxpayer into higher rate territory, CGT is charged at 18% on the portion of the gain within the basic rate band and 24% above it. A specialist models your total income in the disposal year — including employment income, pension income, and other investment income — before selecting the optimal disposal structure and timing.",
      },
    ],
    benefits: [
      {
        title: 'PRR and lettings relief assessment before sale',
        desc:  'Your specialist reviews the occupation and letting history of every property being sold to identify all available PRR and lettings relief before exchange is agreed.',
      },
      {
        title: 'Disposal timing and tax year planning',
        desc:  'Where flexibility exists on completion date, your specialist models the CGT liability in the current versus next tax year — and across different disposal scenarios — to identify the lowest-cost timing.',
      },
      {
        title: 'Spousal transfers and ownership restructuring',
        desc:  'Transfers between spouses are exempt from CGT. Transferring a share of a property to a lower-rate taxpaying spouse before disposal can significantly reduce the overall CGT bill — if structured correctly and in advance.',
      },
      {
        title: 'Post-disposal reporting and payment planning',
        desc:  'CGT on property disposals must be reported and paid within 60 days of completion. Your specialist prepares the CGT return and plans the payment cashflow to avoid interest charges.',
      },
    ],
    processHeading: 'How we match you with a CGT planning specialist',
    processSteps: [
      {
        title: 'Tell us about the property and its history',
        body:  'Share the original purchase price, current value, occupation history (whether you have ever lived in the property), and your current income level. This enables an accurate initial CGT estimate.',
      },
      {
        title: 'We identify your specialist',
        body:  'We match your enquiry to an ACCA or ICAEW certified specialist with specific experience in property CGT planning — particularly PRR, lettings relief, and disposal sequencing for portfolio landlords.',
      },
      {
        title: 'Pre-sale CGT review and planning',
        body:  'Your specialist presents a written analysis of the likely CGT position, available reliefs, and any planning opportunities — before you exchange contracts.',
      },
      {
        title: 'Post-disposal compliance',
        body:  'Your specialist prepares and submits the 60-day CGT return to HMRC, calculates the exact payment due, and reviews the position in your annual self-assessment return.',
      },
    ],
    localBridge: 'Looking for a CGT planning specialist in Harrow? Our local network includes accountants who specialise in property disposals across Stanmore, Pinner, Harrow on the Hill, and Edgware — with strong familiarity with local property values and gain profiles.',
  },

  'sdlt-stamp-duty-planning': {
    slug:      'sdlt-stamp-duty-planning',
    metaTitle: 'SDLT & Stamp Duty Planning for Property Investors | Property Accountants Harrow',
    metaDesc:
      'Specialist SDLT and stamp duty planning for UK property investors. 3% surcharge mitigation, multiple dwellings relief, mixed-use analysis. Reviewed before exchange. Harrow network.',
    h1: 'SDLT & Stamp Duty Planning for Property Investors',
    intro: [
      'Stamp Duty Land Tax is often the largest single upfront cost for property investors — and it is frequently higher than it needs to be. The 3% additional dwelling surcharge, introduced in April 2016, applies to almost all purchases of residential property by investors, adding thousands to the cost of every acquisition. But numerous legitimate reliefs exist that, when identified and applied correctly, can significantly reduce or in some cases eliminate the SDLT liability.',
      'Multiple Dwellings Relief, mixed-use property classification, first-time buyer reliefs in specific circumstances, and the linked transaction rules all represent planning opportunities that many solicitors — and most general accountants — either overlook or do not have the property-specific expertise to apply correctly. SDLT is also time-critical: the relief analysis must be completed before exchange, and errors are difficult and expensive to correct after completion.',
      'Our Harrow specialists review every acquisition before exchange to apply every legitimate relief available — and work with your solicitor to ensure the SDLT return reflects the correct position from the outset.',
    ],
    problemHeading: 'SDLT mistakes that cost property investors thousands',
    problems: [
      {
        head: 'Paying the residential rate on mixed-use properties',
        body: "Properties with both residential and non-residential elements — a flat above a commercial unit, a house with an agricultural outbuilding, a property with a granny annexe — may qualify for the non-residential SDLT rates, which are significantly lower and carry no 3% surcharge. Whether a property qualifies as mixed-use depends on its specific characteristics at completion. This is a frequently missed classification opportunity that can save five-figure sums on the right property.",
      },
      {
        head: 'Missing the 3% surcharge reclaim deadline',
        body: "If you purchase a new main residence before selling your previous one, you pay the 3% surcharge at completion. If you then sell the previous property within three years, you are entitled to a full refund of the surcharge. This reclaim must be made within 12 months of the sale — or the three-year deadline, whichever is earlier. It is a substantial and frequently missed reclaim opportunity for owner-occupiers who also hold investment property.",
      },
      {
        head: 'Incorrect handling of linked transactions',
        body: "Where two or more property purchases from the same seller are linked — including purchases by connected persons — HMRC may aggregate the consideration for SDLT purposes, potentially pushing the total into higher rate bands. Conversely, linked transactions between unconnected buyers may be incorrectly aggregated by HMRC. Both types of error are common and can result in either underpaid or overpaid SDLT.",
      },
    ],
    benefits: [
      {
        title: 'Pre-exchange SDLT review on every acquisition',
        desc:  'Your specialist reviews each purchase before exchange to identify applicable reliefs, confirm the correct classification, and calculate the SDLT liability that should apply.',
      },
      {
        title: 'Mixed-use assessment and supporting documentation',
        desc:  'Where a mixed-use claim is supportable, your specialist prepares the documentation needed to substantiate the classification in the event of an HMRC enquiry.',
      },
      {
        title: 'Surcharge reclaim identification and submission',
        body:  'Your specialist tracks all surcharge-paying purchases and flags reclaim windows as they approach — ensuring no eligible refund is missed through oversight.',
      },
      {
        title: 'Portfolio-level SDLT planning',
        desc:  'Across a portfolio of planned acquisitions, your specialist models the SDLT implications of different purchase sequences and structures to minimise the aggregate liability.',
      },
    ],
    processHeading: 'How we match you with an SDLT planning specialist',
    processSteps: [
      {
        title: 'Tell us about the property being acquired',
        body:  'Share the purchase price, property type, and any details you have about its current or historic use — commercial elements, annexes, agricultural land, or other features that might affect its classification.',
      },
      {
        title: 'We match you with a specialist',
        body:  'We identify an ACCA or ICAEW certified accountant in our network with specific SDLT experience — particularly mixed-use analysis and multiple dwellings relief — for your property type.',
      },
      {
        title: 'Pre-exchange SDLT analysis',
        body:  'Your specialist provides a written analysis of the correct SDLT position before you exchange contracts — including any reliefs available and the documentation required to support them.',
      },
      {
        title: 'SDLT return preparation and submission',
        body:  'Your specialist prepares the SDLT return in coordination with your solicitor, ensuring it correctly reflects the agreed position and is submitted within the required 14-day window.',
      },
    ],
    localBridge: 'Looking for an SDLT specialist in Harrow? Our network includes accountants who regularly handle SDLT reviews for acquisitions across Harrow, Stanmore, Pinner, Edgware, and the wider North-West London area — with familiarity with the local mixed-use property stock.',
  },

  'property-inheritance-tax': {
    slug:      'property-inheritance-tax',
    metaTitle: 'Property Inheritance Tax Planning | Property Accountants Harrow',
    metaDesc:
      'Specialist property inheritance tax planning for UK landlords and investors. BPR, family investment companies, trusts and lifetime gifting — structured for portfolio succession. Harrow network.',
    h1: 'Property Inheritance Tax Planning for Portfolio Landlords',
    intro: [
      'For high-net-worth property investors, Inheritance Tax represents one of the largest — and most foreseeable — threats to intergenerational wealth transfer. Residential buy-to-let property held in a personal name is fully exposed to IHT at 40% on the value above the nil-rate band (currently £325,000 per individual, or up to £1 million for a married couple with a residential nil-rate band and full transferability). There is no Business Property Relief for standard residential investment property.',
      "The cumulative value of a Harrow property portfolio — even a modest one of five or six properties — can easily reach £1.5 to £2 million. Without IHT planning, a significant portion of that value passes to HMRC rather than to the investor's family. The IHT charge at death is unavoidable unless planning is in place during the investor's lifetime.",
      "The available tools are powerful — Family Investment Companies, discretionary trusts, lifetime gifting programmes, and portfolio structuring via limited company — but each requires careful design, proper legal documentation, and ongoing compliance. Most property investors wait far too long to begin. Our Harrow specialists start planning while there is still time to make a material difference.",
    ],
    problemHeading: 'Why property portfolios are particularly exposed to IHT',
    problems: [
      {
        head: 'Residential property does not qualify for Business Property Relief',
        body: "Business Property Relief at 100% is available for qualifying business assets — but HMRC treats standard residential buy-to-let as investment activity, not a trading business. Unlike commercial property or shares in a trading company, residential portfolios receive no BPR. The full value above the nil-rate band is exposed to 40% IHT at death, with no structural exemption available under current rules.",
      },
      {
        head: 'Property values in Harrow have grown substantially',
        body: 'Average property values in the Harrow and North-West London area have increased significantly over the past two decades. A portfolio acquired for £600,000 in 2005 may now be worth £1.4 million or more. This growth — welcome as it is — has pushed many landlords well above the IHT threshold without any structural mitigation in place.',
      },
      {
        head: 'Most investors leave planning too late',
        body: 'The seven-year rule for lifetime gifts means that effective IHT planning requires a long runway. Gifts made within seven years of death are still subject to IHT (with taper relief applying between three and seven years). Planning that begins at 75 is significantly less effective than planning that begins at 60. The earlier the structure is put in place, the greater the wealth that can be passed on.',
      },
    ],
    benefits: [
      {
        title: 'IHT exposure assessment across your full estate',
        desc:  'Your specialist calculates the current IHT exposure across your property portfolio and overall estate — giving you a clear picture of what would pass to HMRC under the current position.',
      },
      {
        title: 'Family Investment Company design',
        desc:  'Where appropriate, your specialist designs a Family Investment Company structure that allows portfolio growth to accumulate in your children\'s shares — outside your estate — while you retain control and income.',
      },
      {
        title: 'Trust and gifting strategy',
        body:  'Your specialist designs a lifetime gifting programme — including the use of discretionary trusts where appropriate — to progressively move portfolio value out of your estate over time.',
      },
      {
        title: 'CGT and IHT interaction planning',
        desc:  'Every gift of property triggers CGT on the gain. Your specialist models the combined CGT and IHT impact of different gifting strategies — identifying the net wealth-preserving outcome of each approach.',
      },
    ],
    processHeading: 'How we match you with an IHT planning specialist',
    processSteps: [
      {
        title: 'Share your estate and portfolio details',
        body:  'Tell us the estimated current value of your property portfolio, how it is held (personal name or company), your approximate overall estate value, and your family objectives for succession.',
      },
      {
        title: 'We identify your specialist',
        body:  'We match your enquiry to an ACCA or ICAEW certified accountant in our network who focuses on property IHT planning — particularly FIC structures, trust design, and lifetime gifting for portfolio landlords. Some also hold STEP qualifications.',
      },
      {
        title: 'Estate IHT assessment and options review',
        body:  'Your specialist presents a written analysis of your current IHT exposure and the available mitigation strategies — modelled to your specific estate, family structure, and timeline.',
      },
      {
        title: 'Structure implementation and ongoing review',
        body:  'Once a strategy is agreed, your specialist manages implementation — coordinating with solicitors on trust deeds, company articles, or gifting documentation — and reviews the structure annually as your estate and the legislation evolve.',
      },
    ],
    localBridge: 'Looking for a property IHT planning specialist in Harrow? Our local network includes accountants who work with high-net-worth Harrow landlords in Stanmore, Pinner, and Harrow on the Hill — areas with significant property value concentration and strong succession planning needs.',
  },
}

export const getServiceContentBySlug = (slug: string): ServiceContent | undefined =>
  serviceContent[slug]
