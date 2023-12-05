---
title: "Using capacitor-geofence package"
description: "A tutorial on how to utilize geofencing in capacitor applications using the capacitor-geofence package"
created_at: "2021-10-20"
published: true
slug: "capacitor-geofence"
---

# Using capacitor-geofence package

## Introduction

In this tutorial, we will learn how to utilize geofencing in capacitor applications using the `capacitor-geofence` package. Geofencing allows us to define virtual boundaries and track when a user enters or exits those boundaries. We will explore the installation process, configuration options, and how to register and monitor regions using this package.

## Installation

To get started, we need to install the `capacitor-geofence` package. Open your terminal and run the following command:

```
npm install capacitor-geofence
```

## Configuration

Once the package is installed, we need to configure it before using the geofencing functionality. Add the following code to your project files, preferably in a file where you set up your Capacitor plugins:

```typescript
import { Plugins } from "@capacitor/core";
import { CapacitorGeofencingPlugin } from "capacitor-geofencing";
let { CapacitorGeofencing } = Plugins;

CapacitorGeofencing.setup({
    url: "", 				// Endpoint to which the plugin will POST the payload
    notifyOnEntry: true, 	// Whether the plugin will notify on entry yes or no
    notifyOnExit: true,		// Whether the plugin will notify on exit yes or no
    payload: {}				// Object that will be sent to the server
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
```

Make sure to replace the `url` parameter with the endpoint where you want to receive the payload.

## Register a Region

After setting up the plugin, we can register regions to monitor. The following code demonstrates how to register a region:

```typescript
CapacitorGeofencing.addRegion({
    latitude: 37.33182,
    longitude: 122.03118,
    identifier: "infinite-loop",
    radius: 500
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
```

This code registers a region with the coordinates (37.33182, 122.03118), an identifier of "infinite-loop", and a radius of 500 meters.

## Stop Monitoring a Region

If you no longer want to monitor a region, you can stop monitoring it using the `stopMonitoring` method. Here's an example:

```typescript
CapacitorGeofencing.stopMonitoring({
    identifier: "infinite-loop"
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
```

This code stops monitoring the region with the identifier "infinite-loop".

## List Monitored Regions

To retrieve a list of all the regions currently being monitored, you can use the `monitoredRegions` method. Here's an example:

```typescript
CapacitorGeofencing.monitoredRegions().then((regions) => {
    console.log(regions);
}).catch((error) => {
    console.log(error);
});
```

The `monitoredRegions` method returns an array of strings representing the identifiers of the monitored regions.

## Conclusion

In this tutorial, we learned how to utilize geofencing in capacitor applications using the `capacitor-geofence` package. We explored the installation process, configuration options, and how to register and monitor regions. Geofencing can be a powerful tool for location-based functionality in your apps, and with the `capacitor-geofence` package, it becomes easy to implement in a Capacitor project.