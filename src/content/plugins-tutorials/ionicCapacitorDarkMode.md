# Using capacitor-dark-mode

capacitor-dark-mode is a Capacitor plugin that provides a complete dark mode solution for Ionic web, iOS, and Android applications. It allows easy enabling and controlling of dark mode across different platforms and provides support for automatic dark mode detection, user dark mode switching, custom dark mode preference storage, and more.

## Installation

To install capacitor-dark-mode in your Ionic project, run the following command:

```
npm install capacitor-dark-mode
```

## Android Configuration

To configure capacitor-dark-mode for Android, follow these steps:

1. Open the `AndroidManifest.xml` file in your Android project.
2. Find the `<activity>` tag in the file.
3. Check if the `android:configChanges` attribute contains `uiMode`. If it does, remove it.
4. Open the `MainActivity.java` file in your Android project.
5. Inside the `init()` method, add the following code:
   ```
   registerPlugin(DarkMode.class);
   ```
   If the import statement for `com.bkon.capacitor.DarkMode.DarkMode` is missing, add it manually.

## iOS Configuration

To configure capacitor-dark-mode for iOS, follow these steps:

1. Locate the `CAPBridgeViewController.swift` file in your iOS project.
2. Scroll to the end of the file and paste the following method:
   ```
   public override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
       if #available(iOS 13.0, *) {
           if self.traitCollection.userInterfaceStyle.rawValue != previousTraitCollection?.userInterfaceStyle.rawValue {
               var darkmode = ["isDarkModeOn":false]
               if self.traitCollection.userInterfaceStyle.rawValue == 2 {
                   darkmode = ["isDarkModeOn":true]
               }
               else {
                   darkmode = ["isDarkModeOn":false]
               }
               NotificationCenter.default.post(name: NSNotification.Name(rawValue: "CAPDarkModeDidChange"), object: self, userInfo: darkmode)
           }
           else {
               // No Change
           }
       } else {
           // Fallback on earlier versions.
       }
   }
   ```

## Web Configuration

To configure capacitor-dark-mode for the web or a PWA, follow these steps:

1. Import the `Plugins` object from `@capacitor/core` and the `DarkMode` plugin from `capacitor-dark-mode` in your JavaScript or TypeScript file:
   ```javascript
   import { Plugins } from '@capacitor/core';
   const { DarkMode } = Plugins;
   import 'capacitor-dark-mode';
   ```
2. If you want to listen for system-wide dark mode changes, add the following code:
   ```javascript
   if (!(platform.is("android") || platform.is("ios"))) {
       DarkMode.registerDarkModeChangeListener();
   }
   ```

## Listening for Dark Mode Changes

To listen for changes to the dark mode, you can utilize the `DarkMode.didChange` event. Here's an example in an Ionic application:

```typescript
import { DarkMode } from 'capacitor-dark-mode';

// Register an event listener for DarkMode.didChange
DarkMode.addListener('DarkModeDidChange', (event: any) => {
    // Handle the dark mode change event here
    if (event.isDarkModeOn) {
        // Dark mode is enabled
    } else {
        // Dark mode is disabled
    }
});
```

Remember to remove the `import 'capacitor-dark-mode'` statement before building your app for Android and iOS, as the native plugin will not be invoked if the import statement is present.

And that's it! You've successfully installed and configured capacitor-dark-mode in your Ionic application. You can now utilize its features to enable and control dark mode across different platforms.