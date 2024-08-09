```
---
"title": "Using Capacitor Document Scanner Mod Package"
"description": "This blog post tutorial will guide you through using the capacitor-document-scanner-mod package to scan documents on Android and iOS."
"created_at": "2023-10-05"
"published": true
slug: document-scanner-plugin
---

# Using Capacitor Document Scanner Mod Package

The `capacitor-document-scanner-mod` package is a powerful Capacitor plugin that allows you to easily integrate document scanning functionality into your Android and iOS applications. In this tutorial, we will walk through the steps required to set up and use this package in your Capacitor project.

## Installation

First, you need to install the `capacitor-document-scanner-mod` package using npm:

```bash
npm install capacitor-document-scanner-mod
npx cap sync
```

This will add the package to your project and make it available in your Capacitor application.

## Usage

To use the document scanner functionality in your app, follow these simple steps:

1. Import the `DocumentScanner` class from the `capacitor-document-scanner-mod` package:

```typescript
import { DocumentScanner } from 'capacitor-document-scanner-mod';
```

2. Start the document scanning process using the `scanDocument` method provided by the `DocumentScanner` class:

```typescript
const scanDocument = async () => {
  const { scannedImages } = await DocumentScanner.scanDocument();

  if (scannedImages.length > 0) {
    const scannedImage = document.getElementById('scannedImage') as HTMLImageElement;
    scannedImage.src = Capacitor.convertFileSrc(scannedImages[0]);
  }
};
```

3. Display the scanned image in your app as needed.

## Conclusion

In this tutorial, we have learned how to integrate the `capacitor-document-scanner-mod` package into a Capacitor project and use it to scan documents. This package provides an easy-to-use API for document scanning, making it simple to add this feature to your own Android and iOS applications.

Start scanning documents today with the `capacitor-document-scanner-mod` package!
```
