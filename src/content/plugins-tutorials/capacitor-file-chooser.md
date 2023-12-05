---
title: "Using capacitor-file-chooser package"
description: "A tutorial on how to use the capacitor-file-chooser package to select files in Capacitor apps."
created_at: "2022-10-28"
published: true
slug: "capacitor-file-chooser"
---

# Using capacitor-file-chooser package

The capacitor-file-chooser package is a powerful tool that allows you to select files in Capacitor apps. In this tutorial, we will walk through the installation process and how to configure the package for different platforms. We will also explore the supported file extensions and how to handle the selected files.

## Installation

To use the capacitor-file-chooser package, you need to install it in your Capacitor project. Open your terminal and run the following command:

```shell
npm install capacitor-file-chooser
```

## Android Configuration

For Android, you will need to make some additional configurations. Open the `MainActivity.java` file in your Android project and add the following code inside the `init()` method:

```java
add(FileSelector.class);
```

If you encounter any errors, make sure to manually add both the above lines to `MainActivity.java`.

## iOS Configuration

For iOS, there are no additional configurations required. You can proceed to the next step.

## Web Configuration

When using the capacitor-file-chooser package in a web or PWA project, you need to import the package and register the web implementation. 

```javascript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
import 'capacitor-file-chooser'; // Comment out this line when building Android/iOS app
```

Note: When building the app for Android or iOS, make sure to comment out the line `import 'capacitor-file-chooser'` to avoid using the web implementation in native apps.

## Selecting Files

To select files using the capacitor-file-chooser package, you have the option to allow all file types or specify supported extensions. You can also enable multiple file selection if needed.

Supported Extensions: All extensions are supported. Please refer to the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for a comprehensive list of common file extensions.

Supported Broad Categories: "images", "videos", and "audios".

To allow the selection of all file types, use the asterisk symbol (\*). If you want to restrict the selection to specific file types, use the `ext` array and list out the permitted extensions or broader file categories. Remember that the extensions are case-sensitive, so make sure to convert them to lowercase if needed.

```javascript
ext = ext.map(v => v.toLowerCase());
```

The data returned by the file picker contains the following:

1. "paths" - an array of web accessible URL(s) for the selected files.
2. "original_names" - an array of the name(s) of the selected files.
3. "extensions" - an array of extension(s) corresponding to the selected files.

You can combine the "original_names" and "extensions" to rebuild the original file names.

## Conclusion

In this tutorial, we have explored how to use the capacitor-file-chooser package to select files in Capacitor apps. We have covered the installation process, platform-specific configurations, supported file extensions, and handling the selected files. With this knowledge, you can enhance your Capacitor app with file selection functionality.

For more information and usage examples, please refer to the official [GitHub repository](https://github.com/bkon/capacitor-file-chooser) of capacitor-file-chooser.

Remember to refer to the package documentation and official resources for the most up-to-date information.