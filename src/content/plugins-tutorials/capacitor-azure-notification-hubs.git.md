```markdown
---
"title": "How to Use @jonz94/capacitor-azure-notification-hubs Package",
"description": "Step-by-step guide on utilizing the @jonz94/capacitor-azure-notification-hubs package for integrating push notifications in Capacitor applications.",
"created_at": "2022-01-10",
"published": true,
"slug": "capacitor-azure-notification-hubs.git"
---

# Using @jonz94/capacitor-azure-notification-hubs

## Introduction

In this tutorial, you will learn how to integrate push notifications in Capacitor applications using the @jonz94/capacitor-azure-notification-hubs package.

## Installation

To get started, install the necessary packages by running the following command:

```shell
npm install @jonz94/capacitor-azure-notification-hubs @capacitor/push-notifications
npx cap sync
```

## Setting Up on iOS

1. Enable the Push Notifications capability in your iOS project.
2. Add the following lines to the AppDelegate.swift file:
   
```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
}
```

## Setting Up on Android

1. Set up a Firebase Cloud Messaging project and register your application.
2. Add your Firebase project's google-services.json file to the app-level directory of your Android project.

## Conclusion

Congratulations! You have successfully set up push notifications in your Capacitor application using the @jonz94/capacitor-azure-notification-hubs package.
```
```