---
title: "Using the capacitor-geofence-service-plugin package"
description: "A tutorial on how to use the capacitor-geofence-service-plugin package to add geofencing capabilities in your Capacitor applications."
created_at: "2022-04-20"
published: true
slug: geofenceservice
---

# Using the capacitor-geofence-service-plugin package

In this tutorial, we will learn how to use the capacitor-geofence-service-plugin package to add geofencing capabilities in your Capacitor applications. Geofencing allows you to define virtual boundaries and receive notifications when a user enters or exits these boundaries. We will cover the installation, configuration, and usage of the plugin.

## Installation

To install the capacitor-geofence-service-plugin package, run the following command in your Capacitor project:

```bash
npm install capacitor-geofence-service-plugin
```

## Configuration

Once the package is installed, you need to configure it before using it. The configuration includes setting up the URL to which the plugin will send the payload, specifying whether to notify on entry and exit, and providing a payload object. Here's an example of the configuration:

```typescript
import { Plugins } from "@capacitor/core";
import { CapacitorGeofenceServicePlugin } from "capacitor-geofence-service-plugin";

const { CapacitorGeofenceService } = Plugins;

async function configureGeofenceService() {
  await CapacitorGeofenceService.setup({
    url: "https://example.com/geofence-webhook",
    notifyOnEntry: true,
    notifyOnExit: true,
    payload: { key: "value" },
  });
}

configureGeofenceService();
```

Make sure to replace the `url` value with the actual endpoint where you want to receive the geofencing notifications. Also, update the `payload` object with the necessary data to be sent with the request.

## Registering a Region

After setting up the plugin, you can register regions for monitoring. A region is defined by its latitude, longitude, identifier, and radius. The identifier is a unique string that you can use to identify the region. Use the `addRegion` method to register a region:

```typescript
await CapacitorGeofenceService.addRegion({
  latitude: 37.33182,
  longitude: 122.03118,
  identifier: "infinite-loop",
  radius: 500,
});
```

This method returns a promise that resolves with a success message or rejects with an error message.

## Stopping Monitoring for a Region

If you no longer want to monitor a specific region, you can stop monitoring it using the `stopMonitoring` method. Pass the identifier of the region to remove it:

```typescript
await CapacitorGeofenceService.stopMonitoring({
  identifier: "infinite-loop",
});
```

Similar to the `addRegion` method, this method returns a promise with a success or error message.

## Listing Monitored Regions

To get a list of all the regions that are currently being monitored, you can use the `monitoredRegions` method. It returns an array of identifiers:

```typescript
const regions = await CapacitorGeofenceService.monitoredRegions();
console.log(regions);
```

The `regions` variable will contain an array of strings representing the identifiers of the monitored regions.

## Conclusion

In this tutorial, we have learned how to use the capacitor-geofence-service-plugin package to add geofencing capabilities to Capacitor applications. We covered the installation process, configuration options, and usage of the plugin to register and monitor regions. With this knowledge, you can now integrate geofencing functionalities into your own Capacitor projects.