---
title: "Using the @capacitor-mlkit/barcode-scanning Package"
description: "In this tutorial, we will learn how to use the @capacitor-mlkit/barcode-scanning package to scan barcodes in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: capacitor-mlkit
---

# Using the @capacitor-mlkit/barcode-scanning Package

In this tutorial, we will learn how to use the `@capacitor-mlkit/barcode-scanning` package to scan barcodes in your Capacitor app. This package utilizes the ML Kit Barcode Scanning API provided by Google.

## Installation

To begin, make sure you have Capacitor installed in your project. If not, you can install it by following the [official Capacitor installation guide](https://capacitorjs.com/docs/getting-started).

Once Capacitor is set up, you can install the `@capacitor-mlkit/barcode-scanning` package by running the following command:

```
npm install @capacitor-mlkit/barcode-scanning
```

## Configuration

### Android Configuration

No additional configuration is required for Android. The package relies on CameraX, which is included by default in modern Android projects.

### iOS Configuration

For iOS, you need to add the `NSCameraUsageDescription` key to your app's Info.plist file with a description of why your app needs access to the device camera. Open your app's Info.plist file (`MyApp/MyApp/Info.plist`) and add the following entry:

```xml
<key>NSCameraUsageDescription</key>
<string>We need access to your camera to scan barcodes.</string>
```

## Usage

To use the barcode scanning functionality in your app, follow these steps:

1. Import the necessary plugin from `@capacitor/core`:

```javascript
import { Plugins } from '@capacitor/core';
const { MlkitBarcodescanner } = Plugins;
```

2. Create a function to handle barcode scanning:

```javascript
const scanBarcode = async () => {
  let result = await MlkitBarcodescanner.scanBarcode();
  console.log(result);
};
```

3. Call the `scanBarcode` function to trigger the barcode scanning:

```javascript
scanBarcode();
```

4. The `scanBarcode` function returns a result object. You can access the scanned barcode data using the `result` object:

```javascript
console.log(result);
```

This is the basic usage of the `@capacitor-mlkit/barcode-scanning` package. You can further customize the scanning behavior and UI based on your app's requirements.

## Conclusion

In this tutorial, we have learned how to use the `@capacitor-mlkit/barcode-scanning` package to scan barcodes in a Capacitor app. We covered the installation, configuration, and basic usage of the package. You can now integrate barcode scanning into your app and explore additional features provided by the ML Kit Barcode Scanning API.