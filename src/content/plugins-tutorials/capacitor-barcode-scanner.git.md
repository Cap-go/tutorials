```markdown
---
"title": "Capacitor Barcode Scanner Tutorial",
"description": "A step-by-step guide on how to use the @capacitor/barcode-scanner package for scanning barcodes on Android and iOS using Capacitor.",
"created_at": "2022-01-23",
"published": true,
"slug": "capacitor-barcode-scanner.git"
---

# Capacitor Barcode Scanner Tutorial

In this tutorial, we will walk through how to use the `@capacitor/barcode-scanner` package to scan barcodes on Android and iOS using Capacitor.

## Installation

To install the `@capacitor/barcode-scanner` package, you need to run the following command in your project directory:

```shell
npm install @capacitor/barcode-scanner
npx cap sync
```

**Note:** Make sure to add necessary settings and code snippets to your native projects after installing the package.

### iOS

1. Open your iOS project with Xcode and add the camera usage description in `info.plist` as shown below:

```xml
<key>NSCameraUsageDescription</key>
<string>{Your camera usage description}</string>

Example: App would like to use the camera to scan barcodes.
```

2. That's all for iOS.

### Android

### Usage

To integrate the `@capacitor/barcode-scanner` into your code, follow the examples below:

### iOS

```javascript
import { BarcodeScanner } from '@capacitor/barcode-scanner';
import { Plugins } from '@capacitor/core';

const scanBarcode = async () => {
  const { hasPermission } = await BarcodeScanner.checkPermission();  
  if (!hasPermission) {
    const { granted } = await BarcodeScanner.requestPermission();
    if (!granted) {
      alert('Permission denied.');
      return;
    }
  }
  
  const scanResult = await BarcodeScanner.scan();
  alert(`Scanned barcode: ${scanResult.text}`);
};
```

### Android

```javascript
import { BarcodeScanner } from '@capacitor/barcode-scanner';
import { Plugins } from '@capacitor/core';

const scanBarcode = async () => {
  const scanResult = await BarcodeScanner.scan();
  alert(`Scanned barcode: ${scanResult.text}`);
};
```

After removing the old Android directory, run the following commands:

```shell
npx cap add android
npx cap open android
```

In Android Studio, add the following dependency repository under `allprojects > repositories` in the `build.gradle` file of the project:

```gradle
maven { url 'https://jitpack.io' }
```

That's it! You are now ready to use the `@capacitor/barcode-scanner` package in your Capacitor project for scanning barcodes. Happy coding!
```