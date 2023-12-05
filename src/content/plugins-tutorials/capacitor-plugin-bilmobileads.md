---
title: "Using capacitor-plugin-bilmobileads"
description: "Learn how to integrate ValueImpressionSDK with Ionic Capacitor using the capacitor-plugin-bilmobileads package."
created_at: "2021-10-29"
published: true
slug: "capacitor-plugin-bilmobileads"
---

# Using capacitor-plugin-bilmobileads

In this tutorial, we will learn how to integrate the ValueImpressionSDK with Ionic Capacitor using the capacitor-plugin-bilmobileads package. This package allows you to easily display banner, interstitial, and rewarded ads in your Ionic Capacitor app.

## Installation

To get started, you need to install the capacitor-plugin-bilmobileads package and sync your project.

```bash
npm install capacitor-plugin-bilmobileads
npx cap sync
```

### iOS Configuration

For iOS, you need to make some additional changes to your project.

1. Open your Info.plist file (located at `App/App/Info.plist`).
2. Add the following key-value pairs to the plist:

```xml
<key>GADIsAdManagerApp</key>
<true/>
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-your-app-id</string>
```

Replace `your-app-id` with your actual AdMob app ID.

### Android Configuration

For Android, you need to make some changes to your project.

1. Open the app's `build.gradle` file (located at `android/app/build.gradle`).
2. Add the JitPack repository to the build file:

```groovy
allprojects {
    repositories {
        ...
        maven { url 'https://jitpack.io' }
    }
}
```

3. Open the `MainActivity.java` file (located at `android/app/src/main/java/your/package/MainActivity.java`).
4. Add the `BilMobileAds` class to the list of plugins:

```java
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            add(BilMobileAds.class);
        }});
    }
}
```

Make sure to replace `your/package` with the actual package name of your app.

## Usage

First, import the necessary plugins and initialize the capacitor-plugin-bilmobileads package.

```typescript
import { PluginListenerHandle, Plugins } from '@capacitor/core';
const { BilMobileAds } = Plugins;

class MyComponent {
    constructor() {
        BilMobileAds.initialize({ testMode: false });
    }
}
```

Here are some of the available methods for using the capacitor-plugin-bilmobileads package:

### Creating a Banner Ad

To create a banner ad, use the `createBanner()` method. 

```typescript
BilMobileAds.createBanner({ adUnitId: 'your-banner-ad-id' });
```

Replace `your-banner-ad-id` with the actual ad unit ID for your banner ad.

### Loading and Showing the Banner Ad

To load the banner ad, use the `loadBanner()` method.

```typescript
BilMobileAds.loadBanner();
```

To show the banner ad, use the `showBanner()` method.

```typescript
BilMobileAds.showBanner();
```

### Hiding and Destroying the Banner Ad

To hide the banner ad, use the `hideBanner()` method.

```typescript
BilMobileAds.hideBanner();
```

To destroy the banner ad, use the `destroyBanner()` method.

```typescript
BilMobileAds.destroyBanner();
```

### Setting the Position of the Banner Ad

To set the position of the banner ad, use the `setPositionBanner()` method.

```typescript
BilMobileAds.setPositionBanner({ position: 'bottom' });
```

### Creating an Interstitial Ad

To create an interstitial ad, use the `createInterstitial()` method.

```typescript
BilMobileAds.createInterstitial({ adUnitId: 'your-interstitial-ad-id' });
```

Replace `your-interstitial-ad-id` with the actual ad unit ID for your interstitial ad.

### Preloading and Showing the Interstitial Ad

To preload the interstitial ad, use the `preLoadInterstitial()` method.

```typescript
BilMobileAds.preLoadInterstitial();
```

To show the interstitial ad, use the `showInterstitial()` method.

```typescript
BilMobileAds.showInterstitial();
```

### Destroying the Interstitial Ad

To destroy the interstitial ad, use the `destroyInterstitial()` method.

```typescript
BilMobileAds.destroyInterstitial();
```

### Checking if the Interstitial Ad is Ready

To check if the interstitial ad is ready to be shown, use the `isReadyInterstitial()` method.

```typescript
BilMobileAds.isReadyInterstitial();
```

### Creating a Rewarded Ad

To create a rewarded ad, use the `createRewarded()` method.

```typescript
BilMobileAds.createRewarded({ adUnitId: 'your-rewarded-ad-id' });
```

Replace `your-rewarded-ad-id` with the actual ad unit ID for your rewarded ad.

### Preloading and Showing the Rewarded Ad

To preload the rewarded ad, use the `preLoadRewarded()` method.

```typescript
BilMobileAds.preLoadRewarded();
```

To show the rewarded ad, use the `showRewarded()` method.

```typescript
BilMobileAds.showRewarded();
```

### Destroying the Rewarded Ad

To destroy the rewarded ad, use the `destroyRewarded()` method.

```typescript
BilMobileAds.destroyRewarded();
```

### Checking if the Rewarded Ad is Ready

To check if the rewarded ad is ready to be shown, use the `isReadyRewarded()` method.

```typescript
BilMobileAds.isReadyRewarded();
```

## Conclusion

In this tutorial, we learned how to integrate the ValueImpressionSDK with Ionic Capacitor using the capacitor-plugin-bilmobileads package. We covered the installation process, iOS and Android configurations, and usage of the package for displaying banner, interstitial, and rewarded ads in an Ionic Capacitor app. Feel free to explore the capacitor-plugin-bilmobileads package further to customize and optimize your ad integration.