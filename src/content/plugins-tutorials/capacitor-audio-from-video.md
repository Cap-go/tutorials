---
title: "Using the capacitor-audio-from-video package"
description: "A tutorial on using the capacitor-audio-from-video package"
created_at: "2021-08-10"
published: true
slug: "capacitor-audio-from-video"
---

# Using the capacitor-audio-from-video package

In this tutorial, we will learn how to use the capacitor-audio-from-video package to extract audio from a video file in a Capacitor project.

## Installation

To get started, make sure you have Capacitor installed in your project. If not, you can install it by running the following command:

```
npm install @capacitor/cli
```

Next, install the capacitor-audio-from-video package:

```
npm install capacitor-audio-from-video
```

## Usage

1. Import the capacitor-audio-from-video plugin in your file:

```typescript
import '@capacitor-community/audio-from-video';
```

2. Use the `getAudioFromVideo` method to extract the audio from a video file:

```typescript
import { Plugins } from '@capacitor/core';

const { AudioFromVideo } = Plugins;

async function extractAudio(videoPath: string) {
  try {
    const result = await AudioFromVideo.getAudioFromVideo({
      path: videoPath
    });

    // Do something with the result
    console.log(result.audioPath);
  } catch (error) {
    console.error(error);
  }
}

extractAudio('path/to/video.mp4');
```

Make sure to replace `'path/to/video.mp4'` with the actual path to your video file.

That's it! You have successfully extracted audio from a video file using the capacitor-audio-from-video package in your Capacitor project.

## Conclusion

In this tutorial, we learned how to use the capacitor-audio-from-video package to extract audio from a video file in a Capacitor project. This can be useful for various scenarios such as creating audio previews for video files or extracting audio for further processing. Explore the documentation of the capacitor-audio-from-video package for more advanced features and options.