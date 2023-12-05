---
title: "Using capacitor-adjust-resize package"
description: "This tutorial will guide you on how to use the capacitor-adjust-resize package to handle adjustments to the app layout when the keyboard is shown. It provides a seamless user experience by resizing the content to accommodate the keyboard."
created_at: "2022-10-01"
published: true
slug: "capacitor-adjust-resize"
---

# Using capacitor-adjust-resize package

In this tutorial, we will explore how to use the `capacitor-adjust-resize` package to handle adjustments to the app layout when the keyboard is shown. This package provides an easy way to ensure that the app's content is resized to accommodate the keyboard, resulting in a seamless user experience.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Node.js and npm
- Capacitor CLI

## Installation

To install the `capacitor-adjust-resize` package, run the following command in your project directory:

```bash
npm install capacitor-adjust-resize
```

## Integration

Once the package is installed, you need to integrate it into your Capacitor project.

### Android Integration

To integrate the package into your Android project, open the `android/app/src/main/java/<YOUR_PACKAGE_NAME>/MainActivity.java` file and add the following import statements:

```java
import com.capacitor.adjustresize.AdjustResize;
import com.getcapacitor.BridgeActivity;
```

Next, update the `MainActivity` class to extend `BridgeActivity` and add the `AdjustResize` plugin to the `initialize` method:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // ...

    // Add the AdjustResize plugin
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Other plugins...
      add(AdjustResize.class);
    }});
  }
}
```

### iOS Integration

To integrate the package into your iOS project, open the `ios/App/AppDelegate.swift` file and import the `CapacitorAdjustResize` library by adding the following line at the top of the file:

```swift
import CapacitorAdjustResize
```

Next, update the `AppDelegate` class to register the `AdjustResize` plugin:

```swift
import CapacitorAdjustResize

class AppDelegate: UIResponder, UIApplicationDelegate {
  // ...

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // ...

    // Register the AdjustResize plugin
    self.window.rootViewController = bridge.viewController
    self.window.makeKeyAndVisible()
    AdjustResize.register()

    return true
  }

  // ...
}
```

## Usage

With the `capacitor-adjust-resize` package integrated into your project, you can now use its functionality to handle adjustments when the keyboard is shown.

The package provides a single method called `adjustHeight()` that can be used to dynamically adjust the app's content height. You can call this method inside an event listener for the keyboard show event, like so:

```javascript
import { Plugins } from '@capacitor/core';
const { AdjustResize } = Plugins;

// ...

document.addEventListener('keyboardWillShow', () => {
  // Adjust the content height
  AdjustResize.adjustHeight();
});
```

That's it! By calling the `adjustHeight()` method whenever the keyboard is shown, the `capacitor-adjust-resize` package will handle the necessary adjustments to your app's layout.

## Conclusion

In this tutorial, we covered how to use the `capacitor-adjust-resize` package to handle adjustments to the app layout when the keyboard is shown. By following the integration steps and using the provided method, you can ensure a seamless user experience by resizing the content to accommodate the keyboard.