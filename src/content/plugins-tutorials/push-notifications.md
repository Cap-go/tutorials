---
title: "Using the push-notifications-ios-fix Package"
description: "This tutorial explains how to use the push-notifications-ios-fix package to enable push notifications in your iOS app."
created_at: "2022-08-15"
published: true
slug: "push-notifications"
---

# Using the push-notifications-ios-fix Package

This tutorial will guide you through the process of setting up and using the push-notifications-ios-fix package to enable push notifications in your iOS app.

## Installation

First, you need to install the `push-notifications-ios-fix` package. Open your terminal and run the following commands:

```bash
npm i push-notifications-ios-fix
npx cap sync
```

## iOS Configuration

To enable push notifications in your iOS app, you need to follow these steps:

### Step 1: Enable Push Notifications Capability

In Xcode, open your project and go to the **Signing & Capabilities** tab. Enable the **Push Notifications** capability.

### Step 2: Add Code to AppDelegate.swift

Open your app's `AppDelegate.swift` file and add the following code:

```swift
import Firebase

...

func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
  NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
}

func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
  NotificationCenter.default.post(name: Notification.Name.init("didReceiveRemoteNotification"), object: completionHandler, userInfo: userInfo)
}

...

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  FirebaseApp.configure()
  // Add any additional setup code here
  return true
}
```

### Step 3: Update Info.plist

Open your app's `Info.plist` file and add the following entry:

```xml
<key>FirebaseAppDelegateProxyEnabled</key>
<string>NO</string>
```

## Configuring Push Notifications Appearance

You can configure how push notifications are displayed when the app is in the foreground. Open your `capacitor.config.ts` file and add the following code:

```typescript
...

config: {
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
},

...
```

This configuration will set the presentation options to display the badge count, play a sound, and show an alert for incoming push notifications while the app is in the foreground.

## Conclusion

In this tutorial, you have learned how to use the push-notifications-ios-fix package to enable push notifications in your iOS app. You have also learned how to configure the appearance of push notifications when the app is in the foreground. Now you can implement push notifications in your iOS app and keep your users engaged with your app's updates and alerts.