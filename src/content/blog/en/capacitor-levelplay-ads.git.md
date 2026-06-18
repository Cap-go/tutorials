---
title: Using Capacitor-LevelPlay-Ads Package
description: This tutorial will guide you on how to use the Capacitor-LevelPlay-Ads package in your Ionic application.
created_at: 2022-04-18
published: true
slug: capacitor-levelplay-ads.git
locale: en
---

## Capacitor-LevelPlay-Ads Package Tutorial

Capacitor-LevelPlay-Ads is a plugin that allows you to integrate LevelPlay Ads functionality into your Capacitor-based Ionic applications. Follow the steps below to use this package in your project.

### Installation

To install the Capacitor-LevelPlay-Ads package, run the following command:

```console
npm install capacitor-levelplay-ads
```

### iOS Setup

1. Update the **Info.plist** file in your iOS project. Add the following lines:

```xml
<key>LevelPlayAppId</key>
<string>Your_LevelPlay_App_ID_Here</string>
<key>LevelPlayAdUnitID</key>
<string>Your_LevelPlay_Ad_Unit_ID_Here</string>
```

### Android Setup

1. Update the **AndroidManifest.xml** file in your Android project. Add the following lines:

```xml
<meta-data android:name="LevelPlayAppId" android:value="Your_LevelPlay_App_ID_Here" />
<meta-data android:name="LevelPlayAdUnitID" android:value="Your_LevelPlay_Ad_Unit_ID_Here" />
```

### Initializing the Plugin

To initialize the Capacitor-LevelPlay-Ads plugin, add the following code snippet in your application:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorLevelPlayAds } = Plugins;

CapacitorLevelPlayAds.initialize();
```

### Showing LevelPlay Ads

To show different types of LevelPlay Ads, you can use the following methods:

#### Banner Ad

```typescript
CapacitorLevelPlayAds.showBannerAd();
```

#### Interstitial Ad

```typescript
CapacitorLevelPlayAds.showInterstitialAd();
```

#### Rewarded Interstitial Ad

```typescript
CapacitorLevelPlayAds.showRewardedInterstitialAd();
```

### Additional Configurations

You can also configure the LevelPlay Ads plugin according to your requirements. Check the official documentation for more details.

That's it! You have now successfully integrated and used the Capacitor-LevelPlay-Ads package in your Ionic application.
