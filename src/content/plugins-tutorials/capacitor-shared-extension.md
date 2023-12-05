---
title: "Using capacitor-shared-extension package"
description: "A tutorial on how to use the capacitor-shared-extension package"
created_at: "2022-01-20"
published: true
slug: "capacitor-shared-extension"
---

# Using capacitor-shared-extension package

In this tutorial, we will learn how to use the capacitor-shared-extension package to extend the functionality of our Capacitor apps.

## Installation

To use the capacitor-shared-extension package, you need to install it in your Capacitor project. Open your project directory in a terminal and run the following command:

```bash
npm install capacitor-shared-extension
```

## Importing and Initializing

Once the package is installed, you can import it into your code and initialize it within your app.

```typescript
import { SharedExtension } from 'capacitor-shared-extension';

// Inside your initialization code or when needed
const sharedExtension = new SharedExtension();

sharedExtension.initialize();
```

## Sharing Data

The capacitor-shared-extension package provides methods for sharing data between your Capacitor app and other apps or services installed on the user's device.

### Share Text

To share text data, you can use the `shareText` method. Here's an example of how to share a message:

```typescript
const message = "Check out this amazing app!";
sharedExtension.shareText(message)
  .then(() => {
    console.log('Text shared successfully.');
  })
  .catch((error) => {
    console.error('Failed to share text:', error);
  });
```

### Share File

You can also share files using the `shareFile` method. Make sure the file exists on the device before sharing it. Here's an example:

```typescript
const fileUrl = 'path/to/file.jpg';
const mimeType = 'image/jpeg';
const title = 'My Image';

sharedExtension.shareFile(fileUrl, mimeType, title)
  .then(() => {
    console.log('File shared successfully.');
  })
  .catch((error) => {
    console.error('Failed to share file:', error);
  });
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-shared-extension package to extend the sharing capabilities of our Capacitor apps. We covered the installation, import, initialization, and sharing of text and files. Now you can enhance your app by allowing users to easily share content with other apps or services on their devices.