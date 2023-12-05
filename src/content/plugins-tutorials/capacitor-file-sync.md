---
title: "Using @logseq/capacitor-file-sync Package"
description: "A tutorial on how to use the @logseq/capacitor-file-sync package for syncing files in Logseq."
created_at: "2022-01-01"
published: true
slug: "capacitor-file-sync"
---

# Using @logseq/capacitor-file-sync Package

In this tutorial, we will learn how to use the @logseq/capacitor-file-sync package to sync files in Logseq. The package provides various APIs that allow you to perform file-syncing operations in your Logseq mobile app.

## Installation

To get started, you need to install the @logseq/capacitor-file-sync package in your Logseq project. Open your terminal and run the following command:

```bash
npm install @logseq/capacitor-file-sync
```

Once the installation is complete, you can sync the Capacitor plugins by running the following command:

```bash
npx cap sync
```

## API Documentation

The @logseq/capacitor-file-sync package provides several APIs that you can use to perform file-syncing operations. Here are some of the key APIs:

### keygen()

This API generates a secret key and a public key that can be used for encryption and decryption operations. It returns a Promise that resolves to an object containing the secretKey and publicKey.

### setEnv(options)

This API sets the environment variables for the file-syncing process. It takes an options object as a parameter, which should include the graphUUID, env, secretKey, and publicKey values.

### encryptFnames(options)

This API encrypts the file names of the specified files. It takes an options object as a parameter, which should include the graphUUID and filePaths values. It returns a Promise that resolves to an object containing the encrypted file names.

### decryptFnames(options)

This API decrypts the file names of the specified files. It takes an options object as a parameter, which should include the graphUUID and filePaths values. It returns a Promise that resolves to an object containing the decrypted file names.

### getLocalFilesMeta(options)

This API retrieves the metadata of the specified files stored locally. It takes an options object as a parameter, which should include the graphUUID, basePath, and filePaths values. It returns a Promise that resolves to an array of file metadata.

...

For more detailed information about each API and its usage, please refer to the [full API documentation](https://link-to-api-docs).

That's it! You now have a basic understanding of how to use the @logseq/capacitor-file-sync package for syncing files in Logseq. Feel free to explore the various APIs provided by the package and incorporate them into your Logseq mobile app as needed.

Remember to refer to the official documentation for any additional information or updates on the package's usage.

Happy coding!