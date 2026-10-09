QUALI EXAM BANK - how to get the APK

Option A (easiest, no coding): GitHub Actions
 1. Create a free GitHub account and a new repository.
 2. Upload everything in this folder (including the hidden .github folder).
 3. Open the Actions tab > "Build APK" > Run workflow.
 4. When it finishes (~5 min), download the "QualiExamBank-apk" artifact, unzip, send app-debug.apk to your phone and install (allow "install unknown apps").

Option B: on a PC with Node 18+ and Android Studio
 npm install
 npx cap add android
 npx cap sync android
 npx cap open android   -> Build > Build APK(s)

Option C (no APK): host the www folder (Netlify Drop / GitHub Pages), open on the phone in Chrome > menu > "Install app". Works offline.
