---
"title": "How to Use @capacitor-community/camera-preview Plugin",
"description": "Step-by-step guide on how to integrate and use the @capacitor-community/camera-preview plugin in a Capacitor project.",
"created_at": "2023-10-27",
"published": true,
"slug": "capacitor-camera-preview-git"
---

# Using @capacitor-community/camera-preview Plugin

The `@capacitor-community/camera-preview` plugin allows for easy camera interaction in a Capacitor project. Follow the steps below to integrate and use this plugin in your app.

## Installation

First, install the plugin using npm or yarn:

```bash
npm install @capacitor-community/camera-preview
```

or

```bash
yarn add @capacitor-community/camera-preview
```

Then synchronize the Capacitor project:

```bash
npx cap sync
```

### Android Installation

For Android, ensure that you add the `CAMERA` permission in the `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

Make sure you are using Gradle 7 if you plan to use version 3 or above of the plugin.

### iOS Installation

For iOS, add the following permissions to your `Info.plist` file:

- `NSCameraUsageDescription`
- `NSMicrophoneUsageDescription` (only required for audio usage)

### Web Installation

No specific installation steps are required for the web.

## Configuration Options

The `@capacitor-community/camera-preview` plugin offers various configuration options such as setting custom position, size, alpha, focus mode, zoom, color effects, exposure mode, and white balance mode.

## Usage

To start a camera preview from the HTML code, you can use the functions provided by the plugin.

For more detailed documentation and usage examples, refer to the [official plugin repository](https://github.com/capacitor-community/camera-preview).

---

This tutorial provides a brief overview of integrating and using the `@capacitor-community/camera-preview` plugin in Capacitor projects. For more in-depth information and additional features, make sure to refer to the official documentation and examples.