---
title: "Using capacitor-google-mlkit-vision Package"
description: "A tutorial on how to use the capacitor-google-mlkit-vision package for integrating Google ML Kit Vision into a Capacitor project."
created_at: "2022-01-01"
published: true
slug: "capacitor-google-mlkit-vision"
---

# Using capacitor-google-mlkit-vision Package

In this tutorial, we will learn how to use the capacitor-google-mlkit-vision package to integrate Google ML Kit Vision into a Capacitor project. Capacitor ML Kit is a collection of Capacitor plugins that enables the use of the ML Kit SDKs in Capacitor. The capacitor-google-mlkit-vision package specifically focuses on the ML Vision part, which has been split from Firebase as of now[^1].

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor 5 is installed in your project.
- Android and/or iOS platforms are set up in your Capacitor project.

## Installation

To install the capacitor-google-mlkit-vision package, follow these steps:

1. Open a terminal and navigate to your Capacitor project's root directory.
2. Run the following command to install the package:

```bash
npm install capacitor-google-mlkit-vision
```

3. After the installation is complete, run the following command to sync the native projects:

```bash
npx cap sync
```

## Configuration

Once the package is installed, you need to configure your project to use the Google ML Kit Vision API. Follow these steps to configure your project:

### Android Configuration

1. Open the `android/app/src/main/AndroidManifest.xml` file of your Capacitor project.
2. Add the following permissions inside the `<manifest>` tag:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

3. Add the following metadata inside the `<application>` tag:

```xml
<meta-data
    android:name="com.google.mlkit.vision.DEPENDENCIES"
    android:value="ocr,label" />
```

### iOS Configuration

1. Open the `ios/App/App/Info.plist` file of your Capacitor project.
2. Add the following permission to access the camera:

```xml
<key>NSCameraUsageDescription</key>
<string>This app requires access to the camera for OCR and image labeling features.</string>
```

## Usage

Now that the capacitor-google-mlkit-vision package is installed and configured, you can start using it in your Capacitor project. Here's an example of how to use the ML Vision OCR feature:

```typescript
import { Plugins } from '@capacitor/core';
const { GoogleMLKitVision } = Plugins;

async function recognizeText(): Promise<string> {
  const result = await GoogleMLKitVision.ocrTextRecognition();
  return result.text;
}
```

In the above example, we import the `GoogleMLKitVision` plugin from `@capacitor/core`, and then use the `ocrTextRecognition` method to perform OCR text recognition. The result contains the recognized text.

You can explore the `GoogleMLKitVision` plugin's documentation for more features and usage examples.

## Conclusion

In this tutorial, we have learned how to install and configure the capacitor-google-mlkit-vision package to integrate Google ML Kit Vision into a Capacitor project. We have also seen an example of how to use the OCR text recognition feature. You can now leverage the power of ML Kit Vision in your Capacitor apps and explore other features offered by the capacitor-google-mlkit-vision package.

[^1]: [Capacitor Google MLKit Vision](https://github.com/trancee/capacitor-google-mlkit-vision)