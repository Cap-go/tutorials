---
title: Using the @starley/camera-preview-capacitor Package
description: Step-by-step guide on how to use the @starley/camera-preview-capacitor package in your Capacitor project.
created_at: 2023-11-27
published: true
slug: camera-preview-capacitor.git
locale: en
---

# Using the @starley/camera-preview-capacitor Package

The @starley/camera-preview-capacitor package is a Capacitor plugin that allows camera interaction from Javascript and HTML. It is based on cordova-plugin-camera-preview and provides a seamless way to integrate camera functionality into your Capacitor project.

## Installation

You can install the package using npm or yarn. Here's how you can add it to your project:

```bash
yarn add @starley/camera-preview-capacitor
# or
npm install @starley/camera-preview-capacitor
```

After installing the package, make sure to sync your Capacitor project by running:

```bash
npx cap sync
```

### Extra Android Installation Steps

If you are installing on an Android device, make sure to follow these additional steps:

1. The plugin might require Gradle 7 for versions 3 and above. If you are using Gradle 4, consider using an older version of the plugin.
2. Open `android/app/src/main/AndroidManifest.xml` and add the following line above the closing `</manifest>` tag to request the CAMERA permission:
```xml
<uses-permission android:name="android.permission.CAMERA" />
```

For more help, refer to the [Capacitor docs](https://capacitorjs.com/docs/android/configuration#configuring-androidmanifestxml).

### Extra iOS Installation Steps

For iOS devices, you will need to add two permissions to `Info.plist`. Follow the [Capacitor docs](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) and add permissions with the raw keys `NSCameraUsageDescription` and `NSMicrophoneUsageDescription`. If audio is not used, set the `disableAudio` option to `true`.

### Extra Web Installation Steps

To use the package in a web environment, add the following import statement to the file:

```javascript
import { CameraPreview } from '@starley/camera-preview-capacitor';
```

Then, in your HTML file, add the following tag:

```html
<div id="cameraPreview"></div>
```

Finally, start the camera preview using:

```javascript
CameraPreview.start({ parent: "cameraPreview" });
```

## Methods

The package provides the following method:

### start(options)

Starts the camera preview instance and allows customization of various camera settings.

By following these steps, you can integrate the @starley/camera-preview-capacitor package seamlessly into your Capacitor project and enhance camera interactions in your application.