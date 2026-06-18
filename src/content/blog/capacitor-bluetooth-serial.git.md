```markdown
---
"title": "Using @e-is/capacitor-bluetooth-serial Package"
"description": "This tutorial will guide you on how to effectively use the @e-is/capacitor-bluetooth-serial package to work with Bluetooth Serial in your Capacitor projects."
"created_at": "October 8, 2023"
"published": true
"slug": "capacitor-bluetooth-serial.git"
---

# Using @e-is/capacitor-bluetooth-serial Package

In this tutorial, we will walk through the steps of integrating and using the @e-is/capacitor-bluetooth-serial package in your Capacitor project to enable Bluetooth Serial functionality.

## Installation

First, you need to install the @e-is/capacitor-bluetooth-serial package by running the following command:

```bash
npm install @e-is/capacitor-bluetooth-serial
npx cap sync
```

## Usage

To include the library in your project, you can import it as follows:

```javascript
import { BluetoothSerial } from '@e-is/capacitor-bluetooth-serial';
```

## Connecting to a Bluetooth Device

Make sure your Bluetooth device is paired with your device. Then, you can use the following code snippet to connect to the Bluetooth device:

```javascript
BluetoothSerial.connect({ address: 'your_device_address' });
```

## Sending Data

You can send data to the connected Bluetooth device using the following method:

```javascript
BluetoothSerial.write({ data: 'your_data_to_send' });
```

## Receiving Data

To receive data from the connected Bluetooth device, you can use the `subscribe` method:

```javascript
BluetoothSerial.subscribe().subscribe(data => {
    console.log('Received data: ' + data);
});
```

## Disconnecting

Finally, when you are done, you can disconnect from the Bluetooth device:

```javascript
BluetoothSerial.disconnect();
```

By following these steps, you can effectively utilize the @e-is/capacitor-bluetooth-serial package in your Capacitor project. Happy coding!
```
