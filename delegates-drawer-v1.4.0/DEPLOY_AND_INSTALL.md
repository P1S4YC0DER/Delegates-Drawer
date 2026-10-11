# Put Delegates' Drawer online and install it as an app

## Recommended: GitHub Pages + installable PWA

This is the simplest no-Netlify route. The project includes a GitHub Actions workflow that builds the app and publishes `dist` to GitHub Pages. The deployed website can be installed from a supported browser and runs as a standalone window. App data remains in that browser profile; it does not sync between devices.

### Publish
1. Create a GitHub repository named `delegates-drawer` (or another name you prefer).
2. Extract this project ZIP and upload the *contents of the `delegates-drawer-v1.4.0` folder* to the repository root. Make sure `.github/workflows/deploy.yml` is included; GitHub may hide dot-folders in some file pickers, so using Git or GitHub Desktop is safer.
3. Commit the files to the `main` branch.
4. In the repository, open **Settings → Pages** and set the build/deployment source to **GitHub Actions**.
5. Open the **Actions** tab and wait for “Build and deploy Delegates' Drawer” to finish successfully.
6. Visit the published URL shown by the workflow. If the workflow is green but the page is not yet visible, wait a minute and refresh.

The app uses hash-based routing and relative asset paths so refreshing a nested screen will not produce a GitHub Pages 404. The included workflow runs a TypeScript check and production build before deployment.

### Install on desktop
- **Chrome / Edge:** open the published URL, then use the install icon in the address bar or the browser menu → **Install app**.
- **Safari on macOS:** open the published URL, then use **File → Add to Dock** where available.
- If no install option appears, the site can still be used like a normal website. Browser support and menu wording vary.

### Install on Android
1. Open the published HTTPS URL in Chrome.
2. Open the three-dot menu.
3. Choose **Install app** or **Add to Home screen**, depending on what Chrome offers.
4. Launch it from the new home-screen icon.

### Install on iPhone / iPad
1. Open the published HTTPS URL in Safari.
2. Tap **Share**.
3. Choose **Add to Home Screen**.
4. Enable **Open as Web App** if the option appears, then tap **Add**.

## Use locally without publishing
1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Run `npm install`, then `npm run dev`.
4. Open the local URL printed in the terminal.

Local development is useful for testing but does not automatically install an app icon on other devices.

## Privacy and limitations
- This is an offline-capable web app, not a native App Store / Play Store app.
- IndexedDB/local browser storage is tied to the browser profile and device. It is not cloud sync.
- The PIN is only a convenience barrier; it does not encrypt stored data.
- Do not enter confidential crisis information or sensitive personal data.
- Export a backup before clearing site data, changing browser profiles, or moving devices.
- A service worker can cache the app shell, but the first load requires internet. Updates may take a short time to activate.

## If deployment fails
Open **Actions → the failed workflow run** and inspect the first red step. Common causes are missing files, an install/type error, or Pages not being configured to use GitHub Actions. Fix the error and push a new commit; the workflow reruns automatically.
