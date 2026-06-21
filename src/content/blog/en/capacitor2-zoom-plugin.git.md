---
title: How to Use the capacitor2-zoom-plugin Package
description: Learn how to integrate and utilize the capacitor2-zoom-plugin in your Capacitor app for zoom functionalities.
created_at: 2022-01-15
published: true
slug: capacitor2-zoom-plugin.git
locale: en
---

# Using capacitor2-zoom-plugin in your Capacitor App

The `capacitor2-zoom-plugin` is a useful package that allows you to easily integrate zoom functionalities into your Capacitor app. Follow the steps below to set up and use this plugin in your project.

## Installation

1. Install `capacitor2-zoom-plugin` package in your Capacitor project using npm or yarn:
   ```bash
   npm install capacitor2-zoom-plugin
   ```

2. Add the plugin to your `capacitor.config.json`:
   ```json
   {
     "plugins": {
       "CapacitorZoom": {
         "package": "capacitor2-zoom-plugin",
         "electrodeName": "ZoomPlugin"
       }
     }
   }
   ```

3. Sync the native and web code using Capacitor CLI:
   ```bash
   npx cap sync
   ```

## Initialization

To start using the zoom functionalities, initialize the plugin in your Capacitor app.

1. Import the plugin in your TypeScript/JavaScript file:
   ```typescript
   import { Plugins } from '@capacitor/core';
   const { CapacitorZoom } = Plugins;
   ```

2. Implement the zooming functionality in your app code:
   ```typescript
   // Example: Zooming in on an image
   async function zoomImage(imageSrc) {
       try {
           const result = await CapacitorZoom.zoom({ source: imageSrc });
           console.log('Zoom result:', result);
       } catch (error) {
           console.error('Zoom error:', error);
       }
   }
   ```

3. Call the `zoomImage` function with the image source to enable zoom on it.

## Additional Functions

The `capacitor2-zoom-plugin` offers various other useful functions apart from the basic zoom functionality. Here are some examples:

- `openZoomMeeting(url: string)`: Opens a Zoom meeting using the provided URL.
- `setZoomLevel(level: number)`: Sets the zoom level to a specific value.

Make sure to explore the documentation of the plugin for a complete list of available functions and their parameters.

## Testing

During development, it's important to test the zoom functionalities to ensure they work as expected. You can test the plugin by running your Capacitor project and checking the zoom feature in action.

## Conclusion

Integrating the `capacitor2-zoom-plugin` into your Capacitor app can enhance the user experience by providing zoom capabilities. Remember to refer to the official documentation for detailed usage guidelines and explore the various features this plugin offers.

Now you are ready to incorporate zoom functionalities seamlessly into your Capacitor app using the `capacitor2-zoom-plugin`. Happy coding! 🚀