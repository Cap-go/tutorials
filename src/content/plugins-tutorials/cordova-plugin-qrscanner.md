---
title: "How to Use Capacitor QRScanner Package"
description: "In this tutorial, we will learn how to use the Capacitor QRScanner package to scan QR codes on Android and iOS."
created_at: "2021-11-17"
published: true
slug: cordova-plugin-qrscanner
---

# How to Use Capacitor QRScanner Package

In this tutorial, we will learn how to use the Capacitor QRScanner package to scan QR codes on Android and iOS. The Capacitor QRScanner is a plugin that allows developers to easily integrate QR code scanning functionality into their applications.

## Installation

To install the Capacitor QRScanner package, follow these steps:

1. Open your project's command line interface.
2. Run the following command to install the package:

```shell
npm i @diningcity/capacitor-qr-scanner
```

3. After the installation is complete, sync the Capacitor project by running the following command:

```shell
npx cap sync
```

**Note:** If you are using Ionic, you can also run the following command:

```shell
npm i @diningcity/capacitor-qr-scanner
ionic capacitor copy
```

## Usage

### iOS

To use the Capacitor QRScanner on iOS, follow these steps:

1. Open your iOS project with Xcode.
2. Add the camera usage description in the `info.plist` file. This description should explain why your app needs camera access to scan QR codes. Here is an example:

```xml
<key>NSCameraUsageDescription</key>
<string>App would like to use camera to scan QRCode.</string>
```

3. Alternatively, you can add the camera usage description directly in Xcode. Here's how:

   - Open the project in Xcode.
   - Open the `info.plist` file.
   - Add a new row with the key `Privacy - Camera Usage Description`.
   - Enter the camera usage description as the value.

4. That's all! You can now use the Capacitor QRScanner in your iOS project.

### Android

To use the Capacitor QRScanner on Android, follow these steps:

1. Remove the old Android directory from the root directory of your project.
2. Run the following commands to add the Android platform and open the Android project with Android Studio:

```shell
npx cap add android
npx cap open android
```

3. In Android Studio, open the `build.gradle` file of your project.
4. Inside the `allprojects > repositories` block, add the following dependency repository:

```groovy
maven { url 'https://jitpack.io' }
```

The updated `build.gradle` file should look like this:

```groovy
allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://jitpack.io' }
    }
}
```

5. That's it! You can now use the Capacitor QRScanner in your Android project.

## Example Code

Below is an example code snippet demonstrating how to use the Capacitor QRScanner in a React component:

```jsx
import { QrScanner } from '@diningcity/capacitor-qr-scanner';
import React from "react";

const ScanQRCode = () => {
    async function scanQR() {
      const { camera } = await QrScanner.requestPermissions();
      
      if (camera === "granted") {
        const { result } = await QrScanner.scanQrCode();
        alert(result);
      } else {
        alert("You should allow camera permission.");
      }
    }

    return (
        <div onClick={() => scanQR()}>
            Scan QR Code
        </div>
    );
};

export default ScanQRCode;
```

In the example above, we import the `QrScanner` module from the Capacitor QRScanner package. We define a `scanQR` function that requests camera permissions and then scans a QR code using the `scanQrCode` method. The result is then displayed in an alert.

You can customize the example code to fit your specific use case.

## Conclusion

In this tutorial, we learned how to install and use the Capacitor QRScanner package to scan QR codes on Android and iOS. We covered the installation process, usage instructions for both iOS and Android platforms, and provided an example code snippet. Now you can easily integrate QR code scanning functionality into your Capacitor application using the Capacitor QRScanner package.
