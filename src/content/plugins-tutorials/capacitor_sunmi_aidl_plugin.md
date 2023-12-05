---
title: "Using capacitor-plugin-sunmi-aidl Package"
description: "A tutorial on how to use the capacitor-plugin-sunmi-aidl package in your Ionic Capacitor project"
created_at: "2021-10-11"
published: true
slug: "capacitor_sunmi_aidl_plugin"
---

# Using capacitor-plugin-sunmi-aidl Package

The capacitor-plugin-sunmi-aidl package allows you to easily integrate AIDL commands for Sunmi devices into your Ionic Capacitor project. This tutorial will guide you through the steps to use this plugin effectively.

## Prerequisites

Before getting started, make sure you have the following:

1. An Ionic Capacitor project set up.
2. A Sunmi device with AIDL support.

## Installation

To install the capacitor-plugin-sunmi-aidl package, run the following command:

```bash
npm install capacitor-plugin-sunmi-aidl
```

## Adding the Plugin to Your Project

Once the package is installed, import the SunmiAidlPlugin module into your project's main module:

```typescript
import { SunmiAidlPlugin } from 'capacitor-plugin-sunmi-aidl';
```

## Accessing AIDL Commands

To access the AIDL commands provided by the Sunmi device, you can call the appropriate methods from the SunmiAidlPlugin module. For example, to print a text using the Sunmi printer, use the following code:

```typescript
SunmiAidlPlugin.printText({
  text: 'Hello, Sunmi Printer!'
}).then((result) => {
  console.log('Print success:', result.success);
}).catch((error) => {
  console.error('Print error:', error);
});
```

Make sure to handle the promise's success and error cases accordingly.

## Supported AIDL Commands

The capacitor-plugin-sunmi-aidl package provides several AIDL commands for various functionalities of Sunmi devices. Some of the supported commands include:

- Printing receipts or texts.
- Scanning barcodes or QR codes.
- Controlling the device's LED.
- Accessing the device's camera.

Refer to the package's documentation for a complete list of supported AIDL commands and their usage.

## Conclusion

In this tutorial, you learned how to install and use the capacitor-plugin-sunmi-aidl package in your Ionic Capacitor project. You also explored some of the supported AIDL commands for Sunmi devices. Now you can easily integrate Sunmi device functionalities into your mobile application.

Happy coding!