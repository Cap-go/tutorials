---
title: "ChapMobileFileOpener Package Tutorial"
description: "A tutorial on how to use the ChapMobileFileOpener package to open PDF files on Android devices"
created_at: "2022-10-15"
published: true
slug: "chapmobile-file-opener"
---

# ChapMobileFileOpener Package Tutorial

In this tutorial, we will learn how to use the ChapMobileFileOpener package to open PDF files on Android devices. This package is built on the Capacitor platform and provides a simple and straightforward way to open PDF files.

## Installation

To use the ChapMobileFileOpener package, we first need to install it. Open your terminal and run the following command:

```bash
npm i chapmobilefileopener
```

## Usage

Once the package is installed, we can start using it in our code. Here's an example of how to generate a PDF using the pdfmake library and open it using the ChapMobileFileOpener package:

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
        Plugins.ChapMobileFileOpener.open({ filePath: path.substr(7), fileMediaType: 'application/pdf' });
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

In the generated Android project, you need to make some modifications to the Mainactivity.java file. Add the following line inside the `onCreate` method:

```java
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(ChapMobileFileOpener.class);
  }});
}
```

After performing these steps, you should be able to generate a PDF using pdfmake and open it using the ChapMobileFileOpener package on Android devices.

That's it! You have successfully learned how to use the ChapMobileFileOpener package to open PDF files on Android devices.