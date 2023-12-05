---
title: "Using @whiteguru/capacitor-plugin-file-picker"
description: "A tutorial on how to use the @whiteguru/capacitor-plugin-file-picker package to pick files in Capacitor apps"
created_at: "2021-12-15"
published: true
slug: "capacitor-plugin-file-picker"
---

# Using @whiteguru/capacitor-plugin-file-picker

The `@whiteguru/capacitor-plugin-file-picker` package is a useful plugin that allows you to pick files in Capacitor apps. It provides a simple and straightforward way to select files from Android, iOS, and the web. In this tutorial, we will walk through the installation process and demonstrate how to use this package to pick files.

## Installation

To begin, open your terminal and navigate to your Capacitor app's root directory. Run the following command to install the `@whiteguru/capacitor-plugin-file-picker` package:

```
npm install @whiteguru/capacitor-plugin-file-picker
```

## Android Configuration

For Android, open the `MainActivity.java` file in your Android project. Add the following code inside the `init()` method:

```java
// Import the necessary class
import com.whiteguru.capacitor.filepicker.FilePicker;

// Inside init() method
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    // Add the FilePicker class here
    add(FilePicker.class);
}});
```

If you encounter any errors, manually add the import statement and line to include the `FilePicker` class.

## iOS Configuration

There is no specific configuration required for iOS. The package automatically includes the necessary files for iOS.

## Web Configuration

For web, import the `@whiteguru/capacitor-plugin-file-picker` package and register the plugin implementation. Make sure to comment out this line when building for Android or iOS:

```javascript
import { Plugins } from '@capacitor/core';
import { FilePickerPlugin } from '@whiteguru/capacitor-plugin-file-picker';

// Register the plugin
Plugins.FilePicker = FilePickerPlugin;
```

## Using the File Picker

The file picker supports various extensions and allows you to select files based on their categories. Here is an example of how to use the file picker:

```javascript
import { Plugins } from '@capacitor/core';

// Get a reference to the FilePicker plugin
const { FilePicker } = Plugins;

// Show the file picker and handle the result
FilePicker.showFilePicker({
  fileTypes: ['image/*', 'video/*'], // Limit to specific file types
  multipleSelection: true, // Allow multiple file selection
}).then(result => {
  // Process the result
  const paths = result.paths;
  const originalNames = result.original_names;
  const extensions = result.extensions;

  // Perform further operations with the selected files
}).catch(error => {
  // Handle any errors
  console.error(error);
});
```

In the example above, we import the necessary plugins and use the `FilePicker.showFilePicker()` method to show the file picker dialog. We can specify the `fileTypes` array to restrict the selection to specific file types. By setting `multipleSelection` to `true`, the user can select multiple files. The result will contain arrays of file paths (`paths`), original file names (`originalNames`), and file extensions (`extensions`). You can then perform further operations with the selected files as needed.

That's it! You have now learned how to use the `@whiteguru/capacitor-plugin-file-picker` package to pick files in your Capacitor app. Feel free to explore the package's documentation for more advanced options and customization.

Happy coding!