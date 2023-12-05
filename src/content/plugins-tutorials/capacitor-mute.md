# Using the @capgo/capacitor-mute Package

This tutorial will guide you through the process of using the `@capgo/capacitor-mute` package in your Capacitor project. This package allows you to mute and unmute audio in your app using Capacitor plugins.

## Installation

To get started, first install the `@capgo/capacitor-mute` package in your Capacitor project:

```bash
npm install @capgo/capacitor-mute
```

## Adding the Plugin to Your App

1. Open your `capacitor.config.json` file and add the following line to the `plugins` array:

```json
{
  "name": "@capgo/capacitor-mute",
  "path": "../node_modules/@capgo/capacitor-mute"
}
```

2. Run the following command to sync the plugin with your native project:

```bash
npx cap sync
```

3. Import the `CapacitorMute` class from the `@capgo/capacitor-mute` package in your TypeScript file:

```typescript
import { CapacitorMute } from '@capgo/capacitor-mute';
```

## Muting and Unmuting Audio

You can now use the `CapacitorMute` class to mute and unmute audio in your app. Here's an example of how to use it:

```typescript
// Mute audio
await CapacitorMute.mute();

// Unmute audio
await CapacitorMute.unmute();
```

By calling the `mute()` method, you can mute all audio in your app. Similarly, calling the `unmute()` method will unmute the audio.

## Example Usage

Here's an example of how you can use the `@capgo/capacitor-mute` package in your app:

```typescript
import { CapacitorMute } from '@capgo/capacitor-mute';

async function toggleMute() {
  // Check if audio is currently muted
  const isMuted = await CapacitorMute.isMuted();

  // Toggle mute state
  if (isMuted) {
    await CapacitorMute.unmute();
    console.log("Audio is unmuted now.");
  } else {
    await CapacitorMute.mute();
    console.log("Audio is muted now.");
  }
}
```

In this example, we create a function `toggleMute()` that checks if the audio is currently muted using the `isMuted()` method. If the audio is muted, it will call the `unmute()` method to unmute the audio, and if the audio is not muted, it will call the `mute()` method to mute the audio.

## Conclusion

In this tutorial, you learned how to use the `@capgo/capacitor-mute` package to mute and unmute audio in your Capacitor app. This can be useful for scenarios where you need to control the audio playback within your app.

---

Frontmatter:

```
---
title: "Using the @capgo/capacitor-mute Package"
description: "Learn how to mute and unmute audio in your Capacitor app using the @capgo/capacitor-mute package."
created_at: "2023-05-15"
published: true
slug: capacitor-mute
---
```

This tutorial was created on May 15, 2023, and covers the usage of the `@capgo/capacitor-mute` package. After following the installation steps and learning how to use the mute and unmute methods, you can effectively control the audio playback in your Capacitor app.