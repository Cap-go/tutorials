---
title: "Using Twilio iOS Capacitor Package"
description: "A tutorial on how to use the twilio-ios-capacitor package in your iOS app."
created_at: "2021-09-30"
published: true
slug: twilio-ios-capacitor
---

# Using Twilio iOS Capacitor Package

This tutorial will guide you through the process of integrating the twilio-ios-capacitor package into your iOS app. Twilio is a cloud communication platform that provides APIs for sending and receiving messages, making and receiving calls, and more. The twilio-ios-capacitor package allows you to easily access Twilio APIs in your Capacitor app.

## Prerequisites

Before you begin, make sure you have the following:

1. Xcode installed on your development machine.
2. An active Twilio account. You can sign up for a free account at [twilio.com](https://www.twilio.com/).
3. A basic understanding of Capacitor and iOS development.

## Step 1: Install the twilio-ios-capacitor package

To install the twilio-ios-capacitor package, run the following command in your Capacitor project directory:

```bash
npm install twilio-ios-capacitor
```

## Step 2: Sync the Capacitor project

After installing the package, sync your Capacitor project to update the native iOS code:

```bash
npx cap sync
```

## Step 3: Configure the Twilio plugin

Open your project in Xcode and navigate to the AppDelegate.swift file. Add the following import statement at the top of the file:

```swift
import Twilio
```

In the `application(_:didFinishLaunchingWithOptions:)` method, add the following line to configure the Twilio plugin:

```swift
Twilio.sharedInstance.start(withAccessToken: "YOUR_ACCESS_TOKEN")
```

Replace "YOUR_ACCESS_TOKEN" with your Twilio access token, which you can obtain from your Twilio account dashboard.

## Step 4: Use Twilio APIs in your app

You can now use the Twilio APIs in your app. Here are a few examples:

### Sending an SMS message

```swift
import Twilio

func sendMessage(to phoneNumber: String, with body: String) {
    let parameters = [
        "to": phoneNumber,
        "body": body
    ]
    
    Twilio.sharedInstance.sendMessage(parameters) { result in
        switch result {
        case .success(let message):
            print("Message sent successfully: \(message.sid)")
        case .failure(let error):
            print("Failed to send message: \(error.localizedDescription)")
        }
    }
}
```

### Making a voice call

```swift
import Twilio

func makeCall(to phoneNumber: String, from callerId: String) {
    let parameters = [
        "to": phoneNumber,
        "from": callerId
    ]
    
    Twilio.sharedInstance.makeCall(parameters) { result in
        switch result {
        case .success(let call):
            print("Call initiated successfully: \(call.sid)")
        case .failure(let error):
            print("Failed to make call: \(error.localizedDescription)")
        }
    }
}
```

### Generating an access token

```swift
import Twilio

func generateAccessToken(for identity: String) {
    let parameters = [
        "identity": identity
    ]
    
    Twilio.sharedInstance.generateAccessToken(parameters) { result in
        switch result {
        case .success(let token):
            print("Access token generated successfully: \(token)")
        case .failure(let error):
            print("Failed to generate access token: \(error.localizedDescription)")
        }
    }
}
```

These are just a few examples of what you can do with the twilio-ios-capacitor package. Refer to the package's documentation for a complete list of available APIs and their usage.

## Conclusion

In this tutorial, you learned how to integrate the twilio-ios-capacitor package into your iOS app and use Twilio APIs for sending messages, making calls, and generating access tokens. With Twilio, you can easily add powerful communication capabilities to your Capacitor app. Happy coding!