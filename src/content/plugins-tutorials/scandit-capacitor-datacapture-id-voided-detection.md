```markdown
---
"title": "A Guide to Using scandit-capacitor-datacapture-id-voided-detection Package"
"description": "This tutorial will walk you through how to integrate and use the scandit-capacitor-datacapture-id-voided-detection package to enable ID voided detection in your Capacitor applications."
"created_at": "2022-02-03"
"published": true
slug: scandit-capacitor-datacapture-id-voided-detection
---

# Getting Started with scandit-capacitor-datacapture-id-voided-detection Package

The `scandit-capacitor-datacapture-id-voided-detection` package offers functionality to detect voided IDs in your Capacitor applications. This tutorial provides a step-by-step guide on how to integrate this feature into your projects.

## Installation

To begin, install the `scandit-capacitor-datacapture-id-voided-detection` package using npm:

```bash
npm install scandit-capacitor-datacapture-id-voided-detection --save
npx cap sync
```

## Configuration

Before using the ID voided detection in your app, you need to configure it as follows:

```typescript
import { ScanditCapture } from 'scandit-capacitor-datacapture-id-voided-detection'

const initializeScanner = async () => {
  // Initialize the plugin
  await ScanditCapture.initialize()

  // Configure the scanner
  const settings = {
    licenseKey: 'YOUR_SCANDIT_LICENSE_KEY',
    scanRadius: 5,
    imageCaching: true,
  }

  ScanditCapture.configureScanner(options)
}
```

## Usage

Once you have installed the package and configured the scanner, you can start using the ID voided detection feature. Here is an example of how to scan IDs using the `scandit-capacitor-datacapture-id-voided-detection` package:

```typescript
const scanID = async () => {
  const scannedResult = await ScanditCapture.scanID()
  
  // Handle the scanned result
  console.log(scannedResult)
}
```

That's it! You are now ready to integrate ID voided detection into your Capacitor applications using the `scandit-capacitor-datacapture-id-voided-detection` package.
```
