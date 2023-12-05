---
title: "Using the Capacitor QR Code Scanner"
description: "Learn how to use the capacitor-qr-scanner package to scan QR codes on Android and iOS."
created_at: "2022-02-10"
published: true
slug: "capacitor-qr-scanner"
---

# Using the Capacitor QR Code Scanner

In this tutorial, we will learn how to use the `capacitor-qr-scanner` package to scan QR codes on Android and iOS using the Capacitor framework.

## Installation

To install the `capacitor-qr-scanner` package, follow these steps:

1. Open your command line interface and navigate to your project directory.
2. Run the following command to install the package:

```shell
npm i @diningcity/capacitor-qr-scanner
```

3. After the installation is complete, synchronize the package with your project by running one of the following commands based on your project setup:

```shell
npx cap sync
```

or

```shell
npm i @diningcity/capacitor-qr-scanner
ionic capacitor copy
```

**Note:** After installing the package, you need to add some settings and code snippets to your native project.

## Usage

### iOS

To use the Capacitor QR Code Scanner on iOS, follow these steps:

1. Open your iOS project with Xcode.

2. Add the camera usage description in the `info.plist` file as follows:

```xml
<key>NSCameraUsageDescription</key>
<string>{Your camera usage description}</string>
```

For example:

```xml
<key>NSCameraUsageDescription</key>
<string>App would like to use camera to scan QRCode.</string>
```

Alternatively, you can add the camera usage description directly in Xcode without changing the `info.plist` file. See the screenshot below for reference:

![Screen shot](./images/plugin_05.png)

3. That's all. The Capacitor QR Code Scanner is now ready to use on iOS.

### Android

To use the Capacitor QR Code Scanner on Android, follow these steps:

1. Remove the old Android directory from the root directory of your project.

2. Run the following commands to add the Android platform and open the Android project with Android Studio:

```shell
npx cap add android
npx cap open android
```

3. In Android Studio, open the `build.gradle` file of your project.

4. Under the `allprojects > repositories` section, add the following dependency repository:

```groovy
maven { url 'https://jitpack.io' }
```

See the screenshot below for reference:

![android_–_build_gradle__android_](https://user-images.githubusercontent.com/30079762/209921328-a32c3c1e-34ec-49d5-a558-3c7946eedc47.png)

5. That's all. The Capacitor QR Code Scanner is now ready to use on Android.

### Code Example

Now let's see an example of how to use the Capacitor QR Code Scanner in your React application.

```jsx
import { QrScanner } from '@diningcity/capacitor-qr-scanner';
import React from 'react';

const QRScannerExample = () => {
  const scanQRCode = async () => {
    const { result } = await QrScanner.scanQrCode();
    alert(result);
  };

  return (
    <div onClick={scanQRCode}>
      Click to Scan QR Code
    </div>
  );
};

export default QRScannerExample;
```

In the above example, we import the `QrScanner` component from the `@diningcity/capacitor-qr-scanner` package and define a function `scanQRCode` to handle the QR code scanning. When the `div` element is clicked, the `scanQRCode` function is called, and the scanned QR code result is displayed in an alert box.

That's it! You have successfully learned how to use the Capacitor QR Code Scanner package in your Capacitor project. Enjoy scanning QR codes on Android and iOS!