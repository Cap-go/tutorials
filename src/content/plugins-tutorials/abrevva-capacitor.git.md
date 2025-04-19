---
"title": "Using @evva/abrevva-capacitor Package Tutorial"
"description": "Step-by-step guide on using the @evva/abrevva-capacitor package for working with electronical EVVA access components."
"created_at": "2023-10-01"
"published": true
"slug": "abrevva-capacitor-git"
---

# Using @evva/abrevva-capacitor Package Tutorial

This tutorial provides a comprehensive guide on how to use the @evva/abrevva-capacitor package to interact with electronical EVVA access components. The package offers various functionalities for scanning, connecting, and working with EVVA devices via BLE.

## Installation

To start using the package, follow these installation steps:

1. Ensure you have Capacitor installed with a version equal to or above 5.0.0.
2. For Android development, make sure you have Java 17+, the Android SDK (API Level 29), and Android 10+.
3. For iOS development, ensure you have Xcode 15.4 and iOS 15.0+.

### Capacitor 7 Installation

```bash
npm install @evva/abrevva-capacitor
npx cap sync
```

### Capacitor 6 Installation

```bash
npm install @evva/abrevva-capacitor@4.0.1
npx cap sync
```

## Getting Started

Once the package is installed, you can use it in your code as shown in the examples below.

### Initialize and Scan for EVVA Components

```typescript
import { AbrevvaBLEClient, BleDevice } from "@evva/abrevva-capacitor";

class ExampleClass {
  private devices: BleDevice[];
  
  async startScan(event: any) {
    this.devices = [];
   
    await AbrevvaBLEClient.initialize();
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

### Read EVVA Component Advertisement

You can access the EVVA advertisement data from a scanned EVVA component like this:

```typescript
const ad = device.advertisementData;
console.log(ad?.rssi);
console.log(ad?.isConnectable);

const md = ad?.manufacturerData;
console.log(md?.batteryStatus);
console.log(md?.isOnline);
console.log(md?.officeModeEnabled);
console.log(md?.officeModeActive);
// ...
```

### Write to a Medium Using AbrevvaCodingStation

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

This tutorial covers the basic setup and usage of the @evva/abrevva-capacitor package for handling EVVA access components via BLE. Explore further documentation for additional functionalities and customization options.
```