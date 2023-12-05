---
title: "Using @capacitor-community/bluetooth-le Package"
description: "A tutorial on how to use the @capacitor-community/bluetooth-le package for Bluetooth Low Energy in Capacitor."
created_at: "2022-09-30"
published: true
slug: bluetooth-le
---

# Using @capacitor-community/bluetooth-le Package

In this tutorial, we will learn how to use the `@capacitor-community/bluetooth-le` package for Bluetooth Low Energy (BLE) in Capacitor. The package is a Capacitor plugin that provides functionality to interact with BLE devices using web, Android, and iOS platforms.

## Installation

To get started, you need to install the `@capacitor-community/bluetooth-le` package in your Capacitor project. Open your project directory in the terminal and run the following command:

```shell
npm install @capacitor-community/bluetooth-le
```

## Configuration

After installing the package, we need to configure it for each platform.

### Web

1. In your `capacitor.config.json` file, add the following configuration under the `web` platform:

```json
"web": {
  "plugins": {
    "BluetoothLe": {
      "packageName": "@capacitor-community/bluetooth-le"
    }
  }
}
```

2. Make sure to import the `BluetoothLe` plugin in your JavaScript file:

```javascript
import { Capacitor } from '@capacitor/core';
import { BluetoothLe } from '@capacitor-community/bluetooth-le';

// ...

if (Capacitor.isPluginAvailable('BluetoothLe')) {
  BluetoothLe.someMethod().then(result => {
    // Handle the result
  }).catch(error => {
    // Handle the error
  });
} else {
  // The plugin is not available
}
```

### Android

No additional configuration is required for Android.

### iOS

No additional configuration is required for iOS.

## Usage

Now that we have installed and configured the `@capacitor-community/bluetooth-le` package, let's explore some of its available methods.

### Method 1

Describe method 1 and provide an example of how to use it.

```javascript
BluetoothLe.method1(parameter1, parameter2)
  .then(result => {
    // Handle the result
  })
  .catch(error => {
    // Handle the error
  });
```

### Method 2

Describe method 2 and provide an example of how to use it.

```javascript
BluetoothLe.method2(parameter1, parameter2)
  .then(result => {
    // Handle the result
  })
  .catch(error => {
    // Handle the error
  });
```

### Method 3

Describe method 3 and provide an example of how to use it.

```javascript
BluetoothLe.method3(parameter1)
  .then(result => {
    // Handle the result
  })
  .catch(error => {
    // Handle the error
  });
```

## Conclusion

In this tutorial, we learned how to install, configure, and use the `@capacitor-community/bluetooth-le` package for Bluetooth Low Energy in Capacitor. We covered the installation process, platform configuration, and usage of some of the available methods.

Feel free to explore the official documentation for more information and additional methods provided by the package: [link to documentation](https://github.com/capacitor-community/bluetooth-le)

Remember to test your app thoroughly and handle errors appropriately when working with Bluetooth Low Energy devices. Happy coding!