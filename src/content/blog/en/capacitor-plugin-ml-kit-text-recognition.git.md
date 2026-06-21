---
title: Getting Started with Capacitor Plugin ML Kit Text Recognition
description: Learn how to use the @pantrist/capacitor-plugin-ml-kit-text-recognition package for text recognition in your Capacitor project.
created_at: 2022-01-25
published: true
slug: capacitor-plugin-ml-kit-text-recognition.git
locale: en
---

# Getting Started with Capacitor Plugin ML Kit Text Recognition

In this tutorial, we will guide you through the process of setting up and using the `@pantrist/capacitor-plugin-ml-kit-text-recognition` package for text recognition in your Capacitor project.

## Installation

To get started, you need to install the package using npm. Run the following command in your project directory:

```bash
npm install @pantrist/capacitor-plugin-ml-kit-text-recognition
npx cap sync
```

## Configuration

### Android

For Android, you can configure your app to automatically download the ML model to the device after your app is installed from the Play Store. Add the following declaration to your app's `AndroidManifest.xml` file:

```xml
<application ...>
  ...
  <meta-data
      android:name="com.google.mlkit.vision.DEPENDENCIES"
      android:value="ocr" />
  <!-- To use multiple models: android:value="ocr,model2,model3" -->
</application>
```

### iOS

No additional configuration is required for iOS.

## Usage

The plugin provides a method `detectText` to recognize text in images. Here is how you can use it in your project:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPluginMlKitTextRecognition } = Plugins;

// Replace `yourImageBase64String` with the base64-encoded image string
const options = {
  base64Image: yourImageBase64String,
};

CapacitorPluginMlKitTextRecognition.detectText(options)
  .then(result => {
    console.log('Found text:', result.text);
    console.log('Blocks:', result.blocks);
  })
  .catch(error => {
    console.error('Text detection error:', error);
  });
```

## Conclusion

In this tutorial, you learned how to integrate the Capacitor Plugin ML Kit Text Recognition into your project for text recognition tasks. Feel free to explore more features and customize the integration based on your requirements.