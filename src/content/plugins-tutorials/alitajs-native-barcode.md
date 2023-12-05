---
title: "Using the @alitajs/barcode package"
description: "A tutorial on how to use the @alitajs/barcode package to scan barcodes in a Capacitor project"
created_at: "2021-10-08"
published: true
slug: "alitajs-native-barcode"
---

# Using the @alitajs/barcode package

In this tutorial, we will explore how to use the `@alitajs/barcode` package in a Capacitor project to scan barcodes. The `@alitajs/barcode` package is a plugin that provides barcode scanning functionality using Mlkit vision and CameraX.

## Installation

To begin, install the `@alitajs/barcode` package in your existing Capacitor project.

### Android

1. Add the following dependency to your `build.gradle` file:

   ```java
   repositories {
     maven { url 'https://jitpack.io' }
   }

   dependencies {
     implementation 'com.github.alitajs:alitajs-native-barcode:Tag'
   }
   ```

2. Sync your project.

### iOS

1. Add the following dependency to your `Podfile`:

   ```ruby
   pod 'AlitajsBarcode'
   ```

2. Run `pod install` to install the new dependency.

## Usage

Now that the package is installed, we can use it to scan barcodes in our Capacitor project.

1. Import the necessary plugins from `@capacitor/core`:

   ```javascript
   import { Plugins } from '@capacitor/core';
   ```

2. Retrieve the `MlkitBarcodescanner` plugin from the `Plugins` object:

   ```javascript
   const { MlkitBarcodescanner } = Plugins;
   ```

3. Create a function to handle barcode scanning:

   ```javascript
   const scanBarcode = async () => {
     let result = await MlkitBarcodescanner.scanBarcode();
     console.log(result);
   };
   ```

4. Call the `scanBarcode` function to scan a barcode:

   ```javascript
   scanBarcode();
   ```

5. The result of the barcode scanning will be logged to the console.

That's it! You have successfully implemented barcode scanning in your Capacitor project using the `@alitajs/barcode` package.

## Conclusion

In this tutorial, we learned how to use the `@alitajs/barcode` package to scan barcodes in a Capacitor project. We covered the installation process for both Android and iOS platforms and demonstrated how to use the package's `scanBarcode` function. With this knowledge, you can easily integrate barcode scanning functionality into your own Capacitor projects.