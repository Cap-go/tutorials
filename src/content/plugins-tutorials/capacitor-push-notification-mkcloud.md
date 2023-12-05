---
title: "Using @agomezmart/push-notifications Package"
description: "This tutorial will guide you through the process of using the @agomezmart/push-notifications package for implementing push notifications in your Capacitor app."
created_at: "2022-09-28"
published: true
slug: capacitor-push-notification-mkcloud
---

# Using @agomezmart/push-notifications Package

In this tutorial, we will walk through the steps to use the @agomezmart/push-notifications package to implement push notifications in your Capacitor app. This package provides access to native push notifications functionality and is built on top of the official Capacitor Push Notifications plugin.

## Installation

To get started, follow the steps below to install the @agomezmart/push-notifications package and sync your Capacitor project:

```bash
npm install @agomezmart/push-notifications
npx cap sync
```

## Configuration

### iOS

First, make sure you have enabled the Push Notifications capability for your iOS app. You can refer to the Capacitor documentation on how to enable capabilities for iOS.

Next, open your app's `AppDelegate.swift` file and add the following code:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
  NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
}
```

### Android

For Android, the @agomezmart/push-notifications package uses the Firebase Cloud Messaging SDK for handling notifications. You need to create a Firebase project and register your application following the instructions provided by Firebase.

You also need to add your Firebase project's `google-services.json` file to the module (app-level) directory of your app.

### Push Notifications Appearance

To customize the appearance of push notifications in the foreground, you can modify the following variables in your app's `variables.gradle` file:

- `$firebaseMessagingVersion`: Version of `com.google.firebase:firebase-messaging` (default: `23.0.5`)

## Push Notifications Icon

To set a custom icon for your push notifications on Android, you can add the following metadata to your `AndroidManifest.xml` file:

```xml
<meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@mipmap/push_icon_name" />
```

Make sure to replace `push_icon_name` with the appropriate name of your push notification icon file. It's recommended to provide a separate icon for push notifications that has white pixels on a transparent backdrop.

## Conclusion

By following the steps outlined in this tutorial, you should now be able to use the @agomezmart/push-notifications package to implement push notifications in your Capacitor app. Remember to consult the package documentation and the official Capacitor Push Notifications plugin documentation for any additional configuration or usage details.