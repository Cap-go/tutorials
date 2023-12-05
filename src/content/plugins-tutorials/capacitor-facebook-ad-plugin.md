---
title: "Using Capacitor Facebook Ad Plugin"
description: "A tutorial on how to use the capacitor-facebook-ad package in your Capacitor project."
created_at: "2021-10-20"
published: true
slug: "capacitor-facebook-ad-plugin"
---

# Using Capacitor Facebook Ad Plugin

In this tutorial, we will learn how to use the `capacitor-facebook-ad` package to integrate Facebook ads into your Capacitor project.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed globally: `npm install -g @capacitor/cli`

## Step 1: Create a New Capacitor Project

If you already have a Capacitor project, you can skip this step. Otherwise, create a new Capacitor project using the following command:

```
npx cap init [appName] [appId]
```

Replace `[appName]` with the name of your app and `[appId]` with a unique identifier for your app.

## Step 2: Install the Capacitor Facebook Ad Plugin

Install the `capacitor-facebook-ad` plugin by running the following command in your project directory:

```
npm install capacitor-facebook-ad
```

## Step 3: Configure the Facebook Ad SDK

To use the Facebook Ad SDK, you need to configure it with your Facebook App ID. Follow these steps:

1. Open the `android/app/src/main/AndroidManifest.xml` file in your project.
2. Add your Facebook App ID as a meta-data element inside the `<application>` tag:

```xml
<meta-data
    android:name="com.facebook.sdk.ApplicationId"
    android:value="@string/facebook_app_id" />
```

3. Create a `res/values/strings.xml` file in your project if it doesn't exist.
4. Add the Facebook App ID to the `strings.xml` file:

```xml
<string name="facebook_app_id">YOUR_FACEBOOK_APP_ID</string>
```

Replace `YOUR_FACEBOOK_APP_ID` with your actual Facebook App ID.

5. Open the `ios/App/App/Info.plist` file in your project.
6. Add the following key-value pair inside the `<dict>` tag:

```xml
<key>FacebookAppID</key>
<string>YOUR_FACEBOOK_APP_ID</string>
```

Replace `YOUR_FACEBOOK_APP_ID` with your actual Facebook App ID.

## Step 4: Initialize the Capacitor Facebook Ad Plugin

In your project's main file (e.g., `src/main.ts`), import and initialize the Capacitor Facebook Ad plugin:

```typescript
import { CapacitorFacebookAd } from 'capacitor-facebook-ad';

CapacitorFacebookAd.initialize();
```

## Step 5: Load and Display Facebook Ads

To load and display Facebook ads in your app, you can use the following methods provided by the Capacitor Facebook Ad plugin:

- `loadInterstitialAd()`: Load an interstitial ad.
- `showInterstitialAd()`: Show a loaded interstitial ad.
- `loadRewardedVideoAd()`: Load a rewarded video ad.
- `showRewardedVideoAd()`: Show a loaded rewarded video ad.
- `loadBannerAd()`: Load a banner ad.
- `showBannerAd()`: Show a loaded banner ad.

Here's an example of how to load and display an interstitial ad:

```typescript
import { CapacitorFacebookAd } from 'capacitor-facebook-ad';

async function showInterstitialAd() {
  await CapacitorFacebookAd.loadInterstitialAd();
  await CapacitorFacebookAd.showInterstitialAd();
}

showInterstitialAd();
```

You can use similar code to load and display other types of ads.

## Conclusion

In this tutorial, we learned how to use the `capacitor-facebook-ad` package to integrate Facebook ads into a Capacitor project. We covered the steps to install the plugin, configure the Facebook Ad SDK, initialize the plugin, and load/display various types of ads. By using this plugin, you can monetize your app and display targeted ads to your users.

Remember to follow Facebook's advertising policies and guidelines when implementing ads in your app.

If you have any issues or questions, refer to the [documentation](https://github.com/capacitor-community/facebook-ad) or seek help from the Capacitor community.

Now you're ready to start monetizing your app with Facebook ads using the Capacitor Facebook Ad plugin!