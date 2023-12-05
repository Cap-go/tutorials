---
title: "Using @kduma-autoid/capacitor-sunmi-scanhead Package"
description: "This tutorial will guide you on how to use the @kduma-autoid/capacitor-sunmi-scanhead package to interact with the scan head of Sunmi POS devices."
created_at: "2022-09-20"
published: true
slug: "capacitor-sunmi-scanhead"
---

# Using @kduma-autoid/capacitor-sunmi-scanhead Package

In this tutorial, we will explore how to use the `@kduma-autoid/capacitor-sunmi-scanhead` package to interact with the scan head of Sunmi POS devices. This package provides a convenient adapter for scanning barcodes and QR codes using the built-in scan head of Sunmi devices.

## Prerequisites

Before we begin, make sure you have the following:

- A Sunmi POS device with a built-in scan head.
- Node.js and npm installed on your development machine.
- Capacitor installed globally on your machine.

## Installation

To get started, install the `@kduma-autoid/capacitor-sunmi-scanhead` package by running the following command:

```bash
npm install @kduma-autoid/capacitor-sunmi-scanhead
```

Next, synchronize the project with Capacitor by running:

```bash
npx cap sync
```

## Configuration

To configure the plugin, open the `capacitor.config.ts` file in your project's root directory. Add the following lines of code to the `plugins` section:

```typescript
/// <reference types="@kduma-autoid/capacitor-sunmi-scanhead" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.company.app",
  // other configuration options...
  plugins: {
    SunmiScanHead: {
      bindOnLoad: true,
    },
  },
};

export default config;
```

By default, the plugin is set to bind on load. If you want to disable auto binding of the service, set `bindOnLoad` to `false`.

## Scanning Barcodes and QR Codes

Now that the package is installed and configured, we can start using the scan head of the Sunmi POS device to scan barcodes and QR codes.

### Requesting Scan

To request a scan, call the `scan()` method provided by the `SunmiScanHead` plugin. This method returns a promise that resolves with the scanned data.

```typescript
import { Plugins } from '@capacitor/core';

const { SunmiScanHead } = Plugins;

SunmiScanHead.scan().then((result) => {
  if (result.cancelled) {
    console.log('Scan cancelled');
  } else {
    console.log('Scanned data:', result.data);
  }
});
```

The `scan()` method will open the scan view on the Sunmi device and wait for a barcode or QR code to be scanned. Once a code is scanned, the `scan()` method will resolve with the scanned data. If the scan is cancelled by the user, the promise will resolve with `cancelled: true`.

### Setting Scan Configuration

You can also configure the scan settings before requesting a scan. The available configuration options include:

- `orientation`: Sets the orientation of the scan view. Possible values are `'auto'`, `'portrait'`, or `'landscape'`.
- `sound`: Enables or disables the scan sound. Set to `true` to enable the sound or `false` to disable it.
- `vibrate`: Enables or disables the vibration on scan. Set to `true` to enable vibration or `false` to disable it.

```typescript
import { Plugins } from '@capacitor/core';

const { SunmiScanHead } = Plugins;

// Set scan configuration
SunmiScanHead.setScanConfig({
  orientation: 'portrait',
  sound: true,
  vibrate: true,
});

// Request scan
SunmiScanHead.scan().then((result) => {
  if (result.cancelled) {
    console.log('Scan cancelled');
  } else {
    console.log('Scanned data:', result.data);
  }
});
```

## Conclusion

In this tutorial, we explored how to use the `@kduma-autoid/capacitor-sunmi-scanhead` package to interact with the scan head of Sunmi POS devices. We learned how to install and configure the package, as well as how to request scans and customize the scan settings.

Now you can leverage the scan head of Sunmi devices to easily scan barcodes and QR codes in your Capacitor-powered application.