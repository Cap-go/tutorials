---
"title": "Using @agorapulse/capacitor-mediastore Package Tutorial",
"description": "A step-by-step guide on using the @agorapulse/capacitor-mediastore package to work with media files in Capacitor apps.",
"created_at": "2022-01-07",
"published": true,
"slug": "capacitor-mediastore.git"
---

# Using @agorapulse/capacitor-mediastore Package Tutorial

This tutorial will walk you through the process of using the `@agorapulse/capacitor-mediastore` package to interact with media files in your Capacitor apps.

## Installation

To begin, install the package by running the following command in your project directory:

```bash
npm install @agorapulse/capacitor-mediastore
```

## Importing the Package

Next, import the package in your project where you intend to use it:

```javascript
import { MediaStore } from '@agorapulse/capacitor-mediastore';
```

## Using MediaStore Methods

The `MediaStore` package provides various methods to work with media files. Here is an example of how to retrieve all media files:

```javascript
async function getAllMediaFiles() {
  const mediaFiles = await MediaStore.getMedias();
  console.log('Media Files:', mediaFiles);
}
```

## Uploading Media Files

You can upload media files using the `uploadMedia` method. Here is a basic example:

```javascript
async function uploadMedia() {
  const file = /* File object */;
  await MediaStore.uploadMedia({ file });
  console.log('File uploaded successfully!');
}
```

## Retrieving Media File by ID

If you need to retrieve a specific media file by ID, you can use the `getMediaById` method:

```javascript
async function getMediaById(mediaId) {
  const media = await MediaStore.getMedia(mediaId);
  console.log('Media:', media);
}
```

These are just a few examples of how you can utilize the `@agorapulse/capacitor-mediastore` package in your Capacitor app. Explore the documentation for more functionalities and options.

Remember to check the [official documentation](https://www.npmjs.com/package/@agorapulse/capacitor-mediastore) for detailed API references and usage instructions.