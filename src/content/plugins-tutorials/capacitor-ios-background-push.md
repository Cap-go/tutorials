---
title: "Tutorial: Using @exxili/capacitor-ios-background-push Package"
description: "This tutorial will guide you through the steps of using the @exxili/capacitor-ios-background-push package for handling background push notifications in Capacitor iOS apps."
created_at: "2022-02-24"
published: true
slug: "capacitor-ios-background-push"
---

# Tutorial: Using @exxili/capacitor-ios-background-push Package

In this tutorial, we will go through the process of integrating and using the @exxili/capacitor-ios-background-push package in a Capacitor iOS app. This package allows you to handle background push notifications in your app, enabling you to perform actions or update content even when your app is not active.

## Prerequisites

Before we begin, please make sure you have the following:

- [Homebrew](https://brew.sh/) installed
- [CocoaPods](https://cocoapods.org/) installed
- An existing Capacitor iOS app or a new Capacitor project set up

## Installation

1. Open a terminal and navigate to your Capacitor iOS project directory.

2. Install the @exxili/capacitor-ios-background-push package using npm or yarn:

   ```bash
   npm install @exxili/capacitor-ios-background-push
   ```

3. Link the package to your iOS project by running the following command:

   ```bash
   npx cap sync ios
   ```

4. Open your iOS project in Xcode by running the following command:

   ```bash
   npx cap open ios
   ```

5. In Xcode, navigate to the **Signing & Capabilities** tab for your target. Make sure you have a valid signing identity and enable the **Remote notifications** capability.

6. Back in the terminal, perform a clean build of your iOS project to ensure the changes are applied:

   ```bash
   npx cap open ios
   ```

## Implementing the Background Push Notification Handler

To handle background push notifications, you will need to make some modifications to your app's code.

1. In your app's entry file (e.g., `src/App.tsx` or `src/main.ts`), import the `CapacitorIOSBackgroundPush` package:

   ```typescript
   import { CapacitorIOSBackgroundPush } from '@exxili/capacitor-ios-background-push';
   ```

2. Register the background push notification handler in your app's initialization code. This is typically done in the `initializeApp` function or a similar entry point:

   ```typescript
   const initializeApp = () => {
     // Other initialization code...

     CapacitorIOSBackgroundPush.registerNotificationHandler((notification) => {
       // Handle the received background push notification here
       console.log('Received background push notification:', notification);
     });

     // Other initialization code...
   };
   ```

3. Implement the necessary handling logic inside the notification handler. This could include updating your app's state, displaying a local notification, or fetching new content.

   ```typescript
   CapacitorIOSBackgroundPush.registerNotificationHandler((notification) => {
     // Handle the received background push notification here
     console.log('Received background push notification:', notification);

     // Example: Update app's state with the received data
     setState((prevState) => ({
       ...prevState,
       notificationData: notification.data,
     }));

     // Example: Display a local notification
     createLocalNotification(notification.title, notification.body);

     // Example: Fetch new content
     fetchNewContent(notification.data.articleId);
   });
   ```

4. Build and run your app to test the background push notification handling.

## Preventing Auto Initialization

By default, the @exxili/capacitor-ios-background-push package automatically initializes itself when your app launches. However, if you need to implement opt-in behavior for background push notifications, you can disable the auto initialization.

To prevent auto initialization, follow the steps provided in the [Firebase documentation](https://firebase.google.com/docs/cloud-messaging/ios/client#prevent_auto_initialization).

## Conclusion

Congratulations! You have successfully integrated and used the @exxili/capacitor-ios-background-push package for handling background push notifications in your Capacitor iOS app. You can now perform actions or update content in response to background push notifications, even when your app is not active.

Remember to refer to the official documentation of the @exxili/capacitor-ios-background-push package for more detailed information on its usage and configuration.

Happy coding!