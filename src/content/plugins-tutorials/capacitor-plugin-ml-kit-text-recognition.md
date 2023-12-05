---
title: "Using Capacitor Plugin ML Kit Text Recognition"
description: "Learn how to use the @pantrist/capacitor-plugin-ml-kit-text-recognition package to perform text recognition in Capacitor."
created_at: "2023-04-06"
published: true
slug: "capacitor-plugin-ml-kit-text-recognition"
---

# Using Capacitor Plugin ML Kit Text Recognition

In this tutorial, we will explore how to use the `@pantrist/capacitor-plugin-ml-kit-text-recognition` package to perform text recognition in Capacitor. This plugin allows you to extract text from images using ML Kit's powerful text recognition capabilities.

## Installation

First, let's install the plugin using npm:

```bash
npm install @pantrist/capacitor-plugin-ml-kit-text-recognition
```

## Configuration

Next, we need to configure the plugin. Open your `capacitor.config.json` file and add the following configuration under the `plugins` section:

```json
{
  "plugins": {
    "@pantrist/capacitor-plugin-ml-kit-text-recognition": {
      "apiKey": "YOUR_API_KEY"
    }
  }
}
```

Replace `YOUR_API_KEY` with your actual ML Kit API key. This key is required to make requests to the ML Kit API.

## Usage

Now that the plugin is installed and configured, we can start using it in our Capacitor project.

### 1. Import the plugin

First, import the `@pantrist/capacitor-plugin-ml-kit-text-recognition` package in your code:

```typescript
import { MlKitTextRecognition } from '@pantrist/capacitor-plugin-ml-kit-text-recognition';
```

### 2. Perform text recognition

To perform text recognition on an image, use the `recognizeText` method of the `MlKitTextRecognition` class. Pass the image data as a base64-encoded string and receive the recognized text as a result:

```typescript
const imageBase64 = '...'; // Base64-encoded image data

const recognizedText = await MlKitTextRecognition.recognizeText({ imageBase64 });

console.log(recognizedText);
```

The `recognizedText` variable will contain the extracted text from the image.

## Conclusion

In this tutorial, we have learned how to use the `@pantrist/capacitor-plugin-ml-kit-text-recognition` package to perform text recognition in Capacitor. We covered installation, configuration, importing the plugin, and performing text recognition on an image.

Now you can leverage the power of ML Kit's text recognition capabilities in your Capacitor projects. Happy coding!
