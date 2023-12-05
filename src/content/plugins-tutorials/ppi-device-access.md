---
title: "Using ppi-device-access Package"
description: "A tutorial on how to use the ppi-device-access package to access device info."
created_at: "2021-10-08"
published: true
slug: "ppi-device-access"
---

# Using ppi-device-access Package

In this tutorial, we will learn how to use the ppi-device-access package to access device info in a Capacitor app.

## Installation

To get started, we need to install the ppi-device-access package. Open your terminal and run the following command:

```bash
npm install ppi-device-access
```

Next, sync the Capacitor project by running the following command:

```bash
npx cap sync
```

## Accessing Device Info

The ppi-device-access package provides an `echo` method that allows us to access device information. Let's see how it works.

```typescript
import { Plugins } from '@capacitor/core';
import 'ppi-device-access'; // Import the ppi-device-access package

const { DeviceAccess } = Plugins;

async function getDeviceInfo() {
  try {
    const deviceInfo = await DeviceAccess.echo({ value: 'Hello from Capacitor' });
    console.log(deviceInfo.value);
  } catch (error) {
    console.error(error);
  }
}

getDeviceInfo();
```

In the code snippet above, we import the `Plugins` object from `@capacitor/core`, and import the `ppi-device-access` package. Then, we access the `DeviceAccess` plugin from the `Plugins` object.

The `echo` method is called with an object parameter that contains a `value` property. This value can be any string you want to send to the native device. The `echo` method returns a promise that resolves to an object with a `value` property.

In the example above, we simply log the value returned by the `echo` method to the console. You can use this value in any way you need in your app.

## Conclusion

In this tutorial, we learned how to install and use the ppi-device-access package to access device info in a Capacitor app. We covered the installation process, importing the package, and using the `echo` method to retrieve device information.

With the ppi-device-access package, you can easily access device info and integrate it into your Capacitor app.

Feel free to explore the official documentation of the ppi-device-access package for more information on its usage and capabilities.