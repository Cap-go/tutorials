---
title: "Using Capacitor Geolocation Package"
description: "A tutorial on how to use the capacitor-geolocation package in your Capacitor project."
created_at: "2021-10-20"
published: true
slug: "capacitor-geolocation"
---

# Using Capacitor Geolocation Package

The capacitor-geolocation package provides a simple way to access the device's geolocation in your Capacitor project. In this tutorial, we will walk through the installation, setup, and usage of the capacitor-geolocation package.

## Installation

First, install the capacitor-geolocation package using npm:

```bash
npm install capacitor-geolocation
```

Then, sync the native files by running the following command:

```bash
npx cap sync
```

## Usage

### Import the Plugin and Types

To use the capacitor-geolocation package, import the plugin and types in your TypeScript file:

```typescript
import 'capacitor-geolocation';
import { Plugins } from '@capacitor/core';
const { BerialGeolocation } = Plugins;
```

### Add Listeners for Location Updates

To listen for location updates, you can use the `watchPosition` method of the `BerialGeolocation` plugin. Here's an example:

```typescript
const watchId = await BerialGeolocation.watchPosition((data) => {
  const coords = data.coords;
  console.log('Latitude: ', coords.latitude);
  console.log('Longitude: ', coords.longitude);
});

// To stop watching for location updates:
await BerialGeolocation.clearWatch(watchId);
```

The `watchPosition` method takes a callback function as its argument, which will be called whenever there is a new location update. The callback function receives a `Position` object, which contains information about the device's current coordinates.

## Android Setup

To use the capacitor-geolocation package on Android, you need to add the plugin to your app's main activity. Open your app's MainActivity.java file and add the following code:

```java
import com.getcapacitor.community.geolocation.BerialGeolocation;

// ...

private void init(Bundle savedInstanceState, List<Class<? extends Plugin>> additionalPlugins) {
  // Initializes the Bridge
  this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    // Add other plugins you've installed here
    
    add(BerialGeolocation.class);
  }});
}
```

Make sure to replace `MainActivity` with the actual name of your main activity.

### Permissions

The capacitor-geolocation package requires the `ACCESS_FINE_LOCATION` permission to access the device's location. This permission should be automatically added to your app's AndroidManifest.xml file when you run the `npx cap sync` command. However, if it's not added automatically, you can manually add the following lines to your AndroidManifest.xml file:

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

## Conclusion

In this tutorial, we have learned how to install, setup, and use the capacitor-geolocation package in a Capacitor project. We have covered how to import the plugin, add listeners for location updates, and configure the package for Android. Now you can easily access the device's geolocation in your Capacitor app.

For more information, you can refer to the [Capacitor Geolocation API documentation](https://capacitorjs.com/docs/apis/geolocation).