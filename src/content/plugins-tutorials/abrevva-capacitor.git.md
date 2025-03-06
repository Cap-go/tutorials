```yaml
title: "Using @evva/abrevva-capacitor Package Tutorial"
description: "Step-by-step guide on utilizing the @evva/abrevva-capacitor package for Capacitor apps"
created_at: "2022-01-21"
published: true
slug: "abrevva-capacitor.git"
```

# Using @evva/abrevva-capacitor Package Tutorial

In this tutorial, we will cover how to integrate and utilize the `@evva/abrevva-capacitor` package in your Capacitor applications. This package provides tools for working with electronic EVVA access components, allowing scanning, connecting via BLE, and other related functionalities.

## Installation

To start using the package, you need to first install it in your Capacitor project. Depending on your Capacitor version, follow the installation steps below:

### Capacitor 7

```bash
npm install @evva/abrevva-capacitor
npx cap sync
```

### Capacitor 6

```bash
npm install @evva/abrevva-capacitor@4.0.1
npx cap sync
```

## Getting Started

After installing the package, you can start utilizing its features in your application. Below is an example of how to initialize and scan for EVVA components using the package:

```typescript
import { AbrevvaBLEClient, BleDevice } from "@evva/abrevva-capacitor";

class ExampleClass {
  private devices: BleDevice[];
  
  async startScan(event: any) {
    this.devices = [];
   
    await AbrevvaBLEClient.initialize()
    await AbrevvaBLEClient.startScan({ timeout: 5_000 }, (device: BleDevice) => {
      this.devices.push(device);
    }, (success: boolean) => {
      console.log(`Scan started, success: ${success}`);
    }, (success: boolean) => {
      console.log(`Scan stopped, success: ${success}`);
    });
  }
}
```

## Working with Advertisement Data

You can also read EVVA component advertisement data from scanned devices. Here is an example of how to access advertisement data properties:

```typescript
const ad = device.advertisementData
console.log(ad?.rssi)
console.log(ad?.isConnectable)

const md = ad?.manufacturerData
console.log(md?.batteryStatus)
console.log(md?.isOnline)
console.log(md?.officeModeEnabled)
console.log(md?.officeModeActive)
// ...
```

## Additional Functionality

The package provides additional functionalities like writing medium to EVVA components. Here is an example of how to use the `AbrevvaCodingStation` to perform such operations:

```typescript
import { AbrevvaCodingStation } from "@evva/abrevva-capacitor";

export class ExampleClass {
  async writeMedium() {
    try {
      await AbrevvaCodingStation.register({
        url: "url",
        clientId: "clientId",
        username: "username",
        password: "password",
      });
      await AbrevvaCodingStation.connect();
      await AbrevvaCodingStation.write();
      await AbrevvaCodingStation.disconnect();
    } catch (e) {
      console.log(`Failed to write medium: ${e}`);
    }
  }
}
```

This tutorial covers the basic steps to get started with the `@evva/abrevva-capacitor` package in your Capacitor project. Feel free to explore more features provided by the package in the official documentation. Happy coding! 
```