---
title: "Using @transistorsoft/capacitor-background-geolocation in your Capacitor App"
description: "A comprehensive tutorial on how to use the @transistorsoft/capacitor-background-geolocation package in your Capacitor app to track device location in the background."
created_at: "2021-10-15"
published: true
slug: "capacitor-background-geolocation"
---

# Using @transistorsoft/capacitor-background-geolocation in your Capacitor App

The `@transistorsoft/capacitor-background-geolocation` package is a powerful and feature-rich plugin for tracking device location in the background in your Capacitor app. It provides precise location information even when the app is not in the foreground, making it ideal for applications that require location-based services. In this tutorial, we will explore how to install and utilize this package in your Capacitor app.

## Prerequisites

Before we begin, ensure that you have the following prerequisites:

- Capacitor 3+ installed in your project.
- Basic knowledge of Capacitor and Ionic framework.
- A valid license key for the `capacitor-background-geolocation` package.

## Installation

To install the `@transistorsoft/capacitor-background-geolocation` package, follow these steps:

1. Open your terminal and navigate to the root directory of your Capacitor app.
2. Run the following command if you are using Yarn:
   ```bash
   yarn add @transistorsoft/capacitor-background-geolocation
   ```
   Alternatively, if you are using npm, run:
   ```bash
   npm install @transistorsoft/capacitor-background-geolocation --save
   ```
3. Next, you need to install the `@transistorsoft/capacitor-background-fetch` package. Run the following command if you are using Yarn:
   ```bash
   yarn add @transistorsoft/capacitor-background-fetch
   ```
   Alternatively, for npm, run:
   ```bash
   npm install @transistorsoft/capacitor-background-fetch --save
   ```
4. Finally, sync your Capacitor project with the native platform by running:
   ```bash
   npx cap sync
   ```

## Setup Guides

To use the `@transistorsoft/capacitor-background-geolocation` package, you need to perform some additional setup for iOS and Android platforms. Follow the appropriate setup guides based on your target platform:

### iOS

- [Required iOS Setup](link_to_ios_setup_guide)

### Android

- [Required Android Setup](link_to_android_setup_guide)

## Using the Plugin

To use the `@transistorsoft/capacitor-background-geolocation` package in your app, follow these steps:

1. Import the `BackgroundGeolocation` module in your code:
   ```javascript
   import BackgroundGeolocation from '@transistorsoft/capacitor-background-geolocation';
   ```

2. Before using any API methods that require location services, ensure that you have called the `ready()` method and it has resolved:
   ```javascript
   BackgroundGeolocation.ready(config).then((state) => {
     // The `ready()` method has now resolved.
     // You can now use location-based API methods.
   });
   ```

3. Configure the desired options for the plugin:
   ```javascript
   const config = {
     desiredAccuracy: 100,
     stationaryRadius: 50,
     distanceFilter: 100,
     notificationTitle: 'Background location tracking',
     notificationText: 'Enabled',
   };
   ```

4. Start tracking the device's location:
   ```javascript
   BackgroundGeolocation.start();
   ```

5. You can also listen for various events emitted by the plugin to handle location updates:
   ```javascript
   BackgroundGeolocation.on('location', (location) => {
     // Handle location update.
   });

   BackgroundGeolocation.on('motionchange', (isMoving) => {
     // Handle motion change event.
   });
   ```

6. To stop tracking the device's location, call the `stop()` method:
   ```javascript
   BackgroundGeolocation.stop();
   ```

And that's it! You have successfully integrated the `@transistorsoft/capacitor-background-geolocation` package into your Capacitor app and can now track the device's location in the background.

## Example

Here's an example that demonstrates the three main steps of