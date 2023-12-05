---
title: "Using the extended-device-info package"
description: "A tutorial on how to use the extended-device-info package in your project."
created_at: "2022-12-12"
published: true
slug: extended-device-info
---

# Using the extended-device-info package

This tutorial will guide you through the process of using the extended-device-info package in your project. The extended-device-info package provides additional information about the user's device, such as the device name, model, operating system, and more.

## Installation

To install the extended-device-info package, open your terminal and run the following command:

```
npm install extended-device-info
```

## Usage

Once you have installed the package, you can import it into your project and start using it. Here's an example of how to use the extended-device-info package:

```javascript
import DeviceInfo from 'extended-device-info';

// Get the device name
const deviceName = DeviceInfo.getDeviceName();
console.log('Device Name:', deviceName);

// Get the device model
const deviceModel = DeviceInfo.getDeviceModel();
console.log('Device Model:', deviceModel);

// Get the operating system name
const osName = DeviceInfo.getOperatingSystemName();
console.log('Operating System Name:', osName);

// Get the operating system version
const osVersion = DeviceInfo.getOperatingSystemVersion();
console.log('Operating System Version:', osVersion);

// Get the device unique identifier
const deviceId = DeviceInfo.getDeviceId();
console.log('Device ID:', deviceId);

// Get the device battery level
const batteryLevel = DeviceInfo.getBatteryLevel();
console.log('Battery Level:', batteryLevel);
```

Make sure to import the `DeviceInfo` class from the 'extended-device-info' package and use the available methods to retrieve the desired information about the user's device.

## Conclusion

In this tutorial, you learned how to install and use the extended-device-info package in your project. You can now retrieve additional information about the user's device, such as the device name, model, operating system, and more. This information can be useful for analytics, debugging, or customizing the user experience based on their device's characteristics.