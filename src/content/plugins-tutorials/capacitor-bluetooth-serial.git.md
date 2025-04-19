---
"title": "Using @e-is/capacitor-bluetooth-serial Package"
"description": "Tutorial on how to use the @e-is/capacitor-bluetooth-serial package for Bluetooth serial communication in Capacitor"
"created_at": "2022-02-22"
"published": true
"slug": "capacitor-bluetooth-serial-git"
---
# Using @e-is/capacitor-bluetooth-serial Package

In this tutorial, we will learn how to use the @e-is/capacitor-bluetooth-serial package for Bluetooth serial communication in Capacitor.

## Install

First, you need to install the package using npm:

```bash
npm install @e-is/capacitor-bluetooth-serial
npx cap sync
```

## Configuration

Make sure you have the necessary permissions and configurations set in your native project. For Android, this might involve adding the necessary permissions in the AndroidManifest.xml file.

## Usage

Now you can import the package in your Capacitor project and start using it:

```typescript
import { BluetoothSerial } from '@e-is/capacitor-bluetooth-serial';

// Example: Connect to a Bluetooth device
BluetoothSerial.connect({
  address: 'XX:XX:XX:XX:XX:XX', // Replace with the address of your Bluetooth device
}).then(() => {
  console.log('Connected to the Bluetooth device');
}).catch((error) => {
  console.error('Failed to connect:', error);
});
```

## API

The package provides various methods that you can use for Bluetooth serial communication. Some common methods include:

- `isEnabled()`: Check if Bluetooth is enabled on the device.
- `connect({ address: string })`: Connect to a Bluetooth device.
- `write({ data: string })`: Write data to the connected Bluetooth device.

Make sure to refer to the package documentation for a complete list of available methods.

This concludes our tutorial on using the @e-is/capacitor-bluetooth-serial package for Bluetooth serial communication in Capacitor. Happy coding!