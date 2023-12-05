---
title: "Using the capacitor-plugin-audio-toggle Package"
description: "A tutorial on how to use the capacitor-plugin-audio-toggle package in your Capacitor projects"
created_at: "2021-12-08"
published: true
slug: "capacitor-plugin-audio-toggle"
---

# Using the capacitor-plugin-audio-toggle Package

In this tutorial, we will learn how to use the capacitor-plugin-audio-toggle package in your Capacitor projects. The capacitor-plugin-audio-toggle package allows you to easily control the audio playback in your application.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js
- Capacitor CLI
- Capacitor project created

## Step 1: Install the Package

To start using the capacitor-plugin-audio-toggle package, you need to install it in your Capacitor project. Open your project directory in the terminal and run the following command:

```shell
npm install capacitor-plugin-audio-toggle
```

This command will install the capacitor-plugin-audio-toggle package and add it to your project's dependencies.

## Step 2: Import and Initialize the Plugin

Once the package is installed, you need to import and initialize the plugin in your project. Open the file where you want to use the audio toggle functionality and add the following code:

```javascript
import { Plugins } from '@capacitor/core';

const { AudioToggle } = Plugins;
```

The `Plugins` object is provided by Capacitor and allows you to access the installed plugins. We are importing the `AudioToggle` plugin from the `Plugins` object.

## Step 3: Toggle Audio

Now that the plugin is imported and initialized, you can use the `AudioToggle` methods to control the audio playback.

To toggle the audio on or off, you can use the `toggle()` method. Add the following code to toggle the audio:

```javascript
AudioToggle.toggle();
```

This code will toggle the audio playback on or off. You can call this method whenever you want to toggle the audio in your application.

## Step 4: Get Audio State

If you need to check the current state of the audio playback, you can use the `getState()` method. Add the following code to get the audio state:

```javascript
const state = await AudioToggle.getState();
console.log('Audio State:', state);
```

The `getState()` method returns the current state of the audio playback as a boolean value. You can use this value to update your application's UI or perform any necessary actions based on the audio state.

## Conclusion

Congratulations! You have successfully learned how to use the capacitor-plugin-audio-toggle package in your Capacitor projects. You can now control the audio playback and retrieve the audio state using the provided methods.

Feel free to explore the capacitor-plugin-audio-toggle documentation for more information on the available methods and options.

Happy coding!