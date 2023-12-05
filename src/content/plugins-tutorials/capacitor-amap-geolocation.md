---
title: "Using Capacitor AMap Geolocation Plugin"
description: "A tutorial on how to use the Capacitor AMap Geolocation plugin for location services in your Capacitor-powered mobile app."
created_at: "2021-10-12"
published: true
slug: "capacitor-amap-geolocation"
---

# Using Capacitor AMap Geolocation Plugin

In this tutorial, we will walk through the steps of using the Capacitor AMap Geolocation plugin to implement location services in your Capacitor-powered mobile app. The Capacitor AMap Geolocation plugin leverages the AMap geolocation service for accurate and reliable location data.

## Installation

Before getting started, make sure you have Capacitor set up in your project. If not, please refer to the [Capacitor documentation](https://capacitorjs.com/docs) for installation instructions.

To install the Capacitor AMap Geolocation plugin, run the following command in your project directory:

```bash
npm install capacitor-amap-geolocation
npx cap sync
```

This will install the plugin and sync the necessary native dependencies.

## Adding the API Key

To use the AMap geolocation service, you need to provide an API key. Follow these steps to add the API key to your project:

1. Obtain an API key from the AMap developer portal.
2. Open the `Info.plist` file in the `ios/App/App` directory.
3. Add the following key-value pair under the `<dict>` element:

```xml
<key>AMapServicesApiKey</key>
<string>YOUR_API_KEY</string>
```

Replace `YOUR_API_KEY` with your actual API key.

## Usage

Once you have installed the plugin and added the API key, you can start using the Capacitor AMap Geolocation plugin in your app.

### Importing the Plugin

To use the plugin in your code, import it as follows:

```javascript
import { CapacitorAMapGeolocation } from 'capacitor-amap-geolocation';
```

### Getting Current Location

To get the current location of the user, you can use the `getCurrentPosition` method. Here's an example:

```javascript
async function getCurrentLocation() {
  try {
    const position = await CapacitorAMapGeolocation.getCurrentPosition();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
  } catch (error) {
    console.error(error);
  }
}
```

This code will retrieve the latitude and longitude of the current location and log it to the console.

### Watching Position Updates

If you need to track the user's location continuously, you can use the `watchPosition` method. It works similar to the `getCurrentPosition` method but returns updates whenever the location changes. Here's an example:

```javascript
let watchId;

function startWatchingPosition() {
  watchId = CapacitorAMapGeolocation.watchPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
    },
    (error) => {
      console.error(error);
    }
  );
}

function stopWatchingPosition() {
  CapacitorAMapGeolocation.clearWatch(watchId);
}
```

In this code, we start watching the position updates using the `watchPosition` method and log the latitude and longitude whenever the location changes. We also provide an error callback for handling any errors that might occur. To stop watching the position updates, we use the `clearWatch` method and pass the `watchId` returned by the `watchPosition` method.

## Conclusion

In this tutorial, we have learned how to use the Capacitor AMap Geolocation plugin to implement location services in a Capacitor-powered mobile app. We have covered the installation process, adding the API key, and demonstrated how to get the current location and track position updates. With this knowledge, you can now integrate accurate and reliable location services into your mobile app using the Capacitor AMap Geolocation plugin.

Remember to refer to the plugin's documentation for more detailed information and advanced usage options. Happy coding!