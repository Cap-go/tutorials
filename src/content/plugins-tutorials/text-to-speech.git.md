```
---
"title": "Markdown Tutorial for @capacitor-community/text-to-speech Package",
"description": "This blog post will guide you through using the @capacitor-community/text-to-speech package to synthesize speech from text.",
"created_at": "2023-10-13",
"published": true,
"slug": "text-to-speech-git"
---

# Markdown Tutorial for @capacitor-community/text-to-speech Package

This tutorial will walk you through the usage of the `@capacitor-community/text-to-speech` package, which allows you to synthesize speech from text.

## Installation

To install the package, run the following command:

```bash
npm install @capacitor-community/text-to-speech
npx cap sync
```

## Usage

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

## API

The following API methods are available in the `@capacitor-community/text-to-speech` package:

- `speak(options)`: Synthesize speech from text.
- `stop()`: Stop the ongoing speech synthesis.
- `getSupportedLanguages()`: Get the list of supported languages for speech synthesis.
- `getSupportedVoices()`: Get the list of supported voices for speech synthesis.
- `isLanguageSupported({ lang })`: Check if a specific language is supported for speech synthesis.

This tutorial covers the basics of using the `@capacitor-community/text-to-speech` package. For more advanced usage and configurations, refer to the official documentation.
```