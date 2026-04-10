// data/serviceLocationContent.ts
import { getLocationProfileByName, type LocationProfile } from './locationProfiles';

function prof(city: string): LocationProfile | null { return getLocationProfileByName(city) || null; }
function sizeLabel(p: LocationProfile): string {
  switch (p.avgPortfolioType) { case 'single-let': return 'single-property landlords'; case 'small-portfolio': return 'portfolio landlords'; case 'mixed': return 'landlords of all sizes'; case 'block-management': return 'freeholders and portfolio landlords'; default: return 'landlords'; }
}

// ── Structural variation helpers ──
// Hash city name to a stable number for rotating between content patterns
function cityHash(city: string): number {
  let h = 0;
  for (let i = 0; i < city.length; i++) h = ((h << 5) - h + city.charCodeAt(i)) | 0;
  return Math.abs(h);
}
function pick<T>(city: string, options: T[]): T { return options[cityHash(city) % options.length]; }

export interface ServiceLocationPageContent {
  heroDesc: (city: string) => string;
  heroBullets: (city: string) => string[];
  trustLine: (city: string) => string;
  benefits: (city: string) => { title: string; desc: string }[];
  intro: (city: string) => string[];
  introHeading: (city: string) => string;
  stepsHeading: (city: string) => string;
  whyHeading: (city: string) => string;
  steps: (city: string) => string[];
  whyPoints: (city: string) => string[];
  faqs: (city: string) => { question: string; answer: string }[];
}

export const serviceLocationContent: Record<string, ServiceLocationPageContent> = {

"residential-lettings-management": {
  introHeading: (city) => {
    const p = prof(city);
    if (!p) return `Residential Lettings Management in ${city}`;
    const patterns = [
      `Managing ${p.propertyMix[0]} in ${city}: What Sets Professional Agents Apart`,
      `What ${city} Landlords Should Expect From a Lettings Management Specialist`,
      `The ${city} Rental Market: Why DIY Management Costs More Than You Think`,
      `Letting ${p.propertyMix[0]} in ${city}'s ${p.postcode} Area: Beyond Tenant Find`,
      `Full-Service Lettings in ${city}: From Compliance to Tenant Retention`,
    ];
    return pick(city, patterns);
  },
  stepsHeading: (city) => {
    const p = prof(city);
    if (!p) return `How Lettings Management Works in ${city}`;
    const patterns = [
      `From Empty Property to Settled Tenant: How It Works in ${city}`,
      `Your ${city} Lettings Journey: Step by Step`,
      `Getting Your ${p.postcode} Area Property Let and Managed`,
      `How Our ${city} Agents Take a Property From Vacant to Fully Managed`,
    ];
    return pick(city, patterns);
  },
  whyHeading: (city) => {
    const p = prof(city);
    if (!p) return `Why Use Our Matching Service in ${city}`;
    const patterns = [
      `Why ${city} Landlords Use Our Matching Service`,
      `The Advantage of Matched Management for ${p.postcode} Area Landlords`,
      `What Makes Our ${city} Agent Matching Different`,
      `Why Not Just Pick an Agent Off Google? Here Is What ${city} Landlords Get Instead`,
    ];
    return pick(city, patterns);
  },
  heroDesc: (city) => {
    const p = prof(city);
    if (!p) return `Residential lettings management specialists covering ${city}. Free matching, no obligation.`;
    // Different framing based on portfolio type
    if (p.avgPortfolioType === 'single-let') return `You have a property in ${city} and you want it managed properly — compliant, well-tenanted, and hassle-free. We connect ${sizeLabel(p)} in the ${p.postcode} area with agents who handle ${p.propertyMix[0]} like yours every week.`;
    if (p.avgPortfolioType === 'block-management') return `${city}'s mix of blocks and individual lets needs agents who can do both. We match ${sizeLabel(p)} in the ${p.postcode} area with specialists who handle service charge administration and single-let management under one roof.`;
    return `Managing ${p.propertyMix[0]} across ${city} takes local knowledge, vetted contractors, and bulletproof compliance systems. We match ${sizeLabel(p)} in the ${p.postcode} area with agents who already work this market.`;
  },
  heroBullets: (city) => {
    const p = prof(city);
    if (!p) return ['Lettings management specialists covering your area', 'Full compliance and tenant management', 'Responsive maintenance coordination'];
    // Vary bullets based on character
    if (p.avgPortfolioType === 'single-let') return [
      `Agents who already manage ${p.propertyMix[0]} in your part of ${city}`,
      `Every compliance obligation covered — gas, electrical, EPC, deposit, right-to-rent`,
      `Tenants matched to your property type, not just the first applicant who passes referencing`,
    ];
    return [
      `${p.borough} specialists managing ${p.propertyMix[0]} and ${p.propertyMix[1]} across the ${p.postcode} area`,
      `Compliance calendar that tracks every certificate, inspection, and renewal date for your portfolio`,
      `Consolidated reporting across all your ${city} properties — income, costs, voids, and maintenance`,
    ];
  },
  trustLine: (city) => { const p = prof(city); return p ? `Trusted by ${sizeLabel(p)} across ${city} and ${p.borough}` : `Trusted by landlords across ${city}`; },
  benefits: (city) => {
    const p = prof(city);
    if (!p) return defBenefits(city);
    // Genuinely different benefit sets based on location type
    if (p.avgPortfolioType === 'single-let') return [
      { title: "Your Tenant, Not Just Any Tenant", desc: `${p.tenantBase}. Your agent targets this specific demographic and refs them properly — employment, credit, previous landlord, affordability. The right tenant for your ${city} property stays longer and pays on time.` },
      { title: "Compliance Without the Headache", desc: `Gas safety, EICR, EPC, deposit protection, prescribed information, smoke alarms, CO detectors, right-to-rent. Miss one and you cannot serve a Section 21. Your agent tracks every deadline for your ${p.postcode} area property.` },
      { title: "Maintenance That Actually Works", desc: `${p.managementChallenges}. Your agent has vetted ${p.borough} contractors on speed dial — plumbers, electricians, locksmiths — and manages the work so you never deal with a 2am boiler call.` },
      { title: "Honest Local Pricing", desc: `Your agent prices your ${city} property using live comparable data from the ${p.postcode} area, not a Zoopla estimate. Accurate pricing lets within 2-3 weeks. Overpricing costs you months of void.` },
    ];
    if (p.avgPortfolioType === 'block-management') return [
      { title: "Block and Individual Under One Roof", desc: `${city} has both purpose-built blocks and individual lets. Your agent handles service charge administration and single-property management, so you deal with one contact for everything.` },
      { title: "Section 20 Without the Drama", desc: `Major works on ${city} blocks need formal leaseholder consultation. Your agent manages the Section 20 process end to end — notices, tenders, documentation — preventing the tribunal challenges that derail projects.` },
      { title: "Leaseholder Communication", desc: `${p.tenantBase}. Your agent maintains professional communication channels that keep leaseholders informed without overwhelming them, reducing complaints and building constructive relationships.` },
      { title: "Contractor Management at Scale", desc: `${p.managementChallenges}. Your agent tenders competitively across their ${p.borough} block portfolio, getting better prices than individual landlords can negotiate alone.` },
    ];
    return [
      { title: "Portfolio-Level Visibility", desc: `You have ${p.propertyMix[0]} and ${p.propertyMix[1]} across ${city}. Your agent provides consolidated monthly statements showing income, voids, maintenance costs, and compliance status per property — not separate reports you have to stitch together.` },
      { title: "Consistent Standards Everywhere", desc: `Every property in your ${city} portfolio gets the same standard of tenant vetting, inspection, and maintenance coordination. No agent favouring their easier properties while your HMO languishes.` },
      { title: "Local Contractor Buying Power", desc: `${p.managementChallenges}. Agents managing multiple ${p.borough} properties negotiate better contractor rates than you can alone — the plumber who does 15 of their properties answers faster and charges less.` },
      { title: "Strategic Growth Advice", desc: `${p.marketContext.split('.')[0]}. Your agent advises on whether the next acquisition in ${city} makes management sense, not just financial sense.` },
    ];
  },
  intro: (city) => {
    const p = prof(city);
    if (!p) return ['Professional lettings management covers everything from tenant find to ongoing property care.', 'The right agent saves you time, protects your compliance, and keeps good tenants longer.'];
    // Structurally different intros based on location character
    if (p.avgPortfolioType === 'single-let') return [
      `Most ${city} landlords with a single property start by managing it themselves. It works until it doesn't — a midnight boiler failure, a tenant who stops paying, or a gas safety certificate that expired three months ago without you noticing. ${p.managementChallenges}. Professional management in the ${p.postcode} area typically costs 8-12% of rent, which is a fraction of what one compliance failure or bad tenant costs you.`,
      `${p.tenantBase}. The right agent finds these tenants through targeted marketing and thorough referencing, then keeps them through responsive maintenance and professional communication. The wrong agent — or no agent — means you're fielding WhatsApp messages about dripping taps at 11pm and hoping your deposit protection hasn't expired.`,
    ];
    if (p.avgPortfolioType === 'block-management') return [
      `Blocks in ${city} need a different kind of management than individual lets. Service charge budgeting, Section 20 consultation for major works, fire risk assessments, communal area maintenance, and the diplomatic skill to keep leaseholders informed without constant complaints. ${p.marketContext}`,
      `${p.managementChallenges}. The managing agent you choose directly affects both the building's condition and every leaseholder's service charge bill. An agent who tenders competitively, manages contractors properly, and communicates transparently saves the block thousands annually compared to one who rubber-stamps invoices and ignores emails.`,
    ];
    return [
      `Running a portfolio across ${city} means every property is a compliance liability, a maintenance obligation, and a tenant relationship — multiplied by however many doors you have. ${p.marketContext} Without a management agent who can handle the volume, something always falls through the cracks. The gas cert expires on your ${p.propertyMix[0]}, the boiler fails in your ${p.propertyMix[1]}, and the tenant in your flat stops paying — all in the same week.`,
      `${p.managementChallenges}. A portfolio-grade agent in the ${p.postcode} area gives you one point of contact, consolidated reporting, and the confidence that every property meets every obligation every month. That is worth considerably more than the 10-15% management fee.`,
    ];
  },
  steps: (city) => {
    const p = prof(city);
    if (!p) return defSteps(city);
    if (p.avgPortfolioType === 'single-let') return [
      `Your agent visits your ${city} property, checks its condition, and identifies any compliance gaps — expired gas cert, missing EPC, deposit protection issues`,
      `They photograph it properly (not phone photos), write compelling copy, and price it using live ${p.postcode} area data from recent lets, not asking prices`,
      `The listing goes live across Rightmove, Zoopla, and OnTheMarket. Your agent conducts accompanied viewings and pre-qualifies applicants before they apply`,
      `Full referencing: employer confirmation, credit check, previous landlord reference, right-to-rent documents, affordability calculation`,
      `Compliant move-in: AST signed, deposit protected within 30 days, prescribed information served, inventory agreed, meter readings recorded`,
      `Ongoing: rent collected by standing order, chased from day one if late, maintenance handled through vetted ${p.borough} contractors, quarterly inspections`,
      `Tenancy renewal negotiated with rent review, or if the tenant leaves, the re-letting process begins immediately to minimise void`,
    ];
    return [
      `Portfolio audit: your agent reviews every ${city} property for compliance status, tenancy terms, maintenance backlog, and current rental values`,
      `Gap analysis identifies properties that are under-rented, non-compliant, or costing you in avoidable maintenance — with a prioritised action plan`,
      `Each property gets accurate ${p.postcode} area pricing, professional marketing, and targeted tenant matching based on the specific property type`,
      `Consolidated compliance calendar tracks every certificate, inspection, and renewal date across your entire ${city} portfolio`,
      `Single monthly statement covers rental income, void periods, maintenance costs, and compliance status for every property in one report`,
      `Maintenance coordinated through vetted ${p.borough} contractors with portfolio-level buying power on pricing`,
      `Quarterly portfolio review with your agent covering performance, market trends, and strategic advice for your ${city} investments`,
    ];
  },
  whyPoints: (city) => {
    const p = prof(city);
    if (!p) return defWhyPoints(city);
    return pick(city, [
      [
        `We vet agents for ${p.postcode} area experience — not just any ARLA member who covers "North West London"`,
        `Every matched agent already manages ${p.propertyMix[0]} in ${city}, so there is no learning curve with your property`,
        `You compare up to three agents on fees, services, and approach before committing to anyone`,
        `Free matching with zero obligation — if none of the agents suit, you walk away`,
      ],
      [
        `Agents matched specifically to your property type, not randomly assigned from a general database`,
        `${p.borough} compliance expertise covering the specific council requirements that affect ${city} landlords`,
        `Vetted contractor networks already established in the ${p.postcode} area for responsive maintenance`,
        `Transparent fee comparison so you know exactly what you are paying and what you are getting`,
      ],
      [
        `Local agents who know the ${p.postcode} area tenant demographic and what they will pay for your type of property`,
        `Compliance track record verified — we check that agents actually maintain their managed properties properly`,
        `No lock-in: our matching is free, and you deal directly with the agent you choose`,
        `${p.managementChallenges} — your matched agent handles this specific challenge routinely`,
      ],
    ]);
  },
  faqs: (city) => {
    const p = prof(city);
    if (!p) return defFaqs['residential-lettings-management'](city);
    // Different FAQ structures based on location type
    if (p.avgPortfolioType === 'single-let') return [
      { question: `I only have one property in ${city} — is professional management worth it?`, answer: `Yes, if your time has any value. A single property still requires annual gas safety checks, five-yearly electrical inspections, deposit protection, right-to-rent checks, and responsive maintenance. Missing any of these prevents you from serving a Section 21 notice. Full management typically costs 8-12% of rent in the ${p.postcode} area — roughly ${p.rentalStock.includes('premium') ? '£120-£200' : '£80-£150'} per month. One compliance failure or one month with a bad tenant costs far more.` },
      { question: `How do ${city} agents find tenants for ${p.propertyMix[0]}?`, answer: `Professional marketing across Rightmove, Zoopla, and OnTheMarket with quality photography and compelling descriptions. Your agent prices using current ${p.postcode} area comparable data — not Zoopla estimates — and targets ${p.tenantBase.toLowerCase()}. Accompanied viewings filter time-wasters, and thorough referencing protects you from problem tenants.` },
      { question: `What if I am unhappy with my ${city} managing agent?`, answer: `Most management contracts require 1-3 months' notice. If your agent underperforms, you can switch. Our matching service helps you find a replacement quickly. The key is choosing the right agent from the start — which is exactly what our vetting and matching process is designed to ensure for ${p.postcode} area properties.` },
    ];
    return [
      { question: `How do ${city} agents handle multiple properties at once?`, answer: `Portfolio-grade agents use property management software that tracks every tenancy, compliance date, and maintenance issue across all your ${city} properties in one system. You get a consolidated monthly statement rather than separate reports. ${p.managementChallenges}. Agents who manage at portfolio scale have processes for this that single-property managers simply lack.` },
      { question: `What management fees should I expect for ${p.propertyMix[0]} in ${city}?`, answer: `Full management in the ${p.postcode} area runs 8-15% of monthly rent depending on property type and service level. ${p.propertyMix[0]} typically sit at ${p.rentalStock.includes('premium') ? '8-10%' : '10-14%'} because ${p.rentalStock.includes('premium') ? 'higher rents generate more fee income at lower percentages' : 'agents factor in the maintenance intensity typical of this stock'}. Tenant-find-only is 4-8 weeks rent as a one-off.` },
      { question: `What compliance do ${city} landlords actually need?`, answer: `Gas safety certificate (annual), electrical installation condition report (5-yearly), EPC at minimum E rating, smoke alarms on every floor, CO detectors in rooms with solid fuel, deposit protected within 30 days with prescribed information served, and right-to-rent checks before the tenancy starts. Miss any one and you lose the ability to serve a Section 21 for your ${p.postcode} area property. Your agent maintains a compliance calendar that tracks every date.` },
    ];
  },
},

"block-management": {
  introHeading: (city) => {
    const p = prof(city);
    if (!p) return `Block and Estate Management in ${city}`;
    return pick(city, [
      `Running a Residential Block in ${city}: What Professional Management Actually Delivers`,
      `Service Charges, Safety, and Section 20: Block Management in the ${p.postcode} Area`,
      `Why ${city} Freeholders and RMC Directors Choose Professional Block Agents`,
      `Beyond Collecting Service Charges: What ${city} Block Management Should Look Like`,
    ]);
  },
  stepsHeading: (city) => pick(city, [`Appointing a Block Agent for Your ${city} Development`, `How Professional Block Management Works in ${city}`, `From Assessment to Annual Accounts: Your ${city} Block Journey`, `Taking Over Your ${city} Block: The Transition Process`]),
  whyHeading: (city) => pick(city, [`Why Match Through Us for ${city} Block Management`, `The Case for Matched Block Management in ${city}`, `What ${city} RMC Directors Get From Our Matching Service`]),
  heroDesc: (city) => { const p = prof(city); if (!p) return `Block management specialists covering ${city}. Free matching, no obligation.`; return `Your ${city} block needs more than someone who collects service charges and ignores the fire risk assessment. We match freeholders and RMC directors in the ${p.postcode} area with agents who actually manage buildings — budgets, compliance, contractors, and leaseholder communication.`; },
  heroBullets: (city) => { const p = prof(city); if (!p) return ['Block management specialists covering your area', 'Service charge administration and compliance', 'Health and safety management']; return [`Service charge budgeting and transparent year-end accounts for ${city} blocks`, `Fire risk assessments, asbestos management, and building safety compliance in the ${p.postcode} area`, `Section 20 major works consultation managed from first notice to final account`]; },
  trustLine: (city) => { const p = prof(city); return p ? `Managing residential blocks across ${city} and ${p.borough}` : `Managing blocks across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: "Budgets That Actually Add Up", desc: `Your agent prepares service charge budgets from real costs — not last year's figures plus inflation. They know what ${p.borough} contractors charge for communal cleaning, gardening, and building insurance because they manage other blocks in the ${p.postcode} area.` },
    { title: "Safety Compliance That Protects You Personally", desc: `Fire risk assessments, legionella checks, asbestos registers, lift maintenance, emergency lighting tests. As a director or freeholder, these are your personal legal obligations. Your agent maintains every one.` },
    { title: "Section 20 Done Right", desc: `Major works over the qualifying threshold need formal leaseholder consultation. Your agent handles the notices, the tendering, the observation period, and the final accounts. A procedural error means you cannot recover the cost — and tribunal challenges are expensive.` },
    { title: "Leaseholders Who Feel Heard", desc: `${p.tenantBase}. Good communication prevents 90% of complaints. Your agent provides regular updates, responds to queries within working hours, and holds AGMs that are professionally managed rather than shouting matches.` },
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return ['Block management requires specialist expertise in service charges, compliance, and leaseholder relations.', 'The right agent protects both the building and the people responsible for it.']; return [
    `A block in ${city} is a shared asset, a shared liability, and a shared headache if it is managed badly. ${p.marketContext} The managing agent's competence directly determines whether the building is maintained, the service charges are fair, and the freeholder or directors avoid personal liability for safety failures.`,
    `${p.managementChallenges}. That is not a job for someone who mainly does single lets and picked up a block as a favour. It needs an agent with block-specific expertise, building safety knowledge, and the systems to handle service charge accounting properly.`,
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [`Block assessment: your agent inspects the building, reviews existing management files, and identifies compliance gaps and maintenance priorities`, `Service charge budget preparation based on actual ${p.borough} contractor costs and realistic reserve fund contributions`, `Transition of management files, contractor relationships, and leaseholder communication from the previous agent`, `Compliance audit covering fire risk assessment, asbestos register, water hygiene, lift maintenance, and electrical testing`, `Contractor tendering for routine services — cleaning, gardening, maintenance — with competitive ${p.postcode} area pricing`, `Leaseholder communication setup including regular updates, query handling, and AGM preparation`, `Annual service charge accounts preparation with full transparency for leaseholder review`]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [`We match you with agents who specialise in blocks, not agents who dabble alongside their lettings business`, `Block-specific compliance expertise covering the building safety obligations that apply to ${city} developments`, `Service charge accounting that satisfies Section 21 requirements and withstands leaseholder scrutiny`, `Competitive tendering through agents with established ${p.borough} contractor relationships`]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['block-estate-management'](city); return [
    { question: `Our ${city} block is badly managed — how do we change agent?`, answer: `If you are an RMC, the board can resolve to appoint a new agent, typically with a notice period matching the current contract (usually 1-3 months). Leaseholders without an RMC can apply to the First-Tier Tribunal under Section 24 to have a new agent appointed. Your new agent manages the complete transition including file handover, contractor novation, and leaseholder communication.` },
    { question: `What should block management cost for a ${city} development?`, answer: `Typically £150-£400 per unit per year, depending on block size, number of units, and facilities. A 12-flat block with a lift and communal garden in the ${p.postcode} area will cost more than a 6-flat walk-up with no shared amenities. Your agent provides a detailed proposal based on the actual management requirement, not a generic per-unit rate.` },
    { question: `Who is personally liable if something goes wrong in our ${city} block?`, answer: `The freeholder or, if management has been delegated, the RMC directors. Fire safety failures, legionella incidents, and asbestos exposure can result in personal prosecution. This is why professional management is not optional for blocks — it is personal liability protection for the people responsible. Your agent maintains every safety obligation for your ${p.postcode} area building.` },
  ]; },
},

"tenant-find-letting": {
  introHeading: (city) => { const p = prof(city); if (!p) return `Tenant Find and Referencing in ${city}`; return pick(city, [`Finding the Right Tenant for Your ${city} Property — Not Just the First One`, `Tenant Find in the ${p.postcode} Area: What Thorough Referencing Actually Looks Like`, `Why ${city} Landlords Pay for Professional Tenant Find Instead of Going Direct`, `Beyond Rightmove: How ${city} Agents Find Tenants Who Stay and Pay`]); },
  stepsHeading: (city) => pick(city, [`From Empty to Occupied: Tenant Find in ${city}`, `The ${city} Tenant Find Process`, `How We Fill Your ${city} Property With the Right Tenant`, `Marketing to Move-In: Your ${city} Tenant Find Timeline`]),
  whyHeading: (city) => pick(city, [`Why ${city} Landlords Use Matched Tenant Find`, `What Professional Tenant Find Gets You in ${city}`, `The Value of Expert Tenant Find in the ${city} Market`]),
  heroDesc: (city) => { const p = prof(city); if (!p) return `Tenant find and referencing specialists covering ${city}. Free matching, no obligation.`; return `A bad tenant costs more than months of management fees. We match ${sizeLabel(p)} in ${city} with agents who find tenants properly — accurate pricing, targeted marketing, and referencing that actually protects you.`; },
  heroBullets: (city) => { const p = prof(city); if (!p) return ['Professional tenant find covering your area', 'Comprehensive referencing', 'Compliant tenancy setup']; return [`Pricing based on actual ${p.postcode} area lets, not asking prices or Zoopla estimates`, `Full referencing: employer, credit, landlord, affordability, right-to-rent — no shortcuts`, `Compliant tenancy setup covering deposit, prescribed information, and every legal requirement`]; },
  trustLine: (city) => { const p = prof(city); return p ? `Finding quality tenants for ${city} landlords` : `Finding quality tenants across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: "Pricing That Lets Quickly", desc: `${p.marketContext.split('.')[0]}. Your agent prices from recent lets in the ${p.postcode} area — what actually rented, not what's still sitting empty at an ambitious asking price. Accurate pricing typically lets within 2-3 weeks.` },
    { title: "Referencing With Teeth", desc: `Employer confirmation (not just a payslip), credit history, direct previous landlord contact, right-to-rent documents verified against the original, and affordability calculated at 2.5x rent. For ${p.propertyMix[0]} in ${city}, this is the difference between a tenant who pays and one who doesn't.` },
    { title: "Marketing That Targets", desc: `${p.tenantBase}. Your agent writes copy and selects photos that appeal specifically to this demographic — not generic "spacious property, must see" descriptions that attract everyone and appeal to no one.` },
    { title: "Legal Setup From Day One", desc: `Deposit protected, prescribed information served, how-to-rent guide provided, gas cert and EPC shared, right-to-rent documented. Every legal prerequisite for a valid Section 21 notice completed before your ${city} tenant moves in.` },
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return ['Tenant find is not just about advertising your property.', 'The right agent finds tenants who pay on time and treat your property well.']; return [
    `You can list your ${city} property on OpenRent for £50 and get 30 enquiries by Tuesday. Most of them will be unsuitable, several will ghost you at viewing, and the one who seems great might have a County Court Judgment you never checked for. Professional tenant find in the ${p.postcode} area costs more upfront but prevents the expensive mistakes that DIY landlords make.`,
    `${p.tenantBase}. A local agent knows where these tenants look, what they respond to, and what red flags to catch during referencing. They also handle the legal setup — deposit protection, prescribed information, compliant AST — that many DIY landlords get wrong, invalidating their Section 21 rights without even knowing it.`,
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [`Property visit to assess condition, identify any pre-let compliance gaps, and photograph professionally`, `Pricing analysis using actual recent lets in the ${p.postcode} area — comparable properties that actually rented, not asking prices`, `Listing across Rightmove, Zoopla, and OnTheMarket with targeted copy and professional images`, `Accompanied viewings with applicant pre-qualification to filter out timewasters before they view`, `Full referencing: employer confirmation, credit check, previous landlord contact, right-to-rent, affordability`, `Tenancy documentation: AST, deposit protection, prescribed information, how-to-rent guide, gas and EPC certificates`, `Professional check-in with detailed inventory, meter readings, and key handover`]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [`Agents matched to your specific ${city} property type, not just whoever is nearest on Google`, `Referencing that goes beyond a credit check — direct employer and landlord verification`, `${p.postcode} area pricing expertise that balances rent maximisation against void period cost`, `Compliant setup that protects your Section 21 rights from day one`]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['tenant-find-referencing'](city); return [
    { question: `What does tenant find cost in ${city} and is it worth it?`, answer: `Typically 4-8 weeks' rent as a one-off, which sounds like a lot until you calculate the cost of a bad tenant. One month of void from poor marketing, plus a month of arrears from poor referencing, plus legal costs to remove them — that is easily 6 months' rent lost. Professional tenant find for ${p.propertyMix[0]} in the ${p.postcode} area pays for itself with one avoided problem tenant.` },
    { question: `How long will it take to find a tenant for my ${city} property?`, answer: `Accurately priced, well-marketed properties in ${city} typically receive strong applications within 1-2 weeks, with the tenant moved in within 3-4 weeks total. ${p.marketContext.split('.')[0]}. If your property has been sitting empty for weeks, the price is probably wrong — your matched agent will tell you honestly.` },
    { question: `Can I meet the prospective tenant for my ${city} property?`, answer: `Yes, many landlords want to. Your agent handles viewings and referencing first, then introduces shortlisted candidates. For ${p.propertyMix[0]} in ${city}, meeting the tenant before signing often provides reassurance, though the referencing data should drive your decision, not your gut feeling.` },
  ]; },
},

"rent-collection-accounting": {
  introHeading: (city) => { const p = prof(city); if (!p) return `Rent Collection and Arrears Management in ${city}`; return pick(city, [`Getting Paid On Time in ${city}: Rent Collection That Actually Works`, `When ${city} Tenants Stop Paying: Arrears Management Before It Gets Legal`, `Rent Collection for ${city} Landlords: Process, Not Hope`, `Protecting Your ${city} Rental Income From Day One to Day One Thousand`]); },
  stepsHeading: (city) => pick(city, [`How Rent Collection Works for ${city} Properties`, `The ${city} Rent Collection and Arrears Process`, `From Standing Order to Legal Notice: Your ${city} Protection`, `Systematic Rent Collection for ${city} Landlords`]),
  whyHeading: (city) => pick(city, [`Why ${city} Landlords Outsource Rent Collection`, `The Value of Professional Rent Recovery in ${city}`, `What Systematic Collection Gets ${city} Landlords`]),
  heroDesc: (city) => { const p = prof(city); if (!p) return `Rent collection and arrears management covering ${city}. Free matching, no obligation.`; return `Late rent becomes arrears. Arrears become court proceedings. Court proceedings become £5,000+ in legal fees. We match ${sizeLabel(p)} in ${city}'s ${p.postcode} area with agents whose collection processes stop the spiral before it starts.`; },
  heroBullets: (city) => { const p = prof(city); if (!p) return ['Systematic rent collection', 'Early arrears intervention', 'Legal compliance for notices']; return [`Standing order setup, automated tracking, and day-one chasing if rent is late from your ${city} tenant`, `Early intervention that resolves 95% of payment issues before they become formal arrears`, `Legally compliant Section 8 and Section 21 notices when arrears escalate — procedural accuracy that prevents court delays`]; },
  trustLine: (city) => { const p = prof(city); return p ? `Protecting rental income for ${city} landlords` : `Protecting rental income across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: "Chased From Day One", desc: `Not day five, not day fourteen, not "when we get round to it." Your agent contacts the tenant on the first day rent is late. Early contact resolves most late payments immediately — before the tenant spends the money on something else.` },
    { title: "Process, Not Hope", desc: `Day 1: phone call. Day 3: written reminder. Day 7: formal letter. Day 14: notice served. It is systematic, documented, and legally sound. Hope is not a rent collection strategy for your ${city} property.` },
    { title: "Legal Accuracy When It Matters", desc: `Section 8 notices must cite the correct grounds, serve the correct notice period, and follow the correct format. One procedural error delays possession by months. Your agent has served these notices for ${p.postcode} area properties and knows the process cold.` },
    { title: "Prevention Through Vetting", desc: `${p.tenantBase}. The best arrears management is preventing bad tenants from moving in. Your agent's referencing process checks affordability properly — not just "can they pay" but "can they pay after their other commitments."` },
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return ['Rent collection requires consistent processes and early intervention.', 'Professional agents ensure timely payment and handle escalation properly.']; return [
    `Every landlord thinks their tenant will pay on time until they don't. In ${city}'s ${p.postcode} area, even reliable tenants hit financial difficulties — redundancy, relationship breakdown, unexpected bills. The difference between a resolved hiccup and a five-figure legal nightmare is how quickly and professionally the agent responds.`,
    `${p.managementChallenges}. An agent with a systematic collection process contacts late payers on day one, documents every communication, and serves legally compliant notices when necessary. This is not something you can do effectively yourself at 7am before work while trying to sound professional on the phone to someone who owes you £1,500.`,
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [`Tenancy starts with standing order setup — not bank transfer promises — and clear written payment expectations`, `Automated rent tracking flags any missed or partial payment on the day it should have arrived`, `Day-one contact: your agent phones the tenant, confirms the situation, and agrees a resolution`, `If not resolved within 7 days, formal written communication begins with a documented trail`, `Persistent non-payment triggers compliant notice service — Section 8 for arrears, Section 21 for no-fault — with correct grounds and periods`, `If court proceedings become necessary, your agent coordinates with specialist landlord solicitors`, `Monthly rent statements and arrears reporting keep you informed throughout`]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [`Systematic day-one chasing that prevents most late payments from becoming arrears`, `Documented communication trail that supports court proceedings if they become necessary`, `Legally accurate notice service for ${p.postcode} area properties — no procedural errors that delay possession`, `Prevention through proper affordability checks at the referencing stage`]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['rent-collection-arrears-management'](city); return [
    { question: `How much rent arrears before I can evict a ${city} tenant?`, answer: `Under Section 8 Ground 8, the tenant must be at least 2 months' rent in arrears both when you serve the notice AND at the court hearing date. This is a mandatory ground — the judge must grant possession. Ground 10 and 11 allow action for lesser or persistent arrears but are discretionary. Your agent advises which grounds apply to your ${city} situation and serves notices that meet the legal requirements.` },
    { question: `What happens if my ${city} tenant just stops paying?`, answer: `Your agent contacts them on day one. If there is a genuine short-term problem (job change, bank error), they agree a repayment plan. If there is no engagement or no resolution, notices are served within 14 days. The full process from first missed payment to court possession typically takes 4-8 months — which is why early intervention and correct procedure matter so much for ${p.postcode} area properties.` },
    { question: `Can ${city} agents guarantee rent collection?`, answer: `No agent can guarantee a tenant will pay. What they can guarantee is process: day-one chasing, documented communication, correct legal notices, and efficient escalation. Some agents offer rent guarantee insurance as an add-on, which pays your rent if the tenant defaults. Ask your matched agent about availability for your ${city} property.` },
  ]; },
},

"hmo-management": {
  introHeading: (city) => { const p = prof(city); if (!p) return `HMO Management in ${city}`; return pick(city, [`Managing an HMO in ${city}: Licensing, Fire Safety, and Five Separate Tenancy Agreements`, `Why ${city} HMO Landlords Cannot Wing It: The Compliance Reality`, `HMO Management in the ${p.postcode} Area: Higher Yields, Higher Complexity`, `${p.borough} HMO Licensing and Management: What ${city} Landlords Need to Know`]); },
  stepsHeading: (city) => pick(city, [`Setting Up Professional HMO Management in ${city}`, `How HMO Management Works in ${city}`, `From Licensing to Room-by-Room Letting: ${city} HMO Process`, `Getting Your ${city} HMO Properly Managed`]),
  whyHeading: (city) => pick(city, [`Why ${city} HMO Landlords Need Specialist Agents`, `The Case for Professional HMO Management in ${city}`, `What HMO-Specialist Agents Deliver in ${city}`]),
  heroDesc: (city) => { const p = prof(city); if (!p) return `HMO management specialists covering ${city}. Free matching, no obligation.`; return `An HMO in ${city}'s ${p.postcode} area generates 30-50% more income than a single let — and 300% more compliance headaches. Licensing, fire safety, room-by-room tenancies, communal area standards. We match you with agents who specialise in multi-let management.`; },
  heroBullets: (city) => { const p = prof(city); if (!p) return ['HMO management specialists', 'Licensing and fire safety', 'Room-by-room management']; return [`${p.borough} council HMO licensing applications, conditions compliance, and renewals managed end to end`, `Fire risk assessments, interlinked detection, fire doors, escape routes, and emergency lighting maintained`, `Room-by-room tenant find, individual referencing, separate inventories, and coordinated void management`]; },
  trustLine: (city) => { const p = prof(city); return p ? `Specialist HMO management across ${city} and ${p.borough}` : `Specialist HMO management across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: "Licensing Sorted", desc: `${p.borough} council's HMO licensing requirements including room sizes, amenity ratios, and conditions compliance. Your agent handles the application, manages the conditions, and tracks renewal dates. Operating without a license risks unlimited fines and rent repayment orders.` },
    { title: "Fire Safety That Passes Inspection", desc: `Interlinked smoke and heat detection, fire doors with intumescent strips and closers, emergency lighting, fire blankets, maintained escape routes. Not a checklist — a continuously managed system that satisfies ${p.borough} council inspections at your ${city} HMO.` },
    { title: "Room-by-Room, Not Room-by-Headache", desc: `Five tenants means five referencing processes, five deposit protections, five sets of prescribed information, and five different notice dates. Your agent manages each tenancy individually while coordinating the shared spaces, void periods, and communal maintenance.` },
    { title: "Yield Protection", desc: `HMO yields depend on minimising room voids and managing communal costs efficiently. Your agent markets individual rooms to the ${p.postcode} area demographic, keeps rooms filled, and manages the higher maintenance load that shared living creates.` },
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return ['HMO management requires specialist expertise in licensing, fire safety, and multi-tenant coordination.', 'The right agent maximises your yield while keeping you compliant.']; return [
    `An HMO in ${city} is not a house with more tenants. It is a licensed premises with fire safety obligations, amenity standards, room size requirements, and individual tenancy management that multiplies every task by the number of rooms. ${p.managementChallenges}. Self-managing landlords who treat HMOs like single lets eventually get a ${p.borough} council inspection visit — and the fines for non-compliance start at £5,000 per offence.`,
    `Professional HMO management costs more than single-let management — typically 12-18% of gross rent. But HMOs generate 30-50% more income, and the management fee buys you licensing compliance, fire safety maintenance, room-by-room tenant coordination, and communal area standards that you cannot realistically maintain yourself alongside a day job. The maths works.`,
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [`HMO compliance audit: licensing status, fire safety, room sizes, amenity ratios, and current management against ${p.borough} council requirements`, `License application or renewal management including all documentation, floor plans, and conditions compliance`, `Fire safety system installation or upgrade: interlinked detection, fire doors, emergency lighting, escape route signage`, `Room-by-room marketing to the ${p.postcode} area sharers market with individual tenancy setup per room`, `Communal area management: cleaning schedules, shared kitchen and bathroom maintenance, and condition inspections`, `Individual tenant management: separate rent collection, individual deposit protection, room-specific maintenance`, `Ongoing compliance monitoring: annual fire safety review, licensing conditions checks, and ${p.borough} council liaison`]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [`HMO specialists who understand ${p.borough} licensing requirements — not generalist agents guessing at compliance`, `Fire safety expertise maintaining the systems that protect both your tenants and your license`, `Room-by-room management processes that handle five tenancies as efficiently as one`, `Communal area standards that satisfy ${p.borough} council inspections and prevent tenant complaints`]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['hmo-management'](city); return [
    { question: `Does my ${city} property need an HMO license?`, answer: `Mandatory licensing applies if you have 5+ tenants forming 2+ households. ${p.borough} council may also run additional licensing schemes covering smaller HMOs (3-4 tenants, 2+ households). Penalties for operating without a license include unlimited fines and rent repayment orders covering up to 12 months' rent. Your agent checks your ${p.postcode} area property against current requirements and manages the application if needed.` },
    { question: `How much does HMO management cost in ${city}?`, answer: `12-18% of gross rental income, which is higher than single-let management (8-12%) but reflects the additional work: room-by-room tenancies, licensing compliance, fire safety management, and communal area maintenance. For an HMO generating £3,000/month in the ${p.postcode} area, management costs £360-£540/month — a fraction of the additional income HMO conversion generates over a single let.` },
    { question: `What happens if ${p.borough} council inspects my ${city} HMO?`, answer: `If you are compliant, nothing happens except a satisfied inspector. If you are not, the consequences range from improvement notices (requiring works within a deadline) to prosecution (unlimited fines) to civil penalty notices (up to £30,000) to rent repayment orders (refunding tenants up to 12 months rent). Professional management ensures you are always inspection-ready.` },
  ]; },
},

};

function defBenefits(city: string) { return [
  { title: "Local Specialists", desc: `Every agent in our ${city} network has proven local property management experience.` },
  { title: "Fast Response", desc: `Most agents respond within 24 hours and arrange free property assessments.` },
  { title: "Full Compliance", desc: `Complete compliance management covering every landlord obligation.` },
  { title: "Matched to Your Property", desc: `We match you with agents experienced with your specific property type.` }
]; }
function defSteps(city: string) { return [`Assess your property and management needs`, `Match with experienced local agents`, `Arrange assessments and fee comparisons`, `Select your agent`, `Implement management and compliance`, `Commence tenant management`, `Ongoing reporting`]; }
function defWhyPoints(city: string) { return [`Local specialists covering ${city}`, `Full compliance management`, `Responsive maintenance`, `Transparent fees`]; }
const defFaqs: Record<string, (city: string) => { question: string; answer: string }[]> = {
  'residential-lettings-management': (c) => [{ question: `How much do agents charge?`, answer: `8-15% for full management. All provide clear fee schedules.` }, { question: `How quickly can you let?`, answer: `2-4 weeks for well-priced properties.` }, { question: `What compliance is needed?`, answer: `Gas, EICR, EPC, deposit, right-to-rent, smoke/CO alarms.` }],
  'block-management': (c) => [{ question: `How much does block management cost?`, answer: `£150-£400 per unit per year.` }, { question: `What does it include?`, answer: `Service charges, H&S, insurance, contractors, accounts.` }, { question: `How do we change agent?`, answer: `Board resolution or Section 24 tribunal application.` }],
  'tenant-find-letting': (c) => [{ question: `What does it cost?`, answer: `4-8 weeks rent as a one-off.` }, { question: `How long?`, answer: `2-4 weeks to move-in.` }, { question: `What checks?`, answer: `Employment, credit, landlord, right-to-rent, affordability.` }],
  'rent-collection-accounting': (c) => [{ question: `What if they dont pay?`, answer: `Day-one contact, formal process, legal escalation if needed.` }, { question: `Prevention?`, answer: `Thorough referencing and clear payment expectations.` }, { question: `What notice?`, answer: `Section 8 for arrears, Section 21 for no-fault.` }],
  'hmo-management': (c) => [{ question: `Need a license?`, answer: `Mandatory for 5+ tenants, 2+ households. Additional schemes may apply.` }, { question: `Cost?`, answer: `12-18% of gross rent.` }, { question: `Fire safety?`, answer: `Interlinked alarms, fire doors, emergency lighting, maintained escape routes.` }],
};
