---
"title": "How to Use Capacitor Music Controls Plugin",
"description": "This tutorial will guide you on how to integrate and use the Capacitor Music Controls Plugin in your Capacitor app for controlling media playback.",
"created_at": "2021-11-10",
"published": true,
"slug": "capacitor-music-controls-plugin.git"
---

# Using Capacitor Music Controls Plugin

The Capacitor Music Controls Plugin allows you to display media controls in your Capacitor applications, enabling users to interact with music playback functionalities easily. Follow the steps below to integrate and use this plugin in your project.

## Installation

To begin, install the Capacitor Music Controls Plugin using npm:

```bash
npm install capacitor-v3-music-controls
```

## iOS Setup

After installation, synchronize the changes for iOS by running:

```bash
npx cap sync ios
```

## Android Setup

For Android, synchronize the changes as follows:

```bash
npx cap sync android
```

## Importing the Plugin

Import the Capacitor Music Controls Plugin into your file where you want to use it:

```javascript
import { CapacitorMusicControls } from 'capacitor-v3-music-controls'
```

## Creating Media Controls

You can create media controls using the `CapacitorMusicControls.create()` method. Customize the track, artist, album, cover, buttons, and other options as needed. Here is an example:

```javascript
CapacitorMusicControls.create({
  track: 'Time is Running Out',
  artist: 'Muse',
  album: 'Absolution',
  cover: 'albums/absolution.jpg',
  hasPrev: false,
  hasNext: false,
  hasClose: true,
  // Add more configuration options as required
})
  .then(() => {
    // Handle success
  })
  .catch((error) => {
    console.error(error)
  })
```

Follow the documentation for more advanced configurations and features specific to iOS and Android platforms.

By following these steps, you can successfully integrate and leverage the Capacitor Music Controls Plugin in your Capacitor application. Enjoy controlling media playback with ease!