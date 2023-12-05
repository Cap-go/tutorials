# Using Capacitor Native Downloader

## Overview

In this tutorial, we will learn how to use the `capacitor-native-downloader` package to handle the downloading of files in a Capacitor app.

## Prerequisites

Before we begin, make sure you have the following installed:

- [Capacitor](https://capacitorjs.com/docs/getting-started#install-the-cli)
- [capacitor-native-downloader](https://www.npmjs.com/package/capacitor-native-downloader)

## Step 1: Install the Capacitor Native Downloader Plugin

To install the `capacitor-native-downloader` plugin, open a terminal and run the following command:

```bash
npm install capacitor-native-downloader
```

## Step 2: Configure the Capacitor Native Downloader Plugin

Next, we need to configure the plugin to work with our Capacitor app. Open the `capacitor.config.json` file and add the following entry under the `plugins` section:

```json
"capacitor-native-downloader": {
  "appId": "YOUR_APP_PACKAGE_ID"
}
```

Replace `YOUR_APP_PACKAGE_ID` with the package ID of your Capacitor app.

## Step 3: Import the Capacitor Native Downloader Plugin

In the file where you want to use the `capacitor-native-downloader` plugin, import it as follows:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorNativeDownloader } = Plugins;
```

## Step 4: Download a File

To download a file using `capacitor-native-downloader`, you can use the `downloadFile()` method. Here's an example of how to download a file:

```javascript
const downloadFile = async () => {
  const url = 'https://example.com/file.pdf';
	
  try {
    await CapacitorNativeDownloader.downloadFile({ url });
    console.log('File downloaded successfully');
  } catch (error) {
    console.error('Error downloading file', error);
  }
};

downloadFile();
```

Make sure to replace the `url` with the actual URL of the file you want to download.

## Step 5: Handle Download Events

The `downloadFile()` method returns an observable that emits progress events during the download. You can use this to display progress to the user or perform actions based on the download progress. Here's an example:

```javascript
const downloadFile = async () => {
  const url = 'https://example.com/file.pdf';
	
  const subscription = CapacitorNativeDownloader.downloadFile({ url }).subscribe(
    ({ value }) => {
      const { progress } = value;
      console.log(`Download progress: ${progress}%`);
    },
    (error) => {
      console.error('Error downloading file', error);
    },
    () => {
      console.log('File downloaded successfully');
      subscription.unsubscribe();
    }
  );
};

downloadFile();
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-native-downloader` package to download files in a Capacitor app. We installed the plugin, configured it, and demonstrated how to download a file and handle download events.

Make sure to refer to the official documentation of `capacitor-native-downloader` for more information about its capabilities and options.

---

title: "Using Capacitor Native Downloader"
description: "Learn how to use the `capacitor-native-downloader` package to handle file downloads in a Capacitor app."
created_at: "2021-10-15"
published: true
slug: "capacitor-native-downloader"
---