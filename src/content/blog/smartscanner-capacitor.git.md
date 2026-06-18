```markdown
---
"title": "How to Use SmartScanner Capacitor Plugin",
"description": "Tutorial on using the @idpass/smartscanner-capacitor package to scan MRZ, NFC, and barcodes",
"created_at": "2023-10-12",
"published": true,
"slug": "smartscanner-capacitor-git"
---

# SmartScanner Capacitor Plugin Tutorial

This tutorial will guide you on how to use the Capacitor plugin for the SmartScanner Core library to scan MRZ, NFC, and barcodes using the `@idpass/smartscanner-capacitor` package.

## Installation

To install the `@idpass/smartscanner-capacitor` package, you can use NPM:

```bash
# Using npm
npm install @idpass/smartscanner-capacitor

# Using yarn
yarn add @idpass/smartscanner-capacitor
```

## Usage

The plugin can be accessed through Capacitor's `Plugins` object, which is the registry of all available plugins in a Capacitor project. Below are examples of how to use the SmartScannerPlugin for MRZ, NFC, and Barcode scanning.

### MRZ Scanning Example

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

### NFC Scanning Example

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

### Barcode Scanning Example

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
})
```

For more information about the API options and the returned result, you can refer to the [API Reference](https://github.com/idpass/smartscanner-capacitor/wiki/API-Reference).

## Related Projects

- [smartscanner-core](https://github.com/idpass/smartscanner-core): Android library for scanning MRZ, Barcode, and ID PASS Lite cards
- [smartscanner-android-api](https://github.com/idpass/smartscanner-android-api): Provides convenience methods to simplify the SmartScanner intent call out process
- [smartscanner-cordova](https://github.com/idpass/smartscanner-cordova): SmartScanner Cordova plugin

## License

This project is licensed under the [Apache-2.0 License](LICENSE).
```
```