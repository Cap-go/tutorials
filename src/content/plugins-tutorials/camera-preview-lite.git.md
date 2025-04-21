---
"title": "Using @michaelwolz/camera-preview-lite Package"
"description": "A tutorial on how to integrate and use the @michaelwolz/camera-preview-lite package for camera interaction in Capacitor projects."
"created_at": "2021-10-21"
"published": true
"slug": "camera-preview-lite.git"
---

# Using @michaelwolz/camera-preview-lite Package

This tutorial will guide you through the steps to integrate and use the `@michaelwolz/camera-preview-lite` package in your Capacitor project for camera interaction.

## Installation

First, install the package using npm or yarn:

```bash
yarn add @michaelwolz/camera-preview-lite

or

npm install @michaelwolz/camera-preview-lite
```

After installation, synchronize the Capacitor project:

```bash
npx cap sync
```

### Android

If you are using Gradle 4, you may need to use an older version of the plugin. Ensure you have the necessary permissions in the `AndroidManifest.xml`.

### iOS

Add the required permissions to your `Info.plist` file for iOS.

### Web

For web integration, make sure to follow the instructions for importing and using the plugin.

## Getting Started

To start the camera preview instance, use the following method:

```javascript
import { CameraPreview } from '@capacitor-community/camera-preview';

// Add a div in your HTML with id "cameraPreview"
// e.g. <div id="cameraPreview"></div>

CameraPreview.start({ parent: "cameraPreview" });
```

By following these steps, you can now effectively use the camera functionality provided by the `@michaelwolz/camera-preview-lite` package in your Capacitor project.
```
```