---
title: "Using the capacitor-music-controller package"
description: "A tutorial on how to use the capacitor-music-controller package to control music playback in your Capacitor app"
created_at: "2022-01-01"
published: true
slug: "capacitor-music-controller"
---

# Using the capacitor-music-controller package

In this tutorial, we will learn how to use the capacitor-music-controller package to control music playback in your Capacitor app. The capacitor-music-controller package provides a set of methods and events for controlling music playback, such as playing, pausing, skipping, and seeking.

## Installation

To get started, install the capacitor-music-controller package by running the following command:

```bash
npm install capacitor-music-controller
```

## Setup

After installing the package, you need to configure the capacitor-music-controller in your Capacitor project. Open the `capacitor.config.json` file and add the following entry under the "plugins" section:

```json
"MusicController": {
  "backgroundColor": "#000000",
  "textColor": "#FFFFFF"
}
```

Make sure to replace the "backgroundColor" and "textColor" values with your desired colors.

## Usage

To start using the capacitor-music-controller, import it in your component and initialize it as follows:

```javascript
import { MusicController } from 'capacitor-music-controller';

const musicController = new MusicController();
```

### Play Music

To play music, call the `musicController.play()` method:

```javascript
musicController.play();
```

### Pause Music

To pause music, call the `musicController.pause()` method:

```javascript
musicController.pause();
```

### Skip to Next Track

To skip to the next track, call the `musicController.nextTrack()` method:

```javascript
musicController.nextTrack();
```

### Skip to Previous Track

To skip to the previous track, call the `musicController.previousTrack()` method:

```javascript
musicController.previousTrack();
```

### Seek to a Specific Time

To seek to a specific time in the currently playing track, call the `musicController.seekTo({ time: 30 })` method, where `30` represents the time in seconds:

```javascript
musicController.seekTo({ time: 30 });
```

## Conclusion

Congratulations! You have learned how to use the capacitor-music-controller package to control music playback in your Capacitor app. You can now implement music controls and enhance the user experience of your app. Happy coding!