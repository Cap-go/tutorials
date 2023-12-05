---
title: "Using the @general-galactic/capacitor-esp-idf-provisioning Package"
description: "A tutorial on how to use the @general-galactic/capacitor-esp-idf-provisioning package to provision Espressif devices running the WiFi provisioning stack."
created_at: "2021-11-22"
published: true
slug: "capacitor-esp-idf-provisioning"
---

# Using the @general-galactic/capacitor-esp-idf-provisioning Package

The @general-galactic/capacitor-esp-idf-provisioning package is a capacitor plugin that wraps the Espressif IDF Provisioning libraries for iOS and Android. It allows you to use an Ionic app to provision Espressif devices running the WiFi provisioning stack. In this tutorial, we will go through the steps to install and integrate the package into an Android app, as well as explore the available API methods.

## Prerequisites

Before you begin, make sure you have the following:

- Capacitor installed in your Ionic project.
- An Android app with SDK Level 25 or higher.

## Installation

To install the @general-galactic/capacitor-esp-idf-provisioning package, run the following command:

```bash
npm install @general-galactic/capacitor-esp-idf-provisioning
npx cap sync
```

## Initial Integration into an Android App

To integrate the package into an Android app, you need to add the Maven repository to your `build.gradle` file. Open the `build.gradle` file in your app's `android` directory and add the following lines:

```groovy
allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://jitpack.io' }
    }
}
```

This allows the ESPProvision library from Espressif to be included in your app.

## API

The @general-galactic/capacitor-esp-idf-provisioning package provides several API methods for working with Espressif devices. Here are some of the key methods:

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

This method checks the status of system permissions required for the package, such as Bluetooth access and location access (Android only).

### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

This method prompts the user to grant the necessary permissions for the package (Android only).

### checkStatus()

This method checks the status of the WiFi provisioning process.

### searchESPDevices(...)

This method searches for nearby Espressif devices using WiFi provisioning.

### connect(...)

This method connects to a specific Espressif device.

### scanWifiList(...)

This method scans the available WiFi networks.

### provision(...)

This method provisions the selected WiFi credentials to the connected Espressif device.

### sendCustomDataString(...)

This method sends custom data to the connected Espressif device.

### disconnect(...)

This method disconnects from the connected Espressif device.

### openLocationSettings()

This method opens the device's location settings page.

### openBluetoothSettings()

This method opens the device's Bluetooth settings page.

### openAppSettings()

This method opens the app settings page.

### enableLogging()

This method enables logging for the package.

### disableLogging()

This method disables logging for the package.


## Conclusion

In this tutorial, we have learned how to install and integrate the @general-galactic/capacitor-esp-idf-provisioning package into an Android app. We have also explored the available API methods for working with Espressif devices. With this package, you can now easily provision WiFi credentials to Espressif devices running the WiFi provisioning stack.