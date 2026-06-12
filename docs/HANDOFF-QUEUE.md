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
- git: committed to main as `86e2525`. Push FAILED in the sandb
## 2026-06-10 pmh-property-writer run
- Site: propertymanagementharrow
- Spoke: section-24-mortgage-interest-relief-landlords
- Hub: H7 rental-yield-landlord-finances-harrow
- draft: true
- Links: UP /guides/rental-yield-landlord-finances-harrow/, pillar /services/rent-collection-accounting/, calc /tools/rental-yield-calculator/, local /harrow/wealdstone/, CTA /contact/, external GOV.UK landlord tax-relief guidance
- tsc: clean (rename round-trip to clear stale tsbuildinfo)
- git: NOT committed. Blocked by a stale `.git/index.lock` (0 bytes, dated 2026-06-10 06:25, left by an earlier crashed run). The Cowork sandbox cannot remove it (Operation not permitted on the Windows mount). ACTION NEEDED on Windows: `del "C:\Users\Jerwin\Desktop\claude code\propertymanagementharrow\.git\index.lock"`, then `git add -A && git commit -m "content(pmh): add H7 spoke Section 24 mortgage interest relief (draft)" && git push origin main`. Edits are written to `data/blog.ts` (new draft spoke) and `docs/SILO-PLAN.md` (section 8 counts), ready to stage.

## 2026-06-11 — pmh-property-writer

- Site: propertymanagementharrow
- Spoke written: `reduce-void-periods-harrow-rentals`
- Hub: H8 `voids-arrears-and-rent-collection-harrow` (first spoke for this thin hub)
- draft: true (parked for the publisher)
- Body ~1150 words + 6 distinct FAQs. 5 H2 sections, 1 list. Narrower than the hub
  head term (void reduction, not voids/arrears/rent collection broadly).
- Linking (silo-tight, within-site): UP-link to /guides/voids-arrears-and-rent-collection-harrow/;
  pillar link to /services/tenant-find-letting/; calculator link to /tools/void-cost-calculator/
  (correct H8 -> void-cost mapping); local-area link /harrow/harrow-on-the-hill/; matching-service
  CTA to /contact/. No sibling links (no published H8 spoke yet). External: 1, GOV.UK Renters'
  Rights Act collection, named authority on first mention. Matching framing throughout
  (connect landlords with vetted ARLA Propertymark agents; do not manage property).
- Law check: cited current law accurately. Renters' Rights Act in force 1 May 2026,
  Section 21 abolished, all assured tenancies periodic, tenant notice two months. Verified
  via web search this run. No guarantees made; flagged as general guidance not advice.
- Schema: Article + BreadcrumbList + FAQPage emitted by the blog route from the data
  fields (faqs + datePublished/dateModified + PMH editorial author @id). No invented person.
- tsc: `npx tsc --noEmit` clean. First pass threw a phantom "Unterminated string literal"
  from a stale incremental build; cleared with a rename round-trip (could not rm the
  read-only tsconfig.tsbuildinfo on the mount, but the round-trip was enough). LF endings
  intact, no CRLF in data/blog.ts.
- Link gate: `node scripts/check-links.mjs .` → 16 slugs, 0 broken.
- git: committed to main as `ba12c1f` (data/blog.ts + docs/SILO-PLAN.md, 2 files).
  Push FAILED in the sandbox: no GitHub credentials available here
  (`could not read Username for 'https://github.com'`). A stale 0-byte
  `.git/index.lock` (dated 2026-06-11 02:28) then reappeared and the sandbox cannot
  unlink it (Operation not permitted on the Windows mount), so this handoff-log edit
  is written to docs/HANDOFF-QUEUE.md on disk but is NOT itself committed. ACTION
  NEEDED on Windows: `del "C:\Users\Jerwin\Desktop\claude code\propertymanagementharrow\.git\index.lock"`,
  then `git add -A && git commit -m "docs(pmh): log H8 void spoke handoff" && git push origin main`
  to publish both the spoke commit (ba12c1f, already made) and this log entry.
- Counts (SILO-PLAN section 8): published 3, parked drafts 3 (H6, H7, H8), total toward
  100 = 6, draft buffer 3. Next: round-robin to H9 (repairs/safety) or H10 (lettings
  process), both still at zero spokes.

## 2026-06-11 — pmh-property-writer (run 2)

- Site: propertymanagementharrow
- Spoke written: `gas-safety-certificate-harrow-landlords`
- Hub: H9 `repairs-maintenance-and-safety-certificates-harrow` (first spoke for this
  thin hub; chosen by round-robin as H9 was at zero spokes).
- draft: true (parked for the publisher)
- Body ~1000 words + 6 distinct FAQs. 5 H2 sections, narrower than the hub head term
  (gas safety certificates specifically, not repairs/maintenance/safety broadly).
- Linking (silo-tight, within-site): UP-link to
  /guides/repairs-maintenance-and-safety-certificates-harrow/; pillar link to
  /services/residential-lettings-management/; matching-service CTA to /contact/. No
  calculator link (none of the three calculators maps to repairs/safety, per SILO-PLAN
  section 6). No sibling links (no published H9 spoke yet). External: 2, one per domain,
  named authorities first mention: GOV.UK Renters' Rights Act collection, HSE landlords
  gas safety guidance.
- Law check: cited current law accurately. Gas Safety (Installation and Use) Regulations
  1998 (annual check by Gas Safe registered engineer, record to existing tenants within
  28 days and to new tenants before move-in, keep records two years). Renters' Rights Act
  in force 1 May 2026, Section 21 abolished, so a missing gas record no longer invalidates
  possession; the safety duty and HSE/local-authority penalties remain. Verified via web
  search this run. No guarantees; flagged as general guidance not advice. PMH editorial
  byline, no invented person.
- Schema: Article + BreadcrumbList + FAQPage emitted by the blog route from the data
  fields (faqs + datePublished/dateModified + PMH editorial author @id).
- Counts (SILO-PLAN section 8) updated on disk: published 3, parked drafts 4 (H6, H7, H8,
  H9), total toward 100 = 7, draft buffer 4. Next: H10 (lettings process), still zero spokes.

- ⚠️ VERIFY + COMMIT NOT DONE THIS RUN — sandbox mount corruption. The Cowork bash
  sandbox served TRUNCATED working-tree copies of several files: `data/blog.ts` was capped
  at 41568 bytes (cut mid-entry at `dateModified`), and `app/blog/[slug]/BlogPostContent.tsx`
  (116 lines, cut mid-line) and `app/guides/[slug]/GuideHubContent.tsx` showed as spuriously
  "modified" vs HEAD because the mount's copies were truncated. The mount would not refresh
  the cached copies (mtime frozen at 02:26) and disallows rm/cp (Operation not permitted).
  The WINDOWS-SIDE files are correct and complete — `data/blog.ts` verified via the editor
  (full new entry, closes cleanly at the array `];`, exports intact, LF). Running
  `npx tsc --noEmit`, the link gate, or `safe-commit.sh` through the mount would have either
  thrown false errors or COMMITTED TRUNCATED FILES into the live repo, so all three were
  deliberately skipped.
- ACTION NEEDED on Windows (Claude Code, native — not the sandbox mount):
  1. If a stale lock exists: `del "C:\Users\Jerwin\Desktop\claude code\propertymanagementharrow\.git\index.lock"`.
  2. `cd` to the repo, then `npx tsc --noEmit` (expect clean; rename round-trip if a stale
     tsbuildinfo throws a phantom error).
  3. `node "C:\Users\Jerwin\Desktop\claude code\scripts\check-links.mjs" .` (expect 0 broken;
     all H9 spoke targets verified to exist on disk).
  4. Remove the stray untracked marker `data/.synctest` (created by this run to test mount
     sync; the sandbox could not delete it). `del "...\data\.synctest"`.
  5. `git add data/blog.ts docs/SILO-PLAN.md docs/HANDOFF-QUEUE.md` then
     `git commit -m "content(pmh): add H9 spoke gas safety certificates (draft)"` and
     `git push origin main`.
  Also still pending from earlier runs per the blocks above: commit ba12c1f (H8) needs a
  push, and the H7 spoke may still be uncommitted — check `git log`/`git status` on Windows.

## 2026-06-12 — pmh-property-writer

- Site: propertymanagementharrow
- Spoke written: `property-inventory-harrow-landlords`
- Hub: H10 `the-lettings-process-harrow` (first spoke for this hub; round-robin
  picked H10 as the only thin hub with zero spokes)
- draft: true (parked for the publisher)
- Title: "Why a Property Inventory Protects Harrow Landlords" (narrower than the hub
  head term; no colon-triad, no em dash, UK English)
- Body ~1,336 words + 6 FAQs. 5 H2 sections, 2 lists. Topic: the property inventory
  and check-in/check-out report as deposit-dispute evidence; damage vs fair wear and
  tear; independent vs agent-prepared inventories. Harrow substance (Hatch End
  corporate lets, furnished/higher-value stock).
- Linking (silo-tight): UP-link to /guides/the-lettings-process-harrow/; sideways to
  the /guides/deposit-protection-guide/ hub (inventory is the deposit-dispute
  evidence base); pillar link to /services/tenant-find-letting/; local-area link to
  /harrow/hatch-end/; matching CTA to /contact/. No same-hub siblings published yet,
  so no sibling links (parent hub only). No /tools/ calculator fits this topic, so
  none linked. External: GOV.UK tenancy deposit protection (1 link, named authority).
- Law cited: tenancy deposit protection rules and the scheme adjudication process,
  attributed to GOV.UK; framed as general guidance, not advice. No fabricated
  reviews/agents/credentials; matching framing kept (we connect, we do not manage).
- Schema: Article + BreadcrumbList + FAQPage auto-emitted by app/blog/[slug]/page.tsx
  from the data fields, with the PMH editorial author @id, datePublished +
  dateModified (2026-06-12).
- tsc: `npx tsc --noEmit` clean (exit 0). Link gate: `check-links.mjs .` → 18 slugs,
  0 broken.
- MOUNT BUG RECURRED and was RESOLVED this run. The Cowork bash sandbox again served a
  TRUNCATED working-tree copy of `data/blog.ts` (capped at the old 50130-byte size,
  cut mid-line at the new entry's `featuredImage`; no NUL padding, the sync just would
  not grow the cached inode). Fix applied: wrote the exact tail (`featuredImage`→EOF)
  to a fresh small file `data/_newtail.txt` (new inodes DO sync at full size), spliced
  it onto the mount's good 50130-byte prefix in bash (`head -301 + cat tail`), and
  `cp`'d the result over `data/blog.ts` on the mount. The same splice fix was applied
  to this handoff doc. After that, tsc and the link gate ran clean against a complete
  file and the commit captured correct content. Acquired Cowork delete permission to
  remove the temp files; deleted the stray `data/.synctest` pre-commit so it is not
  tracked.
- This commit lands BOTH the parked H9 `gas-safety-certificate-harrow-landlords`
  (written but never committed by the 2026-06-11 run due to the same bug) and this H10
  spoke. SILO-PLAN section 8 updated: 8 spokes toward 100, draft buffer 5.
- git: see commit hash + push result reported at end of run.
- git RESULT: committed to main as `45c34f0` (data/blog.ts + docs/SILO-PLAN.md +
  docs/HANDOFF-QUEUE.md, 3 files; lands both the H9 gas-safety and H10 inventory
  spokes). Cleared a stale 0-byte `.git/index.lock` (dated 2026-06-12 04:02) to get
  the commit through. PUSH FAILED in the sandbox: `could not read Username for
  'https://github.com'` (no GitHub credentials here). Branch is `ahead 1`. ACTION
  NEEDED on Windows: `cd` to the repo and `git push origin main`. Earlier-run commits
  (H6 86e2525, H8 ba12c1f) appear already on origin per `git status` being in sync
  before this commit, so only 45c34f0 is outstanding.
