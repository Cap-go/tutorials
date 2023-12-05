---
title: "Getting Started with Capacitor Voice Recorder"
description: "Learn how to use the capacitor-voice-recorder package to add voice recording functionality to your Capacitor app."
created_at: "2022-08-01"
published: true
slug: "capacitor-voice-recorder"
---

# Getting Started with Capacitor Voice Recorder

In this tutorial, we will learn how to use the `capacitor-voice-recorder` package to add voice recording functionality to your Capacitor app. 

## Installation

To get started, let's install the `capacitor-voice-recorder` package using npm:

```bash
npm install --save capacitor-voice-recorder
npx cap sync
```

#### iOS Note

Make sure to include the `NSMicrophoneUsageDescription` key and a corresponding purpose string in your app's Info.plist file.

## Configuration

No configuration is required for this plugin. 

## Usage

The `capacitor-voice-recorder` package provides several methods for controlling the voice recording functionality. Let's take a look at each of them:

### Checking Device Voice Recording Capability

To check if the device supports voice recording, you can use the `canDeviceVoiceRecord()` method. This method returns a promise that resolves to `{ value: true }` if voice recording is supported, or `{ value: false }` if it is not supported. Note that this method does not take into account the permission status, only the device's capability to record.

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorVoiceRecorder } = Plugins;

async function checkDeviceVoiceRecordingCapability() {
  const result = await CapacitorVoiceRecorder.canDeviceVoiceRecord();
  if (result.value) {
    console.log('Device supports voice recording');
  } else {
    console.log('Device does not support voice recording');
  }
}
```

### Requesting Audio Recording Permission

Before starting voice recording, you need to request audio recording permission from the user. You can use the `requestAudioRecordingPermission()` method for this purpose. If the permission has already been granted, the promise will resolve to `{ value: true }`. If not, the user will be prompted to grant or deny the permission, and the promise will resolve to `{ value: true }` if the permission is granted, or `{ value: false }` if the permission is denied.

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorVoiceRecorder } = Plugins;

async function requestAudioRecordingPermission() {
  const result = await CapacitorVoiceRecorder.requestAudioRecordingPermission();
  if (result.value) {
    console.log('Audio recording permission granted');
  } else {
    console.log('Audio recording permission denied');
  }
}
```

### Checking Audio Recording Permission Status

To check the current status of the audio recording permission, you can use the `hasAudioRecordingPermission()` method. This method returns a promise that resolves to `{ value: true }` if the permission is granted, or `{ value: false }` if the permission is denied. If the status of the permission cannot be checked, the promise will reject with an error.

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorVoiceRecorder } = Plugins;

async function checkAudioRecordingPermissionStatus() {
  try {
    const result = await CapacitorVoiceRecorder.hasAudioRecordingPermission();
    if (result.value) {
      console.log('Audio recording permission granted');
    } else {
      console.log('Audio recording permission denied');
    }
  } catch (error) {
    console.error('Failed to check audio recording permission status:', error);
  }
}
```

### Starting Voice Recording

To start voice recording, you can use the `startRecording()` method. This method will begin recording audio and return a promise that resolves when the recording starts successfully.

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorVoiceRecorder } = Plugins;

async function startVoiceRecording() {
  try {
    await CapacitorVoiceRecorder.startRecording();
    console.log('Voice recording started');
  } catch (error) {
    console.error('Failed to start voice recording:', error);
  }
}
```

### Stopping Voice Recording

To stop voice recording, you can use the `stopRecording()` method. This method will stop the recording and return a promise that resolves when the recording stops successfully.

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorVoiceRecorder } = Plugins;

async function stopVoiceRecording() {
  try {
    await CapacitorVoiceRecorder.stopRecording();
    console.log('Voice recording stopped');
  } catch (error) {
    console.error('Failed to stop voice recording:', error);
  }
}
```

### Pausing and Resuming Voice Recording

The `capacitor-voice-recorder` package also provides methods for pausing and resuming voice recording. You can use the `pauseRecording()` method to pause the recording and the `resumeRecording()` method to resume the recording.

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorVoiceRecorder } = Plugins;

async function pauseVoiceRecording() {
  try {
    await CapacitorVoiceRecorder.pauseRecording();
    console.log('Voice recording paused');
  } catch (error) {
    console.error('Failed to pause voice recording:', error);
  }
}

async function resumeVoiceRecording() {
  try {
    await CapacitorVoiceRecorder.resumeRecording();
    console.log('Voice recording resumed');
  } catch (error) {
    console.error('Failed to resume voice recording:', error);
  }
}
```

### Getting Current Recording Status

To get the current status of the voice recording, you can use the `getCurrentStatus()` method. This method returns a promise that resolves to an object containing information about the current recording, such as the duration, file size, and recording state.

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorVoiceRecorder } = Plugins;

async function getCurrentRecordingStatus() {
  try {
    const result = await CapacitorVoiceRecorder.getCurrentStatus();
    console.log('Current recording status:', result.value);
  } catch (error) {
    console.error('Failed to get current recording status:', error);
  }
}
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-voice-recorder` package to add voice recording functionality to your Capacitor app. We covered the installation process, configuration, and usage of the provided methods. Now you can incorporate voice recording features into your app and enhance the user experience. Happy coding!