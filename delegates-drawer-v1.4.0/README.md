# Delegates' Drawer

Personal, local-first MUN preparation cockpit for DavaoMUN II — Bureau of Immigration, Council of Mindanao Affairs.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` before deployment.

**First-run PIN:** `1234` (change it in Settings). This is a convenience lock only; it does not encrypt browser storage.

## Version 1.4.0

- Navigation reorganized into Overview, Briefing, Research, Drafting, and System sections.
- Mobile horizontal navigation and mobile-friendly lock/theme controls.
- Accessible keyboard focus, skip-to-content link, reduced-motion preference, and unknown-route fallback.
- Mission Control now shows saved-document and source-verification counts and provides a clear next action.
- Backup import checks the archive shape, limits imports to 5 MB, restores the theme preference, and does not import/export the PIN.
- Existing tools retained: BI dossier, both agenda war rooms and QARMAs, Document Vault, Sources & Evidence, Stakeholder Matrix, CMA Timeline & Precedents, Clause Builder, Cheat Sheet, and Settings.
- Audit report and layout previews included in `docs/` and `previews/`.

## Information architecture

- **Overview:** Mission Control.
- **Briefing:** BI Dossier, Agenda A, Agenda B.
- **Research:** Sources & Evidence, Stakeholder Matrix, CMA Timeline.
- **Drafting:** Document Vault, Cheat Sheet, Clause Builder.
- **System:** Settings and data backup.

## Important privacy / security note

This is a browser-local convenience app, not a secure vault. The PIN and documents are stored in browser storage and can be inspected by someone with technical access to the device/profile. Do not store highly sensitive personal, crisis, or confidential delegate information here. Export backups regularly. Clearing browser site data can erase local documents. Backups do not include the PIN.

## CMA study-guide alignment and factual discipline

The agenda pages follow the conference study guide’s framing and QARMAs. Timeline and stakeholder pages are research scaffolds. Distinguish study-guide claims, verified primary-source text, and analytic hypotheses. Proposed actions such as digital border passes, mandatory manifests, and liaison desks are proposals—not proof that the Bureau of Immigration already has authority to implement them. Check the exact legal mandate, applicable safeguards, conference rules, and latest official text before presenting any proposal as legally available.

## Validation status

A source-level syntax pass was performed across the TS/TSX files. A complete `npm run build` could not be confirmed in this environment because `npm install` timed out before dependencies were available. Run `npm install` and `npm run build` locally before deployment.

## Stack

Vite + React + TypeScript, Tailwind CSS, Zustand, Dexie (schema foundation), Lucide icons.

## Version 1.4.0 — deployable PWA package

- Added GitHub Actions deployment to GitHub Pages (no Netlify required).
- Switched to hash-based routing to avoid project-site refresh/404 issues on GitHub Pages.
- Added PNG install icons and PWA manifest metadata for desktop and mobile installation.
- Removed external Google Fonts requests so the app shell has fewer third-party dependencies and is more offline-friendly.
- Added `npm run check` and the detailed `DEPLOY_AND_INSTALL.md` walkthrough.

See `DEPLOY_AND_INSTALL.md` for repository setup, publishing, and install steps for desktop, Android, and iOS/iPadOS. The app remains local-first; installing it does not create cloud sync or encrypt data.
