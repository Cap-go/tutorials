---
title: "Using @skylabs_technology/capacitor-mixer Package"
description: "This tutorial will guide you on how to use the @skylabs_technology/capacitor-mixer package in your Capacitor project."
created_at: "2022-10-10"
published: true
slug: capacitor-mixer
---

# Using @skylabs_technology/capacitor-mixer Package

In this tutorial, we will learn how to use the `@skylabs_technology/capacitor-mixer` package in a Capacitor project. The `capacitor-mixer` package provides a set of APIs for audio mixing and control. We will cover the installation process, usage examples, and other important details.

## Installation

To use the `@skylabs_technology/capacitor-mixer` package, follow these steps:

1. Navigate to your Capacitor project directory:
   ```bash
   cd your-capacitor-project
   ```

2. Install the package using npm or yarn:
   ```bash
   npm install @skylabs_technology/capacitor-mixer
   ```

3. Sync the plugin with your native project:
   ```bash
   npx cap sync
   ```

4. Import the `@skylabs_technology/capacitor-mixer` package in your code files:
   ```typescript
   import { CapacitorMixer } from '@skylabs_technology/capacitor-mixer';
   ```

## Usage

Once the package is installed and imported, you can start using the `CapacitorMixer` API to control audio mixing and playback in your Capacitor project.

Here are some example use cases:

### Play Audio File

To play an audio file, use the `CapacitorMixer.play()` method. Provide the file path or URL as the input parameter.

```typescript
CapacitorMixer.play({ filePath: 'path/to/audio/file.mp3' });
```

### Pause Audio

To pause the currently playing audio, use the `CapacitorMixer.pause()` method.

```typescript
CapacitorMixer.pause();
```

### Stop Audio

To stop the currently playing audio, use the `CapacitorMixer.stop()` method.

```typescript
CapacitorMixer.stop();
```

### Set Volume

To set the volume level, use the `CapacitorMixer.setVolume()` method. Provide a value between 0 and 1 as the input parameter.

```typescript
CapacitorMixer.setVolume({ volume: 0.7 });
```

These are just a few examples of how to use the `@skylabs_technology/capacitor-mixer` package in a Capacitor project. Refer to the package documentation for more detailed information and additional methods.

## Conclusion

In this tutorial, we learned how to install and use the `@skylabs_technology/capacitor-mixer` package in a Capacitor project. We covered the installation process, basic usage examples, and provided an overview of the available API methods. Now you can confidently incorporate audio mixing and playback functionality into your Capacitor apps using the `capacitor-mixer` package.
