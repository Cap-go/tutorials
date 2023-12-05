---
title: "Using the capacitor-background-fcm package"
description: "A tutorial on how to use the capacitor-background-fcm package to handle background push notifications in Capacitor apps."
created_at: "2022-01-01"
published: true
slug: "capacitor-background-fcm"
---

# Using the capacitor-background-fcm package

In this tutorial, we will learn how to use the capacitor-background-fcm package to handle background push notifications in Capacitor apps. The capacitor-background-fcm package provides a simple way to receive and handle push notifications even when the app is in the background or closed.

## Installation

To get started, let's install the capacitor-background-fcm package into our Capacitor project. Run the following command in your project directory:

```bash
npm install capacitor-background-fcm
```

## Setup Firebase

1. Create a new Firebase project or use an existing one.
2. Go to the Firebase console and add an Android app for your project.
3. Follow the instructions to download the google-services.json file for your Android app.
4. Move the google-services.json file to the `android/app` directory in your Capacitor project.
5. Add the following lines to your `android/app/build.gradle` file:

```groovy
apply plugin: 'com.google.gms.google-services'
```

6. Add the following lines to your `android/build.gradle` file:

```groovy
dependencies {
    // Add this line
    implementation 'com.google.firebase:firebase-messaging:23.1.0'
}
```

7. Sync your project with Gradle.

## Setup iOS

1. Add your iOS app to your Firebase project.
2. Follow the instructions to download the `GoogleService-Info.plist` file for your iOS app.
3. Move the `GoogleService-Info.plist` file to the root of your Xcode project.
4. Open your Xcode project and go to the project settings.
5. Add the following lines to your Info.plist file:

```xml
<key>FirebaseAppDelegateProxyEnabled</key>
<string>NO</string>
```

6. Ensure that the Capabilities tab in Xcode has Push Notifications enabled.

## Configuring the capacitor-background-fcm package

1. Open the `capacitor.config.json` file in your Capacitor project.
2. Add the following lines to the plugins section of the file:

```json
"Plugins": {
    "BackgroundFetch" : {
        "appId": "YOUR_APP_ID"
    }
}
```

Replace `YOUR_APP_ID` with your Firebase project's app ID.

3. Save the `capacitor.config.json` file.

## Handling background push notifications

To handle background push notifications, you can use the `CapacitorBackgroundFCM.addListener` method to add a listener for the `pushNotificationReceived` event. Here's an example:

```javascript
import { CapacitorBackgroundFCM } from 'capacitor-background-fcm';

CapacitorBackgroundFCM.addListener('pushNotificationReceived', (notification) => {
  console.log('Push Notification Received', notification);
  // Handle the push notification here
});
```

With this listener in place, you will be able to receive and handle push notifications even when your app is in the background or closed.

## Conclusion

In this tutorial, we learned how to use the capacitor-background-fcm package to handle background push notifications in Capacitor apps. We covered the installation process, setting up Firebase, configuring the package, and handling background push notifications. This package provides a convenient way to ensure that your users receive important notifications even when they are not actively using your app.