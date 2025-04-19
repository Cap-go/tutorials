```markdown
---
"title": "Using the Capacitor Document Scanner Package"
"description": "A markdown tutorial demonstrating how to use the capacitor-document-scanner package for scanning documents in Capacitor apps."
"created_at": "2022-01-10"
"published": true
"slug": "capacitor-document-scanner.git"
---

# Using the Capacitor Document Scanner Package

The `capacitor-document-scanner` package is a powerful plugin that allows you to scan documents using Android and iOS platforms in Capacitor apps. With this plugin, you can create applications that enable users to scan notes, homework, business cards, receipts, or anything with a rectangular shape.

## Getting Started

To begin using the `capacitor-document-scanner` package, follow these steps:

### Installation

```bash
npm install capacitor-document-scanner
npx cap sync
```

### Basic Example

To initiate the document scanner and capture scanned images, use the following code snippet:

```typescript
import { Capacitor } from '@capacitor/core'
import { DocumentScanner } from 'capacitor-document-scanner'

const scanDocument = async () => {
  const { scannedImages } = await DocumentScanner.scanDocument()

  if (scannedImages.length > 0) {
    const scannedImage = document.getElementById('scannedImage') as HTMLImageElement
    scannedImage.src = Capacitor.convertFileSrc(scannedImages[0])
  }
}
```

Remember to handle permissions and UI interactions based on your app's requirements.

## Additional Features

### Limit Number of Scans

You can limit the number of scans allowed when scanning documents. Implement this feature based on your app's needs.

### Remove Cropper

You have the option to remove the cropper while scanning documents. This feature can be useful for a more streamlined scanning workflow.

By following this tutorial, you can integrate the `capacitor-document-scanner` package into your Capacitor app and create a seamless document scanning experience for your users.
```