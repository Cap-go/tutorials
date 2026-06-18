---
"title": "Using Text-to-Speech Package in Capacitor",
"description": "Learn how to use the @capacitor-community/text-to-speech package to synthesize speech from text in your Capacitor apps.",
"created_at": "2022-03-05",
"published": true,
"slug": "text-to-speech.git"
---

# Text to Speech

This tutorial will guide you through the process of using the `@capacitor-community/text-to-speech` package to synthesize speech from text in your Capacitor apps.

## Installation

First, install the package by running the following command:

```bash
npm install @capacitor-community/text-to-speech
npx cap sync
```

## Usage

You can now use the `TextToSpeech` methods to interact with the Text-to-Speech functionality. Here is an example of how to speak text:

```typescript
import { TextToSpeech } from '@capacitor-community/text-to-speech';

const speak = async () => {
  await TextToSpeech.speak({
    text: 'This is a sample text.',
    lang: 'en-US',
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    category: 'ambient',
  });
};

const stop = async () => {
  await TextToSpeech.stop();
};

const getSupportedLanguages = async () => {
  const languages = await TextToSpeech.getSupportedLanguages();
};

const getSupportedVoices = async () => {
  const voices = await TextToSpeech.getSupportedVoices();
};

const isLanguageSupported = async (lang: string) => {
  const isSupported = await TextToSpeech.isLanguageSupported({ lang });
};
```

## Additional Functionality

In addition to speaking text, the `TextToSpeech` API provides methods for retrieving supported languages and voices, as well as checking if a specific language is supported. You can incorporate these functions into your app as needed.

That's it! You've now learned how to integrate text-to-speech functionality into your Capacitor apps using the `@capacitor-community/text-to-speech` package. Happy coding!
