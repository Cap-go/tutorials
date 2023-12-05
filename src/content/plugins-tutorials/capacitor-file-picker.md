---
title: "Using filepicker-updated package"
description: "A tutorial on how to use the filepicker-updated package to pick files/images/videos from Android and iOS devices."
created_at: "2021-10-08"
published: true
slug: capacitor-file-picker
---

# Using filepicker-updated package

## Introduction
The filepicker-updated package is a plugin that allows you to easily pick files, images, and videos from Android and iOS devices. In this tutorial, we will learn how to install and use this package in your Capacitor project.

## Prerequisites
Before getting started, ensure that you have the following:

- Capacitor installed and configured in your project.
- Basic knowledge of Capacitor and Ionic framework.

## Installation
To install the filepicker-updated package, run the following command in your project directory:

```bash
npm i filepicker-updated
```

For Capacitor v2, you can install the capacitor2-file-picker package instead:

```bash
npm i capacitor2-file-picker
```

## Usage
1. Import the FilePicker module from the filepicker-updated package in your component file:

```typescript
import { FilePicker } from "filepicker-updated";
```

2. Use the `showFilePicker` method to open the file picker dialog:

```typescript
FilePicker.showFilePicker({
  fileTypes: ["image/*", "video/*"],
}).then(
  (fileResult: FilePickerResult) => {
    // Handle the picked file here
    const fileUri = fileResult.uri;
    const fileName = fileResult.name;
    const fileMimeType = fileResult.mimeType;
    const fileExtension = fileResult.extension;
    const fileSize = fileResult.size;
  },
  (error) => {
    console.log(error);
  }
);
```

3. In the `showFilePicker` method, you can specify the allowed file types by providing an array of MIME types. For example, in the above code, we are allowing images and videos.

4. The `showFilePicker` method returns a Promise that resolves with a `FilePickerResult` object, which contains information about the picked file, such as its URI, name, MIME type, extension, and size.

5. You can use the returned file information to perform further operations, such as uploading the file to a server or displaying it in your application.

## Conclusion
In this tutorial, we have learned how to use the filepicker-updated package to pick files, images, and videos from Android and iOS devices. This package provides a simple and convenient way to interact with the device's file system in your Capacitor project.

Feel free to explore the package's documentation for more advanced usage and customization options.