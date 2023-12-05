---
title: "Using the Capacitor Video Editor Package"
description: "A tutorial on how to use the Capacitor Video Editor package to edit videos in your Capacitor project."
created_at: "2021-10-28"
published: true
slug: "capacitor-video-editor"
---

# Using the Capacitor Video Editor Package

In this tutorial, we will learn how to use the Capacitor Video Editor package to edit videos in your Capacitor project. The Capacitor Video Editor package provides an easy way to perform various video editing operations such as trimming, cropping, resizing, adding text overlays, and more.

## Step 1: Installation

To get started, you need to install the Capacitor Video Editor package in your Capacitor project. Open your terminal and run the following command:

```bash
npm install capacitor-video-editor
```

This will install the package and add it as a dependency in your project's `package.json` file.

## Step 2: Importing the Package

Next, you need to import the Capacitor Video Editor package into your project. Open the file where you want to use the video editor and add the following import statement:

```typescript
import { CapacitorVideoEditor } from 'capacitor-video-editor';
```

## Step 3: Editing Videos

Now that you have imported the Capacitor Video Editor package, you can start using its methods to edit videos.

### Trimming a Video

To trim a video, you can use the `trim` method provided by the Capacitor Video Editor package. This method accepts the path to the input video file, start time, and end time as parameters. Here's an example of how to trim a video:

```typescript
const inputVideoPath = 'path/to/input/video.mp4';
const outputVideoPath = 'path/to/output/video.mp4';
const startTime = 0;
const endTime = 10;

await CapacitorVideoEditor.trim(inputVideoPath, outputVideoPath, startTime, endTime);
```

This code trims the input video from the given start time to the end time and saves the trimmed video to the specified output path.

### Adding Text Overlay

To add a text overlay to a video, you can use the `addTextOverlay` method provided by the Capacitor Video Editor package. This method accepts the path to the input video file, text content, position, font size, font color, and duration as parameters. Here's an example of how to add a text overlay to a video:

```typescript
const inputVideoPath = 'path/to/input/video.mp4';
const outputVideoPath = 'path/to/output/video.mp4';
const textContent = 'Hello World';
const position = { x: 50, y: 50 };
const fontSize = 24;
const fontColor = '#ffffff';
const duration = 5;

await CapacitorVideoEditor.addTextOverlay(inputVideoPath, outputVideoPath, textContent, position, fontSize, fontColor, duration);
```

This code adds a text overlay with the given text content, position, font size, font color, and duration to the input video and saves the modified video to the specified output path.

## Conclusion

In this tutorial, we have learned how to use the Capacitor Video Editor package to perform video editing operations in a Capacitor project. You can explore the package's documentation to discover more available methods and features for editing videos in your application. Now you can enhance your Capacitor app by incorporating video editing capabilities using the Capacitor Video Editor package.

Remember to import the package, use the provided methods for video editing tasks, and enjoy the flexibility and power of video editing in your Capacitor project!