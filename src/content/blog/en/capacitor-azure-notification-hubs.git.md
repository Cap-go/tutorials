---
title: Using Capacitor Azure Notification Hubs Package Tutorial
description: >-
  A step-by-step guide on how to use the
  @jonz94/capacitor-azure-notification-hubs package in your Capacitor projects.
created_at: '2023-12-15'
published: true
slug: capacitor-azure-notification-hubs
locale: en
---

## Install

To use the @jonz94/capacitor-azure-notification-hubs package in your Capacitor project, follow these steps:

```shell
npm install @jonz94/capacitor-azure-notification-hubs @capacitor/push-notifications
npx cap sync
```

## iOS Configuration

1. Enable the Push Notifications capability on iOS.
   - Follow the [Setting Capabilities](https://capacitorjs.com/docs/ios/configuration#setting-capabilities) guide.

2. Add the following lines to `ios/App/App/AppDelegate.swift`:
```swift
import UIKit
import Capacitor

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
    }

    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
    }

    // ...
}
```

## Android Configuration

1. Utilize Firebase Cloud Messaging for handling notifications.
   - Set up a Firebase project following [Firebase Cloud Messaging on Android](https://firebase.google.com/docs/cloud-messaging/android/client).
   - Add your Firebase project's `google-services.json` file to the module (app-level) directory of your app.

That's it! You have successfully integrated Azure Notification Hubs into your Capacitor project.
```
