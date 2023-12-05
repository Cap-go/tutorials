---
title: "Using Capacitor Plugin Dynamsoft Camera Preview"
description: "In this tutorial, we will learn how to use the Capacitor Plugin Dynamsoft Camera Preview to interact with the camera in a Capacitor project."
created_at: "2022-01-01"
published: true
slug: "capacitor-plugin-camera-preview"
---

# Using Capacitor Plugin Dynamsoft Camera Preview

The Capacitor Plugin Dynamsoft Camera Preview is a plugin that allows you to interact with the camera in a Capacitor project. In this tutorial, we will learn how to install the plugin and use its features.

## Installation

To install the Capacitor Plugin Dynamsoft Camera Preview, follow these steps:

1. Open your Capacitor project directory in your terminal.
2. Run the following command to install the plugin:

   ```bash
   npm install capacitor-plugin-dynamsoft-camera-preview
   ```

3. Sync the plugin with your Capacitor project by running the following command:

   ```bash
   npx cap sync
   ```

## Usage

To use the Capacitor Plugin Dynamsoft Camera Preview in your project, follow these steps:

1. Import the plugin in your JavaScript or TypeScript file:

   ```javascript
   import { CameraPreview } from 'capacitor-plugin-dynamsoft-camera-preview';
   ```

2. Initialize the camera preview by calling the `CameraPreview.start` method:

   ```javascript
   CameraPreview.start({
     position: 'rear', // Set the camera position to rear
     parent: 'cameraContainer', // Set the parent element's ID or reference of the camera preview
   });
   ```

3. Display the camera preview by adding an element to your HTML file with the specified ID:

   ```html
   <div id="cameraContainer"></div>
   ```

4. To stop the camera preview, use the `CameraPreview.stop` method:

   ```javascript
   CameraPreview.stop();
   ```

## Additional Features

The Capacitor Plugin Dynamsoft Camera Preview also provides additional features that you can use:

- Adjust camera color effect.
- Drag the preview box.
- Set a custom position, size, and alpha for the camera preview box.
- Set the focus mode, zoom, color effects, exposure mode, white balance mode, and exposure compensation.
- Tap to focus.

Refer to the plugin's documentation for detailed usage instructions on these features.

## Conclusion

In this tutorial, we have learned how to install and use the Capacitor Plugin Dynamsoft Camera Preview in a Capacitor project. We have also explored some of its additional features. You can now integrate camera functionality into your Capacitor app using this plugin. Happy coding!