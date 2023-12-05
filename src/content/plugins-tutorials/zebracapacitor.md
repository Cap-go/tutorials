---
title: "Using the Zebra-Capacitor Package"
description: "This tutorial will guide you through the process of using the Zebra-Capacitor package in your application."
created_at: "2021-12-01"
published: true
slug: zebracapacitor
---

# Using the Zebra-Capacitor Package

The Zebra-Capacitor package is a powerful tool that allows you to integrate Zebra printers into your Capacitor applications. In this tutorial, we will walk you through the process of setting up and using the Zebra-Capacitor package in your project.

## Prerequisites

Before we begin, please make sure you have the following prerequisites installed:

- Node.js and NPM: Zebra-Capacitor requires Node.js and NPM to be installed on your machine. You can download and install them from the official Node.js website.

- Capacitor: Capacitor is an open-source cross-platform app runtime. It allows you to build Native Progressive Web Apps (PWAs), iOS, and Android apps with web technologies. You can install Capacitor globally by running the following command:

```bash
npm install -g @capacitor/cli
```

- Zebra Printer: You will need a Zebra printer to test the Zebra-Capacitor package. Make sure you have a compatible Zebra printer and that it is connected to your machine.

## Installation

To install the Zebra-Capacitor package, follow these steps:

1. Create a new Capacitor project by running the following command:

```bash
npx @capacitor/cli create
```

2. Navigate to the root directory of your project:

```bash
cd your-project-directory
```

3. Install the Zebra-Capacitor package using NPM:

```bash
npm install zebra-capacitor
```

4. Add the Zebra-Capacitor plugin to your Capacitor project:

```bash
npx cap plugin add zebra-capacitor
```

5. Sync the Capacitor project with your native platforms:

```bash
npx cap sync
```

## Usage

Now that you have installed the Zebra-Capacitor package, let's explore how to use it in your application.

### Initializing the Zebra Printer

Before you can use the Zebra printer, you need to initialize the printer. To do this, add the following code to your application's entry file (e.g., `app.component.ts`):

```typescript
import { ZebraPrinter, ZebraPrinterOptions } from 'zebra-capacitor';

// Initialize the Zebra printer
const options: ZebraPrinterOptions = {
  printerAddress: '192.168.1.10', // Enter your printer IP address here
};

ZebraPrinter.initialize(options).then(() => {
  console.log('Zebra printer initialized');
}).catch((error) => {
  console.error('Error initializing Zebra printer', error);
});
```

Make sure to replace `printerAddress` with the IP address of your Zebra printer.

### Printing Labels

To print labels using the Zebra printer, you can use the `printLabel` method. Here's an example:

```typescript
import { ZebraPrinter } from 'zebra-capacitor';

// Print a label
const labelData = '^XA^FO20,20^A0N,25,25^FDHello, World!^FS^XZ';

ZebraPrinter.printLabel(labelData).then(() => {
  console.log('Label printed successfully');
}).catch((error) => {
  console.error('Error printing label', error);
});
```

In the above example, `labelData` contains the ZPL (Zebra Programming Language) code for the label you want to print.

## Conclusion

In this tutorial, we walked you through the process of using the Zebra-Capacitor package to integrate Zebra printers into your Capacitor application. We covered the installation process, initializing the Zebra printer, and printing labels. Now you can start leveraging the power of Zebra printers in your Capacitor projects.

If you have any questions or encounter any issues, feel free to reach out to the Zebra-Capacitor package's community for support.

Happy printing with Zebra-Capacitor!