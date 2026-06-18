---
"title": "Using @capacitor/watch Package Tutorial",
"description": "This tutorial will guide you on how to use the @capacitor/watch package to define a UI for a watch in your web code and display it on a paired watch for iOS applications. This guide assumes you have already added iOS to your capacitor project.",
"created_at": "2022-01-12",
"published": true,
"slug": "capacitorwatch.git"
---

# Using @capacitor/watch Package Tutorial

The Capacitor Watch plugin allows you to define a UI for a watch in your web code and show it on a paired watch.

This currently only supports iOS. This guide assumes you've already added iOS to your capacitor project.

Also note - all of this will only work with an actual Apple Watch. Simulators don't allow the app<->watch communcation like real devices do.

## Install

Step 1

Add the watch plugin to your capacitor project, and then open the Xcode project:

```bash
npm install @capacitor/watch
npx cap sync
npx cap open ios
```

Step 2

Go to add capabilities:

![Add Capabilities](https://raw.githubusercontent.com/ionic-team/CapacitorWatch/main/img/add-capability.png)

Add the 'Background Modes' and 'Push Notification' capabilities. Then in the Background Modes options, select 'Background Fetch', 'Remote Notifications', and 'Background Processing'. Your App target should look like this:

![Final Capabilities](https://raw.githubusercontent.com/ionic-team/CapacitorWatch/main/img/capabilities-final.png)

Step 3

Open `AppDelegate.swift` and add `import WatchConnectivity`  and `import CapacitorWatch` to the top of the file, and the following code inside the `application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?)` method:

```swift
assert(WCSession.isSupported(), "This sample requires Watch Connectivity support!")
WCSession.default.delegate = CapWatchSessionDelegate.shared
WCSession.default.activate()
```

Step 4

Select File -> New -> Target in Xcode, and then the watchOS tab, and 'App':

![New Target](https://raw.githubusercontent.com/ionic-team/CapacitorWatch/main/img/target-watch.png)

Click 'Next' then fill out the options like so:

![Target Options](https://raw.githubusercontent.com/ionic-team/CapacitorWatch/main/img/watch-target-options.png)

Step 5

We're going to add the code that makes Capacitor Watch work in the watch application.
...
... (More detailed steps as mentioned in the context)
...
```