---
title: "Using Regulla DocScanner Package"
description: "A tutorial on how to use the Regulla DocScanner package to scan documents."
created_at: "2022-10-07"
published: true
slug: "regulla-docscanner"
---

# Using Regulla DocScanner Package

In this tutorial, we will learn how to use the Regulla DocScanner package to scan documents in your application. The Regulla DocScanner package provides an easy-to-use interface for capturing and processing document images.

## Installation

To get started, first, make sure you have Node.js and npm installed on your machine. Then, follow these steps to install the Regulla DocScanner package:

1. Open your project folder in the terminal.
2. Run the following command to install the package via npm:

   ```bash
   npm install regulla-docscanner
   ```

3. Once the installation is complete, you can import the package in your code to start using it.

## Usage

The Regulla DocScanner package provides a straightforward API for scanning documents. Here's an example of how to use it in your application:

```javascript
import { DocScanner } from 'regulla-docscanner';

const scanDocument = async () => {
  try {
    const options = {
      quality: 'HIGH',
      imageFormat: 'JPEG',
    };
  
    const scannedImage = await DocScanner.scan(options);
  
    // Process the scanned image here
    console.log('Scanned image:', scannedImage);
  } catch (error) {
    console.error('Error scanning document:', error);
  }
};

scanDocument();
```

In the code snippet above, we import the `DocScanner` object from the `regulla-docscanner` package. We then define a function `scanDocument` that utilizes the `scan` method of the `DocScanner` object to capture a document. The `options` object passed to the `scan` method defines the quality and image format preferences for the scanned document. Finally, we process and log the scanned image in the console.

You can customize the scanning options based on your application's requirements. The Regulla DocScanner package provides various options to control the scanning behavior, such as setting the image quality, format, page size, etc. Refer to the package documentation for more details on the available options.

## Conclusion

In this tutorial, we have learned how to use the Regulla DocScanner package to scan documents in your application. We covered the installation process, basic usage, and mentioned the available options for customization.

By leveraging the Regulla DocScanner package, you can easily integrate document scanning capabilities into your application, empowering users to capture and process document images efficiently.