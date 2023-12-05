---
title: "Using the @rdlabo/capacitor-codescanner Package"
description: "In this tutorial, you will learn how to use the @rdlabo/capacitor-codescanner package to scan QR codes in your Capacitor project."
created_at: "2022-10-20"
published: true
slug: "capacitor-codescanner"
---

# Using the @rdlabo/capacitor-codescanner Package

In this tutorial, we will walk you through the process of integrating the @rdlabo/capacitor-codescanner package into your Capacitor project. This package allows you to easily scan QR codes using the camera of your iOS or Android device.

## Installation

To install the @rdlabo/capacitor-codescanner package, run the following command in your project directory:

```shell
npm install @rdlabo/capacitor-codescanner
```

Next, synchronize the Capacitor project with the newly installed package:

```shell
npx cap sync
```

## Usage

### iOS

1. Open your Xcode project and navigate to the `info.plist` file.
2. Add the following key-value pair to request the necessary camera usage permission:

```xml
<key>NSCameraUsageDescription</key>
<string>{Your camera usage description}</string>
```

For example:

```xml
<key>NSCameraUsageDescription</key>
<string>App would like to use the camera to scan QR codes.</string>
```

Alternatively, you can add this directly in Xcode by following these steps:

- Open your Xcode project
- Select the project's target
- Go to the "Info" tab
- Add a row and set the "Key" as "Privacy - Camera Usage Description" and the "Value" as your desired camera usage description.

3. That's all for iOS setup.

### Android

To use the @rdlabo/capacitor-codescanner package in your Android project, you need to perform the following steps:

1. Remove the old Android directory from the project's root directory.
2. Run the following commands to add the Android platform and open the Android project in Android Studio:

```shell
npx cap add android
npx cap open android
```

3. In Android Studio, open the build.gradle file of the project.
4. Locate the `allprojects > repositories` section and add the following line:

```groovy
maven { url 'https://jitpack.io' }
```

The build.gradle file should now contain the added repository line:

![android_build.gradle](https://user-images.githubusercontent.com/30079762/209921328-a32c3c1e-34ec-49d5-a558-3c7946eedc47.png)

5. That's all for Android setup.

### QR Code Scanning

Now, let's see how to use the @rdlabo/capacitor-codescanner package in your project.

#### Initializing the Scanner

To import the QR code scanner into your code, add the following import statement:

```javascript
import { QrScanner } from '@rdlabo/capacitor-codescanner';
```

#### Scanning a QR Code

To scan a QR code, you can use the `scanQrCode` method provided by `QrScanner`. Here's an example of how to use it:

```javascript
const scanQR = async () => {
  const { camera } = await QrScanner.requestPermissions();
  if (camera === "granted") {
    const { result } = await QrScanner.scanQrCode();
    alert(result);
  } else {
    alert("You should allow camera permission.");
  }
};
```

In this example, `requestPermissions` is called first to request camera permissions from the user. If the permissions are granted (`camera === "granted"`), the `scanQrCode` method is called to scan a QR code. The resulting QR code data is then displayed in an alert dialog.

#### Triggering the QR Code Scanner

To trigger the QR code scanner, you can add a button or any other element with an `onClick` event handler. For example:

```jsx
import React from "react";

const QRScannerButton = () => {
  const scanQR = async () => {
    // QR code scanning logic goes here...
  };

  return (
    <button onClick={scanQR}>Scan QR Code</button>
  );
};

export default QRScannerButton;
```

Now, whenever the button is clicked, the `scanQR` function will be called, which in turn triggers the QR code scanner.

## Conclusion

Congratulations! You have successfully integrated the @rdlabo/capacitor-codescanner package into your Capacitor project and learned how to scan QR codes using the camera of your iOS or Android device. You can now utilize this feature to build exciting and interactive functionalities in your apps.