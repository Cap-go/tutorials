---
title: "Using wollfish-firebase-iam-plugin Package"
description: "A tutorial on how to use the wollfish-firebase-iam-plugin package to integrate Firebase into your Capacitor application."
created_at: "2022-10-05"
published: true
slug: "firebase-iam"
---

# Using wollfish-firebase-iam-plugin Package

This tutorial will guide you through the process of integrating Firebase into your Capacitor application using the wollfish-firebase-iam-plugin package. Firebase provides a set of powerful tools and services for building cross-platform applications, and the wollfish-firebase-iam-plugin package makes it easy to incorporate Firebase functionalities into your Capacitor project.

## Prerequisites
Before starting with the integration, make sure you have the following prerequisites:
- A Capacitor application set up.
- The Capacitor CLI installed.
- An existing Firebase project.
- The google-services.json file for Android and the GoogleService-Info.plist file for iOS.

## Step 1: Add the Plugin
First, install the wollfish-firebase-iam-plugin package by running the following command in your Capacitor project directory:

```bash
npm install wollfish-firebase-iam-plugin
```

## Step 2: Android Configuration
For Android, you need to add the google-services.json file to your project. Here's how:

1. Download the google-services.json file for your Firebase project.
2. Move the google-services.json file to the `android/app/` directory of your Capacitor project.

Next, update the AndroidManifest.xml file as follows:

```xml
<application>
  <!-- Other application settings -->
  <meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="---Account Id---" />
  <meta-data android:name="PLUMB5_API_KEY" android:value="---App Key---" />
  <meta-data android:name="PLUMB5_BASE_URL" android:value="---Base URL---" />
</application>
```

Don't forget to replace `---Account Id---`, `---App Key---`, and `---Base URL---` with your actual values.

Finally, sync the changes by running the following command:

```bash
ionic cap sync
```

## Step 3: iOS Configuration
For iOS, you need to add the GoogleService-Info.plist file to your project. Here's how:

1. Download the GoogleService-Info.plist file for your Firebase project.
2. Move the GoogleService-Info.plist file to the root folder of your Xcode project. Make sure to add it to all targets.

Next, open your `Info.plist` file in Xcode and add the following entries:

```xml
<key>PLUMB5_ACCOUNT_ID</key>
<string>---Account Id---</string>
<key>PLUMB5_API_KEY</key>
<string>---App Key---</string>
<key>PLUMB5_BASE_URL</key>
<string>---Base URL---</string>
```

Replace `---Account Id---`, `---App Key---`, and `---Base URL---` with your actual values.

## Step 4: Firebase SDK Setup (iOS only)
To setup the Firebase SDK for iOS, follow these steps:

1. In Xcode, open the `Podfile` located in the `Pods` directory.
2. Add `pod 'Firebase/Messaging'` to your target 'App' section in the `Podfile`.
3. Save the `Podfile` and run `ionic cap update ios` in your Capacitor project directory.

## Step 5: Initialize Firebase
To connect to Firebase on app startup, add the following code to your `AppDelegate.swift` file:

```swift
import Firebase

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    FirebaseApp.configure()
    // Other initialization code
    return true
  }
  
  // Other AppDelegate methods
}
```

## Step 6: Test the Integration
After completing the above steps, you can now test the Firebase integration in your Capacitor application. You can use Firebase functionalities like authentication, database, cloud messaging, and more based on your requirements.

## Conclusion
In this tutorial, you learned how to integrate Firebase into your Capacitor application using the wollfish-firebase-iam-plugin package. By following these steps, you can unlock powerful Firebase functionalities and services in your cross-platform app. Enjoy building amazing applications with Firebase and Capacitor!

Remember to always refer to the official documentation of Firebase and the wollfish-firebase-iam-plugin for detailed usage instructions and additional features.

Happy coding!