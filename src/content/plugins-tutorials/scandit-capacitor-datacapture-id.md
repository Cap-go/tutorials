---
title: "Tutorial: Using scandit-capacitor-datacapture-id package"
description: "In this tutorial, we will learn how to use the scandit-capacitor-datacapture-id package to implement barcode scanning in Capacitor apps."
created_at: "2022-01-01"
published: true
slug: "scandit-capacitor-datacapture-id"
---

# Tutorial: Using scandit-capacitor-datacapture-id package

In this tutorial, we will learn how to use the scandit-capacitor-datacapture-id package to implement barcode scanning in Capacitor apps.

## Steps to Follow

1. Install the scandit-capacitor-datacapture-id package by running the following command:

```bash
npm install scandit-capacitor-datacapture-id
```

2. Import the necessary modules and initialize the scanner in your Capacitor app, as shown below:

```typescript
import { Plugins } from '@capacitor/core';

const { ScanditDataCaptureIdPlugin } = Plugins;

// Initialize the scanner
const scanner = await ScanditDataCaptureIdPlugin.initialize({
  licenseKey: 'YOUR_LICENSE_KEY',
});
```

3. Configure the scanning options based on your requirements, as shown below:

```typescript
// Configure the scanning options
scanner.configure({
  camera: {
    defaultPosition: 'back',
    preferredResolution: '1080p',
  },
  idCapture: {
    enabled: true,
    setIdToIsolatedFirst: true,
  },
});
```

4. Start the scanner and listen for scan results, as shown below:

```typescript
// Start the scanner
scanner.start();

// Listen for scan results
scanner.addListener('scan', (result) => {
  console.log('Scanned data:', result.data);
});
```

5. Stop the scanner when it is no longer needed, as shown below:

```typescript
// Stop the scanner
scanner.stop();
```

Congratulations! You have successfully implemented barcode scanning using the scandit-capacitor-datacapture-id package in your Capacitor app.

Feel free to explore the official documentation of the scandit-capacitor-datacapture-id package for more advanced features and customization options.

Remember to replace `'YOUR_LICENSE_KEY'` with your actual Scandit license key to unlock all the features of the package.

That's it for this tutorial! Happy coding!
