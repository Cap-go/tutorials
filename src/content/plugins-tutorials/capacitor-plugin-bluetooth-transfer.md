---
title: "Using capacitor-plugin-bluetooth-transfer"
description: "A tutorial on how to use the capacitor-plugin-bluetooth-transfer package to transfer files to an Android device via Bluetooth."
created_at: "2021-09-30"
published: true
slug: "capacitor-plugin-bluetooth-transfer"
---

# Using capacitor-plugin-bluetooth-transfer

The `capacitor-plugin-bluetooth-transfer` package is a plugin for transferring files to an Android device using Bluetooth. This tutorial will guide you through the process of sending files to a device using this package.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI
- Node.js

## Installation

To install the `capacitor-plugin-bluetooth-transfer` package, run the following command in your project directory:

```
npm install capacitor-plugin-bluetooth-transfer
```

## Usage

1. Import the plugin and the required dependencies in your JavaScript or TypeScript file:

```javascript
import 'capacitor-plugin-bluetooth-transfer';
import { Plugins } from '@capacitor/core';
```

2. To send raw JSON data, use the `sendObject` method provided by the `BluetoothFileTransfer` object:

```javascript
const result = await BluetoothFileTransfer.sendObject(
  { filename: 'file.txt', data: 'data to send' }
);
```

Replace `'file.txt'` with the desired filename and `'data to send'` with the actual data you want to transfer.

3. Handle the response received from the `sendObject` method as needed. The `result` object will contain information about the transfer, such as success status and error message (if any).

## Example

Here's a complete example of sending raw JSON data using the `capacitor-plugin-bluetooth-transfer` package:

```javascript
import 'capacitor-plugin-bluetooth-transfer';
import { Plugins } from '@capacitor/core';

const result = await BluetoothFileTransfer.sendObject(
  { filename: 'file.txt', data: 'data to send' }
);
```

Make sure to replace `'file.txt'` with the appropriate filename and `'data to send'` with your actual data.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-plugin-bluetooth-transfer` package to transfer files to an Android device via Bluetooth. We covered the installation process, usage instructions, and provided an example to help you get started with this plugin. Experiment with different file types and data formats to suit your specific requirements.