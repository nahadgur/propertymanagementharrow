// data/services.ts
export interface FAQ { question: string; answer: string; }
export interface Service { id: string; title: string; slug: string; description: string; image: string; icon: string; color: string; faqs: FAQ[]; }
export const services: Service[] = [
  {
    "id": "residential-lettings-management",
    "title": "Residential Lettings Management",
    "slug": "residential-lettings-management",
    "description": "Full residential lettings management for Harrow landlords. From marketing and tenant find through to rent collection, inspections, maintenance, and renewals — your property managed professionally so you don't have to.",
    "faqs": [
      { "question": "What does full residential lettings management include?", "answer": "A full management service covers everything from marketing your property and conducting viewings, through tenant referencing and tenancy agreement preparation, to monthly rent collection, periodic inspections, maintenance coordination, and tenancy renewals or notice procedures. You hand over the day-to-day responsibility entirely — the agent handles all tenant contact and is the first call for any issue." },
      { "question": "What percentage do property managers charge in Harrow?", "answer": "Full management fees in Harrow typically range from 8% to 15% of monthly rent depending on the agent and service level. Most agents also charge a tenant find fee (equivalent to one to two weeks' rent) when a new tenancy begins. Always confirm what is included in the management fee and what is charged separately — maintenance markups and inspection fees vary widely." },
      { "question": "How often will my property be inspected?", "answer": "Most Harrow property managers conduct inspections every three to six months during a tenancy, with a formal check-in at the start and check-out at the end. Inspection reports with photographs should be provided after each visit. Frequency can sometimes be increased for higher-risk tenancies or properties with specific maintenance concerns." }
    ],
    "image": "/images/residential-lettings-management.png", "icon": "Home", "color": "brand"
  },
  {
    "id": "block-estate-management",
    "title": "Block & Estate Management",
    "slug": "block-estate-management",
    "description": "Professional block and estate management for Harrow freeholders, residents' management companies, and RTM companies. Comprehensive service charge administration, maintenance oversight, compliance management, and leaseholder communication.",
    "faqs": [
      { "question": "What does a block management company do?", "answer": "A block management company acts on behalf of the freeholder or residents' management company to run the day-to-day affairs of a building. This includes collecting service charges, arranging buildings insurance, commissioning and overseeing maintenance and major works, ensuring compliance with fire safety and health and safety legislation, and managing leaseholder communications and disputes." },
      { "question": "How are service charges calculated and managed?", "answer": "Service charges are calculated based on the anticipated cost of running the building for the coming year, plus contributions to a reserve fund for major works. A well-run block manager prepares a transparent annual budget, issues demands in compliance with lease requirements, accounts for all expenditure, and provides year-end accounts. Service charges must be reasonable and properly consulted on for major works above the Section 20 threshold." },
      { "question": "Can we switch block managers mid-lease?", "answer": "Yes — residents' management companies and RTM companies can change their block manager at any time by following the termination provisions in the management agreement. A professional handover involves transfer of all financial records, maintenance contracts, compliance certificates, and leaseholder contact details. We can match you with specialists experienced in taking over from underperforming managing agents." }
    ],
    "image": "/images/block-estate-management.png", "icon": "Building2", "color": "brand"
  },
  {
    "id": "tenant-find-referencing",
    "title": "Tenant Find & Referencing",
    "slug": "tenant-find-referencing",
    "description": "Tenant find and comprehensive referencing for Harrow landlords who self-manage but need professional help securing the right tenant. Full marketing, viewings, credit and reference checks, right to rent verification, and tenancy preparation.",
    "faqs": [
      { "question": "What does a tenant referencing check include?", "answer": "A comprehensive reference check covers credit history (including CCJs and bankruptcies), employment verification and income assessment, previous landlord references, and Right to Rent document checks as required under UK immigration law. Most agents also verify identity documents and check against tenancy fraud databases. The output is a written referencing report that helps you make an informed decision." },
      { "question": "How long does it take to find a tenant in Harrow?", "answer": "In a well-priced Harrow property, a professional letting agent can typically find a suitable tenant within two to four weeks. Properties that are accurately priced for the current market and presented well generate enquiries quickly. Overpricing is the single biggest cause of extended void periods — a good agent will advise on realistic market rent before marketing begins." },
      { "question": "What is included in the tenancy agreement preparation?", "answer": "A professionally prepared assured shorthold tenancy agreement covers all standard clauses required under current legislation, plus any specific provisions relevant to your property — pets clauses, permitted occupiers, maintenance responsibilities, and any special conditions. The agent ensures the agreement complies with current law, registers the deposit with an approved scheme, and serves all required prescribed information within the legal timeframe." }
    ],
    "image": "/images/tenant-find-referencing.png", "icon": "UserCheck", "color": "brand"
  },
  {
    "id": "property-maintenance-coordination",
    "title": "Property Maintenance Coordination",
    "slug": "property-maintenance-coordination",
    "description": "Maintenance coordination for Harrow landlords and property managers. Reliable trade network, prompt response to tenant reports, compliant repair management, and clear cost approval processes — keeping properties in good condition without the hassle.",
    "faqs": [
      { "question": "How does maintenance coordination work for landlords?", "answer": "When a maintenance issue is reported, the coordinator assesses urgency, sources an appropriate contractor from a vetted trade network, obtains quotes where required, coordinates access with the tenant, oversees the work, and reports back with completion confirmation and any invoices. Landlords set approval thresholds — works below the threshold proceed without sign-off; larger jobs are referred for approval before instruction." },
      { "question": "What are a landlord's legal maintenance obligations?", "answer": "Landlords are legally required to keep the structure and exterior of the property in repair, ensure all gas appliances are annually safety checked with a valid Gas Safety Record, maintain electrical installations to EICR standards (inspection every five years), fit working smoke and carbon monoxide alarms, and ensure the property is free from category one hazards under the Housing Health and Safety Rating System. A good maintenance coordinator tracks compliance deadlines and flags upcoming requirements." },
      { "question": "How quickly should emergency repairs be handled?", "answer": "Emergency repairs — those affecting safety or making a property uninhabitable, such as boiler failures in winter, flooding, or electrical faults — should be addressed within 24 hours. Urgent but non-emergency repairs such as appliance failures or minor leaks should be resolved within three to five working days. Routine repairs should be completed within 28 days. A professional coordinator has relationships with reliable trades available at short notice." }
    ],
    "image": "/images/property-maintenance-coordination.png", "icon": "Wrench", "color": "brand"
  },
  {
    "id": "rent-collection-arrears-management",
    "title": "Rent Collection & Arrears Management",
    "slug": "rent-collection-arrears-management",
    "description": "Professional rent collection and arrears management for Harrow landlords. Reliable monthly collection, prompt arrears chasing, legally compliant escalation procedures, and clear reporting — protecting your rental income without the confrontation.",
    "faqs": [
      { "question": "What happens when a tenant falls into arrears?", "answer": "A professional rent collection service follows a defined arrears procedure. Initial contact is made within days of a missed payment — most arrears at this stage are resolved quickly. If arrears persist, the agent issues formal notices in the correct legal form, maintains a documented trail, and escalates to legal proceedings if required. Acting promptly and correctly from the outset significantly improves recovery rates and protects any subsequent possession claim." },
      { "question": "What legal notices are involved in an arrears case?", "answer": "For assured shorthold tenancies, the primary route for rent arrears is a Section 8 notice citing grounds 8, 10, and 11 of the Housing Act 1988. Ground 8 (two months' arrears at both notice and hearing) is a mandatory ground for possession. A Section 21 notice may run concurrently where applicable. All notices must be correctly drafted and served — procedural errors can invalidate the notice and require the process to restart." },
      { "question": "Can a specialist help recover historic arrears?", "answer": "Yes — arrears recovery specialists can pursue outstanding rent through the county court as a debt claim, independently of any possession proceedings. Where a tenancy has ended, former tenants can be pursued through the courts for outstanding rent for up to six years. Tracing services can locate tenants who have vacated without paying. We can match you with specialists who handle complex arrears and recovery cases." }
    ],
    "image": "/images/rent-collection-arrears-management.png", "icon": "PoundSterling", "color": "brand"
  },
  {
    "id": "hmo-management",
    "title": "HMO Management",
    "slug": "hmo-management",
    "description": "Specialist HMO management for Harrow landlords. Licensing compliance, room-by-room tenancy management, communal area maintenance, tenant relations, and full regulatory oversight — expert management for one of the most complex property types.",
    "faqs": [
      { "question": "What HMO licences are required in Harrow?", "answer": "In the London Borough of Harrow, HMOs occupied by five or more people forming two or more households require a mandatory HMO licence. The council may also operate additional licensing schemes covering smaller HMOs. Licences must be renewed and conditions complied with throughout — failure to hold a required licence is a criminal offence and allows tenants to apply for a Rent Repayment Order recovering up to 12 months' rent. A specialist will assess your property's licensing position and manage the application process." },
      { "question": "How is an HMO managed differently to a standard let?", "answer": "HMO management is significantly more complex than a single-household tenancy. Individual room agreements must be managed, room-by-room check-ins and check-outs coordinated, shared facility maintenance prioritised, utility bills (often included in rent) managed, and communal areas regularly inspected. Compliance requirements are stricter — fire safety, room size standards, and amenity ratios must be maintained. A specialist HMO manager handles all of this as a matter of course." },
      { "question": "What are the fire safety requirements for an HMO?", "answer": "HMOs are subject to stricter fire safety requirements than single-household properties. These typically include interlinked mains-wired smoke alarms on every floor and in every room, heat detectors in kitchens, fire doors on habitable rooms and kitchens, emergency lighting in communal areas, and a fire risk assessment. Specific requirements vary by property size and licence conditions. A specialist HMO manager ensures all requirements are met, documented, and maintained." }
    ],
    "image": "/images/hmo-management.png", "icon": "Key", "color": "brand"
  }
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);
