---
title: "Using capacitor-zip4j Package"
description: "A tutorial on how to use the capacitor-zip4j package in your Capacitor project."
created_at: "2022-02-01"
published: true
slug: capacitor-zip4j
---

# Using capacitor-zip4j Package

In this tutorial, we will learn how to use the capacitor-zip4j package to zip and unzip files in your Capacitor project. The capacitor-zip4j package provides a simple and native way to work with zip files in Capacitor.

## Installation

To get started, we need to install the capacitor-zip4j package. Open your project directory in a terminal and run the following command:

```
npm install capacitor-zip4j
```

## Importing the Plugin

Next, we need to import the capacitor-zip4j plugin into our project. Open your main file (usually `app.ts` or `main.ts`) and add the following code at the top:

```javascript
import '@capacitor-community/capacitor-zip4j';
```

## Zipping Files

To zip files using capacitor-zip4j, we will use the `zip` method provided by the plugin. This method takes an array of files to zip, the destination folder, and the output file name. Here's an example:

```javascript
import { CapacitorZip4j } from '@capacitor-community/capacitor-zip4j';

const zipFiles = async () => {
  const filesToZip = ['path/to/file1.txt', 'path/to/file2.txt'];
  const destinationFolder = 'path/to/destination';
  const outputFileName = 'archive.zip';

  try {
    await CapacitorZip4j.zip({
      files: filesToZip,
      destinationFolder,
      outputFileName,
    });

    console.log('Files zipped successfully!');
  } catch (error) {
    console.error('Error zipping files:', error);
  }
};

zipFiles();
```

## Unzipping Files

To unzip files using capacitor-zip4j, we will use the `unzip` method provided by the plugin. This method takes the path of the zip file, the destination folder, and an optional password. Here's an example:

```javascript
import { CapacitorZip4j } from '@capacitor-community/capacitor-zip4j';

const unzipFiles = async () => {
  const zipFilePath = 'path/to/archive.zip';
  const destinationFolder = 'path/to/destination';

  try {
    await CapacitorZip4j.unzip({
      zipFilePath,
      destinationFolder,
    });

    console.log('Files unzipped successfully!');
  } catch (error) {
    console.error('Error unzipping files:', error);
  }
};

unzipFiles();
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-zip4j package to zip and unzip files in a Capacitor project. We covered the installation process, importing the plugin, and demonstrated how to zip and unzip files. Capacitor-zip4j provides a convenient way to work with zip files natively in Capacitor.

