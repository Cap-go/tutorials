---
title: "Using BlinkCard Capacitor Package"
description: "This tutorial will guide you through the process of using the BlinkCard Capacitor package to integrate AI-driven credit card scanning into your cross-platform apps."
created_at: "2021-10-22"
published: true
slug: "blinkcard-capacitor"
---

# Using BlinkCard Capacitor Package

In this tutorial, we will walk you through the steps to integrate the BlinkCard Capacitor package into your cross-platform apps. BlinkCard is an AI-driven credit card scanning software that allows you to scan credit cards using your device's camera.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Capacitor version 3.2.0 or newer
- BlinkCard iOS SDK: [https://github.com/BlinkCard/blinkcard-ios](https://github.com/BlinkCard/blinkcard-ios)
- BlinkCard Android SDK: [https://github.com/BlinkCard/blinkcard-android](https://github.com/BlinkCard/blinkcard-android)

For help with Capacitor, you can refer to the official [documentation](https://capacitorjs.com/docs). Please note that not all features of the native BlinkCard SDKs are available in the Capacitor plugin.

## Getting Started

1. Create a new Capacitor project if needed:

```shell
ionic start project_name --capacitor
```

2. Install the `blinkcard-capacitor` package:

```shell
npm install --save @microblink/blinkcard-capacitor
```

## Usage

The following steps outline how to use the BlinkCard Capacitor plugin in your app:

1. Import the `blinkcard-capacitor` package in your script:

```typescript
import * as BlinkCard from '@microblink/blinkcard-capacitor';
```

2. Initialize the plugin:

```typescript
// Initialize the BlinkCard plugin
BlinkCard.initialize();
```

3. Use the available methods and events provided by the BlinkCard Capacitor package to implement credit card scanning functionality in your app.

```typescript
// Start scanning
BlinkCard.startScanning()
  .then((result: BlinkCard.BlinkCardResult) => {
    // Handle scanning result
    console.log('Scanning result:', result);
  })
  .catch((error: any) => {
    // Handle scanning error
    console.error('Scanning error:', error);
  });

// Listen for the scanning completion event
BlinkCard.addOnScanningCompleteListener()
  .then((result: BlinkCard.BlinkCardResult) => {
    // Handle scanning completion event
    console.log('Scanning completed:', result);
  })
  .catch((error: any) => {
    // Handle error adding listener
    console.error('Error adding scanning completion listener:', error);
  });
```

4. Customize the functionality and UI of the BlinkCard scanner by modifying the parameters passed to the `startScanning` method.

```typescript
// Customize scanning options
const scanningOptions: BlinkCard.BlinkCardOptions = {
  // Set scanning language
  language: 'en',
  // Enable/disable scanning of card holder name
  scanCardHolderName: true,
  // Enable/disable scanning of card expiration date
  scanExpiryDate: true,
  // Set the overlay theme for the scanner
  overlayTheme: {
    backgroundColor: '#000',
    cornerColor: '#FF0000',
    maskColor: '#00000099',
    scanlineColor: '#FF0000',
    resultCardBackgroundColor: '#000000',
    resultCardFontColor: '#FFF',
  },
};

// Start scanning with custom options
BlinkCard.startScanning(scanningOptions)
  .then((result: BlinkCard.BlinkCardResult) => {
    // Handle scanning result
    console.log('Scanning result:', result);
  })
  .catch((error: any) => {
    // Handle scanning error
    console.error('Scanning error:', error);
  });
```

## Conclusion

In this tutorial, you learned how to integrate the BlinkCard Capacitor package into your cross-platform apps. You can now use the BlinkCard plugin to add credit card scanning functionality to your app. Remember that the Capacitor plugin provides a subset of the features available in the native SDKs. If you need access to the full set of features, consider using the native BlinkCard iOS and Android SDKs.

To explore more about the BlinkCard Capacitor plugin, you can refer to the official [documentation](https://github.com/BlinkCard/blinkcard-capacitor).