---
title: "Using @pdutt111/watch-connectivity Package"
description: "A tutorial on how to use the @pdutt111/watch-connectivity package for watchOS development"
created_at: "2021-09-30"
published: true
slug: "watch-connectivity"
---

# Using @pdutt111/watch-connectivity Package

Watch connectivity is an important aspect of watchOS development, allowing you to establish communication between your iPhone app and Apple Watch app. In this tutorial, we will explore how to use the @pdutt111/watch-connectivity package to enable seamless communication between your iPhone and Apple Watch apps.

## Prerequisites

Before we begin, make sure you have the following in place:

- Xcode installed on your development machine
- Capacitor and Ionic set up in your project
- An iPhone and Apple Watch paired with each other

## Installation

To get started, install the @pdutt111/watch-connectivity package in your Capacitor project. Open a terminal window and run the following command:

```
npm install @pdutt111/watch-connectivity
```

## Setting up the Watch App

1. Open your Capacitor project in Xcode.
2. Navigate to the `watchappApp.swift` file in the Watch App target.
3. Add the following line at the top of the file to import the WatchConnectivity module:

```swift
import WatchConnectivity
```

4. Replace the line with `ContentView()` with the following code:

```swift
CapWatchContentView()
    .onAppear {
        assert(WCSession.isSupported(), "This sample requires Watch Connectivity support!")
        WCSession.default.delegate = WatchViewModel.shared
        WCSession.default.activate()
    }
```

This code ensures that Watch Connectivity is supported and activates the default session with the shared delegate.

## Adding Background Modes

To enable communication between the iPhone and Apple Watch apps, you need to add the "Background Modes" capability to the Watch App target. Follow these steps:

1. Select the Watch App target in Xcode.
2. Go to the "Signing & Capabilities" tab.
3. Click the "+ Capability" button.
4. Search for "Background Modes" and select it.
5. Enable the "Remote Notifications" option.

## Building the Watch UI

To display the UI on the Apple Watch, you need to define the watch UI using a string format. Here's an example of a simple watch UI:

```typescript
const watchUI = `Text("Welcome to Capacitor Watch App")
                 Button("Send Message", "sendMessage")`;
```

In this example, we have a Text component displaying a welcome message and a Button component that sends a message when tapped.

To update the watch UI, use the `updateWatchUI()` method provided by the @pdutt111/watch-connectivity package. Here's an example:

```typescript
import { Watch } from '@pdutt111/watch-connectivity';

async function updateWatchUI() {
    const watchUI = `Text("Welcome to Capacitor Watch App")
                     Button("Send Message", "sendMessage")`;

    await Watch.updateWatchUI({ watchUI });
}
```

The `updateWatchUI()` method takes an object with a `watchUI` property containing the string-defined watch UI. Call this method whenever you want to update the UI on the Apple Watch.

## Communicating Between the iPhone and Apple Watch Apps

The @pdutt111/watch-connectivity package provides methods to send and receive messages between the iPhone and Apple Watch apps.

To send a message from the iPhone app to the Apple Watch app, use the `sendMessage()` method:

```typescript
import { Watch } from '@pdutt111/watch-connectivity';

async function sendMessage() {
    const message = { text: 'Hello from iPhone' };

    await Watch.sendMessage({ message });
}
```

In this example, we create a message object with a `text` property and send it to the Apple Watch using the `sendMessage()` method.

To receive a message in the iPhone app from the Apple Watch app, use the `addListener()` method:

```typescript
import { Watch } from '@pdutt111/watch-connectivity';

Watch.addListener('messageReceived', (data) => {
    const message = data.message;
    console.log(`Received message from Watch: ${message}`);
});
```

In this example, we listen for the `messageReceived` event and log the received message to the console.

## Conclusion

In this tutorial, we learned how to use the @pdutt111/watch-connectivity package to enable watch connectivity in your Capacitor project. We covered the installation process, setting up the Watch App, adding background modes, building the watch UI, and communicating between the iPhone and Apple Watch apps. With this package, you can easily establish seamless communication and enhance the functionality of your watchOS app.

Happy development!