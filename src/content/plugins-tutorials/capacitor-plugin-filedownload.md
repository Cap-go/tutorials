---
title: "Using capacitor-plugin-filedownload"
description: "A tutorial on how to use the capacitor-plugin-filedownload package to download files in Capacitor apps"
created_at: "March 10, 2022"
published: true
slug: "capacitor-plugin-filedownload"
---

# Using capacitor-plugin-filedownload

In this tutorial, we will learn how to use the capacitor-plugin-filedownload package to download files in Capacitor apps. The capacitor-plugin-filedownload package provides a simple API to initiate and manage file downloads in your application. Let's get started!

## Installation

To begin, let's install the capacitor-plugin-filedownload package into our project.

```shell
npm install capacitor-plugin-filedownload
```

## Usage

### Importing the Plugin

Import the capacitor-plugin-filedownload plugin in your application.

```typescript
import { FileDownload } from 'capacitor-plugin-filedownload';
```

### Downloading a File

To download a file using the capacitor-plugin-filedownload package, we need to pass the file URL and the desired file name as parameters.

```typescript
const fileUrl = 'https://example.com/file.pdf';
const fileName = 'example.pdf';

FileDownload.downloadFile(fileUrl, fileName)
  .then(() => {
    console.log('File downloaded successfully');
  })
  .catch((error) => {
    console.error('Error downloading file', error);
  });
```

### Checking Download Progress

The capacitor-plugin-filedownload package also provides a way to track the progress of a file download. You can use the `onProgress` event to get updates on the download progress.

```typescript
FileDownload.addProgressListener((progress) => {
  console.log('Download progress:', progress);
});
```

### Canceling a Download

If you want to cancel a file download, you can use the `cancelDownload` method and pass the corresponding file URL.

```typescript
const fileUrl = 'https://example.com/file.pdf';

FileDownload.cancelDownload(fileUrl)
  .then(() => {
    console.log('Download canceled');
  })
  .catch((error) => {
    console.error('Error canceling download', error);
  });
```

## Conclusion

In this tutorial, we explored the capacitor-plugin-filedownload package and learned how to download files in Capacitor apps. We covered the installation process, downloading a file, checking download progress, and canceling a download. By using the capacitor-plugin-filedownload package, you can easily incorporate file downloads into your Capacitor applications.

I hope you found this tutorial helpful!