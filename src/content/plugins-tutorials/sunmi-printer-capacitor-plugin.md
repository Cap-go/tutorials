---
"title": "Developing with Sunmi Printer Capacitor Plugin",
"description": "In this tutorial, you will learn how to integrate and use the Sunmi Printer Capacitor Plugin in your Capacitor project for printing on Sunmi devices.",
"created_at": "2023-09-28",
"published": true,
"slug": "sunmi-printer-capacitor-plugin"
---

# Using Sunmi Printer Capacitor Plugin

In this tutorial, we will guide you on how to integrate and utilize the **Sunmi Printer Capacitor Plugin** in your Capacitor project. This plugin allows you to easily interact with Sunmi printers for printing tasks on Sunmi POS devices.

## Installation

To get started, you need to install the **Sunmi Printer Capacitor Plugin** package by running the following command in your project directory:

```bash
npm install sunmi-printer-capacitor-plugin
npx cap sync
```

## Using the Plugin

After installing the plugin, you can now utilize its functionality in your project. Below are some key functionalities provided by the **Sunmi Printer Capacitor Plugin**:

### Discover Printers

You can discover available Bluetooth printers connected to the Sunmi device using the following code snippet:

```javascript
const printers = await SunmiPrinter.discoverPrinters();
```

### Connect to Printer

To establish a connection with a specific Bluetooth printer, use the `connectPrinter` function as shown:

```javascript
const isConnected = await SunmiPrinter.connectPrinter({ address: "xxx xxx xxx" });
```

### Printing Text

Print text content with specific formatting options like bold and underline by calling the `printString` function:

```javascript
const printingResult = await SunmiPrinter.printString({ contents: "Hello, World!", is_bold: true, is_underline: true });
```

### Printing Commands

You can send various print commands to the printer such as aligning text, moving to the next line, etc. Here is an example of sending a left alignment command:

```javascript
const commandResult = await SunmiPrinter.printCommand({ command: "align_left" });
```

### Printing Barcode

Printing barcodes is also supported by the plugin. You can print a barcode using the `printBarcode` function:

```javascript
const barcodeResult = await SunmiPrinter.printBarcode({ barcode: "123xxxxx" });
```

## Conclusion

By following this tutorial, you should now have a good understanding of how to integrate the **Sunmi Printer Capacitor Plugin** into your Capacitor project and utilize its features for seamless printing on Sunmi devices. Start exploring the capabilities of this plugin and enhance the printing experience on Sunmi POS devices.