---
title: "Using Vista-BLE Package"
description: "A tutorial on how to use the Vista-BLE package for Capacitor"
created_at: "2022-07-15"
published: true
slug: vistable_plugin
---

# Using Vista-BLE Package

In this tutorial, we will learn how to use the Vista-BLE package for Capacitor. Vista-BLE is a Capacitor BLE plugin that allows you to communicate with Bluetooth Low Energy (BLE) devices.

## Installation

To install the Vista-BLE package, run the following command:

```shell
npm i --save vista-ble
```

## Usage

Once you have installed the Vista-BLE package, you can start using it in your Capacitor project. Here's an example of how to use the Vista-BLE plugin:

```javascript
// Import the necessary modules
import { Plugins } from '@capacitor/core';
const { VistablePlugin } = Plugins;

// Configure the options
const options = {
  apikey: '83dcb4b4-8d8d-4548-b0f7-86eb3bed11a7',
  name: 'lumisheets',
  connector: 'ble'
};

// Initialize the manager
VistablePlugin.initManager(options).then((result) => {
  // Manager initialized successfully
});

// Turn on the lights
VistablePlugin.turnOn({ win: '0', second: '1', third: '2' });

// Turn off the lights
VistablePlugin.turnOff();
```

In the above example, we first import the necessary modules from `@capacitor/core` and configure the options for the Vista-BLE plugin. We then initialize the manager with the specified options and handle the result.

After initializing the manager, we can use the `turnOn` and `turnOff` methods to control the lights connected via BLE. The `turnOn` method takes an object with the IDs of the lights to turn on, while the `turnOff` method turns off all the lights.

That's it! You have successfully used the Vista-BLE package in your Capacitor project.

## Conclusion

In this tutorial, we learned how to use the Vista-BLE package for Capacitor. We saw how to install the package and use the provided methods to control BLE lights. With this knowledge, you can now integrate BLE functionality into your Capacitor applications with ease.