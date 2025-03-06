```markdown
---
"title": "Using the Capacitor Geofence Box Tracker Plugin"
"description": "Learn how to integrate and utilize the Capacitor Geofence Box Tracker plugin in your Capacitor applications for geofencing functionalities on iOS."
"created_at": "2022-01-18"
"published": true
"slug": "capacitor-geofence-box-tracker.git"
---

# Capacitor Geofence Box Tracker Plugin Tutorial

This tutorial will guide you on how to set up and use the Capacitor Geofence Box Tracker plugin in your Capacitor applications to leverage native geofencing features on iOS.

## Installation

To get started, add the Capacitor Geofence Box Tracker package to your project:

```bash
$ npm i capacitor-geofence-box-tracker
```

## Configuration

After installation, configure the plugin by importing it and setting up the notification preferences:

```javascript
import { Plugins } from "@capacitor/core";
import { GeofenceTracker } from "capacitor-geofence-box-tracker";

let { GeofenceTracker } = Plugins;

GeofenceTracker.setup({
   notifyOnEntry: true,     // Notify on entry: true or false
   notifyOnExit: true       // Notify on exit: true or false
});
```

Make sure to add the following keys to your info.plist file:

```xml
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Reason for always usage.</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Reason for when in usage.</string>
```

## Register a Region

To monitor a specific region, utilize the `addRegion` function with the desired latitude, longitude, identifier, and radius:

```javascript
GeofenceTracker.addRegion({
    latitude: -1.664718,
    longitude: -78.658626,
    identifier: "string-identifier",
    radius: 300
});
```

## Stop Monitoring a Region

If you need to stop monitoring a region, use the `stopMonitoring` function with the region's identifier:

```javascript
GeofenceTracker.stopMonitoring({
    identifier: "string-identifier"
});
```

## List Monitored Regions

You can retrieve a list of all monitored regions using the `monitoredRegions` function:

```javascript
GeofenceTracker.monitoredRegions()
    .then(regions => {
        // 'regions' is an array of strings representing the monitored regions
    });
```

This concludes the tutorial on how to use the Capacitor Geofence Box Tracker plugin for geofencing in your iOS applications.
```
```