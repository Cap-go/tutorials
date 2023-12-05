---
title: "Using @salurusrinivasarao/emarsys-sdk-wrapper-plugin"
description: "A tutorial on how to use the @salurusrinivasarao/emarsys-sdk-wrapper-plugin package for integrating Emarsys SDK into your project."
created_at: "2022-10-10"
published: true
slug: "emarsys-sdk-wrapper-plugin"
---

# Using @salurusrinivasarao/emarsys-sdk-wrapper-plugin

This tutorial will guide you through the process of integrating the Emarsys SDK into your project using the @salurusrinivasarao/emarsys-sdk-wrapper-plugin package. The Emarsys SDK allows you to incorporate Emarsys functionality into your mobile application, such as push notifications and in-app messaging.

## Installation

To get started, you need to install the @salurusrinivasarao/emarsys-sdk-wrapper-plugin package. You can do this by running the following command:

```bash
npm install @salurusrinivasarao/emarsys-sdk-wrapper-plugin
```

## Setup

Once the package is installed, you can begin setting up the Emarsys SDK in your project. The setup process may vary depending on your platform (iOS or Android).

### iOS

To set up the Emarsys SDK on iOS, you need to make some changes to your AppDelegate file. Follow these steps:

1. Open your AppDelegate.swift file.
2. Import the Emarsys SDK wrapper:
```swift
import EmarsysSDKWrapper
```
3. Initialize and configure the Emarsys SDK by adding the following code in the `application(_:didFinishLaunchingWithOptions:)` method:
```swift
EmarsysSDKWrapper.initialize(applicationCode: "yourApplicationCode")
EmarsysSDKWrapper.registerForRemoteNotifications()
```
Replace `"yourApplicationCode"` with your Emarsys application code.

### Android

To set up the Emarsys SDK on Android, follow these steps:

1. Open your project's `build.gradle` file.
2. Add the following dependency:
```gradle
implementation 'com.salurusrinivasarao:emarsys-sdk-wrapper:1.0.0'
```
3. Sync your project to add the dependency to your project.

## Usage

Once the setup is complete, you can start using the Emarsys SDK in your application.

### Sending Push Notifications

To send push notifications to your users, you can use the `EmarsysSDKWrapper.sendPushNotification(title: String, message: String)` method. Pass the title and message of the notification as parameters to the method.

```swift
EmarsysSDKWrapper.sendPushNotification(title: "New Message", message: "You have a new message!")
```

### In-App Messaging

You can display in-app messages to your users using the `EmarsysSDKWrapper.showInAppMessage(message: String)` method. Pass the message content as a parameter to the method.

```swift
EmarsysSDKWrapper.showInAppMessage(message: "Welcome to our app!")
```

### Tracking Events

You can track user events using the Emarsys SDK. For example, to track when a user views a product, you can use the `EmarsysSDKWrapper.trackEvent(eventName: String, eventAttributes: [String: Any])` method. Pass the event name and event attributes as parameters to the method.

```swift
let eventAttributes = [
  "productId": "12345",
  "productName": "Example Product"
]
EmarsysSDKWrapper.trackEvent(eventName: "productViewed", eventAttributes: eventAttributes)
```

## Conclusion

In this tutorial, you learned how to integrate the Emarsys SDK into your project using the @salurusrinivasarao/emarsys-sdk-wrapper-plugin package. You also learned how to send push notifications, display in-app messages, and track events using the Emarsys SDK. With this knowledge, you can enhance your mobile application with Emarsys functionality.

For more information and advanced usage of the Emarsys SDK, refer to the official documentation.

Happy coding!