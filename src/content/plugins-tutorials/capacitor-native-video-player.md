---
title: "Using capacitor-native-video-player package"
description: "A tutorial on how to use the capacitor-native-video-player package to play videos in Capacitor"
created_at: "2022-07-20"
published: true
slug: "capacitor-native-video-player"
---

# Using capacitor-native-video-player package

In this tutorial, we will learn how to use the `capacitor-native-video-player` package to play videos in Capacitor. 

## Installation

To use the `capacitor-native-video-player` package, we first need to install it in our Capacitor project. 

```bash
npm install capacitor-native-video-player
```

## Importing the plugin

Next, we need to import the `capacitor-native-video-player` plugin in our project. Open the `capacitor.config.json` file in the root of your project and add the following entry:

```json
{
  "plugins": {
    "CapacitorNativeVideoPlayer": {
      "ios": "CapacitorNativeVideoPlayer",
      "android": "CapacitorNativeVideoPlayer"
    }
  }
}
```

## Using the plugin

Now that we have installed and imported the `capacitor-native-video-player` plugin, we can start using it in our code.

First, import the `CapacitorNativeVideoPlayer` object from the package:

```typescript
import { CapacitorNativeVideoPlayer } from 'capacitor-native-video-player';
```

To play a video, use the `play` method provided by the plugin:

```typescript
CapacitorNativeVideoPlayer.play({
  url: 'https://example.com/my-video.mp4',
  controls: true
});
```

The `play` method takes an object with the `url` property specifying the URL of the video to play. You can also pass the `controls` property as `true` if you want to display video controls.

## Additional options

The `capacitor-native-video-player` package provides additional options to customize the video playback:

- `autoPlay` (boolean): Set to true if you want the video to start playing automatically when opened.
- `loop` (boolean): Set to true if you want the video to loop.
- `shareable` (boolean): Set to true if you want to allow the video to be shared.
- `overlayType` (string): Set to 'image' to display an image overlay on the video.
- `overlayUrl` (string): The URL of the image overlay to display.

Here's an example of using these additional options:

```typescript
CapacitorNativeVideoPlayer.play({
  url: 'https://example.com/my-video.mp4',
  controls: true,
  autoPlay: true,
  loop: false,
  shareable: false,
  overlayType: 'image',
  overlayUrl: 'https://example.com/overlay.png'
});
```

And that's it! You have now learned how to use the `capacitor-native-video-player` package to play videos in Capacitor.

Remember to refer to the package's documentation for more advanced usage and additional features.

