---
title: "Using Capacitor TTS Package"
description: "A tutorial on how to use the Capacitor TTS package for text-to-speech in your app."
created_at: "2022-10-13"
published: true
slug: capacitor-tts
---

# Using Capacitor TTS Package

The Capacitor TTS package allows you to incorporate Text-to-Speech functionality into your Capacitor app. This can be useful for applications that require speech synthesis, such as reading out text content or providing accessibility features. In this tutorial, we will walk through the steps to integrate and use the Capacitor TTS plugin in your project.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and NPM (Node Package Manager)
- Capacitor (installed globally)
- A Capacitor project set up

## Installing the Capacitor TTS Plugin

To use the Capacitor TTS plugin, you need to install it in your Capacitor project. Open your project's root directory in a terminal and run the following command:

```bash
npm install capacitor-tts
```

This command will fetch and install the Capacitor TTS plugin from the npm registry.

Next, you need to sync the plugin with your project. Run the following command:

```bash
npx cap sync
```

This command will update your project's configuration files and sync the plugin with your project.

## Adding Platform-specific Code

The Capacitor TTS plugin requires some platform-specific code to work on each platform (Android and iOS). 

### Android Configuration

Open the `android/app/src/main/java/your-app-id/MainActivity.java` file and add the following import statement at the top:

```java
import com.byteowls.capacitor.tts.CapacitorTTS;
```

Then, add the following code inside the `init` method:

```java
// Initialize the CapacitorTTS plugin
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    // Add CapacitorTTS plugin to the list of plugins
    add(CapacitorTTS.class);
}});
```

### iOS Configuration

Open the `ios/App/AppDelegate.swift` file and add the following import statement at the top:

```swift
import CapacitorTTS
```

Then, add the following code inside the `application` method:

```swift
// Register the CapacitorTTS plugin
self.register(TTS.self, with: CAPBridge.self)
```

## Using the Capacitor TTS Plugin

Now that the plugin is installed and configured, you can start using it in your app.

### Text-to-Speech Conversion

To convert text to speech, you can use the `speak` method provided by the Capacitor TTS plugin. Here's a basic example:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorTTS } = Plugins;

// Function to speak a text
async function speakText(text) {
  await CapacitorTTS.speak({
    value: text, // The text to be spoken
    rate: 1.0,   // Speaking rate (default: 1.0)
    lang: 'en-US' // Language code (default: device's default language)
  });
}

// Usage example
speakText('Hello, World!');
```

In the example above, we import the `CapacitorTTS` plugin from the `@capacitor/core` package. Then, we define a function `speakText` that takes a text parameter and uses the `speak` method to convert the text to speech. You can customize the speaking rate and language as needed.

### Stopping Speech

To stop ongoing speech, you can use the `stop` method provided by the Capacitor TTS plugin. Here's an example:

```javascript
await CapacitorTTS.stop();
```

This code will stop any ongoing speech.

## Conclusion

In this tutorial, we covered the installation and usage of the Capacitor TTS package. You learned how to install the plugin, configure it for Android and iOS platforms, and use its methods to convert text to speech and stop ongoing speech. With this knowledge, you'll be able to add text-to-speech functionality to your Capacitor app and enhance its accessibility and user experience.

Remember to consult the official Capacitor TTS plugin documentation for more advanced usage and customization options.
