---
title: "Using @capgo/capacitor-downloader Package Tutorial"
description: "A step-by-step guide on how to utilize the @capgo/capacitor-downloader package for downloading files in Capacitor applications."
created_at: 2022-01-15
published: true
slug: capacitor-downloader-git
locale: en
---

# Using @capgo/capacitor-downloader Package

The @capgo/capacitor-downloader package provides a straightforward way to download files in Capacitor applications. Follow the steps below to integrate and utilize this package effectively.

## Installation

```bash
npm install @capgo/capacitor-downloader
npx cap sync
```

## Usage

1. Import the package in your code:

```javascript
import { CapacitorDownloader } from '@capgo/capacitor-downloader';
```

2. Use the package to download files:

```javascript
const downloadUrl = 'https://www.example.com/file.pdf';

try {
  await CapacitorDownloader.download({
    url: downloadUrl,
    fileName: 'myFile.pdf', // Specify the desired name for the downloaded file
    directory: 'downloads', // Choose the directory where the file will be saved
  });
  console.log('Download successful!');
} catch (error) {
  console.error('Download failed:', error);
}
```

3. Handle download progress:

```javascript
CapacitorDownloader.addListener('progress', (progress) => {
  console.log(`Download progress: ${progress.percent}%`);
});

```

4. Remove the progress listener when no longer needed:

```javascript
CapacitorDownloader.removeAllListeners();
```

By following these steps, you can effectively use the @capgo/capacitor-downloader package to download files in your Capacitor applications.
