---
title: "Using @haylltd/capacitor-push-notifications Package"
description: "A tutorial on how to use the @haylltd/capacitor-push-notifications package to implement push notifications in your Capacitor app."
created_at: "2022-10-15"
published: true
slug: "capacitor-push-notifications"
---

# Using @haylltd/capacitor-push-notifications Package

In this tutorial, we will learn how to use the @haylltd/capacitor-push-notifications package to implement push notifications in your Capacitor app. Push notifications are a powerful way to engage with your app users by sending them timely and relevant messages.

## Installation

The first step is to install the @haylltd/capacitor-push-notifications package. Open your terminal and run the following command:

```bash
npm install @haylltd/capacitor-push-notifications
```

Next, sync the Capacitor project with the newly installed package by running the following command:

```bash
npx cap sync
```

## iOS Configuration

On iOS, you need to enable the Push Notifications capability for your app. Here's how you can do it:

1. Open Xcode and open your project.
2. Select the target for your app.
3. Go to the "Signing & Capabilities" tab.
4. Click the "+" button, search for "Push Notifications" and add it to your app's capabilities.

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

The Push Notifications API relies on Firebase Cloud Messaging (FCM) for handling notifications on Android. Here's how you can configure FCM for your app:

1. Create a Firebase project and register your application. Follow the instructions in the [Set up a Firebase Cloud Messaging client app on Android](https://firebase.google.com/docs/cloud-messaging/android/client) guide.
2. Download the `google-services.json` file from your Firebase project.
3. Add the `google-services.json` file to the `app` directory of your Android project.

### Adding Push Notifications Icon

To specify a custom icon for push notifications on Android, you need to add the following code to the `AndroidManifest.xml` file:

```xml
<meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@mipmap/push_icon_name" />
```

Remember to replace `push_icon_name` with the name of your custom push notifications icon.

## Conclusion

In this tutorial, we learned how to use the @haylltd/capacitor-push-notifications package to implement push notifications in your Capacitor app. We covered the installation process, configuration steps for both iOS and Android, and how to specify a custom icon for push notifications on Android.

Push notifications can significantly enhance the user experience of your app by sending important updates and messages directly to your users. By following this tutorial, you should now have the knowledge to successfully integrate push notifications into your Capacitor app using the @haylltd/capacitor-push-notifications package.

Remember to refer to the official documentation of the package for more advanced features and customization options. Happy coding!