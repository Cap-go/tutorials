---
title: "Using @studiokloek/capacitor-plugin-mediacapture"
description: "This tutorial will guide you through the process of using the @studiokloek/capacitor-plugin-mediacapture package to capture media in your Capacitor project."
created_at: "2022-03-18"
published: true
slug: "capacitor-plugin-mediacapture"
---

# Using @studiokloek/capacitor-plugin-mediacapture

In this tutorial, we will learn how to use the `@studiokloek/capacitor-plugin-mediacapture` package to capture media in your Capacitor project. This package provides an easy way to access the device's camera and microphone, and allows you to capture photos and videos.

## Installation

To install the `@studiokloek/capacitor-plugin-mediacapture` package, follow these steps:

1. Open your terminal and navigate to the root folder of your Capacitor project.
2. Run the following command to install the package:

```shell
npm install @studiokloek/capacitor-plugin-mediacapture
```

3. Once the installation is complete, run the following command to sync the plugin with your project:

```shell
npx cap sync
```

## Configuring Permissions

Before using the media capture functionality, you need to configure the necessary permissions in your project.

### iOS

1. Open your project in Xcode.
2. Navigate to the `Info.plist` file.
3. Add the following keys and descriptions to the file:

```swift
<key>NSCameraUsageDescription</key>
<string>This app needs access to the camera to capture photos and videos.</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app needs access to the microphone to capture audio.</string>
```

### Android

No additional configuration is required for Android.

## Implementing Media Capture

To use the `@studiokloek/capacitor-plugin-mediacapture` package in your project, follow these steps:

1. Import the plugin at the top of your file:

```javascript
import { MediaCapture } from '@studiokloek/capacitor-plugin-mediacapture';
```

2. Use the `capturePhoto` method to capture a photo:

```javascript
MediaCapture.capturePhoto()
  .then((result) => {
    // Handle the captured photo
    console.log(result);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
```

3. Use the `captureVideo` method to capture a video:

```javascript
MediaCapture.captureVideo()
  .then((result) => {
    // Handle the captured video
    console.log(result);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
```

That's it! You have successfully implemented media capture in your Capacitor project using the `@studiokloek/capacitor-plugin-mediacapture` package.

## Conclusion

In this tutorial, we learned how to use the `@studiokloek/capacitor-plugin-mediacapture` package to capture media in a Capacitor project. We covered the installation process, configuring permissions, and implementing media capture with code examples.

Feel free to explore the additional functionalities provided by the package and customize the media capture experience according to your project's requirements.