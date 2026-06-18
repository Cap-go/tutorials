---
title: "Using @capgo/capacitor-speech-recognition Package Tutorial"
description: "This tutorial will guide you on how to use the @capgo/capacitor-speech-recognition package to implement speech recognition in your Capacitor applications."
created_at: 2021-10-27
published: true
slug: capacitor-speech-recognition.git
locale: en
---

# Using @capgo/capacitor-speech-recognition Package Tutorial

Learn how to implement speech recognition in your Capacitor applications using the @capgo/capacitor-speech-recognition package.

## Installation

```bash
$ npm i --save @capgo/capacitor-speech-recognition
```

## API 

### startListening

```ts
import {SpeechRecognition} from '@capacitor/speech-recognition';

SpeechRecognition.startListening();
```

### stopListening

```ts
import {SpeechRecognition} from '@capacitor/speech-recognition';

SpeechRecognition.stopListening();
```

### getSupportedLanguages

```ts
import {SpeechRecognition} from '@capacitor/speech-recognition';

SpeechRecognition.getSupportedLanguages();
```

## Example

```ts
import {SpeechRecognition} from '@capacitor/speech-recognition';

const handleSpeechRecognition = async () => {
    const { matches } = await SpeechRecognition.startListening();
    console.log('Matches:', matches);
}

handleSpeechRecognition();
```

```bash
npm start
