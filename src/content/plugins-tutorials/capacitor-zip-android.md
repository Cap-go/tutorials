---
title: "Using @elvis-ibrahimi/capacitor-zip-android Package"
description: "A tutorial on how to use the @elvis-ibrahimi/capacitor-zip-android package to zip and unzip files."
created_at: "2021-10-15"
published: true
slug: "capacitor-zip-android"
---

# Using @elvis-ibrahimi/capacitor-zip-android Package

The @elvis-ibrahimi/capacitor-zip-android package is a Capacitor plugin used to zip and unzip files natively in an Android app. This tutorial will guide you through the process of installing the package and using its features.

## Installation

First, install the package using npm:

```bash
npm install @elvis-ibrahimi/capacitor-zip-android
```

## Adding the Plugin to MainActivity.java

After installing the package, you need to add the plugin to your MainActivity.java file in your Android project. Open the file and add the following lines:

```java
import io.capacitor.android.plugins.ZipPlugin; // Import the ZipPlugin
// ...

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // ...
      add(ZipPlugin.class); // Add the ZipPlugin to the list of plugins
    }});
  }
}
```

## Using the Package

To use the package's zip and unzip features in your app, you can import and call the relevant methods. Here's an example of how to unzip a file:

```javascript
import { Plugins } from '@capacitor/core';
const { ZipPlugin } = Plugins;

const unzipFile = async () => {
  const result = await ZipPlugin.unzip({
    sourcePath: 'path/to/file.zip',
    destinationPath: 'path/to/destination',
  });

  if (result.success) {
    console.log('File unzipped successfully');
  } else {
    console.error('Error unzipping file:', result.error);
  }
};
```

In the above example, the `unzip` method of the `ZipPlugin` is called with the source path of the zip file and the destination path where the unzipped files should be saved. The method returns an object containing the `success` status and an optional `error` message if any error occurred during unzipping.

## Conclusion

In this tutorial, you learned how to install and use the @elvis-ibrahimi/capacitor-zip-android package to zip and unzip files in your Android app. You can now effectively leverage the zip and unzip features provided by this package in your own projects.

Remember to check the package documentation for more details on additional functionality and advanced usage options.