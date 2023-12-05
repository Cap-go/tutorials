---
title: "Using capacitor-file-selector Package"
description: "A tutorial on how to use the capacitor-file-selector package to select files in Capacitor apps."
created_at: "2021-09-15"
published: true
slug: "capacitor-file-selector"
---

# Using capacitor-file-selector Package

The **capacitor-file-selector** package is a plugin that allows you to select files in Capacitor apps for Android, iOS, and web platforms. It provides a simple and convenient way to enable file selection in your Capacitor project.

## Installation

First, you need to install the **capacitor-file-selector** package using npm:

```shell
npm install capacitor-file-selector
```

## Android Configuration

To configure the plugin for Android, open the `MainActivity.java` file in your Android project and add the following code inside the `init()` method:

```java
add(FileSelector.class);
```

If you encounter any errors, manually add the following import statement to the `MainActivity.java` file:

```java
import com.bkon.capacitor.fileselector.FileSelector;
```

For a list of supported file extensions, you can visit the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) documentation.

## iOS Configuration

To configure the plugin for iOS, no additional steps are required. However, if you want to see a list of supported file extensions, you can refer to the [Apple Developer Documentation](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html).

## Web Configuration

To configure the plugin for web, import the necessary modules and define the `FileSelector` object:

```typescript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
// import ‘capacitor-file-selector’ // Comment out this line when building android/iOS app
```

Note: When building the app for Android/iOS, make sure to comment out the `import ‘capacitor-file-selector’` line. This line is only required for web implementation.

## Selecting Files

The **capacitor-file-selector** plugin supports a wide range of file extensions. To allow the selection of all file types, you can use the "*" wildcard. If you want to restrict the selection to specific file types or categories (e.g., images, videos, audios), you can use the `ext` array. Remember that the `ext` array is case-sensitive, so make sure to provide lowercase values or convert them using TypeScript's `map` function.

Here's an example of how to use the **capacitor-file-selector** plugin to select files:

```typescript
const options = {
  ext: ['jpg', 'png', 'pdf'],
  multiple_selection: true,
};

const selectedFiles = await FileSelector.selectFiles(options);
console.log(selectedFiles.paths); // Array of web accessible URLs
console.log(selectedFiles.original_names); // Array of file names
console.log(selectedFiles.extensions); // Array of file extensions
```

With the `selectedFiles` object, you can access the selected file paths, original file names, and file extensions. This data can be used to perform further operations, such as uploading the selected files to a server.

That's it! You have successfully learned how to use the capacitor-file-selector package to select files in Capacitor apps. Enjoy building your Capacitor project with file selection capabilities!