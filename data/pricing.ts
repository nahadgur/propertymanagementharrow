// data/pricing.ts
export interface PricingTier { treatment: string; slug: string; priceFrom: number; priceTo: number; typicalDuration: string; serviceIncludes: string; description: string; }
export const pricingTiers: PricingTier[] = [
  {
    "treatment": "Residential Lettings Management",
    "slug": "residential-lettings-management",
    "priceFrom": 8,
    "priceTo": 15,
    "typicalDuration": "% of monthly rent",
    "serviceIncludes": "Rent collection, tenant liaison, inspections, maintenance coordination, renewals, compliance tracking",
    "description": "Full management fees in Harrow range from 8% to 15% of monthly rent. Lower rates typically apply to larger portfolios or higher-value properties. A tenant find fee (one to two weeks' rent) is usually charged separately when a new tenancy begins. Always confirm what is and isn't included before agreeing terms."
  },
  {
    "treatment": "Block & Estate Management",
    "slug": "block-estate-management",
    "priceFrom": 150,
    "priceTo": 350,
    "typicalDuration": "Per unit per year",
    "serviceIncludes": "Service charge administration, buildings insurance, maintenance oversight, compliance management, leaseholder communication",
    "description": "Block management is typically priced per unit per year. Smaller blocks attract higher per-unit rates; larger developments benefit from economies of scale. Additional fees may apply for major works consultation, company secretarial services, and year-end accounts preparation. Always request a full fee schedule before appointing."
  },
  {
    "treatment": "Tenant Find & Referencing",
    "slug": "tenant-find-referencing",
    "priceFrom": 400,
    "priceTo": 900,
    "typicalDuration": "One-off per tenancy",
    "serviceIncludes": "Property marketing, viewings, credit and reference checks, Right to Rent verification, tenancy agreement, deposit registration",
    "description": "Tenant find fees are charged as a fixed fee or as a proportion of the first month's rent. Pricing reflects the scope of referencing and whether a full tenancy agreement and deposit registration are included. Agents who conduct thorough referencing typically save landlords significantly more than their fee in avoided arrears and problem tenancies."
  },
  {
    "treatment": "Property Maintenance Coordination",
    "slug": "property-maintenance-coordination",
    "priceFrom": 50,
    "priceTo": 150,
    "typicalDuration": "Per job coordination fee",
    "serviceIncludes": "Contractor sourcing, quote management, access coordination, works oversight, completion reporting",
    "description": "Maintenance coordination is charged per job or as a monthly retainer for portfolios with higher maintenance volumes. Some agents apply a percentage markup on contractor invoices (typically 10-15%) rather than a fixed coordination fee. Confirm the charging structure upfront — the total cost of a managed repair is the contractor cost plus the coordination charge."
  },
  {
    "treatment": "Rent Collection & Arrears Management",
    "slug": "rent-collection-arrears-management",
    "priceFrom": 3,
    "priceTo": 8,
    "typicalDuration": "% of monthly rent collected",
    "serviceIncludes": "Monthly rent collection, arrears chasing, formal notice service, legal escalation coordination, landlord reporting",
    "description": "Rent collection without full management is typically charged at 3-8% of rent collected. Arrears management beyond standard chasing may attract additional fees for formal notice preparation and legal coordination. Some specialists offer rent guarantee products alongside collection services — useful for landlords who want income certainty."
  },
  {
    "treatment": "HMO Management",
    "slug": "hmo-management",
    "priceFrom": 12,
    "priceTo": 20,
    "typicalDuration": "% of monthly rent",
    "serviceIncludes": "Licence management, room-by-room tenancy admin, compliance oversight, communal maintenance, utility management, inspections",
    "description": "HMO management commands higher fees than standard lettings management due to the complexity of multi-occupancy compliance, room-by-room tenancy administration, and the regulatory burden on the landlord. Licensing application fees are typically charged separately. The cost of specialist HMO management is almost always justified by the compliance risk of getting it wrong."
  }
];

export const servicePricingMap: Record<string, string[]> = {
  "residential-lettings-management": ["residential-lettings-management"],
  "block-estate-management": ["block-estate-management"],
  "tenant-find-referencing": ["tenant-find-referencing"],
  "property-maintenance-coordination": ["property-maintenance-coordination"],
  "rent-collection-arrears-management": ["rent-collection-arrears-management"],
  "hmo-management": ["hmo-management"]
};

export function getPricingForService(serviceId: string): PricingTier[] {
  const slugs = servicePricingMap[serviceId] || ["residential-lettings-management"];
  return pricingTiers.filter(p => slugs.includes(p.slug));
}

export const treatmentIncludes = [
  "Rent collection, tenant liaison, inspections, maintenance coordination, renewals, compliance tracking",
  "Service charge administration, buildings insurance, maintenance oversight, compliance management, leaseholder communication",
  "Property marketing, viewings, credit and reference checks, Right to Rent verification, tenancy agreement, deposit registration",
  "Contractor sourcing, quote management, access coordination, works oversight, completion reporting",
  "Monthly rent collection, arrears chasing, formal notice service, legal escalation coordination, landlord reporting",
  "Licence management, room-by-room tenancy admin, compliance oversight, communal maintenance, utility management, inspections"
];

export const financeInfo = {
  available: true,
  interestFree: true,
  monthlyFrom: 0,
  spreadOver: 'ongoing monthly basis',
  description: 'Most property management fees are charged monthly as a percentage of rent collected, spreading the cost across the tenancy rather than as a large upfront payment.'
};
