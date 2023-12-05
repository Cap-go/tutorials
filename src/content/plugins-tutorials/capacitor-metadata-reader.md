---
title: "Using the capacitor-metadata-reader package"
description: "In this tutorial, we will learn how to use the capacitor-metadata-reader package to read metadata from a file."
created_at: "2022-01-01"
published: true
slug: capacitor-metadata-reader
---

# Using the capacitor-metadata-reader package

In this tutorial, we will explore how to use the capacitor-metadata-reader package to read metadata from a file.

## Installation

To get started, first install the capacitor-metadata-reader package using npm or yarn:

```bash
npm install capacitor-metadata-reader
```
or
```bash
yarn add capacitor-metadata-reader
```

## Usage

Once the package is installed, you can import the `MetadataReader` class from the package and use it to read metadata from files. Here's a basic example:

```typescript
import { MetadataReader } from 'capacitor-metadata-reader';

// Specify the path to the file
const filePath = './path/to/file.jpg';

// Create a new instance of MetadataReader
const reader = new MetadataReader();

// Read the metadata from the file
const metadata = await reader.read(filePath);

// Access the metadata properties
console.log('File: ', filePath);
console.log('Title: ', metadata.title);
console.log('Description: ', metadata.description);
console.log('Author: ', metadata.author);
// ...

```

## Supported Formats

The capacitor-metadata-reader package supports reading metadata from various file formats, including:

- JPEG (JPG)
- PNG
- GIF
- TIFF
- WEBP
- SVG
- PDF
- MP3
- MP4

Please note that not all file formats may have all metadata properties available.

## Conclusion

In this tutorial, we covered the basics of using the capacitor-metadata-reader package to read metadata from files. Remember to install the package and import the `MetadataReader` class. You can then use it to read metadata from supported file formats. Feel free to explore the package's documentation for more advanced usage and additional functionality.

Happy coding!