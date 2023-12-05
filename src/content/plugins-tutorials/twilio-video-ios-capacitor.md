---
title: "Using twilio-video-ios-capacitor Package"
description: "A tutorial on how to use the twilio-video-ios-capacitor package for integrating Twilio video functionality into your iOS apps using Capacitor"
created_at: "2021-11-08"
published: true
slug: twilio-video-ios-capacitor
---

# Using twilio-video-ios-capacitor Package

In this tutorial, we will walk through the process of integrating Twilio video functionality into your iOS apps using the `twilio-video-ios-capacitor` package. This package allows you to easily incorporate video calling features into your Capacitor project, leveraging the Twilio Video API.

## Prerequisites

Before getting started, make sure you have the following:

- An existing Capacitor project set up.
- A Twilio account. If you don't have one, you can sign up for free at [https://www.twilio.com/](https://www.twilio.com/).
- Xcode installed on your development machine.

## Step 1: Installation

To install the `twilio-video-ios-capacitor` package, follow these steps:

1. Open your Capacitor project's root directory in the terminal.
2. Run the following command to install the package via npm:

```bash
npm install twilio-video-ios-capacitor --save
```

3. Sync the package with your Capacitor project:

```bash
npx cap sync
```

## Step 2: Configure Twilio API Credentials

To use the Twilio video functionality, you need to configure your API credentials. Follow these steps:

1. Log in to your Twilio account.
2. Navigate to the Twilio Console's **Programmable Video** section.
3. Create a new project or select an existing one.
4. Retrieve your Account SID and Auth Token from the project settings.
5. Open your Capacitor project's **ios/App/App/Info.plist** file in Xcode.
6. Add the following keys and values to the plist file:

```xml
<key>TwilioAccountSid</key>
<string>YOUR_TWILIO_ACCOUNT_SID</string>
<key>TwilioAuthToken</key>
<string>YOUR_TWILIO_AUTH_TOKEN</string>
```

Replace `YOUR_TWILIO_ACCOUNT_SID` and `YOUR_TWILIO_AUTH_TOKEN` with your actual Twilio credentials.

## Step 3: Implement Video Calling

With the package installed and credentials configured, you can now implement video calling functionality in your app. Here's an example of how to use the `twilio-video-ios-capacitor` package:

```swift
// Import the TwilioVideo module
import TwilioVideo

// Create a TwilioVideoManager instance
let videoManager = TwilioVideoManager()

// Connect to a room
videoManager.connectToRoom(
    roomName: "my-room",
    accessToken: "YOUR_TWILIO_ACCESS_TOKEN",
    completionHandler: { result in
        switch result {
        case .success(let room):
            print("Connected to room: \(room.name)")
            // Handle video call logic
        case .failure(let error):
            print("Failed to connect to room: \(error.localizedDescription)")
            // Handle error case
        }
    }
)

// Disconnect from the room
videoManager.disconnectFromRoom()
```

Replace `YOUR_TWILIO_ACCESS_TOKEN` with a valid Twilio Video Access Token generated on your backend server.

## Conclusion

In this tutorial, we learned how to integrate Twilio video functionality into your iOS apps using the `twilio-video-ios-capacitor` package. We covered the installation process, configuring Twilio API credentials, and implementing video calling in your app. With this knowledge, you can enhance your apps with real-time video communication capabilities. Happy coding!

Remember to consult the official documentation of the `twilio-video-ios-capacitor` package for more detailed information and additional features.