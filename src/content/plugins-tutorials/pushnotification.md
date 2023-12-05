---
title: "Using the @up/push-notification Package"
description: "A tutorial on how to use the @up/push-notification package to handle push notifications in your app."
created_at: "2022-11-16"
published: true
slug: pushnotification
---

# Using the @up/push-notification Package

This tutorial will guide you through the process of integrating the `@up/push-notification` package into your app to handle push notifications.

## Installation

To get started, first install the package using npm:

```bash
npm install @up/push-notification
```

Next, synchronize the Capacitor project to ensure the changes are applied:

```bash
npx cap sync
```

## iOS Configuration

For iOS, you need to enable the Push Notifications capability. Follow these steps to enable the capability:

1. Open your Xcode project.
2. Go to the project settings by clicking on the project file in the project navigator.
3. Select your target in the TARGETS section.
4. Go to the "Signing & Capabilities" tab.
5. Click on the "+" button and search for "Push Notifications" in the list of capabilities.
6. Enable the Push Notifications capability.

After enabling the Push Notifications capability, add the following code to your app's `AppDelegate.swift` file:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
  NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
}
```

## Android Configuration

The `@up/push-notification` package uses the Firebase Cloud Messaging SDK for handling notifications on Android. Follow these steps to configure your Android app:

1. Create a Firebase project and register your application following the instructions provided by Firebase.
2. Obtain the `google-services.json` file from your Firebase project.
3. Add the `google-services.json` file to the module (app-level) directory of your Android app.

### Android Push Notifications Icon

To set the Push Notifications icon on Android, add the following code to your `AndroidManifest.xml` file:

```xml
<meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@mipmap/push_icon_name" />
```

Make sure to replace `push_icon_name` with the name of your custom icon file. If no icon is specified, Android will use the application icon.

## Conclusion

In this tutorial, you learned how to install and configure the `@up/push-notification` package for handling push notifications in your app. You configured the package for both iOS and Android platforms, enabling the necessary capabilities and adding the required code. Now you can implement push notification functionality in your app using the `@up/push-notification` package.