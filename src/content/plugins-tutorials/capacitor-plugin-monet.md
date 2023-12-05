---
title: "Using @tanishqmanuja/capacitor-plugin-monet"
description: "A tutorial on how to use the @tanishqmanuja/capacitor-plugin-monet package for Capacitor"
created_at: "2022-10-15"
published: true
slug: "capacitor-plugin-monet"
---

# Using @tanishqmanuja/capacitor-plugin-monet

This tutorial will guide you through the process of using the @tanishqmanuja/capacitor-plugin-monet package in your Capacitor project.

## Installation

To get started, make sure you have Capacitor and the necessary dependencies installed.

```bash
npm install -g @capacitor/core @capacitor/cli
```

Next, install the @tanishqmanuja/capacitor-plugin-monet package.

```bash
npm install @tanishqmanuja/capacitor-plugin-monet
```

## Configuration

After installing the package, you need to configure it in your project.

### Android

For Android, open the `MainActivity.java` file in your Android project and add the following import statement.

```java
import com.tanishqmanuja.capacitorpluginmonet.CapacitorPluginMonet;
```

Next, inside the `init` method of the MainActivity class, add the following line to initialize the plugin.

```java
add(PluginMonet.class);
```

### iOS

For iOS, open the `AppDelegate.swift` file in your iOS project and import the CapacitorPluginMonet module.

```swift
import CapacitorPluginMonet
```

Next, inside the `application(_:didFinishLaunchingWithOptions:)` method, add the following line to initialize the plugin.

```swift
self.bridge?.pluginManager?.register(PluginMonet.self, withPluginKey: "CapacitorPluginMonet")
```

## Usage

Once the plugin is configured, you can start using it in your code.

### Initialize Monet

To initialize the Monet plugin, use the `initializeMonet` method. This method takes a configuration object as a parameter. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorPluginMonet } = Plugins;

const config = {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_API_KEY',
};

CapacitorPluginMonet.initializeMonet(config);
```

Make sure to replace `YOUR_APP_ID` and `YOUR_API_KEY` with your own values.

### Show an Interstitial Ad

To show an interstitial ad, use the `showInterstitialAd` method. Here's an example:

```javascript
CapacitorPluginMonet.showInterstitialAd()
  .then(() => {
    console.log('Interstitial ad shown successfully');
  })
  .catch((error) => {
    console.error('Error showing interstitial ad:', error);
  });
```

### Show a Banner Ad

To show a banner ad, use the `showBannerAd` method. Here's an example:

```javascript
const bannerConfig = {
  adSize: 'BANNER',
  position: 'BOTTOM',
};

CapacitorPluginMonet.showBannerAd(bannerConfig)
  .then(() => {
    console.log('Banner ad shown successfully');
  })
  .catch((error) => {
    console.error('Error showing banner ad:', error);
  });
```

### Hide the Banner Ad

To hide the banner ad, use the `hideBannerAd` method. Here's an example:

```javascript
CapacitorPluginMonet.hideBannerAd()
  .then(() => {
    console.log('Banner ad hidden successfully');
  })
  .catch((error) => {
    console.error('Error hiding banner ad:', error);
  });
```

## Conclusion

In this tutorial, you learned how to install and use the @tanishqmanuja/capacitor-plugin-monet package in your Capacitor project. You learned how to configure the plugin for Android and iOS, as well as how to initialize Monet, show interstitial ads, show banner ads, and hide the banner ad.

Explore the additional capabilities of the @tanishqmanuja/capacitor-plugin-monet package and leverage it to monetize your Capacitor app effectively.