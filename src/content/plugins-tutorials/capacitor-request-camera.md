---
title: "Using the capacitor-request-camera Package"
description: "Learn how to use the capacitor-request-camera package to access the device camera in your Capacitor app."
created_at: "2021-09-15"
published: true
slug: capacitor-request-camera
---

# Using the capacitor-request-camera Package

In this tutorial, we will learn how to use the capacitor-request-camera package to access the device camera in a Capacitor app. The capacitor-request-camera package provides a simple API to request camera permissions and capture photos or videos using the device camera.

## Prerequisites

Before we begin, make sure you have the following software installed on your system:

- Capacitor 2 or higher
- Node.js and npm

## Step 1: Install the Package

To use the capacitor-request-camera package, first, you need to install it in your Capacitor project. Open your terminal and navigate to your project directory. Run the following command:

```bash
npm install capacitor-request-camera
```

This will install the capacitor-request-camera package and add it as a dependency to your project.

## Step 2: Import and Initialize the Plugin

Next, you need to import and initialize the capacitor-request-camera plugin in your project. In your TypeScript file, add the following import statement at the top:

```typescript
import { Plugins } from '@capacitor/core';

const { RequestCamera } = Plugins;
```

This imports the RequestCamera plugin from the @capacitor/core package and allows us to access its methods.

## Step 3: Request Camera Permissions

Before accessing the device camera, you need to request camera permissions from the user. To do this, use the `requestPermissions` method provided by the capacitor-request-camera package. Add the following code snippet to your file:

```typescript
async function requestCameraPermissions() {
  const { granted } = await RequestCamera.requestPermissions();
  if (granted) {
    console.log('Camera permissions granted!');
  } else {
    console.log('Camera permissions denied');
  }
}
```

In this code snippet, the `requestPermissions` method is called to request camera permissions from the user. The `granted` property in the returned object indicates whether the permissions were granted or not.

## Step 4: Capture Photo or Video

Once you have camera permissions, you can use the `capturePhoto` and `captureVideo` methods to capture photos and videos, respectively. Here's an example:

```typescript
async function capturePhoto() {
  const { photo } = await RequestCamera.capturePhoto();
  // Do something with the captured photo
}

async function captureVideo() {
  const { video } = await RequestCamera.captureVideo();
  // Do something with the captured video
}
```

In these code snippets, the `capturePhoto` and `captureVideo` methods are called to capture a photo and video, respectively. The resulting photo or video is returned in the `photo` and `video` properties of the returned object.

## Conclusion

In this tutorial, we learned how to use the capacitor-request-camera package to access the device camera in a Capacitor app. We covered the steps to install the package, import and initialize the plugin, request camera permissions, and capture photos or videos. Now you can integrate camera functionality into your Capacitor app with ease using the capacitor-request-camera package.

Remember to consult the official documentation of the capacitor-request-camera package for further details and advanced usage.