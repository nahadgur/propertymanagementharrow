# Property Management Harrow (propertymanagementharrow) — silo plan

Niche: residential property management / lettings, Harrow. Independent **matching**
service connecting landlords with vetted ARLA Propertymark agents (does not manage
property itself). Domain propertymanagementharrow.co.uk. UK English. Financial/legal-
adjacent (rental income, compliance) so accuracy matters. Rich repo: 5 hand-coded
`/guides`, `/blog` (6 spokes), `/services`, landlord-persona pages `/landlords/[avatar]`,
3 calculators `/tools`, and THREE location systems (`/location/[city]`, `/locations`,
`/harrow/[area]`).

Status: 5 hand-coded guides, 6 blog spokes, no data-driven hub layer. Build: make
`/guides` data-driven and expand 5 -> 10 hubs, add the draft gate, build spokes to
~100. Verify testimonials (see section 0).

## 0. Audit flags (fix during the build)

- **Testimonials:** `data/site.ts` `testimonials = [...]` has no "real/empty-until"
  guard (unlike the sister sites). VERIFY these are real, attributable reviews; if
  invented, empty the array (fabricated reviews = DMCCA + E-E-A-T risk).
- **Location-route sprawl:** three systems (`/location/[city]`, `/locations`,
  `/harrow/[area]`) risk duplicate/competing local pages. Pick ONE canonical local
  system, 308 the others, and keep the rest as internal sections. Confirm before the
  writer wires location links.

## 1. Reserved head terms (not targeted by spokes)

| Reserved | Owned by |
|---|---|
| property management Harrow / letting agent Harrow | Homepage + the property-management-harrow pillar |
| property management [area] (Pinner, Stanmore, Wealdstone...) | the chosen location system |
| each hub head term (HMO licensing, deposit protection, tenant screening...) | the matching `/guides/` hub |

## 2. The ten pillar hubs (/guides)

Existing 5 hand-coded guides become H1-H5; add H6-H10.

| ID | Hub | From |
|---|---|---|
| H1 | Choosing and switching a property manager | switching-property-managers (exists) |
| H2 | Landlord compliance and legal obligations | landlord-compliance-checklist (exists) |
| H3 | HMO licensing in Harrow | hmo-licensing-harrow (exists) |
| H4 | Tenant screening and referencing | tenant-screening-best-practices (exists) |
| H5 | Deposit protection | deposit-protection-guide (exists) |
| H6 | Property management fees and costs | new (-> management-fee-calculator) |
| H7 | Rental yield and landlord finances | new (-> rental-yield-calculator) |
| H8 | Voids, arrears and rent collection | new (-> void-cost-calculator) |
| H9 | Repairs, maintenance and safety certificates | new (gas/EICR/EPC) |
| H10 | The lettings process: marketing, viewings and tenancy agreements | new |

## 3. Map the 6 existing blog spokes to hubs

- H1: "Choosing the Right Property Manager in 2026"; "How to Switch Property Managers
  in Harrow Without Disrupting Your Tenants".
- H3: "HMO Licensing in Harrow 2026: Complete Landlord Checklist".
- (map the remaining blog posts to H2/H4/H5 by topic during the build.)

## 4. Spoke fan-out to ~100 (10/hub, Harrow + UK-law framed)

- **H1 choosing/switching:** what a property manager does; full vs let-only vs rent-collection; questions to ask an agent; signs of a bad agent; how to switch mid-tenancy; notice periods to your current agent; ARLA Propertymark explained; self-manage vs use an agent.
- **H2 compliance:** the landlord compliance checklist; Right to Rent checks; the How to Rent guide requirement; landlord licensing (selective/additional); EPC minimum rating (MEES); Renters' Rights / Renters Reform updates; penalties for non-compliance.
- **H3 HMO:** what counts as an HMO; Harrow HMO licence application; HMO standards (room sizes, amenities); mandatory vs additional licensing in Harrow; HMO fire safety; HMO management duties; penalties for an unlicensed HMO.
- **H4 tenant screening:** referencing checks explained; credit checks; guarantors; Right to Rent vs referencing; dealing with adverse references; tenant fraud red flags; reference a self-employed tenant.
- **H5 deposits:** the deposit protection schemes (DPS, MyDeposits, TDS); how to protect a deposit; deadlines and penalties; the prescribed information; deposit deductions and disputes; the 5-week cap (Tenant Fees Act); end-of-tenancy deposit returns.
- **H6 fees:** typical management fee percentages; what's included vs extra; setup/tenant-find fees; fee transparency (Tenant Fees Act for landlords); how to compare quotes; are fees tax-deductible.
- **H7 yield:** how to calculate rental yield; gross vs net yield; improving yield; landlord tax basics (Section 24, allowable expenses); incorporation considerations; capital gains on a rental; Harrow rental market context.
- **H8 voids/arrears:** reducing void periods; the cost of a void; handling rent arrears; rent guarantee insurance; the eviction process (Section 21/Section 8 and reform changes); chasing arrears compliantly.
- **H9 repairs/safety:** gas safety certificates (CP12); EICR electrical checks; EPC requirements; smoke and CO alarms; the repairing obligations; Awaab's Law / damp and mould; emergency repairs and out-of-hours.
- **H10 lettings process:** how to market a rental; pricing the rent; viewings and offers; the tenancy agreement (AST); the inventory and check-in; renewals vs new tenancy; ending a tenancy correctly.

## 5. Architecture prerequisite (Claude Code, before the writer runs)

1. Make `/guides` data-driven: `app/guides/[slug]` + `data/guides.ts` with the 10
   hubs; migrate the 5 hand-coded guides to data (308 any URL changes); hub pages
   render a child-spoke grid by `hub`. Update nav + sitemap.
2. `data/blog.ts`: add `hub: string` + `draft: boolean`; set `hub` on the 6 existing
   spokes. Draft gate: draft:true 404s, excluded from /blog, hub grids, sitemap.
3. Schema: Article + BreadcrumbList + FAQPage on hubs + spokes, author `@id`,
   datePublished + dateModified.
4. Author byline = "PMH" (Property Management Harrow), an editorial entity `@id` (no
   invented person).
5. Resolve the testimonials + location-route flags (section 0).
6. UK-English check.

## 6. Internal-linking rules (silo-tight, within-site)

- Each spoke links UP once to its hub, to its `/services/<serviceSlug>/` pillar (and a
  local-area page where local), plus the matching CTA; link the relevant calculator
  where it fits (fees->management-fee, yield->rental-yield, voids->void-cost).
- Hubs link down to spokes + service pillar; sideways to 1-2 adjacent hubs (H2<->H3
  compliance/HMO, H5<->H4 deposits/screening, H6<->H7 fees/yield, H8<->H10).
- Landlord-persona pages (`/landlords/[avatar]`) link to the most relevant hubs.
- External: max 2/page, one per domain, named authority (GOV.UK landlord guidance,
  ARLA Propertymark, the deposit schemes, Harrow Council licensing) first mention;
  attribute legal/financial claims (current Renters' Rights / tax rules).

## 7. Automation (schedulers, mirror essexdental)

- **`pmh-property-writer`** (writer): one Harrow + UK-landlord-law-framed spoke per
  run, draft:true, under the right hub, schema + up-link + pillar/calculator link +
  matching CTA. Created DISABLED until section 5 exists.
- **`pmh-property-publisher`** (publisher): flips the oldest parked draft live 2/week;
  enable after a reviewed batch (compliance accuracy matters).

## 8. Status tracker

10 hubs live (data-driven). Spokes target ~100 (10/hub).

Published spokes: 4 (H1 x2, H3 x1, H6 x1). Parked drafts: 11 (H6 fees x2, H7 yield
x3, H8 voids/arrears x2, H9 repairs/safety x2, H10 lettings process x2). Total
spokes toward 100: 15. Draft buffer: 11.

Live flip 2026-06-15: tenant-find-fees-explained-harrow-landlords (H6 fees). No
live same-hub sibling yet, so hub-only up-link; compare-letting-agent-quotes-harrow
(H6) still draft, wire reciprocal sibling links when it flips.

Writer 2026-06-15 (round-robin cursor -> H6): added draft
full-management-fee-inclusions-harrow (H6 fees, intent: what a full management fee
includes vs extra). Up-link to property-management-fees-harrow hub, management-fee
calculator, live sibling tenant-find-fees-explained-harrow-landlords, /contact CTA;
externals GOV.UK Tenant Fees Act + ARLA Propertymark. tsc clean, 0 broken links.
COMMIT BLOCKED by a ~7h-stale .git/index.lock the sandbox cannot unlink; changes
are on disk uncommitted (see HANDOFF-QUEUE).

Writer 2026-06-16 (round-robin cursor -> H7): added draft
allowable-expenses-harrow-landlords (H7 yield/finances, intent: which costs a
landlord can deduct from rental income, repairs vs improvements, property
allowance, replacement of domestic items relief, Making Tax Digital from
April 2026). Up-link to rental-yield-landlord-finances-harrow hub, rental-yield
calculator, rent-collection-accounting pillar, /contact CTA; external GOV.UK
rental-income guidance. H7 siblings (section-24, gross-vs-net) still draft so
hub-only up-link, no sibling wiring. tsc clean, 0 broken links.

## Slug rules (writer: follow on every spoke)

Kebab-case: lowercase, hyphens only, ASCII only, 3-6 words, under ~60 chars.
Do NOT: include a year/date; reuse or near-duplicate an existing slug; use a
reserved head term or the parent hub's head term; keyword-stuff or repeat a word;
use stop words (a/the/to/for). Never rename or reuse a published slug.
