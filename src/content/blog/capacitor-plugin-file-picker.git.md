---
"title": "Using @whiteguru/capacitor-plugin-file-picker Package",
"description": "A tutorial on how to use the @whiteguru/capacitor-plugin-file-picker package to conditionally select files in Capacitor apps.",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-plugin-file-picker.git"
---

# Using @whiteguru/capacitor-plugin-file-picker Package

In this tutorial, we will learn how to use the @whiteguru/capacitor-plugin-file-picker package to conditionally select files in Capacitor apps.

## Installation

To install the package, use the following command:

```bash
npm install @whiteguru/capacitor-plugin-file-picker
```

## Configuration

### Android Configuration

Open your MainActivity.java file and add the following line inside the `init()` method:

```java
add(FilePicker.class);
```

### iOS Configuration

No specific configuration needed for iOS.

### Web Configuration

For web, import the necessary modules at the beginning of your file:

```javascript
import { Plugins } from '@capacitor/core';
const { FilePicker } = Plugins;
```

### Select Files

To allow users to select files based on certain criteria, you can specify file extensions or broad categories. Here's how you can do it:

```javascript
const options = {
  multiple_selection: true,
  ext: ['png', 'jpg'],
};
const result = await FilePicker.pickFiles(options);
```

The `pickFiles` method returns an object containing the paths, original names, and extensions of the selected files.

## Conclusion

In this tutorial, we covered the basic usage of the @whiteguru/capacitor-plugin-file-picker package. You can now integrate this package into your Capacitor project to enable file selection functionality.

For more detailed information, refer to the official documentation of the package.