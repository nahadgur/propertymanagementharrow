// data/cityContent.ts
import { getLocationProfileByName, type LocationProfile } from './locationProfiles';

function prof(city: string): LocationProfile | null { return getLocationProfileByName(city) || null; }
function titleCase(str: string): string { return str.replace(/\b\w/g, c => c.toUpperCase()); }
function sizeLabel(p: LocationProfile): string {
  switch (p.avgClientType) { case 'homeowner': return 'homeowners'; case 'small-investor': return 'property investors'; case 'portfolio': return 'portfolio holders'; case 'developer': return 'developers'; default: return 'property owners'; }
}
function mixList(p: LocationProfile, n: number = 3): string {
  const items = p.investorMix.slice(0, n);
  return items.length <= 1 ? items[0] : items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}

export const cityPageContent = {
  heroDesc: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Connect with specialist property tax accountants covering ${cityName}. Free matching, no obligation.`;
    return `From ${p.investorMix[0]} to ${p.investorMix[2] || p.investorMix[1]} — whatever your property tax situation in ${cityName}, we match you with a specialist who handles ${p.postcode} area property transactions every day. Free matching, no obligation.`;
  },
  introHeading: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Property Tax Services in ${cityName}`;
    return `Property Tax Advice for ${cityName}'s ${titleCase(p.investorMix[0])} and Beyond`;
  },
  introParagraphs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [`Property owners in ${cityName} face complex tax challenges across CGT, SDLT, IHT, and Section 24.`, `Our matching service connects you with specialists who understand these specific scenarios.`];
    return [
      `${p.marketContext} Our matching service connects you with property tax specialists who understand this local market — not generalists who treat every property transaction the same way.`,
      `The tax exposure here is specific to ${cityName}'s property economy: ${p.taxExposure.charAt(0).toLowerCase() + p.taxExposure.slice(1)}. ${cityName}'s ${sizeLabel(p)} need accountants who know the ${p.postcode} area market and the specific CGT, SDLT, and IHT scenarios it creates.`
    ];
  },
  matchingHeading: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Benefits of Specialist Property Tax Advice in ${cityName}`;
    return `Why ${cityName}'s ${titleCase(p.investorMix[0])} Need Specialist Property Tax Support`;
  },
  matchingCards: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [
      { iconName: 'Star', title: "Property Tax Expertise", desc: `Specialists in CGT, SDLT, IHT, and Section 24 covering ${cityName}.` },
      { iconName: 'Shield', title: "Verified Specialists", desc: `All accountants vetted for property tax expertise and qualifications.` },
      { iconName: 'Clock', title: "Local Knowledge", desc: `Accountants who understand ${cityName}'s property market.` },
      { iconName: 'CheckCircle', title: "Fee Comparison", desc: `Compare services and fees from multiple property tax specialists.` }
    ];
    return [
      { iconName: 'Star', title: `${titleCase(p.investorMix[0])} Tax Expertise`, desc: `${cityName}'s property market creates specific tax scenarios around ${mixList(p, 3)}. We match you with specialists who handle these exact situations — not generalists guessing at relief calculations.` },
      { iconName: 'Shield', title: "CGT and SDLT Planning", desc: `Every matched specialist provides pre-transaction CGT analysis, SDLT surcharge assessment, and 60-day return compliance configured for ${sizeLabel(p)} in the ${p.postcode} area.` },
      { iconName: 'Clock', title: `${p.borough} Market Knowledge`, desc: `${p.transactionTypes}. Your matched specialist understands these transaction types and the tax treatment each one demands.` },
      { iconName: 'CheckCircle', title: "IHT and Estate Planning", desc: `${cityName} property values create IHT exposure that many ${sizeLabel(p)} don't recognise until it's too late. Your specialist assesses exposure and implements lifetime planning strategies.` }
    ];
  },
  sidebarCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Property Tax Advice in ${cityName}`, description: `Specialist accountants serving property owners throughout ${cityName}.` };
    return { heading: `Property Tax Specialists for ${cityName}'s ${titleCase(p.investorMix[0])}`, description: `Get matched with accountants who handle ${p.transactionTypes.split(',')[0].toLowerCase()} in the ${p.postcode} area. Free matching, no obligation.` };
  },
  sidebarFinance: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Transparent Fees`, description: `Property tax specialists in ${cityName} provide fixed-fee quotes for defined work.` };
    return { heading: `Transparent Fees for ${cityName} ${titleCase(sizeLabel(p))}`, description: `Most property tax specialists provide fixed-fee quotes for CGT returns, SDLT calculations, and IHT reviews. Ongoing advisory work is typically priced monthly.` };
  },
  sidebarTrustPoints: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [{ text: "Free consultation within 48 hours" }, { text: "All specialists property tax verified" }, { text: "Professional indemnity cover required" }];
    return [
      { text: `Specialists experienced with ${p.investorMix[0]} in the ${p.postcode} area` },
      { text: `Property tax verified accountants serving ${p.borough} clients` },
      { text: `Free initial consultation — no obligation at any stage` },
    ];
  },
  bottomCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Find Your Property Tax Specialist in ${cityName}`, description: `Connect with experts who understand CGT, SDLT, IHT, and Section 24.` };
    return { heading: `Get Matched With a ${cityName} Property Tax Specialist`, description: `Whether you are dealing with ${p.investorMix[0]}, ${p.investorMix[2] || p.investorMix[1]}, or any other property tax situation in ${cityName}, we match you with a specialist who handles your scenario every day.` };
  },
  faqs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [
      { question: `Do your specialists cover ${cityName}?`, answer: `Yes, our network includes property tax specialists serving clients throughout ${cityName}.` },
      { question: `Why choose a property tax specialist?`, answer: `CGT, SDLT, IHT, and Section 24 interact in complex ways that general accountants rarely handle properly.` },
      { question: `How much do property tax specialists charge?`, answer: `Fixed fees for specific work (CGT returns, SDLT calculations) plus monthly retainers for ongoing advisory.` },
    ];
    return [
      { question: `What property tax situations do your ${cityName} specialists handle?`, answer: `Our ${cityName} network handles the scenarios that define the local market — particularly ${mixList(p, 3)}. ${p.taxExposure.split('.')[0]}. Whether you are a ${p.avgClientType === 'homeowner' ? 'homeowner selling or downsizing' : p.avgClientType === 'developer' ? 'developer structuring a project' : 'investor managing a portfolio'}, we match you with someone who handles your type of property tax work regularly.` },
      { question: `Why choose a ${cityName} property tax specialist over a general accountant?`, answer: `${p.transactionTypes}. General accountants miss CGT reliefs, overcalculate SDLT, and don't plan for IHT until it is too late. A specialist who works with ${cityName}'s ${sizeLabel(p)} catches issues that generalists miss and saves you money.` },
      { question: `How much do property tax specialists charge in ${cityName}?`, answer: `CGT returns typically cost £500-£1,500 depending on complexity. SDLT calculations £300-£800. IHT reviews £750-£2,500. Ongoing advisory for ${sizeLabel(p)} with active portfolios runs £150-£500/month. All specialists provide fixed-fee quotes before work begins.` },
      { question: `Can I meet a property tax specialist in ${cityName}?`, answer: `Most specialists in our ${cityName} network offer face-to-face or video consultations. For ${p.postcode} area property transactions, an initial meeting to review your situation is typically free and without obligation.` },
    ];
  },
  schemaServiceTypes: ["capital-gains-tax-planning", "property-company-structuring", "stamp-duty-advice", "non-resident-cgt", "property-development-tax", "inheritance-tax-property"],
};
