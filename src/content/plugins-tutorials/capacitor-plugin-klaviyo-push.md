---
title: "Using capacitor-plugin-klaviyo-push"
description: "A tutorial on how to use the capacitor-plugin-klaviyo-push package to integrate Klaviyo push notifications in your Capacitor project."
created_at: "2021-09-15"
published: true
slug: "capacitor-plugin-klaviyo-push"
---

# Using capacitor-plugin-klaviyo-push

In this tutorial, we will learn how to use the `capacitor-plugin-klaviyo-push` package to integrate Klaviyo push notifications into your Capacitor project. Klaviyo is a customer engagement platform that allows you to send targeted and personalized push notifications to your app users.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI: You can install it globally using the following command:

  ```shell
  npm install -g @capacitor/core @capacitor/cli
  ```

- Capacitor project: Create a new Capacitor project or use an existing one.

## Step 1: Installing the Plugin

To install the `capacitor-plugin-klaviyo-push` package, run the following command inside your Capacitor project:

```shell
npm install capacitor-plugin-klaviyo-push
```

## Step 2: iOS Configuration

To configure the plugin for iOS, follow these steps:

1. Open the `ios/App/App/AppDelegate.swift` file in your Xcode project.

2. Add the following import statement at the top of the file:

   ```swift
   import KlaviyoPushNotifications
   ```

3. In the `application(_:didFinishLaunchingWithOptions:)` method, add the following code to initialize the Klaviyo push notifications:

   ```swift
   KlaviyoPushNotifications.shared.start(appKey: "YOUR_APP_KEY")
   ```

   Replace `YOUR_APP_KEY` with your actual Klaviyo app key.

4. Save the changes and build your iOS app.

## Step 3: Android Configuration

To configure the plugin for Android, follow these steps:

1. Open the `android/app/src/main/java/.../MainActivity.java` file in your Android Studio project.

2. Add the following import statement at the top of the file:

   ```java
   import com.klaviyo.capacitor.KlaviyoPushNotifications;
   ```

3. In the `onCreate()` method, add the following code to initialize the Klaviyo push notifications:

   ```java
   KlaviyoPushNotifications.start(this, "YOUR_APP_KEY");
   ```

   Replace `YOUR_APP_KEY` with your actual Klaviyo app key.

4. Save the changes and build your Android app.

## Step 4: Registering for Push Notifications

To register your app users for push notifications with Klaviyo, you need to obtain their push notification tokens and pass them to Klaviyo. Here's how:

1. Import the `PushNotifications` class from the `capacitor-plugin-klaviyo-push` package:

   ```javascript
   import { Plugins } from '@capacitor/core';
   const { PushNotifications } = Plugins;
   ```

2. Request the user's permission to receive push notifications. You can use the `register()` method to do that:

   ```javascript
   PushNotifications.register();
   ```

   This will ask the user for permission and register their device token with Klaviyo.

3. To handle incoming push notifications, you can use the `addListener()` method:

   ```javascript
   PushNotifications.addListener('pushNotificationReceived', (notification) => {
     // Handle the received notification
   });
   ```

   Inside the callback function, you can handle the received push notification data as per your application's requirements.

That's it! You have successfully integrated Klaviyo push notifications into your Capacitor project using the `capacitor-plugin-klaviyo-push` package.

Remember to test your push notifications on real devices to ensure everything is working as expected.

Happy coding!