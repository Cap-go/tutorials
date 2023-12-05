---
title: "Using @alitajs/fileviewer Package"
description: "This tutorial will guide you through the process of using the @alitajs/fileviewer package to view documents and images in your application."
created_at: "2022-03-15"
published: true
slug: "alitajs-native-fileviewer"
---

# Using @alitajs/fileviewer Package

The `@alitajs/fileviewer` package is a useful tool for viewing documents and images in your application. It provides APIs that allow you to open documents and preview images with ease.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @alitajs/fileviewer
npx cap sync
```

### iOS Configuration

To use the package on iOS, you need to make some additional configurations. 

1. Open `Info.plist` file in Xcode.

2. Add a new Information Property called `Privacy - Photo Library Usage Description` and set its value to `We need to write photos`. This is required for features like sharing images and creating movies.

## API

The package provides the following APIs:

### `openDocument(options: OpenDocumentOptions)`

This API allows you to open a document.

- `options.filePath` (string): The local file path of the document.

Example usage:

```typescript
import { openDocument } from '@alitajs/fileviewer';

async function openDocumentExample() {
  try {
    await openDocument({ filePath: '/path/to/document.pdf' });
    console.log('Document opened successfully');
  } catch (error) {
    console.error('Error opening document:', error);
  }
}
```

### `previewImage(options: PreviewImageOptions)`

This API allows you to preview an image.

- `options.images` (Image[]): An array of images to preview.
- `options.options` (ViewerOptions): Viewer options (optional).
- `options.mode` ('gallery' | 'slider' | 'one'): Viewer mode. Default is `'slider'`.
- `options.startFrom` (number): Viewer image index to start from for modes `'slider'` and `'one'`.

Example usage:

```typescript
import { previewImage } from '@alitajs/fileviewer';

async function previewImageExample() {
  try {
    const result = await previewImage({
      images: [
        { uri: 'https://example.com/image1.jpg' },
        { uri: 'https://example.com/image2.jpg' },
        { uri: 'https://example.com/image3.jpg' },
      ],
      mode: 'gallery',
    });

    if (result.result) {
      console.log('Image previewed successfully');
      console.log('Closed at image index:', result.imageIndex);
    } else {
      console.error('Error previewing image:', result.message);
    }
  } catch (error) {
    console.error('Error previewing image:', error);
  }
}
```

## Conclusion

The `@alitajs/fileviewer` package provides a simple and convenient way to view documents and images in your application. By following the installation instructions and utilizing the provided APIs, you can enhance your app with document and image viewing capabilities.