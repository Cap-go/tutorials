---
title: "Using @rdlabo/capacitor-brotherprint Package"
description: "A tutorial on how to use the @rdlabo/capacitor-brotherprint package to print images using Brother Print SDK in your Capacitor app."
created_at: "2022-02-09"
published: true
slug: capacitor-brotherprint
---

# Using @rdlabo/capacitor-brotherprint Package

The @rdlabo/capacitor-brotherprint package is a native Brother Print SDK implementation for iOS and Android. It allows you to print images using the Brother Print SDK in your Capacitor app. This tutorial will guide you through the installation and usage of the package.

## Installation

To install the @rdlabo/capacitor-brotherprint package, open your terminal and run the following command:

```bash
npm install --save @rdlabo/capacitor-brotherprint
```

### Android Configuration

In your Android project's `MainActivity.java` file, add the plugin to the initialization list:

```java
import jp.rdlabo.capacitor.plugin.brotherprint.BrotherPrint;

...

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(BrotherPrint.class);
  ...
}});
```

Download the `BrotherPrintLibrary.aar` file from the Brother website and add it to your Android project. Follow the instructions provided [here](https://support.brother.co.jp/j/s/support/html/mobilesdk/guide/getting-started/getting-started-android.html) for detailed steps.

### iOS Configuration

iOS configuration steps are not provided in the documentation. Please refer to the official @rdlabo/capacitor-brotherprint documentation for iOS configuration instructions.

## Usage

To use the @rdlabo/capacitor-brotherprint package in your Capacitor app, follow these steps:

1. Import the necessary modules and plugins:

```typescript
import { Plugins } from '@capacitor/core';
const { BrotherPrint } = Plugins;
import { BrotherPrintOptions } from '@rdlabo/capacitor-brotherprint';
```

2. Set up event listeners for print success and error events:

```typescript
constructor() {
  // Success to print
  BrotherPrint.addListener('onPrint', (info) => {
    console.log("onPrint");
  });

  // Failed to communication with printer
  BrotherPrint.addListener('onPrintError', (info) => {
    console.log("onPrintError");
  });

  // Failed to communication with printer
  BrotherPrint.addListener('onPrintFailedCommunication', (info) => {
    console.log("onPrintFailedCommunication");
  });
}
```

3. Use the `printImage` method to print an image:

```typescript
print() {
  BrotherPrint.printImage({
    printerType: 'QL-820NW',
    encodedImage: 'base64 removed mime-type', // base64
  } as BrotherPrintOptions);
}
```

4. Use the `searchWiFiPrinter` and `searchBLEPrinter` methods to search for available printers:

```typescript
printWithNetWork() {
  const wifi = () => new Promise(resolve => {
    BrotherPrint.addListener('onIpAddressAvailable', (info) => {
      resolve(info);
    });
  });

  const ble = () => new Promise(resolve => {
    BrotherPrint.addListener('onBLEAvailable', (info) => {
      resolve(info);
    });
  });
  
  Promise.all([wifi(), ble()]).then((values) => {
    console.log(values);
  });

  BrotherPrint.searchWiFiPrinter();
  BrotherPrint.searchBLEPrinter();
} 
}
```

That's it! You have successfully installed and used the @rdlabo/capacitor-brotherprint package to print images in your Capacitor app.

Remember to refer to the official documentation of @rdlabo/capacitor-brotherprint for more detailed information and any further configuration requirements specific to your platform.

Enjoy printing with Brother Print SDK in your Capacitor app!