---
title: "Using `pjamm-plugin-fileshare` Package"
description: "In this tutorial, we will learn how to use the `pjamm-plugin-fileshare` package to download files in a PJAMM application."
created_at: "2022-01-30"
published: true
slug: "pjamm-plugin-fileshare"
---

# Using `pjamm-plugin-fileshare` Package

The `pjamm-plugin-fileshare` package is a plugin that allows you to download files in a PJAMM application. It provides a simple API for downloading files from a given URL.

## Installation

To install the `pjamm-plugin-fileshare` package, run the following command in your terminal:

```bash
npm install pjamm-plugin-fileshare
npx cap sync
```

## Usage

Once the package is installed, you can use the `downloadFile` function to download files. The function takes a `DownloadOptions` object as a parameter, which includes the URL of the file to be downloaded and the desired filename for the downloaded file.

```javascript
import { downloadFile } from 'pjamm-plugin-fileshare';

const options = {
  data: 'https://example.com/file.pdf',
  filename: 'example.pdf',
};

downloadFile(options)
  .then(() => {
    console.log('File downloaded successfully!');
  })
  .catch((error) => {
    console.error('Error downloading file:', error);
  });
```

The `downloadFile` function returns a Promise that resolves when the file is downloaded successfully. In case of any errors, the Promise is rejected with an error message.

## API

### `downloadFile(options: DownloadOptions): Promise<any>`

Downloads a file from the specified URL.

**Parameters:**

- `options`: An object that contains the following properties:
  - `data` (string): The URL of the file to be downloaded.
  - `filename` (string): The desired filename for the downloaded file.

**Returns:**

A Promise that resolves when the file is downloaded successfully.

---

### Interfaces

The `DownloadOptions` interface defines the structure of the `options` object passed to the `downloadFile` function.

```typescript
interface DownloadOptions {
  data: string;
  filename: string;
}
```

The `data` property is a string representing the URL of the file to be downloaded, and the `filename` property is a string representing the desired filename for the downloaded file.

That's it! You have now learned how to use the `pjamm-plugin-fileshare` package to download files in a PJAMM application. Happy coding!