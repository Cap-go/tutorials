---
"title": "Using Capacitor Camera Preview Package Tutorial"
"description": "Step-by-step guide on how to use the @capacitor-community/camera-preview package in your Capacitor project."
"created_at": "2022-02-28"
"published": true
"slug": "camera-preview.git"
---

# Using Capacitor Camera Preview Package Tutorial

In this tutorial, we will walk through how to incorporate the @capacitor-community/camera-preview package into your Capacitor project for camera interaction from Javascript and HTML.

## Installation

First, install the package using npm or yarn:

```bash
yarn add @capacitor-community/camera-preview

or

npm install @capacitor-community/camera-preview
```

Next, sync the Capacitor project:

```bash
npx cap sync
```

### Android Installation Steps

For Android, ensure you have the correct permissions in the AndroidManifest.xml file:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

### iOS Installation Steps

For iOS, add the required permissions to your Info.plist file:

```xml
<key>NSCameraUsageDescription</key>
<string>Describe why your app needs to use the camera</string>
<key>NSMicrophoneUsageDescription</key>
<string>Describe why your app needs to use the microphone (if applicable)</string>
```

### Web Installation Steps

For web, simply include the package in your project and sync Capacitor.

## Features

- Start a camera preview from HTML code.
- Maintain HTML interactivity.
- Drag the preview box.
- Set camera color effects.
- Send the preview box to the back of the HTML content.
- Set a custom position, size, and alpha for the preview box.
- Manage focus mode, zoom, color effects, exposure mode, white balance mode, and exposure compensation.
- Tap to focus functionality.

This tutorial provides a comprehensive guide to leveraging the @capacitor-community/camera-preview package for camera functionality in your Capacitor project.
```
```