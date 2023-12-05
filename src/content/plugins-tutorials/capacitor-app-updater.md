---
title: "Using @objekt/capacitor-app-updater Package"
description: "A tutorial on how to use the @objekt/capacitor-app-updater package to update the web contents of an app from a remote content server."
created_at: "2022-09-20"
published: true
slug: "capacitor-app-updater"
---

# Using @objekt/capacitor-app-updater Package

The `@objekt/capacitor-app-updater` package is a Capacitor plugin that allows you to update the web contents of your app from a remote content server. It provides an easy way to sync and update your app's web content with the latest version available on the server.

## Installation

To get started, you need to install the `@objekt/capacitor-app-updater` package. You can do this using npm:

```bash
npm install @objekt/capacitor-app-updater
```

Once the package is installed, you need to sync it with Capacitor. Run the following command:

```bash
npx cap sync
```

## Usage

To use the `@objekt/capacitor-app-updater` package in your app, you need to follow these steps:

1. Import the `AppUpdater` class from the package:

```javascript
import { AppUpdater } from '@objekt/capacitor-app-updater';
```

2. Use the `AppUpdater.sync()` function to update the web contents of your app. This function takes two parameters: `checksumURL` and `checkDelay`.

- `checksumURL`: The URL to your hosted web server that contains the `checksum.json` file.
- `checkDelay` (optional): The time delay in milliseconds before checking for updates again (default is 3600000, which is 1 hour).

Here's an example of how to use the `AppUpdater.sync()` function:

```javascript
const checksumURL = 'https://your-web-server/checksum.json';
const checkDelay = 3600000; // 1 hour

AppUpdater.sync(checksumURL, checkDelay);
```

3. The `AppUpdater.sync()` function performs the following steps:

- Checks if the sync process has already been run recently within the specified time delay.
- Loads the `checksum.json` file from the web server.
- Compares the checksum of the local device web content files with the server checksums.
- If no changes are detected, the sync process terminates.
- If any differences are found, a new bundle is created on the device.
- Downloads the files with differing checksums from the web server.
- Copies the files with the same checksum from the local device web content directory.
- Ensures all files are downloaded successfully.
- Modifies the local Capacitor app config to point to the new release bundle.
- Reloads the app.

That's it! You have successfully used the `@objekt/capacitor-app-updater` package to update the web contents of your app.

## API Reference

For detailed information about the API provided by the `@objekt/capacitor-app-updater` package, please refer to the [official documentation](https://objektlabs.github.io/capacitor-app-updater/modules.html).

Now you can easily keep your app up-to-date with the latest web content from your remote content server using the `@objekt/capacitor-app-updater` package.