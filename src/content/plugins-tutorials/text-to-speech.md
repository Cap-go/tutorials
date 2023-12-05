---
title: "Using the @capacitor-community/text-to-speech Package"
description: "Learn how to integrate the @capacitor-community/text-to-speech package into your Capacitor project and synthesize speech from text."
created_at: "2021-09-12"
published: true
slug: text-to-speech
---

# Using the @capacitor-community/text-to-speech Package

The `@capacitor-community/text-to-speech` package is a plugin for Capacitor that allows you to synthesize speech from text in your mobile applications. In this tutorial, we will go through the steps to install and use this package in your Capacitor project.

## Prerequisites

Before we begin, make sure you have the following prerequisites in place:
- Capacitor installed and configured in your project.
- Basic knowledge of Capacitor and how to work with plugins.
- An understanding of JavaScript/TypeScript.

## Installation

To install the `@capacitor-community/text-to-speech` package, run the following command in your project directory:

```shell
npm install @capacitor-community/text-to-speech
```

Next, synchronize your Capacitor project by running:

```shell
npx cap sync
```

## Usage

To use the `@capacitor-community/text-to-speech` package in your application, follow these steps:

1. Import the `TextToSpeech` module from the package:

```typescript
import { TextToSpeech } from '@capacitor-community/text-to-speech';
```

2. Use the `speak` method to synthesize speech from text:

```typescript
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
```

3. Optionally, you can use the `stop` method to stop the ongoing speech synthesis:

```typescript
const stop = async () => {
  await TextToSpeech.stop();
};
```

That's it! You have successfully integrated the `@capacitor-community/text-to-speech` package into your Capacitor project. Now you can synthesize speech from text in your application.

## Example

Here's a complete example of how you can use the `@capacitor-community/text-to-speech` package:

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
```

## Conclusion

In this tutorial, we learned how to install and use the `@capacitor-community/text-to-speech` package in a Capacitor project. We explored the steps to synthesize speech from text and stop speech synthesis. You can now enhance your mobile applications with speech synthesis functionality using this package. Happy coding!