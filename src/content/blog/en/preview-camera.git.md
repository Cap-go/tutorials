---
title: "How to Use the @capacitor-community/camera-preview Plugin"
description: "A detailed tutorial on how to use the @capacitor-community/camera-preview plugin in your Capacitor project."
created_at: 2022-01-11
published: true
slug: preview-camera.git
locale: en
---

# Using the @capacitor-community/camera-preview Plugin

This tutorial will guide you through the process of integrating and using the `@capacitor-community/camera-preview` plugin in your Capacitor project.

## Installation

To install the plugin, use either Yarn or npm:

```bash
yarn add @capacitor-community/camera-preview

or

npm install @capacitor-community/camera-preview
```

After installing the plugin, sync your Capacitor project with:

```bash
npx cap sync
```

### Android Installation Steps

If you are using Android, make sure to add the CAMERA permission by modifying the `AndroidManifest.xml` file. Add the following line just before the closing `</manifest>` tag:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

For detailed Android installation steps, refer to the Android configuration in the Capacitor docs.

### iOS Installation Steps

For iOS, you need to add permissions to `Info.plist`. Make sure to follow the Capacitor docs and add permissions with the raw keys `NSCameraUsageDescription` and `NSMicrophoneUsageDescription`. 

If you are not using audio, set the `disableAudio` option to `true` to avoid unnecessary microphone permission requests.

### Web Installation Steps

For web projects, follow the standard installation steps provided by Capacitor. The `@capacitor-community/camera-preview` plugin is designed to allow camera interaction from JavaScript and HTML on various platforms.

## PRs and Contributions

If you have any improvements or additions, feel free to contribute by submitting a Pull Request. Your contributions are greatly appreciated by the maintainers.

Happy coding with the camera preview plugin!
