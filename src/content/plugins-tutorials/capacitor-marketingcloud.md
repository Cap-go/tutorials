---
title: "Using @okode/capacitor-marketingcloud Package"
description: "A tutorial on how to use the @okode/capacitor-marketingcloud package to integrate Marketing Cloud functionality into your Capacitor project."
created_at: "2022-01-10"
published: true
slug: capacitor-marketingcloud
---

# Using @okode/capacitor-marketingcloud Package

In this tutorial, we will guide you through the process of integrating the @okode/capacitor-marketingcloud package into your Capacitor project. This package allows you to leverage the functionality of Marketing Cloud in your mobile app. We will cover the installation process, initialization for both iOS and Android platforms, and the necessary steps to send push tokens to Marketing Cloud.

## Prerequisites

Before you begin, make sure you have the following:

- Capacitor project set up and configured.
- Authentication credentials for your Marketing Cloud account.
- Knowledge of how to obtain the necessary configuration values from the Marketing Cloud SDK documentation.

## Installation

To install the @okode/capacitor-marketingcloud package, follow these steps:

1. Open your terminal and navigate to your Capacitor project directory.
2. Run the following command:

```bash
npm install @okode/capacitor-marketingcloud
npx cap sync
```

The package will be installed and synced with your project.

## iOS Configuration

To initialize Marketing Cloud in your iOS project, follow these steps:

1. Open your `AppDelegate.swift` file.
2. Locate the `application(_:didFinishLaunchingWithOptions:)` method.
3. Add the following code snippet to initialize Marketing Cloud:

```swift
let appId = "APP_ID"
let token = "TOKEN"
let serverUrl = "SERVER_URL"
let isAnalyticsEnabled = true
MarketingCloud.initialize(appId, token, serverUrl, isAnalyticsEnabled)
```

Make sure to replace `APP_ID`, `TOKEN`, and `SERVER_URL` with the respective configuration values from your Marketing Cloud account.

4. To send push tokens to Marketing Cloud, find the `application(_:didRegisterForRemoteNotificationsWithDeviceToken:)` method and add the following code:

```swift
NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
MarketingCloud.setPushToken(deviceToken)
```

## Android Configuration

To initialize Marketing Cloud in your Android project, follow these steps:

1. Create a new class extending the `Application` class, or locate the existing one.
2. Inside the `onCreate()` method of your `Application` class, add the following code snippet:

```java
String appId = "APP_ID"
String token = "TOKEN"
String serverUrl = "SERVER_URL"
boolean isAnalyticsEnabled = true
MarketingCloud.Companion.initialize(getApplicationContext(), appId, token, serverUrl, isAnalyticsEnabled, initializationStatus -> Unit.INSTANCE);
```

Replace `APP_ID`, `TOKEN`, and `SERVER_URL` with the respective configuration values from your Marketing Cloud account.

## Adding Capacitor Push Notifications Plugin

The @okode/capacitor-marketingcloud package is designed to work alongside the Capacitor Push Notifications plugin. Make sure you have followed the Capacitor Push Notifications plugin's instructions to configure your project. This includes requesting push notification permissions using the Push Notifications plugin API.

## Conclusion

In this tutorial, we have explored how to integrate the @okode/capacitor-marketingcloud package into your Capacitor project. We covered the installation process, initialization for both iOS and Android platforms, and the necessary steps to send push tokens to Marketing Cloud. With this package, you can leverage the power of Marketing Cloud within your mobile app.

Remember to consult the official Marketing Cloud SDK documentation for more details on obtaining the required configuration values for your project.