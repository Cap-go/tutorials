---
title: "Using @mufan/capacitor-plugin-media"
description: "This tutorial will guide you on how to use the @mufan/capacitor-plugin-media package to enable extra media capabilities in your Capacitor project."
created_at: "2021-11-25"
published: true
slug: "media"
---

# Using @mufan/capacitor-plugin-media

The @mufan/capacitor-plugin-media package is a Capacitor community plugin that provides additional media capabilities for your Capacitor projects. This tutorial will guide you through the process of installing and using this plugin.

## Installation

To install the @mufan/capacitor-plugin-media package, run the following command:

```bash
npm install @mufan/capacitor-plugin-media
```

or if you're using Yarn:

```bash
yarn add @mufan/capacitor-plugin-media
```

Once the package is installed, sync your Capacitor project to ensure the plugin is added:

```bash
npx cap sync
```

## Usage

The @mufan/capacitor-plugin-media package provides a set of functions for working with media files. Here are some examples of how to use these functions:

### Example 1: Taking a Photo

```typescript
import { Plugins } from '@capacitor/core';

const { MediaPlugin } = Plugins;

async function takePhoto() {
  const photo = await MediaPlugin.takePhoto();

  console.log('Photo taken:', photo);
}
```

In this example, we import the `MediaPlugin` from the `@capacitor/core` package. We then define an `async` function called `takePhoto()` which uses the `takePhoto()` method provided by the `MediaPlugin` to capture a photo. The captured photo is returned as a result.

### Example 2: Recording a Video

```typescript
import { Plugins } from '@capacitor/core';

const { MediaPlugin } = Plugins;

async function recordVideo() {
  const video = await MediaPlugin.recordVideo();

  console.log('Video recorded:', video);
}
```

In this example, we define an `async` function called `recordVideo()` which uses the `recordVideo()` method provided by the `MediaPlugin` to start recording a video. The recorded video is returned as a result.

### Example 3: Playing Audio

```typescript
import { Plugins } from '@capacitor/core';

const { MediaPlugin } = Plugins;

async function playAudio() {
  const audio = await MediaPlugin.playAudio({ path: 'path/to/audio.mp3' });

  console.log('Audio played:', audio);
}
```

In this example, we define an `async` function called `playAudio()` which uses the `playAudio()` method provided by the `MediaPlugin` to play an audio file. The path to the audio file is provided as a parameter.

## Conclusion

The @mufan/capacitor-plugin-media package provides a convenient way to enhance the media capabilities of your Capacitor projects. In this tutorial, we covered the installation process and demonstrated how to use some of the plugin's key functions for capturing photos, recording videos, and playing audio. With this knowledge, you can now incorporate advanced media features into your Capacitor applications.

Happy coding!