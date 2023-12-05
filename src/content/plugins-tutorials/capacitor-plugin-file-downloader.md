---
title: "Using capacitor-plugin-file-downloader"
description: "A tutorial on how to use the capacitor-plugin-file-downloader package to download files in Capacitor."
created_at: "2021-10-27"
published: true
slug: "capacitor-plugin-file-downloader"
---

# Using capacitor-plugin-file-downloader

In this tutorial, we will learn how to use the `capacitor-plugin-file-downloader` package to download files in Capacitor. The `capacitor-plugin-file-downloader` is a simple native plugin that supports file downloads on Android and iOS.

## Installation

To get started, we need to install the `capacitor-plugin-file-downloader` package and sync the Capacitor project.

```bash
npm install capacitor-plugin-file-downloader
ionic capacitor sync
```

## Configuration

### Android

For Android, we need to make changes to the `MainActivity.java` file located in the `android/src/main/java/.../activities` directory of your Capacitor project.

Open the `MainActivity.java` file and add the import statement for `FileDownloader`:

```java
import com.veluxa.plugins.FileDownloader;
```

Inside the `MainActivity` class, add the `FileDownloader` class to the list of plugins:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(FileDownloader.class);
}});
```

### iOS

No additional configuration is required for iOS.

## Usage

To download a file using `capacitor-plugin-file-downloader`, follow these steps:

1. Import the plugin and `Plugins` from `@capacitor/core`:

```typescript
import 'capacitor-plugin-file-downloader';
import { Plugins } from '@capacitor/core';
const { FileDownloader } = Plugins;
```

2. Call the `download` method of `FileDownloader`:

```typescript
FileDownloader.download({
    url: fileUrl, // The download URL
    filename: filename // The name of the file with extension
}).then(doc => {
    console.log(doc.path); // File download success
}).catch(e => {
    console.error(e); // File download error
});
```

Replace `fileUrl` with the actual download URL and `filename` with the desired name of the downloaded file.

That's it! You have successfully used the `capacitor-plugin-file-downloader` package to download files in Capacitor.