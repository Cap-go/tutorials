---
title: "Getting Started with capacitor-thinmoo-ble"
description: "A tutorial on how to use the capacitor-thinmoo-ble package for Bluetooth Low Energy (BLE) in Capacitor"
created_at: "2021-10-12"
published: true
slug: capacitor-thinmoo-ble
---

# Getting Started with capacitor-thinmoo-ble

In this tutorial, we will learn how to use the `capacitor-thinmoo-ble` package to interact with Bluetooth Low Energy (BLE) devices in a Capacitor app. We will cover the installation, configuration, and usage of the package.

## Installation

To begin, make sure you have Capacitor installed in your project. If not, you can install it by running the following command:

```bash
npm install @capacitor/cli
```

Next, install the `capacitor-thinmoo-ble` package:

```bash
npm install capacitor-thinmoo-ble
```

## Configuration

Once the package is installed, you need to configure it in your Capacitor project. Open the `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "ThinMooBLE": {
      "enableLogs": true
    }
  }
}
```

You can customize the configuration options as needed. The `enableLogs` option enables logging for the `capacitor-thinmoo-ble` package.

## Usage

With the package installed and configured, you can now start using it in your application. Import the `ThinMooBLE` module from the `@capacitor-community/thinmoo-ble` package:

```typescript
import { ThinMooBLE } from '@capacitor-community/thinmoo-ble';
```

### Scanning for BLE Devices

To scan for nearby BLE devices, you can use the `scan()` method:

```typescript
ThinMooBLE.scan().then(devices => {
  // Process the discovered devices
  console.log(devices);
}).catch(error => {
  // Handle the error
  console.error(error);
});
```

The `scan()` method returns a promise that resolves with an array of discovered devices. Each device object contains information such as the name, UUID, and RSSI.

### Connecting to a BLE Device

To connect to a specific BLE device, you can use the `connect()` method:

```typescript
const deviceId = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'; // The UUID of the device

ThinMooBLE.connect(deviceId).then(() => {
  // Device connected
  console.log('Connected to device: ' + deviceId);
}).catch(error => {
  // Handle the error
  console.error(error);
});
```

The `connect()` method takes the UUID of the device as a parameter and returns a promise that resolves when the connection is successful.

### Reading and Writing Characteristics

Once connected to a device, you can read and write characteristics using the `read()` and `write()` methods:

```typescript
const serviceId = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'; // The UUID of the service
const characteristicId = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'; // The UUID of the characteristic

// Read the value of a characteristic
ThinMooBLE.read(deviceId, serviceId, characteristicId).then(value => {
  // Process the read value
  console.log('Read value: ' + value);
}).catch(error => {
  // Handle the error
  console.error(error);
});

// Write a value to a characteristic
const data = new Uint8Array([0x01, 0x02, 0x03]); // The data to write

ThinMooBLE.write(deviceId, serviceId, characteristicId, data).then(() => {
  // Write successful
  console.log('Data written');
}).catch(error => {
  // Handle the error
  console.error(error);
});
```

The `read()` method takes the UUIDs of the device, service, and characteristic as parameters and returns a promise that resolves with the read value.

The `write()` method takes the UUIDs of the device, service, characteristic, and the data to write as parameters. It returns a promise that resolves when the write operation is successful.

## Conclusion

In this tutorial, we learned how to use the `capacitor-thinmoo-ble` package to interact with Bluetooth Low Energy (BLE) devices in a Capacitor app. We covered the installation, configuration, and usage of the package for scanning, connecting, and reading/writing characteristics.

Feel free to explore the `capacitor-thinmoo-ble` documentation for more advanced features and options. Happy BLE programming with Capacitor!