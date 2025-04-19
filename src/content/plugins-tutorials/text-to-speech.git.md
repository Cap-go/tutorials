---
"title": "Using @capacitor-community/text-to-speech Package Tutorial"
"description": "A tutorial on integrating the @capacitor-community/text-to-speech package for synthesizing speech from text in Capacitor."
"created_at": "2023-12-20"
"published": true
"slug": "text-to-speech-git"
---

# Text to Speech

Capacitor community plugin for synthesizing speech from text.

## Installation

```
npm install @capacitor-community/text-to-speech
npx cap sync
```

### Android

According to the Android documentation, apps targeting **Android 11** should declare `TextToSpeech.Engine.INTENT_ACTION_TTS_SERVICE` in the queries elements of their manifest:

```xml
<queries>
  <intent>
    <action android:name="android.intent.action.TTS_SERVICE" />
  </intent>
</queries>
```

## Configuration

No configuration required for this plugin.

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
    queueStrategy: 1
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
```