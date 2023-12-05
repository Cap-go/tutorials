# @digitalemenschen/capacitor-heic-to-jpeg Tutorial

## Introduction
In this tutorial, we will learn how to use the `@digitalemenschen/capacitor-heic-to-jpeg` package in your Capacitor app. This package allows you to convert HEIC (High Efficiency Image Format) images to JPEG format, which is widely supported across different platforms.

## Prerequisites
Before we begin, make sure you have the following installed:
- Node.js and npm
- Capacitor CLI
- Capacitor project set up (if not, you can follow the official Capacitor documentation to create a new project)

## Installation
To install the `@digitalemenschen/capacitor-heic-to-jpeg` package in your Capacitor project, run the following command:

```bash
npm install @digitalemenschen/capacitor-heic-to-jpeg
```

## Usage
Once the package is installed, you can use the `heicToJpeg` method to convert HEIC images to JPEG.

### Import the Plugin
First, import the plugin in your JavaScript/TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';
const { HeicToJpeg } = Plugins;
```

### Convert HEIC to JPEG
To convert a HEIC image to JPEG, use the `heicToJpeg` method provided by the plugin. The method takes an options object as a parameter, which can contain the input HEIC file path and output JPEG file path.

Here's an example of converting a HEIC image to JPEG:

```javascript
async function convertImage() {
  try {
    const result = await HeicToJpeg.heicToJpeg({
      inputPath: '/path/to/input.heic',
      outputPath: '/path/to/output.jpeg'
    });
    console.log('Image converted successfully:', result);
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertImage();
```

Make sure to replace `/path/to/input.heic` with the actual path to your input HEIC file, and `/path/to/output.jpeg` with the desired path for the output JPEG file.

### Error Handling
If there is an error during the conversion process, the `heicToJpeg` method will throw an error with a message describing the issue. Make sure to handle errors appropriately in your code.

## Conclusion
Congratulations! You have learned how to use the `@digitalemenschen/capacitor-heic-to-jpeg` package to convert HEIC images to JPEG in your Capacitor app. This can be useful for ensuring cross-platform compatibility when working with HEIC images.

## Frontmatter
---
title: "Capacitor HEIC to JPEG Tutorial"
description: "Learn how to convert HEIC images to JPEG format in your Capacitor app using @digitalemenschen/capacitor-heic-to-jpeg package"
created_at: "2022-01-01"
published: true
slug: capacitor-heic-to-jpeg
---

Please note that the values in the frontmatter are just examples and should be modified according to your specific blog requirements and the date of this answer.