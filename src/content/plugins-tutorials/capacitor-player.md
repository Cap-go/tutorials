---
title: "Using the Capacitor Player Package"
description: "Learn how to use the Capacitor Player package to add video playback functionality to your Capacitor apps."
created_at: "2022-09-15"
published: true
slug: capacitor-player
---

# Using the Capacitor Player Package

In this tutorial, we will explore how to use the Capacitor Player package to add video playback functionality to your Capacitor apps. The Capacitor Player package provides a simple and easy-to-use API for selecting and playing videos in your app.

## Installation

To get started, you need to install the Capacitor Player package in your project. Open your terminal and run the following command:

```bash
npm install capacitor-player
```

## Usage

Once the Capacitor Player package is installed, you can import and use the player in your code. Here's an example of how to use it:

```javascript
import { CapacitorPlayer } from 'capacitor-player';

// Select a video
const video = await CapacitorPlayer.selectVideo();

// Play the selected video
await CapacitorPlayer.play({ src: video.src });
```

In the above code, we first import the `CapacitorPlayer` from the `capacitor-player` package. Then, we use the `selectVideo` method to allow the user to select a video from their device. Once a video is selected, we pass the video source (`video.src`) to the `play` method to start playing the video.

## Additional Options

The Capacitor Player package provides additional options for customization. Here are some of the available options you can use:

- `mode`: Specify the video playback mode (e.g., `fullscreen`, `inline`, `popover`).
- `controls`: Enable or disable video controls.
- `autoplay`: Automatically start playing the video when it's loaded.
- `loop`: Enable or disable video loop.
- `initialTime`: Set the initial playback time of the video.
- `muted`: Mute or unmute the video.

You can pass these options as an object when calling the `play` method. For example:

```javascript
await CapacitorPlayer.play({
  src: video.src,
  mode: 'fullscreen',
  controls: true,
  autoplay: true,
  loop: false,
  initialTime: 0,
  muted: false,
});
```

Feel free to explore the Capacitor Player package documentation for more information about all available options and methods.

## Conclusion

In this tutorial, we covered the basics of using the Capacitor Player package to add video playback functionality to your Capacitor apps. The package provides a convenient API for selecting and playing videos, and it offers various options for customization. Start enhancing your Capacitor apps with video playback capabilities using the Capacitor Player package today!

Happy coding!