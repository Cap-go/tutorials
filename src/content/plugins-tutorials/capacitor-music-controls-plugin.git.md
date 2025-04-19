---
"title": "Using Capacitor Music Controls Plugin"
"description": "Tutorial on how to use the Capacitor Music Controls Plugin in your Capacitor applications."
"created_at": "2022-04-05"
"published": true
"slug": "capacitor-music-controls-plugin.git"
---

# Using Capacitor Music Controls Plugin

The Capacitor Music Controls Plugin allows you to add media controls to your Capacitor applications, enabling users to play/pause, skip tracks, and more right from the notification area. Follow the steps below to integrate and use this plugin in your project.

## Installation

To install the Capacitor Music Controls Plugin, run the following command:

```bash
npm install capacitor-v3-music-controls
```

## Integration

1. Import the plugin at the top of your file:

```javascript
import { CapacitorMusicControls } from 'capacitor-v3-music-controls'
```

2. Create the media controls with the desired configuration:

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
    // Success callback
  })
  .catch((error) => {
    console.error(error)
  })
```

Follow these steps to seamlessly integrate the Capacitor Music Controls Plugin into your Capacitor project and enhance the user experience with media control functionality.