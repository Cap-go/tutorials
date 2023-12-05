---
title: "Using capacitor-plugin-audiotoggle-bluetooth Package"
description: "This tutorial will guide you on how to use the capacitor-plugin-audiotoggle-bluetooth package to switch between speaker, earpiece, and bluetooth headset when playing audio."
created_at: "2022-03-15"
published: true
slug: "capacitor-plugin-audiotoggle-bluetooth"
---

# Using capacitor-plugin-audiotoggle-bluetooth Package

This tutorial will guide you on how to use the capacitor-plugin-audiotoggle-bluetooth package to switch between speaker, earpiece, and bluetooth headset when playing audio. 

## Installation

To get started, you need to install the capacitor-plugin-audiotoggle-bluetooth package. Open your terminal and run the following command:

```bash
npm install capacitor-plugin-audiotoggle-bluetooth
npx cap sync
```

This will install the package and sync it with your Capacitor project.

## API

The capacitor-plugin-audiotoggle-bluetooth package provides two methods:

### setAudioMode(data: { mode: AudioMode })

This method allows you to set the audio mode to switch between speaker, earpiece, and bluetooth headset. The `mode` parameter should be one of the following values:

- `AudioMode.SPEAKER`: Switches the audio output to the device speaker.
- `AudioMode.EARPIECE`: Switches the audio output to the earpiece.
- `AudioMode.BLUETOOTH`: Switches the audio output to the connected bluetooth headset.

Example usage:

```typescript
import { Plugins } from '@capacitor/core';
import 'capacitor-plugin-audiotoggle-bluetooth';

const { setAudioMode } = Plugins.AudioToggleBluetooth;

// Switch audio output to the device speaker
const result = await setAudioMode({ mode: AudioMode.SPEAKER });

// Switch audio output to the earpiece
const result = await setAudioMode({ mode: AudioMode.EARPIECE });

// Switch audio output to the connected bluetooth headset
const result = await setAudioMode({ mode: AudioMode.BLUETOOTH });
```

### isHeadsetConnected()

This method allows you to check if a bluetooth headset is connected. It returns a boolean value indicating the headset connection status.

Example usage:

```typescript
import { Plugins } from '@capacitor/core';
import 'capacitor-plugin-audiotoggle-bluetooth';

const { isHeadsetConnected } = Plugins.AudioToggleBluetooth;

// Check if a bluetooth headset is connected
const connected = await isHeadsetConnected();
console.log("Bluetooth headset connected:", connected);
```

That's it! You have now learned how to use the capacitor-plugin-audiotoggle-bluetooth package to switch between speaker, earpiece, and bluetooth headset when playing audio. Enjoy coding!