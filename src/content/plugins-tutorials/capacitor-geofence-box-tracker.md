---
title: "Capacitor Geofence Box Tracker Tutorial"
description: "A tutorial on how to use the capacitor-geofence-box-tracker package to utilize geofencing in Capacitor applications"
created_at: "2022-01-01"
published: true
slug: capacitor-geofence-box-tracker
---

# Capacitor Geofence Box Tracker Tutorial

In this tutorial, we will learn how to use the `capacitor-geofence-box-tracker` package to utilize geofencing in Capacitor applications. Geofencing allows you to define virtual boundaries and receive notifications when a device enters or exits those boundaries. This can be highly useful in applications that require location-based triggers or actions.

## Installation

To install the package, run the following command in your project directory:

```
$ npm i capacitor-geofence-box-tracker
```

## Configuration

To configure the plugin, you need to import the necessary modules and set up the plugin with your desired options. Here's an example of how to do this:

```typescript
import { Plugins } from "@capacitor/core";
import { GeofenceTrackerPlugin } from "capacitor-geofence-box-tracker";

let { GeofenceTracker } = Plugins;

GeofenceTracker.setup({
   notifyOnEntry: true,
   notifyOnExit: true,
});
```

The `notifyOnEntry` and `notifyOnExit` options determine whether the plugin will notify when the device enters or exits a geofenced region, respectively.

You also need to make some modifications to your `info.plist` file. Add the following keys and their corresponding descriptions:

```xml
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Reason for always usage.</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Reason for when in usage.</string>
```

These modifications are necessary to request the user's location authorization.

## Register a Region

To register a geofenced region, use the `addRegion` method. Provide the latitude, longitude, identifier, and radius of the region. Here's an example:

```typescript
GeofenceTracker.addRegion({
    latitude: -1.664718,
    longitude: -78.658626,
    identifier: "string-identifier",
    radius: 300
}).then(result => {
    // Handle success or error
});
```

## Stop Monitoring a Region

To stop monitoring a previously registered region, use the `stopMonitoring` method. Specify the identifier of the region you want to stop monitoring. Here's an example:

```typescript
GeofenceTracker.stopMonitoring({
    identifier: "string-identifier"
}).then(result => {
    // Handle success or error
});
```

## List All Monitored Regions

To retrieve a list of all currently monitored regions, use the `monitoredRegions` method. This method returns an array of strings representing the identifiers of the monitored regions. Here's an example:

```typescript
GeofenceTracker.monitoredRegions()
    .then(regions => {
        // regions is an array of strings
    });
```

That's it! You now know how to use the `capacitor-geofence-box-tracker` package to utilize geofencing in your Capacitor applications. Happy coding!