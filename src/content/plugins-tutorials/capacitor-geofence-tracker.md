---
title: "Capacitor Geofence Tracker"
description: "Learn how to utilize geofencing in Capacitor applications using the capacitor-geofence-tracker package."
created_at: "2022-04-25"
published: true
slug: "capacitor-geofence-tracker"
---

# Capacitor Geofence Tracker Tutorial

In this tutorial, we will learn how to use the capacitor-geofence-tracker package to implement geofencing in Capacitor applications. Geofencing allows you to define virtual boundaries and receive notifications when a device enters or exits those boundaries. We will cover the installation, configuration, and usage of the capacitor-geofence-tracker package.

## Installation

To install the capacitor-geofence-tracker package, run the following command:

```bash
$ npm i capacitor-geofence-tracker
```

## Configuration

After installing the package, you need to configure it before using it in your application. Add the following code to your application:

```javascript
import { Plugins } from "@capacitor/core";
import { GeofenceTrackerPlugin } from "capacitor-geofence-tracker";
let { GeofenceTracker } = Plugins;

// Setup geofence tracker with required options
GeofenceTracker.setup({
   notifyOnEntry: true,
   notifyOnExit: true,
});
```

Make sure to add the following keys to your `info.plist` file:

```xml
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Reason for always usage.</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Reason for when in usage.</string>
```

## Register a Geofence Region

To monitor a specific geofence region, you need to register it using the `addRegion` method. Provide the latitude, longitude, identifier, and radius parameters. For example:

```javascript
GeofenceTracker.addRegion({
    latitude: -1.664718,
    longitude: -78.658626,
    identifier: "string-identifier",
    radius: 300,
})
  .then(() => {
    console.log("Geofence region registered successfully");
  })
  .catch((error) => {
    console.error("Failed to register geofence region:", error);
  });
```

## Stop Monitoring a Geofence Region

If you want to stop monitoring a geofence region, use the `stopMonitoring` method and provide the identifier of the region you want to stop monitoring. For example:

```javascript
GeofenceTracker.stopMonitoring({
    identifier: "string-identifier",
})
  .then(() => {
    console.log("Stopped monitoring geofence region");
  })
  .catch((error) => {
    console.error("Failed to stop monitoring geofence region:", error);
  });
```

## List Monitored Geofence Regions

To fetch a list of all currently monitored geofence regions, use the `monitoredRegions` method. It returns a promise that resolves to an array of region identifiers. For example:

```javascript
GeofenceTracker.monitoredRegions()
  .then((regions) => {
    console.log("Monitored geofence regions:", regions);
  })
  .catch((error) => {
    console.error("Failed to fetch monitored geofence regions:", error);
  });
```

That's it! You have learned how to use the capacitor-geofence-tracker package to implement geofencing in Capacitor applications. Experiment with different geofence regions and customize the notification behavior according to your application's needs.