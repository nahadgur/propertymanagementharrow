# Handoff queue — propertymanagementharrow

Run-blocks from the pmh-property-writer scheduler. Newest at the bottom.

## 2026-06-10 — pmh-property-writer

- Site: propertymanagementharrow
- Spoke written: `tenant-find-fees-explained-harrow-landlords`
- Hub: H6 `property-management-fees-harrow` (first spoke for this thin hub)
- draft: true (parked for the publisher)
- Body ~932 words + 6 FAQs. 5 H2 sections, 2 lists.
- Linking: UP-link to /guides/property-management-fees-harrow/; pillar link to
  /services/tenant-find-letting/; calculator link to /tools/management-fee-calculator/;
  matching-service CTA (modal). External: GOV.UK Tenant Fees Act 2019 guidance (1),
  ARLA Propertymark named. Within-site, silo-tight.
- Schema: Article + BreadcrumbList + FAQPage emitted by the blog route from the data
  fields (faqs + datePublished/dateModified + PMH editorial author @id).
- Code note: added optional `html?` field to `ContentBlock` and an `html` render
  branch in `app/blog/[slug]/BlogPostContent.tsx` so spoke paragraphs can carry
  inline internal links (the `p`/`text` renderer is plain-text only). Existing
  posts unaffected.
- Build note: `data/blog.ts` had been checked out with CRLF endings; the Edit tool
  truncated mid-insert. Restored from HEAD (LF), reapplied via LF-safe script. File
  is now LF per the fleet `.gitattributes` rule. Worth a glance if other repos in
  the fleet show stray CRLF in the working tree.
- tsc: `npx tsc --noEmit` clean (dev server left running, no `next build`).
- git: committed to main; push status noted in the run report.
