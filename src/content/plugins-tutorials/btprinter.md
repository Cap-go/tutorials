---
title: "Using capacitor-plugin-bluetooth-print package"
description: "A tutorial on how to use the capacitor-plugin-bluetooth-print package to handle POS printers via Bluetooth."
created_at: "2021-11-01"
published: true
slug: btprinter
---

# Using capacitor-plugin-bluetooth-print package

This tutorial will guide you through the process of using the `capacitor-plugin-bluetooth-print` package to handle POS printers via Bluetooth. 

## Installation

To get started, you need to install the `capacitor-plugin-bluetooth-print` package into your Capacitor project.

```bash
npm install capacitor-plugin-bluetooth-print
```

## Importing the Plugin

After installation, you can import the plugin into your project.

```typescript
import 'capacitor-plugin-bluetooth-print';
```

## Sending Raw JSON Data

To send raw JSON data to the printer, you can use the `sendObject` function provided by the plugin.

```typescript
import { Plugins } from '@capacitor/core';

const { BluetoothFileTransfer } = Plugins;

const result = await BluetoothFileTransfer.sendObject({
  filename: 'file.txt',
  data: 'data to send'
});
```

Make sure to provide the filename and the data that you want to send as parameters to the `sendObject` function.

## Conclusion

In this tutorial, we learned how to use the `capacitor-plugin-bluetooth-print` package to handle POS printers via Bluetooth. We covered the installation process, importing the plugin, and sending raw JSON data. Now you can easily integrate Bluetooth printing functionality into your Capacitor project.

Remember to refer to the official documentation of the `capacitor-plugin-bluetooth-print` package for more detailed usage and advanced features.