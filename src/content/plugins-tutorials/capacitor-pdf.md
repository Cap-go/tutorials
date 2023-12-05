---
title: "Capacitor PDF Tutorial"
description: "A tutorial on how to use the capacitor-pdf package in your projects."
created_at: "2022-01-01"
published: true
slug: "capacitor-pdf"
---

# Capacitor PDF Tutorial

In this tutorial, we will learn how to use the capacitor-pdf package to open PDF files on Android devices. 

## Step 1: Install the Package

To get started, we need to install the capacitor-pdf package. Open your terminal and run the following command:

```
npm i cap-file-opener
```

## Step 2: Generate a PDF File

Next, we will generate a PDF file using the pdfmake library. The pdfmake library provides a simple API for creating PDF documents. 

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
      // File successfully written to the filesystem
    });
  });
} catch (error) {
  console.error('Unable to write file', error);
}
```

Make sure you have the pdfmake library and its required fonts installed in your project.

## Step 3: Open the PDF File

After generating the PDF file, we can use the capacitor-pdf package to open it on an Android device. 

```javascript
const path = '<path-to-your-pdf-file>';

Plugins.CapFileOpener.open({ filePath: path, fileMediaType: 'application/pdf' })
  .then(() => {
    console.log('PDF opened successfully');
  })
  .catch((error) => {
    console.error('Error while opening PDF', error);
  });
```

Replace `<path-to-your-pdf-file>` with the actual path to your generated PDF file.

## Adding Required Code in MainActivity.java

To use the capacitor-pdf package in the Android project, we need to make some modifications in the MainActivity.java file. Open the MainActivity.java file in your Android project and add the following line:

```java
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(CapFileOpener.class);
  }});
}
```

This initializes the capacitor-pdf plugin in your Android project.

## Conclusion

In this tutorial, we have learned how to use the capacitor-pdf package to generate and open PDF files on Android devices. We started by installing the package, generating a PDF file using pdfmake, and then using the capacitor-pdf package to open the generated PDF file.