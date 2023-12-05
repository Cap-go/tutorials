---
title: "Using AdMob with Capacitor"
description: "A tutorial on how to integrate AdMob into your Capacitor app"
created_at: "2022-10-15"
published: true
slug: "admob-capacitor"
---

# Using AdMob with Capacitor

In this tutorial, we will learn how to integrate AdMob, Google's mobile advertising platform, into your Capacitor app. AdMob allows you to monetize your app by displaying ads to your users.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor project set up
- AdMob account and Ad Unit ID(s)
- iOS or Android device or emulator for testing

## Installation

To use AdMob with Capacitor, you need to install the `capacitor-admob` package. Open your terminal and run the following command:

```console
npm install --save capacitor-admob
```

## Setup for iOS

### Update Info.plist

Open your `App/App/Info.plist` file and add the following lines:

```xml
<key>GADIsAdManagerApp</key>
<true/>
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-6564742920318187~7217030993</string>
```

Replace the `GADApplicationIdentifier` value with your own App ID obtained from AdMob.

## Setup for Android

### Update Manifest

Open the `android/app/src/main/AndroidManifest.xml` file and add the following lines:

```xml
<meta-data
 android:name="com.google.android.gms.ads.APPLICATION_ID"
 android:value="@string/admob_app_id"/>
```

Open the `android/app/src/main/res/values/strings.xml` file and add the following lines:

```xml
<string name="admob_app_id">[YOUR_ADMOB_APP_ID]</string>
```

Replace `[YOUR_ADMOB_APP_ID]` with your own AdMob App ID.

## Initialize AdMob

To start using AdMob in your app, you need to initialize it. Here's an example of how to initialize AdMob in your app's code:

```typescript
import { AdMob } from '@capacitor-community/admob';

async function initializeAdMob() {
  await AdMob.initialize({
    testingDevices: ['device_id_1', 'device_id_2'],
    initializeForTesting: true,
  });
  
  // Additional configuration and handling can go here
}

initializeAdMob();
```

In the `testingDevices` array, you can specify the device IDs of the physical devices or emulators where you want to test the ads. This will ensure that test ads are shown instead of real ads during testing.

## Displaying Ads

Once AdMob is initialized, you can start displaying ads in your app. AdMob supports various types of ads such as banner ads, interstitial ads, and rewarded video ads. Each type of ad has its own API and usage.

Here's an example of how to display a banner ad in your app:

```typescript
import { AdMob, AdMobBannerOptions, AdMobBannerSize } from '@capacitor-community/admob';

async function displayBannerAd() {
  const options: AdMobBannerOptions = {
    adSize: AdMobBannerSize.BANNER,
    position: 'bottom',
    margins: {
      top: 10,
    },
  };
  
  await AdMob.showBanner(options);
}

displayBannerAd();
```

This code will display a banner ad at the bottom of the screen with a top margin of 10 pixels.

You can refer to the [official documentation](https://github.com/rahadur/capacitor-admob) for more information on how to use AdMob with Capacitor and the available API methods for different types of ads.

## Conclusion

In this tutorial, we learned how to integrate AdMob into a Capacitor app. We covered the installation process, setup steps for both iOS and Android platforms, initializing AdMob, and displaying banner ads.

By using AdMob, you can monetize your app and generate revenue through ad placements. Experiment with different types of ads and ad formats to find the best combination for your app and user base.

Happy ad monetization!