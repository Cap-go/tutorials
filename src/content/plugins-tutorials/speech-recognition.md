# Using @capacitor-community/speech-recognition

In this tutorial, we will go through the steps of using the `@capacitor-community/speech-recognition` package for speech recognition in your Capacitor app.

## Step 1: Installation

First, you need to install the package by running the following command:

```bash
npm install @capacitor-community/speech-recognition
```

## Step 2: Sync Native Files

Next, sync the native files by running the following command:

```bash
npx cap sync
```

## Step 3: iOS Configuration

For iOS, you need to add the following usage descriptions in your `Info.plist` file:

- `NSSpeechRecognitionUsageDescription` (`Privacy - Speech Recognition Usage Description`)
- `NSMicrophoneUsageDescription` (`Privacy - Microphone Usage Description`)

## Step 4: Usage

Now, you can start using the speech recognition features in your app. Here's an example of how to use it:

```typescript
import { SpeechRecognition } from "@capacitor-community/speech-recognition";

// Check if speech recognition is available on the device
const isAvailable = await SpeechRecognition.available();
console.log("Speech recognition available:", isAvailable);

// Start listening for utterance
await SpeechRecognition.start({
  language: "en-US",
  maxResults: 2,
  prompt: "Say something",
  partialResults: true,
  popup: true,
});

// Listen to partial results
SpeechRecognition.addListener("partialResults", (data) => {
  console.log("Partial results:", data.matches);
});

// Stop listening
await SpeechRecognition.stop();
```

## Step 5: Additional Methods

The `@capacitor-community/speech-recognition` package provides additional methods for working with speech recognition. Here are some of them:

- `getSupportedLanguages()`: Returns a list of supported languages for speech recognition.
- `hasPermission()`: Checks if the app has permission to use speech recognition.
- `requestPermission()`: Requests permission to use speech recognition.

You can refer to the package documentation for more information on these methods.

And that's it! You have now learned how to use the `@capacitor-community/speech-recognition` package for speech recognition in your Capacitor app.