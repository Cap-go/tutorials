---
title: Getting Started with @capacitor-community/bluetooth-le Package
description: >-
  A comprehensive tutorial on using the @capacitor-community/bluetooth-le
  package for Bluetooth Low Energy in Capacitor.
created_at: '2022-03-18'
published: true
slug: bluetooth-le.git
locale: en
---

# Getting Started with @capacitor-community/bluetooth-le

In this tutorial, we will guide you through using the Capacitor plugin for Bluetooth Low Energy - `@capacitor-community/bluetooth-le`.

## Installation

First, install the `@capacitor-community/bluetooth-le` package using npm or yarn:

```bash
npm install @capacitor-community/bluetooth-le
# or
yarn add @capacitor-community/bluetooth-le
```

## Importing the Plugin

Next, import the plugin in your Capacitor project:

```typescript
import { Plugins } from '@capacitor/core';
const { BluetoothLE } = Plugins;
```

## Usage

### Scan for Bluetooth Devices

To scan for nearby Bluetooth devices, use the following code:

```typescript
const devices = await BluetoothLE.scan();
console.log(devices);
```

### Connect to a Device

You can connect to a specific device using its address:

```typescript
const device = await BluetoothLE.connect({ address: '00:11:22:33:AA:BB' });
console.log(device);
```

### Read Characteristics

Read characteristics from a Bluetooth device:

```typescript
const value = await BluetoothLE.read({ address: '00:11:22:33:AA:BB', service: 'serviceUUID', characteristic: 'characteristicUUID' });
console.log(value);
```

### Write to a Characteristic

Write to a characteristic of a Bluetooth device:

```typescript
await BluetoothLE.write({ address: '00:11:22:33:AA:BB', service: 'serviceUUID', characteristic: 'characteristicUUID', value: new Uint8Array([0x01, 0x02]) });
```

## Conclusion

Congratulations! You have successfully learned how to use the `@capacitor-community/bluetooth-le` package in your Capacitor project for Bluetooth Low Energy functionalities.
```

Please copy the above content into your markdown file. Let me know if you need any further assistance!
