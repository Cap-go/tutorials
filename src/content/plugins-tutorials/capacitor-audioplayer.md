---
title: "Using the Capacitor Audioplayer Package"
description: "A tutorial on how to use the capacitor-audioplayer package to play audio in your Capacitor projects."
created_at: "2022-08-05"
published: true
slug: "capacitor-audioplayer"
---

# Using the Capacitor Audioplayer Package

In this tutorial, we will learn how to use the capacitor-audioplayer package to add audio playback capabilities to your Capacitor projects. The capacitor-audioplayer package provides native support for audio playlists, background support, and lock screen controls on Android, iOS, and Web platforms.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor 3.0 or later
- npm (Node Package Manager)

## Installation

To install the capacitor-audioplayer package, open your project's command line interface and run the following command:

```
npm install capacitor-audioplayer
```

Next, sync your Capacitor project to update its dependencies:

```
npx cap sync
```

## Usage

### 1. Import the package

In your project's JavaScript or TypeScript files, import the capacitor-audioplayer package:

```javascript
import { CapacitorAudioplayer } from 'capacitor-audioplayer';
```

### 2. Initialize the audioplayer

To initialize the audioplayer, call the `initialize()` method provided by the CapacitorAudioplayer class:

```javascript
const audioplayer = new CapacitorAudioplayer();
audioplayer.initialize();
```

### 3. Load audio files

To load audio files into the audioplayer, call the `loadPlaylist()` method and pass an array of audio file URLs:

```javascript
const playlist = [
  'https://example.com/audio1.mp3',
  'https://example.com/audio2.mp3',
  'https://example.com/audio3.mp3'
];
audioplayer.loadPlaylist(playlist);
```

### 4. Play, pause, and control audio playback

To control the audio playback, use the following methods provided by the CapacitorAudioplayer class:

- `play()`: Starts or resumes audio playback.
- `pause()`: Pauses the currently playing audio.
- `stop()`: Stops the audio playback.

```javascript
audioplayer.play();
audioplayer.pause();
audioplayer.stop();
```

### 5. Handle audio events

The capacitor-audioplayer package provides several events that you can listen to:

- `trackChange`: Triggered when the current track changes.
- `playbackStateChange`: Triggered when the playback state changes (e.g., from playing to paused).

To listen to these events, use the following methods provided by the CapacitorAudioplayer class:

```javascript
audioplayer.addListener('trackChange', (track) => {
  console.log(`Current track: ${track}`);
});

audioplayer.addListener('playbackStateChange', (state) => {
  console.log(`Playback state: ${state}`);
});
```

### 6. Clean up

When you no longer need the audioplayer, make sure to clean up by calling the `destroy()` method:

```javascript
audioplayer.destroy();
```

## Conclusion

In this tutorial, we learned how to use the capacitor-audioplayer package to add audio playback capabilities to Capacitor projects. We covered the installation process, initializing the audioplayer, loading audio files, controlling audio playback, handling audio events, and cleaning up. Now you can enhance your Capacitor apps with audio playback functionality!

Feel free to explore the capacitor-audioplayer documentation for additional features and customization options.

Happy coding!