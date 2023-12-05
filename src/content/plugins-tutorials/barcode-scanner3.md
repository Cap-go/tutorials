---
title: "Using the @diadal/barcode-scanner Package"
description: "A tutorial on how to use the @diadal/barcode-scanner package for barcode scanning"
created_at: "2021-10-20"
published: true
slug: barcode-scanner3
---

# Using the @diadal/barcode-scanner Package

This tutorial will guide you through the process of using the @diadal/barcode-scanner package to implement barcode scanning functionality in your project.

## Installation

To begin, make sure you have the package installed in your project. You can install it using npm or yarn:

```bash
npm install @diadal/barcode-scanner
```

or

```bash
yarn add @diadal/barcode-scanner
```

## Usage

Once the package is installed, you can import it in your project and start using it. Here is an example of how to use the barcode scanner:

```javascript
import { BarcodeScanner } from '@diadal/barcode-scanner';

// Create an instance of the barcode scanner
const scanner = new BarcodeScanner();

// Request camera permission
scanner.requestCameraPermission()
  .then(() => {
    // Camera permission granted, now start scanning for barcodes
    scanner.startScan((barcode) => {
      console.log('Barcode scanned:', barcode);
    });
  })
  .catch((error) => {
    console.error('Failed to request camera permission:', error);
  });
```

In the above example, we import the `BarcodeScanner` class from the `@diadal/barcode-scanner` package, create an instance of it, and then use the `requestCameraPermission` method to request permission to access the device's camera. Once the permission is granted, we can start scanning for barcodes using the `startScan` method. A callback function is passed to handle the scanned barcode data.

## Troubleshooting

If you encounter any issues with the package, here are some common troubleshooting steps you can try:

1. **Error: Plugin BarcodeScanner does not respond to method call** (iOS): In Xcode, click on `Product` > `Clean Build Folder` and try to build again.

2. **Cannot resolve symbol BarcodeScanner** (Android Studio): In Android Studio, click `File` > `Sync Project with Gradle Files` and try to build again.

## TODO

Here are some additional features that are on the development roadmap for the @diadal/barcode-scanner package:

- Support for switching between cameras
- Support for toggling the flashlight
- Support for web

I hope this tutorial helps you get started with using the @diadal/barcode-scanner package. Happy coding!