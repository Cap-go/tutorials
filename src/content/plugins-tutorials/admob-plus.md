---
title: "Using @admob-plus/capacitor Package"
description: "A tutorial on how to use the @admob-plus/capacitor package to integrate AdMob ads into your Capacitor app."
created_at: "2022-10-20"
published: true
slug: "admob-plus"
---

# Using @admob-plus/capacitor Package

In this tutorial, we will walk through the process of integrating AdMob ads into your Capacitor app using the @admob-plus/capacitor package. AdMob is a platform provided by Google for monetizing mobile apps through in-app advertising. By following this tutorial, you will be able to display banner ads, interstitial ads, interstitial video ads, and reward video ads in your Capacitor app.

## Installation

To get started, you will need to install the @admob-plus/capacitor package. Open your terminal and run the following command:

```
npm install --save @admob-plus/capacitor
```

## Configuration

### Android

To configure AdMob for Android, you need to update the AndroidManifest.xml file. Open the file located at `android/app/src/main/AndroidManifest.xml` and add the following XML element inside the `<application>` tag:

```xml
<meta-data
  android:name="com.google.android.gms.ads.APPLICATION_ID"
  android:value="@string/admob_app_id"
/>
```

Then, open the `android/app/src/main/res/values/strings.xml` file and add the following line:

```xml
<string name="admob_app_id">[APP_ID]</string>
```

Replace [APP_ID] with your AdMob application ID.

### iOS

To configure AdMob for iOS, open the Info.plist file located at `ios/App/App/Info.plist` and add the following lines:

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

Replace [APP_ID] with your AdMob application ID.

## Initialization

Before you can start showing ads in your app, you need to initialize the AdMob plugin. To do this, create a new file (e.g., `admob.js`) and add the following code:

```javascript
import { Plugins } from '@capacitor/core';

const { AdMob } = Plugins;

export async function initializeAdMob() {
  const { status } = await AdMob.trackingAuthorizationStatus();

  if (status === 'notDetermined') {
    // Show custom explanation dialog for tracking authorization
  }

  AdMob.initialize({
    testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
    initializeForTesting: true,
  });
}
```

Make sure to replace the testingDevices array with the device IDs of your testing devices.

## Displaying Banner Ads

To display a banner ad in your app, you can use the `AdMob.showBanner()` method. Add the following code snippet to your desired component:

```javascript
import { Plugins } from '@capacitor/core';

const { AdMob } = Plugins;

export async function showBannerAd() {
  await AdMob.showBanner({
    adId: 'YOUR_BANNER_AD_ID',
    position: 'BOTTOM_CENTER',
  });
}
```

Replace `YOUR_BANNER_AD_ID` with your actual banner ad ID.

## Displaying Interstitial Ads

To display an interstitial ad in your app, you can use the `AdMob.showInterstitial()` method. Add the following code snippet to your desired component:

```javascript
import { Plugins } from '@capacitor/core';

const { AdMob } = Plugins;

export async function showInterstitialAd() {
  await AdMob.showInterstitial({
    adId: 'YOUR_INTERSTITIAL_AD_ID',
  });
}
```

Replace `YOUR_INTERSTITIAL_AD_ID` with your actual interstitial ad ID.

## Displaying Interstitial Video Ads

To display an interstitial video ad in your app, you can use the `AdMob.showInterstitialVideo()` method. Add the following code snippet to your desired component:

```javascript
import { Plugins } from '@capacitor/core';

const { AdMob } = Plugins;

export async function showInterstitialVideoAd() {
  await AdMob.showInterstitialVideo({
    adId: 'YOUR_INTERSTITIAL_VIDEO_AD_ID',
  });
}
```

Replace `YOUR_INTERSTITIAL_VIDEO_AD_ID` with your actual interstitial video ad ID.

## Displaying Reward Video Ads

To display a reward video ad in your app, you can use the `AdMob.showRewardVideo()` method. Add the following code snippet to your desired component:

```javascript
import { Plugins } from '@capacitor/core';

const { AdMob } = Plugins;

export async function showRewardVideoAd() {
  await AdMob.showRewardVideo({
    adId: 'YOUR_REWARD_VIDEO_AD_ID',
  });
}
```

Replace `YOUR_REWARD_VIDEO_AD_ID` with your actual reward video ad ID.

## Conclusion

In this tutorial, you have learned how to integrate AdMob ads into your Capacitor app using the @admob-plus/capacitor package. You learned how to configure AdMob for Android and iOS, initialize the AdMob plugin, and display banner ads, interstitial ads, interstitial video ads, and reward video ads.

By following these steps, you can monetize your app and generate revenue through in-app advertising. Happy coding!

