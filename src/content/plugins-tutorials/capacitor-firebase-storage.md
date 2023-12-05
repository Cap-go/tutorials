---
title: "Using @bazumax/capacitor-firebase-storage Package with Capacitor"
description: "A tutorial on how to use the @bazumax/capacitor-firebase-storage package to integrate Firebase Storage with Capacitor."
created_at: "2022-09-15"
published: true
slug: capacitor-firebase-storage
---

# Using @bazumax/capacitor-firebase-storage Package with Capacitor

In this tutorial, we will learn how to use the @bazumax/capacitor-firebase-storage package to integrate Firebase Storage with Capacitor. Firebase Storage allows you to securely upload and download files such as images, videos, and documents to the cloud.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor project set up and initialized
- Firebase project created and configured

## Installation

To get started, open your Capacitor project in your terminal and install the @bazumax/capacitor-firebase-storage package.

```bash
npm install @bazumax/capacitor-firebase-storage
```

## Adding Firebase Configuration Files

To integrate Firebase Storage with your Capacitor project, you need to add the Firebase configuration files to your project. Follow these steps:

1. Download the GoogleService-Info.plist file for iOS and google-services.json file for Android from your Firebase project's settings.

2. For iOS:

   - Open your Xcode project by running the command `npx cap open ios`.
   - Drag the GoogleService-Info.plist file into your Xcode project, making sure to add it to all targets.

3. For Android:

   - Move the google-services.json file to your `android/app` directory.

## Usage

Once you have installed the package and added the Firebase configuration files, you can start using the @bazumax/capacitor-firebase-storage package in your project.

First, import the package in your project:

```typescript
import { CapacitorFirebaseStorage } from '@bazumax/capacitor-firebase-storage';
```

### Uploading a File

To upload a file to Firebase Storage, use the `uploadFile` method provided by the CapacitorFirebaseStorage object. Here is an example of how to upload a file:

```typescript
const file = // Your file object here

try {
  const result = await CapacitorFirebaseStorage.uploadFile({
    path: 'images/',
    file,
  });
  console.log('File uploaded successfully:', result);
} catch (error) {
  console.error('Error uploading file:', error);
}
```

In the above example, the `path` parameter specifies the directory within Firebase Storage where the file should be uploaded. The `file` parameter should be the file object you want to upload.

### Downloading a File

To download a file from Firebase Storage, use the `downloadFile` method provided by the CapacitorFirebaseStorage object. Here is an example of how to download a file:

```typescript
const fileName = 'example.jpg';

try {
  const result = await CapacitorFirebaseStorage.downloadFile({
    path: `images/${fileName}`,
  });
  console.log('File downloaded successfully:', result);
} catch (error) {
  console.error('Error downloading file:', error);
}
```

In the above example, the `path` parameter specifies the path of the file within Firebase Storage that you want to download.

### Deleting a File

To delete a file from Firebase Storage, use the `deleteFile` method provided by the CapacitorFirebaseStorage object. Here is an example of how to delete a file:

```typescript
const fileName = 'example.jpg';

try {
  await CapacitorFirebaseStorage.deleteFile({
    path: `images/${fileName}`,
  });
  console.log('File deleted successfully');
} catch (error) {
  console.error('Error deleting file:', error);
}
```

In the above example, the `path` parameter specifies the path of the file within Firebase Storage that you want to delete.

## Conclusion

In this tutorial, we learned how to use the @bazumax/capacitor-firebase-storage package to integrate Firebase Storage with Capacitor. We covered the installation process, adding Firebase configuration files, and demonstrated how to upload, download, and delete files from Firebase Storage.

Firebase Storage provides a convenient way to store and retrieve files in the cloud, making it easy to incorporate file storage into your Capacitor projects.