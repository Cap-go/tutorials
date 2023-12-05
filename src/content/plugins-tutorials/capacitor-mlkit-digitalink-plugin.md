---
title: "Using the capacitor-mlkit-digitalink-plugin Package"
description: "A tutorial on how to use the capacitor-mlkit-digitalink-plugin package for Capacitor"
created_at: "2022-11-28"
published: true
slug: "capacitor-mlkit-digitalink-plugin"
---

# Using the capacitor-mlkit-digitalink-plugin Package

In this tutorial, we will learn how to use the capacitor-mlkit-digitalink-plugin package to implement MLKit Digital Ink Recognition in Capacitor applications.

## Introduction

The capacitor-mlkit-digitalink-plugin package is a Capacitor plugin that provides access to MLKit's Digital Ink Recognition APIs. With this package, you can recognize and interpret handwritten or digital ink input in your Capacitor apps.

## Getting Started

To begin using the capacitor-mlkit-digitalink-plugin package, follow these steps:

### Step 1: Install the Package

Install the capacitor-mlkit-digitalink-plugin package by running the following command in your project's root folder:

```bash
npm install capacitor-mlkit-digitalink-plugin
```

### Step 2: Add the Plugin to Capacitor

Next, add the plugin to your Capacitor project by running the following command:

```bash
npx cap sync
```

### Step 3: Configure Permissions

Check and ensure that your application has the necessary permissions to access the device's digital ink input. You may need to modify your app's manifest or request permissions at runtime.

### Step 4: Import the Plugin

In your TypeScript/JavaScript file where you want to use the capacitor-mlkit-digitalink-plugin functionalities, import the plugin.

```typescript
import { CapacitorMlkitDigitalInkPlugin } from 'capacitor-mlkit-digitalink-plugin';
```

## Usage

Now that the capacitor-mlkit-digitalink-plugin package is installed and imported, you can use its methods and features.

### Recognize Digital Ink

To recognize digital ink input, use the `recognizeDigitalInk` method. This method takes a base64-encoded image string as input and returns a Promise with the recognized digital ink data.

```typescript
const imageString = "BASE64_ENCODED_IMAGE";

CapacitorMlkitDigitalInkPlugin.recognizeDigitalInk({ image: imageString })
  .then((result) => {
    console.log("Recognized Digital Ink:", result);
  })
  .catch((error) => {
    console.error("Error recognizing Digital Ink:", error);
  });
```

### Additional Methods

The capacitor-mlkit-digitalink-plugin package provides additional methods and functionalities for advanced usage, such as configuring recognition options, handling errors, and more. Please refer to the official documentation of the package for detailed information on these methods.

## Conclusion

In this tutorial, we explored the capacitor-mlkit-digitalink-plugin package for Capacitor and learned how to use it to implement MLKit Digital Ink Recognition in Capacitor applications. By following the steps outlined in this tutorial, you can easily integrate MLKit's Digital Ink Recognition capabilities into your Capacitor projects. Happy coding!

Remember to check the official documentation of the capacitor-mlkit-digitalink-plugin package for more detailed usage instructions, advanced features, and implementation examples.