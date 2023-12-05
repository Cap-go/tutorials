---
title: "Using the Capacitor-iBeacon Package"
description: "A tutorial on how to use the Capacitor-iBeacon package in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor-ibeacon"
---

# Using the Capacitor-iBeacon Package

In this tutorial, we will explore how to use the Capacitor-iBeacon package to integrate iBeacon functionality into your Capacitor app. 

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project
- Bluetooth enabled on your device

## Installation

To get started, install the Capacitor-iBeacon package by running the following command:

```bash
npm install capacitor-ibeacon
```

## Configuration

Next, we need to configure the plugin in your Capacitor app. Open the `capacitor.config.json` file in your project and add the following under the `plugins` section:

```json
"plugins": {
  "CapacitoriBeacon": {
    "NSLocationWhenInUseUsageDescription": "We need access to your location to detect iBeacons."
  }
}
```

Make sure to replace `"We need access to your location to detect iBeacons."` with a user-friendly description explaining why your app needs access to the user's location.

## Usage

Now that we have installed and configured the Capacitor-iBeacon package, let's see how to use it in your app.

1. Import the plugin in your JavaScript or TypeScript file:

```ts
import { Plugins } from '@capacitor/core';
const { CapacitoriBeacon } = Plugins;
```

2. Request permission to access the user's location when your app is in use:

```ts
CapacitoriBeacon.requestAuthorization();
```

This will prompt the user to grant permission to your app to access their location.

3. Start monitoring for iBeacons:

```ts
CapacitoriBeacon.startMonitoring({
  uuid: "YOUR_UUID",
  identifier: "YOUR_IDENTIFIER"
});
```

Replace `"YOUR_UUID"` with the UUID of the iBeacon you want to monitor, and `"YOUR_IDENTIFIER"` with a unique identifier for the iBeacon.

4. Listen for iBeacon events:

```ts
CapacitoriBeacon.addListener('didEnterRegion', (event) => {
  console.log('Entered region:', event.region);
});

CapacitoriBeacon.addListener('didExitRegion', (event) => {
  console.log('Exited region:', event.region);
});
```

You can listen for different events related to iBeacon regions, such as entering or exiting a region.

## Conclusion

In this tutorial, we explored how to use the Capacitor-iBeacon package to integrate iBeacon functionality into your Capacitor app. We covered installation, configuration, and basic usage of the plugin. Now you can start detecting and reacting to iBeacons in your app!

Remember to refer to the official Capacitor-iBeacon documentation for more advanced features and options.

Happy coding!