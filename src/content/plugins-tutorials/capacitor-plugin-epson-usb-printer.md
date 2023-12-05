---
title: "Using capacitor-plugin-epson-usb-printer"
description: "A tutorial on how to use the capacitor-plugin-epson-usb-printer package to print to an Epson USB printer."
created_at: "2022-10-15"
published: true
slug: "capacitor-plugin-epson-usb-printer"
---

# Using capacitor-plugin-epson-usb-printer

In this tutorial, we will learn how to use the capacitor-plugin-epson-usb-printer package to print to an Epson USB printer using Capacitor. The capacitor-plugin-epson-usb-printer is a Capacitor plugin that provides an interface to communicate with Epson USB printers.

## Installation

To get started, you need to install the capacitor-plugin-epson-usb-printer package. Open your terminal and run the following command:

```bash
npm install capacitor-plugin-epson-usb-printer
npx cap sync
```

The `capacitor-plugin-epson-usb-printer` package will be installed and synced with your Capacitor project.

## API

The `capacitor-plugin-epson-usb-printer` package provides the following API methods:

### getPrinterList()

This method retrieves the list of available Epson USB printers.

**Returns:**

- `printerList`: An array of `EpsonUSBPrinterInfo` objects representing the available Epson USB printers.

### connectToPrinter(options)

This method connects to an Epson USB printer using its product ID.

**Parameters:**

- `options`: An object with the following properties:
  - `productId`: The product ID of the Epson USB printer.

**Returns:**

- `connected`: A boolean value indicating whether the connection to the printer was successful.

### print(options)

This method sends a print command to the connected Epson USB printer.

**Parameters:**

- `options`: An object with the following properties:
  - `printObject`: A string representing the print command or data to be printed.

**Returns:**

- None.

## Example Usage

Here's an example of how to use the `capacitor-plugin-epson-usb-printer` package in your Capacitor project:

```typescript
import { Plugins } from '@capacitor/core';

const { EpsonUsbPrinterPlugin } = Plugins;

// Get the list of available Epson USB printers
const printerList = await EpsonUsbPrinterPlugin.getPrinterList();

// Connect to a printer with product ID 123456
const connectionStatus = await EpsonUsbPrinterPlugin.connectToPrinter({ productId: 123456 });

if (connectionStatus.connected) {
  // The connection was successful

  // Send a print command to the printer
  await EpsonUsbPrinterPlugin.print({ printObject: 'Hello, world!' });
} else {
  // Failed to connect to the printer
  console.log('Failed to connect to the printer');
}
```

In the above example, we first retrieve the list of available Epson USB printers using the `getPrinterList()` method. Then, we connect to a printer with a specified product ID using the `connectToPrinter()` method. If the connection is successful, we send a print command using the `print()` method.

That's it! You have now learned how to use the `capacitor-plugin-epson-usb-printer` package to print to an Epson USB printer using Capacitor.

Remember to check the documentation of the package for more information and additional methods that you can use for advanced printing scenarios.