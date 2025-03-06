---
"title": "How to Use Capacitor Music Controls Plugin",
"description": "A tutorial on integrating and using the Capacitor Music Controls Plugin in your Capacitor applications for controlling media playback.",
"created_at": "2023-10-19",
"published": true,
"slug": "capacitor-music-controls-plugin.git"
---

# Using Capacitor Music Controls Plugin

Capacitor Music Controls Plugin is a great addition to your Capacitor applications for controlling media playback. It allows you to display a 'media' notification with play/pause, previous, next buttons, enabling users to control the play. This tutorial will guide you through the process of integrating and using the Capacitor Music Controls Plugin in your project.

## Installation

To install the Capacitor Music Controls Plugin, you can use the following command:

```bash
npm install capacitor-v3-music-controls
```

## Integration

Import Capacitor Plugins and the Capacitor Music Controls Plugin at the top of your file:

```javascript
import { CapacitorMusicControls } from 'capacitor-v3-music-controls'
```

## Methods

You can create the media controls using the following method:

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
    console.error(error)
  })
```

By following these steps, you can easily integrate and utilize the Capacitor Music Controls Plugin to enhance media playback control in your Capacitor applications.