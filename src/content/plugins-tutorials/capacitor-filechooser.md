---
title: "Using @asephermann/capacitor-filechooser Package"
description: "A tutorial on how to use the @asephermann/capacitor-filechooser package to select files in Capacitor apps."
created_at: "2022-01-01"
published: true
slug: "capacitor-filechooser"
---

# Using @asephermann/capacitor-filechooser Package

In this tutorial, we will learn how to use the @asephermann/capacitor-filechooser package to select files in Capacitor apps.

## Installation

To install the @asephermann/capacitor-filechooser package, use the following command:

```bash
npm install @asephermann/capacitor-filechooser
```

## Android Configuration

To configure the package for Android, open the MainActivity.java file and add the following code inside the `init()` method:

```java
import com.asephermann.capacitorfilechooser.CapacitorFilechooser;
...
public void init(Bundle savedInstanceState) {
    super.init(savedInstanceState);
    // Other code...
    add(CapacitorFilechooser.class);
}
```

Make sure to also import the necessary package by adding the following line at the top:

```java
import com.asephermann.capacitorfilechooser.CapacitorFilechooser;
```

## iOS Configuration

There is no additional configuration required for iOS.

## Web Configuration

There is no additional configuration required for the web.

## Using the File Chooser

To use the file chooser, import the package in your JavaScript code:

```javascript
import { CapacitorFilechooser } from '@asephermann/capacitor-filechooser';
```

### Selecting Files

To allow the selection of all file types, use the asterisk (`*`) as the extension parameter:

```javascript
const options = {
  multiple_selection: false,
  extensions: ['*']
};

const files = await CapacitorFilechooser.selectFiles(options);
```

The `selectFiles` function takes an options object as a parameter. In this example, we set `multiple_selection` to `false` to allow the user to select only one file. The `extensions` array is set to `['*']` to allow all file types.

The function returns an array of selected files. Each file object contains the following properties:

- `path`: The path to the selected file.
- `name`: The name of the selected file.
- `extension`: The extension of the selected file.

### Example Usage

Here's an example of how you can use the @asephermann/capacitor-filechooser package to select a file:

```javascript
import { CapacitorFilechooser } from '@asephermann/capacitor-filechooser';

async function selectFile() {
  const options = {
    multiple_selection: false,
    extensions: ['*']
  };

  try {
    const files = await CapacitorFilechooser.selectFiles(options);
    if (files.length > 0) {
      const file = files[0];
      console.log('Selected file:', file);
    } else {
      console.log('No file selected.');
    }
  } catch (error) {
    console.error('Error selecting file:', error);
  }
}

selectFile();
```

This example imports the `CapacitorFilechooser` from the package and defines an `async` function `selectFile()`. Inside the function, we set the options for selecting a single file of any type. We then use a try-catch block to handle any errors that may occur during the file selection process. If a file is successfully selected, it is logged to the console.

That's it! You have successfully learned how to use the @asephermann/capacitor-filechooser package to select files in Capacitor apps.