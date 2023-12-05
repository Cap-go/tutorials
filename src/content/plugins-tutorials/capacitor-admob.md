---
title: "Using @rdlabo/capacitor-admob Package"
description: "A tutorial on how to use the @rdlabo/capacitor-admob package to implement AdMob in your Capacitor app."
created_at: "2021-06-06"
published: true
slug: "capacitor-admob"
---

# Using @rdlabo/capacitor-admob Package

## Introduction

In this tutorial, we will learn how to use the @rdlabo/capacitor-admob package to implement AdMob in your Capacitor app. AdMob is a popular mobile advertising platform developed by Google that allows you to monetize your app by displaying ads to your users.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project
- An AdMob account and an Ad Unit ID

## Installation

To start using the @rdlabo/capacitor-admob package, you need to install it in your Capacitor app. Follow these steps:

1. Open your project directory in a terminal.
2. Run the following command to install the package:

```console
$ npm install --save @rdlabo/capacitor-admob
```

## Android Configuration

Next, we need to configure the package for Android. Follow these steps:

1. Open the `MainActivity.java` file located in the `android/app/src/main/java/**/**/` directory.
2. Add the `AdMob` class to the initialization list:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    ...
    add(jp.rdlabo.capacitor.plugin.admob.AdMob.class);
    ...
}});
```

3. Open the `AndroidManifest.xml` file located in the `android/app/src/main` directory.
4. Add the following XML elements under the `<manifest><application>` section:

```xml
<meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="@string/admob_app_id"/>
```

5. Open the `strings.xml` file located in the `android/app/src/main/res/values` directory.
6. Add the following line to define the AdMob App ID:

```xml
<string name="admob_app_id">[APP_ID]</string>
```

Make sure to replace `[APP_ID]` with your actual AdMob App ID.

## iOS Configuration

For iOS, we need to update the `AppDelegate.swift` file to configure the package. Follow these steps:

1. Open the `AppDelegate.swift` file located in the `ios/App/App` directory.
2. Add the `import GoogleMobileAds` line at the top of the file:

```swift
import GoogleMobileAds
```

3. Inside the `application(_:didFinishLaunchingWithOptions:)` method, add the following line:

```swift
GADMobileAds.sharedInstance().start(completionHandler: nil)
```

## Usage

Now that we have the package installed and configured, we can start using it to display ads in our app. Here is an example of how to show a banner ad:

```typescript
import { Plugins } from '@capacitor/core';

const { AdMob } = Plugins;

...
// Show a banner ad
async function showBannerAd() {
    await AdMob.showBanner();
}

// Hide the banner ad
async function hideBannerAd() {
    await AdMob.hideBanner();
}
...
```

You can also show interstitial and reward video ads using similar methods provided by the package.

## Conclusion

In this tutorial, we learned how to use the @rdlabo/capacitor-admob package to implement AdMob in a Capacitor app. We covered the installation and configuration steps for both Android and iOS platforms, as well as an example of how to show a banner ad. With this knowledge, you should be able to monetize your app by displaying ads to your users using AdMob.