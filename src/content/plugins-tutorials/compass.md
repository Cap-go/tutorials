```md
---
"title": "Using capacitor-plugin-compass Package"
"description": "Learn how to integrate and use the capacitor-plugin-compass package to add compass functionality in your Capacitor apps."
"created_at": "2023-10-06"
"published": true
slug: compass
---

# Using capacitor-plugin-compass Package

The **capacitor-plugin-compass** package allows you to integrate a compass feature into your Capacitor apps. This plugin provides access to the device's orientation sensor to determine the direction the device is pointing. By following the steps below, you can easily add compass functionality to your Ionic applications.

## Installation

To get started working with the capacitor-plugin-compass package, follow the steps below:

### 1. Install the Plugin

Use npm to install the **capacitor-plugin-compass** package:

```bash
npm install capacitor-plugin-compass
```

### 2. Add the Plugin to your Capacitor Project

After installing the plugin, you need to follow the Capacitor plugin installation instructions to add it to your project.

### 3. Request Permission

Make sure to include the necessary permissions for the compass functionality in your app's configuration.

```xml
<!--
Include necessary permissions in your AndroidManifest.xml file
-->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.sensor.compass"/>
```

For iOS, make sure to include relevant permissions in your Info.plist file.

### 4. Accessing the Compass

You can now use the JavaScript API provided by the **capacitor-plugin-compass** package to access the device's compass functionality. Here's an example of how you can get the current orientation:

```typescript
import { Plugins } from '@capacitor/core';

const { Compass } = Plugins;

// Get the current heading (0-359.99 degrees)
Compass.addListener('heading', (data) => {
  console.log('Current Heading: ', data.heading);
});
```

### 5. Additional Functionality

The **capacitor-plugin-compass** package offers various additional functionalities such as setting up event listeners, configuring sensor accuracy, and more. You can explore the official plugin documentation for more detailed information.

By following these steps, you can easily integrate and utilize the **capacitor-plugin-compass** package to enhance your Capacitor app with compass features.
```
