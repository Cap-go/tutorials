---
title: "Using pjamm-plugin-geolocation Package"
description: "This tutorial will guide you through the process of using the pjamm-plugin-geolocation package to implement foreground and background geolocation in your application."
created_at: "2021-10-08"
published: true
slug: "pjamm-plugin-geolocation"
---

# Using pjamm-plugin-geolocation Package

The pjamm-plugin-geolocation package is a plugin that allows you to implement foreground and background geolocation in your application. This tutorial will guide you through the process of using this package to track the location of a user in the foreground and background.

## Installation

To get started, you need to install the pjamm-plugin-geolocation package. Open your terminal and run the following command:

```bash
npm install pjamm-plugin-geolocation
```

Once the package is installed, you need to sync the project with Capacitor. Run the following command:

```bash
npx cap sync
```

## API Usage

The pjamm-plugin-geolocation package provides a set of API methods for interacting with the geolocation functionality. Here are some of the key methods:

### `getLocation(options?: any)`

This method allows you to get the current location of the user. You can pass optional options to customize the behavior of the location retrieval.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';
const { BerialGeolocation } = Plugins;

const getLocation = async () => {
  try {
    const location = await BerialGeolocation.getLocation();
    console.log('Current location:', location);
  } catch (error) {
    console.error('Error getting location:', error);
  }
};

getLocation();
```

### `startLocation(options?: any)`

This method starts tracking the location of the user. You can pass optional options to customize the tracking behavior.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';
const { BerialGeolocation } = Plugins;

const startLocation = () => {
  try {
    BerialGeolocation.startLocation();
    console.log('Location tracking started');
  } catch (error) {
    console.error('Error starting location tracking:', error);
  }
};

startLocation();
```

### `stopLocation()`

This method stops the location tracking.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';
const { BerialGeolocation } = Plugins;

const stopLocation = () => {
  try {
    BerialGeolocation.stopLocation();
    console.log('Location tracking stopped');
  } catch (error) {
    console.error('Error stopping location tracking:', error);
  }
};

stopLocation();
```

### `enableBackgroundTracking()`

This method enables background tracking, allowing the app to continue tracking the user's location even when the app is in the background.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';
const { BerialGeolocation } = Plugins;

const enableBackgroundTracking = () => {
  try {
    BerialGeolocation.enableBackgroundTracking();
    console.log('Background tracking enabled');
  } catch (error) {
    console.error('Error enabling background tracking:', error);
  }
};

enableBackgroundTracking();
```

### `disableBackgroundTracking()`

This method disables background tracking, stopping the app from tracking the user's location when it is in the background.

Example usage:

```javascript
import { Plugins } from '@capacitor/core';
const { BerialGeolocation } = Plugins;

const disableBackgroundTracking = () => {
  try {
    BerialGeolocation.disableBackgroundTracking();
    console.log('Background tracking disabled');
  } catch (error) {
    console.error('Error disabling background tracking:', error);
  }
};

disableBackgroundTracking();
```

## Conclusion

In this tutorial, you learned how to use the pjamm-plugin-geolocation package to implement foreground and background geolocation in your application. You learned about the different API methods provided by the package and how to use them to retrieve and track the user's location. Now you can utilize this package to add geolocation functionality to your Capacitor app.