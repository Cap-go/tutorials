---
"title": "Using @capacitor-community/image-to-text Package",
"description": "A comprehensive tutorial on how to use the @capacitor-community/image-to-text package in Capacitor projects for image to text processing.",
"created_at": "2022-09-10",
"published": true,
"slug": "image-to-text.git"
---

# Image To Text

## Installation

To use the `@capacitor-community/image-to-text` package, you need to install it via npm. Run the following command in your project directory:

```bash
npm install @capacitor-community/image-to-text
```

## Usage

The package provides the `detectText` method that takes a filename of an image as input and returns the text associated with it. Here's an example of how you can use it in your application:

```typescript
import { Ocr, TextDetections } from '@capacitor-community/image-to-text';

...

const data: TextDetections = await Ocr.detectText({ filename: '[get-filename-of-image-jpg]' });
for (let detection of data.textDetections) {
    console.log(detection.text);
}
```

The above code snippet demonstrates how to convert an image file to text and log the detected text.

## Example with Camera

You can integrate the `@capacitor/camera` plugin with `@capacitor-community/image-to-text` to capture a photo and convert it to text. Here's how you can achieve it:

```typescript
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Ocr, TextDetections } from '@capacitor-community/image-to-text';

...

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

In this way, you can use the camera plugin in tandem with the image-to-text package to capture an image and extract text from it.

For more details and a sample application, you can refer to the official [GitHub repository](https://github.com/dtarnawsky/capacitor-ocr-example).

## iOS Usage

Using the package in an iOS project does not require any additional setup.

## Android Usage

For Android projects using this package, ensure that your project includes a `google-services.json` file stored in the Android project folder (`android/app`). Follow these steps to set it up:

1. Sign in to [Firebase Console](https://console.firebase.google.com/).
2. Add a project and an Android app for your project.
3. Enter the package name (found in `android/app/AndroidManifest.xml`) and register the app.
4. Download the `google-services.json` file and save it in your project's `android/app` directory.

By following these steps, you can successfully set up the package for Android usage.