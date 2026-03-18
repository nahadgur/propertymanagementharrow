// data/serviceContent.ts
export const serviceContent: Record<string, {
  intro: string[]; benefits: { title: string; desc: string }[];
  candidateIntro: string; candidates: string[]; process: { title: string; desc: string }[];
}> = {
  "residential-lettings-management": {
    intro: [
      "Full residential lettings management removes the day-to-day burden of being a landlord entirely. Your property manager handles everything from marketing and tenant find through to rent collection, maintenance coordination, periodic inspections, and tenancy renewals — you receive monthly statements and are contacted only when a decision genuinely requires your input.",
      "For Harrow landlords, the case for professional management has never been stronger. Deposit protection deadlines, EICR requirements, gas safety obligations, Right to Rent checks, and the Renters (Reform) Act changes all create compliance exposure for self-managers who are not fully current. A professional manager absorbs this burden as standard.",
      "Our matched lettings managers are assessed on their compliance track record, maintenance response times, void period performance, and client communication — not just their headline fee. The right manager more than covers their cost in avoided voids, better tenant retention, and compliance certainty."
    ],
    benefits: [
      { "title": "Complete Compliance Management", "desc": "Your manager tracks and renews all statutory certificates — Gas Safety Record, EICR, EPC — serves required notices correctly, registers deposits within the legal deadline, and ensures all prescribed information is provided to tenants. Compliance failures that cost landlords thousands are prevented as a matter of course." },
      { "title": "Shorter Void Periods", "desc": "A local specialist knows Harrow's rental market, prices accurately, markets effectively, and moves quickly when a tenancy ends. Every vacant week is lost income — a good manager's local knowledge and existing applicant pool typically outperforms self-management significantly on void periods." },
      { "title": "Maintenance Without the Calls", "desc": "Tenant maintenance calls go directly to your manager. They assess urgency, instruct appropriate trades from a vetted network, coordinate access, oversee completion, and report back. You set approval thresholds and are contacted only for larger works." },
      { "title": "Professional Tenant Relationships", "desc": "An intermediary between landlord and tenant reduces friction, keeps communications professional, and makes difficult conversations — rent arrears, property condition, notice periods — significantly easier to manage. Tenants dealing with an agent rather than a landlord directly tend to stay longer and treat properties better." }
    ],
    candidateIntro: "Full lettings management is the right service for:",
    candidates: [
      "Harrow landlords who want to be genuinely hands-off and not contactable by tenants",
      "Portfolio landlords managing multiple properties who need consistent professional oversight across all units",
      "Landlords who work full time and cannot respond reliably to maintenance issues or tenant queries",
      "Overseas landlords who need reliable local representation and proactive communication",
      "Accidental landlords who have inherited or retained a property and want professional management from day one"
    ],
    process: [
      { "title": "Initial Portfolio Assessment", "desc": "Your matched manager assesses the property, advises on market rent, identifies any compliance gaps or required certificates, and confirms the management fee and scope of service. Everything is agreed before the management agreement is signed." },
      { "title": "Property Marketing", "desc": "The property is listed on Rightmove, Zoopla, and relevant local portals. Professional photography, an accurate description, and correct pricing generate quality enquiries. Viewings are conducted and applicants qualified." },
      { "title": "Tenant Referencing and Onboarding", "desc": "Shortlisted applicants are fully referenced — credit check, employment verification, previous landlord reference, and Right to Rent. The tenancy agreement is prepared, the deposit registered, and all prescribed information served within legal timeframes." },
      { "title": "Ongoing Management", "desc": "Monthly rent collection, periodic inspections with photographic reports, maintenance coordination, tenancy renewals, and end-of-tenancy check-outs. You receive regular statements and are kept informed of anything that requires your awareness or decision." }
    ],
  },
  "block-estate-management": {
    intro: [
      "Block and estate management requires a different skill set to residential lettings — service charge law, leasehold legislation, Section 20 consultation procedures, and building compliance all demand specialist knowledge that generalist letting agents rarely possess. Getting it wrong exposes freeholders and RMC directors to significant legal and financial risk.",
      "Harrow has a substantial stock of leasehold flats and purpose-built blocks, many of which are managed by underperforming agents who fail to maintain compliance, communicate poorly with leaseholders, and allow service charge reserves to erode. Switching to a specialist block manager typically improves every aspect of a building's operation.",
      "Our matched block management specialists are assessed on their Section 20 compliance record, service charge accounting practices, maintenance contractor relationships, and leaseholder communication standards. We match based on block size, building type, and the specific challenges your development presents."
    ],
    benefits: [
      { "title": "Transparent Service Charge Administration", "desc": "A professional block manager prepares a detailed annual budget, issues demands correctly under the terms of the lease, accounts for all expenditure, and provides year-end accounts for review. Leaseholders receive clear, itemised statements — reducing queries and disputes." },
      { "title": "Section 20 Compliance", "desc": "Major works above the Section 20 threshold must follow a formal consultation procedure. Failure to do so limits cost recovery to £250 per leaseholder regardless of the total expenditure. A specialist manages the consultation process correctly — protecting the freeholder's ability to recover legitimate costs." },
      { "title": "Building Compliance Oversight", "desc": "Fire risk assessments, lift inspections, electrical installation checks, asbestos surveys, and insurance valuations all have renewal deadlines that a professional manager tracks and coordinates. Compliance failures in leasehold blocks carry significant legal and insurance consequences." },
      { "title": "Improved Leaseholder Relations", "desc": "Proactive communication, prompt maintenance responses, and clear financial reporting reduce leaseholder complaints and create a more cooperative building environment. Well-managed blocks also maintain and improve in value relative to poorly managed counterparts." }
    ],
    candidateIntro: "Block and estate management is the right service for:",
    candidates: [
      "Freeholders with residential or mixed-use blocks in Harrow seeking professional managing agent services",
      "Residents management companies and RTM companies looking to switch from an underperforming agent",
      "Developers who have completed a new build and need ongoing management arrangements put in place",
      "Directors of small self-managed buildings who have outgrown self-management and need professional oversight",
      "Freeholders facing upcoming major works who need Section 20 consultation managed correctly"
    ],
    process: [
      { "title": "Building Assessment", "desc": "Your specialist reviews the existing leases, service charge accounts, compliance certificates, maintenance contracts, and leaseholder records. They identify any outstanding issues, compliance gaps, or arrears before the management transfer completes." },
      { "title": "Management Transfer", "desc": "A formal handover from the outgoing agent is coordinated — including transfer of financial records, maintenance history, insurance documents, and leaseholder contact details. Leaseholders are notified in writing of the change of agent." },
      { "title": "Annual Budget Setting", "desc": "A realistic service charge budget is prepared for the coming year, with contributions to a reserve fund for future major works. Demands are issued in compliance with the lease and relevant legislation." },
      { "title": "Ongoing Management", "desc": "Day-to-day maintenance coordination, contractor management, leaseholder communications, compliance certificate renewals, and preparation of year-end accounts. Major works are managed through the Section 20 process where required." }
    ],
  },
  "tenant-find-referencing": {
    intro: [
      "Finding the right tenant is the single most important decision a self-managing landlord makes. A poor referencing process — or no process at all — is the root cause of most arrears cases, property damage claims, and difficult tenancy endings. Professional tenant find and referencing removes the guesswork and creates a documented basis for every decision.",
      "Harrow's rental market is competitive but varied — demand is strong in most areas, but the tenant pool includes a mix of employed professionals, families, students, and those relying on housing benefit. A professional agent knows how to market to the right applicant pool for your property and how to assess risk accurately.",
      "Our matched tenant find specialists conduct genuine due diligence — not a checkbox process. They verify employment income independently, obtain substantive landlord references rather than confirmatory ones, and produce a written referencing report that lets you make an informed decision about every applicant."
    ],
    benefits: [
      { "title": "Comprehensive Credit and Background Checks", "desc": "A full credit check covers CCJs, bankruptcies, IVAs, and credit history. Identity documents are verified against fraud databases. The output is a clear risk assessment — not just a pass or fail." },
      { "title": "Right to Rent Compliance", "desc": "All agents in our network conduct Right to Rent checks as required under the Immigration Act 2014. Correct documentation is verified and retained. Landlords who fail to conduct Right to Rent checks correctly face civil penalties of up to £3,000 per occupier." },
      { "title": "Legally Prepared Tenancy Agreement", "desc": "A professionally drafted assured shorthold tenancy agreement covers all current legal requirements including any property-specific provisions. The deposit is registered with an approved scheme and all prescribed information served within the required timeframe." },
      { "title": "Inventory and Check-In", "desc": "A detailed inventory with photographs, prepared at the start of the tenancy, is the foundation of any successful deposit deduction claim at the end. Professional inventory preparation protects landlords significantly at tenancy end." }
    ],
    candidateIntro: "Tenant find and referencing is the right service for:",
    candidates: [
      "Harrow landlords who self-manage but want professional help securing each new tenant",
      "Landlords who have had a problem tenancy and want more rigorous referencing going forward",
      "Those letting a property for the first time who need professional guidance through the process",
      "Landlords who want a properly drafted tenancy agreement and correctly registered deposit without taking on full management",
      "Portfolio landlords who handle day-to-day management themselves but use professionals for tenant transitions"
    ],
    process: [
      { "title": "Property Appraisal and Marketing", "desc": "The agent advises on market rent, prepares the listing with professional photography, and markets across Rightmove, Zoopla, and relevant portals. Enquiries are handled, viewings conducted, and applicants qualified before referencing begins." },
      { "title": "Full Referencing", "desc": "Credit check, employment and income verification, previous landlord reference, and Right to Rent document check for all adult occupiers. The referencing report is provided to the landlord with a recommendation." },
      { "title": "Tenancy Preparation", "desc": "The tenancy agreement is drafted with property-specific provisions, signed by all parties, and a copy provided to each tenant. The deposit is registered with an approved scheme and all prescribed information served within the legal deadline." },
      { "title": "Check-In and Handover", "desc": "A detailed inventory is prepared, a check-in conducted with the tenant, meter readings recorded, and keys formally handed over. The landlord receives the completed file including all signed documents and referencing reports." }
    ],
  },
  "property-maintenance-coordination": {
    intro: [
      "Maintenance coordination is the part of property management that most landlords find most time-consuming — and most stressful. Finding reliable trades who are available at short notice, obtaining fair quotes, coordinating access with tenants, and following up on completion all consume time that most landlords do not have.",
      "For Harrow landlords with one or more properties, a professional maintenance coordinator provides access to a vetted network of trades, a defined process for handling reports from urgent through to routine, and documented completion records that satisfy both tenants and insurance requirements.",
      "Our matched maintenance specialists are assessed on their trade network quality, response times, cost transparency, and reporting standards. We match based on property type and portfolio size — a single-property landlord needs a different service level to a portfolio operator with ongoing maintenance volumes."
    ],
    benefits: [
      { "title": "Access to a Vetted Trade Network", "desc": "Reliable plumbers, electricians, gas engineers, and general maintenance trades who are known quantities — responsive, fairly priced, and experienced with tenanted properties. No more searching for trades on short notice or hoping the person who shows up is competent." },
      { "title": "Compliance Certificate Management", "desc": "Gas Safety Records, EICR certificates, and EPC renewals are tracked and instructed automatically before expiry. Landlords who allow certificates to lapse face enforcement action, civil penalties, and in some cases are unable to serve valid Section 21 notices." },
      { "title": "Defined Approval Thresholds", "desc": "Landlords set a financial threshold below which works proceed without approval — typically £200-£500. Larger works are referred with a quote before instruction. This eliminates unnecessary calls while maintaining control over significant expenditure." },
      { "title": "Full Documentation", "desc": "Every maintenance job is documented — initial report, assessment, quotes where applicable, instruction, completion confirmation, and invoice. This record protects landlords in deposit disputes, insurance claims, and any regulatory inspection." }
    ],
    candidateIntro: "Maintenance coordination is the right service for:",
    candidates: [
      "Self-managing Harrow landlords who want to hand off maintenance handling without full management",
      "Portfolio landlords whose maintenance volumes have outgrown informal arrangements",
      "Landlords whose compliance certificates are approaching expiry and need a coordinated renewal process",
      "Those who have had unreliable trades let them down and want access to a vetted contractor network",
      "Landlords who want documented maintenance records for insurance or regulatory purposes"
    ],
    process: [
      { "title": "Portfolio Onboarding", "desc": "The coordinator reviews the property details, existing compliance certificates, and any known maintenance issues. Approval thresholds are agreed, emergency contact procedures confirmed, and the property added to the compliance tracking system." },
      { "title": "Maintenance Report Handling", "desc": "Tenant maintenance reports are received by the coordinator, assessed for urgency, and categorised. Emergency works are instructed immediately. Urgent and routine works are scheduled in order of priority with tenant access arranged." },
      { "title": "Contractor Instruction and Oversight", "desc": "An appropriate trade from the vetted network is instructed. Quotes are obtained for works above the approval threshold and submitted to the landlord before proceeding. The contractor is followed up on completion and the work signed off." },
      { "title": "Reporting and Invoicing", "desc": "The landlord receives a completion report for each job with the invoice. A monthly maintenance summary is provided for portfolio landlords. All documentation is retained and available for reference." }
    ],
  },
  "rent-collection-arrears-management": {
    intro: [
      "Rent arrears are the most common problem Harrow landlords face — and the most damaging. Even a single month of missed rent creates cashflow problems for most landlords; multiple months create a situation that, without correct legal management, can result in a costly and protracted possession process.",
      "Professional rent collection reduces arrears rates significantly through consistent process — direct debit instructions, prompt chasing on day one of any missed payment, and a clear escalation path that tenants understand from the outset. Most arrears at early stages are resolved quickly when handled professionally.",
      "When arrears become serious, the legal process matters enormously. Incorrectly drafted notices, missed procedural steps, or delays in escalation can invalidate a possession claim and require the process to restart. A specialist ensures the legal route is followed correctly from the first notice."
    ],
    benefits: [
      { "title": "Consistent Monthly Collection", "desc": "Rent is collected by direct debit on a fixed date each month. Missed payments are identified and actioned immediately — not days later. Early intervention resolves the majority of arrears before they become a problem." },
      { "title": "Legally Correct Notice Procedure", "desc": "Section 8 notices citing grounds 8, 10, and 11 are drafted correctly, served in the legally required form, and documented. Procedural errors that invalidate notices are avoided entirely. The correct legal trail is maintained from the first missed payment." },
      { "title": "Transparent Landlord Reporting", "desc": "Monthly statements show rent received, fees deducted, and any arrears position clearly. Landlords are kept informed of any arrears case development and involved in decisions about escalation to legal proceedings." },
      { "title": "Rent Guarantee Options", "desc": "Some specialists offer rent guarantee insurance alongside collection services, providing income certainty even during an arrears or void period. We can match you with specialists who offer both collection and guarantee products where appropriate." }
    ],
    candidateIntro: "Rent collection and arrears management is the right service for:",
    candidates: [
      "Harrow landlords who self-manage but want professional collection and arrears handling without full management",
      "Those who have experienced arrears and want a more robust process in place for future tenancies",
      "Portfolio landlords who want consistent collection across multiple properties with clear portfolio-level reporting",
      "Landlords dealing with an existing arrears case who need specialist help with the legal process",
      "Those considering rent guarantee insurance who want a combined collection and guarantee arrangement"
    ],
    process: [
      { "title": "Collection Setup", "desc": "Direct debit instructions are set up with the tenant for the agreed rent day. Banking details are confirmed, the landlord payment schedule agreed, and the arrears procedure explained to the tenant at the outset." },
      { "title": "Monthly Collection and Disbursement", "desc": "Rent is collected on the due date and disbursed to the landlord promptly after deduction of the management fee. A monthly statement is issued. Any missed or short payments are flagged immediately." },
      { "title": "Arrears Chasing", "desc": "Day one of any missed payment triggers contact with the tenant. Most early-stage arrears resolve at this point. Persistent arrears trigger the formal procedure — letters, calls, and formal demand as appropriate to the stage." },
      { "title": "Legal Escalation", "desc": "Where arrears meet the threshold for Section 8 proceedings, the notice is drafted and served correctly. The landlord is advised on the grounds available and the realistic timeline. Referral to specialist solicitors for court proceedings is coordinated where required." }
    ],
  },
  "hmo-management": {
    intro: [
      "HMO management is among the most complex and compliance-intensive forms of residential property management. Licensing requirements, room size standards, fire safety obligations, amenity ratios, and the complexity of managing multiple individual tenancies in the same property all require specialist expertise that generalist agents typically lack.",
      "In Harrow, HMO licensing is actively enforced by the London Borough of Harrow. Operating an unlicensed HMO, failing to comply with licence conditions, or allowing fire safety standards to lapse all carry significant penalties — including Rent Repayment Orders that can strip up to 12 months' rent from a landlord's income.",
      "Our matched HMO specialists have direct experience managing licensed HMOs in Harrow and the surrounding area. They understand the local authority's requirements, maintain compliance proactively, and manage the complexity of multi-occupancy tenancies without it becoming the landlord's problem."
    ],
    benefits: [
      { "title": "HMO Licence Management", "desc": "Licence applications, renewals, and condition compliance are managed by specialists who understand the London Borough of Harrow's requirements. Licence conditions are tracked, works required as conditions are instructed, and renewal applications submitted before expiry." },
      { "title": "Fire Safety Compliance", "desc": "Interlinked smoke and heat alarms, fire doors, emergency lighting, and regular fire risk assessments are managed as standard. Fire safety failures in HMOs carry immediate licence risk and potential criminal liability — specialist management ensures requirements are permanently maintained." },
      { "title": "Room-by-Room Tenancy Management", "desc": "Individual room agreements, separate check-ins and check-outs, individual deposit registrations, and room-specific maintenance records are all managed systematically. The complexity that overwhelms landlords trying to self-manage is absorbed by a specialist with established processes." },
      { "title": "Utility and Bill Management", "desc": "Where utilities are included in rent, a specialist manages supplier accounts, monitors usage, and ensures bills are kept current. Council tax liability in void rooms is managed correctly. HMO utility arrangements require specific handling that generalist agents often get wrong." }
    ],
    candidateIntro: "HMO management is the right service for:",
    candidates: [
      "Harrow landlords operating licensed HMOs who want full compliance and operational management",
      "Those with properties that meet the HMO threshold but are currently unlicensed — requiring regularisation",
      "Portfolio operators with multiple HMOs who need consistent specialist management across all units",
      "Landlords converting existing properties to HMO use who need management arrangements in place from the outset",
      "Those who have received a licence condition notice or improvement notice and need specialist help to comply"
    ],
    process: [
      { "title": "HMO Assessment and Compliance Audit", "desc": "The specialist assesses the property against current HMO standards — room sizes, amenity ratios, fire safety installation, and any outstanding licence conditions. A compliance report identifies required works before or during the management appointment." },
      { "title": "Licensing", "desc": "Where a licence is not in place, the application is prepared and submitted. Where a licence exists, the specialist reviews conditions and confirms compliance. Licence renewal is tracked and managed automatically before expiry." },
      { "title": "Tenancy Management", "desc": "Individual room agreements are prepared for each occupant, check-ins conducted with inventories, deposits registered separately, and Right to Rent checks completed. Each room is treated as a separate tenancy with its own documentation." },
      { "title": "Ongoing Compliance and Operations", "desc": "Regular inspections of all rooms and communal areas, fire safety testing records maintained, maintenance coordinated promptly, utility accounts managed, and rent collected from each occupant. Monthly landlord reports cover occupancy, rent position, and any compliance matters." }
    ],
  },
};
