## Using @pinpon/capacitor-video-recorder

### Installation

To install the package, run the following command:

```
npm install @pinpon/capacitor-video-recorder
```

### Importing the Plugin

In your `feature.module.ts` file, import the plugin as shown below:

```typescript
import '@pinpon/capacitor-video-recorder';
```

This will allow the plugin to register correctly to the feature module.

### Initializing the Camera

To initialize the camera feed (without recording), you need to specify a configuration for the video recorder. Here's an example:

```typescript
import { VideoRecorderCamera, VideoRecorderPreviewFrame } from '@pinpon/capacitor-video-recorder';

const { VideoRecorder } = Plugins;

const config: VideoRecorderPreviewFrame = {
    id: 'video-record',
    stackPosition: 'front', // 'front' overlays your app', 'back' places behind your app.
    width: 'fill',
    height: 'fill',
    x: 0,
    y: 0,
    borderRadius: 0
};

await VideoRecorder.initialize({
    camera: VideoRecorderCamera.FRONT, // Can use BACK
    previewFrames: [config]
});
```

### Recording

To start recording, use the following code:

```typescript
VideoRecorder.startRecording();
```

### Stop Recording / Getting Result

To stop the recording and get the video file path, use the following code:

```typescript
const res = await VideoRecorder.stopRecording();
// The video url is the local file path location of the video output.
return res.videoUrl;
```

### Destroying the Camera

To disconnect from the capture device and remove any native UI layers, use the following code:

```typescript
VideoRecorder.destroy();
```

### Example Implementations

Here are example implementations of the plugin:

iOS:

![iOS Example](https://user-images.githubusercontent.com/13732623/70366156-52e83500-1863-11ea-96f0-c53bdd12ebea.gif)

Android:

![Android Example](https://user-images.githubusercontent.com/13732623/70366162-61365100-1863-11ea-8376-fe76cf147a73.gif)

### Compatibility with Capacitor Versions

- Use `v0.0.8` with Capacitor 2
- Use `v0.0.10` with Capacitor 3
- Use `v5.0.0` with Capacitor 5