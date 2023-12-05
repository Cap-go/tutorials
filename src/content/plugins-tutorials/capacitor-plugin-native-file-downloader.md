---
title: "Using @eoscz/capacitor-plugin-native-file-downloader"
description: "A tutorial on how to use the @eoscz/capacitor-plugin-native-file-downloader package for file downloading in Capacitor."
created_at: "2022-10-20"
published: true
slug: "capacitor-plugin-native-file-downloader"
---

# Using @eoscz/capacitor-plugin-native-file-downloader

In this tutorial, we will learn how to use the @eoscz/capacitor-plugin-native-file-downloader package to download files in a Capacitor app. The @eoscz/capacitor-plugin-native-file-downloader package is a native plugin that provides file downloading functionality for both Android and iOS platforms.

## Installation

To get started, first, install the package using npm:

```shell
npm install @eoscz/capacitor-plugin-native-file-downloader
```

Next, sync the Capacitor project to ensure the plugin is correctly added to the native platforms:

```shell
npx cap sync
```

## Configuration

### Android Configuration

For Android, no additional configuration is required. The plugin will be automatically registered in the main `MainActivity.java` file.

### iOS Configuration

For iOS, no additional configuration is required. The plugin will be automatically registered in the Capacitor project.

## Usage

To use the @eoscz/capacitor-plugin-native-file-downloader to download a file, follow these steps:

1. Import the plugin and the necessary Capacitor core plugins in your file:

```javascript
import 'capacitor';
import '@eoscz/capacitor-plugin-native-file-downloader';
import { Plugins } from '@capacitor/core';

const { FileDownloader } = Plugins;
```

2. Call the plugin's `download` method with the file URL and desired filename:

```javascript
FileDownloader.download({
  url: 'https://example.com/file.pdf',
  filename: 'downloaded_file.pdf'
}).then((result) => {
  console.log('File downloaded at: ', result.path);
}).catch((error) => {
  console.error('Error downloading file: ', error);
});
```

In the above example, the `download` method is called with the URL of the file to be downloaded and the desired filename for the downloaded file. The method returns a promise that resolves with the file's path on success or rejects with an error message on failure.

## Conclusion

In this tutorial, we have learned how to use the @eoscz/capacitor-plugin-native-file-downloader package to download files in a Capacitor app. This plugin provides a simple and convenient way to download files natively in both Android and iOS platforms. Feel free to explore the plugin's documentation for more advanced usage and configuration options.

If you have any questions or run into any issues, please refer to the plugin's official documentation or open an issue on the plugin's GitHub repository.

Happy file downloading with Capacitor!