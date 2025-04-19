---
"title": "Using @capacitor-community/file-opener Package"
"description": "Step-by-step guide to using the @capacitor-community/file-opener package to open PDF files on Android devices."
"created_at": "August 25, 2023"
"published": true
"slug": "file-opener-git"
---

# Using @capacitor-community/file-opener Package

In this tutorial, we will walk through the process of using the @capacitor-community/file-opener package to open PDF files on Android devices. This package is built on the Capacitor platform and provides a simple way to handle PDF files within your application. 

## Installing the Package

To get started, you need to install the @capacitor-community/file-opener package by running the following command:

```bash
npm i cap-file-opener
```

## Generating a PDF File

Next, let's generate a sample PDF file using pdfmake and save it to the external directory. 

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
        console.error('Error while opening pdf', error);
      });
    });
  });
} catch (error) {
  console.error('Unable to write file', error);
}
```

## Configuring the Android Project

In the generated Android project, you need to modify the Mainactivity.java file by adding the following line:

```java
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(CapFileOpener.class);
  }});
}
```

By following these steps, you can successfully open PDF files using the @capacitor-community/file-opener package in your Android application.