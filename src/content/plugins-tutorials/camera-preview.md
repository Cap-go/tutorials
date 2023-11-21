---
title: "Using @capacitor-community/camera-preview"
description: "A tutorial on how to use the @capacitor-community/camera-preview package for camera interaction in Capacitor."
created_at: "2022-01-01"
published: true
slug: camera-preview
---

# Using @capacitor-community/camera-preview

In this tutorial, we will learn how to use the `@capacitor-community/camera-preview` package to interact with the device's camera in Capacitor. The `camera-preview` package is a Capacitor plugin that allows camera interaction from JavaScript and HTML, based on the `cordova-plugin-camera-preview`.

## Installation

To install the `@capacitor-community/camera-preview` package, run the following command:

```bash
yarn add @capacitor-community/camera-preview
```

or

```bash
npm install @capacitor-community/camera-preview
```

Then, synchronize the changes with your Capacitor project:

```bash
npx cap sync
```

## Extra Android Installation Steps

If you are using Android, follow these additional steps:

- Open `android/app/src/main/AndroidManifest.xml` and add the following line above the closing `</manifest>` tag to request the CAMERA permission:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

For more details, consult the [Capacitor documentation](https://capacitorjs.com/docs/android/configuration#configuring-androidmanifestxml).

## Extra iOS Installation Steps

If you are using iOS, you need to add two permissions to `Info.plist`. Follow the [Capacitor documentation](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) and add permissions with the raw keys `NSCameraUsageDescription` and `NSMicrophoneUsageDescription`. The `NSMicrophoneUsageDescription` is only required if audio will be used. Alternatively, you can set the `disableAudio` option to `true` to disable the microphone permission request.

## Extra Web Installation Steps

If you are using Capacitor for the web, there are no additional installation steps required.

## Usage

Now that the `@capacitor-community/camera-preview` package is installed, you can use it to interact with the device's camera. Here's an example of how to start a camera preview from JavaScript:

```javascript
import { Plugins } from '@capacitor/core';
const { CameraPreview } = Plugins;

CameraPreview.start({
  parent: 'cameraPreview',
  position: 'rear',
  toBack: false,
  width: window.innerWidth,
  height: window.innerHeight
});
```

In the above code, we import the `CameraPreview` plugin from the `@capacitor/core` package. Then, we use the `start` method to start the camera preview. We provide the ID of the HTML element that will contain the camera preview as the `parent` option. We also specify the `position` of the camera (either 'rear' or 'front'), set the `toBack` option to `false` to bring the preview to the front, and specify the `width` and `height` of the preview.

## Conclusion

In this tutorial, we learned how to install and use the `@capacitor-community/camera-preview` package for camera interaction in Capacitor