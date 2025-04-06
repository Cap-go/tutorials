---
title: "Using @capacitor/watch Package Tutorial"
description: "A step-by-step tutorial on how to use the @capacitor/watch package to develop UI for Apple Watch in your web code and display it on a paired watch."
created_at: "2022-01-05"
published: true
slug: "capacitorwatch.git"
---

# Using @capacitor/watch Package Tutorial

The Capacitor Watch plugin allows you to define a UI for a watch in your web code and show it on a paired watch. This tutorial will guide you through the process of setting up and using the @capacitor/watch package to develop for Apple Watch.

## Step 1: Install @capacitor/watch Package

First, add the watch plugin to your Capacitor project and open the Xcode project:

```bash
npm install @capacitor/watch
npx cap sync
npx cap open ios
```

## Step 2: Add Capabilities

1. Go to the project capabilities in Xcode.
2. Add the 'Background Modes' and 'Push Notification' capabilities.
3. Under Background Modes, select 'Background Fetch', 'Remote Notifications', and 'Background Processing'.
4. Your App target capabilities should now include these options.

## Step 3: Update AppDelegate.swift

1. Open `AppDelegate.swift` in Xcode.
2. Add `import WatchConnectivity` and `import CapactiorWatch` to the top of the file.
3. Add the following code inside the `application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?)` method:

```swift
assert(WCSession.isSupported(), "This sample requires Watch Connectivity support!")
WCSession.default.delegate = CapWatchSessionDelegate.shared
WCSession.default.activate()
```

## Step 4: Add Watch App Target

1. Select File -> New -> Target in Xcode.
2. Choose the watchOS tab and select 'App'.
3. Fill out the options with your app details, making sure the Bundle Identifier is `[your apps bundle ID].watchapp`, and SwiftUI is selected for the Interface.

## Step 5: Add Capacitor Watch Swift Package

If you are using Xcode 15 Beta 4 or beyond:

1. Go to the project package dependencies.
2. Choose 'Add Local' and navigate to `node_modules/@capacitor/watch/CapWatch-Watch-SPM` folder.
3. Click 'Add Package' and select your watch app as the target.

For Xcode 14:

1. Copy all the files from https://github.com/ionic-team/CapacitorWatch/tree/main/packages/iOS-capWatch-watch/Sources/iOS-capWatch-watch into your Watch project.

## Step 6: Update Watch App 'Main' file

1. Open the watch app's 'Main' file (usually `watchappApp.swift`).
2. Add `import WatchConnectivity` above the `@main` statement.
3. Replace `ContentView()` with the following code snippet:

```swift
CapWatchContentView()
    .onAppear {
        assert(WCSession.isSupported(), "This sample requires Watch Connectivity support!")
        WCSession.default.delegate = WatchViewModel.shared
        WCSession.default.activate()
    }
```

## Step 7: Enable Background Modes

Add the 'Background Modes' capability to the watch app target and enable 'Remote Notifications'.

You should now be ready to develop for Capacitor Watch following these steps!