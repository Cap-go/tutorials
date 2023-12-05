---
title: "Using @danyalwe/capacitor-systeminfo Package"
description: "A tutorial on how to use the @danyalwe/capacitor-systeminfo package in a Capacitor app"
created_at: "2022-04-05"
published: true
slug: capacitor-systeminfo
---

# Using @danyalwe/capacitor-systeminfo Package

In this tutorial, we will learn how to integrate and use the `@danyalwe/capacitor-systeminfo` package in a Capacitor app. The `@danyalwe/capacitor-systeminfo` package provides various system information APIs that can be utilized to gather information about the user's device.

Before we begin, make sure you have a Capacitor project set up. If not, you can create one using the following command:

```bash
npx @capacitor/cli create
```

Let's get started!

## Installation

To install the `@danyalwe/capacitor-systeminfo` package, run the following command in your project's root directory:

```bash
npm install @danyalwe/capacitor-systeminfo
```

## Usage

### Importing the Plugin

To use the `@danyalwe/capacitor-systeminfo` package in your project, import it in your desired file:

```javascript
import { CapacitorSystemInfo } from '@danyalwe/capacitor-systeminfo';
```

### Getting Device Information

Once you have imported the package, you can start using its API. One of the most common use cases is to retrieve device information. Here's an example of how to get the device model:

```javascript
const deviceModel = await CapacitorSystemInfo.getDeviceInfo();
console.log('Device Model:', deviceModel.model);
```

In the above code snippet, we use the `getDeviceInfo()` method provided by the `CapacitorSystemInfo` object to retrieve the device information. The method returns an object containing various properties, such as the device model, manufacturer, operating system, etc.

### Gathering Battery Information

Another useful feature provided by the `@danyalwe/capacitor-systeminfo` package is the ability to gather battery information. Here's an example of how to retrieve the battery level:

```javascript
const batteryLevel = await CapacitorSystemInfo.getBatteryLevel();
console.log('Battery Level:', batteryLevel.level);
```

The `getBatteryLevel()` method returns an object containing the battery level as a percentage.

## Conclusion

In this tutorial, we learned how to integrate and use the `@danyalwe/capacitor-systeminfo` package in a Capacitor app. We covered the installation process, importing the plugin, retrieving device information, and gathering battery information. The `@danyalwe/capacitor-systeminfo` package provides a convenient way to access system information and can be further explored to meet specific requirements in your Capacitor app.

I hope this tutorial was helpful in getting started with the `@danyalwe/capacitor-systeminfo` package. Happy coding!
