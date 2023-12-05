---
title: "Using Capacitor Video Player Package"
description: "A tutorial on how to use the capacitor-video-player package with Capacitor"
created_at: "2022-09-20"
published: true
slug: "capacitor-video-player"
---

# Using Capacitor Video Player Package

In this tutorial, we will learn how to use the capacitor-video-player package with Capacitor. The capacitor-video-player package allows you to easily integrate video playback capabilities into your Capacitor applications.

## Prerequisites

Before we get started, make sure you have the following prerequisites installed:

- Capacitor (version 2 or higher)
- Node.js and npm

## Installation

To install the capacitor-video-player package, run the following command in your project directory:

```bash
npm install capacitor-video-player
```

## Adding the Plugin to Your Project

To add the capacitor-video-player plugin to your Capacitor project, follow these steps:

1. Import the package in your main Capacitor plugin file (`capacitor.config.json`):

```json
{
  "plugins": {
    "CapacitorVideoPlayer": {
      "androidPackage": "com.justinwflory.cvp",
      "ios": {
        "swizzle": true
      }
    }
  }
}
```

2. Run the following command to sync the plugin with your project:

```bash
npx cap sync
```

## Using the Video Player

To use the capacitor-video-player package to play videos in your Capacitor app, follow these steps:

1. Import the Capacitor and capacitor-video-player modules in your JavaScript or TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';
import 'capacitor-video-player';

const { CapacitorVideoPlayer } = Plugins;
```

2. Add a function to your code to play a video from a given URL:

```javascript
async function playVideo(url) {
  try {
    const result = await CapacitorVideoPlayer.play({ url });
    console.log('Video played successfully');
  } catch (error) {
    console.error('Error playing video:', error);
  }
}
```

3. Call the `playVideo` function with the URL of the video you want to play:

```javascript
playVideo('https://example.com/video.mp4');
```

That's it! You have successfully integrated the capacitor-video-player package into your Capacitor app and played a video.

## Conclusion

In this tutorial, we learned how to use the capacitor-video-player package to play videos in a Capacitor app. We covered the installation process, adding the plugin to the project, and using the video player functionality. Now you can enhance your Capacitor app with video playback capabilities.

Remember to consult the capacitor-video-player documentation for more advanced features and customization options.

Happy video playback with Capacitor!