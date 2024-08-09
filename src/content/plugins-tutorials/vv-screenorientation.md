```markdown
---
"title": "Using vv-screenorientation Package"
"description": "Step-by-step guide on integrating and utilizing the vv-screenorientation package in your Ionic Capacitor app for controlling screen orientations."
"created_at": "2021-12-21"
"published": true
slug: vv-screenorientation
---

# Using vv-screenorientation Package

Firstly, install the `vv-screenorientation` package using npm:

```
npm install vv-screenorientation
```

Next, follow these steps to configure and use the package based on the operating system your Ionic Capacitor app is targeting.

## Android Configuration

1. Open MainActivity.java in your Android project.
2. Inside `this.init()`, add the following line:
   ```java
   add(ScreenOrientation.class);
   ```
3. Ensure the following import statement is added:
   ```java
   import com.bkon.capacitor.screenorientation.ScreenOrientation;
   ```
4. If needed, manually add the import statement to MainActivity.java.
5. To listen for orientation change events, edit your `AndroidManifest.xml`:
   - Locate the Activity tag.
   - Remove `'orientation |'` from `android:configChanges`.

## Supported Orientations

The package supports various orientation modes on Android, such as:
- LANDSCAPE
- LANDSCAPE_PRIMARY
- LANDSCAPE_SECONDARY
- PORTRAIT
- PORTRAIT_PRIMARY
- CURRENT

<i>Note: Ionic implicitly disables PORTRAIT_SECONDARY orientation.</i>

## iOS Configuration

If you wish to lock the screen to a specific orientation on iOS:

1. Open `AppDelegate.swift` in your iOS project.
2. Add the following code snippet:
   ```swift
   var orientationLock = UIInterfaceOrientationMask.all

   func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
       return self.orientationLock
   }
   ```
3. Implement the `setOrientationLock` function to handle orientation lock changes.

By following these steps, you will successfully integrate and utilize the `vv-screenorientation` package in your Ionic Capacitor app for managing screen orientations effectively.
``` 
```
