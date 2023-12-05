---
title: "Using capacitor-v3-music-controls Package"
description: "This tutorial will guide you through using the capacitor-v3-music-controls package in your Capacitor app."
created_at: "2022-11-10"
published: true
slug: "capacitor-v3-music-controls"
---

# Using capacitor-v3-music-controls Package

In this tutorial, we will walk through the steps of using the `capacitor-v3-music-controls` package in your Capacitor app.

## Prerequisites

Before getting started, make sure you have the following:

1. Capacitor installed in your project. If not, you can install it by running the following command:

```bash
npm install -g @capacitor/cli
```

2. A Capacitor project set up and configured. If you haven't done this yet, you can create a new Capacitor project using the following command:

```bash
npx @capacitor/cli create
```

## Installation

To install the `capacitor-v3-music-controls` package, navigate to your project's root directory and run the following command:

```bash
npm install capacitor-v3-music-controls
```

## Configuration

The `capacitor-v3-music-controls` package requires some configuration to work properly. Follow these steps to set it up:

### iOS Configuration

1. Open your Capacitor project in Xcode by running the following command:

```bash
npx cap open ios
```

2. In Xcode, navigate to your app's target settings, go to the "Signing & Capabilities" tab, and enable the "Background Modes" capability.

3. Expand the "Background Modes" capability, select the "Audio, Airplay, and Picture in Picture" checkbox, and save your changes.

### Android Configuration

1. Open your Capacitor project in Android Studio by running the following command:

```bash
npx cap open android
```

2. In Android Studio, navigate to your app's project files and open the `MainActivity.java` file located at `app/src/main/java/your/package/name/MainActivity.java`.

3. Import the `com.getcapacitor.plugin.AppPlugin` class by adding the following line at the top of the file:

```java
import com.getcapacitor.plugin.AppPlugin;
```

4. Add the following code inside the `initialize` method of the `MainActivity` class:

```java
app.getApplicationContext().registerReceiver(new AppPlugin.ExternalIntentReceiver(
    new PlayerEventHandler()
), new IntentFilter("app.getcapacitor.ACTION_MEDIA_BUTTON"));
```

5. Save your changes and rebuild your Android project.

## Usage

Now that you have installed and configured the `capacitor-v3-music-controls` package, you can start using it in your app.

### Importing the Plugin

In the file where you want to use the music controls, import the `MusicControls` plugin from the `capacitor-v3-music-controls` package:

```typescript
import { MusicControls } from 'capacitor-v3-music-controls';
```

### Displaying Music Controls

To display the music controls, use the `create` method of the `MusicControls` plugin. Here's an example:

```typescript
MusicControls.create({
  artist: 'Artist Name',
  title: 'Song Title',
  cover: 'path/to/cover.jpg',
  isPlaying: true,
  hasPrev: true,
  hasNext: true,
}).then(() => {
  console.log('Music controls created successfully');
}).catch((error) => {
  console.error('Failed to create music controls', error);
});
```

You can customize the various properties of the music controls, such as the artist, title, cover image, and playback buttons.

### Handling Music Control Events

To handle events triggered by the music controls, use the `addListener` method of the `MusicControls` plugin. Here's an example:

```typescript
MusicControls.addListener('music-controls-previous', () => {
  console.log('Previous button pressed');
});

MusicControls.addListener('music-controls-play', () => {
  console.log('Play button pressed');
});

MusicControls.addListener('music-controls-pause', () => {
  console.log('Pause button pressed');
});

MusicControls.addListener('music-controls-next', () => {
  console.log('Next button pressed');
});
```

You can listen for various events such as previous, play, pause, and next button presses and perform the corresponding actions in your app.

### Destroying Music Controls

To destroy the music controls, use the `destroy` method of the `MusicControls` plugin. Here's an example:

```typescript
MusicControls.destroy().then(() => {
  console.log('Music controls destroyed successfully');
}).catch((error) => {
  console.error('Failed to destroy music controls', error);
});
```

Once you are done with the music controls, make sure to destroy them to free up system resources.

## Conclusion

In this tutorial, we covered the basic usage of the `capacitor-v3-music-controls` package in a Capacitor app. You learned how to install and configure the package, display music controls, handle control events, and destroy the controls when no longer needed. Feel free to explore the documentation of the package for more advanced usage and customization options.

Remember to consult the official documentation and API reference for detailed information on the `capacitor-v3-music-controls` package and its available methods and events.