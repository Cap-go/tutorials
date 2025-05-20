---
title: >-
  How to Use Capacitor Geofence Box Tracker Plugin in Your Capacitor
  Applications
description: >-
  Learn how to implement geofencing in your Capacitor applications using the
  capacitor-geofence-box-tracker package.
created_at: '2022-01-21'
published: true
slug: capacitor-geofence-box-tracker.git
locale: en
---

# Capacitor Geofence Box Tracker Tutorial

In this tutorial, we will guide you on how to use the `capacitor-geofence-box-tracker` package in your Capacitor applications to implement geofencing functionalities.

## Installation

To start using the Capacitor Geofence Box Tracker plugin, you need to install the package from npm:

```bash
$ npm install capacitor-geofence-box-tracker
```

## Configuration

After installing the package, you need to configure the plugin in your application. Add the following setup to your code:

```javascript
import { Plugins } from "@capacitor/core";
import { GeofenceTrackerPlugin } from "capacitor-geofence-box-tracker";

let { GeofenceTracker } = Plugins;

GeofenceTracker.setup({
   notifyOnEntry: true,
   notifyOnExit: true,
});
```

Ensure that you have the necessary keys added to your info.plist file for location authorization.

## Register a Region

To start monitoring a region, use the `addRegion` function with the required parameters:

```javascript
GeofenceTracker.addRegion({
    latitude: -1.664718,
    longitude: -78.658626,
    identifier: "string-identifier",
    radius: 300
});
```

## Stop Monitoring a Region

If you need to stop monitoring a specific region, use the `stopMonitoring` function:

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
    	// regions is an array of Strings.
    });
```

This tutorial has provided you with the steps to integrate geofencing capabilities into your Capacitor application using the Capacitor Geofence Box Tracker plugin.
```
```
