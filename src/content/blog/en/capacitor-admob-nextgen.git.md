---
title: Using Capacitor AdMob NextGen Plugin
description: A comprehensive tutorial on integrating and utilizing the capacitor-admob-nextgen plugin in your Capacitor applications.
created_at: 2022-03-15
published: true
slug: capacitor-admob-nextgen.git
locale: en
---

# Using Capacitor AdMob NextGen Plugin

The Capacitor AdMob NextGen plugin allows you to easily integrate AdMob ads into your Capacitor applications. This tutorial will guide you through the installation process and provide examples of how to initialize AdMob and utilize its features.

## Installation

To get started, you need to install the Capacitor AdMob NextGen plugin in your app. Run the following command in your project directory:

```console
npm install --save capacitor-admob-nextgen
```

## Initialization

### Android

For Android, update the plugin to the appropriate version based on your Capacitor version:

#### Capacitor 4

```console
npm install --save @capacitor-community/admob@4.0.0
npx cap update
```

#### Capacitor 3

```console
npm install --save @capacitor-community/admob@3.3.0
npx cap update
```

### Android Configuration

In your `android/app/src/main/AndroidManifest.xml` file, add the following XML elements under `<manifest><application>`:

```xml
<meta-data
 android:name="com.google.android.gms.ads.APPLICATION_ID"
 android:value="@string/admob_app_id"/>
```

In your `android/app/src/main/res/values/strings.xml` file, add the following lines:

```xml
<string name="admob_app_id">[APP_ID]</string>
```

Replace `[APP_ID]` with your AdMob application ID.

### iOS Configuration

In your `ios/App/App/info.plist` file, add the following lines inside the outermost `<dict>`:

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

Replace `[APP_ID]` with your AdMob application ID.

## Example

### Initialize AdMob

```typescript
import { AdMob } from '@capacitor-community/admob'

export async function initialize(): Promise<void> {
  const { status } = await AdMob.trackingAuthorizationStatus()

  if (status === 'notDetermined') {
    // Handle Tracking Authorization based on status
  }

  AdMob.initialize({
    testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
    initializeForTesting: true,
  })
}
```

Remember to replace the `testingDevices` array with the appropriate device IDs for testing.

### User Message Platform (UMP)

Google will require all publishers serving ads to EEA and UK users to use a Google-certified Consent Management Platform (CMP). This tutorial will cover how to use Google's Consent Management Solution.

We may also cover IDFA messages to show when users are not in EEA and UK.

---
