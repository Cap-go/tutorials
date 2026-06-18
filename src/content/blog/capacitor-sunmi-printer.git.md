```markdown
---
"title": "Using Capacitor-Sunmi-Printer-V7 Package Tutorial",
"description": "A detailed guide on how to utilize the Capacitor-Sunmi-Printer-V7 package for printing on internal printers of Sunmi POS devices",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-sunmi-printer.git"
---

# Getting Started with Capacitor-Sunmi-Printer-V7

Capacitor-Sunmi-Printer-V7 is a package designed for printing on internal printers of Sunmi POS devices. This tutorial will walk you through the installation process and some basic usage examples.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @kduma-autoid/capacitor-sunmi-printer
npx cap sync
```

## Configuration

If you want to disable auto binding of the service, you can set `bindOnLoad` to `false` in the plugin configuration in `capacitor.config.ts`.

```typescript
/// <reference types="@kduma-autoid/capacitor-sunmi-printer" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.company.app",
  ...
  plugins: {
    SunmiPrinter: {
      bindOnLoad: true
    }
  }
}
export default config;
```

## Basic Usage

### Printing a Test

```javascript
import { Plugins } from '@capacitor/core';
import '@kduma-autoid/capacitor-sunmi-printer';

const { SunmiPrinter } = Plugins;

const printTest = async () => {
    const data = {
        contents : "This is a test print \n",
        is_bold: true,
        is_underline: true
    }

    const results = (await SunmiPrinter.printString(data)).results;
    return results;
};
```

### Discovering Printers

```javascript
const discoverPrinters = async () => {
    const results = (await SunmiPrinter.discoverPrinters()).results;
    
    var printers = [];
    for (var i = 0; i < results.length; i++) {
        let printer = {
            "name": results[i].name,
            "address": results[i].address,
        }

        printers.push(printer);
    }

    return printers;
};
```

### Connecting to a Printer

```javascript
const connectPrinter = async () => {
    const option = {
        address : "xxx xxx xxx"
    }

    const results = (await SunmiPrinter.connectPrinter(option)).results;
    return results;
};
```

### Disconnecting from a Printer

```javascript
const disconnectPrinter = async () => {
    const results = (await SunmiPrinter.disconnectPrinter()).results;
    return results;
};
```

### Printing a Barcode

```javascript
const printBarcode = async () => {
    const option = {
        barcode : '123xxxxx'
    }
    const results = (await SunmiPrinter.printBarcode(option)).results;
    return results;
};
```

```

Please note that this is a basic tutorial. For more advanced usage or additional features, refer to the official documentation of Capacitor-Sunmi-Printer-V7 package.