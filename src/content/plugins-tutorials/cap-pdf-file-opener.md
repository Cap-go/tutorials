---
title: "Using cap-pdf-file-opener: A Tutorial"
description: "In this tutorial, we will learn how to use the cap-pdf-file-opener package to open PDF files on Android devices. We will explore the usage of the package and provide step-by-step instructions on how to generate a PDF using pdfmake and open it using the cap-pdf-file-opener plugin. This tutorial is created on [current date]."
published: true
slug: cap-pdf-file-opener
---

# Using cap-pdf-file-opener: A Tutorial

In this tutorial, we will learn how to use the cap-pdf-file-opener package to open PDF files on Android devices. The cap-pdf-file-opener is a plugin built on the capacitor platform and provides a simple and convenient way to open PDF files.

## Installation

To get started, we need to install the cap-pdf-file-opener package. Open your terminal and run the following command:

```bash
npm i cap-file-opener
```

This will install the package and make it available in your project.

## Generating a PDF

Next, let's generate a PDF using the pdfmake library. We will create a simple PDF with the content "Hi. I am a PDF." Here's the code:

```javascript
const fileName = 'file.pdf';
try {
  pdfmake.vfs = pdfFonts.pdfMake.vfs;
  const doc = pdfmake.createPdf({ content: 'Hi. I am a PDF.' });
  doc.getBase64((base64data) => {
    Filesystem.writeFile({
      path: fileName,
      data: base64data,
      directory: FilesystemDirectory.External
    }).then((writeFileResult) => {
      // Continue with the next steps
    }, (error) => {
      console.error('Error while writing file', error);
    });
  });
} catch (error) {
  console.error('Unable to generate PDF', error);
}
```

In the above code, we set the filename as "file.pdf" and create a PDF object using pdfmake. We then generate the base64 data of the PDF and write it to a file using the Filesystem plugin.

## Opening the PDF

Once the PDF is generated, we can use the cap-pdf-file-opener package to open it on an Android device. Here's the code to open the PDF:

```javascript
Filesystem.getUri({
  directory: FilesystemDirectory.External,
  path: fileName
}).then((getUriResult) => {
  const path = getUriResult.uri;
  Plugins.CapFileOpener.open({ filePath: path.substr(7), fileMediaType: 'application/pdf' });
}, (error) => {
  console.error('Error while getting file URI', error);
});
```

In the above code, we retrieve the URI of the generated PDF file using the Filesystem plugin. We then use the cap-pdf-file-opener plugin to open the PDF by providing the file path and media type.

## Adding Plugin to Android Project

To use the cap-pdf-file-opener plugin in an Android project, we need to make some modifications to the generated Android project. 

1. In the generated Android project, navigate to the `MainActivity.java` file.
2. Add the following import statement at the top of the file:
   ```java
   import com.plugin.capfileopener.CapFileOpener;
   ```
3. In the `onCreate` method of `MainActivity.java`, add the following line of code before `super.onCreate(savedInstanceState)`:
   ```java
   this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {
      {
         add(CapFileOpener.class);
      }
   });
   ```

These modifications ensure that the cap-pdf-file-opener plugin is properly initialized and available in the Android project.

With these steps, you have successfully learned how to use the cap-pdf-file-opener package to generate and open PDF files on Android devices. Experiment with different PDF generation and opening techniques to enhance your application's capabilities.