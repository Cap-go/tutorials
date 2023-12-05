---
title: "Using @agorapulse/capacitor-mediastore Package"
description: "This tutorial will guide you on how to use the @agorapulse/capacitor-mediastore package in your Capacitor app."
created_at: "September 30, 2022"
published: true
slug: "capacitor-mediastore"
---

# Using @agorapulse/capacitor-mediastore Package

In this tutorial, we will learn how to use the @agorapulse/capacitor-mediastore package in your Capacitor app. The @agorapulse/capacitor-mediastore package provides a set of APIs and utilities for working with media files in your Capacitor app.

## Installation

To install the @agorapulse/capacitor-mediastore package, run the following command:

```bash
npm install @agorapulse/capacitor-mediastore
```

## Usage

1. Import the package in your JavaScript or TypeScript file:

```javascript
import { MediaStore } from '@agorapulse/capacitor-mediastore';
```

2. Use the available APIs provided by the package to work with media files. For example, you can use the `MediaStore.saveImage(options)` method to save an image to the device's media store:

```javascript
const options = {
  path: 'path/to/image.jpg',
  album: 'My Album',
};

MediaStore.saveImage(options)
  .then(result => {
    console.log('Image saved successfully:', result);
  })
  .catch(error => {
    console.error('Error saving image:', error);
  });
```

3. You can also use other methods and options provided by the package, such as `MediaStore.saveVideo(options)`, `MediaStore.saveGif(options)`, `MediaStore.saveMedia(options)`, etc.

```javascript
// Save a video
const videoOptions = {
  path: 'path/to/video.mp4',
  album: 'My Album',
};

MediaStore.saveVideo(videoOptions)
  .then(result => {
    console.log('Video saved successfully:', result);
  })
  .catch(error => {
    console.error('Error saving video:', error);
  });

// Save a GIF
const gifOptions = {
  path: 'path/to/animation.gif',
  album: 'My Album',
};

MediaStore.saveGif(gifOptions)
  .then(result => {
    console.log('GIF saved successfully:', result);
  })
  .catch(error => {
    console.error('Error saving GIF:', error);
  });
```

That's it! You have learned how to use the @agorapulse/capacitor-mediastore package in your Capacitor app to work with media files.

For more information and detailed documentation, please refer to the [@agorapulse/capacitor-mediastore GitHub repository](https://github.com/agorapulse/capacitor-mediastore).

Remember to import the necessary modules and follow the package's usage guide for specific functionalities. Happy coding!