```md
---
"title": "Using @capacitor-community/speech-recognition Package",
"description": "A tutorial on how to use the @capacitor-community/speech-recognition package for speech recognition in a Capacitor project.",
"created_at": "2023-12-22",
"published": true,
"slug": "speech-recognition.git"
---

# The Capacitor Speech Recognition Plugin

This tutorial will guide you on how to use the `@capacitor-community/speech-recognition` package to implement speech recognition in your Capacitor project.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @capacitor-community/speech-recognition
npx cap sync
```

## Usage

First, import the `SpeechRecognition` module from the package:

```typescript
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
```

### Starting Speech Recognition

To start the speech recognition process, you can use the `start` method. Here's an example:

```typescript
const startListening = async () => {
  try {
    const result = await SpeechRecognition.start();
    console.log('Speech recognized: ', result);
  } catch (error) {
    console.error('Speech recognition error: ', error);
  }
};
```

### Stopping Speech Recognition

You can stop the speech recognition process using the `stop` method. Here's how:

```typescript
const stopListening = async () => {
  try {
    await SpeechRecognition.stop();
    console.log('Speech recognition stopped.');
  } catch (error) {
    console.error('Unable to stop speech recognition: ', error);
  }
};
```

### Checking for Permission

Before using speech recognition, it's important to check if the necessary permission has been granted. You can do this using the `getPermissionStatus` method:

```typescript
const checkPermission = async () => {
  const permissionStatus = await SpeechRecognition.getPermissionStatus();
  console.log('Permission status: ', permissionStatus);
};
```

## Conclusion

In this tutorial, you learned how to integrate speech recognition functionality in your Capacitor project using the `@capacitor-community/speech-recognition` package. Experiment with different options and features to customize speech recognition according to your requirements.
```