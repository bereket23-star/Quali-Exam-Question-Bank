# Quali Exam Prep – Android APK

The whole app is `www/index.html`. GitHub Actions wraps it with Capacitor and builds the APK.

## Get the APK
1. Create a GitHub repo and upload everything in this folder (keep the hidden `.github` folder and `quali.keystore`).
2. Push to `main`. The **Build APK** run (Actions tab) takes about 5 minutes.
3. Download `QualiExamPrep.apk` from the run's artifact or from the repo's **Releases** page, then install it (allow "install unknown apps").

## Update the app
Replace `www/index.html` and push. Each build creates a new release (v1, v2, ...).
The app's Settings > Check for updates compares against the latest release (the repo must be public for this).

## Notes
- Keep `quali.keystore` in the repo. Every build is signed with it, which is what lets a new APK install over the old one without uninstalling. Do not use this key for Google Play.
- Progress is stored on the device; uninstalling clears it. Use the in-app backup first.
- External links and the Google/ChatGPT/Gemini buttons open in the in-app browser.
- App name on the phone: edit `appName` in `capacitor.config.json`.
