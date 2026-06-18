```markdown
---
"title": "Using Capacitor Geofence Box Tracker Package",
"description": "Tutorial on utilizing the capacitor-geofence-box-tracker package for geofencing in Capacitor applications.",
"created_at": "2022-01-30",
"published": true,
"slug": "capacitor-geofence-box-tracker.git"
---

# Using Capacitor Geofence Box Tracker Package

Capacitor Geofence Box Tracker is a powerful plug-in for Capacitor that allows seamless integration with native geofencing functions on iOS. This tutorial will guide you through the installation, configuration, and usage of this package.

## Installation

To get started, install the capacitor-geofence-box-tracker package using npm:

```
$ npm i capacitor-geofence-box-tracker
```

## Configuration

After installation, configure the GeofenceTracker with the desired settings:

```javascript
import { Plugins } from "@capacitor/core";
import { GeofenceTrackerPlugin } from "capacitor-geofence-box-tracker";
let { GeofenceTracker } = Plugins;

GeofenceTracker.setup({
   notifyOnEntry: true,
   notifyOnExit: true,
});
```

Make sure to set the proper keys in your info.plist file to enable location usage for the plugin.

## Register a Region

Once configured, you can register a geofence region to monitor:

```javascript
GeofenceTracker.addRegion({
    latitude: -1.664718,
    longitude: -78.658626,
    identifier: "string-identifier",
    radius: 300
});
```

## Stop Monitoring a Region

To stop monitoring a specific region, use the following method:

```javascript
GeofenceTracker.stopMonitoring({
    identifier: "string-identifier"
});
```

## List Monitored Regions

You can also retrieve a list of all monitored regions:

```javascript
GeofenceTracker.monitoredRegions()
    .then(regions => {
    	// regions is an array of Strings.
    });
```

This tutorial provides a comprehensive guide on how to leverage the functionality of the Capacitor Geofence Box Tracker package for geofencing in your Capacitor applications.
```