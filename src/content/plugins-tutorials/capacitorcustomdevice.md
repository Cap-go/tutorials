---
title: "Using @akostdev/device-model Package"
description: "This tutorial will guide you through the process of using the @akostdev/device-model package in your Capacitor project."
created_at: "2021-10-21"
published: true
slug: "capacitorcustomdevice"
---

# Using @akostdev/device-model Package

In this tutorial, we will learn how to use the `@akostdev/device-model` package in your Capacitor project. This package provides a simple way to retrieve the device model info in your app.

## Installation

To get started, open your terminal and navigate to your project directory. Run the following command to install the `@akostdev/device-model` package:

```bash
npm install @akostdev/device-model
```

## Usage

Once the package is installed, you can import and use it in your code. 

First, import the `getDeviceModel` function from the package:

```javascript
import { getDeviceModel } from '@akostdev/device-model';
```

Then, you can call the `getDeviceModel` function to get the device model. It returns a Promise that resolves to a string containing the device model information.

```javascript
getDeviceModel().then((deviceModel) => {
  console.log('Device Model:', deviceModel);
  // Do something with the device model info
}).catch((error) => {
  console.error('Error:', error);
});
```

That's it! You have successfully integrated the `@akostdev/device-model` package into your Capacitor project and retrieved the device model information.

## Summary

In this tutorial, we learned how to use the `@akostdev/device-model` package to retrieve the device model information in a Capacitor project. The package provides a simple way to get the device model using the `getDeviceModel` function.

Remember to import the `getDeviceModel` function and call it to retrieve the device model. You can then use the returned data for any further processing or display.

Happy coding!
