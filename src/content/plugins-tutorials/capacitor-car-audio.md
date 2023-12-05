---
title: "Using @justicointeractive/capacitor-car-audio Package"
description: "This tutorial will guide you on how to use the @justicointeractive/capacitor-car-audio package in your Capacitor project."
created_at: "2022-10-15"
published: true
slug: "capacitor-car-audio"
---

# Using @justicointeractive/capacitor-car-audio Package

The @justicointeractive/capacitor-car-audio package is a Capacitor plugin that provides audio-related functionalities for car systems. This tutorial will guide you on how to install and use this package in your Capacitor project.

## Installation

To start using the @justicointeractive/capacitor-car-audio package, follow these steps:

1. Ensure that you have Capacitor installed in your project. If not, run the following command to install Capacitor globally:

   ```bash
   npm install -g capacitor
   ```

2. Install the package in your project:

   ```bash
   npm install @justicointeractive/capacitor-car-audio
   ```

3. Sync the native project by running the following command:

   ```bash
   npx cap sync
   ```

## Usage

Once the @justicointeractive/capacitor-car-audio package is installed, you can start using its features in your Capacitor project.

### Playing Audio

To play audio in your car system, you can use the `play` method provided by the package. Here's an example:

```typescript
import { CarAudio } from '@justicointeractive/capacitor-car-audio';

const carAudio = new CarAudio();
carAudio.play('audio_file.mp3');
```

Make sure to replace `audio_file.mp3` with the actual path or URL to your audio file.

### Controlling Playback

The @justicointeractive/capacitor-car-audio package also provides methods to control the playback of audio. You can pause, resume, and stop the audio using the following methods:

```typescript
import { CarAudio } from '@justicointeractive/capacitor-car-audio';

const carAudio = new CarAudio();

// Pause the audio
carAudio.pause();

// Resume the audio
carAudio.resume();

// Stop the audio
carAudio.stop();
```

### Adjusting Volume

You can adjust the volume of the audio using the `setVolume` method. The volume value should be between 0 and 1. Here's an example:

```typescript
import { CarAudio } from '@justicointeractive/capacitor-car-audio';

const carAudio = new CarAudio();

// Set volume to 0.7
carAudio.setVolume(0.7);
```

### Handling Events

The @justicointeractive/capacitor-car-audio package also emits events that you can listen to. Here's an example of how to listen for the `ended` event:

```typescript
import { CarAudio, CarAudioEvent } from '@justicointeractive/capacitor-car-audio';

const carAudio = new CarAudio();

carAudio.addListener(CarAudioEvent.Ended, () => {
  console.log('Audio playback ended');
});
```

You can replace `CarAudioEvent.Ended` with other available events such as `CarAudioEvent.Play`, `CarAudioEvent.Pause`, `CarAudioEvent.Resume`, etc.

## Conclusion

In this tutorial, you have learned how to install and use the @justicointeractive/capacitor-car-audio package in your Capacitor project. You can now enhance your car system application by adding audio playback capabilities. Enjoy building your car audio experience with Capacitor!

Please note that the examples and code snippets provided in this tutorial may be simplified for clarity and may require additional configuration based on your project's needs. Refer to the package's documentation for more details and advanced usage options.

Remember to explore the various features and functionalities offered by the @justicointeractive/capacitor-car-audio package to create an immersive audio experience in your car system application. Happy coding!