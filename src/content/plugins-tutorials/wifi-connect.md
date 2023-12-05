---
title: "Using wifi-connect Package"
description: "A tutorial on how to use the wifi-connect package to connect a device through Wi-Fi"
created_at: "2022-03-01"
published: true
slug: wifi-connect
---

# Using wifi-connect Package

In this tutorial, we will learn how to use the `wifi-connect` package to connect a device through Wi-Fi. The `wifi-connect` package is a plugin that can be used with Capacitor, and it provides functions to manage Wi-Fi networks on iOS and Android devices.

## Installation

To install the `wifi-connect` package, you can use the following commands:

```bash
npm install @falconeta/capacitor-wifi-connect
npx cap sync
```

The above commands will install the package and synchronize it with your Capacitor project.

## iOS Functions

Before using the `wifi-connect` package on iOS, there are a few things to note:

- The Connect/Disconnect functions only work for iOS 11 and above.
- The prefixConnect/securePrefixConnect functions only work for iOS 13 and above.
- It cannot run in the simulator, so you need to attach an actual device when building with Xcode.
- You need to ensure that the 'HotspotConfiguration' and 'Wifi Information' capabilities are added to your Xcode project.

## Android Functions

On Android, you need to ensure that the following permissions are configured in your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## API

The `wifi-connect` package provides the following functions:

### checkPermission()

This function checks the permission state related to Wi-Fi connectivity.

### requestPermission()

This function requests the user for permission to access Wi-Fi connectivity.

### disconnect()

This function disconnects the device from the current Wi-Fi network.

### getSSIDs()

This function returns an array of all available SSIDs (Wi-Fi network names).

### getSSID()

This function returns the SSID of the currently connected Wi-Fi network.

### connect(options)

This function connects the device to a specified Wi-Fi network.

- `options`: An object with the following properties:
  - `ssid`: The SSID of the Wi-Fi network to connect to.
  - `saveNetwork`: (Optional) A boolean indicating whether to save the network configuration.

### prefixConnect(options)

This function connects the device to a Wi-Fi network with a prefix.

- `options`: An object with the following properties:
  - `ssid`: The SSID of the Wi-Fi network to connect to.
  - `saveNetwork`: (Optional) A boolean indicating whether to save the network configuration.

### secureConnect(options)

This function connects the device to a secured Wi-Fi network.

- `options`: An object with the following properties:
  - `ssid`: The SSID of the Wi-Fi network to connect to.
  - `password`: The password of the Wi-Fi network.
  - `saveNetwork`: (Optional) A boolean indicating whether to save the network configuration.

### securePrefixConnect(options)

This function connects the device to a secured Wi-Fi network with a prefix.

- `options`: An object with the following properties:
  - `ssid`: The SSID of the Wi-Fi network to connect to.
  - `password`: The password of the Wi-Fi network.
  - `saveNetwork`: (Optional) A boolean indicating whether to save the network configuration.

## Conclusion

In this tutorial, we explored the `wifi-connect` package and learned how to use it to connect a device through Wi-Fi. We covered the installation process, the functions available for iOS and Android, and the different options for connecting to Wi-Fi networks. With this knowledge, you can now easily incorporate Wi-Fi connectivity features into your Capacitor apps.