```markdown
---
"title": "Using Capacitor Camera Preview Plugin"
"description": "A comprehensive tutorial on integrating the @capacitor-community/camera-preview package into your Capacitor project."
"created_at": "2023-12-10"
"published": true
"slug": "camera-preview-git"
---

# Using Capacitor Camera Preview Plugin

The Capacitor Camera Preview plugin by **@capacitor-community** allows you to interact with the device camera directly from Javascript and HTML. This tutorial will guide you through the installation and usage of this plugin in your Capacitor project.

## Installation

To install the plugin, run the following command in your project directory:

```bash
yarn add @capacitor-community/camera-preview
```

or

```bash
npm install @capacitor-community/camera-preview
```

Next, sync the changes with Capacitor by running:

```bash
npx cap sync
```

### Android Installation Steps

For Android, you may need to add the CAMERA permission to your `AndroidManifest.xml` file. Open `android/app/src/main/AndroidManifest.xml` and add the following line above the closing `</manifest>` tag:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

For more detailed instructions, refer to the [Capacitor documentation](https://capacitorjs.com/docs/android/configuration#configuring-androidmanifestxml).

### iOS Installation Steps

On iOS, you will need to add permissions to `Info.plist`. Follow the Capacitor docs and add permissions for `NSCameraUsageDescription` and `NSMicrophoneUsageDescription` if necessary.

### Web Installation Steps

If you are using Capacitor 5 with version 5 of the plugin, follow the regular installation steps for Capacitor plugins.

## Usage

The Camera Preview plugin provides several features and options including starting a camera preview from HTML, maintaining HTML interactivity, setting camera color effects, and more. Here is an example of how you can start a camera preview from your HTML code:

```javascript
import { CameraPreview } from "@capacitor-community/camera-preview";

CameraPreview.start();
```

For a complete list of available features and options, refer to the plugin documentation.

## Conclusion

Integrating the Capacitor Camera Preview plugin into your project allows for seamless interaction with the device's camera. Experiment with the various options provided by the plugin to enhance the camera experience in your app.
```
```