---
"title": "Using @whiteguru/capacitor-plugin-file-picker Package",
"description": "Tutorial on how to utilize @whiteguru/capacitor-plugin-file-picker for capacitor apps",
"created_at": "2022-02-16",
"published": true,
"slug": "capacitor-plugin-file-picker.git"
---

# Using @whiteguru/capacitor-plugin-file-picker Package

This tutorial will guide you on how to incorporate the **@whiteguru/capacitor-plugin-file-picker** package into your Capacitor apps for efficient file selection functionalities.

## Installation and Setup

To begin, install the package using npm:

```bash
npm install @whiteguru/capacitor-plugin-file-picker
```

Next, ensure that your Capacitor project is properly configured to include this plugin by running the following commands:

```bash
npx cap sync
npx cap copy
npx cap add android
npx cap add ios
```

## Usage

1. **Initialize the Plugin:**   
    You can use the `FilePicker` provided by the plugin to allow users to select files within your app.

2. **Select Files:**   
    Define the types of files or categories that can be selected by setting the necessary parameters like supported extensions, broad categories, and multiple selection options.

3. **Get File Information:**   
    Upon file selection, retrieve information such as file paths, original names, and extensions for processing or display purposes.

4. **Upload Files:**   
    Utilize the returned file data to upload selected files from Android/iOS/Web to any server using an appropriate function.

## Example

Here is a basic example demonstrating how to use the file picker plugin:

```javascript
import { Plugins } from '@capacitor/core';
const { FilePicker } = Plugins;

const options = {
    // Define your file selection options here
};

FilePicker.selectFiles(options)
    .then((fileData) => {
        // Process the selected file data
    })
    .catch((error) => {
        console.error("File selection failed: ", error);
    });
```

## Conclusion

The **@whiteguru/capacitor-plugin-file-picker** package provides a simple yet powerful solution for integrating file selection capabilities into your Capacitor project. By following the steps outlined in this tutorial, you can enhance your app with versatile file handling features.