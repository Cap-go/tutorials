---
title: How to Use @whiteguru/capacitor-plugin-media-capture
description: Step-by-step guide on implementing the @whiteguru/capacitor-plugin-media-capture package in Capacitor projects.
created_at: 2023-03-16
published: true
slug: capacitor-plugin-media-capture.git
locale: en
---

# Using @whiteguru/capacitor-plugin-media-capture

The `@whiteguru/capacitor-plugin-media-capture` package is a Capacitor plugin that allows you to capture audio and video easily in your mobile applications. Follow the steps below to integrate and utilize the functionality of this plugin in your Capacitor project.

## Installation

First, you need to install the `@whiteguru/capacitor-plugin-media-capture` package into your project. Use npm to install the package:

```bash
npm install @whiteguru/capacitor-plugin-media-capture
npx cap sync
```

For Capacitor 3.x, you can install a specific version of the package by running:

```bash
npm install @whiteguru/capacitor-plugin-media-capture@3.0.1
npx cap sync
```

Make sure to follow these installation steps carefully to ensure the plugin is successfully added to your Capacitor project.

## Permissions and Setup

### Android

For Android, you need to add the following permissions to your `AndroidManifest.xml` file to allow camera and audio recording functionalities:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

Additionally, make sure to set the `compileSdkVersion` to `31` in your app's `variables.gradle` file.

### iOS

Unfortunately, the plugin does not support iOS at the moment.

## Plugin Usage

### `captureVideo()`

The `captureVideo()` method from the plugin allows you to capture video. It returns a `MediaFileResult` containing information about the captured video file.

```typescript
import { Plugins } from '@capacitor/core';

const { MediaCapture } = Plugins;

const captureVideo = async () => {
  try {
    const result = await MediaCapture.captureVideo({ /* options */ });
    console.log('Captured Video:', result.file);
  } catch (error) {
    console.error('Error capturing video:', error);
  }
};
```

The `captureVideo()` method takes a `CaptureVideoOptions` object as its parameter and returns a promise with `MediaFileResult`.

## Interfaces

### MediaFileResult

- `file`: Contains information about the captured video file.

### MediaFile

- `name`: The name of the file without path information.
- `path`: The full path of the file including the name.
- `type`: The file's MIME type.
- `size`: The size of the file in bytes.

### CaptureVideoOptions

These are the basic steps to integrate and utilize the `@whiteguru/capacitor-plugin-media-capture` package in your Capacitor project. Make sure to refer to the official documentation for any additional configurations or advanced usage of the plugin.