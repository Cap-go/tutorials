---
title: "Using Capacitor Audio Permission Package"
description: "In this tutorial, we will learn how to use the capacitor-audio-permission package to request audio recording permission in a Capacitor app."
created_at: "2022-10-25"
published: true
slug: "capacitor-audio-permission"
---

# Using Capacitor Audio Permission Package

In this tutorial, we will learn how to use the `capacitor-audio-permission` package to request audio recording permission in a Capacitor app. This package provides a simple way to prompt the user for permission to record audio and handles the necessary platform-specific code.

## Prerequisites

Before you begin, make sure you have the following:

- Capacitor project set up: If you haven't set up a Capacitor project yet, refer to the [Capacitor documentation](https://capacitorjs.com/docs) for instructions.
- Audio recording functionality: This tutorial assumes you already have audio recording functionality implemented in your Capacitor app.

## Installation

To install the `capacitor-audio-permission` package, run the following command in your Capacitor project's root directory:

```bash
npm install capacitor-audio-permission
```

## Adding Permission Request

Once the `capacitor-audio-permission` package is installed, you can easily request audio recording permission using the `requestAudioPermissions` function. In your app's code, import the package and call this function before starting audio recording:

```javascript
import { Plugins } from '@capacitor/core';

const { AudioPermission } = Plugins;

async function requestAudioRecordingPermission() {
  const result = await AudioPermission.requestAudioPermissions();
  
  if (result.granted) {
    console.log('Audio recording permission granted.');
    // Start audio recording here
  } else {
    console.log('Audio recording permission denied.');
  }
}
```

## Handling Permission Result

The `requestAudioPermissions` function returns a promise that resolves to an object containing the permission result. You can check the `granted` property to determine whether the user granted or denied the permission. Based on the result, you can handle the permission request logic in your app.

## Example Usage

Here's an example usage of the `capacitor-audio-permission` package in a simple audio recording app:

```javascript
import { Plugins } from '@capacitor/core';

const { AudioPermission, AudioRecorder } = Plugins;

async function startAudioRecording() {
  const audioPermissionResult = await AudioPermission.requestAudioPermissions();
  
  if (audioPermissionResult.granted) {
    console.log('Audio recording permission granted.');
    // Continue with audio recording logic
    const audioRecorder = new AudioRecorder();
    // ...
  } else {
    console.log('Audio recording permission denied.');
  }
}
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-audio-permission` package to request audio recording permission in a Capacitor app. We covered the installation process, how to request the permission, and how to handle the permission result. By following these steps, you can easily add audio recording functionality to your Capacitor app while ensuring the user's permission.

Remember to refer to the official Capacitor and `capacitor-audio-permission` documentation for more detailed information and advanced usage.