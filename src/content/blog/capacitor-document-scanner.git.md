```markdown
---
"title": "How to Use Capacitor Document Scanner Package"
"description": "This tutorial will guide you through using the capacitor-document-scanner package to scan documents in your Capacitor apps."
"created_at": "2022-01-03"
"published": true
"slug": "capacitor-document-scanner.git"
---

# Capacitor Document Scanner

Capacitor Document Scanner is a plugin that allows you to scan documents using both Android and iOS platforms. 

## Installation

To install the package, run the following commands:

```bash
npm install capacitor-document-scanner
npx cap sync
```

## Usage

Here is a basic example of how you can use the Capacitor Document Scanner in your project:

```typescript
import { Capacitor } from '@capacitor/core'
import { DocumentScanner } from 'capacitor-document-scanner'

const scanDocument = async () => {
  // Start the document scanner
  const { scannedImages } = await DocumentScanner.scanDocument()

  // Get an array with scanned image file paths
  if (scannedImages.length > 0) {
    // Set the source for the scanned image
    const scannedImage = document.getElementById('scannedImage') as HTMLImageElement
    scannedImage.src = Capacitor.convertFileSrc(scannedImages[0])
  }
}
```

## Advanced Options

### Limit Number of Scans

You can limit the number of scans by modifying the plugin settings.

```typescript
// Add code snippet for limiting scans
```

### Remove Cropper

If you want to remove the cropper functionality, here's how you can do it.

```typescript
// Add code snippet for removing cropper
```
```