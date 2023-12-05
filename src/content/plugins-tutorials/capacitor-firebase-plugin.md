---
title: "Using the capacitor-firebase-plugin Package"
description: "A tutorial on how to use the capacitor-firebase-plugin package with Capacitor"
created_at: "2021-09-20"
published: true
slug: capacitor-firebase-plugin
---

# Using the capacitor-firebase-plugin Package

The `capacitor-firebase-plugin` is a plugin that allows you to integrate Firebase Cloud Messaging (FCM) functionality into your Capacitor app. FCM enables you to send push notifications to your app users and handle incoming messages. This tutorial will guide you through the setup and usage of the `capacitor-firebase-plugin`.

## Installation

Before you begin, make sure you have the following installed:

- [Homebrew](https://capacitorjs.com/docs/getting-started/environment-setup#homebrew) (only for iOS setup)
- [CocoaPods](https://cocoapods.org/) (only for iOS setup)
- [Android Studio](https://developer.android.com/studio) (for Android setup)
- [Node.js](https://nodejs.org/en/) (with `npm` or `yarn`)

### iOS Setup

1. Install Homebrew if you haven't already. Open Terminal and run the following command:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Install CocoaPods using Homebrew:
   ```bash
   brew install cocoapods
   ```

3. Create a new Capacitor project and navigate into its directory:
   ```bash
   ionic start my-cap-app --capacitor
   cd my-cap-app
   ```

4. Create a `www` directory and an `index.html` file inside it:
   ```bash
   mkdir www && touch www/index.html
   ```

5. Add the iOS platform to your project:
   ```bash
   npx cap add ios
   ```

6. Install the `capacitor-firebase-plugin` package:
   ```bash
   npm install --save @capacitor-community/fcm
   ```

7. Synchronize your Capacitor project with the iOS platform:
   ```bash
   npx cap sync ios
   ```

8. Open your Capacitor iOS project in Xcode:
   ```bash
   npx cap open ios
   ```

9. In Xcode, select your app's target and go to the **Signing & Capabilities** tab. Sign your app and enable remote notification capabilities.

10. Add the `GoogleService-Info.plist` file to the app folder in Xcode. This file contains your Firebase configuration.

11. _(Optional)_ If you want to disable swizzling, open the `info.plist` file in Xcode and add the following key-value pair:
    ```xml
    <key>FirebaseAppDelegateProxyEnabled</key>
    <string>NO</string>
    ```

### Android Setup

1. Create a new Capacitor project and navigate into its directory:
   ```bash
   ionic start my-cap-app --capacitor
   cd my-cap-app
   ```

2. Create a `www` directory and an `index.html` file inside it:
   ```bash
   mkdir www && touch www/index.html
   ```

3. Add the Android platform to your project:
   ```bash
   npx cap add android
   ```

4. Install the `capacitor-firebase-plugin` package:
   ```bash
   npm install --save @capacitor-community/fcm
   ```

5. Synchronize your Capacitor project with the Android platform:
   ```bash
   npx cap sync android
   ```

6. Open your Capacitor Android project in Android Studio:
   ```bash
   npx cap open android
   ```

7. Add the `google-services.json` file to the `android/app` directory. This file contains your Firebase configuration.

## Usage

Now that you have set up the `capacitor-firebase-plugin` in your Capacitor project, you can start using its features.

### Handling Push Notifications

To handle incoming push notifications in your app, you can listen for the `pushNotificationReceived` event. Below is an example of how you can listen for notifications in your app's `index.ts` (or any other relevant file):

```typescript
import { Plugins } from '@capacitor/core';

const { FCMPlugin } = Plugins;

FCMPlugin.addListener('pushNotificationReceived', (notification: any) => {
  // Handle the received notification here
  console.log('Received push notification:', notification);
});
```

### Sending Push Notifications

To send push notifications to your app users, you will need to use Firebase Cloud Messaging (FCM). You can refer to the [Firebase Cloud Messaging documentation](https://firebase.google.com/docs/cloud-messaging) for more information on how to send push notifications.

### Prevent Auto Initialization

By default, the `capacitor-firebase-plugin` initializes automatically. However, if you need to implement opt-in behavior, you can disable the auto initialization. Refer to the Firebase documentation for [iOS](https://firebase.google.com/docs/cloud-messaging/ios/client#prevent_auto_initialization) and [Android](https://firebase.google.com/docs/cloud-messaging/android/client#prevent_auto_init) for instructions on how to prevent auto initialization.

## Example

You can find an example usage of the `capacitor-firebase-plugin` in the [official Capacitor FCM example](https://github.com/capacitor-community/fcm/tree/master/example).

## Conclusion

In this tutorial, we have explored the setup and usage of the `capacitor-firebase-plugin` package with Capacitor. You have learned how to integrate Firebase Cloud Messaging functionality into your app, handle incoming push notifications, and send notifications to your app users. Feel free to experiment with different features and explore the capabilities of the `capacitor-firebase-plugin` in your own projects!

