---
title: "Tutorial: How to Use the video-player-one Package"
description: "In this tutorial, we will learn how to use the video-player-one package to play videos fullscreen on iOS, Android, and PWA."
created_at: "2022-10-27"
published: true
slug: "video-player-one"
---

# Tutorial: How to Use the video-player-one Package

In this tutorial, we will learn how to use the video-player-one package, a custom Native Capacitor plugin, to play videos fullscreen on iOS, Android, and PWA. The video-player-one package is a forked version of [capacitor-video-player](https://www.npmjs.com/package/capacitor-video-player).

## Installation

To use the video-player-one package in your project, you need to install it via npm. Open your terminal and run the following command:

```bash
npm install --save video-player-one
```

## Usage

To play a video using the video-player-one plugin, you can use the `play` method. This method takes an object with a `url` property that specifies the URL of the video to be played.

Here's an example usage:

```javascript
import { Plugins } from '@capacitor/core';

const { VideoPlayerOne } = Plugins;

// ...

VideoPlayerOne.play({ url: "https://example.com/video.mp4" });
```

Make sure to replace `"https://example.com/video.mp4"` with the actual URL of the video you want to play.

## Examples

If you're using React, you can check out the [react-video-player-app-starter](https://github.com/jepiqueau/react-video-player-app-starter) repository for a starter project that demonstrates how to integrate the video-player-one package into a React application.

For Vue.js, there is a [vue-videoplayer-app](https://github.com/jepiqueau/vue-videoplayer-app-starter) repository available that provides a similar integration example.

If you prefer using Vite, you can take a look at the [vite-react-videoplayer-app](https://github.com/jepiqueau/vite-react-videoplayer-app) repository, which showcases the usage of the video-player-one package with Vite and React.

## Additional Resources

- [Capacitor Documentation](https://capacitor.ionicframework.com/docs/getting-started/with-ionic)
- [Usage Guide for version 2.4.7](https://github.com/jepiqueau/capacitor-video-player/blob/master/docs/Usage_2.4.7.md)
- [Usage Guide for version > 3.0.0](https://github.com/jepiqueau/capacitor-video-player/blob/master/docs/Usage_3.0.0.md)

## Dependencies

The video-player-one package has the following dependencies:

- hls.js (for HLS videos on Web and Electron platforms)
- ExoPlayer (for HLS, DASH, SmoothStreaming videos on Android platform)

## Conclusion

In this tutorial, we have learned how to use the video-player-one package to play videos fullscreen on iOS, Android, and PWA. We covered the installation process, basic usage of the `play` method, and provided examples for different frameworks. Additionally, we explored the available documentation and dependencies of the package.

Happy video playback with video-player-one!