---
title: "Capacitor Heartrate Package Tutorial"
description: "A step-by-step guide on using the Capacitor Heartrate package"
created_at: "2021-10-28"
published: true
slug: "capacitor-heartrate"
---

# Capacitor Heartrate Package Tutorial

In this tutorial, we will explore how to use the Capacitor Heartrate package to monitor heart rate data in a Capacitor app.

## Prerequisites

Before we begin, ensure that you have the following:

1. Capacitor installed in your project.
2. A compatible heart rate sensor or device.

If you haven't set up a Capacitor project yet, you can create one using the following command:

```bash
npx @capacitor/cli create
```

## Installation

To install the Capacitor Heartrate package, run the following command in your project directory:

```bash
npm install capacitor-heartrate
```

## Configuration

Once the package is installed, you need to configure it for your project. 

### iOS Configuration

1. Open your project in Xcode.
2. Navigate to the **Info.plist** file.
3. Add the following key-value pairs:

```xml
<key>NSHealthShareUsageDescription</key>
<string>Access heart rate data.</string>
<key>NSBluetoothAlwaysUsageDescription</key>
<string>Allow app to connect to heart rate sensor.</string>
```

### Android Configuration

1. Open your project in Android Studio.
2. Navigate to the **AndroidManifest.xml** file.
3. Add the following permissions:

```xml
<uses-permission android:name="android.permission.BODY_SENSORS" />
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
```

## Using the Package

Now that the package is installed and configured, let's look at how to integrate it into your app.

### Importing the Plugin

In your app's main **src/index.js** file, import the Capacitor Heartrate plugin:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorHeartrate } = Plugins;
```

### Starting and Stopping Heart Rate Monitoring

To start heart rate monitoring, use the `startMonitoring()` method:

```javascript
CapacitorHeartrate.startMonitoring().then(() => {
  console.log('Heart rate monitoring started');
}).catch((error) => {
  console.error('Error starting heart rate monitoring:', error);
});
```

To stop heart rate monitoring, use the `stopMonitoring()` method:

```javascript
CapacitorHeartrate.stopMonitoring().then(() => {
  console.log('Heart rate monitoring stopped');
}).catch((error) => {
  console.error('Error stopping heart rate monitoring:', error);
});
```

### Event Listener

To receive heart rate data updates, register an event listener using the `addListener()` method:

```javascript
CapacitorHeartrate.addListener('heartrateData', (data) => {
  const { heartRate } = data;
  console.log('Heart rate:', heartRate);
});
```

### Error Handling

If there is an error with the heart rate monitoring functionality, the `addListener()` method can also capture the error event:

```javascript
CapacitorHeartrate.addListener('heartrateError', (error) => {
  console.error('Heart rate monitoring error:', error);
});
```

## Conclusion

In this tutorial, we have covered the installation, configuration, and usage of the Capacitor Heartrate package. You should now be able to integrate heart rate monitoring into your Capacitor app.

Remember to handle permissions and error scenarios appropriately in your app to provide a smooth user experience.

Please refer to the official documentation of the Capacitor Heartrate package for more advanced usage and customization options.

Happy coding!