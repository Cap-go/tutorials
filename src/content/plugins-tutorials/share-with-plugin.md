---
title: "Using capacitor-share-with-plugin"
description: "A tutorial on how to use the capacitor-share-with-plugin package"
created_at: "2022-01-01"
published: true
slug: "share-with-plugin"
---

# Using capacitor-share-with-plugin

This tutorial will guide you through the process of using the capacitor-share-with-plugin package in your Capacitor project.

## Installation

To get started, install the `capacitor-share-with-plugin` package by running the following command in your project directory:

```bash
npm install capacitor-share-with-plugin
```

## Configuring the Plugin

### Android Configuration

1. Open the `android/app/src/main/java/{YOUR_PACKAGE_NAME}/MainActivity.java` file.

2. Import the `com.varunjohn1990.capacitor.plugins.sharewith.ShareWithPlugin;` package.

3. Add the `ShareWithPlugin` class in the `add(ShareWithPlugin.class)` method inside the `this.init()` function.

```java
import com.varunjohn1990.capacitor.plugins.sharewith.ShareWithPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initialize Capacitor Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Add ShareWithPlugin
      add(ShareWithPlugin.class);
    }});
  }
}
```

### iOS Configuration

1. Open the `ios/App/App/AppDelegate.swift` file.

2. Import the `CapacitorShareWithPlugin` module.

3. Add the `add(ShareWithPlugin.self)` code inside the `application` method.

```swift
import CapacitorShareWithPlugin

class AppDelegate: UIResponder, UIApplicationDelegate {
  // ...
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  
    // ...

    // Add ShareWithPlugin
    add(ShareWithPlugin.self)

    // ...

    return true
  }
}
```

## Using the Plugin

To use the `capacitor-share-with-plugin`, import it into the component or service where you want to use it.

```javascript
import { Plugins } from '@capacitor/core';

const { ShareWithPlugin } = Plugins;
```

### Share a Message

To share a message using the plugin, call the `shareMessage` method with the message as a parameter.

```javascript
ShareWithPlugin.shareMessage({
  message: 'Hello, world!'
});
```

### Share a File

To share a file using the plugin, call the `shareFile` method with the file path as a parameter.

```javascript
ShareWithPlugin.shareFile({
  path: '/path/to/file.jpg'
});
```

### Share Multiple Files

To share multiple files using the plugin, call the `shareFiles` method with an array of file paths as a parameter.

```javascript
ShareWithPlugin.shareFiles({
  paths: [
    '/path/to/file1.jpg',
    '/path/to/file2.png'
  ]
});
```

## Conclusion

In this tutorial, you learned how to install and use the capacitor-share-with-plugin package in your Capacitor project. You also learned how to configure the plugin for both Android and iOS platforms and how to share messages and files using the plugin. Now you can easily implement sharing functionality in your Capacitor applications.

I hope this tutorial was helpful. Happy coding!

For more information, you can refer to the [capacitor-share-with-plugin documentation](https://github.com/varunjohn/capacitor-share-with-plugin).