---
title: "Using capacitor-plugin-dynamsoft-barcode-reader"
description: "This tutorial will guide you through the process of using the capacitor-plugin-dynamsoft-barcode-reader package to implement barcode scanning functionality in your Capacitor project."
created_at: "2022-10-22"
published: true
slug: capacitor-plugin-dynamsoft-barcode-reader
---

# Using capacitor-plugin-dynamsoft-barcode-reader

![version](https://img.shields.io/npm/v/capacitor-plugin-dynamsoft-barcode-reader.svg)

The capacitor-plugin-dynamsoft-barcode-reader is a powerful plugin for Capacitor that enables you to incorporate barcode scanning functionality into your Capacitor project. With this plugin, you can easily scan barcodes using the camera of your device, making it perfect for applications that require barcode scanning capabilities.

In this tutorial, we will walk you through the installation process, demonstrate how to initialize the plugin, and show you how to leverage its API to perform barcode scanning. So let's get started!

## Prerequisites

Before diving into the tutorial, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- Capacitor CLI
- Dynamsoft Barcode Reader license

## Installation

To install the capacitor-plugin-dynamsoft-barcode-reader package, open your project's terminal and run the following command:

```bash
npm install capacitor-plugin-dynamsoft-barcode-reader
npx cap sync
```

This command will install the package and synchronize it with your project.

## Initialization

To use the plugin, you need to initialize it first. In your project, open the desired file and import the plugin:

```javascript
import { QrScanner } from 'capacitor-plugin-dynamsoft-barcode-reader';
```

Then, initialize the plugin by calling the `initialize()` method:

```javascript
QrScanner.initialize();
```

This will initialize the plugin and prepare it for barcode scanning.

## Barcode Scanning

Once the plugin is initialized, you can start scanning barcodes. To initiate the barcode scanning process, call the `startScan()` method:

```javascript
QrScanner.startScan();
```

This will activate the device's camera and start scanning for barcodes. When a barcode is detected, the plugin will return the scanned barcode value.

To stop the barcode scanning process, you can call the `pauseScan()` method:

```javascript
QrScanner.pauseScan();
```

And to resume scanning, call the `resumeScan()` method:

```javascript
QrScanner.resumeScan();
```

## Conclusion

Congratulations! You have successfully learned how to use the capacitor-plugin-dynamsoft-barcode-reader package to implement barcode scanning functionality in your Capacitor project. You now have the ability to scan barcodes using the camera of your device.

This tutorial covered the installation process, initialization of the plugin, and performing barcode scanning. With this knowledge, you can now create applications that require barcode scanning capabilities.

Remember to refer to the plugin's documentation for more detailed information on its API and additional features.

Happy coding!