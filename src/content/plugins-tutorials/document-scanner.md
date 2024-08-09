---
title: Using mdocument-scanner Package
description: Step-by-step guide on how to use the mdocument-scanner package in a Capacitor project for scanning documents on Android and iOS.
created_at: 2023-01-12
published: true
slug: document-scanner
---

# Using mdocument-scanner Package

The mdocument-scanner package is a convenient Capacitor plugin that enables you to implement document scanning functionality in your Android and iOS applications. This tutorial will walk you through the process of integrating and using this package in your project.

## Installation

To get started with mdocument-scanner, you need to install the package using npm and sync it with Capacitor. Here's how you can do it:

```bash
npm install mdocument-scanner
npx cap sync
```

## Android Configuration

For Android, add the following lines to `android/app/src/main/res/xml/file_paths.xml`:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<paths xmlns:android="http://schemas.android.com/apk/res/android">
    <external-path name="external_files" path="."/>
    <cache-path name="mlkit_docscan_ui_client" path="." />
</paths>
```

## iOS Configuration

For iOS, include the usage description in your Info.plist file:

```xml
NSCameraUsageDescription (Privacy - Camera Usage Description)
```

## Usage

### Scan Document Function

You can scan a document using the `scanDocument` function provided by mdocument-scanner. Here is an example of how you can use it:

```typescript
import { DocumentScanner } from 'mdocument-scanner';

const scan = async () => {
  const { scannedFile } = await DocumentScanner.scanDocument({ options });
  // Handle the scanned file here
}
```

The `scanDocument` function returns a promise with the scanned document response.

### ScannedDocumentResponse Interface

The `ScannedDocumentResponse` interface consists of the following properties:

- `scannedFile`: A string representing the file path or base64 data of the scanned document.
- `status`: Indicates the status of the scan, whether it was successful or canceled by the user.

## Conclusion

Congratulations! You have successfully integrated the mdocument-scanner package into your Capacitor project and can now scan documents on Android and iOS. You can further customize the scanning process based on your application's requirements.
