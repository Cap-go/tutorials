---
title: "Using @periksa/cap-usb-camera Package"
description: "This tutorial will guide you through the process of using the @periksa/cap-usb-camera package to access and capture images from a UVC external camera in your Capacitor app."
created_at: "2022-01-20"
published: true
slug: cap-usb-camera
---

# Using @periksa/cap-usb-camera Package

In this tutorial, we will learn how to use the @periksa/cap-usb-camera package to access and capture images from a UVC external camera in your Capacitor app. This plugin provides a native activity to access and open a stream from the external camera, allowing you to capture photos and retrieve the data from the plugin call.

## Installation

To get started, first install the @periksa/cap-usb-camera package using npm:

```bash
npm install @periksa/cap-usb-camera
```

Next, synchronize your Capacitor project to ensure the package is added to your project:

```bash
npx cap sync
```

## Android Configuration

To enable the @periksa/cap-usb-camera package on Android, you need to modify the `build.gradle` file of your project. Follow these steps:

1. Open the `build.gradle` file located at `/android/build.gradle` in your project.
2. Inside the `allprojects` -> `repositories` section, add the following line:

   ```gradle
   maven { url 'https://raw.github.com/saki4510t/libcommon/master/repository/' }
   ```

3. Save the `build.gradle` file.

## Usage

To use the @periksa/cap-usb-camera package in your app, follow these steps:

1. Import the `UsbCamera` class from the package into your code:

   ```typescript
   import { UsbCamera } from '@periksa/cap-usb-camera';
   ```

2. Add a method to perform the camera action, for example, capturing a photo:

   ```typescript
   private async capturePhoto(): Promise<void> {
     const photoResult = await UsbCamera.getPhoto({ saveToStorage: false });

     if (photoResult.exit_code === 'success') {
       // The photo was captured successfully
       const photoSrc = photoResult.data.dataURL;
       // Handle the photo data
     } else if (photoResult.exit_code === 'exit_no_device') {
       // No camera device is connected
       // Handle this case
     } else if (photoResult.exit_code === 'user_canceled') {
       // The user canceled the action
       // Handle this case
     } else if (photoResult.exit_code === 'device_disconnected') {
       // The camera device was disconnected
       // Handle this case
     }
   }
   ```

3. Call the `capturePhoto()` method when you want to capture a photo:

   ```typescript
   // For example, in a button click event
   captureButton.addEventListener('click', () => {
     this.capturePhoto();
   });
   ```

4. Customize the code to handle the captured photo data based on your app's needs.

## Conclusion

In this tutorial, we have learned how to use the @periksa/cap-usb-camera package to access and capture images from a UVC external camera in a Capacitor app. We have covered the installation process, Android configuration, and usage of the package to perform camera actions. By following the steps outlined in this tutorial, you can integrate external camera functionality into your Capacitor app with ease.

Please refer to the official documentation of the @periksa/cap-usb-camera package for more details and additional features.