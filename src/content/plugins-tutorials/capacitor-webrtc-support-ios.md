---
title: "Using the capacitor-webrtc-support-ios Package"
description: "A tutorial on how to use the capacitor-webrtc-support-ios package to add WebRTC support to your Capacitor iOS app."
created_at: "2021-09-08"
published: true
slug: "capacitor-webrtc-support-ios"
---

# Using the capacitor-webrtc-support-ios Package

In this tutorial, we will learn how to integrate the capacitor-webrtc-support-ios package into your Capacitor iOS app. This package provides support for WebRTC functionality, allowing you to implement real-time communication features in your app.

## Step 1: Installation

To get started, install the capacitor-webrtc-support-ios package using npm:

```bash
npm install capacitor-webrtc-support-ios
```

## Step 2: Syncing the Project

After installing the package, use the following command to sync your project with Capacitor:

```bash
npx cap sync
```

## Step 3: Importing the Package

In your iOS project, open the `AppDelegate.swift` file and import the capacitor-webrtc-support-ios package:

```swift
import capacitor_webrtc_support_ios
```

## Step 4: Registering the Plugin

Inside the `application(_:didFinishLaunchingWithOptions:)` method of `AppDelegate.swift`, add the following code to register the plugin:

```swift
let bridge = CAPBridge.main()
bridge?.pluginManager?.register(CapacitorWebRTC.self)
```

## Step 5: Initializing WebRTC

To initialize WebRTC in your app, call the `CapacitorWebRTC.initialize()` method. You can do this in the `application(_:didFinishLaunchingWithOptions:)` method of `AppDelegate.swift` or any other appropriate place in your app:

```swift
CapacitorWebRTC.initialize()
```

## Step 6: Using WebRTC Functions

Once WebRTC is initialized, you can use various functions provided by the capacitor-webrtc-support-ios package. Some common functions include:

- `CapacitorWebRTC.createPeerConnection(configuration: RTCConfiguration)`: Creates a new WebRTC peer connection with the specified configuration.
- `CapacitorWebRTC.createOffer(sdpConstraints: RTCMediaConstraints)`: Creates an offer for establishing a connection.
- `CapacitorWebRTC.createAnswer(sdpConstraints: RTCMediaConstraints)`: Creates an answer to an incoming offer for establishing a connection.
- `CapacitorWebRTC.setRemoteDescription(description: RTCSessionDescription, completionHandler: ((Error?) -> Void)?)`: Sets the remote description for establishing a connection.
- `CapacitorWebRTC.addIceCandidate(candidate: RTCIceCandidate)`: Adds an ICE candidate for establishing a connection.

Refer to the capacitor-webrtc-support-ios documentation for a complete list of available functions and their usage.

## Conclusion

Congratulations! You have successfully integrated the capacitor-webrtc-support-ios package into your Capacitor iOS app. You can now utilize the WebRTC functionality in your app to implement real-time communication features.

Remember to refer to the capacitor-webrtc-support-ios documentation for more detailed information on advanced usage and additional configuration options. Happy coding!