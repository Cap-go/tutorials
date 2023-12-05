---
title: "Using the capacitor-ios-remote-notifications Package"
description: "A tutorial on how to use the capacitor-ios-remote-notifications package for handling remote notifications in Capacitor-based iOS apps."
created_at: "2021-10-28"
published: true
slug: capacitor-ios-remote-notifications
---

# Using the capacitor-ios-remote-notifications Package

The `capacitor-ios-remote-notifications` package allows you to handle remote notifications in your Capacitor-based iOS apps. In this tutorial, we will walk through the steps to set up and use this package in your app.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed on your system:

- [Homebrew](https://brew.sh/)
- [CocoaPods](https://cocoapods.org/)

## Step 1: Create a new Capacitor Project

First, create a new Capacitor project by running the following commands in your terminal:

```shell
ionic start my-cap-app --capacitor
cd my-cap-app
```

## Step 2: Add the `capacitor-ios-remote-notifications` Package

Next, add the `capacitor-ios-remote-notifications` package to your project. Run the following command:

```shell
npm install --save capacitor-ios-remote-notifications
```

## Step 3: Configure the iOS Project

To configure the iOS project, run the following commands:

```shell
npx cap add ios
npx cap open ios
```

This will open your iOS project in Xcode.

## Step 4: Set Up Push Notification Capabilities

In Xcode, navigate to the "Signing & Capabilities" tab of your project settings. Enable the "Push Notifications" capability.

## Step 5: Add the Notification Service Extension

In Xcode, right-click on your project's folder, go to `New File`, and select `Notification Service Extension`. Set a name for the extension and click `Finish`.

## Step 6: Configure the Notification Service Extension

In the newly created Notification Service Extension folder, you will find a `NotificationService.swift` file. Open this file and add the following code:

```swift
import Capacitor
import UserNotifications

class NotificationService: CapacitorPushServiceExtension {
    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
        // Handle the received notification here
        super.didReceive(request, withContentHandler: contentHandler)
    }
}
```

## Step 7: Update the Notification Service Extension Target

In Xcode, select the Notification Service Extension target. In the project settings, go to the "General" tab and set the "Bundle Identifier" to be the same as your main app's bundle identifier.

## Step 8: Build and Run the App

Build and run your app in Xcode. Make sure you have a valid signing profile set up.

## Step 9: Handle Remote Notifications

To handle remote notifications in your app, you can add the following code to your app's entry file (e.g., `index.ts` or `main.ts`):

```tsx
import { PushNotifications, PushNotificationSchema } from 'capacitor-ios-remote-notifications';

// Register a notification handler
PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
  // Handle the received notification here
});
```

That's it! You have successfully set up and integrated the `capacitor-ios-remote-notifications` package in your Capacitor-based iOS app.

Remember to refer to the package's documentation for more advanced usage and additional configuration options.

---
Please note that the information provided in this tutorial is accurate as of the date of this answer.