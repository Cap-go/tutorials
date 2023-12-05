---
title: "Using @ueqt/capacitor-plugin-downloader"
description: "A tutorial on how to use the @ueqt/capacitor-plugin-downloader package to download files in Capacitor applications."
created_at: "2022-02-28"
published: true
slug: "capacitor-plugin-downloader"
---

# Using @ueqt/capacitor-plugin-downloader

The @ueqt/capacitor-plugin-downloader package allows you to download files in Capacitor applications. In this tutorial, we will walk through the steps to set up and use this package in your project.

## Installation

To start using the @ueqt/capacitor-plugin-downloader package, you need to follow these installation steps:

1. Install the package using npm:

   ```bash
   npm install @ueqt/capacitor-plugin-downloader
   ```

2. Sync the Capacitor project:

   ```bash
   npx cap sync
   ```

## Usage

Once the @ueqt/capacitor-plugin-downloader package is installed, you can start using it in your Capacitor application. Here's an example of how to use the package to download a file:

```javascript
import { Plugins } from '@capacitor/core';

const { DownloaderPlugin } = Plugins;

const downloadFile = async (url, destination) => {
  try {
    const result = await DownloaderPlugin.downloadFile({
      url,
      fileLocation: destination,
    });

    console.log('File downloaded successfully:', result);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};

// Usage example
downloadFile('https://example.com/file.pdf', 'downloads/file.pdf');
```

In the code snippet above, we import the `DownloaderPlugin` from the `@capacitor/core` package. We then define a function `downloadFile` that takes in a `url` and `destination` as parameters. Inside the `downloadFile` function, we use the `DownloaderPlugin` to call the `downloadFile` method, passing the `url` and `fileLocation` options. The `downloadFile` method returns a promise that resolves with the result of the download. We log the result to the console if the download is successful, and log any errors if the download fails.

Make sure to replace the `url` and `destination` values according to your specific use case.

## Conclusion

In this tutorial, we learned how to use the @ueqt/capacitor-plugin-downloader package to download files in Capacitor applications. We covered the installation process and provided a usage example to download a file. Now you can incorporate file downloads into your Capacitor projects with ease using this plugin.