---
"title": "Using AdMob Plugin with Capacitor in Your Ionic App"
"description": "Learn how to integrate the @capacitor-community/admob package in your Ionic app to display various types of ads."
"created_at": "2022-04-07"
"published": true
"slug": "admob-git"
---

## Installation

To start using the AdMob plugin in your app, you first need to install the package. Run the following command in your terminal:

```console
npm install --save @capacitor-community/admob
```

### Android Configuration

If you are using Capacitor 4:

```console
npm install --save @capacitor-community/admob@4.0.0
npx cap update
```

For Capacitor 3:

```console
npm install --save @capacitor-community/admob@3.3.0
npx cap update
```

In your `android/app/src/main/AndroidManifest.xml` file, add the following XML elements under `<manifest><application>`:

```xml
<meta-data
  android:name="com.google.android.gms.ads.APPLICATION_ID"
  android:value="@string/admob_app_id"/>
```

And in `android/app/src/main/res/values/strings.xml`, add:

```xml
<string name="admob_app_id">[APP_ID]</string>
```

Remember to replace `[APP_ID]` with your AdMob application Id.

### iOS Configuration

In your `ios/App/App/Info.plist` file, add the following code inside the outermost `<dict>`:

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
<string>[Why you use NSUserTracking. ex: This identifier will be used to deliver personalized ads to you.]</string>
```

Replace `[APP_ID]` with your AdMob application Id.

## Example

### Initialize AdMob

To initialize AdMob in your Ionic app, follow this TypeScript code example:

```typescript
import { AdMob } from '@capacitor-community/admob'

export async function initializeAdMob(): Promise<void> {
  const { status } = await AdMob.trackingAuthorizationStatus()

  if (status === 'notDetermined') {
    // You can explain TrackingAuthorization here before showing the iOS dialog
  }

  AdMob.initialize({
    testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
    initializeForTesting: true,
  })
}
```

Don't forget to replace the `testingDevices` array content with the actual device IDs you want to use for testing.

### User Message Platform (UMP)

If you need to set up the Google Consent Management Platform (ump), follow the guidelines provided by Google [here](https://support.google.com/admob/answer/10113207?hl=en&ref_topic=10105230&sjid=6731900490614517032-AP) and [here](https://support.google.com/admob/answer/10115027?hl=en).

This will help you to manage GDPR and IDFA messages effectively.

``` 
