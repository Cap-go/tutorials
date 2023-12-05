---
title: "Using @smart-pro/smartzip"
description: "A tutorial on how to use the @smart-pro/smartzip package to zip and unzip files"
created_at: "2022-09-28"
published: true
slug: smartzip
---

# Using @smart-pro/smartzip

In this tutorial, we will learn how to use the @smart-pro/smartzip package to zip and unzip files. The @smart-pro/smartzip package is a powerful tool that allows you to compress and decompress files in various formats.

## Installation

To install the @smart-pro/smartzip package, use the following command:

```bash
npm install @smart-pro/smartzip
```

## Basic Usage

Once the package is installed, you can import it into your project and start using it. Here's an example of how to use the @smart-pro/smartzip package:

```javascript
import { SmartZip } from '@smart-pro/smartzip';

// Create a new instance of SmartZip
const zip = new SmartZip();

// Zip files
const sourceFolderPath = '/path/to/source/folder';
const zipFilePath = '/path/to/destination/archive.zip';

zip.zipFolder(sourceFolderPath, zipFilePath)
  .then(() => {
    console.log('Files zipped successfully');
  })
  .catch((error) => {
    console.error('Failed to zip files:', error);
  });

// Unzip files
const unzipFilePath = '/path/to/archive.zip';
const destinationFolderPath = '/path/to/destination/folder';

zip.unzipFile(unzipFilePath, destinationFolderPath)
  .then(() => {
    console.log('Files unzipped successfully');
  })
  .catch((error) => {
    console.error('Failed to unzip files:', error);
  });
```

This example demonstrates how to zip and unzip files using the @smart-pro/smartzip package. The `zipFolder` method compresses a folder into a zip file, while the `unzipFile` method decompresses a zip file into a folder.

## Conclusion

In this tutorial, we have explored the basics of using the @smart-pro/smartzip package to zip and unzip files. The package provides a simple and efficient way to handle file compression and decompression tasks in your projects. Feel free to explore the package's documentation for more advanced features and customization options.