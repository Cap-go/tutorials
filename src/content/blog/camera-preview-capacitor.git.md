---
title: "Using the Camera Preview Capacitor Plugin"
description: "Learn how to use the @starley/camera-preview-capacitor package to interact with the camera in your Capacitor project."
created_at: "2023-10-28"
published: true
slug: camera-preview-capacitor.git
---

# Installation

To get started with the `@starley/camera-preview-capacitor` package, you need to follow these steps:

1. Install the package using Yarn or npm:
   
   ```bash
   yarn add @starley/camera-preview-capacitor
   ```

   ```bash
   npm install @starley/camera-preview-capacitor
   ```

2. Synchronize the project with Capacitor:
   
   ```bash
   npx cap sync
   ```

## Extra Android Installation Steps

If you are on Android, you need to:

1. Open `android/app/src/main/AndroidManifest.xml` and add the following permission just before the closing `</manifest>` tag:
   
   ```xml
   <uses-permission android:name="android.permission.CAMERA" />
   ```

## Extra iOS Installation Steps

For iOS, you need to add permissions to `Info.plist`:

1. Add the keys `NSCameraUsageDescription` and `NSMicrophoneUsageDescription` to your `Info.plist` file.

## Extra Web Installation Steps

If you are targeting the web, there are additional steps:

1. Make sure to include necessary permissions and configurations for web projects following Capacitor documentation.

By following these steps, you will be able to integrate the camera capabilities into your Capacitor project seamlessly. Enjoy using the `@starley/camera-preview-capacitor` package!