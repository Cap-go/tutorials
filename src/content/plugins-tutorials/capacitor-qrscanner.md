---
title: "Using the Capacitor-QRScanner Package"
description: "A tutorial on how to use the @johnbraum/capacitor-qrscanner package to scan QR codes in Capacitor."
created_at: "2021-09-20"
published: true
slug: "capacitor-qrscanner"
---

# Using the Capacitor-QRScanner Package

In this tutorial, we will learn how to use the `@johnbraum/capacitor-qrscanner` package to scan QR codes in a Capacitor project.

## Installation

To install the package, run the following command in your project directory:

```shell
npm install @johnbraum/capacitor-qrscanner
```

Next, synchronize your Capacitor project to make sure the package is added:

```shell
npx cap sync
```

## Setting Up Permissions (iOS)

For iOS projects, we need to add a camera usage description in the `info.plist` file. Open your iOS project in Xcode and add the following lines:

```xml
<key>NSCameraUsageDescription</key>
<string>{Your camera usage description}</string>
```

Replace `{Your camera usage description}` with a description of how your app will use the camera, such as "This app needs access to the camera to scan QR codes."

## Usage

### Scanning QR Codes (iOS and Android)

To scan a QR code, import the `QrScanner` module into your code:

```javascript
import { QrScanner } from '@johnbraum/capacitor-qrscanner';
```

Next, create a function that handles the QR code scanning:

```javascript
async function scanQRCode() {
  const { camera } = await QrScanner.requestPermissions();

  if (camera === "granted") {
    const { result } = await QrScanner.scanQrCode();
    alert(result);
  } else {
    alert("You should allow camera permission.");
  }
}
```

The `scanQRCode` function requests camera permissions and, if granted, scans the QR code and displays the result in an alert.

Finally, add a button or any other trigger to call the `scanQRCode` function:

```javascript
return (
  <div onClick={scanQRCode}>
    Scan QR Code
  </div>
);
```

That's it! When you click on the element containing the `scanQRCode` function, the QR code scanner will be prompted, and the result will be displayed in an alert.

## Additional Steps for Android

After adding the `@johnbraum/capacitor-qrscanner` package and syncing the Capacitor project, follow these additional steps for Android:

1. Remove the old Android directory from the root of your project.
2. Run the following commands:

```shell
npx cap add android
npx cap open android
```

These commands will add the Android platform to your project and open it in Android Studio.
3. In Android Studio, open the `build.gradle` file of your project and add the following repository under `allprojects > repositories`:

```groovy
maven { url 'https://jitpack.io' }
```

4. Sync the project in Android Studio.

Now, the `@johnbraum/capacitor-qrscanner` package should be set up and ready to use on both iOS and Android platforms.

Remember to handle any error cases and customize the UI as per your application's needs.