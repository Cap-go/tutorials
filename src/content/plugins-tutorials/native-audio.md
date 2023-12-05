---
title: "Using capacitor-native-audio-streamer"
description: "This tutorial will guide you through the process of using the capacitor-native-audio-streamer package to stream audio in your Capacitor app."
created_at: "2022-02-28"
published: true
slug: "native-audio"
---

# Using capacitor-native-audio-streamer

In this tutorial, we will learn how to use the capacitor-native-audio-streamer package to stream audio in your Capacitor app.

## Installation

To get started, we need to install the capacitor-native-audio-streamer package. Open your terminal and navigate to the root folder of your Capacitor project. Run the following command:

```bash
npm install capacitor-native-audio-streamer
```

This will install the package and add it to your project's dependencies.

## Configuration

Next, we need to configure the capacitor-native-audio-streamer package. Open the `capacitor.config.json` file in the root folder of your project. Add the following code inside the `plugins` section:

```json
"capacitor-native-audio-streamer": {
  "startForeground": true
}
```

This configuration enables the foreground service for audio streaming.

## Usage

Now that we have installed and configured the capacitor-native-audio-streamer package, let's see how to use it in our app.

### 1. Import the Plugin

Open the file where you want to use the capacitor-native-audio-streamer and import the plugin at the top of the file:

```typescript
import { Plugins } from '@capacitor/core';
const { NativeAudioStreamer } = Plugins;
```

### 2. Start Audio Streaming

To start streaming audio, we need to call the `startStreaming` method provided by the capacitor-native-audio-streamer plugin. Here's an example of how to use it:

```typescript
NativeAudioStreamer.startStreaming({
  url: 'https://example.com/audio.mp3',
  title: 'My Audio Stream',
  artist: 'John Doe',
  album: 'My Album'
})
  .then(() => {
    console.log('Audio streaming started successfully');
  })
  .catch((error) => {
    console.error('Error starting audio streaming:', error);
  });
```

Make sure to replace the `url`, `title`, `artist`, and `album` values with your own audio stream details.

### 3. Stop Audio Streaming

To stop the audio streaming, we can call the `stopStreaming` method provided by the capacitor-native-audio-streamer plugin. Here's an example:

```typescript
NativeAudioStreamer.stopStreaming()
  .then(() => {
    console.log('Audio streaming stopped successfully');
  })
  .catch((error) => {
    console.error('Error stopping audio streaming:', error);
  });
```

## Conclusion

In this tutorial, we learned how to install, configure, and use the capacitor-native-audio-streamer package to stream audio in a Capacitor app. We covered the installation process, configuration steps, and demonstrated how to start and stop audio streaming. This package provides a convenient way to incorporate audio streaming functionality into your Capacitor app.

I hope you found this tutorial helpful. Happy coding!

Please let me know if you have any questions.