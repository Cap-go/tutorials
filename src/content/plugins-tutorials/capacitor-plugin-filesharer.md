---
title: "Using capacitor-plugin-filesharer"
description: "A tutorial on how to use the capacitor-plugin-filesharer package to share files using Capacitor"
created_at: "2022-01-01"
published: true
slug: "capacitor-plugin-filesharer"
---

# Using capacitor-plugin-filesharer

In this tutorial, we will learn how to use the capacitor-plugin-filesharer package to share files using Capacitor. The capacitor-plugin-filesharer allows you to easily share files with other applications on the device, such as social media apps or messaging apps. It provides a simple function to share files and automatically handles the platform-specific details.

## Installation

To get started, we need to install the capacitor-plugin-filesharer package. Open your terminal and navigate to your Capacitor project folder. Then, run the following command:

```shell
npm install capacitor-plugin-filesharer
```

Once the package is installed, we can proceed to the next step.

## Configuring the Plugin

### Android Configuration

For Android, no further configuration is required.

### iOS Configuration

For iOS, open your iOS project in Xcode and add the following code to the `AppDelegate.swift` file:

```swift
import Capacitor
import FileSharerPlugin

...

class AppDelegate: UIResponder, UIApplicationDelegate {

  override func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    // Add this line to handle file sharing
    return FileSharerPlugin.handleOpen(url, options)
  }

  ...
}
```

### Web Configuration

For web, no additional configuration is required. The capacitor-plugin-filesharer package will automatically use the web implementation.

## Using the Plugin

To use the capacitor-plugin-filesharer package, we can call the `share` function provided by the plugin. This function accepts a `path` parameter specifying the file path to be shared.

Here's an example of how to use the capacitor-plugin-filesharer package to share a file:

```javascript
import { Plugins } from '@capacitor/core';
const { FileSharer } = Plugins;

async function shareFile() {
  try {
    const path = '/path/to/file.pdf';
    await FileSharer.share({ path });
    console.log('File shared successfully!');
  } catch (error) {
    console.error('Error sharing file:', error);
  }
}

shareFile();
```

In the above example, we import the `FileSharer` plugin from the `@capacitor/core` package and define an asynchronous function `shareFile()` to share a file. Inside the function, we specify the `path` of the file to be shared and call the `FileSharer.share` function with the `path` parameter. We handle any errors that occur during the sharing process.

That's it! You have now successfully used the capacitor-plugin-filesharer package to share files using Capacitor.

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-filesharer package to share files using Capacitor. We covered the installation process, configuring the plugin for Android, iOS, and web, and demonstrated how to use the `share` function to share files. Now you can easily integrate file sharing functionality into your Capacitor apps.

I hope you found this tutorial helpful. Happy coding!