```md
---
"title": "Using @capgo/capacitor-admob Package Tutorial"
"description": "Tutorial on implementing the @capgo/capacitor-admob package in a Capacitor project."
"created_at": "2022-10-21"
"published": true
"slug": "capacitor-admob-git"
---

## Installation

To use the **@capacitor-community/admob** plugin in your app, you can follow these steps:

1. Run the following command to install the package:

```console
npm install --save @capacitor-community/admob
```

2. Update the package through the following commands based on the version of Capacitor you are using:

- *Capacitor 4:*

```console
npm install --save @capacitor-community/admob@4.0.0
npx cap update
```

- *Capacitor 3:*

```console
npm install --save @capacitor-community/admob@3.3.0
npx cap update
```

## Configuration

### Android Setup

To configure the Android platform, follow these steps:

1. In the `android/app/src/main/AndroidManifest.xml` file, add the following XML elements under `<manifest><application>`:

```xml
<meta-data
  android:name="com.google.android.gms.ads.APPLICATION_ID"
  android:value="@string/admob_app_id"/>
```

2. In the `android/app/src/main/res/values/strings.xml` file, add the following lines:

```xml
<string name="admob_app_id">[APP_ID]</string>
```

Make sure to replace `[APP_ID]` with your AdMob application Id.

### iOS Setup

For iOS configuration, you need to update `ios/App/App/info.plist` file with the following entries:

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

## Initializing AdMob

After installation and configuration, you can initialize AdMob in your app. Here is an example of how you can do it in your code:

```ts
import { AdMob } from '@capacitor-community/admob'

export async function initializeAdMob(): Promise<void> {
  AdMob.initialize({
    testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
    initializeForTesting: true,
  })
}
```

This snippet shows how to initialize AdMob with testing devices and set up for testing.

## User Message Platform (UMP)

Google will soon require using a Consent Management Platform (CMP) for serving ads to EEA and UK users. You can set up the GDPR messages using Google's UMP.

### Setup GDPR Messages

To use UMP and set up GDPR messages, refer to the [Google AdMob guide](https://support.google.com/admob/answer/10113207?hl=en&ref_topic=10105230&sjid=6731900490614517032-AP) for creating your GDPR messages.

### Setup IDFA Messages

Alongside GDPR messages, you may need to set up IDFA messages. Check Google's guide on [IDFA messages setup](https://support.google.com/admob/answer/10115027?hl=en) for more information.

These steps will help you utilize the @capacitor-community/admob package effectively in your Capacitor project.
```