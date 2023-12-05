---
title: "Using capacitor-bluetooth-paired-devices Package"
description: "This tutorial will guide you through the process of using the capacitor-bluetooth-paired-devices package to fetch the paired Bluetooth devices."
created_at: "2021-10-15"
published: true
slug: "capacitor-bluetooth-paired-devices"
---

# Using capacitor-bluetooth-paired-devices Package

In this tutorial, we will learn how to use the `capacitor-bluetooth-paired-devices` package to fetch the paired Bluetooth devices. This package provides a client implementation for fetching the paired Bluetooth devices in Capacitor projects.

## Prerequisites

Before we begin, ensure that you have the following prerequisites in place:

- Capacitor project set up.
- `capacitor-bluetooth-paired-devices` package installed.

## Installation

To install the `capacitor-bluetooth-paired-devices` package, use the following command:

```bash
npm install --save capacitor-bluetooth-paired-devices
```

## Registering the Plugin

In your Capacitor project, you need to register the Android plugin in the `MainActivity`. Open the `MainActivity.java` file and add the following import statement at the top:

```java
import com.capacitor.paired.BluetoothPairedDevices;
```

Inside the `onCreate` method, add the following code:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(BluetoothPairedDevices.class);
}});
```

## Fetching Paired Bluetooth Devices

To fetch the paired Bluetooth devices, we can use the `BluetoothPairedDevices.getPairedDevices()` method. Here's an example of how to use it:

```typescript
import { Plugins } from '@capacitor/core'

const { BluetoothPairedDevices } = Plugins

BluetoothPairedDevices.getPairedDevices().then((result: PairedDevices) => {
    /*
     * {
     *   devices: [{
     *     name: 'device1',
     *     address: '00:00:00:00:01'
     *   }, {
     *     name: 'device2',
     *     address: '00:00:00:00:02'
     *   }]
     * }
     */
})
```

The `getPairedDevices` method returns a promise that resolves to an object containing an array of paired Bluetooth devices. Each device object has a `name` and `address` property.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-bluetooth-paired-devices` package to fetch the paired Bluetooth devices in a Capacitor project. By following the steps outlined in this tutorial, you should now be able to integrate Bluetooth functionality into your Capacitor app.