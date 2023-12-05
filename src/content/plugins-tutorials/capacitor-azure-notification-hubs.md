---
title: "Using @jonz94/capacitor-azure-notification-hubs Package"
description: "A step-by-step tutorial on how to use the @jonz94/capacitor-azure-notification-hubs package to register push notifications in your Capacitor app."
created_at: "2023-10-19"
published: true
slug: capacitor-azure-notification-hubs
---

# Using @jonz94/capacitor-azure-notification-hubs Package

In this tutorial, we will learn how to use the `@jonz94/capacitor-azure-notification-hubs` package to register push notifications in your Capacitor app. 

## Prerequisites

Before we begin, please make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org)
- [Capacitor](https://capacitorjs.com)

## Installation

Open your terminal and navigate to your Capacitor project directory. Run the following command to install the package:

```shell
npm install @jonz94/capacitor-azure-notification-hubs @capacitor/push-notifications
npx cap sync
```

This command will install the `@jonz94/capacitor-azure-notification-hubs` package and its dependencies, as well as synchronize any changes to the Capacitor platform.

## iOS Setup

To enable push notifications on iOS, you need to follow these steps:

1. Enable the Push Notifications capability in your Xcode project. You can do this by opening your project in Xcode, selecting the target, and enabling the Push Notifications capability in the "Signing & Capabilities" section.

2. Open your `ios/App/App/AppDelegate.swift` file and add the following code:

```swift
import UIKit
import Capacitor

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Add your existing code here
        // ...
    }

    // Add the following methods

    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
    }
    
    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
    }

}
```

Replace the existing `AppDelegate` class with the code provided. This code handles the registration and failure events for remote notifications.

## Android Setup

To enable push notifications on Android, you need to follow these steps:

1. Ensure that you have set up your Firebase project and have the `google-services.json` file ready. You can refer to the [Set up a Firebase Cloud Messaging client app on Android](https://firebase.google.com/docs/cloud-messaging/android/client) guide for detailed instructions.

2. Open your `android/app/src/main/java/[YOUR_APP_ID]/MainActivity.java` file and add the following code:

```java
import com.getcapacitor.community.pushnotifications.PushNotificationsPlugin;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Initialize your existing plugins here
        // ...

        // Add the following line
        registerPlugin(PushNotificationsPlugin.class);
    }
}
```

Replace `[YOUR_APP_ID]` with your app's ID.

## Registering for Push Notifications

With the package installed and the necessary setup complete, you can now register your app for push notifications. Here's an example of how you can do it:

```typescript
import { Plugins } from '@capacitor/core';

const { AzureNotificationHubs, PushNotifications } = Plugins;

// Obtain device token by requesting permission and registering
PushNotifications.requestPermission().then(() => {
  PushNotifications.register();
});

// Once registered, retrieve the device token
PushNotifications.addListener('registration', ({ value }) => {
  const deviceToken = value.token;

  // Use the device token to register with Azure Notification Hubs
  AzureNotificationHubs.register({ connectionString: 'YOUR_CONNECTION_STRING', hubName: 'YOUR_HUB_NAME', deviceToken })
    .then(() => {
      // Registration successful
    })
    .catch((error) => {
      // Registration failed
    });
});
```

Make sure to replace `'YOUR_CONNECTION_STRING'` and `'YOUR_HUB_NAME'` with your Azure Notification Hubs connection string and hub name.

Congratulations! You have successfully integrated push notifications using the `@jonz94/capacitor-azure-notification-hubs` package in your Capacitor app.

## Conclusion

In this tutorial, we have learned how to use the `@jonz94/capacitor-azure-notification-hubs` package to register push notifications in a Capacitor app. We covered the installation process, iOS and Android setup, and how to register for push notifications. Now you can easily add push notifications to your Capacitor app and keep your users engaged with timely updates and notifications.