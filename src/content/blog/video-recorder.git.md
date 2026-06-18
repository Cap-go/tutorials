```markdown
---
"title": "Using @capacitor-community/video-recorder Package",
"description": "This tutorial will guide you on how to use the @capacitor-community/video-recorder package to record videos in Capacitor 5.",
"created_at": "2022-03-28",
"published": true,
"slug": "video-recorder.git"
---

# Using @capacitor-community/video-recorder Package

The @capacitor-community/video-recorder package allows you to record videos in your Capacitor 5 applications. This tutorial will guide you on how to install the package and use its functionalities.

## Install

To install the package, run the following command in your Capacitor 5 project:

```bash
npm install @capacitor-community/video-recorder
npx cap sync
```

This command will install the required dependencies and sync the changes with your Capacitor project.

## Initializing Camera

To initialize the camera feed, you must first specify a configuration to the video recorder. You can overlay your web UI on top of the camera output by using the `stackPosition` property. To make all layers of your app transparent, you can follow these steps:

1. Update the styles in the SCSS file of your page:

```scss
ion-content {
  --background: transparent;
}
```

2. Update the `capacitor.config.ts` file:

```ts
{
  'backgroundColor': '#ff000000', // This is needed mainly on iOS
}
```

Next, you can initialize the camera feed in your app using the following code snippet:

```typescript
import { VideoRecorderCamera, VideoRecorderPreviewFrame } from '@capacitor-community/video-recorder';

const { VideoRecorder } = Plugins;

const config: VideoRecorderPreviewFrame = {
    id: 'video-record',
    stackPosition: 'back', // 'front' overlays your app', 'back' places behind your app.
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

## Recording

To start recording against the capture device, use the following code snippet:

```typescript
VideoRecorder.startRecording();
```

## Stop Recording / Getting Result

To stop the capture device and get the path of the local video file, use the following code snippet:

```typescript
const res = await VideoRecorder.stopRecording();
// The video URL is the local file path location of the video output.
return res.videoUrl;
```

## Destroying Camera

To disconnect from the capture device and remove any native UI layers that exist, use the following code snippet:

```typescript
VideoRecorder.destroy();
```

## Demo App

You can find the demo app in the Example folder of the package repository.
```
```