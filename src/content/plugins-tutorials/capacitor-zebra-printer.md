---
title: "Using the capacitor-zebra-printer package"
description: "In this tutorial, we will learn how to use the capacitor-zebra-printer package to print documents and labels using Zebra printers in Capacitor apps."
created_at: "2022-10-13"
published: true
slug: "capacitor-zebra-printer"
---

# Using the capacitor-zebra-printer package

In this tutorial, we will explore how to use the `capacitor-zebra-printer` package to print documents and labels using Zebra printers in Capacitor apps. The `capacitor-zebra-printer` package provides a simple and convenient way to interact with Zebra printers and control the printing process.

## Installation

First, let's install the `capacitor-zebra-printer` package in our Capacitor app. Open your project directory in the terminal and run the following command:

```bash
npm install capacitor-zebra-printer
```

This will install the package and make it available for usage in our app.

## Configuration

Next, we need to configure the plugin in our Capacitor app. Open the `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "Printer": {
      "class": "com.example.app.PrinterPlugin"
    }
  }
}
```

Replace `com.example.app.PrinterPlugin` with the actual path to your printer plugin class.

## Printing a Document

To print a document using the Zebra printer, we need to follow these steps:

1. Connect to the Zebra printer using the `connect()` method.
2. Set the printer settings such as label size, darkness, and print speed using the appropriate methods.
3. Generate the document content to be printed.
4. Send the document content to the printer using the `print()` method.
5. Disconnect from the printer using the `disconnect()` method.

```javascript
import { Plugins } from '@capacitor/core';

const { Printer } = Plugins;

async function printDocument() {
  // Connect to the Zebra printer
  await Printer.connect();

  // Set printer settings
  Printer.setLabelSize('4x6');
  Printer.setDarkness(10);
  Printer.setPrintSpeed(5);

  // Generate document content
  const documentContent = `
    <h1>My Document</h1>
    <p>This is a sample document printed using the Zebra printer.</p>
    <table>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
      </tr>
      <tr>
        <td>Item 1</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Item 2</td>
        <td>5</td>
      </tr>
    </table>
  `;

  // Print the document
  await Printer.print(documentContent);

  // Disconnect from the printer
  await Printer.disconnect();
}

printDocument();
```

By following these steps, you can easily print documents and labels using Zebra printers in your Capacitor app.

## Summary

In this tutorial, we learned how to use the `capacitor-zebra-printer` package to print documents and labels using Zebra printers in Capacitor apps. We covered the installation process, configuration, and the steps involved in printing a document. With the `capacitor-zebra-printer` package, you can easily integrate Zebra printer functionality into your Capacitor app and enhance the printing capabilities.