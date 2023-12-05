---
title: "Using the bluetooth-simple-android-plugin package"
description: "A tutorial on how to use the bluetooth-simple-android-plugin package to interact with the Bluetooth adapter of an Android device"
created_at: "2021-10-19"
published: true
slug: "bluetooth-simple-android-plugin"
---

# Using the bluetooth-simple-android-plugin package

The bluetooth-simple-android-plugin is a CapacitorJS plugin that allows you to use the Bluetooth adapter of an Android device in a simple and direct way. In this tutorial, we will walk through the installation process and explore the available API methods.

## Installation

To start using the bluetooth-simple-android-plugin, you first need to install it in your project. Open your terminal and run the following command:

```bash
npm install bluetooth-simple-android-plugin
```

After the installation is complete, sync your project with Capacitor by running:

```bash
npx cap sync
```

## Permissions

To use this plugin, you need to activate several permissions in your AndroidManifest.xml file. Add the following lines inside the `<manifest>` tag:

```xml
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

## API

Once you have installed the bluetooth-simple-android-plugin and set the necessary permissions, you can start using its API methods. Import the `BluetoothSimple` class into your project like this:

```typescript
import { BluetoothSimple } from 'bluetooth-simple-android-plugin';
```

### Change the Device Name

To change the name of the device, use the `setName` method. Pass in an object with the new name as the `name` property.

```typescript
const options = { name: 'NewDeviceName' };
BluetoothSimple.setName(options);
```

### Start Device Discovery

To activate the detection of visible devices, use the `startDiscovery` method. This method takes a callback function that will be executed whenever a new device is discovered.

```typescript
BluetoothSimple.startDiscovery((message, err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  console.log('New Device:', message);
});
```

### Set Device Discoverable

To make the device discoverable by other devices, use the `setDiscoverable` method.

```typescript
BluetoothSimple.setDiscoverable();
```

## Conclusion

Using the bluetooth-simple-android-plugin package, you can easily interact with the Bluetooth adapter of an Android device. In this tutorial, we covered the installation process, necessary permissions, and explored the available API methods. Now you can start building Bluetooth-enabled applications using CapacitorJS and the bluetooth-simple-android-plugin. Happy coding!