---
title: "Using capacitor-plugin-dynamsoft-label-recognizer"
description: "A tutorial on how to use the capacitor-plugin-dynamsoft-label-recognizer package to add text recognition capability to your apps."
created_at: "2022-09-26"
published: true
slug: "capacitor-plugin-dynamsoft-label-recognizer"
---

# Using capacitor-plugin-dynamsoft-label-recognizer

In this tutorial, we will learn how to use the `capacitor-plugin-dynamsoft-label-recognizer` package to integrate text recognition functionality into your apps using Capacitor. This package utilizes the Dynamsoft Label Recognizer SDK, which provides powerful text recognition capabilities.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project.
- Access to a valid license key for the Dynamsoft Label Recognizer SDK.

## Installation

To install the `capacitor-plugin-dynamsoft-label-recognizer` package, open your terminal and run the following command:

```bash
npm install capacitor-plugin-dynamsoft-label-recognizer
npx cap sync
```

## Initializing the Plugin

First, we need to initialize the plugin. Add the following code to your project:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPluginDynamsoftLabelRecognizer } = Plugins;

async function initializePlugin() {
  await CapacitorPluginDynamsoftLabelRecognizer.initialize();
}

initializePlugin();
```

## Initializing the License

Next, we need to initialize the license for the Dynamsoft Label Recognizer SDK. Replace `<your-license-key>` with your actual license key.

```typescript
async function initLicense() {
  await CapacitorPluginDynamsoftLabelRecognizer.initLicense({ license: '<your-license-key>' });
}

initLicense();
```

## Recognizing Text from an Image

Now that the plugin is initialized, we can use it to recognize text from an image. The image should be in base64 format. Replace `<base64-image>` with the base64 string of your image.

```typescript
async function recognizeText() {
  const result = await CapacitorPluginDynamsoftLabelRecognizer.recognizeBase64String({ base64: '<base64-image>' });
  const { results } = result;
  
  // Handle the recognized text results
  results.forEach((result) => {
    console.log(`Recognized text: ${result.text}`);
  });
}

recognizeText();
```

## Modifying Runtime Settings

You can modify the runtime settings of the Dynamsoft Label Recognizer SDK using the `updateRuntimeSettings` method. Replace `<settings>` with your desired settings object.

```typescript
async function modifyRuntimeSettings() {
  const settings = { /* your settings object */ };
  await CapacitorPluginDynamsoftLabelRecognizer.updateRuntimeSettings({ settings });
}

modifyRuntimeSettings();
```

## Resetting Runtime Settings

If you want to reset the runtime settings to their default values, you can use the `resetRuntimeSettings` method.

```typescript
async function resetSettings() {
  await CapacitorPluginDynamsoftLabelRecognizer.resetRuntimeSettings();
}

resetSettings();
```

## Setting Engine Resources Path

If you need to set a custom engine resources path, you can use the `setEngineResourcesPath` method. Replace `<path>` with the path to your custom resources.

```typescript
async function setResourcesPath() {
  await CapacitorPluginDynamsoftLabelRecognizer.setEngineResourcesPath({ path: '<path-to-resources>' });
}

setResourcesPath();
```

## Conclusion

In this tutorial, we have learned how to integrate text recognition capabilities into your Capacitor apps using the `capacitor-plugin-dynamsoft-label-recognizer` package. We covered initializing the plugin, initializing the license, recognizing text from an image, modifying runtime settings, resetting runtime settings, and setting the engine resources path. With this package, you can now easily add text recognition functionality to your apps.

Remember to replace the placeholders like `<your-license-key>`, `<base64-image>`, `<settings>`, and `<path>` with your actual values.

Feel free to explore the official documentation of the `capacitor-plugin-dynamsoft-label-recognizer` package for more advanced features and options.