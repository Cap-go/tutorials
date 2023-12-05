---
title: "Using the capacitor-v3-plugin-mock-location-checker package"
description: "A tutorial on how to use the capacitor-v3-plugin-mock-location-checker package in your Capacitor project."
created_at: "2023-10-07"
published: true
slug: capacitor-plugin-mocklocation
---

# Using the capacitor-v3-plugin-mock-location-checker package

The capacitor-v3-plugin-mock-location-checker package is a plugin for Capacitor that allows you to check if mock location is enabled on a device. This can be useful in scenarios where you want to prevent users from spoofing their location in your app. This tutorial will guide you through the process of installing and using the capacitor-v3-plugin-mock-location-checker package in your Capacitor project.

## Prerequisites

Before getting started, make sure you have the following installed:

- Capacitor 3.x
- Node.js and npm

## Installation

To install the capacitor-v3-plugin-mock-location-checker package, run the following command in your project directory:

```bash
npm install capacitor-v3-plugin-mock-location-checker
```

## Configuration

### Android

Open your Android project in Android Studio. Locate the `MainActivity.java` file in your project's `android/app/src/main/java/your/package/name` directory. Add the following import statement at the top of the file:

```java
import io.capacitor.v3.plugin.mocklocationchecker.MockLocationChecker;
```

Inside the `init` method of the `MainActivity` class, add the following code to initialize the plugin:

```java
add(Plugins.class, MockLocationChecker.class);
```

### iOS

Open your iOS project in Xcode. Locate the `AppDelegate.swift` file in your project's `App/App` directory. Add the following import statement at the top of the file:

```swift
import Capacitor
import CapacitorMocksSwift
```

Inside the `application` method of the `AppDelegate` class, add the following code to initialize the plugin:

```swift
bridge!.add(MockLocationChecker.self)
```

## Usage

Now that the capacitor-v3-plugin-mock-location-checker package is installed and configured, you can start using it in your Capacitor project. Import the plugin and call its methods as follows:

```typescript
import { Plugins } from 'capacitor-core';
const { MockLocationChecker } = Plugins;

// Check if mock location is enabled
const isMockLocationEnabled = await MockLocationChecker.check();

if (isMockLocationEnabled.value === 'true') {
  console.log('Mock location is enabled');
} else {
  console.log('Mock location is disabled');
}
```

The `check` method returns a promise that resolves with an object containing the `value` property, which represents the status of mock location. If the value is `'true'`, it means mock location is enabled. Otherwise, it is disabled.

## Conclusion

In this tutorial, you learned how to install and use the capacitor-v3-plugin-mock-location-checker package in your Capacitor project. You saw how to configure the plugin for both Android and iOS platforms and how to check if mock location is enabled. With this knowledge, you can now effectively prevent users from spoofing their location in your app. Happy coding!