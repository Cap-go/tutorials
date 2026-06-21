---
title: How to Use the capacitor-plugin-epson-usb-printer Package
description: Learn how to integrate and utilize the capacitor-plugin-epson-usb-printer package for printing to Epson USB printers.
created_at: 2022-01-15
published: true
slug: capacitor-plugin-epson-usb-printer.git.git
locale: en
---

# Using the capacitor-plugin-epson-usb-printer Package

In this tutorial, you will learn how to install and use the `capacitor-plugin-epson-usb-printer` package to facilitate printing to Epson USB printers in your Capacitor project.

## Installation

Ensure you have Node.js and npm installed on your machine. Then follow these steps to install the package:

```bash
npm install capacitor-plugin-epson-usb-printer
npx cap sync
```

## API Overview

### `getPrinterList()`

This method returns a list of Epson USB printers connected to the device.

### `connectToPrinter(...)`

Use this method to connect to a specific Epson USB printer by providing the product ID.

### `print(...)`

This method is used to send a print job to the connected Epson USB printer using the specified print object.

## Usage

1. **Get the Printer List:**

```typescript
const { printerList } = await getPrinterList();
console.log(printerList);
```

2. **Connect to a Printer:**

```typescript
const productId = 1234; // Example product ID
const { connected } = await connectToPrinter({ productId });
console.log(connected ? "Connected to printer successfully" : "Failed to connect to printer");
```

3. **Print a Document:**

```typescript
const printObject = "Sample text to be printed";
await print({ printObject });
console.log("Print job sent successfully");
```

By following these steps and utilizing the provided API functions, you can easily integrate and utilize the `capacitor-plugin-epson-usb-printer` package in your Capacitor project for seamless printing to Epson USB printers.

Feel free to explore more functionalities and customize the printing experience based on your project requirements!