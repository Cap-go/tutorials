---
title: "Using capacitor-youtube-player package"
description: "A tutorial on how to use the capacitor-youtube-player package"
created_at: "2022-07-29"
published: true
slug: capacitor-youtube-player
---

# Using capacitor-youtube-player package

In this tutorial, we will learn how to use the capacitor-youtube-player package to integrate YouTube videos into your Capacitor project.

## Installation

To get started, install the capacitor-youtube-player package by running the following command:

```bash
npm install capacitor-youtube-player
```

## Usage

Once the package is installed, you can use it to embed YouTube videos in your Capacitor app. Here's how:

1. Import the `CapacitorYouTubePlayer` module from the package:

    ```typescript
    import { CapacitorYouTubePlayer } from 'capacitor-youtube-player';
    ```

2. Initialize the plugin by calling the `initialize` method:

    ```typescript
    CapacitorYouTubePlayer.initialize();
    ```

3. Load a video by calling the `load` method:

    ```typescript
    const videoId = 'YOUR_VIDEO_ID';
    CapacitorYouTubePlayer.load({ videoId });
    ```

4. Play the video by calling the `play` method:

    ```typescript
    CapacitorYouTubePlayer.play();
    ```

And that's it! You have successfully integrated a YouTube video into your Capacitor app using the capacitor-youtube-player package.

## Conclusion

In this tutorial, we have seen how to use the capacitor-youtube-player package to add YouTube videos to your Capacitor project. You can now enhance your app's multimedia capabilities by leveraging the power of YouTube.

Remember to refer to the official documentation of the capacitor-youtube-player package for more detailed usage instructions and additional features.

Happy coding!