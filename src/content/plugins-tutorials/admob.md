---
title: "Using @capacitor-community/admob in Capacitor"
description: "A tutorial on how to use the @capacitor-community/admob package to integrate AdMob ads into your Capacitor app."
created_at: "2021-10-15"
published: true
slug: admob
---

# Using @capacitor-community/admob in Capacitor

In this tutorial, we will learn how to integrate AdMob ads into your Capacitor app using the @capacitor-community/admob package. AdMob is a mobile advertising platform developed by Google that allows you to monetize your app by displaying ads to your users.

## Installation

To get started, you need to install the @capacitor-community/admob package in your Capacitor app. Open your terminal and run the following command:

```console
npm install --save @capacitor-community/admob
```

## Android Configuration

### Android Manifest

First, open the `android/app/src/main/AndroidManifest.xml` file and add the following XML elements under `<manifest><application>`:

```xml
<meta-data
  android:name="com.google.android.gms.ads.APPLICATION_ID"
  android:value="@string/admob_app_id"/>
```

Next, open the `android/app/src/main/res/values/strings.xml` file and add the following lines:

```xml
<string name="admob_app_id">[APP_ID]</string>
```

Replace `[APP_ID]` with your AdMob application ID.

### Variables

The @capacitor-community/admob package uses the following project variables, which are defined in your app's `variables.gradle` file:

- `playServicesAdsVersion`: The version of `com.google.android.gms:play-services-ads` (default: `22.0.0`)
- `androidxCoreKTXVersion`: The version of `androidx.core:core-ktx` (default: `1.10.0`)

Make sure these variables are set correctly according to your project requirements.

## iOS Configuration

### Info.plist

First, open the `ios/App/App/info.plist` file and add the following XML elements inside the outermost `<dict>`:

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

To start using the @capacitor-community/admob package, you need to initialize AdMob in your app. Here's an example of how to do it:

```typescript
import { AdMob } from '@capacitor-community/admob';

export async function initialize(): Promise<void> {
  const { status } = await AdMob.trackingAuthorizationStatus();

  if (status === 'notDetermined') {
    /**
     * If you want to explain TrackingAuthorization before showing the iOS dialog,
     * you can show the modal here.
     * ex)
     * const modal = await this.modalCtrl.create({
     *   component: RequestTrackingPage,
     * });
     * await modal.present();
     * await modal.onDidDismiss();  // Wait for close modal
     **/
  }
 
  AdMob.initialize({
    testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
    initializeForTesting: true,
  });
}
```

In the `initialize()` function, we first check the tracking authorization status using `AdMob.trackingAuthorizationStatus()`. If the status is `notDetermined`, you can show a modal to explain the tracking authorization before showing the iOS dialog.

Next, we call `AdMob.initialize()` to initialize AdMob. We pass an object with two properties: `testingDevices` and `initializeForTesting`. `testingDevices` is an array of device IDs that you want to use for testing. `initializeForTesting` is a boolean value that determines whether to initialize AdMob for testing.

Remember to replace `['2077ef9a63d2b398840261c8221a0c9b']` with your actual device IDs.

### User Message Platform (UMP)

Google requires all publishers serving ads to EEA and UK users to use a Google-certified Consent Management Platform (CMP). Currently, the @capacitor-community/admob package supports Google's consent management solution.

To use the User Message Platform (UMP), you need to create your GDPR messages and set up IDFA messages. These messages will be shown to users based on their location and consent requirements.

## Conclusion

In this tutorial, we have learned how to integrate AdMob ads into your Capacitor app using the @capacitor-community/admob package. We covered the installation process, Android and iOS configuration, and provided an example of how to initialize AdMob.

By following this tutorial, you can monetize your app by displaying ads to your users and boost your app's revenue.