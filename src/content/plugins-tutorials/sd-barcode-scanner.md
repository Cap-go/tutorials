---
title: "Using the sd-barcode-scanner Package"
description: "A tutorial on how to use the sd-barcode-scanner package to scan barcodes in your mobile app."
created_at: "2021-10-30"
published: true
slug: "sd-barcode-scanner"
---

# Using the sd-barcode-scanner Package

The sd-barcode-scanner package is a plugin that allows you to integrate barcode scanning functionality into your mobile app. This tutorial will guide you through the steps of setting up and using the sd-barcode-scanner package in your project.

## Installation

To install the sd-barcode-scanner package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project's directory.
3. Run the following command to install the package:

```
npm install sd-barcode-scanner
```

## Usage

Once you have installed the package, you can import and use it in your code as follows:

```javascript
import { BarcodeScanner } from 'sd-barcode-scanner';

// Initialize the barcode scanner
const barcodeScanner = new BarcodeScanner();

// Request permission to access the device's camera
const permissionStatus = await barcodeScanner.requestCameraPermission();

if (permissionStatus === 'granted') {
  // Start the barcode scanning process
  const result = await barcodeScanner.scan();

  // Handle the scan result
  if (result && !result.cancelled) {
    console.log('Scanned barcode:', result.text);
  } else {
    console.log('Barcode scanning was cancelled.');
  }
} else {
  console.log('Camera permission was not granted.');
}
```

In the above example, we first import the `BarcodeScanner` class from the sd-barcode-scanner package. Then, we initialize an instance of the `BarcodeScanner` class.

Next, we request permission to access the device's camera using the `requestCameraPermission` method. This method returns a promise that resolves with the permission status.

If the permission is granted, we can start the barcode scanning process by calling the `scan` method. This method returns a promise that resolves with the scan result.

Finally, we handle the scan result. If the result is not `undefined` and is not cancelled, we log the scanned barcode text to the console. Otherwise, we log a message indicating that the barcode scanning was cancelled.

## Conclusion

In this tutorial, you have learned how to use the sd-barcode-scanner package to integrate barcode scanning functionality into your mobile app. You have learned how to install the package and how to use the `BarcodeScanner` class to request camera permission and perform barcode scanning.

With this knowledge, you can now enhance your app by allowing users to scan barcodes conveniently. Happy coding!