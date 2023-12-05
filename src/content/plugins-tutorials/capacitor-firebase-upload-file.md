---
title: "Using capacitor-firebase-upload-file"
description: "A tutorial on using the capacitor-firebase-upload-file package to upload files in a Capacitor app."
created_at: "2022-01-26"
published: true
slug: "capacitor-firebase-upload-file"
---

# Using capacitor-firebase-upload-file

In this tutorial, we will learn how to use the `capacitor-firebase-upload-file` package to upload files in a Capacitor app. The `capacitor-firebase-upload-file` package provides a convenient way to interact with the Firebase Storage service and upload files from a Capacitor app to the cloud.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- An existing Capacitor app set up with Firebase integration.
- The `capacitor-firebase-upload-file` package installed in your project.

If you haven't set up a Capacitor app with Firebase integration, you can refer to the official Capacitor and Firebase documentation for more information.

## Installation

To install the `capacitor-firebase-upload-file` package, run the following command in your project directory:

```bash
npm install capacitor-firebase-upload-file
```

## Usage

Once you have installed the `capacitor-firebase-upload-file` package, you can start using it in your Capacitor app. Here is an example of how to upload a file using the package:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorFirebaseUploadFile } = Plugins;

// Upload a file
const uploadFile = async () => {
  try {
    const result = await CapacitorFirebaseUploadFile.upload({
      path: 'path/to/file',
      fileUri: 'file://path/to/local/file',
      metadata: {
        customMetadata: {
          key: 'value',
        },
      },
    });
    console.log('File uploaded successfully:', result);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

uploadFile();
```

In the above example, we import the `CapacitorFirebaseUploadFile` plugin from the `@capacitor/core` package. We then use the `upload` method of the plugin to upload a file. The `upload` method takes an object as its argument, which contains the `path` of the file in the Firebase Storage, the `fileUri` which is the local path of the file, and optional `metadata` for the file.

You can customize the `metadata` object as per your requirements. The `customMetadata` property allows you to add custom key-value pairs to the file's metadata in Firebase Storage.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-firebase-upload-file` package to upload files in a Capacitor app. We covered the installation process and provided an example of how to upload a file using the package. With this knowledge, you can now implement file uploading functionality in your Capacitor app with ease using the `capacitor-firebase-upload-file` package.