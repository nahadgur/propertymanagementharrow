// data/serviceLocationContent.ts
export const serviceLocationContent: Record<string, {
  intro: (city: string) => string[]; steps: (city: string) => string[]; whyPoints: (city: string) => string[];
}> = {
  "residential-lettings-management": {
    intro: (city) => [
      `Residential lettings management in ${city} connects landlords with local specialists who understand the area's rental market, typical tenant profile, and the compliance requirements that apply to properties in the London Borough of Harrow. Whether you have one property or several, a professional manager removes the day-to-day burden entirely.`,
      `We match ${city} landlords with letting managers who have a track record managing properties like yours in the local area — accurate on rent pricing, fast on tenant find, and rigorous on compliance. The matching is free and introductions are made within 24 hours.`
    ],
    steps: (city) => [
      `Tell us about your ${city} property — type, current situation, and what you need from a management service`,
      `We identify letting managers in our network with experience managing similar properties in ${city} and nearby`,
      `Introductions made within 24 hours — review specialist profiles and fee structures`,
      `Management appraisal at your ${city} property — market rent advice, compliance review, and fee agreement`,
      `Property marketed, tenant found and referenced, tenancy prepared and signed`,
      `Ongoing management begins — rent collection, inspections, maintenance, renewals`
    ],
    whyPoints: (city) => [
      `Local knowledge of ${city} rental demand, typical tenant profile, and realistic market rents`,
      `Compliance management covering all statutory certificates, deposit protection, and Right to Rent`,
      `Vetted trade network for responsive, fairly priced maintenance in the ${city} area`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "block-estate-management": {
    intro: (city) => [
      `Block and estate management in ${city} requires specialists who understand leasehold law, service charge legislation, and the specific compliance obligations that apply to residential blocks. Our matched specialists have direct experience managing developments in and around ${city} — from small converted houses to purpose-built blocks.`,
      `We match ${city} freeholders and RMC directors with block management specialists who have the right scale of experience for your development — rigorous on Section 20 compliance, transparent on service charge accounting, and proactive on leaseholder communication.`
    ],
    steps: (city) => [
      `Tell us about your ${city} block — number of units, current issues, and what you need from a managing agent`,
      `We identify block management specialists with experience managing comparable developments in ${city}`,
      `Introductions made within 24 hours — review specialist credentials and fee proposals`,
      `Building assessment and compliance audit — existing leases, accounts, certificates, and outstanding issues reviewed`,
      `Management transfer coordinated — outgoing agent handover, leaseholder notification, and new arrangements confirmed`,
      `Ongoing management begins — service charge administration, compliance, maintenance, and leaseholder communication`
    ],
    whyPoints: (city) => [
      `Experience managing leasehold blocks in ${city} with knowledge of local authority requirements`,
      `Section 20 consultation managed correctly — protecting cost recovery on major works`,
      `Transparent service charge accounting with clear annual budgets and year-end accounts`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "tenant-find-referencing": {
    intro: (city) => [
      `Tenant find and referencing in ${city} gives self-managing landlords professional help at the most critical point of the tenancy cycle — choosing who moves in. Our matched specialists conduct genuine due diligence, not a checkbox process, and produce referencing reports that support informed decision-making.`,
      `We match ${city} landlords with tenant find specialists who know the local market, price accurately, and move quickly — minimising void periods while maintaining rigorous applicant assessment. The matching service is free.`
    ],
    steps: (city) => [
      `Tell us about your ${city} property and what you need from a tenant find service`,
      `We identify specialists with experience letting similar properties in ${city} and the local area`,
      `Introductions made within 24 hours — review credentials and fee proposals`,
      `Property appraisal and marketing brief agreed — rental value, target tenant profile, and listing prepared`,
      `Property marketed across major portals, viewings conducted, applicants qualified and referenced`,
      `Tenancy agreement prepared, deposit registered, prescribed information served, and check-in completed`
    ],
    whyPoints: (city) => [
      `Accurate rental valuations based on current ${city} market conditions — minimising void periods`,
      `Comprehensive referencing including credit check, employment verification, and landlord reference`,
      `Right to Rent compliance for all adult occupiers — documented and retained`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "property-maintenance-coordination": {
    intro: (city) => [
      `Property maintenance coordination in ${city} gives landlords access to a vetted local trade network, a defined process for handling tenant reports, and documented records of all works — without taking on full management. Whether you need occasional coordination or ongoing portfolio support, we match based on your requirements.`,
      `We match ${city} landlords with maintenance coordinators who have established relationships with reliable local trades, defined response time standards, and clear cost approval processes. Introductions are made within 24 hours.`
    ],
    steps: (city) => [
      `Tell us about your ${city} property portfolio and what you need from a maintenance service`,
      `We identify maintenance coordinators with the right local trade network for ${city} and surrounding areas`,
      `Introductions made within 24 hours — review credentials and fee structures`,
      `Portfolio onboarding — property details, compliance certificate status, and approval thresholds confirmed`,
      `Maintenance reporting process set up — tenant contact details, emergency procedures, and coordinator access agreed`,
      `Ongoing coordination begins — reports received, trades instructed, completions confirmed, invoices processed`
    ],
    whyPoints: (city) => [
      `Vetted local trades with proven response times for ${city} properties`,
      `Compliance certificate tracking — Gas Safety, EICR, and EPC renewals managed proactively`,
      `Defined approval thresholds — routine works proceed without calls, larger works referred for sign-off`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "rent-collection-arrears-management": {
    intro: (city) => [
      `Rent collection and arrears management in ${city} gives self-managing landlords professional income management without full management overhead. Consistent monthly collection, prompt arrears chasing, and legally correct escalation procedures protect rental income and create clear records for any possession proceedings.`,
      `We match ${city} landlords with rent collection specialists who operate a defined arrears procedure, understand the legal process, and communicate transparently. Most early-stage arrears are resolved before they escalate — and where they do escalate, the legal trail is correctly maintained from the outset.`
    ],
    steps: (city) => [
      `Tell us about your ${city} property and current collection arrangements`,
      `We identify rent collection specialists with experience managing similar tenancies in ${city}`,
      `Introductions made within 24 hours — review credentials and fee proposals`,
      `Collection setup — direct debit instructions, landlord payment schedule, and arrears procedure agreed`,
      `Monthly collection begins — rent received, disbursed to landlord, and statement issued`,
      `Any arrears actioned immediately — chasing, formal notices, and legal escalation if required`
    ],
    whyPoints: (city) => [
      `Consistent monthly collection with prompt disbursement and clear landlord statements`,
      `Legally correct Section 8 notice procedure — no procedural errors that invalidate possession claims`,
      `Early intervention on missed payments — most ${city} arrears resolved before legal escalation is required`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
  "hmo-management": {
    intro: (city) => [
      `HMO management in ${city} requires specialists who understand London Borough of Harrow licensing requirements, current fire safety standards, and the operational complexity of managing multiple individual tenancies in the same property. Our matched HMO specialists have direct experience managing licensed properties in ${city} and the surrounding area.`,
      `We match ${city} HMO landlords with specialists who handle licensing, compliance, and day-to-day operations as standard — absorbing the complexity that overwhelms self-managers and protecting landlords from the significant penalties that HMO compliance failures attract.`
    ],
    steps: (city) => [
      `Tell us about your ${city} HMO — number of rooms, current licence status, and what you need from management`,
      `We identify HMO specialists with experience managing licensed properties in ${city} and nearby`,
      `Introductions made within 24 hours — review specialist credentials and fee proposals`,
      `HMO compliance audit — licence conditions, fire safety, room standards, and any outstanding issues reviewed`,
      `Licensing managed where required — application prepared, submitted, and conditions tracked`,
      `Ongoing management begins — room-by-room tenancy admin, compliance, maintenance, and rent collection`
    ],
    whyPoints: (city) => [
      `Direct experience with London Borough of Harrow HMO licensing requirements`,
      `Fire safety compliance managed proactively — alarms, fire doors, emergency lighting, and risk assessments`,
      `Individual room tenancy management including separate deposits, check-ins, and Right to Rent checks`,
      `Free re-match guarantee if the first introduction is not the right fit`
    ],
  },
};
