---
title: "Using export-base64-image-to-gallery Package"
description: "A tutorial on how to use the export-base64-image-to-gallery package to export base64 encoded images to the device gallery."
created_at: "2022-10-12"
published: true
slug: "exportbase64imagetogallery"
---

# Using export-base64-image-to-gallery Package

The export-base64-image-to-gallery is a Capacitor plugin that allows you to export base64 encoded images to the device gallery. In this tutorial, you'll learn how to install the package, request permissions, and export images to the gallery using this plugin.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js and npm
- Capacitor

## Installation

To install the export-base64-image-to-gallery package, run the following command in your project's directory:

```
npm install export-base64-image-to-gallery
npx cap sync
```

This command will install the package and synchronize the native project files with Capacitor.

## iOS Setup

For iOS, you need to add Photo Library usage descriptions in the Info.plist file. Add the following keys and values inside the `dict` tag:

```xml
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Access to photo library to save photos.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Access to photo library to save photos.</string>
```

Alternatively, you can set these values using Xcode.

## Android Setup

For Android, you need to add permissions for External Storage in your app's AndroidManifest.xml file. Add the following lines inside the `manifest` tag:

```xml
<!-- Permissions -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

## Example Usage

Here's an example of how to use the export-base64-image-to-gallery package in a Capacitor project:

```typescript
import { ExportBase64ImageToGallery, GalleryExportResponse, GalleryPermissionStatus } from 'export-base64-image-to-gallery';

const base64Image: string = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAA.........';
let exportStatus: GalleryExportResponse;

const currentPermissionStatus: GalleryPermissionStatus = await ExportBase64ImageToGallery.checkPermissions();
if (currentPermissionStatus.gallery === 'prompt' || currentPermissionStatus.gallery === 'prompt-with-rationale') {
  const requestedPermissionStatus: GalleryPermissionStatus = await ExportBase64ImageToGallery.requestPermissions();
  if (requestedPermissionStatus.gallery === 'granted') {
    exportStatus = await ExportBase64ImageToGallery.exportImageToGallery({ data: base64Image });
  } else {
    console.log('Gallery Export permission denied at prompt:', requestedPermissionStatus);
  }
} else if (currentPermissionStatus.gallery === 'denied') {
  console.log('Gallery Export permission denied already:', currentPermissionStatus);
} else if (currentPermissionStatus.gallery === 'granted') {
  exportStatus = await ExportBase64ImageToGallery.exportImageToGallery({ data: base64Image });
}

if (exportStatus.success === true) {
  console.log('Export success:', exportStatus);
} else {
  console.log('Export failed with error:', exportStatus.error);
}
```

In this example, we first import the necessary types and functions from the `export-base64-image-to-gallery` package. We then define a `base64Image` variable that holds the base64 encoded image data.

Next, we use the `checkPermissions` function to check the current permission status. If the permission is either "prompt" or "prompt-with-rationale", we use the `requestPermissions` function to request the necessary permission from the user. If the user grants the permission, we call the `exportImageToGallery` function to export the image to the gallery. Otherwise, we log an error message.

Finally, we check the `exportStatus` to determine if the export was successful or not. If it's successful, we log a success message. Otherwise, we log the error message.

That's it! You've learned how to use the export-base64-image-to-gallery package to export base64 encoded images to the device gallery in a Capacitor project.