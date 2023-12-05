---
title: "Using Capacitor Greatday Camera"
description: "Learn how to use the capacitor-greatday-camera package to integrate camera functionality into your Capacitor app."
created_at: "2022-09-30"
published: true
slug: capacitor-greatday-camera
---

# Using Capacitor Greatday Camera

The `capacitor-greatday-camera` package provides easy integration of camera functionality into your Capacitor app. With this package, you can capture photos and videos, access the device camera, and perform various camera-related operations.

## Installation

To install the `capacitor-greatday-camera` package, run the following command:

```bash
npm install capacitor-greatday-camera
```

## Configuration

Before using the `capacitor-greatday-camera` package, make sure to configure it properly. Open the `capacitor.config.json` file in your project's root directory and add the following code:

```json
{
  "plugins": {
    "GreatdayCamera": {
      "someConfig": "someValue"
    }
  }
}
```

Make sure to replace `someConfig` and `someValue` with the appropriate configuration for your project.

## Usage

To use the `capacitor-greatday-camera` package in your app, import it as follows:

```typescript
import { Plugins } from '@capacitor/core';
const { GreatdayCamera } = Plugins;
```

### Taking a Photo

To capture a photo using the device camera, use the `GreatdayCamera.getPhoto()` method:

```typescript
const photo = await GreatdayCamera.getPhoto({
  quality: 90,
  allowEditing: true,
  resultType: 'base64',
});
```

The `getPhoto()` method accepts an options object with various configuration parameters. In the above example, we specify the photo quality, whether to allow photo editing, and the result type as base64.

### Taking a Video

To capture a video using the device camera, use the `GreatdayCamera.getVideo()` method:

```typescript
const video = await GreatdayCamera.getVideo({
  duration: 30,
});
```

The `getVideo()` method accepts an options object with the duration parameter to specify the maximum duration of the video recording.

### Checking Camera Availability

You can check if the device camera is available using the `GreatdayCamera.isAvailable()` method:

```typescript
const isAvailable = await GreatdayCamera.isAvailable();
if (isAvailable) {
  console.log('Camera is available');
} else {
  console.log('Camera is not available');
}
```

### Accessing Camera Permissions

To check and request camera permissions, use the `GreatdayCamera.checkPermissions()` and `GreatdayCamera.requestPermissions()` methods respectively:

```typescript
const permissions = await GreatdayCamera.checkPermissions();
if (permissions.camera === 'granted') {
  console.log('Camera permission granted');
} else {
  const permissionStatus = await GreatdayCamera.requestPermissions();
  if (permissionStatus.camera === 'granted') {
    console.log('Camera permission granted');
  } else {
    console.log('Camera permission denied');
  }
}
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-greatday-camera` package to integrate camera functionality into your Capacitor app. We covered installation, configuration, and basic usage examples for capturing photos and videos, checking camera availability, and managing camera permissions. Now you can enhance your app with camera features and provide a great user experience.

Please refer to the official documentation of `capacitor-greatday-camera` for more information on advanced usage and additional features.