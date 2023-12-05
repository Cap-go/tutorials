---
title: "Using gallery-video-picker in Capacitor"
description: "Learn how to use the gallery-video-picker package in Capacitor to select videos from the device's gallery."
created_at: "2021-09-22"
published: true
slug: gallery-video-picker
---

# Using gallery-video-picker in Capacitor

The `gallery-video-picker` package is a Capacitor plugin that allows you to pick video files from the device's gallery and record videos as well. In this tutorial, we will walk through the installation process and demonstrate how to use the package to select videos.

## Installation

To install the `gallery-video-picker` package, use the following command:

```bash
npm install gallery-video-picker
```

## Usage

Import the required modules and define a function for selecting a video:

```typescript
import 'gallery-video-picker';
import { Plugins } from '@capacitor/plugin';
const { Camera } = Plugins;

const selectVideo = async () => {
  const options = {
    sizeLimit: 10, // Maximum size of file in megabytes
    source: PickerVideoType.GALLERY, // Select video from gallery
    duration: 30, // Maximum duration in seconds
    quality: 0.8, // Video quality (0 to 1)
  };

  const videoMetadata = await Plugins.GalleryVideoPicker.getVideoFromGallery(options);
  console.log(videoMetadata);
};
```

In the above example, we import the necessary packages and define a `selectVideo` function. This function uses the `getVideoFromGallery` method of the `GalleryVideoPicker` plugin to open the device's gallery and select a video. The `options` object is used to specify the maximum size, source, duration, and quality of the video. The `videoMetadata` variable will contain information about the selected video.

To request permission to access the camera or gallery, use the `getPermissions` method:

```typescript
const requestPermission = async () => {
  const options = {
    permissionType: PickerVideoType.CAMERA, // Request access to record video - PickerVideoType.CAMERA, Request access to video gallery - PickerVideoType.GALLERY
  };

  const permissionResult = await Plugins.GalleryVideoPicker.getPermissions(options);
  console.log(permissionResult);
};
```

The `requestPermission` function prompts the user for permission to access the camera or gallery, depending on the `permissionType` option.

To open the app settings page on the device, use the `openSettings` method:

```typescript
const openSettings = async () => {
  await Plugins.GalleryVideoPicker.openSettings();
};
```

The `openSettings` function simply opens the app settings page.

## Conclusion

In this tutorial, we learned how to use the `gallery-video-picker` package in Capacitor. We covered the installation process and demonstrated how to select videos from the device's gallery using the `getVideoFromGallery` method. We also explored how to request permission to access the camera or gallery and how to open the app settings page on the device.

Now you can use the `gallery-video-picker` package to enhance your Capacitor apps by enabling video selection and recording functionality. Happy coding!