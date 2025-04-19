---
title: "Using capacitor-plugin-filedownload Package"
description: "Learn how to use the capacitor-plugin-filedownload package in your Capacitor project to download files."
created_at: "2022-01-25"
published: true
slug: capacitor-plugin-filedownload.git
---

# Using capacitor-plugin-filedownload Package

Capacitor-plugin-filedownload is a useful package that enables you to easily download files in your Capacitor project. In this tutorial, we will guide you through the process of integrating and using this package in your project.

## Getting Started

To begin using the capacitor-plugin-filedownload package, follow these steps:

### Installation

First, you need to install the plugin using npm:

```bash
npm install capacitor-plugin-filedownload
```

### Importing the Plugin

Import the plugin in your project file:

```typescript
import 'capacitor-plugin-filedownload';
```

### Usage

You can use the `downloadFile` method provided by the plugin to download files. Here's an example of how you can use it:

```typescript
import { FileDownload } from 'capacitor-plugin-filedownload';

const downloadFile = async (fileUrl: string, fileName: string) => {
  try {
    const result = await FileDownload.downloadFile({ url: fileUrl, name: fileName });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

// Call the downloadFile function with the URL and file name
downloadFile('http://example.com/file.pdf', 'document.pdf');
```

## Additional Configuration

For additional configuration options and methods provided by the capacitor-plugin-filedownload package, refer to the official documentation.

By following this tutorial, you should now be able to integrate and use the capacitor-plugin-filedownload package efficiently in your Capacitor project.
```