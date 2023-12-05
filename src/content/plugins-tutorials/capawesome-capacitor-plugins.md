---
title: "Using @hotend/capacitor-file-picker Package"
description: "Learn how to use the @hotend/capacitor-file-picker package in your Capacitor apps to enable file selection on Android, iOS, and the web."
created_at: "2022-08-10"
published: true
slug: "capawesome-capacitor-plugins"
---

# Using @hotend/capacitor-file-picker Package

The `@hotend/capacitor-file-picker` package is a useful Capacitor plugin that allows you to enable file selection in your Android, iOS, and web apps. In this tutorial, we will walk through the installation process and show you how to use the package to select files in your Capacitor app.

## Installation

To install the `@hotend/capacitor-file-picker` package, run the following command:

```bash
npm install @hotend/capacitor-file-picker
```

## Android Configuration

For Android, you will need to make a few changes to your project's `MainActivity.java` file. Open the file and locate the `init` method. Inside the `init` method, add the following line of code:

```java
add(FileSelector.class);
```

This line registers the `FileSelector` class from the `@hotend/capacitor-file-picker` package. Make sure to import the `FileSelector` class if it's not already imported:

```java
import com.hotend.capacitor.filepicker.FileSelector;
```

## iOS Configuration

No additional configuration is required for iOS.

## Web Configuration

For web, import the `FileSelector` plugin from the `@hotend/capacitor-file-picker` package:

```javascript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
```

Note that you should comment out the `import 'capacitor-file-selector'` line when building the Android or iOS app. This ensures that the correct native implementation is used.

## Selecting Files

The `@hotend/capacitor-file-picker` package supports selecting files of various types and categories. You can specify the allowed file extensions or broad file categories using the `ext` array.

```javascript
// Example to allow selection of images and videos
const ext = ['images', 'videos'];
```

To allow the selection of all file types, you can use the `*` wildcard character:

```javascript
// Example to allow selection of all file types
const ext = ['*'];
```

You can also enable multiple file selection by setting the `multiple_selection` variable to `true`. By default, it is set to `false`.

The selected files are returned as an object with the following properties:

- `paths` - An array of web accessible URLs for the selected files.
- `original_names` - An array of the names of the selected files.
- `extensions` - An array of the file extensions corresponding to the selected files.

You can use this data to process the selected files as per your application's requirements.

## Conclusion

In this tutorial, we have learned how to use the `@hotend/capacitor-file-picker` package in your Capacitor apps to enable file selection on Android, iOS, and the web. We covered the installation process and provided examples of how to configure and use the package to select files. Now you can easily implement file selection functionality in your Capacitor apps.