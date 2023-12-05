---
title: "Using capacitor-music-controls-plugin-v3"
description: "Learn how to use the capacitor-music-controls-plugin-v3 package to add music controls to your Capacitor applications."
created_at: "2022-10-20"
published: true
slug: "capacitor-music-controls-plugin-v3"
---

# Using capacitor-music-controls-plugin-v3

In this tutorial, we will learn how to use the capacitor-music-controls-plugin-v3 package to add music controls to your Capacitor applications. The plugin allows you to display a 'media' notification with play/pause, previous, and next buttons, allowing the user to control the playback of music. The plugin supports both Android and iOS platforms.

## Installation

To get started, install the capacitor-music-controls-plugin-v3 package using npm:

```bash
npm install capacitor-music-controls-plugin-v3
```

## iOS Setup

After installing the package, run the following command to sync the iOS platform:

```bash
npx cap sync ios
```

## Android Setup

For Android, run the following command to sync the Android platform:

```bash
npx cap sync android
```

## Importing the Plugin

To use the capacitor-music-controls-plugin-v3 in your application, import the plugin from the package:

```javascript
import { CapacitorMusicControls } from 'capacitor-music-controls-plugin-v3';
```

## Available Methods

The plugin provides several methods to control the music controls. Here are some of the most commonly used methods:

### Create Media Controls

To create the media controls, use the `create` method. This method allows you to specify the track, artist, album, cover image, and other options for the media controls.

```javascript
CapacitorMusicControls.create({
  track: 'Time is Running Out',
  artist: 'Muse',
  album: 'Absolution',
  cover: 'albums/absolution.jpg',
  hasPrev: false,
  hasNext: false,
  hasClose: true,
  duration: 60,
  elapsed: 10,
  hasSkipForward: true,
  hasSkipBackward: true,
  skipForwardInterval: 15,
  skipBackwardInterval: 15,
  hasScrubbing: false,
  isPlaying: true,
  dismissable: true,
  ticker: 'Now playing "Time is Running Out"',
  playIcon: 'media_play',
  pauseIcon: 'media_pause',
  prevIcon: 'media_prev',
  nextIcon: 'media_next',
  closeIcon: 'media_close',
  notificationIcon: 'notification',
}).then(() => {
  // Media controls created successfully
}).catch((e) => {
  console.log(e);
});
```

### Update Playback Status and Time

You can update the playback status and time using the `updateIsPlaying` and `updateElapsed` methods. The `updateIsPlaying` method allows you to update whether the music is playing or paused, while the `updateElapsed` method allows you to update the elapsed time in seconds.

```javascript
// Update playback status
CapacitorMusicControls.updateIsPlaying(true);

// Update elapsed time
CapacitorMusicControls.updateElapsed(30);
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-music-controls-plugin-v3 package to add music controls to your Capacitor applications. We have covered the installation process, importing the plugin, and using the available methods to create media controls and update the playback status. With this plugin, you can enhance your music streaming or audio playback apps with a customizable media notification.

Remember to refer to the documentation for more details on the plugin's capabilities and available options.