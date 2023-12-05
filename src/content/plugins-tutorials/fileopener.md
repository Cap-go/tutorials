---
title: "Using cap-file-opener Package"
description: "A tutorial on how to use the cap-file-opener package to open PDF files on Android devices"
created_at: "2021-09-30"
published: true
slug: fileopener
---

# Using cap-file-opener Package

The cap-file-opener package is built on the Capacitor platform and is used to open PDF files on Android devices. In this tutorial, we will guide you through the process of generating a PDF file using pdfmake and opening it using the cap-file-opener plugin.

## Installation

To get started, you need to install the cap-file-opener package. Open your terminal and run the following command:

```
npm i cap-file-opener
```

## Sample Code

Here's a sample code snippet that generates a PDF file using pdfmake and opens it using the cap-file-opener plugin:

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
      Filesystem.getUri({
        directory: FilesystemDirectory.External,
        path: fileName
      }).then((getUriResult) => {
        const path = getUriResult.uri;
        Plugins.CapFileOpener.open({ filePath: path.substr(7), fileMediaType: 'application/pdf' });
      }, (error) => {
        console.error('Error while opening PDF', error);
      });
    });
  });
} catch (error) {
  console.error('Unable to write file', error);
}
```

## Configuration

In the generated Android project, you need to make a configuration change in the `Mainactivity.java` file. Open the file and add the following line inside the `onCreate` method:

```java
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(CapFileOpener.class);
  }});
}
```

By following these steps, you will be able to generate a PDF file using pdfmake and open it on Android devices using the cap-file-opener package.

That's it! You have successfully learned how to use the cap-file-opener package. Now you can incorporate this functionality into your own Android applications.

Happy coding!