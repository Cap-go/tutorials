---
title: "Using Capacitor Firebasex Package"
description: "A tutorial on how to use the capacitor-firebasex package in your Capacitor app."
created_at: "2022-08-30"
published: true
slug: capacitorfirebase
---

# Using Capacitor Firebasex Package

In this tutorial, we will learn how to integrate and use the capacitor-firebasex package in your Capacitor app. The capacitor-firebasex package allows you to easily add Firebase functionality, such as push notifications and analytics, to your app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- Capacitor project setup

## Step 1: Install capacitor-firebasex package

To start using the capacitor-firebasex package, you need to install it in your Capacitor project. Open your project directory in the terminal and run the following command:

```bash
npm install --save capacitor-firebasex
```

## Step 2: Android Setup

For Android, you need to download the `google-services.json` file from Firebase and add it to your Capacitor Android project. Move the downloaded file to the `android/app/` directory of your project.

Next, open the `AndroidManifest.xml` file in your Capacitor Android project and add the following details inside the `<application>` tag:

```xml
<meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="---Account Id------" />
<meta-data android:name="PLUMB5_API_KEY" android:value="---App Key------" />
<meta-data android:name="PLUMB5_BASE_URL" android:value="---Base URL------" />
```

Save the file and run the following command to sync the changes:

```bash
npx cap sync
```

## Step 3: iOS Setup

For iOS, you need to download the `GoogleService-Info.plist` file from Firebase. Move the downloaded file to your Xcode project. Make sure to add the file to all targets of your project.

Next, open the `Info.plist` file in your Xcode project and add the following details:

```bash
"PLUMB5_ACCOUNT_ID" = "---Account Id------"
"PLUMB5_API_KEY" = "---App Key------"
"PLUMB5_BASE_URL" = "---Base URL------"
```

## Step 4: Add Firebase SDK via CocoaPods

To use push notifications on iOS, you need to add the Firebase SDK via CocoaPods. Open the `Podfile` in your Xcode project, find the target 'App', and add the following line inside the target:

```bash
pod 'Firebase/Messaging'
```

Save the file and run the following command to update the project:

```bash
npx cap update ios
```

## Step 5: Firebase Initialization Code

To connect to Firebase when your iOS app starts up, you need to add the following code to your `AppDelegate.swift` file:

```swift
import Firebase

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  FirebaseApp.configure()
  return true
}
```

## Step 6: Using Capacitor Firebasex Package

Now that you have set up the capacitor-firebasex package, you can start using Firebase functionality in your Capacitor app. Here are some examples of how to use the package:

### Push Notifications

To handle push notifications, you can use the `CapacitorFirebaseMessaging` plugin. It provides methods for registering and handling push notifications. Here's an example of how to register for push notifications:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorFirebaseMessaging } = Plugins;

...

CapacitorFirebaseMessaging.register()
  .then(() => {
    console.log('Push notifications registered');
  })
  .catch((error) => {
    console.error('Failed to register push notifications', error);
  });
```

### Analytics

To track user events and behaviors in your app, you can use the `CapacitorFirebaseAnalytics` plugin. It provides methods for logging custom events and setting user properties. Here's an example of how to log a custom event:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorFirebaseAnalytics } = Plugins;

...

CapacitorFirebaseAnalytics.logEvent('button_click', {
  button_name: 'Login',
});
```

These are just a few examples of what you can do with the capacitor-firebasex package. The package provides many more functionalities, such as cloud messaging, crash reporting, and remote config. Refer to the package documentation for more details.

## Conclusion

In this tutorial, we learned how to integrate and use the capacitor-firebasex package in a Capacitor app. We covered the setup process for both Android and iOS platforms and demonstrated how to use push notifications and analytics functionality. With capacitor-firebasex, you can easily add powerful Firebase features to your Capacitor app.