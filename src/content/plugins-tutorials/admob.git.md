```markdown
---
"title": "Using @capacitor-community/admob Package Tutorial",
"description": "Step-by-step guide on how to integrate and use the @capacitor-community/admob package in a Capacitor app.",
"created_at": "2022-02-08",
"published": true,
"slug": "admob-git"
---

## Installation

To get started with the @capacitor-community/admob package, follow the steps below:

1. Install the package using npm:

```console
npm install --save @capacitor-community/admob
```

2. For Android devices:

If using Capacitor 4:

```console
npm install --save @capacitor-community/admob@4.0.0
npx cap update
```

If using Capacitor 3:

```console
npm install --save @capacitor-community/admob@3.3.0
npx cap update
```

3. Android Configuration:

- Add the following XML elements to your `android/app/src/main/AndroidManifest.xml` file:

```xml
<meta-data
 android:name="com.google.android.gms.ads.APPLICATION_ID"
 android:value="@string/admob_app_id"/>
```

- Add the following lines to your `android/app/src/main/res/values/strings.xml` file:

```xml
<string name="admob_app_id">[APP_ID]</string>
```

Make sure to replace `[APP_ID]` with your actual AdMob application Id.

4. iOS Configuration:

Add the following lines to the `ios/App/App/info.plist` file:

```xml
<key>GADIsAdManagerApp</key>
<true/>
<key>GADApplicationIdentifier</key>
<string>[APP_ID]</string>
<key>SKAdNetworkItems</key>
<array>
  <dict>
    <key>SKAdNetworkIdentifier</key>
    <string>cstr6suwn9.skadnetwork</string>
  </dict>
</array>
<key>NSUserTrackingUsageDescription</key>
<string>[Your usage description here]</string>
```

Replace `[APP_ID]` with your AdMob application Id, and provide an appropriate user tracking usage description.

## Example: Initialize AdMob

```typescript
import { AdMob } from '@capacitor-community/admob';

async function initializeAdMob(): Promise<void> {
  const { status } = await AdMob.trackingAuthorizationStatus();

  if (status === 'notDetermined') {
    // Optional: Show a modal to explain TrackingAuthorization before showing the iOS dialog.
  }

  AdMob.initialize({
    testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
    initializeForTesting: true,
  });
}
```

That's it! You are now ready to use the @capacitor-community/admob package in your Capacitor app.
```