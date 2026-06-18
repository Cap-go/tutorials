```
---
"title": "Using Capacitor Plugin Dynamsoft Barcode Reader Package",
"description": "Step-by-step guide on integrating and utilizing the capacitor-plugin-dynamsoft-barcode-reader package in a Capacitor project",
"created_at": "2022-10-03",
"published": true,
"slug": "capacitor-plugin-dynamsoft-barcode-reader.git"
---

## Introduction

In this guide, we will walk you through the process of integrating and using the **capacitor-plugin-dynamsoft-barcode-reader** package in your Capacitor project to enable barcode scanning functionality.

### Installation

To install the package, you can use npm. Open your command line interface and run the following command:

```shell
npm install capacitor-plugin-dynamsoft-barcode-reader
```

Next, synchronize the changes in your project using one of the following commands:

```shell
npx cap sync
```
or
```shell
ionic capacitor copy
```

### Configuration

#### iOS Configuration

1. Open the iOS project in Xcode.
2. Add the following keys to the **Info.plist** file with your preferred values:

```xml
<key>NSCameraUsageDescription</key>
<string>{Your camera usage description}</string>
```

For example:
```xml
<key>NSCameraUsageDescription</key>
<string>App would like to use camera for barcode scanning</string>
```

3. That's all you need for iOS.

#### Android Configuration

1. After removing the old Android directory, add the Android platform to your project by running the following commands:

```shell
npx cap add android
npx cap open android
```

2. Once Android Studio is opened with your Android project, add the following dependency repository under the **allprojects > repositories** section in the **build.gradle** file of the project:

```gradle
maven { url 'https://maven.jitpack.io' }
```

### Usage

Now that you have installed and configured the plugin, you can proceed to use it in your code.

#### Import the Plugin

In your project file, import the **DynamsoftBarcode** component from the package:

```javascript
import { DynamsoftBarcode } from 'capacitor-plugin-dynamsoft-barcode-reader';
```

#### Scan Barcodes

You can now use the `scanBarcode` function provided by the **DynamsoftBarcode** plugin to scan barcodes. Here's an example of how you can use it:

```javascript
const scanBarcode = async () => {
    const { result } = await DynamsoftBarcode.scanBarcode();
    console.log(result);
}
```

### Conclusion

In this tutorial, we covered the installation, configuration, and usage of the **capacitor-plugin-dynamsoft-barcode-reader** package in a Capacitor project. You can now enhance your applications with barcode scanning capabilities easily.
```