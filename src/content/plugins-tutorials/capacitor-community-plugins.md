---
title: "Using @team_yumi/zebra-printer-plugin Package"
description: "This tutorial will guide you through the process of using the @team_yumi/zebra-printer-plugin package to interact with Zebra printers in your Capacitor project."
created_at: "2021-08-31"
published: true
slug: "capacitor-community-plugins"
---

# Using @team_yumi/zebra-printer-plugin Package

In this tutorial, we will learn how to use the `@team_yumi/zebra-printer-plugin` package to interact with Zebra printers in your Capacitor project. This plugin provides a simple and convenient way to print labels using ZPL commands.

To get started, make sure you have Capacitor installed globally by running the following command:

```bash
npm install -g @capacitor/core @capacitor/cli
```

Once Capacitor is installed, create a new Capacitor project or navigate to your existing project. Then, install the `@team_yumi/zebra-printer-plugin` package using npm or yarn:

```bash
npm install @team_yumi/zebra-printer-plugin
```

or

```bash
yarn add @team_yumi/zebra-printer-plugin
```

After installing the plugin, sync the native files with Capacitor:

```bash
npx cap sync
```

Now that everything is set up, let's move on to using the `@team_yumi/zebra-printer-plugin` in your code.

## Usage

### Import the Plugin

To start using the plugin, import it in your TypeScript or JavaScript file:

```typescript
import { ZebraPrinter } from '@team_yumi/zebra-printer-plugin';
```

### Print a Label

With the plugin imported, you can now use its functions. To print a label using ZPL commands, call the `printLabel` function:

```typescript
const label = "^XA^FO20,20^A0N,25,25^FDHello, World!^FS^XZ";
ZebraPrinter.printLabel({ label }).then(() => {
  console.log('Label printed successfully');
}).catch((error) => {
  console.error('Error printing label:', error);
});
```

Make sure to replace `label` with your own ZPL commands.

### Get Printer Status

You can also check the status of the printer using the `getPrinterStatus` function:

```typescript
ZebraPrinter.getPrinterStatus().then((status) => {
  console.log('Printer status:', status);
}).catch((error) => {
  console.error('Error getting printer status:', error);
});
```

The `status` variable will contain information about the printer status, such as online/offline and the remaining battery level (if applicable).

### Disconnect from Printer

Once you're done using the printer, make sure to disconnect from it using the `disconnect` function:

```typescript
ZebraPrinter.disconnect().then(() => {
  console.log('Disconnected from printer');
}).catch((error) => {
  console.error('Error disconnecting from printer:', error);
});
```

This will close the connection to the printer and free up any system resources.

## Conclusion

In this tutorial, we've learned how to use the `@team_yumi/zebra-printer-plugin` package to interact with Zebra printers in your Capacitor project. We covered printing labels using ZPL commands, checking the printer status, and disconnecting from the printer.

With this knowledge, you can now easily integrate Zebra printers into your Capacitor applications and leverage their capabilities for label printing. Happy coding!

Remember to check out the official documentation of the `@team_yumi/zebra-printer-plugin` package for more information and advanced usage.

</code></pre>