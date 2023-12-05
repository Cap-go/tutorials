---
title: "Using the capacitor-zip Package"
description: "A tutorial on how to use the capacitor-zip package to zip and unzip files natively in Capacitor apps"
created_at: "2021-11-18"
published: true
slug: "capacitor-zip"
---

# Using the capacitor-zip Package

This tutorial will guide you through the process of using the capacitor-zip package to zip and unzip files natively in Capacitor apps. The capacitor-zip package provides a simple and efficient way to handle file compression and extraction, making it easier to work with compressed files in your Capacitor projects.

## Installation

To get started, you need to install the capacitor-zip package using NPM. Open your terminal and run the following command:

```bash
npm install @derrickorama/capacitor-zip
```

Next, if you are using Android, you need to make a modification to the `MainActivity.java` file. Add the following code snippet to the `MainActivity` class:

```java
package com.company.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import java.util.ArrayList;

import com.derrickorama.capacitorzip.CapacitorZip;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(CapacitorZip.class);
    }});
  }
}
```

After adding the code, you need to sync your project:

```bash
npx cap sync
```

## Usage

Once you have installed the capacitor-zip package and made the necessary configuration changes, you can start using it in your Capacitor app.

First, import the `@derrickorama/capacitor-zip` module and the necessary modules from `@capacitor/core`:

```javascript
import '@derrickorama/capacitor-zip';
import { FilesystemDirectory, Plugins } from '@capacitor/core';

const { CapacitorZip } = Plugins;
```

To unzip a file, you can use the `unZip` method provided by CapacitorZip:

```javascript
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

In the above example, the `unZip` function is defined as an `async` function to use `await` when calling the `unZip` method. The `sourcePath` parameter specifies the path to the zip file you want to unzip. The `sourceDirectory` parameter specifies the directory where the zip file is located. The `destinationPath` parameter specifies the path where the contents of the zip file will be extracted. The `destinationDirectory` parameter specifies the directory where the extracted files will be saved.

## Conclusion

In this tutorial, you learned how to install and use the capacitor-zip package to zip and unzip files natively in Capacitor apps. You can now apply this knowledge to handle file compression and extraction in your own projects. The capacitor-zip package provides a convenient way to work with compressed files and improve the file management capabilities of your Capacitor app.