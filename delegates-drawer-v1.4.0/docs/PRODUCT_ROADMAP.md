# Delegates' Drawer — Complete Recommendations & Product Roadmap

This roadmap combines the CMA study-guide audit with the usability, reliability, accessibility, privacy, and MUN-workflow recommendations for the Bureau of Immigration delegation. “Implemented in 1.3” refers to features in this archive; “Next” identifies work that still requires a future release or conference-specific decisions.

## Product principles

1. **Evidence before confidence.** Every consequential factual or legal claim should connect to a source, exact supporting passage, date, and caveat.
2. **Mandate-aware drafting.** The app should flag proposals that might exceed the named actor's authority; it cannot itself certify legality.
3. **Conference-guide fidelity.** Preserve the CMA guide's agenda framing, definitions, chronology, previous attempts, conclusion, QARMAs, and references. Clearly label any inference or outside research.
4. **Delegate speed.** Frequently used information should be reachable in one or two clicks; print and copy actions should work during committee preparation.
5. **Local-first, honest security.** Explain what is stored locally, what a backup contains, and that the PIN is not encryption.
6. **Responsive and accessible.** Support desktop and mobile widths, keyboard navigation, visible focus, readable contrast, and reduced-motion preferences.

## Implemented in v1.3.0

### Structure and navigation
- Grouped navigation into Overview, Briefing, Research, Drafting, and System.
- Added horizontal mobile navigation and mobile lock/theme controls.
- Added a skip-to-content link and a not-found route.
- Added a Field Guide & Print Pack page that brings together definitions condensed from the supplied guide and a conference-day briefing scaffold.

### Mission Control
- Added counters for saved documents and sources marked checked / still needing review.
- Made the next recommended task explicit: verify a claim before drafting an operative clause.
- Kept BI red lines and the main strategic tools visible.

### Reliability and usability
- Fixed the missing `ArrowRight` import in Mission Control, which would block compilation.
- Added focus-visible styling and reduced-motion support.
- Improved backup import validation and limited JSON imports to 5 MB.
- Restores the saved theme preference when importing a compatible backup.
- Does not export the PIN and tells users that backups exclude it.

### Research and drafting toolkit carried forward
- Sources & Evidence register with publisher, date, URL, claim supported, caveats, agenda, and verification status.
- Stakeholder Matrix separating formal role from likely interests and suggested engagement.
- CMA Timeline & Precedents with source links and current-status caveats.
- Resolution Clause Builder with actor, action, purpose, coordination, safeguards, timeline, reporting, copy, Markdown export, and Vault save.
- Document Vault templates, editing, explicit save, search, delete, and Markdown export.
- CMA QARMAs in both agenda rooms.

## Recommendations still worth doing

### P1 — Before serious conference use

- [ ] **Full source-to-claim linking.** Give each claim an ID and allow the clause builder and BI dossier to cite one or more source records. A source marked “Checked” should include the exact page/section/paragraph and the date checked.
- [ ] **Primary-source verification workflow.** Add fields for legal provision, quoted or paraphrased passage, effective date, amendment/supersession check, and last checked date. “Checked” should be a human attestation, never an automated truth claim.
- [ ] **Previous-attempts board.** Create one card per guide-listed attempt (e.g., agreements, coordination bodies, devolution/fiscal arrangements), with intended purpose, what the guide says happened, limitations, and the source to inspect. Avoid reducing complex peace processes to a simplistic success/failure score.
- [ ] **Conference print pack export.** Extend the Field Guide print view to allow selecting agenda A, agenda B, both agendas, red lines, QARMAs, selected sources, and draft clauses; export a single concise PDF through the browser print dialog.
- [ ] **Autosave / recovery.** Add an explicit unsaved-change indicator, autosave draft edits, and a small recoverable revision history for Vault notes.
- [ ] **Backup completeness.** Add schema version and migration handling; include user-editable settings and future user-created stakeholder/timeline records as those become editable. Keep the PIN excluded.
- [ ] **Validation of user links.** Validate URL protocols and render external links safely; distinguish missing URLs from invalid URLs.
- [ ] **Citations in export.** Add a bibliography block to position-paper, speech, and clause exports using the source register, including access/check dates where appropriate.

### P2 — Strong improvements for v1.4+

- [ ] **Glossary flashcards.** Turn guide definitions into active-recall cards with a “study guide wording” view and an optional paraphrase view.
- [ ] **QARMA-to-clause mapping.** Allow each clause to map to the QARMA it answers, its evidence, implementation owner, safeguard, and measurable indicator.
- [ ] **Stakeholder negotiation board.** Add editable support/oppose/undecided positions, red lines, possible trade-offs, and a timestamped conference update. Label all inferred positions as hypotheses until confirmed.
- [ ] **Previous-attempt comparison.** Compare a new proposal with existing arrangements and explain what gap it fills instead of duplicating an existing mechanism.
- [ ] **Versioned notes.** Keep recent revisions and allow restore, while making storage usage and deletion clear.
- [ ] **Presentation / debate timer.** Add a local timer for 30-, 45-, 60-, and 90-second speech rehearsals, with no account or network requirement.
- [ ] **Cross-page search.** Search documents, source records, glossary terms, stakeholders, timeline, and clauses in one place.
- [ ] **Conference profile settings.** Make conference name, role, committee, agenda titles, dates, and venue editable rather than fixed to DavaoMUN II.
- [ ] **Offline/PWA verification.** Confirm the app launches and required routes work after a real production build and a cold offline reload.
- [ ] **Mobile interaction QA.** Test long labels, textareas, focus, navigation overflow, print layout, and browser back/forward on actual mobile devices.

### P3 — Optional / only if there is a real need

- [ ] **Multi-conference support.** Keep separate folders and backups per conference; do this only after the single-conference workflow is stable.
- [ ] **Encrypted export.** If sensitive materials ever become necessary, implement well-reviewed client-side encryption with a separate passphrase; do not market the PIN lock as encryption.
- [ ] **Shared delegation workspace.** Consider only if the conference permits it and there is a clear privacy/access model. A local-first app should not quietly become a cloud-sync product.
- [ ] **AI-assisted research or drafting.** Any future generated text should display source provenance, mark uncertainty, and require human verification; never auto-label generated legal claims as verified.

## Content checks specific to the CMA / BI role

- Preserve the guide's two distinct agendas: (A) integrating national defense mandates with institutional and customary frameworks along the Sulu Southern Backdoor; (B) regional development and economic decentralization grievances while upholding territorial integrity and constitutional unity.
- Keep BI's immigration mandate distinct from AFP/PN, PCG, PNP, NBI, DILG, fiscal institutions, regional bodies, and customary/community actors. Name the responsible actor in every proposed clause.
- Treat digital passes, mandatory manifests, new liaison desks, and new cross-border data-sharing as **proposals** unless a checked primary source proves an existing mechanism and its scope.
- Keep safeguards concrete: lawful basis, due process, privacy, data minimization, retention limits, non-discrimination, anti-retaliation, oversight, and an accessible complaint channel where relevant.
- For BARMM and Sulu, do not generalize nationwide rules without checking scope, transition provisions, later amendments, and applicable decisions/issuances. Cite exact primary text.
- Distinguish the study guide's claims from independent verification and from strategic hypotheses. The study guide is the conference framing, not a substitute for primary legal sources.

## Known limitations / honest test status

- The PIN is a convenience gate. Browser local storage is not encrypted and can be inspected or modified by someone with technical access.
- Documents and sources are stored in browser local storage; clearing site data can delete them. Export backups regularly.
- Stakeholder and timeline entries are shipped reference content, not yet editable user records.
- Clause Builder generates wording but does not determine whether a clause is legally authorized, within committee rules, funded, or factually justified.
- Conceptual screenshots in `previews/` are layout mockups for review, not captured runtime screenshots.
- A full production build has not been verified here because dependency installation timed out. Run `npm install` and `npm run build` before deploying.
