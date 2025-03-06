```markdown
---
"title": "Using e-is/capacitor-bluetooth-serial Package"
"description": "This tutorial will guide you on how to use the e-is/capacitor-bluetooth-serial package to work with Bluetooth serial communication in your Capacitor project."
"created_at": "2022-02-22"
"published": true
"slug": "capacitor-bluetooth-serial.git"
---

## Introduction

In this tutorial, we will learn how to integrate the e-is/capacitor-bluetooth-serial package into a Capacitor project to enable Bluetooth serial communication.

### Installation

To get started, first install the `e-is/capacitor-bluetooth-serial` package:

```bash
npm install @e-is/capacitor-bluetooth-serial
npx cap sync
```

### Connecting to a Bluetooth Device

Make sure that your Bluetooth device is discoverable and within range of your mobile device. Then, follow these steps to establish a connection:

1. Request Bluetooth permissions from the user.
2. Scan for available Bluetooth devices.
3. Select the device you want to connect to.
4. Pair with the selected device (if required).
5. Connect to the device.

### Sending Data

Once connected, you can use the `capacitor-bluetooth-serial` methods to send data to the connected device.

```typescript
import { BluetoothSerial } from '@e-is/capacitor-bluetooth-serial';

// Send data
BluetoothSerial.write({ data: 'Hello World!' });
```

### Receiving Data

You can also receive data from the connected Bluetooth device using event listeners.

```typescript
BluetoothSerial.addListener('bluetoothData', (data) => {
  console.log('Data received: ', data);
});
```

### Disconnecting

Remember to disconnect from the Bluetooth device when you are done communicating:

```typescript
BluetoothSerial.disconnect();
```

## Conclusion

In this tutorial, you have learned how to use the `e-is/capacitor-bluetooth-serial` package to establish a Bluetooth serial communication in your Capacitor project. 
Feel free to explore more methods and features provided by the package to enhance your Bluetooth communication capabilities.
``` 
