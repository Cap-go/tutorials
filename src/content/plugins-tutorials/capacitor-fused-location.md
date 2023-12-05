---
title: "Using @jonoj/capacitor-fused-location Package"
description: "A tutorial on how to use the @jonoj/capacitor-fused-location package to integrate fused location functionality in your Android Capacitor app."
created_at: "2021-10-01"
published: true
slug: capacitor-fused-location
---

# Using @jonoj/capacitor-fused-location Package

In this tutorial, we will explore how to use the `@jonoj/capacitor-fused-location` package to integrate fused location functionality in your Android Capacitor app.

## Installation

First, let's install the `@jonoj/capacitor-fused-location` package using npm:

```bash
npm install @jonoj/capacitor-fused-location
```

## Usage

To use the fused location functionality in your app, follow these steps:

1. Import the plugin:

```javascript
import { Plugins } from '@capacitor/core';
const { FusedLocation } = Plugins;
```

2. Request permission to access the user's location. Add the following code in your app's logic:

```javascript
const requestLocationPermission = async () => {
  const permissionStatus = await FusedLocation.requestPermissions();
  if (permissionStatus.location === 'granted') {
    // Permission granted, proceed with fetching location
  } else {
    // Permission denied, handle accordingly
  }
};
```

3. Fetch the current location coordinates. You can use the `getCurrentPosition` method to get the current latitude and longitude:

```javascript
const getCurrentLocation = async () => {
  try {
    const location = await FusedLocation.getCurrentPosition();
    const { latitude, longitude } = location.coords;
    console.log('Current Location:', latitude, longitude);
  } catch (error) {
    console.error('Error retrieving location:', error);
  }
};
```

4. Subscribe to location updates. If you want to continuously receive location updates, you can use the `startLocationUpdates` method:

```javascript
const startLocationUpdates = async () => {
  try {
    const watchId = await FusedLocation.startLocationUpdates();
    FusedLocation.addListener('fusedLocationReceived', (location) => {
      const { latitude, longitude } = location.coords;
      console.log('New Location:', latitude, longitude);
    });
  } catch (error) {
    console.error('Error starting location updates:', error);
  }
};
```

5. Stop location updates. To stop receiving location updates, use the `stopLocationUpdates` method:

```javascript
const stopLocationUpdates = async () => {
  try {
    await FusedLocation.stopLocationUpdates();
    console.log('Location updates stopped');
  } catch (error) {
    console.error('Error stopping location updates:', error);
  }
};
```

That's it! You have successfully integrated the `@jonoj/capacitor-fused-location` package in your Android Capacitor app.

Remember to handle any error cases and customize the implementation based on your app's requirements.

Happy coding!
