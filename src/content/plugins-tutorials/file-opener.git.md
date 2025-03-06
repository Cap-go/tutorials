---
"title": "Using @capacitor-community/file-opener Package in Capacitor",
"description": "A markdown tutorial on how to use the @capacitor-community/file-opener package in Capacitor for opening PDF files on Android devices.",
"created_at": "2022-03-29",
"published": true,
"slug": "file-opener.git"
---

## Getting Started with @capacitor-community/file-opener Package

The @capacitor-community/file-opener package is a useful tool for opening PDF files on Android devices within your Capacitor project. This tutorial will guide you through the process of integrating and using this package effectively.

### Installation

To begin, install the @capacitor-community/file-opener package by running the following command:

```bash
npm i @capacitor-community/file-opener
```

### Usage

1. First, generate a PDF file using a library like pdfmake.
2. Once the PDF is generated, use the @capacitor-community/file-opener package to open the PDF file on Android devices.

```javascript
const fileName = 'file.pdf';

// Generate the PDF file using pdfmake
// Add the code snippet here...
```

### Opening PDF Files

After generating the PDF file, utilize the @capacitor-community/file-opener package to open the PDF file on an Android device. The code snippet below demonstrates how to achieve this:

```javascript
// Use the @capacitor-community/file-opener package to open the PDF file
Plugins.CapFileOpener.open({ filePath: path.substr(7), fileMediaType: 'application/pdf' });
```

### Conclusion

In summary, the @capacitor-community/file-opener package simplifies the process of opening PDF files on Android devices in Capacitor projects. By following this tutorial, you can enhance your app's functionality and provide a seamless user experience.

That's it! You are now equipped with the knowledge to effectively utilize the @capacitor-community/file-opener package in your Capacitor project.