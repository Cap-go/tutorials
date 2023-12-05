---
title: "Using the capacitor-plugin-fcm Package"
description: "A tutorial on how to use the capacitor-plugin-fcm package to implement Firebase Cloud Messaging (FCM) in your Capacitor app."
created_at: "2022-03-28"
published: true
slug: "capacitor-fcm"
---

# Using the capacitor-plugin-fcm Package

In this tutorial, we will learn how to use the capacitor-plugin-fcm package to implement Firebase Cloud Messaging (FCM) in your Capacitor app. FCM allows you to send cross-platform push notifications to your app users and is the recommended solution for sending notifications in Capacitor apps.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project. If not, you can install it by running `npm install @capacitor/core`.
- An existing Capacitor project. If you don't have one, you can create a new project by running `npx @capacitor/cli create`.
- A Firebase project with FCM enabled. If you don't have one, you can create a new project in the Firebase console.

## iOS Setup

1. Install homebrew (if not already installed). You can follow the instructions [here](https://capacitorjs.com/docs/getting-started/environment-setup#homebrew).

2. Install cocoapods by running the following command in your terminal:

   ```shell
   brew install cocoapods
   ```

3. Navigate to your Capacitor project directory.

4. Create a `www` directory and an `index.html` file inside it:

   ```shell
   mkdir www && touch www/index.html
   ```

5. Add the iOS platform to your Capacitor project:

   ```shell
   npx cap add ios
   ```

6. Install the capacitor-plugin-fcm package in your project:

   ```shell
   npm install --save @capacitor-community/fcm
   ```

7. Sync the Capacitor configuration with the iOS project:

   ```shell
   npx cap sync ios
   ```

8. Open the iOS project in Xcode:

   ```shell
   npx cap open ios
   ```

9. In Xcode, sign your app by selecting your team in the General tab.

10. Enable remote notification capabilities by checking the "Remote notifications" option in the Signing & Capabilities tab.

11. Add the `GoogleService-Info.plist` file to the app folder in Xcode.

12. (Optional) Turn off swizzling in the `info.plist` file:
   
   ```xml
   <key>FirebaseAppDelegateProxyEnabled</key>
   <string>NO</string>
   ```

   This step is optional but recommended if you want to have finer control over the handling of notifications in your app.

## Android Setup

1. Navigate to your Capacitor project directory.

2. Create a `www` directory and an `index.html` file inside it:

   ```shell
   mkdir www && touch www/index.html
   ```

3. Add the Android platform to your Capacitor project:

   ```shell
   npx cap add android
   ```

4. Install the capacitor-plugin-fcm package in your project:

   ```shell
   npm install --save @capacitor-community/fcm
   ```

5. Sync the Capacitor configuration with the Android project:

   ```shell
   npx cap sync android
   ```

6. Open the Android project in Android Studio:

   ```shell
   npx cap open android
   ```

7. Add the `google-services.json` file to your `android/app` folder.

8. Now you should be set to go. Try running your client using the following command:

   ```shell
   ionic cap run android --livereload
   ```

   Remember to clean the project and rebuild it if you make any changes to the native code:

   - Click on "Build" in the menu.
   - Select "Clean Project" or "Rebuild Project".

## Prevent Auto Initialization

If you need to implement opt-in behavior for FCM, you can disable the auto initialization of the library. You can follow the [Firebase docs](https://firebase.google.com/docs/cloud-messaging/android/client#prevent-auto-init) for detailed instructions on how to do it for both iOS and Android.

## Example

For a working example of using the capacitor-plugin-fcm package in a Capacitor project, you can refer to the [official example repository](https://github.com/capacitor-community/fcm/tree/master/example).

## Conclusion

In this tutorial, we covered the steps to set up and use the capacitor-plugin-fcm package in your Capacitor project. You learned how to configure FCM for both iOS and Android platforms and how to prevent the auto initialization of FCM if needed. You also had a look at an example project to see the implementation in action. Now you can leverage the power of Firebase Cloud Messaging to send push notifications to your Capacitor app users.
