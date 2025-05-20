---
title: Using @admob-plus/capacitor Package Tutorial
description: >-
  This blog contains a tutorial on how to use the @admob-plus/capacitor package
  in your Capacitor projects. It covers installation, configuration, and
  examples of initializing AdMob and using User Message Platform (UMP)
created_at: '2022-01-20'
published: true
slug: admob-plus.git
locale: en
---

## Installation

Get started with the @admob-plus/capacitor package in your app by running the following command:

```console
npm install --save @admob-plus/capacitor
```

## iOS Configuration

### Update **Info.plist**

Add the following keys in your **App/App/Info.plist**:

```xml
<key>GADIsAdManagerApp</key>
<true/>
<key>GADApplicationIdentifier</key>
<string>[YOUR_APP_ID]</string>
```

Replace `[YOUR_APP_ID]` with your actual App ID from AdMob.

## Android Configuration

### Update Manifest

In your `android/app/src/main/AndroidManifest.xml`, include the following under `<manifest><application>`:

```xml
<meta-data
 android:name="com.google.android.gms.ads.APPLICATION_ID"
 android:value="@string/admob_app_id"/>
```

In `android/app/src/main/res/values/strings.xml`, add the following:

```xml
<string name="admob_app_id">[YOUR_APP_ID]</string>
```

Don't forget to replace `[YOUR_APP_ID]` with the AdMob application ID.

### Set Variables

Make sure to define the following variables in your `variables.gradle` file:

- `playServicesAdsVersion`: `19.9.6` (version of `com.google.android.gms:play-services-ads`)
- `androidxCoreKTXVersion`: `1.7.0` (version of `androidx.core:core-ktx`)

## Initialize @admob-plus/capacitor

You can initialize the package with the following code snippet:

```typescript
import { AdMob } from '@admob-plus/capacitor';

export async function initializeAdMob(): Promise<void> {
  const { status } = await AdMob.trackingAuthorizationStatus();

  if (status === 'notDetermined') {
    // Show explanation or take action before showing the iOS dialog
  }

  AdMob.initialize({
    testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
    initializeForTesting: true,
  });
}
```

In the above code, you can pass an array of device IDs as `testingDevices` to use production-like ads on specific devices.

## Implement User Message Platform (UMP)

Google will require publishers serving ads to EEA and UK users to use a certified Consent Management Platform (CMP). Use the following guide to set up UMP.

1. [Create your GDPR Messages](https://support.google.com/admob/answer/10113207?hl=en&ref_topic=10105230&sjid=6731900490614517032-AP)

2. [Set up IDFA Messages](https://support.google.com/admob/answer/10115027?hl=en)

By following the steps above, you will be able to use the @admob-plus/capacitor package effectively in your Capacitor projects.
```
