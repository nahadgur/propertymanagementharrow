// data/cityContent.ts
export const cityPageContent = {
  introHeading: (cityName: string) => `Property Management Services in ${cityName}`,
  introParagraphs: (cityName: string) => [
    `Finding the right property management specialist in ${cityName} means going beyond a generic directory search. Our matching service connects landlords and freeholders with professionals who have specific experience managing properties like yours — the right portfolio type, the right local knowledge, and the right compliance track record.`,
    `Whether you need full residential lettings management, an HMO specialist, block management for a leasehold development, or simply a reliable tenant find and referencing service, our ${cityName} network includes specialists across every aspect of property management. The matching is free — you only pay the specialist for their work.`
  ],
  matchingHeading: (cityName: string) => `Why ${cityName} Landlords Choose Our Property Management Matching Service`,
  matchingCards: (cityName: string) => [
    { iconName: 'Star', title: "Portfolio-Based Matching", desc: `We review your property type, size, and location and match based on demonstrated experience with portfolios like yours in ${cityName} — not just whoever is available and willing to take on new instructions.` },
    { iconName: 'Shield', title: "Vetted Specialists Only", desc: `Every property manager in our network has been assessed on qualifications, professional memberships, client references, and compliance standards. We turn away more applicants than we accept so you do not have to filter the poor options.` },
    { iconName: 'Clock', title: "24-Hour Introductions", desc: `Most ${cityName} landlords receive their first introduction within 24 hours of contacting us. For urgent situations — vacant properties, management handovers, or licensing deadlines — same-day matching is often possible.` },
    { iconName: 'CheckCircle', title: "Free Re-Match Guarantee", desc: `If your first introduction is not the right fit, we will find you another with no fuss and no charge. Our reputation depends on the quality of every match we make, so we take re-matching seriously.` }
  ],
  sidebarCta: (cityName: string) => ({
    heading: `Find a Property Management Specialist in ${cityName}`,
    description: `Tell us about your portfolio and we will introduce you to the right property management professional in ${cityName} within 24 hours. No commitment, no cost to you.`
  }),
  sidebarFinance: (cityName: string) => ({
    heading: `Monthly Fee Model — No Large Upfront Costs`,
    description: `Most property management specialists serving ${cityName} charge monthly as a percentage of rent collected. No large upfront fees — costs are spread across the management period.`
  }),
  bottomCta: (cityName: string) => ({
    heading: `Find Your Property Management Specialist in ${cityName} Today`,
    description: `Free matching service. No commitment until you choose to proceed. Introductions within 24 hours.`
  }),
  schemaServiceTypes: [
    "residential-lettings-management",
    "block-estate-management",
    "tenant-find-referencing",
    "property-maintenance-coordination",
    "rent-collection-arrears-management",
    "hmo-management"
  ],
};
