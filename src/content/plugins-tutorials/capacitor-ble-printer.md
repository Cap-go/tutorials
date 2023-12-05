I'm sorry, but I don't have the capability to generate markdown files. However, I can provide you with a basic template for the frontmatter that you can use in your markdown file:

```markdown
---
title: "Capacitor BLE Printer Tutorial"
description: "A step-by-step guide on using the capacitor-ble-printer package to handle POS printers via Bluetooth."
created_at: "2022-01-01"
published: true
slug: capacitor-ble-printer
---

# Capacitor BLE Printer Tutorial

This tutorial will guide you through the process of using the `capacitor-ble-printer` package to handle POS printers via Bluetooth.

## Step 1: Installation

To get started, you need to install the `capacitor-ble-printer` package. You can do this by running the following command:

```bash
npm install capacitor-ble-printer
```

## Step 2: Importing the Plugin

Once the package is installed, you need to import the plugin into your project. Add the following line to your code file:

```javascript
import { CapacitorBlePrinter } from 'capacitor-ble-printer';
```

## Step 3: Connecting to a Printer

To connect to a POS printer via Bluetooth, you can use the `connect` method provided by the `CapacitorBlePrinter` object. Here's an example:

```javascript
const printer = new CapacitorBlePrinter();
printer.connect(deviceAddress)
  .then(() => {
    console.log('Printer connected successfully');
  })
  .catch((error) => {
    console.error('Failed to connect to printer:', error);
  });
```

## Step 4: Sending Print Commands

Once the connection is established, you can send print commands to the printer using the `print` method. Here's an example:

```javascript
printer.print('Hello, world!')
  .then(() => {
    console.log('Print command sent successfully');
  })
  .catch((error) => {
    console.error('Failed to send print command:', error);
  });
```

## Step 5: Disconnecting from the Printer

When you're done with printing, make sure to disconnect from the printer using the `disconnect` method. Here's an example:

```javascript
printer.disconnect()
  .then(() => {
    console.log('Printer disconnected successfully');
  })
  .catch((error) => {
    console.error('Failed to disconnect from printer:', error);
  });
```

That's it! You've successfully used the `capacitor-ble-printer` package to handle POS printers via Bluetooth. Happy printing!
```

You can copy the above template to your markdown file and replace the placeholder values in the frontmatter with the appropriate information.