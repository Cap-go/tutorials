---
title: "Using the capacitor-ios-app-tracking Package"
description: "A tutorial on how to use the capacitor-ios-app-tracking package in Capacitor"
created_at: "2021-10-15"
published: true
slug: "capacitor-ios-app-tracking"
---

# Using the capacitor-ios-app-tracking Package

In this tutorial, we will learn how to use the `capacitor-ios-app-tracking` package in Capacitor. This package allows you to track user activity and engagement in your iOS applications. We will cover installation, setup, and usage of this package.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project
- Xcode installed on your development machine

## Step 1: Install the Package

To install the `capacitor-ios-app-tracking` package, navigate to your Capacitor project folder in the terminal and run the following command:

```bash
npm install capacitor-ios-app-tracking
```

## Step 2: Add the Plugin to Your App

Next, we need to add the plugin to your Capacitor app. Open the `ios/App/App/AppDelegate.swift` file in your Xcode project and import the `CapacitoriOSAppTracking` module at the top of the file:

```swift
import CapacitoriOSAppTracking
```

Then, inside the `application(_:didFinishLaunchingWithOptions:)` method, add the following line of code to initialize the plugin:

```swift
CapacitoriOSAppTracking.registerPlugin()
```

## Step 3: Request User Tracking Authorization

In iOS 14 and above, user tracking authorization is required to access the App Tracking Transparency framework. To request user authorization, open the `ios/App/App/SceneDelegate.swift` file in your Xcode project and import the `AppTrackingTransparency` module at the top of the file:

```swift
import AppTrackingTransparency
```

Then, inside the `scene(_:willConnectTo:options:)` method, add the following code to request user tracking authorization:

```swift
if #available(iOS 14, *) {
    ATTrackingManager.requestTrackingAuthorization(completionHandler: { status in
        // Handle user authorization status
    })
}
```

## Step 4: Track User Events

Once the plugin is installed and the user tracking authorization is obtained, we can start tracking user events. In your Capacitor app's JavaScript code, import the `capacitor-ios-app-tracking` plugin and use the provided methods to track events.

For example, to track a custom event, you can use the `trackEvent` method:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitoriOSAppTracking } = Plugins;

// Track a custom event
CapacitoriOSAppTracking.trackEvent({
  name: 'button_click',
  data: {
    button_id: 'my_button'
  }
});
```

You can also use the `trackScreen` method to track screen views:

```javascript
// Track a screen view
CapacitoriOSAppTracking.trackScreen('Home Screen');
```

## Step 5: Retrieve User Data

You can retrieve user data collected by the `capacitor-ios-app-tracking` package using the `getUserData` method. This method returns a promise that resolves to the user data:

```javascript
// Retrieve user data
CapacitoriOSAppTracking.getUserData().then(data => {
  console.log(data);
});
```

## Conclusion

In this tutorial, we explored how to use the `capacitor-ios-app-tracking` package to track user activity and engagement in Capacitor iOS applications. We learned how to install the package, add the plugin to our app, request user tracking authorization, track user events, and retrieve user data. Now you can effectively track user behavior in your iOS apps using Capacitor.

Remember to refer to the package's documentation for more information and additional functionalities.

Happy tracking!