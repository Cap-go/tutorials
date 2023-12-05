---
title: "Using the capacitor-background-geolocation package"
description: "A tutorial on how to use the capacitor-background-geolocation package"
created_at: "2022-11-01"
published: true
slug: "capacitor-backround-geolocation"
---

# Using the capacitor-background-geolocation package

The `capacitor-background-geolocation` package is a powerful plugin that allows you to enable background geolocation services in your Capacitor project. This tutorial will guide you through the process of installing and using the package.

## Installation

To install the `capacitor-background-geolocation` package, follow these steps:

1. Open your terminal and navigate to your Capacitor project directory.

2. Run the following command if you are using yarn:
   ```bash
   yarn add @transistorsoft/capacitor-background-geolocation
   yarn add @transistorsoft/capacitor-background-fetch
   npx cap sync
   ```

   Or run the following command if you are using npm:
   ```bash
   npm install @transistorsoft/capacitor-background-geolocation --save
   npm install @transistorsoft/capacitor-background-fetch --save
   npx cap sync
   ```

## Setup Guides

### iOS

If you are developing for iOS, you will need to follow the required iOS setup guide. Please refer to the [Required iOS Setup](help/INSTALL-IOS.md) guide for detailed instructions.

### Android

If you are developing for Android, you will need to follow the required Android setup guide. Please refer to the [Required Android Setup](help/INSTALL-ANDROID.md) guide for detailed instructions.

## Configuring your license

To configure your license, follow these steps:

1. Login to the [Customer Dashboard](http://www.transistorsoft.com/shop/customers) and generate an application key.

2. Open the `android/app/src/main/AndroidManifest.xml` file in your project.

3. Add your license key to the `com.transistorsoft.locationmanager.license` meta-data tag:
   ```diff
   <manifest xmlns:android="http://schemas.android.com/apk/res/android"
       package="com.transistorsoft.backgroundgeolocation.react">

     <application
       android:name=".MainApplication"
       android:allowBackup="true"
       android:label="@string/app_name"
       android:icon="@mipmap/ic_launcher"
       android:theme="@style/AppTheme">

       <!-- capacitor-background-geolocation license -->
   +     <meta-data android:name="com.transistorsoft.locationmanager.license" android:value="YOUR_LICENSE_KEY_HERE" />
       .
       .
       .
     </application>
   </manifest>
   ```

## Using the plugin

To use the `capacitor-background-geolocation` plugin in your project, follow these steps:

1. Import the `BackgroundGeolocation` module at the beginning of your JavaScript/TypeScript file:
   ```javascript
   import BackgroundGeolocation from '@transistorsoft/capacitor-background-geolocation';
   ```

2. Wire up event listeners for location updates, permissions, and other events:
   ```javascript
   BackgroundGeolocation.addListener('onLocation', (location) => {
     console.log('Got new location', location);
     // Put your logic here.
   });

   BackgroundGeolocation.addListener('onPermissions', (data) => {
     console.log('Location permissions:', data);
     // Start geolocation if user granted location permissions.
     if (data.fineLocation) {
       BackgroundGeolocation.start();
     }
   });
   ```

3. Initialize and configure the plugin:
   ```javascript
   BackgroundGeolocation.initialize({
     notificationText: 'Your app is running, tap to open.',
     notificationTitle: 'App Running',
     updateInterval: 10000,
     requestedAccuracy: BgGeolocationAccuracy.HIGH_ACCURACY,
     smallIcon: 'ic_small_icon', // Optional: Add a small icon for the notification.
     startImmediately: true, // Optional: Start getting location updates right away.
   });
   ```

4. Start the geolocation service:
   ```javascript
   BackgroundGeolocation.start();
   ```

   Make sure to call the `start()` method only after the `initialize()` method has resolved.

And that's it! You have successfully installed and used the capacitor-background-geolocation package in your Capacitor project.

Remember to refer to the official documentation for more detailed information on the available methods and configurations.

