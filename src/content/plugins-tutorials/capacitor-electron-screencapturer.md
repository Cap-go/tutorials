---
title: "Using capacitor-electron-screencapturer package"
description: "A tutorial on how to use the capacitor-electron-screencapturer package to capture screen recordings with Capacitor"
created_at: "2022-01-01"
published: true
slug: "capacitor-electron-screencapturer"
---

# Using capacitor-electron-screencapturer package

In this tutorial, we will learn how to use the `capacitor-electron-screencapturer` package to capture screen recordings with Capacitor. This package provides a simple and straightforward way to record video of your desktop screen using Capacitor and Electron.

## Prerequisites

Before getting started, make sure you have the following installed and set up:

- Capacitor: v2 or higher
- Electron: v13 or higher

## Installation

To begin, open your terminal and navigate to your Capacitor project folder. Run the following command to install the `capacitor-electron-screencapturer` package:

```shell
npm install capacitor-electron-screencapturer
```

## Usage

Once the installation is complete, you can start using the `capacitor-electron-screencapturer` package in your Capacitor project.

### Initializing the plugin

Import the plugin at the top of your TypeScript file:

```typescript
import { CapacitorElectronScreencapturer } from 'capacitor-electron-screencapturer';
```

### Starting a screen recording

To start a screen recording, use the `startRecording()` method provided by the plugin:

```typescript
CapacitorElectronScreencapturer.startRecording();
```

### Stopping a screen recording

To stop the screen recording, use the `stopRecording()` method:

```typescript
CapacitorElectronScreencapturer.stopRecording();
```

### Checking the recording status

You can check the current recording status using the `isRecording()` method:

```typescript
const isRecording = await CapacitorElectronScreencapturer.isRecording();
console.log('Recording status:', isRecording);
```

## Conclusion

In this tutorial, we have learned how to use the `capacitor-electron-screencapturer` package to capture screen recordings with Capacitor. We covered the installation process, initialization of the plugin, starting and stopping recordings, and checking the recording status.

Now you can easily incorporate screen recording functionality into your Capacitor projects using this package. Happy coding!