# Manual smoke-test checklist

## Build and deploy
- [ ] `npm install` completes.
- [ ] `npm run check` completes without TypeScript errors.
- [ ] `npm run build` completes and creates `dist/`.
- [ ] GitHub Actions build/deploy workflow succeeds.
- [ ] Published URL opens over HTTPS.
- [ ] Refreshing any screen does not return a 404.
- [ ] Browser console has no missing asset or service-worker errors.

## First launch and PIN
- [ ] First launch accepts the documented first-run PIN `1234`.
- [ ] Changing the PIN rejects an incorrect current PIN.
- [ ] A new PIN is required after locking/reloading.
- [ ] Clearing app data asks for confirmation and explains that data will be removed.
- [ ] Confirm PIN is described as a convenience lock, not encryption.

## Documents and data
- [ ] Create, edit, save, search, export, and delete a document.
- [ ] Reload and verify saved content remains.
- [ ] Export a backup and verify it is valid JSON.
- [ ] Cancel an import and verify existing records remain untouched.
- [ ] Import a valid backup and confirm exactly which records are replaced.
- [ ] Reject malformed JSON and files larger than 5 MB without changing existing data.
- [ ] Export Markdown and check title, body, and formatting.

## Research and drafting
- [ ] Add/edit/delete a source and check its verification status.
- [ ] Review stakeholder and timeline content; distinguish facts from analytical hypotheses.
- [ ] Build a clause, copy it, export it, and save it to the vault.
- [ ] Confirm no clause is labelled legally verified solely because a source is linked.

## Usability
- [ ] Test desktop sidebar and mobile horizontal navigation.
- [ ] Test dark/light theme and verify it survives reload.
- [ ] Navigate using keyboard only and check visible focus.
- [ ] Check at 320 px, 375 px, tablet, and desktop widths.
- [ ] Check print layout and browser print-to-PDF.
- [ ] Install from Chrome/Edge or Safari and launch from the installed icon.
- [ ] Load once online, then test basic app-shell startup offline.
- [ ] Export a backup before clearing browser data.
