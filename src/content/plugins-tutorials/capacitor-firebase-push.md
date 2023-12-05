---
title: "Using capacitor-firebase-push-fix"
description: "A tutorial on how to use the capacitor-firebase-push-fix package to enable push notifications in Capacitor"
created_at: "2022-09-20"
published: true
slug: "capacitor-firebase-push"
---

# Using capacitor-firebase-push-fix

In this tutorial, we will learn how to use the `capacitor-firebase-push-fix` package to enable push notifications in Capacitor.

## Prerequisites

Before we begin, make sure you have the following:

1. Capacitor project set up
2. Firebase project created with Firebase Cloud Messaging enabled
3. Basic knowledge of JavaScript and Capacitor

## Installation

To get started, install the `capacitor-firebase-push-fix` package by running the following command:

```bash
npm install capacitor-firebase-push-fix
```

## Configuration

### 1. Android Configuration

#### Download google-services.json File

Download the `google-services.json` file from your Firebase project and place it in the `android/app` directory of your Capacitor project.

#### Update AndroidManifest.xml

Add the following meta-data inside the `<application>` tag of your `AndroidManifest.xml` file:

```xml
<meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@drawable/ic_stat_notification" />
<meta-data android:name="com.google.firebase.messaging.default_notification_channel_id" android:value="your_channel_id" />
```

Replace `your_channel_id` with the ID of your notification channel.

#### Add CapacitorFirebaseMessagingService

To receive notifications in the foreground, background, and when the app has been killed, add the following service declaration to your `AndroidManifest.xml` file:

```xml
<service android:name="com.getcapacitor.CapacitorFirebaseMessagingService" android:exported="false">
  <intent-filter>
    <action android:name="com.google.firebase.MESSAGING_EVENT" />
  </intent-filter>
</service>
```

### 2. iOS Configuration

#### Add GoogleService-Info.plist

Download the `GoogleService-Info.plist` from your Firebase project and add it to the root folder of your Xcode project.

#### Update AppDelegate.swift

Add the following code to your `AppDelegate.swift` file:

```swift
import UIKit
import Capacitor
import CapacitorFirebasePushFix

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

  var window: UIWindow?

  func application(_ application: UIApplication,
                   didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // Initialize Capacitor
    let capacitor = CAPBridgeViewController()
    // Add CapacitorFirebasePushFix plugin
    capacitor.add(plugin: FirebasePushFix.self)
    // Set the bridge to use
    CAPBridgeToUse = capacitor
    return true
  }

  // rest of the AppDelegate.swift code...

}
```

## Usage

Now that the package is installed and configured, let's see how to use it to enable push notifications in your Capacitor app.

### 1. Request Notification Permissions

To request notification permissions from the user, use the `FirebasePushFix.requestPermission()` method. You can call this method wherever you want, for example, in your app's initialization code:

```typescript
import { Plugins } from '@capacitor/core';
const { FirebasePushFix } = Plugins;

// Request notification permissions
FirebasePushFix.requestPermission();
```

### 2. Handling Received Notifications

To handle received push notifications, add an event listener for the `pushNotificationReceived` event:

```typescript
import { Plugins } from '@capacitor/core';
const { FirebasePushFix } = Plugins;

// Add event listener for push notifications
FirebasePushFix.addListener('pushNotificationReceived', (notification) => {
  console.log('Received notification:', notification);
});
```

### 3. Sending a Test Notification

To test push notifications, you can use Firebase Cloud Messaging console or a tool like Postman to send a test notification to your app. Make sure to include the necessary payload for the notification.

## Conclusion

In this tutorial, we learned how to use the `capacitor-firebase-push-fix` package to enable push notifications in Capacitor. We covered the installation, configuration for both Android and iOS, and usage of the package to request notification permissions and handle received notifications.

Now you can enhance your Capacitor app with push notification functionality!

Note: Don't forget to handle the received notifications according to your app's requirements.

Happy coding!