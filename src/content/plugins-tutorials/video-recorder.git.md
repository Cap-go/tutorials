```markdown
---
"title": "Using @capacitor-community/video-recorder package"
"description": "Tutorial on how to use the @capacitor-community/video-recorder package for recording videos using Capacitor framework."
"created_at": "2022-03-17"
"published": true
"slug": "video-recorder.git"
---

## Installing @capacitor-community/video-recorder

To begin using the @capacitor-community/video-recorder package, you need to first install it into your project. 
You can do so by running the following commands in your terminal:

```bash
npm install @capacitor-community/video-recorder
npx cap sync
```

Make sure to include the necessary repository configurations in the `build.gradle` file if you are using Android.

## Initializing Camera

To initialize the camera feed (without recording), you have to specify a configuration for the video recorder. 
Remember to make the webview transparent to overlay your UI on the camera output.

```scss
ion-content {
  --background: transparent;
}
```

Next, in your app code, initialize the camera as follows:

```typescript
import { VideoRecorderCamera, VideoRecorderPreviewFrame } from '@capacitor-community/video-recorder';

const { VideoRecorder } = Plugins;

const config: VideoRecorderPreviewFrame = {
    id: 'video-record',
    stackPosition: 'back',
    width: 'fill',
    height: 'fill',
    x: 0,
    y: 0,
    borderRadius: 0
};
await VideoRecorder.initialize({
    camera: VideoRecorderCamera.FRONT,
    previewFrames: [config]
});
```

## Recording

To start recording, you can use the following code snippet:

```typescript
VideoRecorder.startRecording();
```

## Stop Recording and Getting Result

To stop the recording and obtain the path of the local video file, you can use the following snippet:

```typescript
const res = await VideoRecorder.stopRecording();
// The video url is the local file path location of the video output.
return res.videoUrl;
```

## Destroying Camera

When done, make sure to disconnect from the capture device and remove any native UI layers:

```typescript
VideoRecorder.destroy();
```

This tutorial provides a basic overview of using the @capacitor-community/video-recorder package for video recording in Capacitor.
```
```