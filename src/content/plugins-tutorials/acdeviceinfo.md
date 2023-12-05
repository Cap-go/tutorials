---
title: "Using capacitor-ac-device-info"
description: "A tutorial on how to use the capacitor-ac-device-info package"
created_at: "2021-08-23"
published: true
slug: acdeviceinfo
---

# Using capacitor-ac-device-info

This tutorial will guide you on how to use the `capacitor-ac-device-info` package to retrieve device information in your Capacitor app.

## Installation

To get started, you need to install the `capacitor-ac-device-info` package. Run the following command in your project directory:

```bash
npm install capacitor-ac-device-info
```

## Import the Plugin

Next, you need to import the `capacitor-ac-device-info` plugin in your Capacitor app. Open your `src/app.ts` file and add the following import statement:

```typescript
import 'capacitor-ac-device-info';
```

## Usage

Once you've installed the package and imported the plugin, you can use the `capacitor-ac-device-info` methods to retrieve device information.

### Get Device Info

To get device information, call the `getDeviceInfo` method. Here's an example of how to use it:

```typescript
import { DeviceInfoPlugin } from 'capacitor-ac-device-info';

const deviceInfo = await DeviceInfoPlugin.getDeviceInfo();

console.log(deviceInfo);
```

The `getDeviceInfo` method returns a promise that resolves to an object containing various device information such as the device name, operating system version, platform, and more.

## Conclusion

In this tutorial, you learned how to use the `capacitor-ac-device-info` package to retrieve device information in your Capacitor app. This can be useful for implementing device-specific functionality or gathering analytics. Experiment with the methods provided by the plugin to explore the available device information and utilize it in your app as needed.