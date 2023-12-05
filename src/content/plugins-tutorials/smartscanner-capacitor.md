---
title: "Using @idpass/smartscanner-capacitor Package"
description: "Learn how to use the @idpass/smartscanner-capacitor package to scan MRZ, NFC, and barcodes in your Capacitor app."
created_at: "2022-10-10"
published: true
slug: smartscanner-capacitor
---

# Using @idpass/smartscanner-capacitor Package

In this tutorial, we will learn how to use the `@idpass/smartscanner-capacitor` package to add scanning functionality to your Capacitor app. This package provides a plugin that allows you to scan MRZ (Machine Readable Zone), NFC, and barcodes.

## Installation

To get started, you need to install the `@idpass/smartscanner-capacitor` package in your Capacitor app. You can use either npm or yarn to install the package. Open your terminal and run the following command:

```bash
# Using npm
npm install @idpass/smartscanner-capacitor

# Using yarn
yarn add @idpass/smartscanner-capacitor
```

Once the installation is complete, make sure to sync the project with Capacitor:

```bash
npx cap sync
```

## Usage

To use the `@idpass/smartscanner-capacitor` package in your app, you need to import the `Plugins` object from the `@capacitor/core` package. This object is the registry of all available plugins in Capacitor.

```javascript
import { Plugins } from '@capacitor/core';

const { SmartScannerPlugin } = Plugins;
```

### MRZ Scanning

To perform MRZ scanning, use the `executeScanner` method of the `SmartScannerPlugin`. Here's an example:

```javascript
const result = await SmartScannerPlugin.executeScanner({
  action: 'START_SCANNER',
  options: {
    mode: 'mrz',
    mrzFormat: 'MRTD_TD1',
    config: {
      background: '#89837c',
      branding: false,
      isManualCapture: true,
      showGuide: true,
    },
  },
});
```

In the above example, we start the scanner in the MRZ mode with the specified configuration options. You can customize the background color, branding, manual capture, and guide display based on your app requirements.

### NFC Scanning

To perform NFC scanning, use the same `executeScanner` method with the NFC mode. Here's an example:

```javascript
const result = await SmartScannerPlugin.executeScanner({
  action: 'START_SCANNER',
  options: {
    mode: 'nfc-scan',
    config: {
      background: '#89837c',
      branding: false,
      isManualCapture: false,
    },
  },
});
```

In the above example, we start the scanner in the NFC mode. Again, you can customize the background color, branding, and manual capture based on your app requirements.

### Barcode Scanning

To perform barcode scanning, use the `executeScanner` method with the barcode mode. Here's an example:

```javascript
const result = await SmartScannerPlugin.executeScanner({
  action: 'START_SCANNER',
  options: {
    mode: 'barcode',
    barcodeOptions: {
      barcodeFormats: ['AZTEC', 'CODABAR', 'CODE_39', 'CODE_93', 'CODE_128', 'DATA_MATRIX', 'EAN_8', 'EAN_13', 'QR_CODE', 'UPC_A', 'UPC_E', 'PDF_417'],
    },
    config: {
      background: '#ffc234',
      label: 'Sample Label',
    },
  },
});
```

In the above example, we start the scanner in the barcode mode with the specified barcode formats and configuration options. Customize the background color and label based on your app requirements.

## Conclusion

In this tutorial, we learned how to use the `@idpass/smartscanner-capacitor` package to add scanning functionality to a Capacitor app. We explored the MRZ, NFC, and barcode scanning modes and saw how to configure them based on our app requirements. Now you can easily integrate scanning features into your Capacitor app using this powerful package.