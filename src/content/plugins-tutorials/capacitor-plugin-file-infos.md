---
title: "Using capacitor-plugin-file-infos Package"
description: "A tutorial on how to use the capacitor-plugin-file-infos package to get file information from an URI in Capacitor."
created_at: "2022-10-20"
published: true
slug: capacitor-plugin-file-infos
---

# Using capacitor-plugin-file-infos Package

In this tutorial, we will learn how to use the capacitor-plugin-file-infos package to get file information from a URI in Capacitor.

## Installation

To get started, we need to install the `capacitor-plugin-file-infos` package. Open your terminal and run the following command:

```bash
npm i --save capacitor-plugin-file-infos
npx cap update
```

## Usage

Once the package is installed, we can start using it in our Capacitor project.

### Importing the Plugin

To use the capacitor-plugin-file-infos package, we first need to import it. Open the file where you want to use the package and add the following import statement:

```typescript
import { FileInfosPlugin } from 'capacitor-plugin-file-infos';
```

### Getting File Information

To get file information from a URI, we can use the `getFileInfos()` method provided by the `FileInfosPlugin`.

```typescript
const fileUri = 'file:///path/to/file.txt';

try {
  const fileInfos = await FileInfosPlugin.getFileInfos({ uri: fileUri });
  console.log('File Name:', fileInfos.name);
  console.log('File Size:', fileInfos.size);
} catch (error) {
  console.error('Error:', error);
}
```

Make sure to replace `'file:///path/to/file.txt'` with the actual URI of the file you want to get information from.

The `getFileInfos()` method returns an object with `name` and `size` properties representing the file's name and size. We can access these properties to display or process the file information as needed.

### Error Handling

If there is an error while retrieving file information, the `getFileInfos()` method will throw an error. We can catch the error using a try-catch block and handle it accordingly.

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-file-infos package to get file information from a URI in Capacitor. We saw how to install the package, import it into our project, and retrieve file information using the provided methods. Now you can easily get file names and sizes from URIs in your Capacitor applications.