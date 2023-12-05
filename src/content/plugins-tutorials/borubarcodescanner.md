---
title: "Using boru-barcode-scanner Package"
description: "This tutorial will guide you through the process of using the boru-barcode-scanner package to scan barcodes in your application."
created_at: "2022-10-04"
published: true
slug: borubarcodescanner
---

# Using boru-barcode-scanner Package

The boru-barcode-scanner package provides a convenient way to scan barcodes in your application. It supports both iOS and Android platforms and offers a simple API for barcode scanning.

## Prerequisites

Before we can start using the boru-barcode-scanner package, we need to make some configurations in our project. Follow the instructions below based on your platform.

### iOS

1. Open the Info.plist file in Xcode (right-click > Open As > Property List).
2. Click on the tiny `+` button next to "Information Property List".
3. Set the key as "Privacy - Camera Usage Description" and the value as "To be able to scan barcodes".

For more information, refer to the [Apple developer documentation](https://developer.apple.com/documentation/bundleresources/information_property_list/nscamerausagedescription).

### Android

1. Open the AndroidManifest.xml file in your project.
2. Add the following lines to the manifest:

```xml
<uses-permission android:name="android.permission.CAMERA" />

<uses-sdk tools:overrideLibrary="com.google.zxing.client.android" />
```

## Installation

To install the boru-barcode-scanner package, run the following command in your terminal:

```bash
npm install boru-barcode-scanner
```

## Usage

After installing the package, we can start using it in our application. Here's an example of how to scan a barcode:

```javascript
import { BarcodeScanner } from 'boru-barcode-scanner';

const startScan = async () => {
  // Check camera permission
  await BarcodeScanner.checkPermission({ force: true });

  // Hide WebView background
  BarcodeScanner.hideBackground();

  const result = await BarcodeScanner.startScan();

  if (result.hasContent) {
    console.log(result.content);
  }
};
```

The `startScan` function checks the camera permission, hides the background of the WebView, and starts the barcode scanning process. It waits for the result and logs the scanned content if available.

### Stopping a Scan

To manually stop a scan before the result is obtained, you can use the `stopScan` function:

```javascript
import { BarcodeScanner } from 'boru-barcode-scanner';

const stopScan = () => {
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
};
```

The `stopScan` function shows the WebView background and stops the scanning process.

### Additional Configuration

If you are using the boru-barcode-scanner package with Ionic, you may need to set additional CSS variables. Refer to the Ionic documentation for details.

## Summary

In this tutorial, we have learned how to use the boru-barcode-scanner package to scan barcodes in our application. We covered the necessary configurations for iOS and Android platforms, the installation process, and provided sample code for starting and stopping a scan.