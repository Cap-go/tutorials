---
title: "Using capacitor_plugin_geo_micro_fence Package"
description: "A tutorial on how to utilize geofencing in capacitor applications using the capacitor_plugin_geo_micro_fence package."
created_at: "2021-10-25"
published: true
slug: capacitor_plugin_geo_micro_fence
---

# Using capacitor_plugin_geo_micro_fence Package

In this tutorial, we will learn how to utilize geofencing in capacitor applications using the `capacitor_plugin_geo_micro_fence` package. Geofencing allows you to define virtual boundaries or geofences and trigger certain actions when a device enters or leaves those boundaries. This can be useful in various scenarios, such as location-based reminders, proximity-based notifications, and more.

Before we begin, make sure you have Capacitor installed globally on your machine. If not, you can install it by running the following command:

```cmd
npm install -g @capacitor/core @capacitor/cli
```

Once Capacitor is installed, we can proceed with setting up the `capacitor_plugin_geo_micro_fence` package.

## Installing the Package

To install the `capacitor_plugin_geo_micro_fence` package, run the following command in the terminal:

```cmd
npm install capacitor_plugin_geo_micro_fence
```

## Setting Up Geofences

Now that the package is installed, we can start setting up geofences in our capacitor application. Follow these steps:

1. Import the necessary modules:

```typescript
import { Geofence } from 'capacitor_plugin_geo_micro_fence';
```

2. Create a geofence:

```typescript
const geofence = new Geofence();
```

3. Define the geofence parameters:

```typescript
const fenceParams = {
  id: 'myGeofence', // Unique ID for the geofence
  latitude: 37.7749, // Latitude of the geofence center
  longitude: -122.4194, // Longitude of the geofence center
  radius: 200, // Radius of the geofence in meters
  transitionType: 1, // Transition types (1: Enter, 2: Exit, 3: Both)
  notificationTitle: 'Geofence Alert', // Title for the notification
  notificationText: 'You have entered a geofence.', // Text for the notification
};
```

4. Add the geofence:

```typescript
geofence.addOrUpdate(fenceParams).then(() => {
  console.log('Geofence added successfully.');
}).catch((error) => {
  console.error('Failed to add geofence:', error);
});
```

5. Remove a geofence:

```typescript
geofence.remove('myGeofence').then(() => {
  console.log('Geofence removed successfully.');
}).catch((error) => {
  console.error('Failed to remove geofence:', error);
});
```

That's it! You have now set up a geofence in your capacitor application using the `capacitor_plugin_geo_micro_fence` package.

## Conclusion

In this tutorial, we have learned how to utilize geofencing in capacitor applications using the `capacitor_plugin_geo_micro_fence` package. Geofencing can be a powerful feature to add location-based functionality to your apps. By defining virtual boundaries and triggering actions when a device enters or leaves those boundaries, you can create dynamic and interactive user experiences.

Feel free to explore the documentation of the `capacitor_plugin_geo_micro_fence` package for additional features and customization options. Happy coding!