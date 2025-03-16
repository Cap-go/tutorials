---
"title": "Using SmartScanner Capacitor Plugin in Capacitor Apps",
"description": "Step-by-step guide on integrating and utilizing @idpass/smartscanner-capacitor plugin to enable scanning of MRZ, NFC, and barcodes in Capacitor Apps.",
"created_at": "2022-01-15",
"published": true,
"slug": "smartscanner-capacitor.git"
---

# How to Use @idpass/smartscanner-capacitor Plugin

The [@idpass/smartscanner-capacitor](https://github.com/idpass/smartscanner-capacitor) is a Capacitor plugin designed to scan MRZ, NFC, and barcodes in your apps. Follow this tutorial to learn how to integrate and utilize this plugin in your Capacitor app:

## Installation

This plugin can be easily installed via NPM using either `npm` or `yarn`. Run one of the following commands in your terminal:

```bash
# Using npm
npm install @idpass/smartscanner-capacitor

# Using yarn
yarn add @idpass/smartscanner-capacitor
```

## Usage

To utilize the SmartScanner Capacitor plugin, you would want to follow these steps. The plugin can be utilized through Capacitor's `Plugins` object, which acts as a registry for all available Capacitor plugins. Here is an example of how to import and use the plugin:

```javascript
import { Plugins } from '@capacitor/core'

const { SmartScannerPlugin } = Plugins
// Use the plugin methods from here
```

The plugin provides functionalities for scanning MRZ, NFC, as well as barcodes. Below are instance for each of the scanner modes:

### MRZ Scanning

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
      showGuide: true, // beta version 0.4.5-beta
    },
  },
})
```

### NFC Scanning

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
})
```

### Barcode Scanning

```javascript
const result = await SmartScannerPlugin.executeScanner({
  action: 'START_SCANNER',
  options: {
    mode: 'barcode',
    barcodeOptions: {
      barcodeFormats: ['AZTEC', 'CODABAR', 'CODE_39', 'CODE_93', 'CODE_128', 'EAN_8', 'EAN_13', 'QR_CODE', 'UPC_A', 'UPC_E', 'PDF_417'],
    },
    config: {
      background: '#ffc234',
      label: 'Sample Label',
    },
  },
})
```

For more detailed information on available API options and the result returned by the plugin, refer to the [SmartScanner Capacitor API Reference](https://github.com/idpass/smartscanner-capacitor/wiki/API-Reference).

This tutorial has provided a structured guide on how to incorporate and apply the SmartScanner Capacitor plugin capabilities within your Capacitor apps.