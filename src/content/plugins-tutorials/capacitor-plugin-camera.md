---
title: "Using capacitor-plugin-camera"
description: "A tutorial on how to use the capacitor-plugin-camera package"
created_at: "2022-02-28"
published: true
slug: "capacitor-plugin-camera"
---

# Using capacitor-plugin-camera

In this tutorial, we will learn how to use the capacitor-plugin-camera package to incorporate camera functionality into your Capacitor application.

### Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed globally (`npm install -g @capacitor/core @capacitor/cli`)
- An existing Capacitor project

### Step 1: Install the package

To install the capacitor-plugin-camera package, navigate to your Capacitor project's root folder and run the following command:

```bash
npm install capacitor-plugin-camera
```

### Step 2: Register the plugin

Open your project's main `android/app/src/main/java/.../MainActivity.java` file and import the necessary package:

```java
import com.package.name.camera.CameraPlugin;
```

Next, add the following line to the `this.init` block:

```java
add(CameraPlugin.class);
```

Repeat the same steps for the `ios/App/AppDelegate.swift` file:

```swift
import CapacitorPluginCamera
```

Add the following line to the `didFinishLaunchingWithOptions` method:

```swift
add(CameraPlugin.self)
```

### Step 3: Use the camera in your code

To use the camera, import the `Camera` class in your desired TypeScript/JavaScript file:

```typescript
import { Camera } from 'capacitor-plugin-camera';
```

You can now use the `Camera` class to access camera functionality. For example, to take a photo, use the `takePhoto` method:

```typescript
const result = await Camera.takePhoto();
```

The `takePhoto` method returns a promise that resolves to the captured photo's data.

### Step 4: Building and running your app

After implementing the necessary code, you can now build and run your Capacitor app. Make sure to follow the platform-specific build steps for iOS and Android as outlined in the Capacitor documentation.

### Conclusion

In this tutorial, we learned how to incorporate camera functionality into a Capacitor app using the capacitor-plugin-camera package. By following the steps outlined in this tutorial, you should now be able to integrate camera features into your own Capacitor projects.

Remember to refer to the official package documentation for a comprehensive list of available methods and options.