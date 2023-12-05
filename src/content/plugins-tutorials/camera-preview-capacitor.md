---
title: "Using @starley/camera-preview-capacitor"
description: "A tutorial on how to use the @starley/camera-preview-capacitor package to interact with the camera in Capacitor."
created_at: "2022-01-10"
published: true
slug: "camera-preview-capacitor"
---

# Using @starley/camera-preview-capacitor

In this tutorial, we will learn how to use the @starley/camera-preview-capacitor package to interact with the camera in Capacitor. This package allows you to start a camera preview from HTML code, maintain HTML interactivity, set camera color effects, and much more.

## Installation

To get started, you need to install the @starley/camera-preview-capacitor package. Open your terminal and run the following command:

```bash
npm install @starley/camera-preview-capacitor
```

Next, you need to sync the project with Capacitor. Run the following command:

```bash
npx cap sync
```

## Android Configuration

If you are using Android, you need to add the CAMERA permission to the AndroidManifest.xml file. Open the `android/app/src/main/AndroidManifest.xml` file and add the following line above the closing `</manifest>` tag:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

Make sure to save the changes after adding the permission.

## iOS Configuration

For iOS, you need to add two permissions to the `Info.plist` file. Add the following permissions with the corresponding descriptions:

```xml
<key>NSCameraUsageDescription</key>
<string>Access to the camera is required for capturing photos and videos.</string>
<key>NSMicrophoneUsageDescription</key>
<string>Access to the microphone is required for recording audio with videos.</string>
```

If you don't need audio functionality, you can set the `disableAudio` option to `true` in your code, which will also disable the microphone permission request.

## Web Configuration

No additional configuration is required for web usage. You can directly use the @starley/camera-preview-capacitor package in your web project.

## Basic Usage

To use the @starley/camera-preview-capacitor package, you need to import it in your code:

```typescript
import { CameraPreview } from '@starley/camera-preview-capacitor';
```

Create an instance of the CameraPreview class:

```typescript
const cameraPreview = new CameraPreview();
```

Now, you can start the camera preview by calling the `start` method:

```typescript
cameraPreview.start();
```

This will open the camera and show the preview on the screen.

## Additional Options

The @starley/camera-preview-capacitor package provides various additional options to customize the camera preview. Some of the available options include:

- `setColorEffect`: Set the camera color effect.
- `setCustomPosition`: Set a custom position for the camera preview box.
- `setCustomSize`: Set a custom size for the preview box.
- `setCustomAlpha`: Set a custom alpha for the preview box.
- `setFocusMode`: Set the focus mode of the camera.
- `setZoom`: Set the zoom level of the camera.
- `setExposureMode`: Set the exposure mode of the camera