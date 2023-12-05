---
title: "Using cap-ocr for Text Recognition in Capacitor"
description: "Learn how to use the cap-ocr package to perform text recognition on images using Capacitor"
created_at: "2022-09-18"
published: true
slug: "cap-ocr"
---

# Using cap-ocr for Text Recognition in Capacitor

In this tutorial, we will explore how to use the cap-ocr package to perform text recognition on images using Capacitor. The cap-ocr package provides a simple and efficient way to extract text from images in your Capacitor app.

## Prerequisites

Before we begin, make sure you have the following:

- Installed and configured Capacitor in your project.
- Basic knowledge of JavaScript and Capacitor.

## Installation

To install the cap-ocr package, run the following command:

```bash
npm install cap-ocr
npx cap sync
```

## Usage

Once you have installed the cap-ocr package, you can start using it in your project. Here's a step-by-step guide on how to use the cap-ocr package for text recognition:

1. Import the necessary modules and plugins:

```typescript
import { CapacitorOCR } from 'cap-ocr';
import { Filesystem } from '@capacitor/filesystem';
```
    
2. Load an image to perform text recognition on:

```typescript
const imageFile = await Filesystem.readFile({
  path: '<path-to-your-image>',
});

const imageBase64 = imageFile.data;
```

3. Call the `detectText` method to extract the text from the image:

```typescript
const result = await CapacitorOCR.detectText({ imageBase64: imageBase64 });

console.log('Extracted Text:', result.value);
```

That's it! You have successfully used the cap-ocr package to perform text recognition on an image.

## Conclusion

In this tutorial, we learned how to use the cap-ocr package to perform text recognition on images using Capacitor. The cap-ocr package provides a convenient way to extract text from images in your Capacitor app. You can now incorporate text recognition capabilities into your app and utilize the extracted text for various purposes.

Make sure to explore the cap-ocr package documentation for additional features and customization options. Happy coding!