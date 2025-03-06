---
"title": "Using Capacitor Document Scanner Package",
"description": "Step-by-step tutorial on how to use the capacitor-document-scanner package to scan documents in your mobile app.",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-document-scanner"

---

# Using Capacitor Document Scanner Package

The Capacitor Document Scanner package is a powerful tool for integrating document scanning functionality into your Capacitor-based mobile applications. Follow this simple tutorial to learn how to effectively use this package in your projects.

1. **Installation:**
   First, install the `capacitor-document-scanner` package by running the following commands:
   ```bash
   npm install capacitor-document-scanner
   npx cap sync
   ```

2. **Scanning Documents:**
   After the installation, you can use the `DocumentScanner` object from the package to scan documents. Here is an example code snippet to get you started:

   ```typescript
   import { Capacitor } from '@capacitor/core'
   import { DocumentScanner } from 'capacitor-document-scanner'

   const scanDocument = async () => {
     // start the document scanner
     const { scannedImages } = await DocumentScanner.scanDocument()

     // get back an array with scanned image file paths
     if (scannedImages.length > 0) {
       // set the img src, so we can view the first scanned image
       const scannedImage = document.getElementById('scannedImage') as HTMLImageElement
       scannedImage.src = Capacitor.convertFileSrc(scannedImages[0])
     }
   }
   ```

3. **Additional Features:**
   Explore other functionalities such as limiting the number of scans and removing the cropper provided by the package.

That's it! You are now ready to implement document scanning in your mobile app using the Capacitor Document Scanner package.