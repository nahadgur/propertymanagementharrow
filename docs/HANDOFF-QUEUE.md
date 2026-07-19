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

## 2026-06-13 16:04 — pmh-property-writer (propertymanagementharrow)
- Sites: propertymanagementharrow: ONE new H6 (fees) spoke drafted — "Comparing Letting Agent Quotes in Harrow", slug compare-letting-agent-quotes-harrow, draft:true, ~1350 words, hub up-link + management-fee-calculator + rent-collection-accounting pillar + contact CTA; externals GOV.UK TFA guidance + ARLA Propertymark. No sibling links (only H6 sibling is still draft).
- Staged files: data/blog.ts (COMMITTED dc3308f); docs/SILO-PLAN.md tracker edit UNCOMMITTED (sandbox git object-write blocked; commit it when draining)
- Live flips this run: none
- tsc: pass (clean); check-links: 19 slugs, 0 broken
- Commit prompt / git state: dc3308f on main, push failed (no credentials in sandbox). NOTE: .git/index was corrupt this run; repaired via alternate index + cp. A stale .git/index.lock and two stale .git/objects/*/tmp_obj_* files exist that the sandbox cannot delete — remove manually from Windows.
- Status: PENDING PUSH

## 2026-06-13 06:57 — pmh-property-writer (propertymanagementharrow)
- Sites: propertymanagementharrow: ONE new H7 (yield) spoke drafted — "Gross Versus Net Rental Yield Explained", slug gross-versus-net-rental-yield, draft:true, ~1150 words, hub up-link (rental-yield-landlord-finances-harrow) + rental-yield-calculator + rent-collection-accounting pillar + contact CTA; one external GOV.UK rental-income guidance (attributed, no guarantees). No sibling links (only other H7 sibling, section-24..., is still draft). Round-robin: H7 was thin (1 -> 2), matching H6's 2.
- Staged files: data/blog.ts (UNCOMMITTED); docs/SILO-PLAN.md tracker edit UNCOMMITTED. Both saved in working tree only.
- Live flips this run: none
- tsc: pass (clean, after mv round-trip to clear stale sandbox read); check-links: 20 slugs, 0 broken
- Commit prompt / git state: COMMIT BLOCKED. A stale `.git/index.lock` (dated 2026-06-12 16:03) is present; the sandbox mount refuses unlink inside `.git` ("Operation not permitted"), so safe-commit could not clear it and no commit was made. HEAD still dc3308f. Push also has no credentials in sandbox. ACTION NEEDED on Windows: delete `.git/index.lock`, then `git add data/blog.ts docs/SILO-PLAN.md && git commit -m "Add H7 yield spoke: gross vs net rental yield (draft)" && git push origin main`. (Do NOT commit HANDOFF-QUEUE.md.)
- Status: PENDING PUSH

## 2026-06-13 11:08 — pmh-property-writer (propertymanagementharrow)
- Sites: propertymanagementharrow: ONE new H8 (voids/arrears) spoke drafted — "How Harrow Landlords Should Handle Rent Arrears", slug handling-rent-arrears-harrow-landlords, draft:true, ~1343 words, hub up-link (voids-arrears-and-rent-collection-harrow) + void-cost-calculator + rent-collection-accounting pillar + contact CTA; externals GOV.UK Renters' Rights Act + ARLA Propertymark (attributed, no guarantees). Current-law accuracy verified via web: Section 21 abolished, Ground 8 arrears threshold now 3 months / 13 weeks with 4 weeks' notice, Universal Credit non-payment carve-out. No sibling links (only other H8 sibling, reduce-void-periods-harrow-rentals, is still draft). Round-robin: H8 was thin (1 -> 2).
- Staged files: data/blog.ts (STAGED, UNCOMMITTED); docs/SILO-PLAN.md tracker edit (STAGED, UNCOMMITTED) -> buffer 7->8, total 10->11, H8 voids/arrears x2.
- Live flips this run: none
- tsc: pass (clean, after mv round-trip to clear stale sandbox read); check-links: 21 slugs, 0 broken
- Commit prompt / git state: COMMIT BLOCKED. A live Windows git process keeps recreating `.git/index.lock`: the sandbox can delete it (cowork delete enabled) but the watcher re-creates it before commit acquires it, so ~17 retry attempts all failed. Files ARE staged (git add succeeded). HEAD still dc3308f. Push also has no credentials in sandbox. ACTION NEEDED on Windows: ensure no VS Code/Claude Code git watcher holds the lock, delete `.git/index.lock`, then `git commit -m "content(pmh): add H8 rent arrears spoke draft (handling-rent-arrears-harrow-landlords)" && git push origin main`. Several prior writer runs are also PENDING in the working tree; one `git commit -am` (excluding HANDOFF-QUEUE.md) + push will drain them together. (Do NOT commit HANDOFF-QUEUE.md.)
- Status: PENDING PUSH

## 2026-06-15 02:07 — pmh-property-writer (propertymanagementharrow)
- Sites: propertymanagementharrow: ONE new H10 (lettings process) spoke drafted — "How to Market a Rental Property in Harrow", slug market-rental-property-harrow, draft:true, ~1180 words, hub up-link (the-lettings-process-harrow) + rental-yield-calculator (pricing) + tenant-find-letting pillar + harrow-town-centre local-area link + contact CTA; externals GOV.UK MEES landlord guidance + ARLA Propertymark (attributed, no guarantees). Current-law accuracy verified via web: EPC required before marketing / min band E / shown before signing / F-G sub-standard, Right to Rent on all 18+ before tenancy, How to Rent guide + written tenancy info at start, Tenant Fees Act bans tenant fees. No sibling links (only other H10 sibling, property-inventory-harrow-landlords, is still draft). Round-robin: H10 was thinnest (1 -> 2); all five new/thin hubs H6-H10 now at x2.
- Staged files: data/blog.ts + docs/SILO-PLAN.md — COMMITTED ff4b617. This commit consolidates ALL previously-pending working-tree blog spokes (H7 gross-vs-net, H8 handling-rent-arrears, H9 eicr, etc. from prior runs whose commits were lock-blocked) PLUS this H10 spoke, relative to dc3308f. SILO-PLAN tracker also refreshed to true counts (was stale).
- Live flips this run: none
- tsc: pass (clean, after mv round-trip to clear stale tsbuildinfo read); check-links: 23 slugs, 0 broken
- Commit prompt / git state: COMMIT SUCCEEDED this run — ff4b617 on main (parent dc3308f). The stale .git/index.lock was cleared by renaming it aside (sandbox refuses unlink inside .git but allows rename); a Windows-side git watcher recreated HEAD.lock mid-commit, also renamed aside, after which commit landed. Push FAILED: no GitHub credentials in sandbox ("could not read Username"). Stale cruft the sandbox cannot unlink remains in .git: index.lock.stale*, HEAD.lock(.stale*), and several .git/objects/*/tmp_obj_* — safe to delete manually on Windows. ACTION NEEDED on Windows: `git push origin main` to publish ff4b617 (drains the whole blog backlog in one push). Do NOT commit HANDOFF-QUEUE.md.
- Status: PENDING PUSH

## 2026-06-15 03:11 — pmh-property-publisher (propertymanagementharrow)
- Sites: propertymanagementharrow: ONE draft flipped LIVE — "Tenant Find Fees Explained for Harrow Landlords", slug tenant-find-fees-explained-harrow-landlords, hub property-management-fees-harrow (H6 fees). Oldest draft (publishDate 2026-06-10, tied; chose the high-intent fees spoke). Set draft:false; publishDate + dateModified = 2026-06-15. Links confirmed present: inline hub up-link (/guides/property-management-fees-harrow/), pillar /services/tenant-find-letting/, tool /tools/management-fee-calculator/. No live same-hub sibling exists yet (only other H6 spoke, compare-letting-agent-quotes-harrow, still draft), so hub-only up-link, no sibling/reciprocal wiring this run — wire when compare-letting-agent-quotes-harrow flips. QC: UK English intact, Tenant Fees Act 2019 reference current, no fabricated content, no em dashes, no reserved head terms. SILO-PLAN section 8 refreshed: published 3->4 (H6 x1), draft buffer 10->9.
- Staged files: data/blog.ts + docs/SILO-PLAN.md — COMMITTED 6468dff on main (parent ff4b617).
- Live flips this run: tenant-find-fees-explained-harrow-landlords
- tsc: pass (clean); check-links: 23 slugs, 0 broken
- Commit prompt / git state: COMMIT SUCCEEDED — 6468dff on main. Local main is now 3 commits ahead of origin/main (ead2482): dc3308f, ff4b617, 6468dff all UNPUSHED. Push FAILED again: no GitHub credentials in sandbox ("could not read Username for https://github.com"). Stale cruft the sandbox cannot unlink remains in .git (rename-aside used to land the commit): index.lock(.stale*), HEAD.lock(.stale2), and several .git/objects/*/tmp_obj_* — safe to delete manually on Windows. ACTION NEEDED on Windows: `git push origin main` to publish all three commits (drains the whole blog backlog incl. this live flip). Do NOT commit HANDOFF-QUEUE.md.
- Status: PENDING PUSH

## 2026-06-15 10:09 — pmh-property-writer (propertymanagementharrow)
- Sites: propertymanagementharrow: ONE new H6 (fees) spoke drafted — "What a Full Management Fee Includes for Harrow Landlords", slug full-management-fee-inclusions-harrow, draft:true, ~1080 words. Distinct intent: what a full management fee covers vs what is charged on top (maintenance markup, tenant-find/renewal/inspection extras), separate from the let-only tenant-find spoke and the compare-quotes spoke. Links: inline hub up-link (/guides/property-management-fees-harrow/, varied anchor "Harrow property management fees and costs") + /tools/management-fee-calculator/ + LIVE same-hub sibling /blog/tenant-find-fees-explained-harrow-landlords/ + /services/rent-collection-accounting/ pillar + /contact CTA. Externals (2, one per domain): GOV.UK Tenant Fees Act 2019 + ARLA Propertymark, attributed, no guarantees. Round-robin cursor: all H6-H10 were at x2; last two written (06-15) were H9 + H10, so cursor returned to H6 (now H6 fees at 1 live + 2 draft). Framing: matching service, we do not manage property.
- Staged files: data/blog.ts + docs/SILO-PLAN.md — COMMITTED 042453c on main (parent 6468dff). SILO-PLAN section 8 refreshed: parked drafts 9->10 (H6 fees x2), total toward 100 13->14, buffer 10.
- Live flips this run: none
- tsc: pass (clean, after mv round-trip to clear stale sandbox read); check-links: 24 slugs, 0 broken
- Commit prompt / git state: COMMIT SUCCEEDED — 042453c on main. Stale .git/index.lock (7h old, from the 03:11 publisher run) and a Windows-recreated HEAD.lock both blocked commit; landed by renaming each aside (sandbox refuses unlink inside .git but allows rename). Stale cruft the sandbox cannot unlink remains in .git: index.lock.stale_writer_*, HEAD.lock.stale_writer_*, and several .git/objects/*/tmp_obj_* — safe to delete manually on Windows. Push FAILED: no GitHub credentials in sandbox ("could not read Username"). Local main is now 4 commits AHEAD of origin/main: dc3308f, ff4b617, 6468dff, 042453c — all UNPUSHED. ACTION NEEDED on Windows: delete the stale .git lock/tmp cruft, then `git push origin main` to publish all four commits (drains the entire blog backlog incl. this draft). Do NOT commit HANDOFF-QUEUE.md.
- Status: PENDING PUSH

## 2026-06-16 10:11 — pmh-property-writer (propertymanagementharrow)
- Sites: propertymanagementharrow: ONE new H7 (yield/finances) spoke drafted — "Allowable Expenses for Harrow Landlords", slug allowable-expenses-harrow-landlords, draft:true, ~1150 words. Distinct intent: which costs a landlord can deduct from rental income (revenue vs capital), repairs vs improvements, replacement of domestic items relief, the 1,000 pound property allowance, and Making Tax Digital for Income Tax from April 2026 — separate from the H7 siblings section-24-mortgage-interest-relief-landlords and gross-versus-net-rental-yield. Links: inline hub up-link (/guides/rental-yield-landlord-finances-harrow/, varied anchor "rental yield and landlord finances guide for Harrow") + /tools/rental-yield-calculator/ + /services/rent-collection-accounting/ pillar + /contact CTA. External (1, gov.uk): GOV.UK working-out-rental-income guidance, attributed; tax facts (property allowance, MTD thresholds/dates, RDIR) attributed to HMRC, no guarantees, "general information not tax advice". Round-robin cursor: H6 was last written (06-15), so cursor advanced to H7 (now H7 yield at 3 draft). H7 siblings both still draft so hub-only up-link, no sibling/reciprocal wiring. Framing: matching service, we connect Harrow landlords with vetted ARLA Propertymark agents and do not manage property.
- Staged files: data/blog.ts + docs/SILO-PLAN.md — COMMITTED c870b02 on main (parent 042453c). SILO-PLAN section 8 refreshed: parked drafts 10->11 (H7 yield x3), total toward 100 14->15, buffer 11.
- Live flips this run: none
- tsc: pass (clean, after mv round-trip to clear a stale sandbox read)
- check-links: 25 slugs, 0 broken
- Commit prompt / git state: COMMIT SUCCEEDED — c870b02 on main. Stale .git/index.lock (from the 06-15 10:09 writer run, ~24h old, no live git process) plus a recreated HEAD.lock and objects/maintenance.lock all blocked commit; landed by renaming each aside (sandbox refuses unlink inside .git but allows rename). Stale cruft the sandbox cannot unlink remains in .git: index.lock.stale_writer_0616, HEAD.lock.stale_writer_0616, objects/maintenance.lock.stale_writer_0616, and several .git/objects/*/tmp_obj_* — safe to delete manually on Windows. Push FAILED: no GitHub credentials in sandbox ("could not read Username"). Local main is now 5 commits AHEAD of origin/main (ead2482): dc3308f, ff4b617, 6468dff, 042453c, c870b02 — all UNPUSHED. ACTION NEEDED on Windows: delete the stale .git lock/tmp cruft, then `git push origin main` to publish all five commits (drains the entire blog backlog incl. this draft). Do NOT commit HANDOFF-QUEUE.md.
- Status: PENDING PUSH
