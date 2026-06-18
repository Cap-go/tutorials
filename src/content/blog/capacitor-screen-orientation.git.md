```markdown
---
"title": "Using capacitor-screen-orientation package"
"description": "Learn how to utilize the @capgo/capacitor-screen-orientation package to handle screen orientation in your Capacitor apps with ease."
"created_at": "2022-03-01"
"published": true
"slug": "capacitor-screen-orientation.git"
---

# Using capacitor-screen-orientation Package

To make your Capacitor apps handle screen orientation effectively, you can use the @capgo/capacitor-screen-orientation package. This package allows you to detect the current orientation of the screen, lock it in a particular orientation (disabling auto-rotate) or unlock screen rotation (enabling auto-rotate), and listen for orientation changes.

## Installation

You can easily install the package by running the following command in your project:

```
npm install capacitor-screen-orientation
```

## Android Configuration

For Android, follow these steps:

1. Open `MainActivity.java` and add the following code inside `this.init()`:
   ```
   add(ScreenOrientation.class);
   ```

2. If you want to listen for orientation change events on Android, remove `'orientation |'` from `android:configChanges` in your `AndroidManifest.xml`.

3. Supported Orientations are:
   - LANDSCAPE
   - LANDSCAPE_PRIMARY
   - LANDSCAPE_SECONDARY
   - PORTRAIT
   - PORTRAIT_PRIMARY
   - PORTRAIT_SECONDARY
   - CURRENT

## iOS Configuration

For iOS, do the following:

1. Open `AppDelegate.swift` for your app.
2. Add the following code:
   ```swift
   var orientationLock = UIInterfaceOrientationMask.all

   func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
       return self.orientationLock
   }
   ```

## Conclusion

Utilizing the @capgo/capacitor-screen-orientation package simplifies the management of screen orientation in your Capacitor apps. By following the installation and configuration steps outlined in this tutorial, you can ensure your app behaves correctly with different screen orientations.
```
```