---
title: "Using capacitor-speech-synthesis Package"
description: "This tutorial will guide you on how to use the capacitor-speech-synthesis package to implement speech synthesis in your Capacitor app."
created_at: "2022-03-10"
published: true
slug: "capacitor-speech-synthesis"
---

# Using capacitor-speech-synthesis Package

In this tutorial, we will learn how to use the `capacitor-speech-synthesis` package to implement speech synthesis in your Capacitor app.

## Installation

To get started, you need to install the `capacitor-speech-synthesis` package. Open your terminal and run the following command in your project directory:

```bash
npm i --save capacitor-speech-synthesis
```

## Importing the Package

Once the package is installed, you can import the `SpeechSynthesis` class from the `capacitor-speech-synthesis` package in your TypeScript file:

```ts
import { SpeechSynthesis } from 'capacitor-speech-synthesis';
```

## Using the `speak` Method

The `capacitor-speech-synthesis` package provides a `speak` method to synthesize speech. Let's see how to use this method:

```ts
SpeechSynthesis.speak({
    value: 'Hello',
    volume: 0.75,
    speechRate: 0.8,
});
```

In the above code snippet, we are calling the `speak` method and passing an object with the following properties:

- `value`: The text to be spoken.
- `volume`: The volume of the speech (range: 0.0 to 1.0).
- `speechRate`: The rate of the speech (range: 0.1 to 10.0).

You can customize these properties as per your requirements.

## Complete Example

Here's a complete example demonstrating the usage of the `capacitor-speech-synthesis` package:

```ts
import { SpeechSynthesis } from 'capacitor-speech-synthesis';

SpeechSynthesis.speak({
    value: 'Hello',
    volume: 0.75,
    speechRate: 0.8,
});
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-speech-synthesis` package to implement speech synthesis in your Capacitor app. You can now integrate speech synthesis functionality into your app and provide an enhanced user experience.

For more information and detailed API documentation, you can visit the [capacitor-speech-synthesis repository](link-to-repo).