---
title: "Using Capacitor ExoPlayer"
description: "A tutorial on how to use the Capacitor ExoPlayer package for audio playback in Capacitor projects."
created_at: "2021-12-29"
published: true
slug: capacitor-exoplayer
---

# Using Capacitor ExoPlayer

In this tutorial, we will learn how to use the Capacitor ExoPlayer package for audio playback in Capacitor projects.

## Installation

To get started, we need to install the Capacitor ExoPlayer package. Open your terminal and run the following command:

```
npm install capacitor-exoplayer
```

## Usage

### 1. Import the Package

Once the installation is complete, import the Capacitor ExoPlayer package into your project:

```typescript
import { CapacitorExoPlayer } from 'capacitor-exoplayer';
```

### 2. Initialize the Plugin

Before using any functionality of the Capacitor ExoPlayer, we need to initialize the plugin. Add the following code to your `app.component.ts` file or any other appropriate location:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorExoPlayer } = Plugins;

CapacitorExoPlayer.initialize();
```

### 3. Play an Audio File

To play an audio file, use the `play` method provided by the Capacitor ExoPlayer plugin. Pass the URL of the audio file as an argument.

```typescript
const url = 'https://example.com/audio.mp3';

CapacitorExoPlayer.play({ url });
```

### 4. Pause and Resume Playback

You can pause and resume audio playback using the `pause` and `resume` methods respectively.

```typescript
CapacitorExoPlayer.pause();
```

```typescript
CapacitorExoPlayer.resume();
```

### 5. Stop Playback

To stop audio playback and release any resources used by the player, use the `stop` method.

```typescript
CapacitorExoPlayer.stop();
```

### 6. Event Listening

You can also listen for various events emitted by the Capacitor ExoPlayer. Here's an example of how to listen for the `started` event:

```typescript
CapacitorExoPlayer.addListener('started', (event: any) => {
  console.log('Playback started:', event);
});
```

### 7. Clean Up

When you no longer need to use the Capacitor ExoPlayer, make sure to clean up by calling the `cleanup` method.

```typescript
CapacitorExoPlayer.cleanup();
```

## Conclusion

In this tutorial, we learned how to use the Capacitor ExoPlayer package for audio playback in Capacitor projects. We covered installation, initialization, playback controls, event listening, and cleanup. With this knowledge, you can now integrate audio playback capabilities into your Capacitor applications using the Capacitor ExoPlayer plugin.

