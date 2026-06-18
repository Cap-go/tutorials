```markdown
---
"title": "How to Use @capgo/ivs-player Package in Your Capacitor App"
"description": "Step-by-step tutorial on integrating and using the @capgo/ivs-player package in your Capacitor app for Android and iOS"
"created_at": "2022-01-15"
"published": true
"slug": "ivs-player-git"
---

# How to Use @capgo/ivs-player Package in Your Capacitor App

In this tutorial, we will walk through the steps to integrate and use the @capgo/ivs-player package in your Capacitor app for both Android and iOS.

## Installation

To get started, you need to install the @capgo/ivs-player package in your project. Use the following command to install the package and sync the changes.

```bash
npm install @capgo/ivs-player
npx cap sync
```

## Initialization and Configuration

After installing the package, you can initialize and configure the player in your app. Here is an example of how to create a player instance:

```typescript
import { IvsPlayer } from '@capgo/ivs-player';

const player = new IvsPlayer();
player.create({
  url: 'YOUR_VIDEO_URL_HERE',
  // Additional configuration options
}).then(() => {
  // Player created successfully
}).catch((error) => {
  // Handle any initialization errors
});
```

## Controlling the Player

Once the player is created, you can control it using various methods provided by the package. Here are some common methods you can use:

- `start()`: Start playing the video.
- `pause()`: Pause the video playback.
- `setMute()`: Mute/unmute the video.
- `setQuality()`: Set the video quality.
- `getPluginVersion()`: Get the version of the plugin.

## Event Listeners

You can also listen for various player events to handle them in your app. Here is an example of how to listen for the `onError` event:

```typescript
player.addListener('onError', (error) => {
  // Handle player errors
});
```

## Conclusion

By following this tutorial, you should now be able to successfully integrate and use the @capgo/ivs-player package in your Capacitor app. Enjoy seamless video playback in your app!

```