---
title: "Using @whiteguru/capacitor-plugin-media-capture"
description: "A tutorial on how to use the @whiteguru/capacitor-plugin-media-capture package in Capacitor"
created_at: "2022-10-15"
published: true
slug: "capacitor-plugin-media-capture"
---

# Using @whiteguru/capacitor-plugin-media-capture

This tutorial will guide you on how to use the @whiteguru/capacitor-plugin-media-capture package in Capacitor. The @whiteguru/capacitor-plugin-media-capture package provides a set of APIs to capture audio and video in your Capacitor application.

## Installation

To get started, you need to install the @whiteguru/capacitor-plugin-media-capture package. Open your terminal and run the following command:

```bash
npm install @whiteguru/capacitor-plugin-media-capture
```

If you are using Capacitor 3.x, run this command instead:

```bash
npm install @whiteguru/capacitor-plugin-media-capture@3.0.1
```

After installation, sync your project with Capacitor by running:

```bash
npx cap sync
```

## Permissions

The @whiteguru/capacitor-plugin-media-capture package requires additional permissions to access the camera and record audio. Make sure to add the following permissions to your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

For more information on setting Android permissions, refer to the [Android Guide](https://capacitorjs.com/docs/android/configuration#setting-permissions).

## Usage

### captureVideo(options: CaptureVideoOptions)

The `captureVideo` method allows you to capture a video using the device's camera. It returns a Promise that resolves to a `MediaFileResult` object.

```typescript
import { Plugins } from '@capacitor/core';

const { MediaCapture } = Plugins;

async function captureVideo() {
  try {
    const options = {
      // Specify any additional options here
    };
    const result = await MediaCapture.captureVideo(options);
    const file = result.file;
    console.log('Video file:', file);
  } catch (error) {
    console.error('Error capturing video:', error);
  }
}

captureVideo();
```

The `CaptureVideoOptions` object allows you to customize the capture behavior. It has the following properties:

- **OPTION_1**: Description of option 1.
- **OPTION_2**: Description of option 2.
- ...

### MediaFileResult

The `MediaFileResult` object represents the result of capturing a video. It has the following properties:

- **file**: The captured video file, represented by a `MediaFile` object.

### MediaFile

The `MediaFile` object represents a captured video file. It has the following properties:

- **name**: The name of the file, without path information.
- **path**: The full path of the file, including the name.
- **type**: The MIME type of the video file.
- **size**: The size of the video file in bytes.

That's it! You now know how to use the @whiteguru/capacitor-plugin-media-capture package to capture videos in your Capacitor application. Feel free to explore other methods and options available in the package to suit your needs.