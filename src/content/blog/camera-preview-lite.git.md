---
"title": "Using Camera Preview Lite Plugin with Capacitor",
"description": "A step-by-step guide on how to use the @michaelwolz/camera-preview-lite package in your Capacitor project for camera functionality.",
"created_at": "2023-10-17",
"published": true,
"slug": "camera-preview-lite-git"
---

# Using Camera Preview Lite Plugin with Capacitor

To use the `@michaelwolz/camera-preview-lite` package in your Capacitor project for camera functionality, follow these steps:

## Installation

```bash
yarn add @michaelwolz/camera-preview-lite

or

npm install @michaelwolz/camera-preview-lite
```

Then run:

```bash
npx cap sync
```

### Extra Android Installation Steps

It's important to note that `camera-preview` 3+ requires Gradle 7. If you are using Gradle 4, please use version 2 of this plugin from [here](https://github.com/capacitor-community/camera-preview/tree/v2.1.0).

Open `android/app/src/main/AndroidManifest.xml`, and above the closing `</manifest>` tag, add this line to request the CAMERA permission:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

For more help, consult the [Capacitor documentation](https://capacitorjs.com/docs/android/configuration#configuring-androidmanifestxml).

### Extra iOS Installation Steps

You will need to add two permissions to `Info.plist`. Follow the [Capacitor documentation](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) and add permissions with the raw keys `NSCameraUsageDescription`.

### Extra Web Installation Steps

1. Add `import { CameraPreview } from '@capacitor-community/camera-preview';` in the file where you want to use the plugin.
2. In your HTML file, add `<div id="cameraPreview"></div>`.
3. Use `CameraPreview.start({ parent: "cameraPreview"});` to start the camera preview instance.

## Methods

### start(options)

This method starts the camera preview instance and enables camera interaction from JavaScript and HTML.

By following these steps, you can efficiently integrate the Camera Preview Lite Plugin into your Capacitor project for seamless camera functionality.