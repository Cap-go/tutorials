# Using capacitor-native-audio-streamer

capacitor-native-audio-streamer is a Capacitor plugin for streaming audio. It provides methods for playing, pausing, and stopping audio streams. This tutorial will guide you through the process of installing and using the capacitor-native-audio-streamer plugin in your Capacitor project.

## Installation

To install the capacitor-native-audio-streamer plugin, use the npm or yarn command:

```bash
npm install capacitor-native-audio-streamer
```

or

```bash
yarn add capacitor-native-audio-streamer
```

Sync your native files using the following command:

```bash
npx cap sync
```

## Configuration

No configuration is required for this plugin.

## Usage

### Importing the Plugin

To use the capacitor-native-audio-streamer plugin, you need to import it into your project. Add the following import statement at the beginning of your TypeScript file:

```typescript
import { NativeAudioStreamer } from 'capacitor-native-audio-streamer';
```

### Streaming Audio

The capacitor-native-audio-streamer plugin provides methods for streaming audio. Here are some examples of how to use these methods:

#### Play an Audio Stream

To play an audio stream, use the `play` method. Pass the URL of the audio stream as the parameter.

```typescript
NativeAudioStreamer.play({ url: 'https://example.com/audio/stream' });
```

#### Pause an Audio Stream

To pause an audio stream, use the `pause` method.

```typescript
NativeAudioStreamer.pause();
```

#### Resume an Audio Stream

To resume a paused audio stream, use the `resume` method.

```typescript
NativeAudioStreamer.resume();
```

#### Stop an Audio Stream

To stop an audio stream, use the `stop` method.

```typescript
NativeAudioStreamer.stop();
```

### Handling Stream Events

The capacitor-native-audio-streamer plugin provides events to handle stream-related actions. Here's an example of how to handle these events:

```typescript
NativeAudioStreamer.addListener('streamPlay', (event) => {
  console.log('Stream started playing');
});

NativeAudioStreamer.addListener('streamPaused', (event) => {
  console.log('Stream paused');
});

NativeAudioStreamer.addListener('streamResumed', (event) => {
  console.log('Stream resumed');
});

NativeAudioStreamer.addListener('streamStopped', (event) => {
  console.log('Stream stopped');
});
```

### Cleaning Up

To remove all event listeners and clean up resources, use the `removeAllListeners` method.

```typescript
NativeAudioStreamer.removeAllListeners();
```

## Conclusion

In this tutorial, you learned how to install and use the capacitor-native-audio-streamer plugin in your Capacitor project. You can now stream audio, handle stream events, and clean up resources when necessary. Feel free to explore the capacitor-native-audio-streamer documentation for more information on additional features and options.