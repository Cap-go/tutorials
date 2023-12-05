---
title: "Using the capacitor-request-location Package"
description: "A tutorial on how to use the capacitor-request-location package in your Capacitor app."
created_at: "2022-10-10"
published: true
slug: "capacitor-request-location"
---

# Using the capacitor-request-location Package

In this tutorial, we will walk through how to use the capacitor-request-location package in a Capacitor app. The capacitor-request-location package allows you to easily request the user's current location using Capacitor.

## Prerequisites

Before getting started, make sure you have the following installed:

- Capacitor: Check the official Capacitor [documentation](https://capacitorjs.com/docs/getting-started) for installation instructions.
- capacitor-request-location package: Install the capacitor-request-location package using the following command:

  ```bash
  npm install capacitor-request-location
  ```

## Adding the Plugin to your Project

To add the capacitor-request-location plugin to your project, follow these steps:

1. Open a terminal and navigate to the root directory of your project.
2. Run the following command to add the plugin:

   ```bash
   npx cap add android
   ```

   This command will add the Android platform to your project. Repeat this step for iOS if you are developing for iOS as well.

3. Next, import the capacitor-request-location package in your desired file:

   ```typescript
   import 'capacitor-request-location';
   ```

## Requesting the User's Location

To request the user's location, you can use the `requestLocation` method provided by the capacitor-request-location package. Here's an example of how to use it:

```typescript
import { Plugins } from '@capacitor/core';

const { RequestLocation } = Plugins;

async function requestUserLocation() {
  try {
    const response = await RequestLocation.requestLocation();
    const { latitude, longitude } = response.coords;
    console.log(`User's location: ${latitude}, ${longitude}`);
  } catch (error) {
    console.error('Error getting user location', error);
  }
}
```

In the above example, we import the `Plugins` object from `@capacitor/core` and access the `RequestLocation` plugin. We then define an `async` function `requestUserLocation` that uses the `requestLocation` method to request the user's location. The response from the method call contains the latitude and longitude of the user's location, which we log to the console.

Make sure to handle any errors that may occur during the request, as shown in the example above.

## Testing on Devices

To test the location request on actual devices, you will need to deploy your app to a physical device or emulator. Use the following commands to run your app on different platforms:

- Android:
  ```bash
  npx cap open android
  ```
- iOS:
  ```bash
  npx cap open ios
  ```

Once your app is running on the device, you can trigger the location request and observe the results.

## Conclusion

In this tutorial, we have covered the basics of using the capacitor-request-location package in a Capacitor app. You have learned how to add the package to your project and how to request the user's location using the plugin.