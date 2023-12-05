---
title: "Using the ionic-zebra-label-printer Package"
description: "A step-by-step tutorial on how to use the ionic-zebra-label-printer package to print labels on Zebra printers using Ionic framework and Capacitor."
created_at: "2022-11-01"
published: true
slug: "ionic-zebra-label-printer"
---

# Using the ionic-zebra-label-printer Package

This tutorial will guide you through the process of using the `ionic-zebra-label-printer` package to print labels on Zebra printers using the Ionic framework and Capacitor. By the end of this tutorial, you will be able to send ZPL messages directly to Zebra printers via TCP/IP.

## Prerequisites

Before we begin, make sure you have the following installed:

- Ionic Framework
- Capacitor
- Zebra printer compatible with ZPL language
- Access to a Zebra printer's IP address and port number

## Installation

To install the `ionic-zebra-label-printer` package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your Ionic project directory.
3. Run the following command:

```bash
npm install ionic-zebra-label-printer
```

## Integration with Capacitor

The `ionic-zebra-label-printer` package is built on top of Capacitor. To integrate it into your Ionic project, follow these steps:

1. Make sure you have successfully installed the `ionic-zebra-label-printer` package.
2. Run the following command to sync your project with Capacitor:

```bash
npx cap sync
```

## Sending ZPL Messages to Zebra Printers

To send ZPL messages to Zebra printers, you can use the `print` method provided by the `ionic-zebra-label-printer` package.

Here's an example of how to use the `print` method:

```typescript
import { CapacitorZebraPrinter } from 'capacitor-zebra-printer';

const printUtils = {
  printZpl: async ({ zpl, ip, port }) => {
    return await CapacitorZebraPrinter.print({
      ip,
      port,
      zpl,
    }).then((res) => {
      return res && res.value == 'success';
    });
  },
};

export default printUtils;
```

In the above example, we define a `printZpl` function that accepts three parameters: `zpl` (the ZPL message to print), `ip` (the IP address of the Zebra printer), and `port` (the port number of the Zebra printer). The function calls the `print` method of `CapacitorZebraPrinter` and returns `true` if the print operation is successful.

## Conclusion

In this tutorial, we have learned how to use the `ionic-zebra-label-printer` package to print labels on Zebra printers using the Ionic framework and Capacitor. You are now able to send ZPL messages directly to Zebra printers via TCP/IP. Feel free to explore the package's additional features and customization options to enhance your printing experience.

Remember to consult the official documentation of the `ionic-zebra-label-printer` package for more detailed information and examples.

Happy printing!