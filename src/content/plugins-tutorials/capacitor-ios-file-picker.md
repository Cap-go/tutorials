---
title: "Using capacitor-ios-file-picker"
description: "A tutorial on how to use the capacitor-ios-file-picker package to select files in Capacitor apps"
created_at: "2021-09-15"
published: true
slug: "capacitor-ios-file-picker"
---

# Using capacitor-ios-file-picker

This tutorial will guide you through the process of using the capacitor-ios-file-picker package to select files in Capacitor apps.

## Installation

To install the capacitor-ios-file-picker package, run the following command:

```
npm install capacitor-ios-file-picker
```

## Configuration

### iOS

To configure the capacitor-ios-file-picker package for iOS, follow these steps:

1. Open your Xcode project.
2. Add the capacitor-ios-file-picker package to your project.
3. Import the FilePicker plugin in your app's `AppDelegate.swift` file:

   ```swift
   import FilePicker
   ```

4. Register the plugin with Capacitor:

   ```swift
   AppDelegate.swift
   
   // Inside the didFinishLaunchingWithOptions method
   let controller = window.rootViewController as! UINavigationController
   self.filePicker.setValue(controller, forKey: "navigationController")
   ```

### Usage

Once you have installed and configured the capacitor-ios-file-picker package, you can use it to select files in your Capacitor app.

To select files, use the `selectFiles` method provided by the FilePicker plugin. This method accepts an optional `options` parameter that allows you to specify any additional options for the file selection.

Here's an example of how to use the `selectFiles` method:

```typescript
import { Plugins } from '@capacitor/core';

const { FilePicker } = Plugins;

const options = {
  multipleSelection: true,
  ext: ['jpg', 'png'],
};

const result = await FilePicker.selectFiles(options);
const { paths, original_names, extensions } = result;
```

In the above example, we specify that we want to allow multiple file selection and only allow files with the extensions 'jpg' and 'png'. The `selectFiles` method returns an object containing arrays of the file paths, original names, and extensions of the selected files.

You can then use these file details to perform further operations, such as uploading the files to a server.

## Conclusion

In this tutorial, you learned how to install, configure, and use the capacitor-ios-file-picker package to select files in Capacitor apps. You should now be able to integrate file selection functionality into your own Capacitor projects using this package.