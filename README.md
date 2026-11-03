# Quali Exam Bank

Offline study app: MCQ, viva, short cases, long case review (Internal Medicine, OB/Gyn, Pediatrics, Surgery) and last-minute notes.
The whole app is one file: `www/index.html`. A study aid written from standard textbooks and guidelines; check doses and local protocols with your department.

## Get the Android APK (GitHub builds it for you)

1. Create a new GitHub repository and upload everything in this folder (keep the `.github` folder).
2. Open **Actions → Build Android APK → Run workflow**. After about 6–10 minutes, download **QualiExamBank-apk** from the run page (Artifacts).
3. To publish a download link: create a release tag such as `v1.0.0` (Releases → Draft a new release → Choose a tag → Create new tag). The workflow then attaches `QualiExamBank.apk` to the release automatically.
4. On the phone: open the APK, allow "install unknown apps" when asked.

### Keep one signing key (recommended)
Without a key, each build is signed with a temporary key, and a new build cannot install over an old one. Make a key once and save it:

```
keytool -genkeypair -v -keystore release.jks -alias quali -keyalg RSA -keysize 2048 -validity 10000
base64 -w0 release.jks     # copy the output
```

Then in the repository go to **Settings → Secrets and variables → Actions** and add: `KEYSTORE_BASE64` (the base64 text), `KEYSTORE_PASSWORD` and `KEY_ALIAS` (`quali` above). Keep the `.jks` file and its password safe; losing them means you cannot update installed copies.

## Notes
- The Android back button is handled by the app (steps back, then exits from Home) through the `@capacitor/app` plugin. Sharing, file saving and study reminders use the `share`, `filesystem` and `local-notifications` plugins. All are listed in `package.json`.
- To change the icon, replace the images in `android-res/` (and `assets/splash.png`), then run the workflow.

## Web version (optional)
**Settings → Pages → Source: GitHub Actions**, then push to `main`. The app is published at `https://<your-name>.github.io/<repo>/` and can be added to the home screen from the browser.

## Updating the app
Replace `www/index.html` with the new file, commit, and run the workflow (or push a new tag such as `v1.0.1`).
