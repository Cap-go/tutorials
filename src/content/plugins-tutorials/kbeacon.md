---
title: "Using @kgateway/kbeacon Package"
description: "This tutorial will guide you on how to use the @kgateway/kbeacon package for your projects."
created_at: "2021-10-18"
published: true
slug: "kbeacon"
---

# Using @kgateway/kbeacon Package

In this tutorial, we will learn how to use the `@kgateway/kbeacon` package to integrate Bluetooth beacons into your applications.

## Step 1: Installation

To begin, let's install the `@kgateway/kbeacon` package using npm:

```bash
npm install @kgateway/kbeacon
```

## Step 2: Importing the Package

Once the package is installed, you can import it into your project:

```javascript
import KBeacon from '@kgateway/kbeacon';
```

## Step 3: Initializing the Beacon

To use the package, we first need to initialize the Beacon object. This can be done using the following code:

```javascript
const beacon = new KBeacon();
```

## Step 4: Scanning for Beacons

Next, we can start scanning for available beacons in the vicinity. Use the `startScan()` method to initiate the scanning process:

```javascript
beacon.startScan();
```

You can also specify the scan duration and filter options:

```javascript
beacon.startScan({ duration: 10, filter: { uuid: 'YOUR_BEACON_UUID' } });
```

## Step 5: Handling Scanned Beacons

To handle the scanned beacons, we can add an event listener to the `beacon` object:

```javascript
beacon.on('scanResult', (result) => {
  const { uuid, rssi } = result;
  console.log(`Scanned Beacon: UUID - ${uuid}, RSSI - ${rssi}`);
});
```

## Step 6: Stopping the Scan

To stop the scanning process, use the `stopScan()` method:

```javascript
beacon.stopScan();
```

## Step 7: Connecting to a Beacon

Once you have identified a specific beacon to connect to, you can use the `connect(beaconUUID)` method:

```javascript
beacon.connect('YOUR_BEACON_UUID');
```

## Step 8: Interacting with the Connected Beacon

Once connected, you can interact with the beacon by accessing its properties, services, and characteristics:

```javascript
beacon.on('connected', () => {
  // Access beacon properties
  console.log(`Beacon Name: ${beacon.name}`);
  
  // Access beacon services
  const services = beacon.services;
  
  // Access characteristics of a specific service
  const characteristics = services[0].characteristics;

  // Read a characteristic value
  beacon.readCharacteristic(characteristics[0].uuid);

  // Write a characteristic value
  beacon.writeCharacteristic(characteristics[1].uuid, 'VALUE_TO_WRITE');
});
```

## Step 9: Disconnecting from the Beacon

When you are done interacting with the beacon, remember to disconnect using the `disconnect()` method:

```javascript
beacon.disconnect();
```

Congratulations! You have successfully learned how to use the `@kgateway/kbeacon` package to integrate Bluetooth beacons into your applications.

Remember to refer to the package's documentation for detailed information on advanced usage and available methods.