---
title: "Using Capacitor Ads Plugin"
description: "A tutorial on how to use the capacitor-ads-plugin package in your Capacitor projects."
created_at: "2021-09-15"
published: true
slug: "capacitor-ads-plugin"
---

# Using Capacitor Ads Plugin

In this tutorial, we will learn how to integrate ads into your Capacitor project using the capacitor-ads-plugin package. This plugin provides a simple and unified API to display ads across different platforms.

## Prerequisites

Before starting, make sure you have the following requirements:

1. Capacitor CLI installed globally:

```shell
npm install -g @capacitor/cli
```

2. Capacitor initialized in your project:

```shell
npx cap init
```

3. An account with the respective ad network (e.g., Google AdMob).

## Installation

To install the capacitor-ads-plugin package, run the following command in your project's root directory:

```shell
npm install capacitor-ads-plugin
```

Next, sync your project with Capacitor:

```shell
npx cap sync
```

## Configuration

### Android Configuration

#### 1. Register your app with the ad network

Before you can use ads in your app, you need to register your app with the ad network and obtain an app ID or ad unit ID.

#### 2. Add your ad network configuration

Open the `android/app/src/main/res/values/strings.xml` file and add the following lines:

```xml
<string name="admob_app_id">YOUR_ADMOB_APP_ID</string>
```

Replace `YOUR_ADMOB_APP_ID` with your AdMob app ID.

#### 3. Configure the AndroidManifest.xml file

Open the `android/app/src/main/AndroidManifest.xml` file and add the following permissions and activity declaration:

```xml
<manifest>
  <!-- Add the following permissions -->
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

  <!-- Add the following activity declaration -->
  <application>
    <activity
      android:name="com.getcapacitor.PluginActivity"
      android:configChanges="..."
      android:theme="@style/CapacitorTheme"
      android:label="@string/app_name">
    </activity>
  </application>
</manifest>
```

Replace `...` with the existing configuration in the `AndroidManifest.xml` file.

### iOS Configuration

#### 1. Register your app with the ad network

Register your app with the ad network and obtain an app ID or ad unit ID.

#### 2. Add your ad network configuration

Open the `ios/App/App/Info.plist` file and add the following key-value pair:

```xml
<key>GADApplicationIdentifier</key>
<string>YOUR_ADMOB_APP_ID</string>
```

Replace `YOUR_ADMOB_APP_ID` with your AdMob app ID.

## Usage

### Initialize the plugin

In your app's entry file (e.g., `index.ts` or `main.ts`), import and initialize the ads plugin:

```typescript
import { Plugins } from '@capacitor/core';
import { AdsPlugin } from 'capacitor-ads-plugin';

// Initialize the plugin
const { Ads } = Plugins;
const adsPlugin = new AdsPlugin();

// Add the ads plugin to the Capacitor Plugins
Plugins.Ads = adsPlugin;
```

### Show an interstitial ad

To show an interstitial ad, use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { Ads } = Plugins;

// Show the interstitial ad
Ads.showInterstitial();
```

### Show a rewarded video ad

To show a rewarded video ad, use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { Ads } = Plugins;

// Show the rewarded video ad
Ads.showRewardedVideo();
```

## Conclusion

In this tutorial, we learned how to integrate ads into a Capacitor project using the capacitor-ads-plugin package. We covered the installation, configuration, and usage of the plugin for both Android and iOS platforms. You can now enhance your app by monetizing it with ads.

Remember to test your ads thoroughly and ensure they comply with the ad network's policies.

Happy coding!