---
title: "Getting Started with Capacitor MoPub"
description: "Learn how to integrate MoPub into your Capacitor app"
created_at: "2021-08-15"
published: true
slug: "capacitor-mopub"
---

# Getting Started with Capacitor MoPub

![MoPub Logo](https://media.mopub.com/media/filer_public/95/19/95193506-e968-42fd-94ad-70d79940864b/mopub_logo.png)

Capacitor MoPub is a native MoPub implementation for iOS and Android. In this tutorial, we will guide you through the process of integrating MoPub into your Capacitor app.

## Prerequisites

Before you begin, make sure you have the following prerequisites:

- Capacitor installed in your project
- MoPub account and App ID

## Installation

To get started, you need to install the Capacitor MoPub package in your app. Open your terminal and run the following command:

```console
npm install --save capacitor-mopub
```

## Android Setup

### Register MoPub as a Capacitor Plugin

Open your Android project in Android Studio. Locate the `MainActivity.java` file and add the following import statement:

```java
import app.xplatform.capacitor.MoPub;
```

Then, add `MoPub.class` to the list of plugins in the `onCreate` method:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // Other plugins...
  add(MoPub.class);
}});
```

### Update Manifest

In your Android project, open the `AndroidManifest.xml` file and add the following permissions and activity declaration:

```xml
<uses-permission android:name="android.permission.INTERNET" />

<application>
  <!-- Other configurations -->
  
  <activity android:name="com.mopub.common.MoPubBrowser"
            android:configChanges="keyboardHidden|orientation|screenSize" />

  <!-- Add this block inside the <application> tag -->
  <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID"
             android:value="YOUR_ADMOB_APP_ID" />
  
</application>
```

Replace `YOUR_ADMOB_APP_ID` with your MoPub App ID.

## iOS Setup

### Update Info.plist

Open your iOS project and locate the `Info.plist` file. Add the following keys and values:

```xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>

<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>

<key>NSCameraUsageDescription</key>
<string>Allow access to the camera for ad interactive experiences</string>

<!-- Add this block at the appropriate location -->
<key>GADApplicationIdentifier</key>
<string>YOUR_ADMOB_APP_ID</string>
```

Replace `YOUR_ADMOB_APP_ID` with your MoPub App ID.

## Usage

Now that you have Capacitor MoPub installed and configured, you can start using it in your app. Import the necessary modules and use the provided APIs to show MoPub ads.

### Banners

To show a MoPub banner ad, you need to call the `prepareBanner` method. Here's an example of how to use it:

```typescript
import { Plugins } from '@capacitor/core';
import { AdOptions, AdSize, MoPubBanner } from 'capacitor-mopub';

const { MoPub } = Plugins;

// Prepare the banner ad
const options: AdOptions = {
  adSize: AdSize.BANNER,
  adUnitId: 'YOUR_BANNER_AD_UNIT_ID',
};

MoPub.prepareBanner(options).then(result => {
  console.log('Banner ad prepared');
}).catch(error => {
  console.error('Failed to prepare banner ad', error);
});
```

Replace `YOUR_BANNER_AD_UNIT_ID` with your MoPub banner ad unit ID.

### Interstitials

To show a MoPub interstitial ad, you need to call the `prepareInterstitial` method. Here's an example of how to use it:

```typescript
// Prepare the interstitial ad
const options: AdOptions = {
  adUnitId: 'YOUR_INTERSTITIAL_AD_UNIT_ID',
};

MoPub.prepareInterstitial(options).then(result => {
  console.log('Interstitial ad prepared');
}).catch(error => {
  console.error('Failed to prepare interstitial ad', error);
});
```

Replace `YOUR_INTERSTITIAL_AD_UNIT_ID` with your MoPub interstitial ad unit ID.

### Reward Videos

To show a MoPub reward video ad, you need to call the `prepareRewardVideo` method. Here's an example of how to use it:

```typescript
// Prepare the reward video ad
const options: AdOptions = {
  adUnitId: 'YOUR_REWARD_VIDEO_AD_UNIT_ID',
};

MoPub.prepareRewardVideo(options).then(result => {
  console.log('Reward video ad prepared');
}).catch(error => {
  console.error('Failed to prepare reward video ad', error);
});
```

Replace `YOUR_REWARD_VIDEO_AD_UNIT_ID` with your MoPub reward video ad unit ID.

## Conclusion

In this tutorial, we covered the basics of integrating MoPub into your Capacitor app. You learned how to install the Capacitor MoPub package, set up MoPub in your Android and iOS projects, and use the provided APIs to show MoPub ads. Now you can monetize your app with MoPub and start generating revenue through ads. Happy coding!
