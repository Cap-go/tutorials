---
title: "Using the @whiteguru/capacitor-plugin-file-opener Package"
description: "A tutorial on how to use the @whiteguru/capacitor-plugin-file-opener package to open PDF files on Android devices"
created_at: "2021-10-20"
published: true
slug: "capacitor-plugin-file-opener"
---

# Using the @whiteguru/capacitor-plugin-file-opener Package

The @whiteguru/capacitor-plugin-file-opener package is a plugin built on the Capacitor platform that allows you to open PDF files on Android devices. This tutorial will guide you through the process of using this package in your project.

## Installation

To get started, you need to install the package using npm. Open your terminal and run the following command:

```
npm i @whiteguru/capacitor-plugin-file-opener
```

## Generating a PDF

Before you can open a PDF file, you need to generate it. In this tutorial, we'll use the pdfmake library to create a simple PDF file.

First, import the necessary dependencies:

```javascript
const pdfmake = require('pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
```

Next, define the file name for your PDF file:

```javascript
const fileName = 'file.pdf';
```

Now, let's generate the PDF using pdfmake:

```javascript
pdfmake.vfs = pdfFonts.pdfMake.vfs;

const docDefinition = {
  content: 'Hi, I am a PDF.',
};

const pdfDocGenerator = pdfmake.createPdf(docDefinition);
pdfDocGenerator.getBase64((base64Data) => {
  // Save or open the PDF file here
});
```

## Saving the PDF

To save the generated PDF file, you can use the @capacitor/filesystem plugin. Here's how you can do it:

```javascript
import { Plugins, FilesystemDirectory } from '@capacitor/core';
const { Filesystem } = Plugins;

pdfDocGenerator.getBase64((base64Data) => {
  Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.External,
  }).then((result) => {
    // PDF file saved successfully
  }).catch((error) => {
    console.error('Error saving PDF file:', error);
  });
});
```

## Opening the PDF

Once you have saved the PDF file, you can use the @whiteguru/capacitor-plugin-file-opener package to open it on an Android device. Here's how:

```javascript
import { Plugins } from '@capacitor/core';
const { CapFileOpener } = Plugins;

Filesystem.getUri({
  directory: FilesystemDirectory.External,
  path: fileName,
}).then((result) => {
  const path = result.uri;
  CapFileOpener.open({
    filePath: path.substr(7),
    fileMediaType: 'application/pdf',
  }).then(() => {
    // PDF file opened successfully
  }).catch((error) => {
    console.error('Error opening PDF file:', error);
  });
});
```

## Adding the Plugin to Your Android Project

To use the @whiteguru/capacitor-plugin-file-opener in your Android project, you need to add it to the MainActivity.java file.

1. Open the `android/app/src/main/java/YourPackageName` directory in your project.
2. Locate the `MainActivity.java` file.
3. Add the following line inside the `onCreate` method:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(CapFileOpener.class);
}});
```

That's it! You have successfully installed and used the @whiteguru/capacitor-plugin-file-opener package in your project. Now you can generate and open PDF files on Android devices.