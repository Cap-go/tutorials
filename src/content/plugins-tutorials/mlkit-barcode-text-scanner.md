---
title: "Using the mlkit-text-barcode-scanner package"
description: "A step-by-step tutorial on how to use the mlkit-text-barcode-scanner package for barcode scanning."
created_at: "2022-06-01"
published: true
slug: mlkit-barcode-text-scanner
---

# Using the mlkit-text-barcode-scanner package

This tutorial will guide you through the process of using the mlkit-text-barcode-scanner package to scan barcodes in your mobile application.

## Installation

To install the mlkit-text-barcode-scanner package, follow these steps:

1. Open your terminal and navigate to your project directory.

2. Run the following command to install the package:

   ```
   npm install mlkit-text-barcode-scanner
   ```

## Example Usage

Here's an example of how to use the mlkit-text-barcode-scanner package in your code:

```javascript
import { Plugins } from '@capacitor/core'
const { MlkitBarcodeScanner } = Plugins

// Define a function to handle barcode scanning
const scanBarcode = async () => {
  try {
    const result = await MlkitBarcodeScanner.scanBarcode()
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

// Call the scanBarcode function to start scanning
scanBarcode()
```

## API Documentation

The mlkit-text-barcode-scanner package provides the following API methods:

### `scanBarcode()`

This method initiates the barcode scanning process. It returns a promise that resolves with the scanned barcode data.

#### Example

```javascript
try {
  const result = await MlkitBarcodeScanner.scanBarcode()
  console.log(result)
} catch (error) {
  console.error(error)
}
```

## Conclusion

In this tutorial, you have learned how to install and use the mlkit-text-barcode-scanner package for barcode scanning in your mobile application. You can now integrate barcode scanning functionality into your app with ease using this package. Happy coding!