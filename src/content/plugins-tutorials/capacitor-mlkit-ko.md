---
title: "Using the capacitor-mlkit-ko package"
description: "In this tutorial, we will learn how to use the capacitor-mlkit-ko package to add machine learning capabilities to your Capacitor app."
created_at: "2021-06-01"
published: true
slug: "capacitor-mlkit-ko"
---

# Using the capacitor-mlkit-ko package

In this tutorial, we will explore how to integrate the `capacitor-mlkit-ko` package into your Capacitor app to leverage the powerful machine learning features it provides.

## Step 1: Installation

To begin, let's install the `capacitor-mlkit-ko` package in your Capacitor project. Open a terminal and navigate to your project directory. Run the following command:

```
npm install capacitor-mlkit-ko
```

This will install the package and its dependencies.

## Step 2: Configuration

Next, we need to configure Capacitor to recognize the `capacitor-mlkit-ko` package. Open the `capacitor.config.json` file in your project's root directory and add the following code:

```json
{
  "plugins": {
    "CapacitorMLKitKO": {
      "mlKitApiKey": "YOUR_API_KEY"
    }
  }
}
```

Replace `YOUR_API_KEY` with your actual API key for ML Kit.

## Step 3: Detecting Objects

Now, let's start using the machine learning capabilities offered by `capacitor-mlkit-ko`. We will begin by detecting objects in an image. Add the following code to a script file in your project:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorMLKitKO } = Plugins;

async function detectObjects(imagePath) {
  try {
    const result = await CapacitorMLKitKO.detectObjects({ imagePath });
    console.log('Detected objects:', result.objects);
  } catch (error) {
    console.error('Object detection failed:', error);
  }
}

// Usage example
detectObjects('path/to/image.jpg');
```

Replace `'path/to/image.jpg'` with the actual path to your target image.

## Step 4: Recognizing Text

Another useful feature of `capacitor-mlkit-ko` is the ability to recognize text in images. To perform text recognition, add the following code to your project:

```javascript
async function recognizeText(imagePath) {
  try {
    const result = await CapacitorMLKitKO.recognizeText({ imagePath });
    console.log('Recognized text:', result.text);
  } catch (error) {
    console.error('Text recognition failed:', error);
  }
}

// Usage example
recognizeText('path/to/image.jpg');
```

Replace `'path/to/image.jpg'` with the actual path to your target image.

## Conclusion

In this tutorial, we learned how to use the `capacitor-mlkit-ko` package to add machine learning capabilities to a Capacitor app. We explored object detection and text recognition features provided by the package. With these powerful tools, you can now enhance your app with machine learning functionalities.

Remember to refer to the official documentation of `capacitor-mlkit-ko` for more advanced usage and additional features.

Happy coding!