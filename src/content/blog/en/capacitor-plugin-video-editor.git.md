---
title: "Using @whiteguru/capacitor-plugin-video-editor Package"
description: "This tutorial will guide you on how to use the @whiteguru/capacitor-plugin-video-editor package with Capacitor for editing videos in your application."
created_at: 2022-03-01
published: true
slug: capacitor-plugin-video-editor.git
locale: en
---

## Getting Started

To begin using the @whiteguru/capacitor-plugin-video-editor package, follow these steps:

1. Install the package by running:
   ```
   npm install @whiteguru/capacitor-plugin-video-editor
   ```

2. Import the plugin in your project:
   ```typescript
   import 'capacitor-plugin-video-editor';
   ```

3. Use the plugin methods in your code to edit videos.

## Editing Videos

The package provides various methods for editing videos, such as trimming, merging, and adding effects. Here's an example of how to trim a video:

```typescript
import { Plugins } from '@capacitor/core';
const { VideoEditor } = Plugins;

const result = await VideoEditor.trimVideo({
  path: 'path/to/video',
  start: 10,
  end: 30
});

console.log('Trimmed video saved at: ', result.outputPath);
```

## Conclusion

In this tutorial, we covered the basics of using the @whiteguru/capacitor-plugin-video-editor package to enhance the video editing capabilities of your Capacitor app. Explore more features and functionalities offered by the package to create engaging video experiences in your application.
