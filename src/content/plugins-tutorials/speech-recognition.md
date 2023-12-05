---
title: "Using @capacitor-community/speech-recognition"
description: "A tutorial on how to use the @capacitor-community/speech-recognition package for speech recognition in Capacitor"
created_at: "2023-04-01"
published: true
slug: "speech-recognition"
---
# Using @capacitor-community/speech-recognition

In this tutorial, we will learn how to use the @capacitor-community/speech-recognition package to enable speech recognition in your Capacitor app. This package allows you to convert spoken language into text, opening up possibilities for voice-controlled interfaces, voice commands, and more.

## Installation

To get started, you need to install the @capacitor-community/speech-recognition package. Use the following command to install it:

```bash
npm install @capacitor-community/speech-recognition
```

## Configuration

No configuration is required for this package.

## Usage

To use the speech recognition feature, follow these steps:

1. Import the SpeechRecognition module from '@capacitor-community/speech-recognition':

   ```typescript
   import { SpeechRecognition } from '@capacitor-community/speech-recognition';
   ```

2. Request permission to access the microphone. You should request this permission before starting speech recognition. Use the following code to request permission:

   ```typescript
   await SpeechRecognition.requestPermissions();
   ```

   This will prompt the user to grant permission to use the microphone. If the permission is granted, you can proceed with speech recognition.

3. Start speech recognition by calling the `start` method:

   ```typescript
   await SpeechRecognition.start();
   ```

   The speech recognition will now listen for the user's speech and convert it into text.

4. Listen for the `result` event to receive the transcribed speech. This event is emitted when the user has finished speaking and the recognition engine has processed the input. Use the following code to listen for the result:

   ```typescript
   SpeechRecognition.addListener('result', (result) => {
     const transcribedText = result.transcriptions[0];
     console.log('Transcribed text:', transcribedText);
   });
   ```

   The `result` object contains an array of transcriptions, with the most accurate transcription at index 0.

5. Stop speech recognition by calling the `stop` method:

   ```typescript
   await SpeechRecognition.stop();
   ```

   This will stop the speech recognition and free up system resources.

6. Clean up by removing the event listener when you no longer need speech recognition:

   ```typescript
   SpeechRecognition.removeAllListeners('result');
   ```

That's it! You have now learned how to use the @capacitor-community/speech-recognition package for speech recognition in your Capacitor app. Experiment with different use cases and explore the possibilities of voice-controlled interfaces.

Enjoy building your voice-enabled app with Capacitor!

For more information, refer to the official documentation of the @capacitor-community/speech-recognition package.