```markdown
---
title: "Using the Capacitor Music Controls Plugin"
description: "A tutorial on how to use the capacitor-music-controls-plugin package in your Capacitor applications"
created_at: "2022-03-11"
published: true
slug: capacitor-music-controls-plugin
---

# Using the Capacitor Music Controls Plugin

The Capacitor Music Controls Plugin is a powerful tool that allows you to add media controls to your Capacitor applications. With this plugin, you can display a media notification with play/pause, previous, and next buttons, allowing users to control the playback of audio files. The plugin also handles headset events like plug, unplug, and headset button on Android devices.

In this tutorial, we will guide you on how to install and use the Capacitor Music Controls Plugin in your Capacitor application.

## Installation

To install the Capacitor Music Controls Plugin, navigate to your project's root directory and run the following command:

```console
npm install capacitor-music-controls-plugin
```

## Integration

After successfully installing the plugin, you need to integrate it into your project.

### 1. Import the Plugin

Import the `CapacitorMusicControls` from the `capacitor-music-controls-plugin` package at the top of your file:

```javascript
import { CapacitorMusicControls } from 'capacitor-music-controls-plugin';
```

### 2. Create the Media Controls

To create the media controls, use the `create` method of `CapacitorMusicControls`. This method accepts an options object with various properties to customize the media controls.

Here is an example of creating media controls:

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

In the above code, we pass various properties to customize the media controls. Feel free to modify these properties based on your requirements.

### 3. Handling Events

The Capacitor Music Controls Plugin provides several events that you can listen to in order to handle user interactions and track the progress of the media playback.

Here are some examples of how to listen to these events:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorMusicControls } = Plugins;

// Listen to the 'isPlaying' event
CapacitorMusicControls.addListener('isPlaying', (data) => {
  console.log('Is playing:', data.isPlaying);
});

// Listen to the 'finished' event
CapacitorMusicControls.addListener('finished', (data) => {
  console.log('Playback finished');
});

// Listen to the 'notificationActions' event
CapacitorMusicControls.addListener('notificationActions', (data) => {
  console.log('Action:', data.action);
});

// Listen to the 'timeUpdated' event
CapacitorMusicControls.addListener('timeUpdated', (data) => {
  console.log('Current time:', data.currentTime);
});

// Listen to the 'musicLoaded' event
CapacitorMusicControls.addListener('musicLoaded', (data) => {
  console.log('Duration:', data.duration);
});
```

By listening to these events, you can take appropriate actions based on the user interactions and track the progress of the media playback.

### 4. Clean Up

Don't forget to clean up the media controls when they are no longer needed. You can use the `destroy` method of `CapacitorMusicControls` to stop the media playback and remove the media controls from the notification area.

```javascript
CapacitorMusicControls.destroy();
```

## Conclusion

In this tutorial, you learned how to install and use the Capacitor Music Controls Plugin in your Capacitor applications. You can now enhance the user experience by adding media controls to your audio playback functionality. Experiment with the various options and events provided by the plugin to create a customized media controls experience for your users.

Happy coding!
```
```