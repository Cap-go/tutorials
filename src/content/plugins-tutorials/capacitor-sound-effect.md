---
title: "Using the capacitor-sound-effect Package"
description: "This tutorial will guide you through the process of using the capacitor-sound-effect package to enhance the audio capabilities of your Capacitor app."
created_at: "2022-07-28"
published: true
slug: "capacitor-sound-effect"
---

# Using the capacitor-sound-effect Package

The capacitor-sound-effect package allows you to easily implement sound effects in your Capacitor app, enhancing the overall user experience. In this tutorial, we will walk you through the process of installing and using the capacitor-sound-effect package step by step.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- Capacitor Project (created using `npx @capacitor/cli create`)

## Step 1: Install the Package

To begin, open your project's terminal and run the following command to install the capacitor-sound-effect package:

```bash
npm install capacitor-sound-effect
```

## Step 2: Import the Package

Next, you need to import the capacitor-sound-effect package into your project. Open the file where you want to use sound effects, typically a TypeScript/JavaScript file.

```typescript
import { Plugins } from '@capacitor/core';
const { SoundEffect } = Plugins;
```

## Step 3: Load Sound Effects

Now let's load the sound effects you want to use in your app. You can either load them from local files or from remote URLs. You can define multiple sound effects by providing an array of sound effect configurations.

```typescript
SoundEffect.loadSounds({
  sounds: [
    {
      key: 'buttonClick',
      assetPath: 'assets/sounds/button-click.mp3'
    },
    {
      key: 'notification',
      assetPath: 'http://example.com/notification.mp3'
    }
  ]
});
```

Make sure to replace `'button-click.mp3'` and `'http://example.com/notification.mp3'` with the actual paths or URLs to your sound effect files.

## Step 4: Play Sound Effects

To play a sound effect, you can call the `play()` method of the SoundEffect plugin and provide the key of the sound effect you want to play.

```typescript
SoundEffect.play({ key: 'buttonClick' });
```

You can also provide additional options, such as volume and loop:

```typescript
SoundEffect.play({
  key: 'notification',
  options: {
    volume: 0.5,
    loop: true
  }
});
```

## Step 5: Control Sound Effects

The capacitor-sound-effect package provides additional methods to control sound effects. For example, you can pause, resume, or stop a sound effect using the corresponding methods:

```typescript
SoundEffect.pause({ key: 'notification' });
SoundEffect.resume({ key: 'notification' });
SoundEffect.stop({ key: 'notification' });
```

## Step 6: Clean Up

Lastly, don't forget to clean up and release the memory resources used by the sound effects when they are no longer needed. You can use the `unloadAll()` method to unload all the sound effects loaded by the plugin.

```typescript
SoundEffect.unloadAll();
```

## Conclusion

Congratulations! You have successfully learned how to use the capacitor-sound-effect package to implement sound effects in your Capacitor app. You can now enhance the user experience by adding audio feedback to your app's interactions.

Remember to refer to the official [Capacitor Sound Effect Plugin documentation](https://capacitorjs.com/docs/apis/sound-effect) for more detailed information on the available methods and options.

Happy coding!