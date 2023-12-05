---
title: "Using capacitor-music-controls Package"
description: "A tutorial on how to use the capacitor-music-controls package to control music playback and display a media notification in Capacitor applications."
created_at: "2022-02-15"
published: true
slug: "cap-music-controls"
---

# Using capacitor-music-controls Package

The `capacitor-music-controls` package allows you to control music playback and display a media notification in Capacitor applications. With this package, you can easily create a media player with play/pause, previous, and next buttons, and customize the media notification for both Android and iOS platforms.

## Installation

To install the `capacitor-music-controls` package, run the following command in your project directory:

```bash
npm install capacitor-music-controls
```

After installing the package, you need to sync the native files to Capacitor. Run the following commands based on your target platforms:

### iOS

```bash
npx cap sync ios
```

### Android

```bash
npx cap sync android
```

## Importing the Plugin

In your JavaScript or TypeScript file, import the `CapacitorMusicControls` from the `capacitor-music-controls` package:

```javascript
import { CapacitorMusicControls } from 'capacitor-music-controls';
```

## Creating the Media Controls

To create the media controls, use the `CapacitorMusicControls.create()` method. You can provide various options to customize the media player and the media notification. Here's an example:

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
})
  .then(() => {
    // Media controls created successfully
  })
  .catch((e) => {
    console.log(e);
  });
```

In the above example, we pass various options to customize the media controls:

- `track`: The name of the track (optional)
- `artist`: The name of the artist (optional)
- `album`: The name of the album (optional)
- `cover`: The cover image URL or local file path (optional)
- `hasPrev`: Whether to show the previous button (optional, default: true)
- `hasNext`: Whether to show the next button (optional, default: true)
- `hasClose`: Whether to show the close button (optional, default: false)
- `duration`: The duration of the track in seconds (optional, default: 0)
- `elapsed`: The elapsed time of the track in seconds (optional, default: 0)
- `hasSkipForward`: Whether to show the skip forward button (optional, default: false)
- `hasSkipBackward`: Whether to show the skip backward button (optional, default: fale)
- `skipForwardInterval`: The skip forward interval in seconds (optional, default: 15)
- `skipBackwardInterval`: The skip backward interval in seconds (optional, default: 15)
- `hasScrubbing`: Whether to enable scrubbing from the control center progress bar (optional, default: false)
- `isPlaying`: Whether the track is playing (optional, default: true)
- `dismissable`: Whether the media notification is dismissable (optional, default: false)
- `ticker`: The text displayed in the status bar when the notification is updated (optional)
- `playIcon`: The name of the play icon (optional)
- `pauseIcon`: The name of the pause icon (optional)
- `prevIcon`: The name of the previous icon (optional)
- `nextIcon`: The name of the next icon (optional)
- `closeIcon`: The name of the close icon (optional)
- `notificationIcon`: The name of the notification icon (optional)

Once the media controls are created successfully, you can interact with them using other methods provided by the `CapacitorMusicControls` object.

## Controlling Playback

To toggle play/pause, you can use the `CapacitorMusicControls.togglePlayPause()` method. This method will toggle the playback state between play and pause.

```javascript
CapacitorMusicControls.togglePlayPause();
```

## Destroying the Media Controls

To stop the media controls and destroy them, you can use the `CapacitorMusicControls.destroy()` method.

```javascript
CapacitorMusicControls.destroy();
```

## Listening to Events

The `capacitor-music-controls` package provides various events that you can listen to and handle in your application. Here are some example event listeners:

```javascript
import { MusicControlEvents } from 'capacitor-music-controls';

// isPlaying
MusicControl.addListener(MusicControlEvents.IS_PLAYING, (data) => {
  console.log('Is playing:', data.isPlaying);
});

// songFinished
MusicControl.addListener(MusicControlEvents.FINISHED, (data) => {
  console.log('Song finished');
});

// mediaActions
MusicControl.addListener(MusicControlEvents.NOTIFICATION_ACTIONS, (data) => {
  console.log('Notification action:', data.action);
});

// timeUpdated
MusicControl.addListener(MusicControlEvents.TIME_UPDATED, (data) => {
  console.log('Current time:', data.currentTime);
});

// musicLoaded
MusicControl.addListener(MusicControlEvents.MUSIC_LOADED, (data) => {
  console.log('Music loaded');
});

// mediaSessionActions
MusicControl.addListener('mediaSessionActions', (data) => {
  console.log('Media session action:', data.action);
});
```

In the above example, we are listening to various events using the `addListener()` method provided by the `MusicControl` object. The event names are imported from the `MusicControlEvents` object.

These events allow you to track the playback state, music progress, notification actions, and more.

## Summary

In this tutorial, we have learned how to use the `capacitor-music-controls` package to create a media player and display a media notification in Capacitor applications. We have seen how to install the package, import the plugin, create the media controls, control the playback, destroy the media controls, and listen to events.

With the `capacitor-music-controls` package, you can easily add music playback and media notification features to your Capacitor applications, providing a seamless music experience to your users.