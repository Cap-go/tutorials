---
title: "Using peis-ziphelp Package"
description: "This tutorial explains how to use the peis-ziphelp package for zip operations."
created_at: "2022-01-31"
published: true
slug: "peis-capacitor-zipp"
---

# Using peis-ziphelp Package

The peis-ziphelp package provides a set of API methods for performing zip operations in your Capacitor app. In this tutorial, we will explore how to use this package to perform zip operations.

## Installation

To install the peis-ziphelp package, run the following command:

```bash
npm install peis-ziphelp
npx cap sync
```

## API Documentation

The peis-ziphelp package provides the following API methods:

### echo

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

This method echoes back the provided value. It takes an options object with a `value` property and returns a Promise with the echoed value.

### unZip

```typescript
unZip(options: UnzipOptions) => Promise<UnzipResult>
```

This method performs a file unzipping operation. It takes an options object with the following properties:
- `source`: The source file path.
- `destination`: The destination path where the unzipped files will be stored.
- `password` (optional): The password to decrypt the zip file.

The `unZip` method returns a Promise with the result of the unzipping operation, which includes a `message` and `uri` property.

## Example Usage

Here is an example usage of the peis-ziphelp package:

```typescript
import { Plugins } from '@capacitor/core';
import { UnzipOptions, UnzipResult } from 'peis-ziphelp';

const { peisZipHelp } = Plugins;

async function unzipFile(): Promise<void> {
  const options: UnzipOptions = {
    source: '/path/to/zip/file.zip',
    destination: '/path/to/unzip/files/',
    password: 'password123',
  };

  try {
    const unzippedResult: UnzipResult = await peisZipHelp.unZip(options);
    console.log('Unzip Result:', unzippedResult);
  } catch (error) {
    console.error('Unzip Error:', error);
  }
}

unzipFile();
```

In the above code, we import the necessary plugins from '@capacitor/core' and 'peis-ziphelp'. We define an async function `unzipFile` where we set the `source`, `destination`, and `password` options for the `unZip` method. We then call the `unZip` method using the `peisZipHelp` plugin and handle the result or error accordingly.

That's it! You have successfully learned how to use the peis-ziphelp package for zip operations in your Capacitor app.

Happy coding!