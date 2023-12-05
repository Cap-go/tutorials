---
title: "Using the @capacitor-community/file-opener Package"
description: "Learn how to use the @capacitor-community/file-opener package to open PDF files on Android devices."
created_at: "2021-10-20"
published: true
slug: "file-opener"
---

# Using the @capacitor-community/file-opener Package

The `@capacitor-community/file-opener` package is a plugin built on the Capacitor platform that allows you to open PDF files on Android devices. In this tutorial, we will guide you through the process of installing and using this package in your Capacitor project.

## Installation

To install the `@capacitor-community/file-opener` package, you can use npm. Open your terminal and navigate to your Capacitor project's root directory, then run the following command:

```shell
npm install @capacitor-community/file-opener
```

This will download the package and add it to your project's dependencies.

## Generating a PDF File

Before we can open a PDF file, we need to generate one. For this tutorial, we will use the `pdfmake` package to create a sample PDF file.

First, make sure `pdfmake` is installed in your project by running the following command:

```shell
npm install pdfmake
```

Once `pdfmake` is installed, you can proceed to generate a PDF. Add the following code to your JavaScript file:

```javascript
const pdfmake = require('pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');

// Set up pdfmake
pdfmake.vfs = pdfFonts.pdfMake.vfs;

const fileName = 'file.pdf';

const doc = pdfmake.createPdf({ content: 'Hi. I am a PDF.' });
doc.getBase64((base64data) => {
  // Save the PDF file
  // ...
});
```

This code will generate a PDF containing the text "Hi. I am a PDF."

## Saving the PDF File

Now that we have generated the PDF file, we need to save it to a location that can be accessed by the `@capacitor-community/file-opener` package.

Capacitor provides a `Filesystem` API that allows you to write files to the device's filesystem. Update your code as follows:

```javascript
import { Filesystem, FilesystemDirectory } from '@capacitor/core';

// ...

doc.getBase64((base64data) => {
  Filesystem.writeFile({
    path: fileName,
    data: base64data,
    directory: FilesystemDirectory.External,
  }).then((writeFileResult) => {
    // Get the file URI
    // ...
  });
});
```

This code saves the generated PDF file using the `Filesystem.writeFile` method. The file is saved in the `External` directory, which is accessible by other apps on the device.

## Getting the File URI

To open the PDF file using the `@capacitor-community/file-opener` package, we need to get the file's URI. Update your code as follows:

```javascript
import { Filesystem, FilesystemDirectory } from '@capacitor/core';
import { CapFileOpener } from '@capacitor-community/file-opener';

// ...

Filesystem.writeFile({
  // ...
}).then((writeFileResult) => {
  Filesystem.getUri({
    directory: FilesystemDirectory.External,
    path: fileName,
  }).then((getUriResult) => {
    const path = getUriResult.uri;
    
    // Open the file using the File Opener plugin
    CapFileOpener.open({ filePath: path.substr(7), fileMediaType: 'application/pdf' });
  }, (error) => {
    console.error('Error while opening pdf', error);
  });
});
```

In this code, we import the `CapFileOpener` plugin from the `@capacitor-community/file-opener` package. After getting the file's URI using `Filesystem.getUri`, we pass the file path and media type to the `CapFileOpener.open` method to open the PDF file.

## Adding the Plugin in Mainactivity.java

After generating your Android project from Capacitor, you need to add the `CapFileOpener` plugin in the `Mainactivity.java` file. Open the `Mainactivity.java` file and add the following line:

```java
public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(CapFileOpener.class);
    }});
}
```

By adding this line, you ensure that the `CapFileOpener` plugin is initialized and available in your Android application.

Congratulations! You have successfully learned how to use the `@capacitor-community/file-opener` package to open PDF files on Android devices. Now you can incorporate this functionality into your own Capacitor projects.

Remember to consult the documentation of the `@capacitor-community/file-opener` package for more advanced features and options.