---
title: "Using @elvis-ibrahimi/capacitor-zip-ios Package"
description: "A tutorial on how to use the @elvis-ibrahimi/capacitor-zip-ios package for zipping and unzipping files in iOS using Capacitor."
created_at: "2022-02-01"
published: true
slug: "capacitor-zip-ios"
---

# Using @elvis-ibrahimi/capacitor-zip-ios Package

The `@elvis-ibrahimi/capacitor-zip-ios` package is a Capacitor plugin that allows you to zip and unzip files in iOS. It provides a simple and convenient way to compress and decompress files, making it easier to manage and transfer large amounts of data.

In this tutorial, we will guide you through the installation process and demonstrate how to use the `zip()` and `unZip()` methods provided by the `Zip` class.

## Prerequisites

Before getting started, make sure you have the following:

- Node.js installed on your machine
- Capacitor project set up with iOS platform added
- Basic understanding of JavaScript and TypeScript

## Installation

To install the `@elvis-ibrahimi/capacitor-zip-ios` package, run the following command:

```shell
npm i @elvis-ibrahimi/capacitor-zip-ios
```

## Usage

### Importing the `Zip` class

First, import the `Zip` class from the `@elvis-ibrahimi/capacitor-zip-ios` package:

```typescript
import { Zip } from '@elvis-ibrahimi/capacitor-zip-ios';
```

### Creating an instance of `Zip`

Next, create an instance of the `Zip` class:

```typescript
const zip = new Zip();
```

### Zipping files

To zip files, use the `zip()` method of the `Zip` class. The `zip()` method accepts an options object with the following properties:

- `source` (required): The path of the source directory or file to be zipped.
- `destination` (required): The path where the zipped file will be saved.
- `keepParent` (optional, default: `true`): Whether to keep the parent directory structure in the zipped file.
- `password` (optional): The password to encrypt the zipped file.

Here's an example of how to zip files:

```typescript
await zip.zip({
    source: '/path/to/source',
    destination: '/path/to/destination.zip',
    keepParent: true,
    password: 'password',
}, (progress) => {
    // Progress callback function
});
```

### Unzipping files

To unzip files, use the `unZip()` method of the `Zip` class. The `unZip()` method accepts an options object with the following properties:

- `source` (required): The path of the zipped file to be extracted.
- `destination` (required): The path where the extracted files will be saved.
- `overwrite` (optional, default: `true`): Whether to overwrite existing files during extraction.
- `password` (optional): The password to decrypt the zipped file.

Here's an example of how to unzip files:

```typescript
await zip.unZip({
    source: '/path/to/source.zip',
    destination: '/path/to/destination',
    overwrite: true,
    password: 'password',
}, (progress) => {
    // Progress callback function
});
```

## Conclusion

In this tutorial, we have learned how to use the `@elvis-ibrahimi/capacitor-zip-ios` package to zip and unzip files in iOS using Capacitor. We have covered the installation process and demonstrated the usage of the `zip()` and `unZip()` methods.

By leveraging the capabilities of this package, you can easily manage and transfer large amounts of data in your iOS applications. Happy coding!

**Note:** This tutorial only covers the usage of the `@elvis-ibrahimi/capacitor-zip-ios` package in iOS. Please refer to the package documentation for Android-specific instructions and additional functionality.

For more information and advanced usage, please refer to the official documentation and examples of the `@elvis-ibrahimi/capacitor-zip-ios` package.

## License

The `@elvis-ibrahimi/capacitor-zip-ios` package is licensed under the MIT License.

## Contributors

Special thanks to the contributors of the `@elvis-ibrahimi/capacitor-zip-ios` package for their valuable contributions to the project.