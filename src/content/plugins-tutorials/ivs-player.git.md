```markdown
---
"title": "Using @capgo/ivs-player Package Tutorial",
"description": "Step-by-step guide on integrating and using the @capgo/ivs-player package in your Capacitor app for Android and iOS.",
"created_at": "2022-01-14",
"published": true,
"slug": "ivs-player.git"
---

# Using @capgo/ivs-player Package Tutorial

In this tutorial, we will go through how to integrate and use the @capgo/ivs-player package in your Capacitor app for both Android and iOS platforms.

## Installation

To start using the @capgo/ivs-player package, you first need to install it using npm and then sync it with Capacitor. Run the following commands in your terminal:

```bash
npm install @capgo/ivs-player
npx cap sync
```

## Getting Started

Once the package is installed and synced with Capacitor, you can start using its API to control the video player in your app.

### Initialization

To create an IVS player instance, you can use the `create` method by providing the necessary options like URL, title, subtitle, etc.

```typescript
import { Plugins } from '@capacitor/core';
const { IvsPlayer } = Plugins;

// Create IVS player instance
IvsPlayer.create({
  url: 'YOUR_VIDEO_URL_HERE',
  pip: true,
  title: 'Video Title',
  subtitle: 'Video Subtitle',
  cover: 'Cover Image URL',
  autoPlay: true,
  toBack: true,
  // Additional options like x, y, width, height can also be provided
})
  .then(() => {
    // Player created successfully
  })
  .catch((error) => {
    console.error('Error creating player', error);
  });
```

## Player Controls

The @capgo/ivs-player package provides a range of methods to control the player, such as starting, pausing, setting quality, mute, and more. Here are some of the available methods:

- `start()`: Start playing the video.
- `pause()`: Pause the video playback.
- `setQuality(quality: string)`: Set the video quality.
- `setMute(isMuted: boolean)`: Mute or unmute the video.

You can refer to the complete API documentation for a detailed list of available methods and events.

## Conclusion

In this tutorial, we explored how to integrate and use the @capgo/ivs-player package in a Capacitor app for both Android and iOS platforms. You can now enhance your app by incorporating a powerful IVS player using this package.
``` 
```