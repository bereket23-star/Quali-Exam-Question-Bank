p = "android/app/src/main/AndroidManifest.xml"
s = open(p, encoding="utf-8").read()
perm = '<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />'
if perm not in s:
    s = s.replace("<application", perm + "\n    <application", 1)
    open(p, "w", encoding="utf-8").write(s)
print("manifest ok")
