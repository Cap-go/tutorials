# Tutorial: Using capacitor-detect-screen-capture Package

---

title: "Using capacitor-detect-screen-capture Package"
description: "In this tutorial, we will learn how to use the capacitor-detect-screen-capture package to detect screen captures in a Capacitor app."
created_at: "2021-11-21"
published: true
slug: capacitor-detect-screen-capture

---

## Introduction

The capacitor-detect-screen-capture package is a Capacitor plugin that allows you to detect when a screen capture is taken in your app. This can be useful for security purposes or to provide additional functionality based on screen capture events.

In this tutorial, we will walk through the process of installing and using the capacitor-detect-screen-capture package in a Capacitor app.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Node.js and npm installed on your machine
- Capacitor CLI installed globally
- An existing Capacitor project

## Step 1: Install the Plugin

To begin, open your terminal and navigate to your Capacitor project directory. Then, run the following command to install the capacitor-detect-screen-capture package:

```bash
npm install capacitor-detect-screen-capture
```

## Step 2: Add the Plugin to Your App

Next, open your Capacitor project in your code editor and locate the `capacitor.config.json` file. Add the following line to the `plugins` array:

```json
{
  "name": "DetectScreenCapture"
}
```

This registers the plugin with your Capacitor app.

## Step 3: Implement the Functionality

Now, you can start using the capacitor-detect-screen-capture package in your app by adding the necessary code. Here is an example of how to detect screen captures:

```typescript
import { Plugins } from '@capacitor/core';

const { DetectScreenCapture } = Plugins;

DetectScreenCapture.addListener('screenCaptureTaken', (data) => {
  // Handle the screen capture event here
  console.log('Screen Capture Detected: ', data.timestamp);
});
```

In this example, we import the `DetectScreenCapture` plugin from the `@capacitor/core` package. We then add a listener for the `screenCaptureTaken` event, which will be triggered when a screen capture is taken. Inside the listener function, you can add your custom logic or actions to be performed when a screen capture is detected.

## Step 4: Testing the Package

To test the capacitor-detect-screen-capture package, you can run your Capacitor app on a device or emulator. Capture the screen while the app is running, and you should see the screen capture event logged in the console.

## Conclusion

Congratulations! You have successfully learned how to use the capacitor-detect-screen-capture package to detect screen captures in a Capacitor app. You can now enhance the security and functionality of your app by leveraging screen capture events.

Remember to refer to the official documentation of the capacitor-detect-screen-capture package for additional features and usage options. Happy coding!

---

This tutorial was created on November 21, 2021, as a response to a user's question and provides step-by-step instructions for using the capacitor-detect-screen-capture package in a Capacitor app.