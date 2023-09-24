# Tutorial: Using the capacitor-music-controls-plugin-v3 Package

## Introduction

The `capacitor-music-controls-plugin-v3` package is a plugin for Capacitor 3+ that allows you to display a 'media' notification with play/pause, previous, and next buttons, enabling the user to control the playing of music. It also handles headset events on Android. In this tutorial, we will go through the steps to install and use this plugin in your Capacitor application.

## Prerequisites

Before starting this tutorial, make sure you have the following prerequisites:

- Capacitor 3 or higher is installed in your project.
- Basic knowledge of JavaScript and Capacitor.

## Installation

1. Open your terminal or command prompt and navigate to the root directory of your Capacitor project.

2. Run the following command to install the `capacitor-music-controls-plugin-v3` package:

   ```shell
   npm install capacitor-music-controls-plugin-v3
   ```

3. After the installation is complete, sync your project with Capacitor by running the following commands:

   - For iOS:

     ```shell
     npx cap sync ios
     ```

   - For Android:

     ```shell
     npx cap sync android
     ```

## Importing the Plugin

1. In your project file, open the file where you want to use the music controls plugin.

2. At the top of the file, import the `CapacitorMusicControls` plugin from the `capacitor-music-controls-plugin-v3` package:

   ```javascript
   import { CapacitorMusicControls } from 'capacitor-music-controls-plugin-v3';
   ```

## Methods

The `CapacitorMusicControls` plugin provides several methods for creating and controlling the media controls. Here are the most commonly used methods:

### 1. Create the Media Controls

To create the media controls, use the `create()` method of the `CapacitorMusicControls` plugin:

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
  // TODO: Handle success
}).catch(e => {
  console.log(e);
});
```

In the above example, we are creating the media controls with various parameters such as the track, artist, album, cover art, and control button icons. The method returns a promise that can be used to handle success or error.

### 2. Update Playing State and Elapsed Time

To update the playing state and elapsed time, use the `updateIsPlaying()` and `updateElapsed()` methods respectively:

```javascript
// Update playing state (true/false)
CapacitorMusicControls.updateIsPlaying(true).then(() => {
  // TODO: Handle success
}).catch(e => {
  console.log(e);
});

// Update elapsed time (seconds)
CapacitorMusicControls.updateElapsed(30).then(() => {
  // TODO: Handle success
}).catch(e => {
  console.log(e);
});
```

In the above example, we update the playing state to `true` using the `updateIsPlaying()` method, and update the elapsed time to 30 seconds using the `updateElapsed()` method.

## Conclusion

Congratulations! You have successfully installed and used the `capacitor-music-controls-plugin-v3` package in your Capacitor project. You can now create and control media controls in your application. Explore the documentation of the plugin for more advanced usage and available methods.

If you have any questions or issues, refer to the plugin's GitHub repository for support and updates.