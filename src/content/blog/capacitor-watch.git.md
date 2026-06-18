---
"title": "Using @capgo/capacitor-watch Package",
"description": "This tutorial will guide you through using the @capgo/capacitor-watch package to integrate watch functionalities in your Capacitor project.",
"created_at": "2022-01-10",
"published": true,
"slug": "capacitor-watch.git"
---

# Using @capgo/capacitor-watch Package

The @capgo/capacitor-watch package allows you to enhance your Capacitor project by enabling seamless integration with wearables. This guide will walk you through the steps of incorporating this package into your project to leverage watch functionalities.

## Step 1: Installation

To get started, add the @capgo/capacitor-watch package to your Capacitor project by running the following commands:

```bash
npm install @capgo/capacitor-watch
npx cap sync
npx cap open ios
```

## Step 2: Adding Capabilities

Navigate to your Xcode project and add the necessary capabilities to enable watch functionalities. Follow these steps:

1. Open the 'Capabilities' tab in your Xcode project.
2. Add the 'Background Modes' and 'Push Notification' capabilities.
3. In the 'Background Modes' section, select 'Background Fetch', 'Remote Notifications', and 'Background Processing'.

## Step 3: Updating AppDelegate.swift

In your `AppDelegate.swift` file, import `WatchConnectivity` and `CapacitorWatch` at the top and add the following code snippet inside the `application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?)` method:

```swift
assert(WCSession.isSupported(), "This sample requires Watch Connectivity support!")
WCSession.default.delegate = CapWatchSessionDelegate.shared
WCSession.default.activate()
```

## Step 4: Adding Watch Target

Create a new target in Xcode for the watchOS app. Follow these steps:

1. Select `File -> New -> Target` in Xcode.
2. Choose the watchOS tab and select 'App'.
3. Fill out the target options as shown in the dialog.

## Step 5: Adding the Watch Code

Incorporate the necessary code to make the Capacitor Watch functionality work in your watch application. Depending on your Xcode version, follow the respective instructions provided in the @capgo/capacitor-watch documentation.

## Step 6: Finalization

1. Add the 'Background Modes' capability to the watch app target and enable 'Remote Notifications'.
2. Ensure that your development environment is set up to run the watch app in conjunction with the main iOS app. Use the 'Target Dropdown' in Xcode to make the necessary selections.

By following these steps, you can seamlessly integrate the @capgo/capacitor-watch package into your Capacitor project and leverage watch functionalities effectively.
