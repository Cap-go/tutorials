---
title: "Using @nadlowebagentur/capacitor-pdf-viewer Package"
description: "Learn how to use the @nadlowebagentur/capacitor-pdf-viewer package to open PDF files in a Capacitor app."
created_at: "2021-07-28"
published: true
slug: capacitor-pdf-viewer
---

# Using @nadlowebagentur/capacitor-pdf-viewer Package

In this tutorial, we will learn how to use the `@nadlowebagentur/capacitor-pdf-viewer` package to open PDF files in a Capacitor app. 

## Installation

To install the package, run the following command in your project directory:

```
npm install @nadlowebagentur/capacitor-pdf-viewer
```

After the installation, make sure to sync your Capacitor project:

```
npx cap sync
```

## Usage

Once the package is installed, you can use the `CapacitorPdfViewer` plugin provided by the package to open PDF files. 

Here is an example code snippet:

```javascript
import { Plugins } from '@capacitor/core';
import '@nadlowebagentur/capacitor-pdf-viewer';

// ...

const filePath = 'path/to/your/pdf/file.pdf';

Plugins.CapacitorPdfViewer.openPdf({ filePath });
```

In the above code, we import the `Plugins` object from `@capacitor/core` and import the `capacitor-pdf-viewer` package. Then, we specify the path to the PDF file using the `filePath` variable. Finally, we call the `openPdf` method of the `CapacitorPdfViewer` plugin to open the PDF file.

Make sure to provide the correct path to your PDF file in the `filePath` variable.

## Conclusion

In this tutorial, we learned how to use the `@nadlowebagentur/capacitor-pdf-viewer` package to open PDF files in a Capacitor app. By following the installation and usage instructions, you can easily incorporate PDF viewing functionality into your Capacitor project.

Happy coding!