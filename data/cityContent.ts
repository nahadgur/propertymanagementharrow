// data/cityContent.ts
import { getLocationProfileByName, type LocationProfile } from './locationProfiles';

function prof(city: string): LocationProfile | null { return getLocationProfileByName(city) || null; }
function titleCase(str: string): string { return str.replace(/\b\w/g, c => c.toUpperCase()); }
function sizeLabel(p: LocationProfile): string {
  switch (p.avgPortfolioType) { case 'single-let': return 'single-property landlords'; case 'small-portfolio': return 'portfolio landlords'; case 'mixed': return 'landlords of all sizes'; case 'block-management': return 'freeholders and landlords'; default: return 'landlords'; }
}
function mixList(p: LocationProfile, n: number = 3): string {
  const items = p.propertyMix.slice(0, n);
  return items.length <= 1 ? items[0] : items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}

export const cityPageContent = {
  heroDesc: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Connect with vetted property management specialists covering ${cityName}. Free matching, no obligation.`;
    return `From ${p.propertyMix[0]} to ${p.propertyMix[2] || p.propertyMix[1]} — whatever you let in ${cityName}, we match you with a management specialist who works with ${p.borough} properties every day. Free matching, no obligation.`;
  },
  introHeading: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Property Management Services in ${cityName}`;
    return `Property Management for ${cityName}'s ${titleCase(p.propertyMix[0])} Sector and Beyond`;
  },
  introParagraphs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [`Finding the right property management specialist in ${cityName} means going beyond a generic directory search.`, `Our matching service connects landlords with professionals who have specific local experience.`];
    return [
      `${p.marketContext} Our matching service connects you with property managers who understand this local market — not generic agents who treat every area the same.`,
      `The management challenges here are specific to ${cityName}'s rental stock: ${p.managementChallenges.charAt(0).toLowerCase() + p.managementChallenges.slice(1)}. ${cityName}'s ${sizeLabel(p)} need agents who know the ${p.postcode} area's tenant demographics and property maintenance requirements.`
    ];
  },
  matchingHeading: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Benefits of Our Property Management Matching in ${cityName}`;
    return `Why ${cityName}'s ${titleCase(p.propertyMix[0])} Landlords Need Specialist Management`;
  },
  matchingCards: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [
      { iconName: 'Star', title: "Local Expertise", desc: `Agents who specialise in ${cityName}'s rental market.` },
      { iconName: 'Shield', title: "Verified Specialists", desc: `All agents vetted for qualifications, insurance, and local experience.` },
      { iconName: 'Clock', title: "Fast Matching", desc: `Connected with agents within 48 hours.` },
      { iconName: 'CheckCircle', title: "Fee Comparison", desc: `Compare services and fees from multiple specialists.` }
    ];
    return [
      { iconName: 'Star', title: `${titleCase(p.propertyMix[0])} Expertise`, desc: `${cityName}'s rental market centres on ${mixList(p, 3)}. We match you with agents who handle these property types daily — from ${p.managementChallenges.split(',')[0].toLowerCase()} to the compliance requirements specific to the ${p.postcode} area.` },
      { iconName: 'Shield', title: "Full Compliance Coverage", desc: `Every matched agent provides complete compliance management — gas safety, EICR, EPC, deposit protection, and right-to-rent configured for ${sizeLabel(p)} in ${cityName}.` },
      { iconName: 'Clock', title: `${p.borough} Contractor Networks`, desc: `${p.rentalStock}. Your matched agent maintains vetted contractor relationships across the ${p.postcode} area for responsive, quality maintenance.` },
      { iconName: 'CheckCircle', title: "Tenant Quality Focus", desc: `${p.tenantBase}. Your matched agent targets these tenants through effective marketing and thorough referencing that minimises void periods and arrears risk.` }
    ];
  },
  sidebarCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Property Management in ${cityName}`, description: `Vetted specialists serving landlords throughout ${cityName}.` };
    return { heading: `Management Specialists for ${cityName}'s ${titleCase(p.propertyMix[0])}`, description: `Get matched with agents who manage ${p.propertyMix[0]} and ${p.propertyMix[1]} in the ${p.postcode} area. Free matching, no obligation.` };
  },
  sidebarFinance: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Competitive Management Fees`, description: `Property managers in ${cityName} offer transparent fee structures with no hidden charges.` };
    return { heading: `Transparent Fees for ${cityName}'s ${titleCase(sizeLabel(p))}`, description: `Management agents in our ${cityName} network provide clear fee schedules — typically 8-15% for full management — with no hidden charges or unexpected costs.` };
  },
  sidebarTrustPoints: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [{ text: "Free property assessment within 48 hours" }, { text: "All agents compliance-verified" }, { text: "Professional indemnity cover required" }];
    return [
      { text: `Specialists experienced with ${p.propertyMix[0]} in the ${p.postcode} area` },
      { text: `Compliance-verified agents serving ${p.borough} landlords` },
      { text: `Free property assessment — no obligation at any stage` },
    ];
  },
  bottomCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Find Your Property Management Specialist in ${cityName}`, description: `Connect with vetted agents who understand your property and local market.` };
    return { heading: `Get Matched With a ${cityName} Property Management Specialist`, description: `Whether you have ${p.propertyMix[0]}, ${p.propertyMix[2] || p.propertyMix[1]}, or any other rental property in ${cityName}, we match you with an agent who manages your property type every day.` };
  },
  faqs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [
      { question: `Do your agents cover ${cityName}?`, answer: `Yes, our network includes vetted property management specialists serving landlords throughout ${cityName}.` },
      { question: `Why use a matching service?`, answer: `We vet agents for local experience, compliance standards, and fee transparency so you don't have to.` },
      { question: `How much does management cost?`, answer: `8-15% of monthly rent for full management. All agents provide clear fee schedules upfront.` },
    ];
    return [
      { question: `What types of ${cityName} properties do your agents manage?`, answer: `Our ${cityName} network manages the property types that define the local market — particularly ${mixList(p, 3)}. ${p.managementChallenges}. Whether you're a ${p.avgPortfolioType === 'single-let' ? 'single-property landlord' : 'portfolio investor'} or a freeholder, we match you with an agent experienced with your property type.` },
      { question: `Why choose a specialist ${cityName} agent over a national chain?`, answer: `${p.rentalStock}. National chains apply generic processes, while local specialists understand ${cityName}'s tenant demographics, pricing dynamics, and the specific maintenance needs of ${p.postcode} area properties. Local knowledge directly translates to fewer void periods and better tenant retention.` },
      { question: `How much do property managers charge in ${cityName}?`, answer: `Full management fees range from 8-15% of monthly rent for ${sizeLabel(p)} in ${cityName}. Tenant-find-only services cost 4-8 weeks' rent as a one-off. ${p.avgPortfolioType === 'block-management' ? 'Block management is typically £150-£400 per unit per year.' : 'All agents provide transparent fee schedules with no hidden charges.'}` },
      { question: `Can I meet a property manager in ${cityName}?`, answer: `Yes — most agents in our ${cityName} network conduct free property assessments at your ${p.postcode} area property, providing face-to-face advice on rental value, compliance requirements, and management approach before you commit.` },
    ];
  },
  schemaServiceTypes: ["residential-lettings-management", "block-estate-management", "tenant-find-referencing", "property-maintenance-coordination", "rent-collection-arrears-management", "hmo-management"],
};
