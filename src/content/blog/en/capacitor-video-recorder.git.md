---
title: How to Use Capacitor Video Recorder Package
description: Learn how to use the @teamhive/capacitor-video-recorder package in your Capacitor project to record videos.
created_at: 2022-01-26
published: true
slug: capacitor-video-recorder.git
locale: en
---

# Using Capacitor Video Recorder Package

In this tutorial, we will walk through the steps to use the `@teamhive/capacitor-video-recorder` package in a Capacitor project to record videos.

## Installation

To get started, you need to install the `@teamhive/capacitor-video-recorder` package in your Capacitor project. Run the following command:

```bash
npm install @teamhive/capacitor-video-recorder
npx cap sync
```

Ensure that you have the necessary configurations for Android in your project's build.gradle file to download the Android lib when building the app.

```java
repositories {
  google()
  mavenCentral()
  maven {
    url "https://jitpack.io"
  }
}
```

## Usage

### Initializing Camera

To initialize the camera feed (without recording), you must specify a configuration to the video recorder. Here's an example of how to initialize the camera:

```typescript
import { VideoRecorderCamera, VideoRecorderPreviewFrame } from '@teamhive/capacitor-video-recorder';

const { VideoRecorder } = Plugins;

const config: VideoRecorderPreviewFrame = {
    id: 'video-record',
    stackPosition: 'back',
    width: 'fill',
    height: 'fill',
    x: 0,
    y: 0,
    borderRadius: 0
};

await VideoRecorder.initialize({
    camera: VideoRecorderCamera.FRONT,
    previewFrames: [config]
});
```

### Recording

Start recording using the following command:

```typescript
VideoRecorder.startRecording();
```

### Stop Recording / Getting Result

Stop the recording and get the path of the local video file:

```typescript
const res = await VideoRecorder.stopRecording();
// The video url is the local file path location of the video output.
return res.videoUrl;
```

### Destroying Camera

To disconnect from the capture device and remove any native UI layers, use the following command:

```typescript
VideoRecorder.destroy();
```

## Conclusion

Congratulations! You have successfully learned how to use the `@teamhive/capacitor-video-recorder` package to record videos in your Capacitor project. Feel free to explore more features and functionalities provided by this package.

This marks the end of the tutorial. Happy video recording!