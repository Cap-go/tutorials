---
title: "Using Capacitor Plugin Barcode Scanner"
description: "This tutorial will guide you through the process of using the capacitor-plugin-barcodescanner package to add barcode scanner capabilities to your Capacitor app."
created_at: "2021-10-12"
published: true
slug: "capacitor-plugin-barcodescanner"
---

# Using Capacitor Plugin Barcode Scanner

In this tutorial, we will learn how to integrate the capacitor-plugin-barcodescanner package into your Capacitor app to enable barcode scanning functionality. This plugin currently supports the Android platform. Let's get started!

## Installation

To begin, we need to install the capacitor-plugin-barcodescanner package. Open your command line interface and run the following command:

```CLI
npm install capacitor-plugin-barcodescanner
```

Next, update the Android platform by running the following command:

```CLI
npx cap update
```

### Android

Now, let's register the plugin in the Android project. Open the `MainActivity.java` file in your Android project and add the following code inside the `onCreate` method:

```java
// Initializes the Bridge
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(BarcodeScanner.class);
}});
```

## Usage

To use the barcode scanner plugin in your app, follow these steps:

1. Import the necessary modules in your TypeScript file:

```typescript
import { Plugins, Capacitor } from '@capacitor/core';
import {
  BarcodeScannerPlugin,
  EVENT_BARCODE_SCANNED,
  IBarcodeScannerEventPayload,
} from 'capacitor-plugin-barcodescanner';
```

2. Set up a listener function to handle barcode scanning events:

```typescript
const barcodeScanned = (state: IBarcodeScannerEventPayload): void => {
  console.log("BarcodeScanned - ", state.cancelled, state.barcode, state.error);
};
```

3. Get the BarcodeScanner plugin instance:

```typescript
const BarcodeScanner = Plugins.BarcodeScanner as BarcodeScannerPlugin;
```

4. Register the listener using the `addListener` method:

```typescript
const removeScannerHandler = BarcodeScanner.addListener(
  EVENT_BARCODE_SCANNED,
  barcodeScanned
).remove;
```

5. Start the scanning process by calling the `scan` method:

```typescript
BarcodeScanner.scan();
```

6. When you no longer need the barcode scanner, remove the listener:

```typescript
if (removeScannerHandler) {
  removeScannerHandler();
}
```

That's it! You have successfully integrated the capacitor-plugin-barcodescanner package into your Capacitor app. Now you can scan barcodes with ease.

Remember to update your Android project's dependencies and permissions as mentioned in the installation section.

I hope this tutorial was helpful. Happy coding!