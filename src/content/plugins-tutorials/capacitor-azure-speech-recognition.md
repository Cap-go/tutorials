---
title: "Using @trieutulong/speech-recognition Package"
description: "This tutorial will guide you on how to use the @trieutulong/speech-recognition package to implement speech recognition in your Capacitor applications."
created_at: "2021-10-11"
published: true
slug: "capacitor-azure-speech-recognition"
---

# Using @trieutulong/speech-recognition Package

In this tutorial, we will learn how to use the `@trieutulong/speech-recognition` package to implement speech recognition in your Capacitor applications. This package provides a simple and efficient way to handle speech recognition functionality in your mobile applications.

## Installation

To get started, you need to install the `@trieutulong/speech-recognition` package using npm or yarn. Open a terminal and navigate to your project directory, then run the following command:

```bash
npm install @trieutulong/speech-recognition
```

## Usage

Import the `SpeechRecognition` module from `@trieutulong/speech-recognition` in your TypeScript file:

```typescript
import { SpeechRecognition } from '@trieutulong/speech-recognition';
```

### Check if Speech Recognition is Supported

Before using the speech recognition functionality, you should check if the device supports it. Use the `isSupported` method to check if speech recognition is supported:

```typescript
const isSupported = await SpeechRecognition.isSupported();

if (isSupported) {
  console.log('Speech recognition is supported.');
} else {
  console.log('Speech recognition is not supported.');
}
```

### Start Speech Recognition

To start the speech recognition, call the `start` method. You can optionally pass a language parameter to specify the language for speech recognition. The default language is the device's language.

```typescript
const startRecognition = async () => {
  try {
    await SpeechRecognition.start();
    console.log('Speech recognition started.');
  } catch (error) {
    console.error('Failed to start speech recognition:', error);
  }
};

startRecognition();
```

### Stop Speech Recognition

To stop the speech recognition, call the `stop` method:

```typescript
const stopRecognition = async () => {
  try {
    await SpeechRecognition.stop();
    console.log('Speech recognition stopped.');
  } catch (error) {
    console.error('Failed to stop speech recognition:', error);
  }
};

stopRecognition();
```

### Get Speech Recognition Results

You can listen for the `result` event to receive the speech recognition results:

```typescript
SpeechRecognition.addListener('result', (event) => {
  const { results } = event;
  console.log('Speech recognition results:', results);
});
```

### Request Microphone Permission

Some platforms require microphone permission to use speech recognition. You can use the `requestPermission` method to request the microphone permission:

```typescript
const requestPermission = async () => {
  try {
    await SpeechRecognition.requestPermission();
    console.log('Microphone permission granted.');
  } catch (error) {
    console.error('Failed to request microphone permission:', error);
  }
};

requestPermission();
```

## Conclusion

In this tutorial, you learned how to use the `@trieutulong/speech-recognition` package to implement speech recognition in your Capacitor applications. You explored how to check if speech recognition is supported, start and stop speech recognition, get speech recognition results, and request microphone permission. With this knowledge, you can now integrate speech recognition functionality into your mobile applications.