---
title: "Using Capacitor File Picker Package"
description: "Learn how to use the capacitor-file-picker package to select files/images/videos from Android or iOS devices."
created_at: "2021-07-28"
published: true
slug: capacitor-file-picker
---

# Using Capacitor File Picker Package

In this tutorial, we will learn how to use the capacitor-file-picker package to select files/images/videos from Android or iOS devices. The capacitor-file-picker package provides an easy and efficient way to allow users to pick files from their devices within your Capacitor applications.

## Installation

To get started, we need to install the capacitor-file-picker package. Open your terminal and run the following command:

```shell
npm install capacitor-file-picker
```

## Android Configuration

For Android, we need to make some changes in our `MainActivity.java` file. Open the `MainActivity.java` file and add the following code inside the `this.init()` method:

```java
add(FileSelector.class);
```

This will add the necessary import statement:

```java
import com.bkon.capacitor.fileselector.FileSelector;
```

If you encounter any errors, make sure to add both the lines manually to the `MainActivity.java` file. 

## iOS Configuration

For iOS, no additional configuration is required.

## Web Configuration

To enable file picking in a web application, include the following code:

```javascript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
import 'capacitor-file-selector'; // Comment out this line when building Android/iOS app
```

**Note:** When building the app for Android or iOS, make sure to comment out the line `import 'capacitor-file-selector'`. This import statement is used to register the web implementation of the plugin and should not be included in the native Android or iOS app.

## Usage

To use the capacitor-file-picker package, we can import the `FilePicker` class from the package. Here is an example of how to use the package to pick files/images/videos:

```javascript
import { FilePicker } from "capacitor-file-picker";

FilePicker.showFilePicker({
  fileTypes: ["image/*", "video/*"],
}).then(
  (fileResult) => {
    const fileUri = fileResult.uri;
    const fileName = fileResult.name;
    const fileMimeType = fileResult.mimeType;
    const fileExtension = fileResult.extension;
    const fileSize = fileResult.size;
    
    // Use the file details as needed
  },
  (error) => {
    console.log(error);
  }
);
```

In the above example, we are calling the `showFilePicker` method of the `FilePicker` class and passing an object with the `fileTypes` property set to an array of allowed file types. The `fileTypes` array can contain MIME types or wildcard patterns.

When the user selects a file from the picker, the promise will resolve with a `fileResult` object containing various details of the selected file, such as the URI, name, MIME type, extension, and size. You can then use these details as needed in your application.

That's it! You have successfully learned how to use the capacitor-file-picker package to select files/images/videos from Android or iOS devices. You can now integrate this feature into your Capacitor applications and provide a seamless file picking experience for your users. Enjoy coding!