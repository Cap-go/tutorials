---
title: "Using @capacitor-community/image-to-text"
description: "A tutorial on how to use the @capacitor-community/image-to-text package to perform image to text processing in Capacitor projects."
created_at: "2021-09-20"
published: true
slug: "image-to-text"
---

# Using @capacitor-community/image-to-text

In this tutorial, we will learn how to use the `@capacitor-community/image-to-text` package to perform image to text processing in Capacitor projects. This package leverages Apple's Vision Framework for iOS and MLKit's Vision Framework for Android to process images and extract text from them.

## Installation

Before we start, let's make sure we have the package installed in our project. Open your terminal and run the following command:

```bash
npm install @capacitor-community/image-to-text
```

## Usage

Once the package is installed, we can start using it in our application. The main method provided by the package is `detectText`, which takes the filename of an image as input and returns the text associated with it.

Let's start by importing the necessary modules and declaring the necessary variables:

```typescript
import { Ocr, TextDetections } from '@capacitor-community/image-to-text';
```

Now, let's define a function that uses the `detectText` method to convert an image to text:

```typescript
async function convertImageToText(filename: string): Promise<void> {
  const data: TextDetections = await Ocr.detectText({ filename });
  for (let detection of data.textDetections) {
    console.log(detection.text);
  }
}
```

In the above code, we use the `detectText` method to process the image with the specified `filename`. The result is an object of type `TextDetections`, which contains an array of `textDetections`. We can iterate over this array and log the extracted text to the console. Feel free to replace the `console.log` statement with your own logic.

To use the `convertImageToText` function, simply pass the filename of the image as an argument:

```typescript
await convertImageToText('path/to/image.jpg');
```

## Example with Camera

If you want to take a photo and convert it to text, you can use the `@capacitor/camera` plugin in conjunction with `@capacitor-community/image-to-text`. Let's see how to do that:

First, import the necessary modules:

```typescript
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Ocr, TextDetections } from '@capacitor-community/image-to-text';
```

Next, define a function that captures a photo, converts it to text, and logs the result:

```typescript
async function capturePhotoAndConvertToText(): Promise<void> {
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
}
```

In the above code, we use the `Camera.getPhoto` method to capture a photo with the desired options. We then pass the path of the captured photo to the `detectText` method to obtain the text detected in the image. Finally, we iterate over the `textDetections` array and log the extracted text to the console.

To use the `capturePhotoAndConvertToText` function, simply call it:

```typescript
await capturePhotoAndConvertToText();
```

That's it! You now know how to use the `@capacitor-community/image-to-text` package to perform image to text processing in your Capacitor projects.

## Conclusion

In this tutorial, we learned how to use the `@capacitor-community/image-to-text` package to perform image to text processing in Capacitor projects. We explored the `detectText` method and saw how to convert an image to text using the camera. You can now leverage this package to add image recognition capabilities to your Capacitor applications. Happy coding!