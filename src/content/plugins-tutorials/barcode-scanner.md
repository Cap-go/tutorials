---
title: "Using @capacitor-community/barcode-scanner Package"
description: "In this tutorial, we will learn how to use the @capacitor-community/barcode-scanner package to scan barcodes in a Capacitor project."
created_at: "2022-07-20"
published: true
slug: "barcode-scanner"
---

# Using @capacitor-community/barcode-scanner Package

In this tutorial, we will learn how to use the @capacitor-community/barcode-scanner package to scan barcodes in a Capacitor project.

## Installation

To get started, let's install the @capacitor-community/barcode-scanner package. Open your terminal and run the following command:

```bash
npm install @capacitor-community/barcode-scanner
```

Next, we need to sync the Capacitor project. Run the following command in your terminal:

```bash
npx cap sync
```

## Android Setup

If you are targeting Android, you need to add some additional configuration to your project.

### Step 1: Update your App Manifest

Open the `android/app/src/main/AndroidManifest.xml` file and add the following permissions inside the `<manifest>` tag:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera" />
```

### Step 2: Update your MainActivity

Open the `android/app/src/main/java/{your_package_name}/MainActivity.java` file and add the following import statement at the top:

```java
import com.getcapacitor.community.barcode.BarcodeScanner;
```

Next, add the following method inside your MainActivity class:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the barcode scanner
    add(BarcodeScanner.class);

    // ...

}
```

## iOS Setup

If you are targeting iOS, you need to add some additional configuration to your project.

### Step 1: Update your Info.plist

Open the `ios/App/App/Info.plist` file and add the following permission:

```xml
<key>NSCameraUsageDescription</key>
<string>Camera permission is required for barcode scanning.</string>
```

## Using the Barcode Scanner

Now that we have installed and configured the @capacitor-community/barcode-scanner package, let's use it in our code.

First, import the `Plugins` object from `@capacitor/core` in your JavaScript or TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';
```

Next, use the `Plugins` object to access the `MlkitBarcodescanner` plugin:

```javascript
const { MlkitBarcodescanner } = Plugins;
```

To scan a barcode, call the `scanBarcode()` method:

```javascript
await MlkitBarcodescanner.scanBarcode();
```

This method returns a result that contains the scanned barcode value.

Here's an example of how to use the barcode scanner:

```javascript
import { Plugins } from '@capacitor/core';
const { MlkitBarcodescanner } = Plugins;

export default {
  methods: {
    async scanBarcode() {
      try {
        const result = await MlkitBarcodescanner.scanBarcode();
        console.log('Scanned barcode:', result);
      } catch (error) {
        console.error('Failed to scan barcode:', error);
      }
    }
  }
}
```

That's it! You have successfully integrated the barcode scanner into your Capacitor project using the @capacitor-community/barcode-scanner package.

Now you can use the `scanBarcode()` method to scan barcodes and handle the scanned barcode values in your app.

Happy coding!