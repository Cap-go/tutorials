---
title: "Using the Movo Capacitor Plugin Bluetooth Scanner"
description: "A tutorial on how to use the Movo Capacitor Plugin Bluetooth Scanner package"
created_at: "2022-10-17"
published: true
slug: "movo-capacitor-plugin-bluetooth-scanner"
---

# Using the Movo Capacitor Plugin Bluetooth Scanner

The Movo Capacitor Plugin Bluetooth Scanner package allows you to easily handle Bluetooth scanning functionality in your Capacitor project. This tutorial will guide you through the steps to integrate and use this plugin.

## Installation

To install the Movo Capacitor Plugin Bluetooth Scanner package in your Capacitor project, follow these steps:

1. Navigate to your project directory in the terminal.
2. Run the following command to install the package:

   ```bash
   npm install movo-capacitor-plugin-bluetooth-scanner
   ```

## Initialization

Before you can use the Bluetooth scanning functionality, you need to initialize the plugin. Add the following code to your project:

```javascript
import 'movo-capacitor-plugin-bluetooth-scanner';
import { Plugins } from '@capacitor/core';

const { MovoBluetoothScanner } = Plugins;
```

## Scanning for Bluetooth Devices

To scan for nearby Bluetooth devices, use the `startScan` function provided by the plugin. Here's an example:

```javascript
MovoBluetoothScanner.startScan()
  .then(devices => {
    // Handle the scanned devices
    console.log(devices);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
```

The `startScan` function returns a promise that resolves with an array of scanned devices. You can then handle these devices as needed.

## Stopping the Scan

To stop the Bluetooth scan, use the `stopScan` function. Here's an example:

```javascript
MovoBluetoothScanner.stopScan()
  .then(() => {
    console.log('Scan stopped');
  })
  .catch(error => {
    console.error(error);
  });
```

## Conclusion

In this tutorial, you learned how to integrate and use the Movo Capacitor Plugin Bluetooth Scanner package in your Capacitor project. You now have the ability to scan for nearby Bluetooth devices and handle them accordingly.

Explore the package documentation for more advanced features and customization options. Happy coding!

Remember to visit the [official plugin repository](https://github.com/movo-ai/movo-capacitor-plugin-bluetooth-scanner) for more information and updates.