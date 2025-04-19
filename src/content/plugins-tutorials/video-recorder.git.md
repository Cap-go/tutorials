```markdown
---
"title": "CAPACITOR 5 VIDEO RECORDER TUTORIAL",
"description": "This tutorial will guide you through using the @capacitor-community/video-recorder package to record video with Capacitor 5.",
"created_at": "2022-01-31",
"published": true,
"slug": "video-recorder.git"
---

# CAPACITOR 5 VIDEO RECORDER TUTORIAL

This tutorial will guide you on how to use the @capacitor-community/video-recorder package to record videos in your Capacitor 5 project.

## Installation

To get started, install the @capacitor-community/video-recorder package by running the following command:

```bash
npm install @capacitor-community/video-recorder
npx cap sync
```

Next, make sure to configure your project's build.gradle file with the necessary repositories for Android support.

## Initializing Camera

Before recording a video, you need to initialize the camera feed. Modify your app as follows:

1. Set your styles to make the webview transparent:

```scss
ion-content {
  --background: transparent;
}
```

2. Update your capacitor.config.ts file:

```typescript
{
  'backgroundColor': '#ff000000',
}
```

3. In your app code, initialize the camera:

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

To start recording a video, use the following code snippet:

```typescript
VideoRecorder.startRecording();
```

## Stop Recording / Getting Result

To stop the recording and get the local file path of the video, use the following code:

```typescript
const res = await VideoRecorder.stopRecording();
// The video url is the local file path location of the video output.
return res.videoUrl;
```

## Destroying Camera

If you need to disconnect from the capture device and remove any native UI layers, use the following code:

```typescript
VideoRecorder.destroy();
```

This tutorial provides a basic overview of using the @capacitor-community/video-recorder package for video recording in Capacitor 5. Refer to the official documentation for more advanced usage.
```