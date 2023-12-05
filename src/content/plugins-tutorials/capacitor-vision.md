# Using Capacitor Vision Package

## Introduction

In this tutorial, we will learn how to use the `capacitor-vision` package, which provides powerful computer vision capabilities in Capacitor apps. This package allows you to perform image recognition, object detection, and text recognition using the device's camera or local image files.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor project setup
- Camera plugin installed
- Access to device camera or sample images

## Installation

To install the `capacitor-vision` package, run the following command in your Capacitor project directory:

```bash
npm install capacitor-vision
```

## Adding the Plugin to Your Project

1. First, import the `capacitor-vision` package in your main TypeScript file:

```typescript
import '@capacitor-vision/core';
```

2. Register the plugin in your `capacitor.config.json` file:

```json
{
  "plugins": {
    "CapacitorVision": {
      "appId": "your.app.id"
    }
  }
}
```

## Using Image Recognition

To perform image recognition using the device's camera, follow these steps:

1. Import the necessary classes:

```typescript
import { Camera } from '@capacitor/camera';
import { CapacitorVision } from '@capacitor-vision/core';
```

2. In your function, use the `Camera` plugin to take a picture:

```typescript
const image = await Camera.getPhoto({
  quality: 90,
  allowEditing: false,
  resultType: CameraResultType.Uri
});
```

3. Pass the captured image to the `CapacitorVision` plugin for image recognition:

```typescript
const results = await CapacitorVision.imageLabeler({ imageUri: image.webPath });
console.log(results);
```

## Performing Object Detection

To perform object detection using the device's camera, follow these steps:

1. Import the necessary classes:

```typescript
import { Camera } from '@capacitor/camera';
import { CapacitorVision } from '@capacitor-vision/core';
```

2. In your function, use the `Camera` plugin to take a picture:

```typescript
const image = await Camera.getPhoto({
  quality: 90,
  allowEditing: false,
  resultType: CameraResultType.Uri
});
```

3. Pass the captured image to the `CapacitorVision` plugin for object detection:

```typescript
const results = await CapacitorVision.objectDetector({ imageUri: image.webPath });
console.log(results);
```

## Performing Text Recognition

To perform text recognition using the device's camera, follow these steps:

1. Import the necessary classes:

```typescript
import { Camera } from '@capacitor/camera';
import { CapacitorVision } from '@capacitor-vision/core';
```

2. In your function, use the `Camera` plugin to take a picture:

```typescript
const image = await Camera.getPhoto({
  quality: 90,
  allowEditing: false,
  resultType: CameraResultType.Uri
});
```

3. Pass the captured image to the `CapacitorVision` plugin for text recognition:

```typescript
const results = await CapacitorVision.textRecognizer({ imageUri: image.webPath });
console.log(results);
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-vision` package to perform image recognition, object detection, and text recognition in Capacitor apps. You can now integrate powerful computer vision capabilities into your projects. 

Remember to refer to the official Capacitor documentation and `capacitor-vision` package documentation for more detailed information on available methods and options.

---

**Frontmatter of the Blog:**

title: "Using Capacitor Vision Package"
description: "Learn how to integrate the powerful `capacitor-vision` package into your Capacitor apps to perform image recognition, object detection, and text recognition."
created_at: "2022-06-23"
published: true
slug: "capacitor-vision"