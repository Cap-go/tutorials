---
title: "Using the Native Audio Settings Package"
description: "A step-by-step tutorial on how to use the native-audio-settings package in your Capacitor project."
created_at: "2022-11-30"
published: true
slug: "native-audio-settings"
---

# Using the Native Audio Settings Package

The native-audio-settings package is a Capacitor community plugin that allows you to manage and control audio settings on native platforms (iOS and Android). This tutorial will guide you through the process of integrating and using the package in your Capacitor project.

## Installation

To get started, you need to install the native-audio-settings package. Open your project's terminal and run the following command:

```bash
npm install @capacitor-community/native-audio-settings
```

If you prefer using Yarn, you can use the following command:

```bash
yarn add @capacitor-community/native-audio-settings
```

## Sync Native Files

After installing the package, you need to synchronize the native files with your project. Run the following command:

```bash
npx cap sync
```

This will ensure that the necessary native files are properly linked and integrated into your project.

## Usage

Once the installation and synchronization are complete, you can start using the native-audio-settings package in your code.

### Import the Plugin

Start by importing the native-audio-settings package in the TypeScript file where you want to use it. Add the following import statement at the top of the file:

```typescript
import { NativeAudioSettings } from '@capacitor-community/native-audio-settings';
```

### Check if Audio Settings Are Supported

Before using any of the audio settings functions, it's important to check if the device supports audio settings. You can use the `isSupported` method provided by the native-audio-settings package. Here's an example:

```typescript
const supportsAudioSettings = await NativeAudioSettings.isSupported();
if (supportsAudioSettings) {
  // Audio settings are supported
} else {
  // Audio settings are not supported on this device
}
```

### Get the Current Volume

To retrieve the current volume level of the device, you can use the `getVolume` method. Here's an example:

```typescript
const currentVolume = await NativeAudioSettings.getVolume();
console.log(`Current volume: ${currentVolume}`);
```

### Set the Volume

To set the volume level of the device, you can use the `setVolume` method. Provide a value between 0 and 1 to represent the desired volume level. For example:

```typescript
const newVolume = 0.5; // Set volume to 50%
await NativeAudioSettings.setVolume(newVolume);
```

### Check if Mute State

You can check if the device is currently muted using the `isMuted` method. Here's an example:

```typescript
const isMuted = await NativeAudioSettings.isMuted();
if (isMuted) {
  // Device is muted
} else {
  // Device is not muted
}
```

### Mute or Unmute the Device

To mute or unmute the device, you can use the `setMuted` method. Pass a boolean value `true` to mute the device or `false` to unmute it. For example:

```typescript
const shouldMute = true; // Mute the device
await NativeAudioSettings.setMuted(shouldMute);
```

## Conclusion

Congratulations! You have successfully learned how to integrate and use the native-audio-settings package in your Capacitor project. You can now manage and control audio settings on native platforms with ease.