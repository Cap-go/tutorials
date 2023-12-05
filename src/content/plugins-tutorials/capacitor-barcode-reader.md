---
title: "Using capacitor-barcode-reader package"
description: "A tutorial on how to use the capacitor-barcode-reader package to scan barcodes in your Capacitor app"
created_at: "2021-10-15"
published: true
slug: "capacitor-barcode-reader"
---

# Using capacitor-barcode-reader package

In this tutorial, you will learn how to use the capacitor-barcode-reader package to scan barcodes in your Capacitor app. The capacitor-barcode-reader package is a plugin that allows you to easily integrate barcode scanning functionality into your app using MLkit vision and CameraX.

## Installation

To install the capacitor-barcode-reader package in your Capacitor project, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project's root directory.
3. Run the following command:

```bash
npm install capacitor-barcode-reader
```

## Android Setup

If you're running your Capacitor app on Android, you need to perform a few additional steps to set up the capacitor-barcode-reader package:

1. Open your Android project in Android Studio.
2. Open the `MainActivity.java` file located at `./android/app/src/main/java/{your.package.name}/MainActivity.java`.
3. Import the `BarcodeReaderPlugin` class:

```java
import com.getcapacitor.community.barcode.BarcodeReaderPlugin;
```

4. Add the `BarcodeReader` plugin to the `initialize` method of the `MainActivity` class:

```java
BarcodeReader.registerWith(registrarFor(BarcodeReaderPlugin.class));
```

## iOS Setup

If you're running your Capacitor app on iOS, you need to perform a few additional steps to set up the capacitor-barcode-reader package:

1. Open your iOS project in Xcode.
2. Open the `AppDelegate.swift` file located at `./ios/App/AppDelegate.swift`.
3. Import the `BarcodeReaderPlugin` module:

```swift
import capacitor_barcode_reader
```

4. Add the `BarcodeReader` plugin to the `didFinishLaunchingWithOptions` method of the `AppDelegate` class:

```swift
BarcodeReader.register(with: registrar(forPlugin: BarcodeReaderPlugin.self))
```

## Usage

To use the capacitor-barcode-reader package in your Capacitor app, follow these steps:

1. Import the `Plugins` module from `@capacitor/core`:

```javascript
import { Plugins } from '@capacitor/core';
```

2. Access the `BarcodeReader` plugin through the `Plugins` object:

```javascript
const { BarcodeReader } = Plugins;
```

3. Define a function to handle the barcode scanning process:

```javascript
const scanBarcode = async () => {
  try {
    const result = await BarcodeReader.scanBarcode();
    console.log(result);
    // Handle the barcode result here
  } catch (error) {
    console.error(error);
    // Handle any errors here
  }
};
```

4. Call the `scanBarcode` function to start scanning for barcodes:

```javascript
scanBarcode();
```

5. The `scanBarcode` function will return a result object with the barcode data. You can handle the result as per your application's requirements.

And that's it! You have successfully integrated barcode scanning functionality into your Capacitor app using the capacitor-barcode-reader package.

Remember to test your app on both Android and iOS devices to ensure proper functionality.

Happy coding!