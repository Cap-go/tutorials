---
title: "Using the capacitor-camera-preview Package"
description: "A tutorial on how to use the capacitor-camera-preview package for camera interaction in Capacitor apps."
created_at: "2022-01-05"
published: true
slug: "capacitor-camera-preview"
---

# Using the capacitor-camera-preview Package

## Introduction

The `@capacitor-community/camera-preview` package is a Capacitor plugin that allows camera interaction from JavaScript and HTML. It is based on the `cordova-plugin-camera-preview` and provides a simple way to integrate camera functionality into Capacitor apps. This tutorial will guide you through the installation process and demonstrate how to use the camera preview features.

## Installation

To get started, you need to install the `@capacitor-community/camera-preview` package in your Capacitor project. Open a terminal and run one of the following commands:

```shell
yarn add @capacitor-community/camera-preview
```

or

```shell
npm install @capacitor-community/camera-preview
```

Once the installation is complete, sync your project with Capacitor by running:

```shell
npx cap sync
```

## Android Installation Steps

If you are targeting Android, there are a few additional installation steps to follow. First, open the `android/app/src/main/AndroidManifest.xml` file in your project and add the following line above the closing `</manifest>` tag to request the CAMERA permission:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

Note that `camera-preview` 3+ requires Gradle 7. If you are using Gradle 4, you should use an older version of the plugin (version 2).

## iOS Installation Steps

If you are targeting iOS, you need to add two permissions to the `Info.plist` file in your project. Follow the Capacitor documentation and add permissions with the raw keys `NSCameraUsageDescription` and `NSMicrophoneUsageDescription`. The `NSMicrophoneUsageDescription` is only required if audio will be used. Alternatively, you can set the `disableAudio` option to `true` to disable the microphone permission request.

## Web Installation Steps

If you are targeting the web platform, you can skip the additional installation steps mentioned above. The `@capacitor-community/camera-preview` package is primarily designed for native platforms, and the camera functionality may not be available on the web.

## Usage

You can now start using the `@capacitor-community/camera-preview` package in your application code. Here is a basic example of how to start a camera preview:

```javascript
import { CameraPreview } from '@capacitor-community/camera-preview';

async function startCameraPreview() {
  await CameraPreview.start();
}
```

This code snippet imports the `CameraPreview` object from the package and calls the `start()` method to start the camera preview.

There are various other features and options available with the `@capacitor-community/camera-preview` package, such as setting the camera color effect, controlling the focus mode and zoom, and tapping to focus. You can refer to the package documentation for more details on these features.

## Conclusion

In this tutorial, we explored how to install and use the `@capacitor-community/camera-preview` package for camera interaction in Capacitor apps. We covered the installation steps for Android