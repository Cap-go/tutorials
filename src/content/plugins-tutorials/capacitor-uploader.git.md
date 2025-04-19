---
"title": "Using @capgo/capacitor-uploader Package Tutorial",
"description": "This tutorial will guide you through the process of using the @capgo/capacitor-uploader package to assist with file uploads in your Capacitor app.",
"created_at": "2022-01-27",
"published": true,
"slug": "capacitor-uploader.git"
---

## Using @capgo/capacitor-uploader Package

The `@capgo/capacitor-uploader` package provides functionalities to simplify file uploads in your Capacitor application. Follow the steps below to integrate and utilize this package effectively:

### Installation

To get started, install the `@capgo/capacitor-uploader` package:

```bash
npm install @capgo/capacitor-uploader
npx cap sync
```

### Initialization

Import the `Uploader` class from the package in your project:

```javascript
import { Uploader } from '@capgo/capacitor-uploader';
```

### Upload a File

You can then use the `Uploader.upload(file)` method to upload a file:

```javascript
const file = /* Your File Object */;
Uploader.upload(file)
  .then((response) => {
    // Handle successful upload
    console.log('File uploaded:', response);
  })
  .catch((error) => {
    // Handle upload error
    console.error('Upload failed:', error);
  });
```

### Track Upload Progress

For tracking the upload progress, use the following method:

```javascript
Uploader.addProgressListener((progress) => {
  console.log(`Upload Progress: ${progress}%`);
});
```

### Additional Features

The `@capgo/capacitor-uploader` package provides additional features, such as managing uploads, handling errors, and more. Refer to the package documentation for detailed information.

By following these steps, you can efficiently utilize the `@capgo/capacitor-uploader` package to enhance file upload functionalities within your Capacitor app.