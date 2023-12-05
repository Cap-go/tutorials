---
title: "Using the scandit-capacitor-datacapture-text Package"
description: "A tutorial on how to use the scandit-capacitor-datacapture-text package in your app."
created_at: "2021-10-31"
published: true
slug: "scandit-capacitor-datacapture-text"
---

# Using the scandit-capacitor-datacapture-text Package

In this tutorial, we will explore how to use the scandit-capacitor-datacapture-text package to add text recognition capabilities to your Capacitor app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor
- scandit-capacitor-datacapture-text package

If you haven't already, you can install Capacitor by running the following command:

```bash
npm install -g @capacitor/cli
```

You can install the scandit-capacitor-datacapture-text package by running the following command in your project directory:

```bash
npm install scandit-capacitor-datacapture-text
```

## Initializing the Plugin

To start using the scandit-capacitor-datacapture-text package, you need to initialize it in your app. In your `capacitor.config.json` file, add the following to the `plugins` array:

```json
{
  "name": "ScanditDataCaptureText",
  "enabled": true
}
```

## Using the Text Recognition API

The scandit-capacitor-datacapture-text package provides an easy-to-use API for performing text recognition on images. With this package, you can extract text from images, such as scanned documents, product labels, or receipts.

To use the Text Recognition API, follow these steps:

1. Import the package in your JavaScript file:

```javascript
import { ScanditDataCaptureText } from 'scandit-capacitor-datacapture-text';
```

2. Create an instance of the ScanditDataCaptureText object:

```javascript
const dataCaptureText = new ScanditDataCaptureText();
```

3. Initialize the text recognition engine:

```javascript
await dataCaptureText.initialize();
```

4. Configure the text recognition settings:

```javascript
const textRecognitionSettings = {
  recognitionMode: 'AUTO', // Use automatic recognition mode
  textFormat: 'PLAIN', // Return the extracted text as plain string
};
dataCaptureText.setSettings(textRecognitionSettings);
```

5. Capture an image or select an image from your app:

```javascript
const imageUri = 'path/to/your/image.png';
```

6. Perform text recognition on the image:

```javascript
const text = await dataCaptureText.recognizeText(imageUri);
```

7. Use the extracted text as needed:

```javascript
console.log(text);
```

## Conclusion

In this tutorial, we learned how to use the scandit-capacitor-datacapture-text package to perform text recognition in a Capacitor app. By following the provided steps, you can easily integrate text recognition functionality into your own app.

The scandit-capacitor-datacapture-text package simplifies the process of extracting text from images, making it a powerful tool for applications that require OCR (Optical Character Recognition) capabilities.

Now that you have a basic understanding of the package, feel free to explore its documentation for more advanced features and options.

Happy coding!