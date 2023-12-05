---
title: "Using Stefanskia Capacitor Plugin Background Mode"
description: "A tutorial on how to use the Stefanskia Capacitor Plugin Background Mode"
created_at: "2022-01-01"
published: true
slug: capacitor-plugin-background-mode
---

# Using Stefanskia Capacitor Plugin Background Mode

The Stefanskia Capacitor Plugin Background Mode allows you to run your Capacitor app in the background and perform tasks even when the app is minimized or the device is locked. This tutorial will guide you through the steps of installing and using the plugin in your Capacitor app.

## Installation

To install the Stefanskia Capacitor Plugin Background Mode, follow these steps:

1. Open your Capacitor app project in your code editor.
2. Run the following command to install the plugin package:

   ```bash
   npm install --save stefanskia-capacitor-plugin-background-mode
   ```

3. Sync your project with Capacitor:

   ```bash
   npx cap sync
   ```

## Setup

### iOS Setup

To enable background mode for your Capacitor app on iOS, follow these steps:

1. Go to the `ios/App/App/AppDelegate.swift` file in your project.
2. Import the `StefanskiaCapacitorPluginBackgroundMode` module at the top:

   ```swift
   import StefanskiaCapacitorPluginBackgroundMode
   ```

3. Inside the `application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool` method, add the following code:

   ```swift
   StefanskiaCapacitorPluginBackgroundMode.registerBackgroundMode(application)
   ```

### Android Setup

To enable background mode for your Capacitor app on Android, follow these steps:

1. Go to the `android/app/src/main/java/{your_package_name}/MainActivity.java` file in your project.
2. Import the `com.stefanskia.capacitor.background.mode.StefanskiaCapacitorPluginBackgroundMode` module on top:

   ```java
   import com.stefanskia.capacitor.background.mode.StefanskiaCapacitorPluginBackgroundMode;
   ```

3. Inside the `onCreate` method, add the following code:

   ```java
   StefanskiaCapacitorPluginBackgroundMode.registerBackgroundMode(this);
   ```

## Usage

Once you have installed and set up the Stefanskia Capacitor Plugin Background Mode, you can start using it in your app. Here's an example of how to use the plugin:

```typescript
import { Plugins } from '@capacitor/core';

const { StefanskiaCapacitorPluginBackgroundMode } = Plugins;

// Enable background mode
StefanskiaCapacitorPluginBackgroundMode.enable();

// Check if background mode is enabled
StefanskiaCapacitorPluginBackgroundMode.isEnabled()
  .then((isEnabled) => {
    if (isEnabled) {
      console.log('Background mode is enabled');
    } else {
      console.log('Background mode is disabled');
    }
  })
  .catch((error) => {
    console.error('Error checking if background mode is enabled:', error);
  });

// Disable background mode
StefanskiaCapacitorPluginBackgroundMode.disable();

// Listen for background mode events
StefanskiaCapacitorPluginBackgroundMode.addListener('backgroundModeEnabled', () => {
  console.log('Background mode has been enabled');
});

StefanskiaCapacitorPluginBackgroundMode.addListener('backgroundModeDisabled', () => {
  console.log('Background mode has been disabled');
});
```

## Conclusion

In this tutorial, you learned how to install and use the Stefanskia Capacitor Plugin Background Mode in your Capacitor app. With this plugin, you can run your app in the background and perform tasks even when the app is not actively in use. This opens up possibilities for background data processing, location tracking, and more.