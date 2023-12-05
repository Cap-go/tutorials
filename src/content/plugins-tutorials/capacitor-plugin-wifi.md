---
title: "Using capacitorjs-plugin-wifi"
description: "A tutorial on how to use the capacitorjs-plugin-wifi package to manage WiFi connections in your Capacitor application."
created_at: "2021-12-01"
published: true
slug: "capacitor-plugin-wifi"
---

# Using capacitorjs-plugin-wifi

In this tutorial, we will learn how to use the capacitorjs-plugin-wifi package to manage WiFi connections in your Capacitor application.

## Installation

First, make sure you have Capacitor installed globally. If not, you can install it using the following command:

```bash
npm install -g @capacitor/core @capacitor/cli
```

Next, you can install the capacitorjs-plugin-wifi package by running the following command in your project's root directory:

```bash
npm install capacitorjs-plugin-wifi
```

## Usage

### Importing the Plugin

To use the capacitorjs-plugin-wifi package in your application, you need to import it first. Add the following line of code at the top of your file where you want to use the WiFi plugin:

```typescript
import { WiFiPlugin } from 'capacitorjs-plugin-wifi';
```

### Checking WiFi Availability

To check if WiFi is available on the device, you can use the `isWifiAvailable()` function. This function returns a promise that resolves to a boolean value indicating the availability of WiFi.

```typescript
const isAvailable: boolean = await WiFiPlugin.isWifiAvailable();
console.log('WiFi available:', isAvailable);
```

### Getting the Current WiFi SSID

To get the SSID (Service Set Identifier) of the currently connected WiFi network, you can use the `getWifiSSID()` function. This function returns a promise that resolves to a string value representing the SSID.

```typescript
const ssid: string = await WiFiPlugin.getWifiSSID();
console.log('Current WiFi SSID:', ssid);
```

### Connecting to a WiFi Network

To connect to a specific WiFi network, you can use the `connectToWifi()` function. This function takes an object with the following properties: `ssid` (the SSID of the network) and `password` (the password for the network).

```typescript
const network = {
  ssid: 'MyWiFiNetwork',
  password: 'MyWiFiPassword',
};
await WiFiPlugin.connectToWifi(network);
console.log('Connected to WiFi:', network.ssid);
```

### Disconnecting from the Current WiFi Network

To disconnect from the currently connected WiFi network, you can use the `disconnectFromWifi()` function.

```typescript
await WiFiPlugin.disconnectFromWifi();
console.log('Disconnected from WiFi');
```

## Conclusion

In this tutorial, we learned how to use the capacitorjs-plugin-wifi package to manage WiFi connections in a Capacitor application. We covered how to check for WiFi availability, get the current WiFi SSID, connect to a WiFi network, and disconnect from the current network. With these capabilities, you can create powerful WiFi management features in your Capacitor apps.

Make sure to check out the [capacitorjs-plugin-wifi documentation](https://github.com/your-username/capacitor-plugin-wifi) for more information on the available functions and their usage.