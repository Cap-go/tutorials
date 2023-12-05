---
title: "Using the Capacitor Plugin Filechooser"
description: "A step-by-step tutorial on how to use the capacitor-plugin-filechooser package to select files in Capacitor apps."
created_at: "2022-01-15"
published: true
slug: "capacitor-plugin-filechooser"
---

# Using the Capacitor Plugin Filechooser

In this tutorial, we will learn how to use the **capacitor-plugin-filechooser** package to select files in Capacitor apps. This plugin allows you to conditionally select files from Android/iOS devices and the web. It supports multiple platforms and file types, making it a versatile tool for file selection in Capacitor apps.

## Installation

To begin, you need to install the **capacitor-plugin-filechooser** package in your Capacitor project. Open your terminal and run the following command:

```shell
npm install capacitor-plugin-filechooser
```

## Android Configuration

For Android devices, you need to make some specific configurations. Open the `MainActivity.java` file in your Android project and add the following code inside the `init()` method:

```java
add(FileSelector.class);
```

Make sure to import the required class by adding the following import statement:

```java
import com.bkon.capacitor.fileselector.FileSelector;
```

If any errors occur, manually add both the lines mentioned above to your `MainActivity.java` file.

## iOS Configuration

Similar to Android, there are specific configurations for iOS devices. Please refer to the documentation provided by Apple to view the supported file extensions.

## Web Configuration

For web-based Capacitor apps, you need to make some additional configurations. Import the required module and initialize the `FileSelector` plugin. However, make sure to comment out the import statement when building the app for Android/iOS platforms.

```javascript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
```

**SPECIAL NOTE:** Remember to comment out `import 'capacitor-file-selector'` when building the app for Android/iOS. This import statement registers the web implementation of the plugin, and it should only be used for web-based apps.

## File Selection

Once you have completed the installation and configuration steps, you can start using the **capacitor-plugin-filechooser** package to select files in your Capacitor app. The plugin supports a wide range of file types, including images, videos, and audios.

To allow the selection of all file types, you can use the asterisk symbol `*`. If you want to restrict the file types, you can define the permitted extensions using the `ext` array.

Here's an example code snippet that demonstrates how to select files using the plugin:

```typescript
// Import the FileSelector plugin
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;

// Define the allowed file extensions or categories
const ext = ['jpg', 'png', 'mp4'];

// Enable multiple file selection
const multipleSelection = true;

// Call the FileSelector plugin to select files
const fileSelection = await FileSelector.selectFiles({
  ext,
  multipleSelection,
});

// Access the selected files
const filePaths = fileSelection.paths;
const originalNames = fileSelection.original_names;
const extensions = fileSelection.extensions;

// Perform further operations with the selected files
// ...
```

The `filePaths` array contains the web-accessible URLs of the selected files. The `originalNames` array contains the names of the selected files, and the `extensions` array contains the corresponding file extensions.

You can use these arrays to retrieve the selected files and perform operations like uploading them to a server.

## Conclusion

In this tutorial, we have learned how to use the **capacitor-plugin-filechooser** package to enable file selection in Capacitor apps. We covered the installation, platform-specific configurations, and file selection process. With this plugin, you can empower your Capacitor app with file selection functionality across multiple platforms.

If you have any further questions or need additional assistance, please refer to the official documentation of the **capacitor-plugin-filechooser** package.