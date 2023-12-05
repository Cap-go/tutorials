---
title: "Using the Capacitor QR Code Scanner Plugin"
description: "A comprehensive tutorial on how to use the Capacitor QR Code Scanner plugin in your Android and iOS applications"
created_at: "2022-08-25"
published: true
slug: "capacitor-module-barcode-scanner"
---

# Using the Capacitor QR Code Scanner Plugin

In this tutorial, we will explore how to use the Capacitor QR Code Scanner plugin in your Android and iOS applications. The Capacitor QR Code Scanner plugin allows you to easily scan QR codes using the camera on the device. We will go through the installation process and provide sample code for using the plugin in React applications.

## Installation

To install the Capacitor QR Code Scanner plugin, follow the steps below:

1. Open a terminal window and navigate to your project directory.

2. Run the following command to install the plugin:

```shell
npm i @diningcity/capacitor-qr-scanner
```

3. Next, synchronize the plugin with Capacitor by running the following command:

```shell
npx cap sync
```

4. For iOS projects, open the iOS project in Xcode. In the `info.plist` file, add a description for camera usage by adding the following code:

```xml
<key>NSCameraUsageDescription</key>
<string>{Your camera usage description}</string>
```

5. For Android projects, open the Android project in Android Studio. In the `build.gradle` file, add the following repository under the `allprojects > repositories` section:

```gradle
maven { url 'https://jitpack.io' }
```

## Usage

### iOS

To use the Capacitor QR Code Scanner plugin in your iOS application, follow the code snippet below:

```jsx
import { QrScanner } from '@diningcity/capacitor-qr-scanner';
import React from "react";

const Test = () => {
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
        <React.Fragment>
            <div onClick={() => scanQR()}>
                Scan QR Code
            </div>
        </React.Fragment>
    );
};

export default Test;
```

In the above code, we import the `QrScanner` object from the `@diningcity/capacitor-qr-scanner` package. We define a function called `scanQR` that requests camera permissions using `QrScanner.requestPermissions()`. If the permission is granted, we can call `QrScanner.scanQrCode()` to start scanning for QR codes. The scanned QR code result is displayed using the `alert` function.

### Android

To use the Capacitor QR Code Scanner plugin in your Android application, follow the code snippet below:

```jsx
import { QrScanner } from '@diningcity/capacitor-qr-scanner';
import React from "react";

const Test = () => {
    const scanQrCode = async () => {
        const { result } = await QrScanner.scanQrCode();
        alert(result);
    }

    return (
        <React.Fragment>
            <div onClick={scanQrCode}>
                Scan QR Code
            </div>
        </React.Fragment>
    );
};

export default Test;
```

In the above code, we import the `QrScanner` object from the `@diningcity/capacitor-qr-scanner` package. We define a function called `scanQrCode` that calls `QrScanner.scanQrCode()` to start scanning for QR codes. The scanned QR code result is displayed using the `alert` function.

After following these steps, you should have the Capacitor QR Code Scanner plugin installed and integrated into your Android and iOS applications. You can now use the plugin to easily scan QR codes using the camera on the device.