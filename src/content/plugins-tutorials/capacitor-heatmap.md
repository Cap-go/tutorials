---
title: "Using Capacitor Heatmap Plugin"
description: "Learn how to use the Capacitor Heatmap plugin to show heatmaps on your Capacitor app"
created_at: "2021-09-20"
published: true
slug: "capacitor-heatmap"
---

# Using Capacitor Heatmap Plugin

In this tutorial, we will learn how to use the Capacitor Heatmap plugin to show heatmaps on your Capacitor app. The Capacitor Heatmap plugin allows you to display heatmaps on Web, iOS, and Android platforms using different map libraries.

## Installation

To get started, you need to install the `capacitor-heatmap` package in your Capacitor app.

```bash
npm install capacitor-heatmap
```

Once the installation is complete, you need to sync Capacitor with your project.

```bash
npx cap sync
```

## Integration

### Web

To use the Capacitor Heatmap plugin on the web, you need to import the library in your JavaScript/TypeScript file.

```javascript
import 'capacitor-heatmap';
```

### iOS

To use the Capacitor Heatmap plugin on iOS, no additional steps are required. The plugin will be automatically integrated into your Xcode project.

### Android

To use the Capacitor Heatmap plugin on Android, you need to edit your `MainActivity.java` file and add the following import statement:

```java
import com.abritopach.plugin.capacitorheatmap.CapacitorHeatmap;
```

Then, add the Capabilities for Location and Background Modes in your app's `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

<application ...>
  ...

  <service
    android:name="com.abritopach.plugin.capacitorheatmap.HeatmapLocationService"
    android:exported="false"/>

  <receiver
    android:name="com.abritopach.plugin.capacitorheatmap.HeatmapLocationService$BootReceiver"
    android:enabled="true"
    android:exported="true"
    android:permission="android.permission.RECEIVE_BOOT_COMPLETED">
    <intent-filter>
      <action android:name="android.intent.action.BOOT_COMPLETED"/>
      <category android:name="android.intent.category.DEFAULT"/>
    </intent-filter>
  </receiver>

</application>
```

## Usage

Now you are ready to use the Capacitor Heatmap plugin in your app. Here's an example of how to use it to show a simple heatmap:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorHeatmap } = Plugins;

const data = [
  { lat: 40.7128, lng: -74.006 },
  { lat: 34.0522, lng: -118.2437 },
  { lat: 51.5074, lng: -0.1278 },
  // Add more data points here
];

CapacitorHeatmap.showSimpleHeatmap({ data });
```

In this example, we pass an array of data points with latitude (`lat`) and longitude (`lng`) coordinates to the `showSimpleHeatmap` function. The plugin will then display a heatmap based on the provided data.

## Conclusion

In this tutorial, we learned how to install and integrate the Capacitor Heatmap plugin into your Capacitor app. We also covered the basic usage of the plugin to display a simple heatmap. You can explore more features of the plugin and customize the heatmap according to your requirements.

Start using the Capacitor Heatmap plugin in your app and visualize data in a more interactive and engaging way!

---

That's it! You now have a markdown tutorial for using the Capacitor Heatmap package, including a frontmatter section with relevant information.