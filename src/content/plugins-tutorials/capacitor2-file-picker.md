---
title: "Using capacitor2-file-picker"
description: "A tutorial on how to use the capacitor2-file-picker package to select files in Capacitor 2"
created_at: "2021-09-20"
published: true
slug: "capacitor2-file-picker"
---

# Using capacitor2-file-picker

In this tutorial, we will learn how to use the capacitor2-file-picker package to select files in Capacitor 2.

## Installation

To begin, we need to install the capacitor2-file-picker package. Open your terminal and run the following command:

```shell
npm install capacitor2-file-picker
```

## Android Configuration

Next, we need to configure the package for Android. Open your MainActivity.java file and add the following code inside the `init()` method:

```java
add(FileSelector.class);
```

Make sure to also import the FileSelector class:

```java
import com.bkon.capacitor.fileselector.FileSelector;
```

If you encounter any errors, you can manually add both the lines to MainActivity.java.

## iOS Configuration

For iOS, no additional configuration is required. The capacitor2-file-picker package will work out of the box on iOS devices.

## Web Configuration

To use capacitor2-file-picker in a web application, you need to import the necessary plugins from `@capacitor/core` and the capacitor2-file-picker package. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
```

Note that when building the app for Android or iOS, you should comment out the import statement of capacitor2-file-picker. This is to ensure that the native implementation of the plugin is used instead of the web implementation.

## Selecting Files

To select files using capacitor2-file-picker, you can specify the extensions or broader categories of the files you want to allow. Here's an example of how to allow the selection of all file types:

```javascript
const options = {
  ext: ['*'],
  multiple_selection: false,
};

FileSelector.selectFiles(options)
  .then(result => {
    // Handle selected files
    const paths = result.paths;
    const fileNames = result.original_names;
    const extensions = result.extensions;
    // Process the selected files
  })
  .catch(error => {
    // Handle errors
  });
```

In the above example, the `ext` array is set to allow all file types. The `multiple_selection` option is set to false to allow selecting only one file. You can customize these options based on your requirements.

The `selectFiles` function returns a promise that resolves with an object containing the selected file paths, original file names, and extensions.

## Conclusion

Congratulations! You have learned how to use the capacitor2-file-picker package to select files in Capacitor 2. With this package, you can easily enable file selection functionality in your Capacitor app for Android, iOS, and the web.

Remember to check the documentation for the supported file extensions and make sure to configure the package accordingly for different platforms. Happy coding!