---
title: "Using the capacitor-plugin-app-tracking-transparency Package"
description: "A tutorial on how to use the capacitor-plugin-app-tracking-transparency package for implementing App Tracking Transparency in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor-plugin-app-tracking-transparency"
---

# Using the capacitor-plugin-app-tracking-transparency Package

In this tutorial, we will learn how to use the `capacitor-plugin-app-tracking-transparency` package to implement App Tracking Transparency in your Capacitor app. App Tracking Transparency is a feature introduced in iOS 14 that requires apps to obtain user permission before tracking their data across other apps or websites.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project
- An iOS project configured using Capacitor
- Xcode 12 or later

## Step 1: Install the Plugin

Start by installing the `capacitor-plugin-app-tracking-transparency` package into your Capacitor project. Run the following command in your project directory:

```bash
npm install capacitor-plugin-app-tracking-transparency
```

## Step 2: Configure the Plugin

Next, we need to configure the plugin in our iOS project. Open your iOS project in Xcode, locate the `AppDelegate.swift` file, and add the following import statement at the top:

```swift
import Capacitor
import CapacitorPluginAppTrackingTransparency
```

Then, add the following line inside the `application(_:didFinishLaunchingWithOptions:)` method:

```swift
AppTrackingTransparency.registerPlugin()
```

Make sure you have imported the `CapacitorPluginAppTrackingTransparency` module and added the `registerPlugin()` call.

## Step 3: Update the Info.plist File

To enable App Tracking Transparency, we need to add a usage description to the Info.plist file of our iOS project. Open the `Info.plist` file in Xcode and add the following key-value pair:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>We use your data to provide personalized ads and recommendations.</string>
```

Replace the value with an appropriate description that explains why your app needs to track user data.

## Step 4: Request Tracking Authorization

Now, let's implement the logic to request user authorization for tracking. Open your Capacitor JavaScript file where you want to handle the tracking authorization flow.

First, import the plugin:

```typescript
import { Plugins } from '@capacitor/core';
import 'capacitor-plugin-app-tracking-transparency';
const { AppTrackingTransparency } = Plugins;
```

Then, add a function to request tracking authorization:

```typescript
async function requestPermission() {
  const { status } = await AppTrackingTransparency.requestPermission();
  
  if (status === 'authorized') {
    // User granted tracking authorization
    // Proceed with tracking implementation
  } else {
    // User denied tracking authorization
    // Handle the flow accordingly
  }
}
```

Call this function whenever you need to request user authorization for tracking. You can then proceed with your tracking implementation based on the user's authorization status.

## Conclusion

In this tutorial, we learned how to use the `capacitor-plugin-app-tracking-transparency` package to implement App Tracking Transparency in your Capacitor app. We installed the plugin, configured it in our iOS project, updated the Info.plist file, and implemented the logic to request tracking authorization from the user. By following these steps, you can ensure compliance with App Tracking Transparency guidelines and provide a better user experience.

Remember to test your app thoroughly to verify that the tracking authorization flow works as expected.