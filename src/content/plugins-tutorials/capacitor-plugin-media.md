---
title: "Introduction to Capacitor Plugin - Media"
description: "Learn how to use @whiteguru/capacitor-plugin-media to enable extra media capabilities in your Capacitor project."
created_at: "2022-08-10"
published: true
slug: "capacitor-plugin-media"
---

# Introduction to Capacitor Plugin - Media

In this tutorial, you will learn how to use the `@whiteguru/capacitor-plugin-media` package to enable extra media capabilities in your Capacitor project.

## Installation

To get started, you need to install the `@whiteguru/capacitor-plugin-media` package. You can do this by running the following command:

```bash
npm install @whiteguru/capacitor-plugin-media --save
```

## Usage

Once the package is installed, you can import and use the plugin in your Capacitor project.

First, import the plugin in your code:

```javascript
import { Plugins } from '@capacitor/core';
const { MediaPlugin } = Plugins;
```

### Capture Photo

To capture a photo using the device's camera, you can use the `capturePhoto` method:

```javascript
const result = await MediaPlugin.capturePhoto();
const photoBlob = result.photoBlob;
```

The `capturePhoto` method returns a `result` object which contains the captured photo as a `photoBlob`. You can then use this `photoBlob` to display or upload the captured photo.

### Capture Video

To capture a video using the device's camera, you can use the `captureVideo` method:

```javascript
const result = await MediaPlugin.captureVideo();
const videoBlob = result.videoBlob;
```

The `captureVideo` method returns a `result` object which contains the captured video as a `videoBlob`. You can then use this `videoBlob` to display or upload the captured video.

### Save Media

To save a photo or video to the device's gallery, you can use the `saveMedia` method:

```javascript
// Save a photo
await MediaPlugin.saveMedia({
  mediaBlob: photoBlob,
  album: 'MyPhotos'
});

// Save a video
await MediaPlugin.saveMedia({
  mediaBlob: videoBlob,
  album: 'MyVideos'
});
```

The `saveMedia` method takes a `mediaBlob` and an `album` as input. The `mediaBlob` is the photo or video you want to save, and the `album` is the name of the album in which you want to save the media.

## Conclusion

In this tutorial, you learned how to use the `@whiteguru/capacitor-plugin-media` package to enable extra media capabilities in your Capacitor project. You learned how to capture photos and videos using the device's camera, as well as how to save the captured media to the device's gallery.

Now you can enhance your Capacitor app with powerful media features using the `@whiteguru/capacitor-plugin-media` package!