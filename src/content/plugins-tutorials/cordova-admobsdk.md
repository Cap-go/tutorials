---
title: "Using Cordova AdMob SDK"
description: "A comprehensive tutorial on how to use the cordova-admobsdk package for monetizing your Cordova applications with Google AdMob."
created_at: "2022-11-22"
published: true
slug: "cordova-admobsdk"
---

# Using Cordova AdMob SDK

In this tutorial, we will learn how to use the cordova-admobsdk package to monetize your Cordova applications with Google AdMob. AdMob is a mobile advertising platform that allows developers to earn revenue by displaying ads in their mobile apps.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed on your system:

- Node.js and npm
- Cordova CLI
- Gradle (for Android builds)
- Xcode (for iOS builds)

## Step 1: Create a new Cordova Project

First, let's create a new Cordova project. Open your terminal or command prompt and run the following command:

```
cordova create my-admob-app com.example.admobapp AdMobApp
```

This command will create a new Cordova project named "my-admob-app" with the package name "com.example.admobapp" and the display name "AdMobApp".

## Step 2: Add the cordova-admobsdk Plugin

Next, navigate to your project directory and add the cordova-admobsdk plugin using the following command:

```
cd my-admob-app
cordova plugin add cordova-admobsdk
```

This will download and install the cordova-admobsdk plugin into your project.

## Step 3: Configure AdMob

To configure AdMob, you will need to create an AdMob account and obtain an App ID. Follow these steps to configure AdMob:

1. Sign in to your AdMob account or create a new account if you don't have one.
2. Go to the "Apps" tab and click on the "Add App" button.
3. Select the platform (Android or iOS) and enter the details for your app.
4. Once your app is added, you will be provided with an App ID. Make a note of this ID as we will need it later.

## Step 4: Initialize AdMob in your Cordova App

To initialize AdMob in your Cordova app, open the `index.js` file located in the `www/js` directory. Add the following code at the top of the file:

```javascript
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    if (window.AdMob) {
        window.AdMob.initialize({
            adId: 'YOUR_AD_ID',
            bannerAtTop: false,
            isTesting: false,
            autoShowBanner: true
        });
    }
}
```

Replace `'YOUR_AD_ID'` with the App ID you obtained from your AdMob account.

## Step 5: Display Banner Ads

To display banner ads in your Cordova app, add the following code to the `onDeviceReady` function:

```javascript
if (window.AdMob) {
    var adId = 'YOUR_AD_ID';
    var adOptions = {
        position: window.AdMob.AD_POSITION.BOTTOM_CENTER,
        size: window.AdMob.AD_SIZE.BANNER,
        overlap: false,
        autoShow: true
    };

    window.AdMob.createBanner(adOptions);
}
```

This code will create a banner ad at the bottom center of the screen using the specified Ad ID.

## Step 6: Display Interstitial Ads

To display interstitial ads in your Cordova app, add the following code to the `onDeviceReady` function:

```javascript
if (window.AdMob) {
    var adId = 'YOUR_AD_ID';

    window.AdMob.prepareInterstitial({
        adId: adId,
        autoShow: true
    });
}
```

This code will prepare an interstitial ad with the specified Ad ID and automatically show it when it's ready.

## Step 7: Track Ad Events

You can track various AdMob events in your Cordova app. For example, you can listen to the `onAdLoaded` event to perform certain actions when an ad is loaded. Here's an example:

```javascript
if (window.AdMob) {
    window.AdMob.onAdLoaded().subscribe(function () {
        console.log('Ad loaded successfully');
    });
}
```

You can find more information about AdMob events in the [API Overview](https://github.com/floatinghotpot/cordova-admob-pro/wiki/1.1-API-Overview) section of the cordova-admobsdk documentation.

## Step 8: Build and Run the App

Finally, build and run your Cordova app on a device or emulator using the following commands:

```
cordova platform add android
cordova run android
```

Replace `android` with `ios` if you're targeting iOS.

Congratulations! You have successfully integrated AdMob into your Cordova app. You should now see banner ads and interstitial ads displayed in your app.

## Conclusion

In this tutorial, we learned how to use the cordova-admobsdk package to monetize Cordova applications with Google AdMob. We covered the steps to add the plugin, configure AdMob, initialize AdMob in your app, display banner ads, display interstitial ads, and track ad events. By following these steps, you can easily start earning revenue by displaying ads in your Cordova apps.

Remember to always follow the AdMob policies and guidelines to ensure a smooth ad experience for your users.

Happy coding!