---
title: "Using love-alarm-ble Package"
description: "A tutorial on how to use the love-alarm-ble package to build a Bluetooth Low Energy (BLE) integration for Love Alarm app."
created_at: "2022-10-15"
published: true
slug: love-alarm-ble
---
# Using love-alarm-ble Package

This tutorial will guide you on how to use the love-alarm-ble package to integrate Bluetooth Low Energy (BLE) functionality into your Love Alarm app.

## Installation

To begin, make sure you have npm installed and navigate to your project directory. Then run the following command to install the love-alarm-ble package:

```bash
npm install love-alarm-ble
```

Once the installation is complete, synchronize your project with Capacitor by running:

```bash
npx cap sync
```

## API Overview

The love-alarm-ble package provides the following API methods:

- `initialize(options: InitOptions) => Promise<void>`
- `isEnable() => Promise<BluetoothStatus>`
- `enable() => Promise<void>`
- `startAdvertise() => Promise<void>`
- `stopAdvertise() => Promise<void>`
- `startScan(callback: (result: ScanResult) => void) => Promise<void>`
- `stopScan() => Promise<void>`
- `read(options: ReadOptions) => Promise<ReadResult>`
- `matches(options: MatchingOptions) => Promise<void>`
- `addListener(eventName: string, listenerFunc: (event: any) => void) => PluginListenerHandle`

## Usage

### Initialize

Before using any other methods, you need to initialize the love-alarm-ble package by calling the `initialize` method. Pass the required options as an argument:

```typescript
import { initialize } from 'love-alarm-ble';

const options = {
  // Specify your initialization options here
};

initialize(options);
```

### Check Bluetooth Status

To check if Bluetooth is enabled on the device, use the `isEnable` method:

```typescript
import { isEnable } from 'love-alarm-ble';

const bluetoothStatus = await isEnable();
console.log('Bluetooth is', bluetoothStatus);
```

### Enable Bluetooth

If Bluetooth is disabled, you can enable it programmatically using the `enable` method:

```typescript
import { enable } from 'love-alarm-ble';

await enable();
console.log('Bluetooth enabled');
```

### Start Advertise

To start advertising the Love Alarm BLE service, use the `startAdvertise` method:

```typescript
import { startAdvertise } from 'love-alarm-ble';

await startAdvertise();
console.log('Advertising started');
```

### Stop Advertise

To stop advertising the Love Alarm BLE service, use the `stopAdvertise` method:

```typescript
import { stopAdvertise } from 'love-alarm-ble';

await stopAdvertise();
console.log('Advertising stopped');
```

### Start Scan

To start scanning for Love Alarm BLE devices, use the `startScan` method. Provide a callback function to handle the scan results:

```typescript
import { startScan } from 'love-alarm-ble';

const handleScanResult = (result) => {
  // Handle the scan result here
  console.log('Scan result:', result);
};

await startScan(handleScanResult);
console.log('Scanning started');
```

### Stop Scan

To stop scanning for Love Alarm BLE devices, use the `stopScan` method:

```typescript
import { stopScan } from 'love-alarm-ble';

await stopScan();
console.log('Scanning stopped');
```

### Read Data

To read data from a Love Alarm BLE device, use the `read` method. Pass the required options as an argument:

```typescript
import { read } from 'love-alarm-ble';

const options = {
  // Specify your read options here
};

const readResult = await read(options);
console.log('Read result:', readResult);
```

### Match Devices

To match Love Alarm BLE devices based on specific criteria, use the `matches` method. Pass the required options as an argument:

```typescript
import { matches } from 'love-alarm-ble';

const options = {
  // Specify your matching options here
};

await matches(options);
console.log('Devices matched');
```

### Event Listeners

You can listen for specific events using the `addListener` method. Provide the event name and a listener function:

```typescript
import { addListener } from 'love-alarm-ble';

const handleEvent = (event) => {
  // Handle the event here
  console.log('Event:', event);
};

const eventListener = addListener('onScanResult', handleEvent);
console.log('Event listener added');
```

## Conclusion

You have now learned how to use the love-alarm-ble package to integrate Bluetooth Low Energy (BLE) functionality into your Love Alarm app. You can explore the different API methods and customize them according to your app's requirements.

Remember to consult the love-alarm-ble package documentation for detailed information on each method and additional usage examples. Happy coding with Love Alarm BLE integration!