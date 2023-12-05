---
title: "Using capacitor-plugin-zip"
description: "A tutorial on how to use the capacitor-plugin-zip package to zip and unzip files in Capacitor."
created_at: "2022-01-05"
published: true
slug: "capacitor-plugin-zip"
---

# Using capacitor-plugin-zip

In this tutorial, we will learn how to use the capacitor-plugin-zip package to zip and unzip files in a Capacitor project.

## Installation

To begin, you need to install the capacitor-plugin-zip package in your Capacitor project. Open your terminal or command prompt and navigate to the root directory of your project. Run the following command:

```bash
npm install @derrickorama/capacitor-zip
```

This will add the package as a dependency in your project.

## Android Setup

If you are using Android, you need to perform some additional setup steps.

First, open the `MainActivity.java` file located in the `android/app/src/main/java/your_package_name/` directory of your project. Add the import statement for the `CapacitorZip` class at the top of the file:

```java
import com.derrickorama.capacitorzip.CapacitorZip;
```

Next, locate the `init` method within the `MainActivity` class and add `CapacitorZip` to the list of plugins:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // Add other plugins here
  add(CapacitorZip.class);
}});
```

Save the file and proceed to the next step.

## Usage

Now that the package is installed and the necessary setup is done, let's see how to use the capacitor-plugin-zip package in your code.

First, import the package and the required interfaces:

```javascript
import { Plugins, FilesystemDirectory } from '@capacitor/core';
import '@derrickorama/capacitor-zip';
```

Next, you can use the `unZip` function provided by the `CapacitorZip` plugin to unzip a file. Here's an example:

```javascript
const { CapacitorZip } = Plugins;

const unZip = async () => {
  const { path, directory } = await CapacitorZip.unZip({
    sourcePath: 'path/filename.zip',
    sourceDirectory: FilesystemDirectory.Data,
    destinationPath: 'path',
    destinationDirectory: FilesystemDirectory.Data,
  });

  // The zip file content will be saved to: /<data_directory>/path/
};
```

In the code snippet above, we use the `unZip` function to unzip a file. The `sourcePath` parameter specifies the path to the zip file, and the `sourceDirectory` parameter specifies the directory where the zip file is located. The `destinationPath` parameter specifies the path where the unzipped files should be saved, and the `destinationDirectory` parameter specifies the directory where the unzipped files should be saved.

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-zip package to zip and unzip files in Capacitor. We covered the installation process, Android setup, and how to use the `unZip` function to unzip a file. This package can be useful for handling file compression and extraction in Capacitor projects.