---
title: "Using capacitor-pm-video-exoplayer"
description: "This tutorial will guide you through the steps of using the capacitor-pm-video-exoplayer package to play HLS videos on Android and iOS."
created_at: "2021-09-20"
published: true
slug: capacitor-pm-video-exoplayer
---

# Using capacitor-pm-video-exoplayer

Capacitor-pm-video-exoplayer is a Capacitor plugin that allows you to play HLS videos on Android using the ExoPlayer library, and on iOS using AVPlayer.

## Installation

To install the capacitor-pm-video-exoplayer package, you can use npm or yarn:

```
npm install capacitor-pm-video-exoplayer

or

yarn add capacitor-pm-video-exoplayer
```

## Usage

Import the Exoplayer class from the capacitor-pm-video-exoplayer package:

```typescript
import { Exoplayer } from 'capacitor-pm-video-exoplayer';
```

Initialize a new instance of Exoplayer and call the `play` method to play a video:

```typescript
const videoUrl = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';

new Exoplayer().play({ videoUrl, mediaType: 'hls' })
  .then(() => {
    // Video playback started successfully
  })
  .catch(reason => {
    // Video playback failed, switch to fallback web viewer
    console.error(`Switching to web HLS video player because: ${JSON.stringify(reason)}`);
    // Call the fallback web viewer function
    this.showVideoUsingFallbackWebViewer(videoUrl);
  });
```

In case the video playback fails on Android or iOS, you can switch to a fallback web viewer by calling the `showVideoUsingFallbackWebViewer` function.

## Fallback Web Viewer

If the video playback fails on Android or iOS, you can implement a fallback web viewer using the hls.js library. Here's an example of how to do it:

```typescript
showVideoUsingFallbackWebViewer(videoUrl: string) {
  // Implement your fallback web viewer using hls.js
}
```

That's it! You have now learned how to use the capacitor-pm-video-exoplayer package to play HLS videos on Android and iOS.

Remember to import the Exoplayer class, initialize an instance, and call the `play` method with the video URL and media type.