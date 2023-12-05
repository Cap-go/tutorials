---
title: "Using @wisdomgarden/capacitor-screen-orientation package"
description: "This tutorial will guide you on how to use the @wisdomgarden/capacitor-screen-orientation package in your Capacitor apps."
created_at: "2022-10-20"
published: true
slug: "capacitor-screen-orientation"
---

# Using @wisdomgarden/capacitor-screen-orientation package

In this tutorial, we will learn how to use the **@wisdomgarden/capacitor-screen-orientation** package in your Capacitor apps. This package allows you to detect the current orientation of the screen, lock the screen in a particular orientation, and listen for orientation changes.

## Installation

To install the package, run the following command:

```shell
npm install @wisdomgarden/capacitor-screen-orientation
```

## Android Configuration

Open the `MainActivity.java` file in your Android project and add the following code inside the `init()` method:

```java
add(com.wisdomgarden.capacitor.screenorientation.ScreenOrientation.class);
```

Make sure to also add the import statement for the `ScreenOrientation` class:

```java
import com.wisdomgarden.capacitor.screenorientation.ScreenOrientation;
```

If you encounter any errors, manually add both the lines to the `MainActivity.java` file.

If you want to listen for the orientation change event on Android, follow these steps:

1. Open the `AndroidManifest.xml` file for your app.
2. Find the `<activity>` tag.
3. Locate the `android:configChanges="..."` attribute.
4. Remove the `'orientation |'` value from the `configChanges` attribute.

Supported Orientations:

- `LANDSCAPE`: The left or right orientation is decided by the device's sensor.
- `LANDSCAPE_PRIMARY`: Explicitly specified by the developer.
- `LANDSCAPE_SECONDARY`: Explicitly specified by the developer.
- `PORTRAIT`: The up or upside-down orientation is decided by the device's sensor.
- `PORTRAIT_PRIMARY`: Explicitly specified by the user.
- `PORTRAIT_SECONDARY`: Explicitly specified by the user.
- `CURRENT`: The current orientation of the device.

Note: Ionic has implicitly disabled `PORTRAIT_SECONDARY`.

## iOS Configuration

To lock the screen to the specified orientation on iOS, follow these steps:

1. Open the `AppDelegate.swift` file for your app.
2. Add the following code:

```swift
var orientationLock = UIInterfaceOrientationMask.all

func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
    return self.orientationLock
}
```

You can customize the `orientationLock` variable based on your requirements.

## Usage

To use the **@wisdomgarden/capacitor-screen-orientation** package in your Capacitor app, import it and start utilizing its features.

Here is an example of how to detect the current screen orientation:

```typescript
import { ScreenOrientation } from '@wisdomgarden/capacitor-screen-orientation';

const currentOrientation = await ScreenOrientation.getCurrentOrientation();
console.log('Current orientation:', currentOrientation);
```

You can also lock the screen in a particular orientation using the `lock` method:

```typescript
await ScreenOrientation.lock('LANDSCAPE_PRIMARY');
```

To unlock the screen rotation and enable auto-rotate, use the `unlock` method:

```typescript
await ScreenOrientation.unlock();
```

If you want to listen for orientation changes, you can use the `addListener` method:

```typescript
ScreenOrientation.addListener(orientation => {
  console.log('New orientation:', orientation);
});
```

That's it! You have successfully learned how to use the **@wisdomgarden/capacitor-screen-orientation** package in your Capacitor app.

For more detailed information and advanced usage, refer to the package documentation.

