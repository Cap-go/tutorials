---
title: Using Capacitor Dynamsoft Barcode Reader Plugin
description: >-
  This tutorial will guide you on how to utilize the
  'capacitor-plugin-dynamsoft-barcode-reader' package in your application to
  recognize barcodes efficiently.
created_at: '2023-10-03'
published: true
slug: capacitor-plugin-dynamsoft-barcode-reader.git
locale: en
---

# Using Capacitor Dynamsoft Barcode Reader Plugin

In this tutorial, we will walk you through the process of integrating and using the 'capacitor-plugin-dynamsoft-barcode-reader' package in your Capacitor project to perform barcode scanning.

## Installation

To install the plugin, run the following command in your Capacitor project:

```bash
npm install --save capacitor-plugin-dynamsoft-barcode-reader
npx cap sync
```

After installation, follow the platform-specific configuration steps below to set up the package for scanning barcodes.

### Configuring for iOS

1. **Add Permissions**: Open your iOS project in Xcode and add the camera usage description to the Info.plist file.

```xml
<key>NSCameraUsageDescription</key>
<string>{Your camera usage description}</string>
```

2. **Dependency Reference**: Ensure the Dynamsoft Barcode Reader SDK is included in the iOS project dependencies.

3. That's it for iOS configuration.

### Configuring for Android

After adding the plugin, you need to update your Android project setup to use the Dynamsoft Barcode Reader plugin.

1. **Update Dependencies**: Add the repository URL to the project build.gradle file.

```kotlin
maven { url 'https://repository.dynamsoft.com/repository/maven-public/' }
```

2. **Configuration Definition**: Declare the scan barcode configuration within the AndroidManifest.xml file.

```xml
<!-- Declare barcode configuration -->
<meta-data
    android:name="com.dynamsoft.barcodereader.DBRCameraConfig"
    android:value="your configuration value" />
```

3. **Permission Declaration**: Ensure the required permissions are added in the AndroidManifest.xml file.

That's all the configuration needed for Android.

## Usage

### JavaScript Implementation

To utilize barcode scanning in your application, here is a simple example using JavaScript.

```js
import { Plugins } from '@capacitor/core';

const { DynamsoftBarcodeReader } = Plugins;

async function scanBarcode() {
    const result = await DynamsoftBarcodeReader.scan();
    console.log('Scanned Barcode:', result);
}

scanBarcode();
```

### Typescript Implementation

If you are using Typescript in your project, here is how you can scan barcodes:

```typescript
import { Plugins } from '@capacitor/core';

const { DynamsoftBarcodeReader } = Plugins;

async function scanBarcode() {
    const result = await DynamsoftBarcodeReader.scan();
    console.log('Scanned Barcode:', result);
}

scanBarcode();
```

By following the steps and examples provided in this tutorial, you can seamlessly integrate the Dynamsoft Barcode Reader plugin into your Capacitor application.
```
