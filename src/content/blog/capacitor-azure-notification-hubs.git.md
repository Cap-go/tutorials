```markdown
---
title: "Using Capacitor Azure Notification Hubs Plugin"
description: "A tutorial on how to use the @jonz94/capacitor-azure-notification-hubs package for registering push notifications"
created_at: "2021-11-24"
published: true
slug: "capacitor-azure-notification-hubs.git"
---

# Using Capacitor Azure Notification Hubs Plugin

This tutorial will guide you on how to use the @jonz94/capacitor-azure-notification-hubs package to register push notifications in your Capacitor project.

## Installation

To get started, install the package using npm:

```shell
npm install @jonz94/capacitor-azure-notification-hubs @capacitor/push-notifications
npx cap sync
```

## Configuration

### iOS

1. Enable the Push Notifications capability in Xcode.
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

### Android

1. Create a Firebase project and add `google-services.json` to your app's module directory.

## Variables

This plugin uses project variables defined in your app's `variables.gradle` file.

That's it! You have successfully integrated the Capacitor Azure Notification Hubs plugin for push notifications in your Capacitor project.
```
```