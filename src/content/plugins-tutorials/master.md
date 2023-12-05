---
title: "Using @bdxi/beldex-capacitor-file-picker package"
description: "This tutorial will guide you on how to use the @bdxi/beldex-capacitor-file-picker package to select files in your Capacitor apps."
created_at: "2021-10-05"
published: true
slug: "master"
---

# Using @bdxi/beldex-capacitor-file-picker package

The @bdxi/beldex-capacitor-file-picker package provides a convenient way to select files in Capacitor apps for Android, iOS, and the web. This tutorial will guide you through the process of installing and using the package in your app.

## Installation

To start using the @bdxi/beldex-capacitor-file-picker package, first install it using npm:

```bash
npm install @bdxi/beldex-capacitor-file-picker
```

## Android Configuration

To use the file picker in Android, you need to make some changes to the MainActivity.java file in your Capacitor app. Open the `MainActivity.java` file and add the following code inside the `init()` method:

```java
import com.bkon.capacitor.fileselector.FileSelector;

// ...

public void init(Bundle savedInstanceState) {
  // ...
  add(FileSelector.class);
  // ...
}
```

If you encounter errors, make sure to manually add the import statement for `FileSelector`.

## iOS Configuration

For iOS, no additional configuration is required. The file picker will work out of the box.

## Web Configuration

When using the file picker in a web/PWA app, you need to import the necessary modules:

```javascript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
```

Make sure to comment out the import statement for `capacitor-file-selector` when building the Android or iOS app, as it is only needed for the web implementation.

## Selecting Files

To select files using the @bdxi/beldex-capacitor-file-picker package, you can specify the supported file extensions or broader file categories. The supported extensions can be found in the documentation links provided.

To allow the selection of all file types, use `*`.

To enable the selection of multiple files, set the `multiple_selection` variable to `true`.

Example usage:

```javascript
const result = await FileSelector.selectFiles({
  ext: ['images', 'videos', 'audios'], // Specify desired extensions or broader file categories
  multiple_selection: true, // Enable multiple file selection
});

const paths = result.paths; // Array of web accessible URLs
const originalNames = result.original_names; // Array of file names
const extensions = result.extensions; // Array of file extensions
```

You can combine the `original_names` and `extensions` arrays to rebuild the original file names if needed.

## Conclusion

In this tutorial, you have learned how to install and use the @bdxi/beldex-capacitor-file-picker package to select files in your Capacitor apps. You have also seen how to configure the package for Android, iOS, and web platforms, as well as how to specify supported file extensions or categories and handle the selected files.

Now you can enhance your Capacitor app by integrating the file picker functionality provided by this package. Happy coding!