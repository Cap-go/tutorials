---
title: "Using Azure Push Notifications with Capacitor"
description: "A step-by-step tutorial on how to use the @mfbhatt/azure-push-notifications package with Capacitor to implement push notifications in your mobile app."
created_at: "2021-10-15"
published: true
slug: "capacitor-azure-push-notifications"
---

# Using Azure Push Notifications with Capacitor

In this tutorial, we will learn how to integrate Azure Push Notifications into a Capacitor application using the @mfbhatt/azure-push-notifications package. This will enable your mobile app to receive push notifications from Azure Notification Hub.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Node.js and npm
- Capacitor CLI
- Azure Subscription
- Capacitor project set up

## Step 1: Install the Package

To get started, open your terminal and navigate to your Capacitor project directory. Then, run the following command to install the @mfbhatt/azure-push-notifications package:

```sh
npm install @mfbhatt/azure-push-notifications
```

Make sure to also install the required dependencies by running the following command:

```sh
npm install @capacitor/push-notifications
```

Once the package and dependencies are installed, run the command below to sync the Capacitor project:

```sh
npx cap sync
```

## Step 2: Set up Push Notifications on iOS

On iOS, you need to enable the Push Notifications capability and make some modifications to the AppDelegate.swift file. Follow the steps below:

1. Enable the Push Notifications capability in Xcode. Refer to the [Setting Capabilities](https://capacitorjs.com/docs/ios/configuration#setting-capabilities) documentation for detailed instructions.

2. Open the `ios/App/App/AppDelegate.swift` file in your Xcode project and add the following code inside the `AppDelegate` class:

```swift
import UIKit
import Capacitor

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    // ...

    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
    }

    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
    }

    // ...

}
```

## Step 3: Set up Push Notifications on Android

On Android, the Push Notifications API uses Firebase Cloud Messaging (FCM) for handling notifications. Follow the steps below:

1. Create a Firebase project and register your application with Firebase Cloud Messaging. Refer to the [Set up a Firebase Cloud Messaging client app on Android](https://firebase.google.com/docs/cloud-messaging/android/client) documentation for detailed instructions.

2. Add your Firebase project's `google-services.json` file to the `android/app` directory of your Capacitor project.

## Step 4: Configure Push Notification Variables

The @mfbhatt/azure-push-notifications package requires the following project variables to be defined in your app's `variables.gradle` file:

- `azureNotificationHubName`: The name of your Azure Notification Hub.
- `azureNotificationConnectionString`: The connection string for your Azure Notification Hub.
- `deviceTag`: The tag to identify the device for receiving push notifications.

Make sure to define these variables in your project's `variables.gradle` file.

## Step 5: Request Permissions and Register for Push Notifications

In your Capacitor project's main JavaScript file, import the necessary modules and add the following code to request permissions and register for push notifications:

```javascript
import { AzurePushNotifications } from '@mfbhatt/azure-push-notifications';

// ...

AzurePushNotifications.requestPermissions().then(() => {
  AzurePushNotifications.register({
    notificationHubName: '<azureNotificationHubName>',
    connectionString: '<azureNotificationConnectionString>',
    deviceTag: '<deviceTag>',
  }).then(() => {
    console.log('Push registration success');
  }).catch((error) => {
    console.error('Push registration error', error);
  });
}).catch((error) => {
  console.error('Error requesting push permissions', error);
});
```

Replace the placeholders (`<azureNotificationHubName>`, `<azureNotificationConnectionString>`, `<deviceTag>`) with the corresponding values from your Azure Notification Hub configuration.

## Step 6: Handle Push Notifications

You can listen for push notifications and handle them in your application using event listeners. Add the following code to your main JavaScript file:

```javascript
import { AzurePushNotifications } from '@mfbhatt/azure-push-notifications';

// ...

AzurePushNotifications.addListener('pushNotificationReceived', (notification) => {
  console.log('Push notification received', notification);
});

AzurePushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
  console.log('Push notification action performed', notification);
});
```

You can customize the behavior of your application when a push notification is received or when a user interacts with the notification by handling the events.

## Conclusion

In this tutorial, we have learned how to integrate Azure Push Notifications into a Capacitor application using the @mfbhatt/azure-push-notifications package. We covered the steps to install the package, configure the required variables, and handle push notifications on both iOS and Android.

By following this tutorial, you should now be able to implement push notifications in your Capacitor mobile app using Azure Notification Hub.