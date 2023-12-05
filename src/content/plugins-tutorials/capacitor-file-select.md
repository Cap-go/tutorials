---
title: "Using @de-dan/capacitor-file-select Package"
description: "A tutorial on how to use the @de-dan/capacitor-file-select package to select files in Capacitor apps."
created_at: "2021-09-28"
published: true
slug: "capacitor-file-select"
---

# Using @de-dan/capacitor-file-select Package

The @de-dan/capacitor-file-select package allows you to select files in Capacitor apps. In this tutorial, we will go through the installation and configuration steps required to use this package.

## Installation

To install the @de-dan/capacitor-file-select package, run the following command:

```bash
npm install @de-dan/capacitor-file-select
```

## Android Configuration

For Android, you need to add the following code to MainActivity.java:

```java
import com.getcapacitor.community.fileselector.FileSelector;
...
add(FileSelector.class);
```

If you encounter any errors, manually add both the import statement and the `add` line to MainActivity.java.

## iOS Configuration

No additional configuration is required for iOS.

## Web Configuration

In your web project, import the FileSelector plugin from the @de-dan/capacitor-file-select package:

```javascript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
```

Make sure to comment out the import statement when building for Android/iOS, as it is used to register the web implementation of the plugin.

## Selecting Files

Using the @de-dan/capacitor-file-select package, you can selectively allow the user to choose files based on extensions or broad categories. Here are a few examples:

- To allow the selection of all file types, use `"*"` as the extension.
- To allow the selection of images only, use `"images"`.
- To allow the selection of images and videos, use `["images", "videos"]`.

You can also enable multiple file selection by setting the `multiple_selection` variable to `true`.

The selected files will be returned with the following data:

- The `"paths"` array contains the web accessible URLs of the selected files.
- The `"original_names"` array contains the names of the selected files.
- The `"extensions"` array contains the file extensions of the selected files.

To upload the selected files to a server, you can combine the `"original_names"` and `"extensions"` arrays to rebuild the original file names.

That's it! You have now learned how to use the @de-dan/capacitor-file-select package to select files in Capacitor apps.

For more information, you can refer to the [official documentation](https://github.com/de-dan/capacitor-file-select).

I hope this tutorial was helpful. If you have any further questions, feel free to ask!