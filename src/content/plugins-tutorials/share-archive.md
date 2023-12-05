---
title: "Using @enertrag/zip Package"
description: "A tutorial on how to use the @enertrag/zip package for zipping and unzipping files."
created_at: "2021-10-01"
published: true
slug: "share-archive"
---

# Using @enertrag/zip Package

This tutorial will guide you on how to use the @enertrag/zip package for zipping and unzipping files natively in your project.

## Installation

To begin using the @enertrag/zip package, you need to install it first. Open your terminal and run the following command:

```bash
npm install @enertrag/zip
```

## Import the Package

Once the package is installed, you can import it in your JavaScript or TypeScript file:

```javascript
import Zip from '@enertrag/zip';
```

## Zip Files

To zip files using the @enertrag/zip package, follow these steps:

1. Create an instance of the Zip class:

```javascript
const zip = new Zip();
```

2. Specify the source and destination paths for the files to be zipped:

```javascript
const source = '/path/to/files';
const destination = '/path/to/zip/file.zip';
```

3. Call the `zip` method and pass the source and destination paths as arguments:

```javascript
zip.zip(source, destination);
```

That's it! The files in the specified source directory will be zipped and saved to the destination path.

## Unzip Files

To unzip files using the @enertrag/zip package, follow these steps:

1. Create an instance of the Zip class:

```javascript
const zip = new Zip();
```

2. Specify the source and destination paths for the zip file and the directory to extract to:

```javascript
const source = '/path/to/zip/file.zip';
const destination = '/path/to/extract/files';
```

3. Call the `unzip` method and pass the source and destination paths as arguments:

```javascript
zip.unzip(source, destination);
```

The zip file will be extracted to the specified destination directory.

## Conclusion

In this tutorial, you learned how to use the @enertrag/zip package to zip and unzip files in your project. You explored the steps involved in zipping files and extracting files from a zip file. Now you can efficiently work with zipped archives in your application.

Remember to check the official documentation of the @enertrag/zip package for additional options and features. Happy zipping and unzipping!