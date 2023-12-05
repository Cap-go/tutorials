---
title: "Using @capacitor-community/media Package in Capacitor"
description: "Learn how to use the @capacitor-community/media package to enable extra media capabilities in your Capacitor app."
created_at: "2021-10-28"
published: true
slug: "capacitor-media"
---

# Using @capacitor-community/media Package in Capacitor

The `@capacitor-community/media` package is a plugin for Capacitor that enables extra media capabilities in your app. It provides a set of APIs for working with media files such as photos and videos. In this tutorial, we will walk through the process of installing the package and using its features in a Capacitor app.

## Installation

First, make sure you have Capacitor installed in your project. If not, you can install Capacitor using the following command:

```bash
npm install @capacitor/cli@next
```

Next, install the `@capacitor-community/media` package:

```bash
npm install @capacitor-community/media
```

After the installation is complete, sync your project with Capacitor:

```bash
npx cap sync
```

## Usage

To use the `@capacitor-community/media` package in your Capacitor app, you need to import it and create an instance of the `Media` class. Here is an example:

```typescript
import { Plugins } from '@capacitor/core';

const { Media } = Plugins;
const media = new Media();
```

### Checking Permissions

Before accessing media files on the user's device, you need to check if the necessary permissions are granted. You can use the `checkPermissions` method to check the permission status. Here is an example:

```typescript
const checkPermissions = async () => {
  const result = await media.checkPermissions();
  console.log('Permission status:', result);
};

checkPermissions();
```

### Requesting Permissions

If the permission status indicates that permissions are not granted, you can use the `requestPermissions` method to request the necessary permissions from the user. Here is an example:

```typescript
const requestPermissions = async () => {
  const result = await media.requestPermissions();
  console.log('Permission request result:', result);
};

requestPermissions();
```

### Taking Photos

To take a photo using the device's camera, you can use the `takePhoto` method. This method returns a photo file URI. Here is an example:

```typescript
const takePhoto = async () => {
  const result = await media.takePhoto();
  console.log('Photo file URI:', result.photoUrl);
};

takePhoto();
```

### Taking Videos

To record a video using the device's camera, you can use the `takeVideo` method. This method returns a video file URI. Here is an example:

```typescript
const takeVideo = async () => {
  const result = await media.takeVideo();
  console.log('Video file URI:', result.videoUrl);
};

takeVideo();
```

### Saving Media

You can also save media files to the device's gallery using the `savePhoto` and `saveVideo` methods. These methods take a `fileUrl` parameter, which is the file URI of the media file to be saved. Here is an example:

```typescript
const fileUrl = 'file:///path/to/photo.jpg';

const savePhoto = async () => {
  const result = await media.savePhoto({ fileUrl });
  console.log('Save photo result:', result);
};

savePhoto();
```

```typescript
const fileUrl = 'file:///path/to/video.mp4';

const saveVideo = async () => {
  const result = await media.saveVideo({ fileUrl });
  console.log('Save video result:', result);
};

saveVideo();
```

## Conclusion

In this tutorial, we learned how to install and use the `@capacitor-community/media` package in a Capacitor app. We covered the process of checking permissions, requesting permissions, taking photos, recording videos, and saving media files. With the help of this package, you can easily add media capabilities to your Capacitor app and provide a rich user experience to your users.

