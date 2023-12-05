---
title: "Using the Fractel Push Notifications Package"
description: "A tutorial on how to use the Fractel Push Notifications package to implement push notifications in your app."
created_at: "2023-12-14"
published: true
slug: "fractel-push-notifications"
---

# Using the Fractel Push Notifications Package

In this tutorial, we will guide you through the process of using the Fractel Push Notifications package to implement push notifications in your app. Push notifications allow you to send messages and updates to your app users, even when the app is not actively running.

## Prerequisites

Before we get started, make sure you have the following set up:

- Capacitor installed in your project
- Firebase project created and configured for push notifications

Now let's dive into the steps involved in integrating push notifications using the Fractel Push Notifications package.

## Step 1: Install the Package

In your project directory, install the Fractel Push Notifications package using the following command:

```shell
npm install fractel-push-notifications
```

## Step 2: Configure Firebase

To use push notifications, you need to configure Firebase for your project. Follow the instructions provided by Fractel Push Notifications to set up Firebase and obtain the necessary configuration files.

## Step 3: Set up Capacitor

Next, we need to set up Capacitor for push notifications. Open your **AppDelegate.swift** file and make the following modifications:

1. Import the Firebase module:

   ```swift
   import Firebase
   ```

2. Add the Firebase configure line in the `didFinishLaunchingWithOptions` function:

   ```swift
   FirebaseApp.configure()
   ```

3. Add the following two functions at the bottom of the file:

   ```swift
   func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        Messaging.messaging().apnsToken = deviceToken
        Messaging.messaging().token(completion: { (token, error) in
            if let error = error {
                NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
            } else if let token = token {
                NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: token)
            }
        })
    }

    func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
        NotificationCenter.default.post(name: Notification.Name.init("didReceiveRemoteNotification"), object: completionHandler, userInfo: userInfo)
    }
   ```

4. Update your `Info.plist` file and add the following key:

   ```xml
   <key>FirebaseAppDelegateProxyEnabled</key>
   <string>NO</string>
   ```

## Step 4: Implement Push Notifications

Now, let's implement push notifications in your app. Import the Fractel Push Notifications package and initialize it in your app's entry file (usually **index.ts** or **main.ts**):

```typescript
import { FractelPushNotifications } from 'fractel-push-notifications';

// Initialize the FractelPushNotifications instance
const pushNotifications = new FractelPushNotifications();

// Register for push notifications
pushNotifications.register().then((token) => {
  console.log('Successfully registered for push notifications');
  console.log('Token:', token);
}).catch((error) => {
  console.error('Failed to register for push notifications:', error);
});

// Handle incoming push notifications
pushNotifications.addListener('pushNotificationReceived', (notification) => {
  console.log('Push notification received:', notification);
});

// Handle notification opened event
pushNotifications.addListener('pushNotificationOpened', (notification) => {
  console.log('Push notification opened:', notification);
});
```

## Step 5: Customize Push Notification Appearance (iOS)

If you want to customize the way push notifications appear when the app is in the foreground on iOS, you can configure the presentation options in your **capacitor.config.ts** file. The presentationOptions property should be an array of strings that can be combined. The possible values are:

- `badge`: Updates the badge count on the app icon.
- `sound`: Triggers device ring/vibration when a push notification is received.
- `alert`: Displays the push notification in a native dialog.

For example, to enable badge updates and sound, your **capacitor.config.ts** file should include the following configuration:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // Other configuration options...

  plugins: {
    FractelPushNotifications: {
      presentationOptions: ['badge', 'sound'],
    },
  },
};

export default config;
```

## Conclusion

Congratulations! You have successfully integrated push notifications using the Fractel Push Notifications package. You can now send notifications to your app users and enhance their experience with real-time updates. If you encounter any issues or have further questions, refer to the Fractel Push Notifications documentation for more information.