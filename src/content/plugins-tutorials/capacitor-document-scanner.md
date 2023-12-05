---
title: "Using the Capacitor Document Scanner Package"
description: "Learn how to use the capacitor-document-scanner package to scan documents in your mobile app."
created_at: "2022-01-01"
published: true
slug: "capacitor-document-scanner"
---

# Using the Capacitor Document Scanner Package

The Capacitor Document Scanner package is a useful plugin that allows you to easily integrate document scanning functionality into your Capacitor-based mobile app. With this package, you can enable users to scan notes, homework, business cards, receipts, and any other rectangular-shaped document using their device's camera. In this tutorial, we will guide you through the process of installing and using the Capacitor Document Scanner package.

## Installation

To install the Capacitor Document Scanner package, open your terminal and run the following command:

```
npm install capacitor-document-scanner
```

Next, sync the package with your Capacitor project by running:

```
npx cap sync
```

## Usage

Once you've successfully installed the package, you can start using it in your app. Here's a basic example of how to use the Capacitor Document Scanner package:

```typescript
import { Capacitor } from '@capacitor/core';
import { DocumentScanner } from 'capacitor-document-scanner';

const scanDocument = async () => {
  // Start the document scanner
  const { scannedImages } = await DocumentScanner.scanDocument();

  // Get back an array with the scanned image file paths
  if (scannedImages.length > 0) {
    // Set the img src to view the first scanned image
    const scannedImage = document.getElementById('scannedImage') as HTMLImageElement;
    scannedImage.src = Capacitor.convertFileSrc(scannedImages[0]);
  }
};

// Call the scanDocument function when the scan button is clicked
document.getElementById('scanButton').addEventListener('click', scanDocument);
```

This example shows how to trigger the document scanning process when a button with the `id` "scanButton" is clicked. The scanned images are returned as an array of file paths, which you can use to display or process the scanned documents in your app.

## Conclusion

In this tutorial, we covered the basics of using the Capacitor Document Scanner package to implement document scanning functionality in your Capacitor-based mobile app. You learned how to install the package, start the document scanner, and retrieve the scanned images. With the Capacitor Document Scanner package, you can enhance your app by allowing users to easily capture and process documents using their devices.