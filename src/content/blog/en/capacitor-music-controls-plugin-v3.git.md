---
title: How to Use Capacitor Music Controls Plugin V3
description: >-
  A step-by-step guide on integrating and using the Capacitor Music Controls
  Plugin V3 in your Capacitor applications.
created_at: '2022-01-30'
published: true
slug: capacitor-music-controls-plugin-v3.git
locale: en
---

# How to Use Capacitor Music Controls Plugin V3

The Capacitor Music Controls Plugin V3 is a useful tool for adding music control features to your Capacitor applications. This plugin allows you to display media notifications with play/pause, previous, and next buttons, enabling users to control audio playback easily. Here's a detailed tutorial on how to integrate and use the Capacitor Music Controls Plugin V3 in your project:

## Installation

To install the Capacitor Music Controls Plugin V3, run the following command:

```bash
npm install capacitor-v3-music-controls
```

### iOS Setup

After installing the plugin, synchronize the iOS platform by running:

```bash
npx cap sync ios
```

### Android Setup

For Android, synchronize the platform using the command:

```bash
npx cap sync android
```

## Importing the Plugin

Start by importing the plugin in your file:

```javascript
import { CapacitorMusicControls } from 'capacitor-v3-music-controls'
```

## Creating Media Controls

You can create media controls using the following method:

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
  // Handle success
})
.catch((error) => {
  console.error(error);
});
```

## Conclusion

By following these steps, you can easily incorporate music control functionality into your Capacitor applications using the Capacitor Music Controls Plugin V3. Explore the additional features offered by this plugin to enhance the user experience in your app.
```
