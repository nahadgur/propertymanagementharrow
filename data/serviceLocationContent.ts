// data/serviceLocationContent.ts
import { getLocationProfileByName, type LocationProfile } from './locationProfiles';

function prof(city: string): LocationProfile | null { return getLocationProfileByName(city) || null; }
function sizeLabel(p: LocationProfile): string {
  switch (p.avgPortfolioType) { case 'single-let': return 'single-property landlords'; case 'small-portfolio': return 'portfolio landlords'; case 'mixed': return 'landlords of all sizes'; case 'block-management': return 'freeholders and portfolio landlords'; default: return 'landlords'; }
}
function mixList(p: LocationProfile, n: number = 3): string {
  const items = p.propertyMix.slice(0, n);
  return items.length <= 1 ? items[0] : items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}

export interface ServiceLocationPageContent {
  heroDesc: (city: string) => string;
  heroBullets: (city: string) => string[];
  trustLine: (city: string) => string;
  benefits: (city: string) => { title: string; desc: string }[];
  intro: (city: string) => string[];
  steps: (city: string) => string[];
  whyPoints: (city: string) => string[];
  faqs: (city: string) => { question: string; answer: string }[];
}

export const serviceLocationContent: Record<string, ServiceLocationPageContent> = {

"residential-lettings-management": {
  heroDesc: (city) => { const p = prof(city); return p ? `${city}'s rental market — from ${mixList(p, 2)} — needs management by specialists who understand ${p.borough} tenant demand and compliance obligations. We match ${sizeLabel(p)} with full-service letting agents.` : `Residential lettings management specialists covering ${city}. Free matching, no obligation.`; },
  heroBullets: (city) => { const p = prof(city); return p ? [`Letting specialists experienced with ${p.propertyMix[0]} and ${p.propertyMix[1]} in ${city}`, `Full compliance management including gas safety, EPC, electrical inspections, and deposit protection for ${p.postcode} area properties`, `Tenant find, referencing, rent collection, and ongoing management tailored to ${city}'s rental market`] : [`Lettings management specialists covering ${city}`, 'Full compliance and tenant management', 'Rent collection and maintenance coordination']; },
  trustLine: (city) => { const p = prof(city); return p ? `Trusted by landlords across ${city} and ${p.borough}` : `Trusted by landlords across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: `${city} Lettings Expertise`, desc: `Your agent manages ${p.propertyMix[0]} and ${p.propertyMix[1]} in ${city} regularly — they understand the rental values, tenant expectations, and void period patterns that ${sizeLabel(p)} in the ${p.postcode} area face.` },
    { title: "Full Compliance Management", desc: `${p.managementChallenges.split(',')[0]}. Your agent handles gas safety certificates, EPC compliance, electrical safety inspections, smoke and CO alarms, and deposit protection for your ${city} properties.` },
    { title: "Tenant Quality and Retention", desc: `${p.tenantBase}. Your agent's referencing processes and tenant management approach are designed to attract and retain the right tenants for your ${city} property.` },
    { title: `${p.borough} Market Knowledge`, desc: `${p.marketContext.split('.')[0]}. Your agent uses this local knowledge to price accurately, market effectively, and minimise void periods for your ${p.postcode} area property.` }
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return [`Residential lettings management in ${city} requires local expertise and full compliance coverage.`, `Professional agents handle everything from tenant find to ongoing property management.`]; return [
    `${p.marketContext} For ${sizeLabel(p)} operating in this market, professional management means more than just finding tenants — it means pricing correctly, vetting thoroughly, maintaining compliantly, and retaining good tenants long-term.`,
    `${p.managementChallenges}. A letting agent who works with ${city}'s rental market handles these challenges routinely, delivering the local knowledge and compliance systems that protect your investment and maximise your returns.`
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [
    `Assess your ${city} property including condition, rental potential, and any compliance gaps that need addressing before letting`,
    `Prepare your property for the ${p.postcode} area market including professional photography, floor plans, and accurate pricing based on local comparable data`,
    `Market across major portals and local channels, targeting the ${city} tenant demographic your property suits`,
    `Conduct thorough referencing including employment verification, credit checks, previous landlord references, and right-to-rent checks`,
    `Manage move-in with detailed inventory, meter readings, deposit protection, and compliant tenancy agreement execution`,
    `Provide ongoing management including rent collection, maintenance coordination, periodic inspections, and full compliance monitoring`,
    `Handle tenancy renewals, rent reviews, and any issues that arise throughout the tenancy of your ${city} property`
  ]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [
    `Letting agents experienced with ${p.propertyMix[0]} and ${p.propertyMix[1]} in ${city}'s ${p.postcode} area`,
    `Full compliance management covering every legal obligation for ${sizeLabel(p)} in ${p.borough}`,
    `Local market knowledge that minimises void periods and maximises rental income for your ${city} property`,
    `Ongoing tenant management and maintenance coordination that protects your investment long-term`
  ]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['residential-lettings-management'](city); return [
    { question: `How much do letting agents charge in ${city}?`, answer: `Full management fees in ${city} typically range from 8-15% of monthly rent for ${sizeLabel(p)}, depending on the level of service. ${p.propertyMix[0]} with higher rental values often attract lower percentage rates. All agents in our network provide clear fee schedules upfront with no hidden charges.` },
    { question: `How quickly can a ${city} property be let?`, answer: `Well-priced, compliant properties in ${city} typically let within 2-4 weeks. ${p.marketContext.split('.')[0]}. Your agent prices accurately using local comparable data and markets effectively to minimise void periods for your ${p.postcode} area property.` },
    { question: `What compliance do ${city} landlords need?`, answer: `Gas safety certificate (annual), EPC (minimum E rating), electrical installation condition report (5-yearly), smoke and CO alarms, deposit protection within 30 days, right-to-rent checks, and a compliant tenancy agreement. For ${sizeLabel(p)} in ${city}, your agent manages the complete compliance calendar so nothing is missed.` }
  ]; }
},

"block-estate-management": {
  heroDesc: (city) => { const p = prof(city); return p ? `${city}'s residential blocks need professional service charge administration, compliance management, and leaseholder communication. We match freeholders and RMC directors with block management specialists covering the ${p.postcode} area.` : `Block and estate management specialists covering ${city}. Free matching, no obligation.`; },
  heroBullets: (city) => { const p = prof(city); return p ? [`Block management specialists experienced with residential developments in ${city}'s ${p.postcode} area`, `Service charge budgeting, Section 20 consultation, and sinking fund management for ${p.borough} blocks`, `Health and safety compliance, insurance administration, and contractor management for ${city} developments`] : [`Block management specialists covering ${city}`, 'Service charge and Section 20 compliance', 'Health and safety management']; },
  trustLine: (city) => { const p = prof(city); return p ? `Managing residential blocks across ${city} and ${p.borough}` : `Managing residential blocks across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: "Service Charge Administration", desc: `Professional budgeting, collection, and year-end accounting for your ${city} block. Your agent prepares transparent service charge accounts that satisfy Section 21 requirements and leaseholder expectations.` },
    { title: "Section 20 Compliance", desc: `Major works exceeding the qualifying threshold require formal consultation with leaseholders. Your agent manages the complete Section 20 process for ${city} blocks, from initial notices to tender evaluation and final accounts.` },
    { title: "Health and Safety Management", desc: `Fire risk assessments, asbestos management, water hygiene, lift maintenance, and communal area safety for your ${p.postcode} area block — all managed proactively by specialists who understand residential block obligations.` },
    { title: `${p.borough} Block Expertise`, desc: `${p.marketContext.split('.')[0]}. Your agent understands the specific block management challenges in ${city} and delivers the professional standards that freeholders and leaseholders expect.` }
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return [`Block management in ${city} requires specialist expertise in service charge administration and building compliance.`, `Professional managing agents handle everything from budgeting to health and safety.`]; return [
    `${p.marketContext} For residential blocks in this area, professional management means transparent service charge administration, proactive compliance management, and responsive communication with leaseholders who expect value for their service charge contributions.`,
    `${p.managementChallenges}. A block management specialist who works with ${city}'s residential developments handles these obligations routinely, delivering the expertise that protects freeholders from compliance risk and maintains property values across the block.`
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [
    `Assess your ${city} block including current management arrangements, service charge structure, and compliance status`,
    `Review health and safety compliance including fire risk assessment, asbestos register, water hygiene, and communal area safety`,
    `Establish service charge budgets based on accurate cost forecasting for your ${p.postcode} area block`,
    `Set up leaseholder communication systems including notice distribution, meeting management, and query handling`,
    `Implement contractor management with competitive tendering for routine and major works`,
    `Manage ongoing compliance calendar including insurance renewal, safety inspections, and Section 20 consultations`,
    `Prepare annual service charge accounts and manage year-end reconciliation for your ${city} block`
  ]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [
    `Block management specialists with experience managing residential developments in ${city}'s ${p.postcode} area`,
    `Transparent service charge administration that satisfies both freeholder and leaseholder expectations`,
    `Proactive health and safety compliance preventing costly enforcement action on ${city} blocks`,
    `Professional Section 20 management for major works, protecting freeholders from consultation challenges`
  ]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['block-estate-management'](city); return [
    { question: `How much does block management cost in ${city}?`, answer: `Block management fees typically range from £150-£400 per unit per year for ${city} developments, depending on block size, services required, and complexity. Larger blocks with lifts, communal gardens, and complex service charge structures cost more. All agents provide detailed fee proposals before appointment.` },
    { question: `What does block management include in ${city}?`, answer: `Service charge budgeting and collection, building insurance administration, health and safety compliance, communal area maintenance, contractor management, leaseholder communication, Section 20 major works consultation, and annual accounts preparation. For blocks in ${city}'s ${p.postcode} area, your agent handles the complete management obligation.` },
    { question: `How do we change block managing agent in ${city}?`, answer: `The process depends on your block structure. RMC-managed blocks can change by board resolution, while freeholder-appointed agents may require notice periods. Section 24 tribunal applications allow leaseholders to appoint their own agent in certain circumstances. Your new agent manages the transition process for ${city} blocks.` }
  ]; }
},

"tenant-find-referencing": {
  heroDesc: (city) => { const p = prof(city); return p ? `Need a quality tenant for your ${city} property? We match ${sizeLabel(p)} with tenant-find specialists who know the ${p.postcode} area market, conduct thorough referencing, and place tenants who stay.` : `Tenant find and referencing specialists covering ${city}. Free matching, no obligation.`; },
  heroBullets: (city) => { const p = prof(city); return p ? [`Tenant-find specialists who understand ${city}'s tenant demographics and rental pricing in the ${p.postcode} area`, `Comprehensive referencing including employment, credit, landlord references, and right-to-rent for ${p.borough} properties`, `Professional marketing across major portals with photography and accurate pricing for ${city}'s rental market`] : [`Tenant find specialists covering ${city}`, 'Comprehensive referencing and vetting', 'Professional property marketing']; },
  trustLine: (city) => { const p = prof(city); return p ? `Finding quality tenants for ${city} landlords` : `Finding quality tenants across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: `${city} Market Pricing`, desc: `${p.marketContext.split('.')[0]}. Your agent prices your property using current ${p.postcode} area comparable data, balancing maximum rent against void period risk to optimise your annual income.` },
    { title: "Thorough Referencing", desc: `Employment verification, credit checks, previous landlord references, right-to-rent documentation, and affordability assessment. For ${p.propertyMix[0]} in ${city}, your agent's referencing catches the issues that protect you from problem tenancies.` },
    { title: "Professional Marketing", desc: `${p.tenantBase}. Your agent targets this specific demographic through portal advertising, social media, and local marketing channels that reach the right tenants for your ${city} property.` },
    { title: "Compliant Tenancy Setup", desc: `Deposit protection, prescribed information, gas safety, EPC, how-to-rent guide, and a compliant AST — your agent ensures every legal requirement is met before your ${city} tenant moves in.` }
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return [`Tenant find services in ${city} go beyond advertising your property.`, `Professional agents conduct thorough referencing and ensure full legal compliance from day one.`]; return [
    `${p.marketContext} Finding the right tenant for your ${city} property means more than advertising on Rightmove — it means pricing accurately for the local market, targeting the right demographic, and conducting referencing that actually protects you from problem tenancies.`,
    `${p.tenantBase}. A tenant-find specialist who knows ${city}'s rental market targets these specific tenants through the right channels, conducts thorough vetting, and sets up a compliant tenancy that protects your position from day one.`
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [
    `Assess your ${city} property and advise on any preparation needed to maximise rental value and tenant quality`,
    `Price using current ${p.postcode} area comparable data, balancing rental income against time-to-let`,
    `Photograph professionally and prepare compelling marketing copy targeting ${city}'s tenant demographic`,
    `Advertise across Rightmove, Zoopla, OnTheMarket, and targeted local channels reaching the ${p.borough} area`,
    `Conduct viewings, qualify applicants, and shortlist candidates that match your ${city} property profile`,
    `Complete comprehensive referencing including employment, credit, landlord references, and right-to-rent checks`,
    `Prepare compliant tenancy documentation, protect deposit, serve prescribed information, and manage check-in for your ${city} property`
  ]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [
    `Tenant-find specialists who understand the demand profile for ${p.propertyMix[0]} in ${city}'s ${p.postcode} area`,
    `Accurate pricing using live ${p.borough} comparable data that minimises void periods`,
    `Thorough referencing processes that protect ${sizeLabel(p)} from problem tenancies`,
    `Fully compliant tenancy setup covering every legal requirement before your ${city} tenant moves in`
  ]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['tenant-find-referencing'](city); return [
    { question: `How much does tenant find cost in ${city}?`, answer: `Tenant-find fees in ${city} typically range from 4-8 weeks' rent as a one-off charge, covering marketing, viewings, referencing, and tenancy setup. For ${sizeLabel(p)} in the ${p.postcode} area, this represents significantly better value than extended void periods from poor marketing or unsuitable tenants.` },
    { question: `How long does tenant find take in ${city}?`, answer: `Well-priced, well-marketed properties in ${city} typically receive applications within 1-2 weeks, with referencing and move-in completed within 2-4 weeks total. ${p.marketContext.split('.')[0]}. Your agent manages the complete process efficiently to minimise void time.` },
    { question: `What referencing checks do ${city} agents conduct?`, answer: `Employment verification and income assessment, credit history checks, previous landlord references, identity verification, right-to-rent documentation checks, and affordability calculations. For ${p.propertyMix[0]} in ${city}, thorough referencing is the single most important protection against tenant problems.` }
  ]; }
},

"property-maintenance-coordination": {
  heroDesc: (city) => { const p = prof(city); return p ? `${city} landlords need responsive maintenance coordination that protects their investment without inflating costs. We match ${sizeLabel(p)} with management specialists who have trusted ${p.borough} contractor networks for ${p.propertyMix[0]} and ${p.propertyMix[1]}.` : `Property maintenance coordination specialists covering ${city}. Free matching, no obligation.`; },
  heroBullets: (city) => { const p = prof(city); return p ? [`Maintenance coordinators with vetted ${p.borough} contractor networks for ${p.propertyMix[0]} in ${city}`, `24/7 emergency response, planned maintenance programmes, and cost-controlled repairs for ${p.postcode} area properties`, `Compliance-linked maintenance including gas safety, electrical testing, and legionella risk management`] : [`Maintenance coordination covering ${city}`, 'Vetted contractor networks', 'Emergency and planned maintenance']; },
  trustLine: (city) => { const p = prof(city); return p ? `Coordinating property maintenance across ${city} and ${p.borough}` : `Coordinating property maintenance across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: `${city} Contractor Network`, desc: `Your agent maintains vetted contractor relationships across the ${p.postcode} area covering plumbing, electrical, gas, roofing, decorating, and specialist trades needed for ${p.propertyMix[0]} in ${city}.` },
    { title: "Cost-Controlled Repairs", desc: `${p.managementChallenges.split(',')[0]}. Your agent obtains competitive quotes, manages contractor quality, and ensures you only pay for necessary work at fair prices.` },
    { title: "Emergency Response", desc: `24/7 emergency contact for ${city} tenants covering burst pipes, boiler failures, lock-outs, and security issues. Your agent manages the response, coordinates contractors, and keeps you informed without requiring your direct involvement.` },
    { title: "Planned Maintenance", desc: `Proactive maintenance programmes for your ${city} property covering boiler servicing, gutter clearing, seasonal checks, and the ongoing upkeep that prevents expensive emergency repairs.` }
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return [`Property maintenance coordination in ${city} requires reliable contractor networks and responsive systems.`, `Professional agents manage both emergency and planned maintenance efficiently.`]; return [
    `${p.marketContext} For ${sizeLabel(p)} in this market, responsive maintenance coordination is the difference between retained tenants and costly void periods. Tenants who experience slow or poor-quality repairs leave — and replacing them costs far more than the repair itself.`,
    `${p.managementChallenges}. A maintenance coordinator with established ${city} contractor relationships handles both emergencies and planned work efficiently, keeping costs controlled while maintaining the property standards that retain good tenants.`
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [
    `Assess your ${city} property condition and identify any immediate maintenance priorities`,
    `Establish maintenance protocols including reporting channels, approval thresholds, and emergency response procedures`,
    `Connect your property to vetted ${p.postcode} area contractor networks covering all standard and specialist trades`,
    `Set up a planned maintenance programme covering boiler servicing, safety checks, and seasonal upkeep`,
    `Manage day-to-day repair requests from your ${city} tenants with competitive quoting and quality oversight`,
    `Provide 24/7 emergency response for urgent issues at your ${city} property`,
    `Deliver regular maintenance reporting showing costs, contractor performance, and property condition for your ${p.borough} area investment`
  ]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [
    `Established ${p.borough} contractor networks with vetted trades covering every maintenance need for ${city} properties`,
    `Cost-controlled repairs with competitive quoting and quality oversight protecting ${sizeLabel(p)} from inflated costs`,
    `24/7 emergency response ensuring your ${city} tenants' urgent issues are handled without requiring your direct involvement`,
    `Planned maintenance programmes preventing expensive emergency repairs and maintaining property values long-term`
  ]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['property-maintenance-coordination'](city); return [
    { question: `How does maintenance coordination work for ${city} properties?`, answer: `Your agent receives maintenance requests from tenants, assesses urgency, obtains competitive quotes from vetted ${p.borough} contractors, seeks your approval (or handles within pre-agreed thresholds), and manages the work to completion. For ${sizeLabel(p)} in ${city}, this means responsive repairs without requiring your direct involvement in contractor management.` },
    { question: `What does emergency maintenance cover in ${city}?`, answer: `24/7 response for burst pipes, boiler failure in cold weather, gas leaks, electrical hazards, lock-outs, storm damage, and security issues. Your agent contacts vetted emergency contractors, manages the response, and reports to you. For ${p.propertyMix[0]} in the ${p.postcode} area, emergency response protects both tenant safety and your property.` },
    { question: `How are maintenance costs controlled for ${city} properties?`, answer: `Through competitive quoting from vetted contractors, pre-agreed approval thresholds, regular cost reporting, and the buying power that comes from managing multiple properties across the ${p.borough} area. For ${sizeLabel(p)}, your agent ensures you pay fair prices for quality work without inflated management markups.` }
  ]; }
},

"rent-collection-arrears-management": {
  heroDesc: (city) => { const p = prof(city); return p ? `Consistent rent collection and effective arrears management protect your ${city} rental income. We match ${sizeLabel(p)} with specialists who ensure your ${p.postcode} area tenants pay on time and handle the difficult conversations when they don't.` : `Rent collection and arrears management specialists covering ${city}. Free matching, no obligation.`; },
  heroBullets: (city) => { const p = prof(city); return p ? [`Rent collection specialists with proven processes for ${p.propertyMix[0]} and ${p.propertyMix[1]} in ${city}`, `Arrears prevention through proper referencing, clear communication, and early intervention for ${p.postcode} area tenancies`, `Legal compliance for Section 8 and Section 21 notices when arrears escalate on ${city} properties`] : [`Rent collection specialists covering ${city}`, 'Arrears prevention and early intervention', 'Legal compliance and escalation']; },
  trustLine: (city) => { const p = prof(city); return p ? `Protecting rental income for ${city} landlords` : `Protecting rental income across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: "Consistent Collection", desc: `Standing order setup, payment tracking, and same-day reporting for your ${city} rental income. Your agent chases late payments from day one, before arrears accumulate into serious problems.` },
    { title: "Early Intervention", desc: `${p.tenantBase}. Your agent understands these tenants and intervenes early when payment patterns change, addressing problems before they escalate into formal arrears.` },
    { title: "Legal Compliance", desc: `When arrears escalate, your agent ensures correct notice service under Section 8 or Section 21, compliant with the latest requirements. For ${sizeLabel(p)} in ${city}, procedural accuracy prevents costly court delays.` },
    { title: "Arrears Prevention", desc: `${p.managementChallenges.split(',')[0]}. Your agent's referencing and tenant management approach minimises arrears risk from the outset for your ${p.postcode} area property.` }
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return [`Rent collection in ${city} requires consistent processes and effective arrears management.`, `Professional agents ensure timely payment and handle escalation when needed.`]; return [
    `${p.marketContext} For ${sizeLabel(p)} in this market, consistent rent collection is the foundation of a viable investment. Late payments that aren't chased immediately become arrears that become possession proceedings — each stage more expensive and stressful than the last.`,
    `${p.tenantBase}. A rent collection specialist who works with ${city}'s rental market understands these tenants, sets clear payment expectations from the start, and intervenes early when patterns change — preventing the arrears situations that cost landlords thousands in lost income and legal fees.`
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [
    `Establish standing order payments with your ${city} tenant from day one of the tenancy`,
    `Implement automated payment tracking with same-day alerts for missed or late payments`,
    `Chase late payments from day one with structured communication escalating from reminder to formal notice`,
    `Conduct early intervention meetings when payment patterns change, identifying problems before they become arrears`,
    `Serve compliant notices where arrears persist, following current Section 8 and Section 21 requirements`,
    `Coordinate with specialist landlord solicitors for court proceedings where necessary`,
    `Provide monthly rent statements and arrears reporting for your ${city} property portfolio`
  ]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [
    `Proven rent collection processes achieving 99%+ collection rates for ${sizeLabel(p)} in ${city}'s ${p.postcode} area`,
    `Early intervention approach that addresses payment problems before they become formal arrears`,
    `Legally compliant notice service protecting your position if possession proceedings become necessary`,
    `Arrears prevention through quality referencing and clear tenant communication from the start of every ${city} tenancy`
  ]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['rent-collection-arrears-management'](city); return [
    { question: `What happens when a ${city} tenant doesn't pay rent?`, answer: `Your agent contacts the tenant on day one of a missed payment. If payment isn't received within 3-5 days, formal written communication begins. Persistent non-payment triggers compliant notice service. For ${sizeLabel(p)} in ${city}, early intervention resolves most situations without formal proceedings — but your agent is prepared to escalate legally if needed.` },
    { question: `How do ${city} agents prevent rent arrears?`, answer: `Through thorough pre-tenancy referencing that verifies affordability, clear payment expectations at move-in, standing order setup, automated payment monitoring, and early intervention when patterns change. For ${p.propertyMix[0]} in the ${p.postcode} area, prevention is significantly cheaper than cure.` },
    { question: `What notice must ${city} landlords give for rent arrears?`, answer: `Section 8 notices for rent arrears require specific grounds (typically Ground 8 for 2+ months' arrears) with prescribed notice periods. Section 21 no-fault notices require compliance with deposit protection, prescribed information, and gas safety obligations. Your agent ensures correct procedural compliance for ${city} properties to avoid costly court challenges.` }
  ]; }
},

"hmo-management": {
  heroDesc: (city) => { const p = prof(city); return p ? `HMO properties in ${city} need specialist management — ${p.borough} licensing compliance, fire safety, room-by-room letting, and multi-tenant coordination. We match ${sizeLabel(p)} operating HMOs in the ${p.postcode} area with experienced multi-let specialists.` : `HMO management specialists covering ${city}. Free matching, no obligation.`; },
  heroBullets: (city) => { const p = prof(city); return p ? [`HMO specialists experienced with multi-let properties in ${city}'s ${p.postcode} area and ${p.borough} licensing requirements`, `Room-by-room tenant management, communal area maintenance, and fire safety compliance for ${city} HMOs`, `${p.borough} council licensing applications, renewals, and ongoing compliance management`] : [`HMO management specialists covering ${city}`, 'Licensing and fire safety compliance', 'Room-by-room tenant management']; },
  trustLine: (city) => { const p = prof(city); return p ? `Specialist HMO management across ${city} and ${p.borough}` : `Specialist HMO management across ${city}`; },
  benefits: (city) => { const p = prof(city); if (!p) return defBenefits(city); return [
    { title: `${p.borough} HMO Licensing`, desc: `Your agent manages the complete ${p.borough} council licensing process — applications, conditions compliance, renewals, and the ongoing documentation that mandatory and additional licensing schemes require for ${city} HMOs.` },
    { title: "Fire Safety Compliance", desc: `Fire risk assessments, detection systems, escape route maintenance, fire doors, and emergency lighting for your ${city} HMO. Your agent ensures continuous compliance with the fire safety standards that licensing conditions demand.` },
    { title: "Room-by-Room Management", desc: `Individual tenant management across multiple rooms — separate referencing, individual tenancy agreements, room-specific inventories, and coordinated move-in/move-out management for your ${p.postcode} area HMO.` },
    { title: "Communal Area Standards", desc: `Kitchen, bathroom, and shared space maintenance at the standards ${p.borough} council requires for licensed HMOs. Your agent coordinates cleaning, repairs, and periodic inspections to maintain compliance.` }
  ]; },
  intro: (city) => { const p = prof(city); if (!p) return [`HMO management in ${city} requires specialist expertise in licensing, fire safety, and multi-tenant coordination.`, `Professional agents handle the complexity that makes HMOs both profitable and demanding.`]; return [
    `${p.marketContext} For HMO operators in this market, the management complexity far exceeds standard single lets — licensing compliance, fire safety obligations, communal area maintenance, and the coordination of multiple individual tenancies within a single property demand specialist expertise.`,
    `${p.managementChallenges}. An HMO management specialist who works with ${city}'s multi-let market handles these obligations routinely, maintaining the compliance standards that protect your license while maximising occupancy across all rooms.`
  ]; },
  steps: (city) => { const p = prof(city); if (!p) return defSteps(city); return [
    `Assess your ${city} HMO including current licensing status, fire safety compliance, and room standards`,
    `Manage ${p.borough} council licensing applications or renewals with all required documentation and conditions compliance`,
    `Establish fire safety systems including detection, escape routes, fire doors, and emergency lighting maintenance`,
    `Set up room-by-room letting with individual tenancy agreements, inventories, and deposit protection per tenant`,
    `Implement communal area maintenance schedules meeting ${p.borough} licensing standards`,
    `Coordinate ongoing tenant management including individual references, check-ins, and room-specific maintenance`,
    `Provide occupancy reporting, financial summaries, and compliance monitoring for your ${city} HMO portfolio`
  ]; },
  whyPoints: (city) => { const p = prof(city); if (!p) return defWhyPoints(city); return [
    `HMO specialists who understand ${p.borough} council licensing requirements and fire safety standards for ${city} properties`,
    `Room-by-room tenant management maximising occupancy and minimising void periods across your HMO`,
    `Communal area maintenance at the standards ${p.borough} licensing conditions require`,
    `Ongoing compliance monitoring protecting your HMO license and investment in ${city}'s ${p.postcode} area`
  ]; },
  faqs: (city) => { const p = prof(city); if (!p) return defFaqs['hmo-management'](city); return [
    { question: `Does my ${city} property need an HMO license?`, answer: `Mandatory licensing applies to properties with 5+ occupants forming 2+ households. ${p.borough} council may also operate additional licensing schemes covering smaller HMOs. Your agent assesses your ${city} property against current requirements and manages the application process if licensing is required.` },
    { question: `How much does HMO management cost in ${city}?`, answer: `HMO management fees are typically 12-18% of gross rental income for ${city} properties, reflecting the additional complexity of multi-tenant management, licensing compliance, and communal area maintenance. The higher fees are justified by the significantly higher yields HMOs generate compared to single lets in the ${p.postcode} area.` },
    { question: `What fire safety is required for ${city} HMOs?`, answer: `Licensed HMOs in ${city} require fire risk assessments, Grade A detection systems (interlinked alarms), fire doors to habitable rooms and kitchens, emergency lighting in escape routes, fire blankets in kitchens, and maintained escape routes. ${p.borough} council conditions may specify additional requirements. Your agent manages the complete fire safety obligation.` }
  ]; }
}

};

function defBenefits(city: string) { return [
  { title: "Local Specialists", desc: `Every agent in our ${city} network has proven local property management experience.` },
  { title: "Fast Response", desc: `Most agents respond within 24 hours and arrange free property assessments.` },
  { title: "Full Compliance", desc: `Complete compliance management covering every landlord obligation.` },
  { title: "Matched to Your Property", desc: `We match you with agents experienced with your specific property type.` }
]; }
function defSteps(city: string) { return [`Assess your property and management needs`, `Match you with experienced local agents`, `Arrange property assessments and fee comparisons`, `Select your agent and establish services`, `Implement management systems and compliance`, `Commence tenant management or tenant find`, `Ongoing reporting and performance management`]; }
function defWhyPoints(city: string) { return [`Local property management specialists covering ${city}`, `Full compliance and tenant management`, `Responsive maintenance coordination`, `Transparent fees and regular reporting`]; }
const defFaqs: Record<string, (city: string) => { question: string; answer: string }[]> = {
  'residential-lettings-management': (c) => [{ question: `How much do agents charge?`, answer: `8-15% of monthly rent typically. All agents provide clear fee schedules.` }, { question: `How quickly can you let?`, answer: `2-4 weeks for well-priced, compliant properties.` }, { question: `What compliance is needed?`, answer: `Gas safety, EPC, EICR, smoke/CO alarms, deposit protection, right-to-rent.` }],
  'block-estate-management': (c) => [{ question: `How much does block management cost?`, answer: `£150-£400 per unit per year depending on block size and complexity.` }, { question: `What does it include?`, answer: `Service charge admin, H&S, insurance, contractor management, accounts.` }, { question: `How do we change agent?`, answer: `Process depends on structure — RMC resolution or Section 24 tribunal.` }],
  'tenant-find-referencing': (c) => [{ question: `How much does tenant find cost?`, answer: `4-8 weeks' rent typically as a one-off charge.` }, { question: `How long does it take?`, answer: `2-4 weeks from marketing to move-in for well-priced properties.` }, { question: `What referencing is done?`, answer: `Employment, credit, landlord references, right-to-rent, affordability.` }],
  'property-maintenance-coordination': (c) => [{ question: `How does it work?`, answer: `Agent receives requests, obtains quotes, manages work to completion.` }, { question: `What about emergencies?`, answer: `24/7 response for burst pipes, boiler failure, security issues.` }, { question: `How are costs controlled?`, answer: `Competitive quoting, approval thresholds, regular reporting.` }],
  'rent-collection-arrears-management': (c) => [{ question: `What if a tenant doesn't pay?`, answer: `Contact from day one, formal process escalating to legal if needed.` }, { question: `How are arrears prevented?`, answer: `Thorough referencing, clear expectations, early intervention.` }, { question: `What notice is needed?`, answer: `Section 8 for arrears grounds, Section 21 for no-fault — both require compliance.` }],
  'hmo-management': (c) => [{ question: `Do I need a license?`, answer: `Mandatory for 5+ occupants, 2+ households. Additional schemes may apply.` }, { question: `How much does HMO management cost?`, answer: `12-18% of gross rent, reflecting multi-tenant complexity.` }, { question: `What fire safety is required?`, answer: `Fire risk assessment, interlinked alarms, fire doors, emergency lighting.` }]
};
