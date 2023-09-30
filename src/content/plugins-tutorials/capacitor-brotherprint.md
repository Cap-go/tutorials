# Using @rdlabo/capacitor-brotherprint Package

In this tutorial, we will learn how to use the @rdlabo/capacitor-brotherprint package to print images using Brother printers in an Ionic/Capacitor application.

## What is BrotherPrint?

Capacitor Brother Print is a native Brother Print SDK implementation for iOS & Android. It provides a simple and efficient way to print images using Brother printers.

## Installation

To install the @rdlabo/capacitor-brotherprint package, run the following command:

```
npm install @rdlabo/capacitor-brotherprint
```

## Android Configuration

In your `MainActivity.java` file (located in `android/app/src/main/java/**/**/MainActivity.java`), add the BrotherPrint plugin to the initialization list:

```java
import jp.rdlabo.capacitor.plugin.brotherprint.BrotherPrint;

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    [...]
  add(BrotherPrint.class);
    [...]
}});
```

You also need to download the `BrotherPrintLibrary.aar` file and put it in your Android project. You can download it from the Brother website: [BrotherPrintLibrary](https://support.brother.co.jp/j/s/support/html/mobilesdk/guide/getting-started/getting-started-android.html)

## iOS Configuration

_(iOS configuration information is currently not available.)_

## How to Use

To use the @rdlabo/capacitor-brotherprint package, follow these steps:

1. Import the necessary modules and components:

```typescript
import { Plugins } from '@capacitor/core';
import { BrotherPrintOptions } from '@rdlabo/capacitor-brotherprint';

const { BrotherPrint } = Plugins;
```

2. Set up event listeners for printing:

```typescript
constructor() {
  BrotherPrint.addListener('onPrint', (info) => {
    console.log("onPrint");
  });

  BrotherPrint.addListener('onPrintError', (info) => {
    console.log("onPrintError");
  });

  BrotherPrint.addListener('onPrintFailedCommunication', (info) => {
    console.log("onPrintFailedCommunication");
  });
}
```

3. Print an image:

```typescript
print() {
  BrotherPrint.printImage({
    printerType: 'QL-820NW',
    encodedImage: 'base64 removed mime-type', // base64
  } as BrotherPrintOptions);
}
```

4. Search for available printers:

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
```

And that's it! You can now use the @rdlabo/capacitor-brotherprint package to print images using Brother printers in your Ionic/Capacitor application.

Please note that this tutorial is based on the current version of the @rdlabo/capacitor-brotherprint package, and additional configuration or changes may be required in future versions.