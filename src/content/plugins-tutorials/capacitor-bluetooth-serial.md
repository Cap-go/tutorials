---
title: "A Beginner's Guide to Using @speedengineering/capacitor-bluetooth-serial"
description: "Learn how to use the @speedengineering/capacitor-bluetooth-serial package to handle Bluetooth communication in your Capacitor applications."
created_at: "2021-10-01"
published: true
slug: capacitor-bluetooth-serial
---

# A Beginner's Guide to Using @speedengineering/capacitor-bluetooth-serial

## Introduction

The **@speedengineering/capacitor-bluetooth-serial** package is a powerful tool that allows you to handle Bluetooth communication in your Capacitor applications. Whether you need to connect to a Bluetooth device, send data, or receive data, this package provides a simple and efficient solution.

In this tutorial, we will walk you through the steps to get started with the **@speedengineering/capacitor-bluetooth-serial** package and demonstrate its usage with a practical example.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI
- Capacitor project set up

## Installation

To install the **@speedengineering/capacitor-bluetooth-serial** package, run the following command in your Capacitor project directory:

```bash
npm install @speedengineering/capacitor-bluetooth-serial
```

## Usage

### Import the Plugin

To use the **@speedengineering/capacitor-bluetooth-serial** package in your project, you'll need to import it. Add the following import statement at the top of your file:

```javascript
import '@speedengineering/capacitor-bluetooth-serial';
```

### Connect to a Bluetooth Device

Before sending or receiving data, you need to establish a connection with the Bluetooth device. To do this, use the `connect` method provided by the plugin. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';

const { BluetoothSerial } = Plugins;

async function connectToDevice(address) {
  try {
    await BluetoothSerial.connect({ address });
    console.log('Connected to device');
  } catch (error) {
    console.error('Failed to connect to device', error);
  }
}

// Call the connectToDevice function with the Bluetooth device address
connectToDevice('00:00:00:00:00:00');
```

### Send Data to the Bluetooth Device

Once you're connected to the Bluetooth device, you can send data to it. Use the `write` method provided by the plugin. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';

const { BluetoothSerial } = Plugins;

async function sendData(data) {
  try {
    await BluetoothSerial.write({ data });
    console.log('Data sent successfully');
  } catch (error) {
    console.error('Failed to send data', error);
  }
}

// Call the sendData function with the data you want to send
sendData('Hello, Bluetooth!');
```

### Receive Data from the Bluetooth Device

To receive data from the connected Bluetooth device, use the `addListener` method provided by the plugin. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';

const { BluetoothSerial } = Plugins;

BluetoothSerial.addListener('dataReceived', (data) => {
  console.log('Received data:', data);
});
```

### Disconnect from the Bluetooth Device

To disconnect from the connected Bluetooth device, use the `disconnect` method provided by the plugin. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';

const { BluetoothSerial } = Plugins;

async function disconnectFromDevice() {
  try {
    await BluetoothSerial.disconnect();
    console.log('Disconnected from device');
  } catch (error) {
    console.error('Failed to disconnect from device', error);
  }
}

// Call the disconnectFromDevice function
disconnectFromDevice();
```

## Conclusion

Congratulations! You have learned how to use the **@speedengineering/capacitor-bluetooth-serial** package to handle Bluetooth communication in your Capacitor applications. You now have the knowledge to connect to a Bluetooth device, send and receive data, and disconnect when needed.

Explore the official documentation of the package for more advanced features and customization options.

Happy coding!