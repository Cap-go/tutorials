---
title: "Using capacitor-plugin-bluetooth-printer Package"
description: "This tutorial will guide you on how to use the capacitor-plugin-bluetooth-printer package to handle POS printers via Bluetooth."
created_at: "2022-06-28"
published: true
slug: "capacitor-bluetooth-printer-plugin"
---

# Using capacitor-plugin-bluetooth-printer Package

This tutorial will guide you on how to use the `capacitor-plugin-bluetooth-printer` package to handle POS printers via Bluetooth.

Start by installing the package in your Capacitor project:

```bash
npm install capacitor-plugin-bluetooth-printer
```

Next, import the necessary classes from the package:

```typescript
import 'capacitor-plugin-bluetooth-printer';
import { Plugins } from '@capacitor/core';
```

To establish a Bluetooth connection with a POS printer, use the `connect` method:

```typescript
await Plugins.BluetoothPrinter.connect({ address: 'printer_address' });
```

Replace `'printer_address'` with the actual address of your POS printer.

To print text with the connected printer, use the `printText` method:

```typescript
await Plugins.BluetoothPrinter.printText({ text: 'Hello, World!' });
```

You can also customize the font size and text alignment:

```typescript
await Plugins.BluetoothPrinter.printText({
  text: 'Hello, World!',
  fontSize: 20,
  align: 'center' // Possible values: 'left', 'center', 'right'
});
```

To print an image with the connected printer, use the `printImage` method:

```typescript
await Plugins.BluetoothPrinter.printImage({ imageUrl: 'https://example.com/image.png' });
```

Replace `'https://example.com/image.png'` with the URL of the image you want to print.

After printing, you can disconnect from the printer using the `disconnect` method:

```typescript
await Plugins.BluetoothPrinter.disconnect();
```

That's it! You have learned how to use the `capacitor-plugin-bluetooth-printer` package to handle POS printers via Bluetooth.

Remember to handle any errors that may occur during the connection or printing process.