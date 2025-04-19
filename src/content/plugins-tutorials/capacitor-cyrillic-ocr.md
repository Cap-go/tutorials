---
title: "Using capacitor-cyrillic-ocr"
description: "A tutorial on how to use the capacitor-cyrillic-ocr package for OCR with Cyrillic support."
created_at: "2022-01-01"
published: true
slug: capacitor-cyrillic-ocr
---

# Using capacitor-cyrillic-ocr

This tutorial will guide you through the process of using the `capacitor-cyrillic-ocr` package for optical character recognition (OCR) with support for Cyrillic languages. The package is based on Tesseract for Android and MLKit Vision for iOS, and it provides a simple and efficient way to extract text from images.

## Installation

To get started, you need to install the `capacitor-cyrillic-ocr` package and synchronize it with your Capacitor project. Open a terminal and run the following commands:

```bash
npm install capacitor-cyrillic-ocr
npx cap sync
```

## Android Configuration

For Android, you'll need to download the Tesseract language files and add them to your app's data directory. Follow these steps:

1. Download the Tesseract language files from [here](https://github.com/tesseract-ocr/tessdata/tree/4.0.0).
2. Save the downloaded files in a folder called `tessdata` inside your app's Data directory.
3. If your app uses the Capacitor Filesystem plugin, you may encounter memory issues with large files. To overcome this, you can use the [Capacitor Blob Writer](https://www.npmjs.com/package/capacitor-blob-writer) plugin as an alternative.
4. Add the following repository to your `/android/app/build.gradle` file:

```java
repositories {
    ...
    maven { url 'https://jitpack.io' }
}
```

## iOS Configuration

No additional configuration is required for iOS.

## Usage

To extract text from an image, you need to provide the image as a base64 string to the plugin. Here's a step-by-step guide:

1. Obtain the image as a base64 string. You can use the Capacitor Filesystem plugin to read an image from the file system and convert it to a base64 string.
2. Import the necessary modules:

```typescript
import { CapacitorOCR } from 'capacitor-cyrillic-ocr';
import { Filesystem } from '@capacitor/filesystem';
```

3. Pass the base64 string and the desired languages to the plugin:

```typescript
const image = // Base64 string of the image
const languages = ['bul', 'eng']; // Array of language codes

const result = await CapacitorOCR.recognizeTextFromImage({
  base64String: image,
  languages: languages,
});
```

4. The result object will contain the extracted text. You can access it using `result.text`.

That's it! You have successfully used the `capacitor-cyrillic-ocr` package to perform OCR with Cyrillic support.

Remember to refer to the [ISO 639-2 Wikipedia page](https://en.wikipedia.org/wiki/ISO_639-2) for the three-letter language codes.

If you encounter any issues or need further assistance, please don't hesitate to reach out for help.