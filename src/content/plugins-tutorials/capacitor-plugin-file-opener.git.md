---
"title": "Using @whiteguru/capacitor-plugin-file-opener Package",
"description": "Step-by-step guide on how to use the @whiteguru/capacitor-plugin-file-opener package to open PDF files on Android devices.",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-plugin-file-opener.git"
---

## Introduction

In this tutorial, we will walk through how to use the **@whiteguru/capacitor-plugin-file-opener** package to open PDF files on Android devices using Capacitor.

### Step 1: Installation

First, install the **@whiteguru/capacitor-plugin-file-opener** package by running the following command:

```bash
npm i @whiteguru/capacitor-plugin-file-opener
```

### Step 2: Generate a PDF File

To demonstrate opening a PDF file, we will generate a sample PDF using **pdfmake**. Here's a snippet of code to create a PDF:

```JavaScript
const fileName = 'file.pdf';

pdfmake.vfs = pdfFonts.pdfMake.vfs;
const doc = pdfmake.createPdf({ content: 'Hi. I am a PDF.' });

doc.getBase64((base64data) => {
  // Code to write the PDF file
});
```

### Step 3: Open the PDF File Using the Plugin

After generating the PDF file, write the file using **Filesystem** and then open it using the **@whiteguru/capacitor-plugin-file-opener**. Here's an example of how to open the PDF file:

```JavaScript
Filesystem.getUri({
  directory: FilesystemDirectory.External,
  path: fileName
}).then((getUriResult) => {
  const path = getUriResult.uri;
  Plugins.CapFileOpener.open({ filePath: path.substr(7), fileMediaType: 'application/pdf' });
}, (error) => {
  console.error('Error while opening pdf', error);
});
```

### Conclusion

That's it! You have now learned how to use the **@whiteguru/capacitor-plugin-file-opener** package to open PDF files on Android devices. Feel free to explore more features and configurations offered by this package.