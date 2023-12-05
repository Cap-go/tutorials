---
title: "Using My-Cap-Firebase Plugin"
description: "This tutorial will guide you through the process of using the My-Cap-Firebase plugin to integrate Firebase services in your Capacitor project."
created_at: "2022-05-10"
published: true
slug: "capacitor_firebase_plugin"
---

# Using My-Cap-Firebase Plugin

This tutorial will guide you through the process of using the My-Cap-Firebase plugin to integrate Firebase services in your Capacitor project.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor installed
- Firebase account
- Android project setup in your Capacitor project (if you plan to use the plugin on Android)
- iOS project setup in your Capacitor project (if you plan to use the plugin on iOS)

## Step 1: Installation

To install the My-Cap-Firebase plugin, run the following command:

```bash
npm install --save my-cap-firebase
```

## Step 2: Configuration

### Android

#### Download google-services.json

Download the `google-services.json` file from your Firebase project console. Then, move the file into your Capacitor Android project directory, specifically under `android/app/`.

#### Update AndroidManifest.xml

Add the following details in your `AndroidManifest.xml` file under the `<application>` tag:

```xml
<meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="---Account Id---" />
<meta-data android:name="PLUMB5_API_KEY" android:value="---App Key---" />
<meta-data android:name="PLUMB5_BASE_URL" android:value="---Base URL---" />
```

#### Update the changes

Run the following command to update the changes in your Capacitor project:

```bash
ionic cap sync
```

### iOS

#### Download GoogleService-Info.plist

Download the `GoogleService-Info.plist` file provided by Firebase to your local machine.

#### Add GoogleService-Info.plist

Move the `GoogleService-Info.plist` file into your Xcode project. Ensure that the file is added to all targets of your app.

#### Add Firebase SDK via CocoaPods

To add the Firebase SDK via CocoaPods, modify the `Podfile` located in Xcode under `Pods`.

Add the following line to your target 'App' section:

```bash
pod 'Firebase/Messaging'
```

Then, run the following command to update the project:

```bash
ionic cap update ios
```

#### Add Firebase Initialization Code

To connect to Firebase when your iOS app starts up, add the following code to your `AppDelegate.swift` file:

```bash
// Add this code to your AppDelegate.swift file

```

### Prevent Auto Initialization

If you need to implement opt-in behavior, you can disable the auto initialization of the library. Please refer to the Firebase documentation for instructions on how to do this.

## Step 3: Usage

Once the plugin is installed and configured, you can use it to integrate various Firebase services in your Capacitor project. Refer to the documentation of the My-Cap-Firebase plugin for details on how to use specific Firebase services.

## Conclusion

In this tutorial, you learned how to use the My-Cap-Firebase plugin to integrate Firebase services in your Capacitor project. You installed the plugin, configured it for Android and iOS, and explored how to use it to integrate Firebase services. Now you can take advantage of the power and features offered by Firebase in your Capacitor app.

Happy coding!