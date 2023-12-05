---
title: "Using the capacitor-plugin-speech-to-text package"
description: "A tutorial on how to use the capacitor-plugin-speech-to-text package to enable speech recognition in Capacitor apps."
created_at: "2022-08-31"
published: true
slug: "capacitor-plugin-speech-to-text"
---

# Using the capacitor-plugin-speech-to-text package

In this tutorial, we will learn how to use the capacitor-plugin-speech-to-text package to enable speech recognition in Capacitor apps. The package provides a simple API to convert speech into text, allowing users to interact with your app through voice commands.

## Installation

To get started, install the capacitor-plugin-speech-to-text package by running the following command:

```bash
$ npm install capacitor-plugin-speech-to-text
```

## Configuration

No additional configuration is required for this plugin.

## Usage

### Import the package

In your TypeScript file, import the SpeechToText module from the capacitor-plugin-speech-to-text package:

```typescript
import { SpeechToText } from 'capacitor-plugin-speech-to-text';
```

### Check if speech recognition is supported

Before using the speech recognition feature, it's important to check if the device supports it. Use the `SpeechToText.isRecognitionAvailable()` method to determine if speech recognition is available:

```typescript
const isAvailable = await SpeechToText.isRecognitionAvailable();
if (isAvailable) {
  // Speech recognition is supported
} else {
  // Speech recognition is not supported
}
```

### Request permission

To use speech recognition, you need to request the necessary permissions from the user. Use the `SpeechToText.requestPermission()` method to request permission:

```typescript
const result = await SpeechToText.requestPermission();
if (result.granted) {
  // Permission granted, you can now use speech recognition
} else {
  // Permission denied, speech recognition will not work
}
```

### Start speech recognition

To start listening for speech and convert it into text, use the `SpeechToText.start()` method:

```typescript
SpeechToText.start();
```

### Listen for speech recognition results

To receive the converted text from speech recognition, listen for the `result` event:

```typescript
SpeechToText.addListener('result', (result) => {
  const {text} = result;
  console.log(`Recognized text: ${text}`);
});
```

### Stop speech recognition

To stop speech recognition, use the `SpeechToText.stop()` method:

```typescript
SpeechToText.stop();
```

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-speech-to-text package to enable speech recognition in Capacitor apps. We covered the installation process, checking if speech recognition is supported, requesting permission, starting speech recognition, listening for results, and stopping speech recognition. By following this tutorial, you should now be able to incorporate speech recognition functionality into your Capacitor apps.
