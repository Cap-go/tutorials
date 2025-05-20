---
title: Using @capacitor-community/image-to-text Package
description: >-
  A tutorial on how to use the @capacitor-community/image-to-text package to
  convert images to text in a Capacitor project.
created_at: '2022-01-31'
published: true
slug: image-to-text
locale: en
---

## Installation

Install the package using npm:

```bash
npm install @capacitor-community/image-to-text
```

## Usage

### Import the Plugin

First, import the necessary components from the package:

```typescript
import { Ocr, TextDetections } from '@capacitor-community/image-to-text';
```

### Converting an Image to Text

To convert an image to text, use the `detectText` method with the filename of the image file:

```typescript
const data: TextDetections = await Ocr.detectText({ filename: '[get-filename-of-image-.jpg]' });

for (let detection of data.textDetections) {
    console.log(detection.text);
}
```

### Using @capacitor/camera Plugin

You can combine this package with the `@capacitor/camera` plugin to take a photo and convert it to text. First, import the necessary components:

```typescript
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
```

Then, take a photo and convert it to text:

```typescript
const photo = await Camera.getPhoto({
   quality: 90,
   allowEditing: true,
   resultType: CameraResultType.Uri,
   source: CameraSource.Camera        
});

const data: TextDetections = await Ocr.detectText({ filename: photo.path });

for (let detection of data.textDetections) {
    console.log(detection.text);
}
```

## iOS and Android Usage

For iOS, no additional setup is required. For Android, include a `google-services.json` file in the Android project folder.

## Additional Notes

Remember to handle permissions and error scenarios appropriately in your application.

This tutorial provides a basic overview of how to use the @capacitor-community/image-to-text package for image to text processing. More advanced use cases and configurations are possible based on your project requirements.
