---
"title": "Using @capacitor/watch Package Tutorial",
"description": "This tutorial will guide you through setting up and using the @capacitor/watch package to develop watch applications in Capacitor.",
"created_at": "2023-10-05",
"published": true,
"slug": "capacitorwatch.git"
---

# Using @capacitor/watch Package Tutorial

The Capacitor Watch plugin allows you to define a UI for a watch in your web code and show it on a paired watch. This tutorial will take you through the process of setting up and using the @capacitor/watch package to develop watch applications in Capacitor.

## Getting Started

Step 1: Add the watch plugin to your Capacitor project and open the Xcode project:

```bash
npm install @capacitor/watch
npx cap sync
npx cap open ios
```

Step 2: Add Capabilities to your Xcode project:

1. Go to add capabilities.
2. Add the 'Background Modes' and 'Push Notification' capabilities.
3. Select 'Background Fetch', 'Remote Notifications', and 'Background Processing' under Background Modes.
4. Ensure your App target capabilities look as shown in the example.

Step 3: Update `AppDelegate.swift`:

Add the following code inside the `application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?)` method:

```swift
assert(WCSession.isSupported(), "This sample requires Watch Connectivity support!")
WCSession.default.delegate = CapWatchSessionDelegate.shared
WCSession.default.activate()
```

## Adding Code to the Watch Application

### Xcode 15 Beta 4 or Beyond:

1. Add the Capacitor Watch Swift Package from your node_modules.
2. Navigate to the project package dependencies and choose 'Add Local'.
3. Navigate into the `node_modules/@capacitor/watch/CapWatch-Watch-SPM` folder and click 'Add Package'.
4. Select your watch app as the target and click 'Add Package'.

### Xcode 14:

1. Copy all the files from the provided link into your Watch project.
2. Make sure the target selected is your watch app.

## Setting Up the Watch Application

1. Open the watch app's 'Main' file (`watchappApp.swift`).
2. Add `import WatchConnectivity` above the `@main` statement.
3. Replace the line `ContentView()` with the provided code snippet.

## Enabling Background Modes

Add the 'Background Modes' capability to the watch app target and enable 'Remote Notifications'.

## Development Workflow

You can develop your iOS app like a normal Capacitor app, but running on the watch requires changing the target and destination in Xcode. Use the 'Target Dropdown' near the center-top of Xcode to make the necessary selections.

This tutorial provides a comprehensive guide to getting started with the @capacitor/watch package and developing watch applications in Capacitor.