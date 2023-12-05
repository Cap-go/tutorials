---
title: "Using @vihlix/capacitor-text-reader Package"
description: "This tutorial will guide you on how to use the @vihlix/capacitor-text-reader package in your Capacitor app."
created_at: "2021-09-28"
published: true
slug: "text-reader"
---

# Using @vihlix/capacitor-text-reader Package

In this tutorial, you will learn how to integrate the @vihlix/capacitor-text-reader package into your Capacitor app. The @vihlix/capacitor-text-reader package allows you to add text-to-speech functionality to your app, enabling the app to read out text content to the user.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js and npm
- Capacitor (installed globally)

## Step 1: Create a New Capacitor Project

If you don't have an existing Capacitor project, you can create a new one using the following command:

```bash
npm init @capacitor/app
```

Follow the prompts to set up your project.

## Step 2: Install the @vihlix/capacitor-text-reader Package

Once your project is set up, navigate to the project directory and install the @vihlix/capacitor-text-reader package:

```bash
npm install @vihlix/capacitor-text-reader
```

## Step 3: Configure the Package

Next, you need to configure the @vihlix/capacitor-text-reader package to work with your app. In your project's `capacitor.config.json` file, add the following configuration:

```json
{
  "plugins": {
    "TextReader": {
      "apiKey": "YOUR_API_KEY"
    }
  }
}
```

Replace `YOUR_API_KEY` with your desired API key for the text-to-speech service you wish to use. You may need to sign up for a text-to-speech service provider and obtain an API key.

## Step 4: Import and Initialize the TextReader Plugin

In your app's code, import and initialize the TextReader plugin from the @vihlix/capacitor-text-reader package. Here's an example of how you can import and initialize the plugin:

```typescript
import { Plugins } from '@capacitor/core';

const { TextReader } = Plugins;

// Initialize the plugin
TextReader.initialize();
```

## Step 5: Implement Text-to-Speech Functionality

You can now start implementing the text-to-speech functionality in your app. Here's an example of how you can use the `speak()` method provided by the TextReader plugin to read out a text:

```typescript
const textToRead = 'Hello, world!';

TextReader.speak({ text: textToRead })
  .then(() => {
    // Text successfully read out
  })
  .catch((error) => {
    // Error occurred while reading out text
  });
```

In the above example, the `speak()` method is called with an object containing the `text` property, which specifies the text to be read out. The `speak()` method returns a promise that resolves when the text is successfully read out and rejects if an error occurs.

## Step 6: Build and Run Your App

Build your app using the following command:

```bash
npx cap build
```

Once the build is complete, run your app on the desired platform using the following command:

```bash
npx cap open [platform]
```

Replace `[platform]` with the platform you wish to run the app on (e.g., android, ios).

## Conclusion

Congratulations! You have successfully integrated the @vihlix/capacitor-text-reader package into your Capacitor app. You can now utilize the text-to-speech functionality to enhance the user experience of your app. Explore the package documentation for more advanced features and options.

Remember to check for updates to the @vihlix/capacitor-text-reader package and keep your Capacitor project up to date with the latest dependencies. Happy coding!