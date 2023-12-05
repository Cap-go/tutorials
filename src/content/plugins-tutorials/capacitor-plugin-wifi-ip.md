---
title: "Using capacitor-plugin-wifi-ip"
description: "A tutorial on how to use the capacitor-plugin-wifi-ip package to retrieve the device's WiFi IP address."
created_at: "2021-10-18"
published: true
slug: "capacitor-plugin-wifi-ip"
---

# Using capacitor-plugin-wifi-ip

In this tutorial, we will explore how to use the `capacitor-plugin-wifi-ip` package to retrieve the WiFi IP address of a device. This plugin allows you to get the IP address of the device's connected WiFi network, which can be useful for various purposes such as network diagnostics, displaying the IP address to the user, or integrating with other networking functionalities of your app.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor project setup and configured.
- Node.js and npm installed on your development machine.

## Installation

To use the `capacitor-plugin-wifi-ip` package in your Capacitor project, follow these steps:

1. Navigate to your project's root directory using a terminal or command prompt.
2. Run the following command to install the package:

   ```bash
   npm install --save capacitor-plugin-wifi-ip
   ```

3. Next, sync your project's native code by running:

   ```bash
   npx cap sync
   ```

4. Import the plugin in your project's TypeScript file:

   ```typescript
   import { Plugins } from '@capacitor/core';
   const { WifiIp } = Plugins;
   ```

## Usage

Once you have installed and imported the `capacitor-plugin-wifi-ip` package, you can use the following methods to retrieve the WiFi IP address:

### 1. Get the WiFi IP Address

To retrieve the WiFi IP address of the device, use the `getWifiIP()` method:

```typescript
const result = await WifiIp.getWifiIP();
const wifiIP = result.ip;
console.log('WiFi IP Address:', wifiIP);
```

The `getWifiIP()` method returns an object containing the `ip` property, which holds the IP address of the connected WiFi network.

## Example

Here's a complete example of using the `capacitor-plugin-wifi-ip` package to display the WiFi IP address to the user:

```typescript
import { Plugins } from '@capacitor/core';
const { WifiIp } = Plugins;

async function getAndDisplayWifiIP() {
  try {
    const result = await WifiIp.getWifiIP();
    const wifiIP = result.ip;
    alert('WiFi IP Address: ' + wifiIP);
  } catch (error) {
    console.error('Failed to get WiFi IP address:', error);
  }
}

// Call the function to retrieve and display the WiFi IP address
getAndDisplayWifiIP();
```

This example uses the `getAndDisplayWifiIP()` function to retrieve the WiFi IP address and display it to the user using the `alert()` function. If an error occurs during the retrieval process, it will be logged to the console.

## Conclusion

In this tutorial, you learned how to use the `capacitor-plugin-wifi-ip` package to retrieve the WiFi IP address of a device. This can be useful for various networking tasks in your Capacitor app. Feel free to explore the plugin's documentation for more advanced functionalities or customize the usage according to your specific requirements.