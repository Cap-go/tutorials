```markdown
---
"title": "Using @capgo/capacitor-uploader Package"
"description": "Learn how to use the @capgo/capacitor-uploader package to handle file uploads in a Capacitor application."
"created_at": "2022-03-20"
"published": true
"slug": "capacitor-uploader-git"
---

# Using @capgo/capacitor-uploader Package

In this tutorial, you will learn how to integrate and utilize the @capgo/capacitor-uploader package in your Capacitor application for handling file uploads.

## Installation

First, install the @capgo/capacitor-uploader package using npm:

```bash
npm install @capgo/capacitor-uploader
npx cap sync
```

## Usage

1. Import the CapacitorUploader package in your code:

```javascript
import { CapacitorUploader } from '@capgo/capacitor-uploader';
```

2. Use the `CapacitorUploader.upload` method to upload a file. Here is an example:

```javascript
const file = ...
const options = ...

const uploadResult = await CapacitorUploader.upload({
  file,
  options
});

// Handle the upload result here
```

3. You can also listen to progress events during the upload process:

```javascript
CapacitorUploader.addListener('uploadProgress', (progressEvent) => {
  console.log('Upload Progress: ' + progressEvent.percent); 
});
```

4. Additionally, you can cancel an ongoing upload using the following method:

```javascript
CapacitorUploader.cancelUpload();
```

By following these steps, you can effectively utilize the @capgo/capacitor-uploader package in your Capacitor application for seamless file upload functionality.

```

```