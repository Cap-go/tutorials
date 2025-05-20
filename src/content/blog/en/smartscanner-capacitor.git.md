---
title: How to Use @idpass/smartscanner-capacitor Package
description: >-
  A tutorial on integrating and using the @idpass/smartscanner-capacitor package
  to scan MRZ, NFC, and barcodes in a Capacitor project.
created_at: '2022-02-25'
published: true
slug: smartscanner-capacitor.git
locale: en
---

# How to Use @idpass/smartscanner-capacitor Package

The @idpass/smartscanner-capacitor package provides a seamless way to incorporate scanning functionality for MRZ, NFC, and barcodes into your Capacitor project. Below is a step-by-step guide on how to integrate and use this package effectively.

## Installation

To begin, you will need to install the @idpass/smartscanner-capacitor package from NPM. You can do this using either npm or yarn:

```bash
# Using npm
npm install @idpass/smartscanner-capacitor

# Using yarn
yarn add @idpass/smartscanner-capacitor
```

## Usage

After installing the package, you can utilize the plugin through Capacitor's `Plugins` object. Here are examples of how you can use the package for MRZ, NFC, and Barcode scanning:

### MRZ Scanning

```js
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
})
```

### NFC Scanning

```js
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
})
```

### Barcode Scanning

```js
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
})
```

For more detailed information on the available API options and returned results, you can refer to the [API Reference](https://github.com/idpass/smartscanner-capacitor/wiki/API-Reference).

## Additional Resources

Explore these related projects for further enhancements:

- [smartscanner-core](https://github.com/idpass/smartscanner-core): Android library for scanning MRZ, Barcode, and ID PASS Lite cards
- [smartscanner-android-api](https://github.com/idpass/smartscanner-android-api): Simplifies the SmartScanner intent call-out process
- [smartscanner-cordova](https://github.com/idpass/smartscanner-cordova): SmartScanner Cordova plugin for integrating with Cordova applications

Don't forget to check the [License](LICENSE) for usage terms and conditions.

```
```
