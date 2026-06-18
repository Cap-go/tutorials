```markdown
---
"title": "Using @capgo/native-audio Package Tutorial",
"description": "A tutorial on how to use the @capgo/native-audio package for playing sounds in Capacitor applications.",
"created_at": "2022-08-29",
"published": true,
"slug": "capacitor-native-audio-git"
---

# Using @capgo/native-audio Package Tutorial

In this tutorial, we will guide you through the process of using the @capgo/native-audio package to incorporate sound playback functionality in your Capacitor applications.

## Installation

To get started, you can install the @capgo/native-audio package using npm or yarn. Here are the commands for both:

Using npm:
```bash
npm install @capgo/native-audio
```

Using yarn:
```bash
yarn add @capgo/native-audio
```

Don't forget to sync the native files after installation:
```bash
npx cap sync
```

## Usage

The @capgo/native-audio package provides methods for playing sounds in your application. You can refer to the official documentation for a list of all supported methods and their usage.

## Example

Here's a simple example to get you started with playing a sound using the @capgo/native-audio package:

```typescript
import { NativeAudio } from '@capgo/native-audio';

// Play a sound
const soundId = await NativeAudio.play({ src: 'path/to/sound.mp3' });

// Stop the sound after 5 seconds
setTimeout(() => {
  NativeAudio.stop({ soundId });
}, 5000);
```

## Conclusion

That's it! You are now equipped with the knowledge to integrate sound playback capabilities into your Capacitor applications using the @capgo/native-audio package. Experiment with different methods and parameters to customize the sound playback experience based on your requirements.
```
```