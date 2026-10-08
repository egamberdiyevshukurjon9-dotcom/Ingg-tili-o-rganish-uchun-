#!/usr/bin/env bash
# English Start uchun Android APK yig'ish (Gradle va Android Studio'siz).
#
# Kerakli vositalar TOOLS papkasida bo'lishi kerak:
#   aapt2        — Android SDK build-tools (Linux x86_64)
#   android.jar  — Android API 34 platformasi
#   dx.jar       — com.jakewharton.android.repackaged:dalvik-dx:16.0.1 (Maven Central)
#   apksig.jar   — com.android.tools.build:apksig:2.3.0 (Maven Central)
# Imzo kaliti: KEYSTORE (PKCS12), parol KEYSTORE_PASS, alias "release".
# Yangilanishlar telefonga o'rnatilishi uchun har safar bir xil kalit ishlatilishi shart.
#
# Ishlatish: TOOLS=... KEYSTORE=... KEYSTORE_PASS=... ./build-apk.sh [chiqish.apk]
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(dirname "$HERE")"
TOOLS="${TOOLS:?TOOLS papkasi kerak}"
KEYSTORE="${KEYSTORE:?KEYSTORE fayli kerak}"
KEYSTORE_PASS="${KEYSTORE_PASS:?KEYSTORE_PASS kerak}"
OUT="${1:-$HERE/build/english-start.apk}"
B="$HERE/build"

rm -rf "$B" && mkdir -p "$B/assets/www" "$B/classes" "$B/compiled"

# 1. Sayt fayllari ilova ichiga (internetsiz ishlashi uchun)
cp "$ROOT/index.html" "$ROOT/manifest.webmanifest" "$B/assets/www/"
cp -r "$ROOT/css" "$ROOT/js" "$ROOT/icons" "$B/assets/www/"

# 2. Resurslar va manifest
"$TOOLS/aapt2" compile --dir "$HERE/res" -o "$B/compiled/res.zip"
"$TOOLS/aapt2" link -o "$B/unsigned.apk" \
  -I "$TOOLS/android.jar" \
  --manifest "$HERE/AndroidManifest.xml" \
  --min-sdk-version 24 --target-sdk-version 34 \
  -A "$B/assets" \
  "$B/compiled/res.zip"

# 3. Java kod → classes.dex
javac -nowarn -source 8 -target 8 -bootclasspath "$TOOLS/android.jar" -cp "$TOOLS/android.jar" \
  -d "$B/classes" $(find "$HERE/src" -name '*.java') 2>&1 | grep -v "^warning\|^Note\|options" || true
java -cp "$TOOLS/dx.jar" com.android.dx.command.Main --dex --min-sdk-version=24 --output="$B/classes.dex" "$B/classes"
(cd "$B" && zip -q -j unsigned.apk classes.dex)
python3 "$HERE/tools/zipalign.py" "$B/unsigned.apk" "$B/aligned.apk"

# 4. Imzolash (APK Signature Scheme v2)
javac -nowarn -cp "$TOOLS/apksig.jar" -d "$B/signer" "$HERE/tools/Sign.java" "$HERE/tools/Verify.java"
java --add-exports java.base/sun.security.x509=ALL-UNNAMED --add-exports java.base/sun.security.pkcs=ALL-UNNAMED --add-exports java.base/sun.security.util=ALL-UNNAMED -cp "$TOOLS/apksig.jar:$B/signer" Sign "$KEYSTORE" "$KEYSTORE_PASS" release "$B/aligned.apk" "$OUT"

java -cp "$TOOLS/apksig.jar:$B/signer" Verify "$OUT"
echo "Tayyor: $OUT ($(du -h "$OUT" | cut -f1))"
