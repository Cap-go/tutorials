---
title: "Using the capacitor-radar package"
description: "A tutorial on how to use the capacitor-radar package in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor-radar"
---

# Using the capacitor-radar package

In this tutorial, we will learn how to integrate and use the `capacitor-radar` package in a Capacitor app. The `capacitor-radar` package provides a simple and efficient way to add radar functionality to your app.

## Step 1: Installation

To get started, we need to install the `capacitor-radar` package. Open your terminal and navigate to your Capacitor project directory. Run the following command:

```bash
npm install capacitor-radar
```

## Step 2: Add the plugin to your app

After installing the package, we need to add the plugin to our app. Open the `capacitor.config.json` file in your project directory and add the following code under the `plugins` section:

```json
"Plugins": {
  "CapacitorRadar": {
    "apiKey": "YOUR_RADAR_API_KEY"
  }
}
```

Make sure to replace `YOUR_RADAR_API_KEY` with your actual Radar API key.

## Step 3: Initialize the plugin

To use the `capacitor-radar` package, we need to initialize it in our app. Open your app's main JavaScript file, usually `index.js` or `app.js`, and add the following code at the top:

```javascript
import { CapacitorRadar } from 'capacitor-radar';

// Initialize the CapacitorRadar plugin
CapacitorRadar.initialize();
```

## Step 4: Use the radar functionality

Now that the `capacitor-radar` package is set up, we can start using its radar functionality in our app. Here is an example of how to track a user's location using the radar package:

```javascript
// Get the user's current location
navigator.geolocation.getCurrentPosition(async (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Track the user's location with the radar package
  const response = await CapacitorRadar.trackLocation({ latitude, longitude });

  if (response.success) {
    console.log("Location tracked successfully!");
  } else {
    console.error("Failed to track location:", response.error);
  }
});
```

In the above example, we first get the user's current location using the `navigator.geolocation.getCurrentPosition` function. Then, we use the `CapacitorRadar.trackLocation` method to track the user's location with the radar package. The `trackLocation` method returns a response object with a `success` property indicating whether the location was tracked successfully.

## Conclusion

In this tutorial, we learned how to integrate and use the `capacitor-radar` package in a Capacitor app. We installed the package, added the plugin to our app, initialized it, and used its radar functionality to track a user's location.

Radar functionality can be incredibly useful in location-based apps or apps that require real-time location tracking. The `capacitor-radar` package provides a straightforward way to add radar capabilities to your Capacitor app.

I hope you found this tutorial helpful!