---
"title": "Using @capacitor-community/image-to-text Package Tutorial",
"description": "A tutorial on how to utilize the @capacitor-community/image-to-text package to perform image to text processing in Capacitor applications using the Apple's Vision Framework for iOS and MLKit's Vision Framework for Android.",
"created_at": "2023-10-15",
"published": true,
"slug": "image-to-text.git"
---

# Using @capacitor-community/image-to-text Package Tutorial

This tutorial will guide you on how to use the `@capacitor-community/image-to-text` package to enable image-to-text processing in Capacitor applications. This package leverages Apple's Vision Framework for iOS and MLKit's Vision Framework for Android for efficient text extraction from images.

## Installation

To get started, you need to install the `@capacitor-community/image-to-text` package in your project. You can do this by running the following command:

```bash
npm install @capacitor-community/image-to-text
```

## Usage

The core method provided by the package is `detectText`, which takes the filename of an image as input and returns the associated text found in the image. Here's how you can incorporate this into your application:

```typescript
import { Ocr, TextDetections } from '@capacitor-community/image-to-text';

...

const data: TextDetections = await Ocr.detectText({ filename: '[get-filename-of-image-jpg]' });
for (let detection of data.textDetections) {
    console.log(detection.text);
}
```

When executed, the above code snippet will analyze the image file and output the text extracted from it.

## Example with Camera

You can combine the `@capacitor-community/image-to-text` package with the `@capacitor/camera` plugin to capture an image and convert it into text. Here is an example of how to accomplish this:

```typescript
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Ocr, TextDetections } from '@capacitor-community/image-to-text';

...

const photo = await Camera.getPhoto({
  quality: 90,
  allowEditing: true,
  resultType: CameraResultType.Uri,
  source: CameraSource.Camera,
});

const data: TextDetections = await Ocr.detectText({ filename: photo.path });

for (let detection of data.textDetections) {
  console.log(detection.text);
}
```

By following these steps and examples, you can seamlessly integrate image-to-text processing capabilities using the `@capacitor-community/image-to-text` package in your Capacitor applications.