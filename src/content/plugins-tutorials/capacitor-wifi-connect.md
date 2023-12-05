---
title: "Using @falconeta/capacitor-wifi-connect Package"
description: "This tutorial will guide you through the steps of using the @falconeta/capacitor-wifi-connect package in your Capacitor app."
created_at: "2021-10-28"
published: true
slug: "capacitor-wifi-connect"
---

# Using @falconeta/capacitor-wifi-connect Package

In this tutorial, we will learn how to use the `@falconeta/capacitor-wifi-connect` package in a Capacitor app. The `@falconeta/capacitor-wifi-connect` package provides a convenient way to connect, disconnect, and manage WiFi networks in your Capacitor app.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project: `npm install @capacitor/cli`
- A Capacitor project set up: `npx cap init [appName] [appId]`
- Access to the `@falconeta/capacitor-wifi-connect` package: `npm install @falconeta/capacitor-wifi-connect`

## Installation

To install the `@falconeta/capacitor-wifi-connect` package, run the following command in the root directory of your Capacitor project:

```bash
npm install @falconeta/capacitor-wifi-connect
```

## Adding the Plugin to Your App

1. Open the `capacitor.config.json` file in your Capacitor project.
2. Locate the `plugins` section and add the `@falconeta/capacitor-wifi-connect` plugin:

```json
{
  "plugins": {
    "@falconeta/capacitor-wifi-connect": {
      "key": "your_key_goes_here"
    }
  }
}
```

Replace `"your_key_goes_here"` with the actual API key you obtained for the `@falconeta/capacitor-wifi-connect` package.

## Connecting to a WiFi Network

To connect to a WiFi network using the `@falconeta/capacitor-wifi-connect` package, follow these steps:

1. Import the `WifiConnect` plugin in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';

const { WifiConnect } = Plugins;
```

2. Use the `connect()` method to connect to a specific WiFi network:

```typescript
const ssid = 'your_wifi_ssid';
const password = 'your_wifi_password';

await WifiConnect.connect({ ssid, password });
```

Replace `"your_wifi_ssid"` with the SSID (network name) of the WiFi network you want to connect to. Replace `"your_wifi_password"` with the password for the WiFi network.

## Disconnecting from a WiFi Network

To disconnect from a WiFi network using the `@falconeta/capacitor-wifi-connect` package, follow these steps:

1. Import the `WifiConnect` plugin in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';

const { WifiConnect } = Plugins;
```

2. Use the `disconnect()` method to disconnect from the currently connected WiFi network:

```typescript
await WifiConnect.disconnect();
```

## Managing WiFi Networks

The `@falconeta/capacitor-wifi-connect` package also provides methods to manage WiFi networks on your device. Here are some examples:

- `scan(): Promise<{ networks: WifiNetwork[] }>`: Scans for available WiFi networks and returns a list of networks.
- `isConnected(): Promise<{ isConnected: boolean }>`: Checks if your device is currently connected to a WiFi network.
- `getConnectedSSID(): Promise<{ ssid: string }>`: Retrieves the SSID of the currently connected WiFi network.

For more information on how to use these methods, refer to the official documentation of the `@falconeta/capacitor-wifi-connect` package.

## Conclusion

In this tutorial, we learned how to use the `@falconeta/capacitor-wifi-connect` package to connect, disconnect, and manage WiFi networks in a Capacitor app. This package provides a simple and straightforward way to incorporate WiFi functionality into your app. Explore the official documentation for more advanced features and customization options.

Happy coding!