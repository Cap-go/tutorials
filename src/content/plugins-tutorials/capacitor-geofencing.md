---
title: "Using Capacitor Geofencing Package"
description: "Learn how to utilize geofencing in your Capacitor applications using the capacitor-geofencing package."
created_at: "2021-10-27"
published: true
slug: "capacitor-geofencing"
---

# Using Capacitor Geofencing Package

In this tutorial, we will explore how to integrate geofencing capabilities into your Capacitor applications using the `capacitor-geofencing` package. Geofencing allows you to trigger actions when a user enters or exits a specific geographic region. We will cover the installation, configuration, region registration, stopping monitoring, and retrieving monitored regions.

## Installation

To get started, install the `capacitor-geofencing` package into your Capacitor project by running the following command:

```bash
npm i capacitor-geofencing
```

## Configuration

The `capacitor-geofencing` plugin requires some initial configuration. In your Capacitor project, import the necessary plugins and set up the configuration as follows:

```typescript
import { Plugins } from '@capacitor/core';
import { CapacitorGeofencingPlugin } from 'capacitor-geofencing';

let { CapacitorGeofencing } = Plugins;

CapacitorGeofencing.setup({
  url: '', // Endpoint to which the plugin will POST the payload.
  notifyOnEntry: true, // Whether the plugin will notify on entry yes or no.
  notifyOnExit: true, // Whether the plugin will notify on exit yes or no.
  payload: {}, // Object that will be sent to the server.
})
  .then((result) => {
    // Handle success
  })
  .catch((error) => {
    // Handle error
  });
```

In the configuration above, make sure to provide a valid URL where the plugin will send the payload when a user enters or leaves a registered geofence region. You can also specify whether to notify on entry and/or exit, and provide additional payload data.

Additionally, remember to add the following keys to your `info.plist` file in your iOS project to request the necessary location permissions:

```xml
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Reason for always usage.</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Reason for when in usage.</string>
```

## Register a Region

Once the plugin is set up, you can register geofence regions using the `addRegion` method. The example below demonstrates how to register a region near "Infinite Loop" in Cupertino, California:

```typescript
CapacitorGeofencing.addRegion({
  latitude: 37.33182,
  longitude: 122.03118,
  identifier: 'infinite-loop',
  radius: 500,
})
  .then((result) => {
    // Handle success
  })
  .catch((error) => {
    // Handle error
  });
```

In the code above, specify the latitude and longitude of the region, provide a unique identifier, and set the desired radius of the geofence in meters.

## Stop Monitoring a Region

If you no longer need to monitor a specific region, you can stop monitoring it by using the `stopMonitoring` method. This method requires the identifier of the region as a parameter:

```typescript
CapacitorGeofencing.stopMonitoring({
  identifier: 'infinite-loop',
})
  .then((result) => {
    // Handle success
  })
  .catch((error) => {
    // Handle error
  });
```

When calling `stopMonitoring`, make sure to pass the same identifier as used when registering the region.

## List Monitored Regions

To retrieve a list of currently monitored regions, you can use the `monitoredRegions` method. This method returns an array of region identifiers:

```typescript
CapacitorGeofencing.monitoredRegions()
  .then((regions) => {
    // Handle list of monitored regions
  })
  .catch((error) => {
    // Handle error
  });
```

In the code above, `regions` will be an array of strings representing the identifiers of the currently monitored regions.

## Conclusion

Congratulations! You have learned how to utilize geofencing in your Capacitor applications using the `capacitor-geofencing` package. You can now integrate geofencing capabilities into your app to trigger actions based on user location.

Remember to handle any success or error scenarios appropriately by handling the promises returned by the plugin methods. Experiment with different configurations and explore the full potential of geofencing in your Capacitor projects.