# Delegates' Drawer — CMA Study Guide Audit
**Audit basis:** CMA Study Guide for DAVAOMUN II, AD HOC: CMA Advanced (uploaded PDF), plus the supplied application source.
**Scope note:** This is a content and implementation audit, not a legal opinion. The study guide is the authority for agenda framing; the app's agency-specific strategy is treated as a delegate proposal unless the guide itself establishes it.

## Executive verdict
The concept is strong and role-specific. The two agenda rooms correctly keep the Bureau of Immigration (BI) in a supporting, civilian immigration role rather than presenting it as the Navy or AFP. Version 1.1 adds practical note-writing and backup features, and restores a key study-guide element: QARMAs.

## CMA study-guide alignment

| Study-guide component | Existing app | v1.1 action / remaining gap |
|---|---|---|
| Committee purpose and core tension | Implied in agenda framing | Good strategic fit: national authority + meaningful local coordination. Consider a short “committee thesis” card. |
| Key definitions | Partial, scattered | Add a glossary for Southern Backdoor, maritime domain awareness, customary frameworks, decentralization, devolution, fiscal autonomy, NTA, and constitutional unity. |
| Overview and history | BI dossier has a short past-actions list | Not a substitute for the guide's chronology. Add a dated timeline with source links and distinguish historical facts from BI proposals. |
| Scope of agenda | Agenda A/B summaries | Broadly aligned, but keep proposals inside the scope: integration mechanisms for A; regional fiscal/planning authority within constitutional limits for B. |
| Major stakeholders | Allies list | Add stakeholder matrix: mandate, likely concern, possible cooperation, and what BI should not promise on their behalf. |
| Previous attempts | Only a few BI-specific bullets | Major omission. Add guide-derived reference cards: TCA/INDOMALPHI, RA 9993, AFP Modernization Acts, BOL/RA 11054, Mandanas-Garcia, ARMM/peace agreements, MinDA Act, and MOA-AD ruling as relevant to each agenda. |
| Conclusion | BI stance paragraphs | Useful, but add a one-sentence “so what” for each agenda. |
| QARMAs | Missing in v0.1 | v1.1 now includes five guide-aligned QARMAs in each agenda room. |
| References | No source panel or bibliography in app | Still a priority. Store a source, date, URL, what it supports, and verification status beside every important claim. |

## Findings and recommendations

### High priority — credibility and legal precision
1. **Label proposal language clearly.** “Digital border pass,” mandatory vessel manifests to BI, joint coordination desks, and cross-border data-sharing are proposals in the app, not established BI powers or already adopted policy. Frame them as proposals subject to legal review, partner-agency mandates, privacy, due process, and existing agreements.
2. **Verify legal-basis entries.** The BI dossier lists several statutes and a “BI Strategy 2026–2040.” Before using these in a speech or draft directive, verify the exact title, current status, issuing authority, and an official or primary-source URL. Do not rely on an unsourced label.
3. **Verify time-sensitive “past actions.”** The dossier includes 2025–2026 operations and a claim dated October 2026. Add a primary source and publication date to each; remove or mark unverified items if no reliable source can be found.
4. **Do not overstate TCA coverage.** The CMA guide describes trilateral maritime cooperation and information-sharing. It does not, by itself, establish that every proposed immigration-data-sharing mechanism is authorized under that arrangement. Phrase this as a proposal requiring partner and legal approval.
5. **Keep agency roles distinct.** Prefer “BI handles immigration decisions and coordinates; PCG/Navy handle maritime operations within their mandates; PNP/NBI investigate relevant crimes” over absolute shorthand that could misstate a particular operation or legal mandate.

### Medium priority — make the app work like a delegate's drawer
- v1.1 adds create/edit/save/search/delete for notes, practical templates, Markdown export, and JSON backup/restore.
- Agenda A/B now surface the five QARMAs from the study guide as resolution checks.
- Add a **Sources & Evidence** page with claim/source/date/status fields and quick-copy citations.
- Add a **Stakeholder Matrix** and **Timeline** for each agenda.
- Add a **Resolution Clause Builder** with fields for action, responsible body, coordination partner, safeguard, timeline, and review metric.
- Add a “Conference day” print pack: BI red lines, 30–45-second speech skeleton, top facts, allies, and unresolved QARMAs.

### Security and reliability
- The original PIN check accepted `1234` even after a new PIN had been set, and accepted any PIN on first run. v1.1 removes those bypasses and requires the current PIN to change it.
- This remains a **convenience lock, not real security**. Browser storage can be inspected by someone with technical access. Do not put confidential crisis material or sensitive personal information in the app.
- The original Settings export/import controls were inert; v1.1 makes document backup export/import functional and scopes “clear app data” to app-owned keys rather than wiping all local storage.
- The original Document Vault buttons did not create documents; v1.1 implements template creation, editing, saving, search, delete, and Markdown export.
- Build/test status: source was statically inspected, but a production build could not be verified in this environment because dependency installation did not complete. Run `npm install` and `npm run build` locally before deploying.

## Suggested next additions
1. Source register with verified primary links.
2. CMA glossary + date-ordered timeline.
3. Stakeholder matrix by agenda.
4. Print-pack generator and one-click copy for speech lines / clauses.
5. Autosave indicator and recovery/version history (current notes require explicit Save).
6. Optional install/offline verification and keyboard/mobile accessibility pass.

## Overall
**Strategically promising; content is not yet source-complete.** The app's best feature is the clear BI role framing. Its largest study-guide gap is the lack of a full evidence layer: definitions, chronology, previous attempts, and traceable references. Version 1.1 makes the app materially more useful day-to-day, but verify legal and current-event claims before relying on them in committee.


## Version 1.2 additions (2026-10-11)

- **Sources & Evidence:** local source register tracks publisher, date, URL, agenda, exact claim supported, caveats, and verification status. Starter sources are leads; they are not marked verified by default.
- **Stakeholder Matrix:** actors from the guide are organized by agenda, role, likely interest, leverage, and suggested BI engagement. Likely interests are analytical hypotheses, not sourced quotations or guaranteed positions.
- **CMA Timeline & Precedents:** selected constitutional, peace-process, legislative, judicial, and executive milestones, with source links where available. Current legal status and amendments require direct checking.
- **Resolution Clause Builder:** produces editable draft language and exports Markdown or saves a draft to the local Document Vault. It does not validate legality, committee format, budget, or institutional authority.
- **Backup:** Settings export/import includes the source register. Stakeholder and timeline reference content is shipped with the app rather than user-edited local data.

### Verification note
The starter chronology includes RA 11054, EO 79, EO 138, the CAB/Annex on Normalization, and the Mandanas–Garcia ruling as research entry points. EO 103 is dated 6 November 2025 (not 2022): it extends the general devolution transition to FY 2028 and expressly excludes LGUs in BARMM from its coverage. The 2024 Sulu ruling and EO 91 (2025) are linked as primary-source checks for Sulu’s administrative status. Verify any later amendments before relying on current-status claims. Do not treat this application as legal advice.

## Version 1.3 additions (2026-10-11)

- Navigation is grouped by task and adapted for mobile; keyboard focus, reduced-motion support, skip-to-content, and a not-found route were added.
- Mission Control now summarizes local documents and source verification, and highlights source checking as the next action.
- The Field Guide & Print Pack adds searchable, agenda-filtered definitions condensed from the study guide and a browser-printable conference-day brief.
- Backup import is more defensive, limited to 5 MB, can restore theme preference, and excludes the PIN. This remains a local convenience app rather than a secure vault.
- A missing `ArrowRight` import in Mission Control was identified and fixed during the audit.
- The `previews/` images are illustrative layout mockups, not captures of the running React app.

### Test status for v1.3

- TypeScript/TSX syntax transpilation and relative-import path checks: passed for 21 source files.
- Full `npm run build`: blocked because the environment could not install dependencies (`npm install` timed out; offline cache did not contain the required React package). This is an environment limitation, not evidence of a successful production build. Run `npm install` and `npm run build` locally.
- Manual QA still required: create/edit/delete a note; export/import a backup; change PIN; add/edit/delete a source; use agenda filters; copy/export/save a clause; print the Field Guide; test mobile navigation and keyboard focus.

For the complete prioritized roadmap, see `PRODUCT_ROADMAP.md`.
