---
title: "Using the zebra-printer-label Package"
description: "A comprehensive tutorial on how to use the zebra-printer-label package to connect and print labels with Zebra printers via a local IP address."
created_at: "2022-10-24"
published: true
slug: zebra-printer
---

# Using the zebra-printer-label Package

The zebra-printer-label package is a powerful tool for connecting and printing labels using Zebra printers via a local IP address. In this tutorial, we will walk you through the installation process and demonstrate how to use the package's API to print labels seamlessly.

## Prerequisites

Before we get started, make sure you have the following:

- A Zebra printer connected to your local network
- Node.js and npm (Node Package Manager) installed on your machine

## Installation

To install the zebra-printer-label package, open your terminal and run the following command:

```bash
npm i zebra-printer-label
```

Next, synchronize your project with any native changes by running the following command:

```bash
npx cap sync
```

## API

The zebra-printer-label package provides two main functions:

### echo

The `echo` function is used to test the connection with the Zebra printer. It takes a value as a parameter and returns the same value as a response. Here is an example of how to use the `echo` function:

```javascript
import { echo } from 'zebra-printer-label';

const testConnection = async () => {
  const response = await echo({
    value: 'Test Connection',
  });

  console.log(response.value); // Output: 'Test Connection'
};

testConnection();
```

### print

The `print` function is used to send a ZPL (Zebra Programming Language) command to the Zebra printer for label printing. It requires the IP address, port number, and ZPL command as parameters. Here is an example of how to use the `print` function:

```javascript
import { print } from 'zebra-printer-label';

const printLabel = async () => {
  const options = {
    ip: '192.168.0.100',
    port: 9100,
    zpl: '^XA^FO50,50^A0N50,50^FDHello World!^FS^XZ',
  };

  const response = await print(options);

  console.log(response.value); // Output: 'Label printed successfully'
};

printLabel();
```

Make sure to replace the `ip` and `port` values with the IP address and port number of your Zebra printer. The `zpl` value should contain the ZPL command for the label you want to print.

## Conclusion

In this tutorial, we covered the basics of using the zebra-printer-label package to connect and print labels with Zebra printers. We discussed the installation process and demonstrated how to use the `echo` and `print` functions provided by the package's API. Now you can efficiently print labels with your Zebra printer using the zebra-printer-label package.