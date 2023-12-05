---
title: "Using @matfire/ionic_bluetooth_classic Package"
description: "This tutorial will guide you through the process of using the @matfire/ionic_bluetooth_classic package in your Ionic app."
created_at: "2021-10-22"
published: true
slug: ionic_bluetooth_classic
---

# Using @matfire/ionic_bluetooth_classic Package

This tutorial will guide you through the process of using the @matfire/ionic_bluetooth_classic package in your Ionic app. The package provides Bluetooth Classic support for Bluetooth communication in your Ionic applications.

## Installation

First, you need to install the @matfire/ionic_bluetooth_classic package in your Ionic project. Open your project in the terminal and run the following command:

```bash
npm install @matfire/ionic_bluetooth_classic
```

## Usage

1. Import the package in your TypeScript file:

```typescript
import { BluetoothClassic } from '@matfire/ionic_bluetooth_classic';
```

2. Create an instance of the BluetoothClassic class:

```typescript
const bluetoothClassic = new BluetoothClassic();
```

3. Use the available methods to interact with the Bluetooth Classic functionality. Here are some examples:

- Connect to a Bluetooth device:

```typescript
bluetoothClassic.connect(deviceAddress: string): Promise<void>;
```

- Disconnect from a connected Bluetooth device:

```typescript
bluetoothClassic.disconnect(): Promise<void>;
```

- Send data to the connected device:

```typescript
bluetoothClassic.write(data: string): Promise<void>;
```

- Receive data from the connected device:

```typescript
bluetoothClassic.subscribeData(): Observable<string>;
```

4. Handle the results of the Bluetooth Classic operations using Promises or Observables.

```typescript
// Example of connecting to a Bluetooth device
bluetoothClassic.connect(deviceAddress)
  .then(() => {
    console.log('Connected to the device');
    // Handle successful connection
  })
  .catch((error) => {
    console.error('Failed to connect to the device', error);
    // Handle connection error
  });
```

```typescript
// Example of receiving data from the connected device
bluetoothClassic.subscribeData()
  .subscribe((data) => {
    console.log('Received data:', data);
    // Handle received data
  });
```

## Conclusion

In this tutorial, we learned how to use the @matfire/ionic_bluetooth_classic package in an Ionic app. We explored the installation process, basic usage, and handling of Bluetooth Classic operations. This package provides a convenient way to work with Bluetooth Classic functionality in your Ionic applications.

Remember to refer to the package documentation for more information and a complete list of available methods.

Start building amazing Bluetooth-enabled Ionic applications with the @matfire/ionic_bluetooth_classic package!