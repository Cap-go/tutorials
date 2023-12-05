---
title: "Getting Started with @capacitor/watch"
description: "A step-by-step tutorial on how to use the @capacitor/watch package to create a watch UI in your iOS app."
created_at: "2021-09-26"
published: true
slug: capacitorwatch
---

# Getting Started with @capacitor/watch

In this tutorial, we will guide you through the process of integrating the @capacitor/watch package into your iOS app to create a watch UI. The @@@capacitor/watch package allows you to define a UI for a watch in your web code and show it on a paired watch. Please note that this package currently only supports iOS and requires an actual Apple Watch.

## Installation

To get started, you need to follow these steps:

### Step 1: Add the @capacitor/watch plugin

First, add the @capacitor/watch plugin to your Capacitor project by running the following command:

```bash
npm install @capacitor/watch
```

Next, sync your Capacitor project to update the native dependencies by running the following command:

```bash
npx cap sync
```

Finally, open your Xcode project:

```bash
npx cap open ios
```

### Step 2: Configure capabilities in Xcode

In Xcode, go to the capabilities section of your app target. Add the following capabilities:

- 'Background Modes': Enable the 'Background Fetch', 'Remote Notifications', and 'Background Processing' options.
- 'Push Notification': Enable this capability as well.

Your App target's capabilities should now look like this:

<img src="https://raw.githubusercontent.com/ionic-team/CapacitorWatch/main/img/capabilities-final.png" />

### Step 3: Add code in AppDelegate.swift

Open the `AppDelegate.swift` file in your Xcode project and add the following import statements at the top of the file:

```swift
import WatchConnectivity
import CapactiorWatch
```

Next, add the following code inside the `application(_:didFinishLaunchingWithOptions:)` method:

```swift
assert(WCSession.isSupported(), "This sample requires Watch Connectivity support!")
WCSession.default.delegate = CapWatchSessionDelegate.shared
WCSession.default.activate()
```

### Step 4: Create a watchOS target

In Xcode, select 'File' > 'New' > 'Target'. Choose the watchOS tab and select 'App'. Click 'Next' and fill out the options as follows:

- Bundle Identifier: Your app's bundle ID followed by ".watchapp" (e.g., com.example.myapp.watchapp)
- Interface: SwiftUI
- Language: Swift
- Project: App

Click 'Finish' to create the watchOS target.

### Step 5: Add Capacitor Watch code to the watch app

#### Xcode 15 Beta 4 or beyond

If you are using Xcode 15 Beta 4 or a newer version, you need to add the Capacitor Watch Swift Package from your node_modules. Follow these steps:

1. Go to the project package dependencies in your watch app target.
2. Choose 'Add Local'.
3. Navigate to the `node_modules/@capacitor/watch/CapWatch-Watch-SPM` folder and click 'Add Package'.
4. In the column on the right, pick your watch app as the target and click 'Add Package'.

Your package dependencies should now include the Capacitor Watch Swift Package.

#### Xcode 14

If you are using Xcode 14, copy all the files from the [iOS-capWatch-watch](https://github.com/ionic-team/CapacitorWatch/tree/main/packages/iOS-capWatch-watch/Sources/iOS-capWatch-watch) folder in the Capacitor Watch repository and add them to your watch app target in Xcode.

### Step 6: Modify watchappApp.swift

Open the 'watchappApp.swift' file in your watch app target. Add the following import statement at the top of the file:

```swift
import WatchConnectivity
```

Replace the line that says `ContentView()` with the following code:

```swift
CapWatchContentView()
    .onAppear {
        assert(WCSession.isSupported(), "This sample requires Watch Connectivity support!")
        WCSession.default.delegate = WatchViewModel.shared
        WCSession.default.activate()
    }
```

### Step 7: Add Background Modes capability to the watch app target

In Xcode, go to the capabilities section of your watch app target. Enable the 'Background Modes' capability and enable the 'Remote Notifications' option.

You are now ready to develop for Capacitor Watch in your iOS app!

## Development Workflow

To develop your iOS app with Capacitor Watch, follow these steps:

1. Develop your iOS app as you would for a normal Capacitor app.
2. Change the target and destination in Xcode to run your app on the paired watch. Use the 'Target Dropdown' near the top-center of Xcode to select your watch app target.

Remember to have an actual Apple Watch for the app-to-watch communication to work correctly.

That's it! You have now learned how to integrate the @capacitor/watch package into your iOS app to create a watch UI. Happy coding!