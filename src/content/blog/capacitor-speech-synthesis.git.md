```markdown
---
"title": "Using @capgo/capacitor-speech-synthesis Package"
"description": "A tutorial on how to use the @capgo/capacitor-speech-synthesis package for speech synthesis in Capacitor."
"created_at": "2022-03-03"
"published": true
"slug": "capacitor-speech-synthesis.git"
---


# Using @capgo/capacitor-speech-synthesis Package

In this tutorial, we will learn how to use the @capgo/capacitor-speech-synthesis package for speech synthesis in Capacitor.

## Installation

To install the package, run the following npm command:

```bash
$ npm i --save @capgo/capacitor-speech-synthesis
```

## API

### speak

To speak a text using the package, use the following code snippet:

```ts
import { SpeechSynthesis } from '@capgo/capacitor-speech-synthesis';

SpeechSynthesis.speak({
  value: 'Hello',
  volume: 0.75,
  speechRate: 0.8,
});
```

Make sure to adjust the `value`, `volume`, and `speechRate` parameters as needed for your application.

By following these steps, you can easily integrate the @capgo/capacitor-speech-synthesis package into your Capacitor project for speech synthesis functionality.
```