---
title: "A Beginner's Guide to Using the CleverPush Capacitor SDK"
description: "Learn how to integrate the CleverPush Capacitor SDK into your mobile app and send push notifications to your users."
created_at: "2022-02-14"
published: true
slug: "cleverpush-capacitor-sdk"
---

# A Beginner's Guide to Using the CleverPush Capacitor SDK

## Introduction

In this tutorial, we will walk you through the process of integrating the CleverPush Capacitor SDK into your mobile app and sending push notifications to your users. The CleverPush Capacitor SDK is a powerful tool that allows you to engage and communicate with your app users through push notifications.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project
- An existing CleverPush account
- Basic knowledge of mobile app development

## Step 1: Install the CleverPush Capacitor SDK

To get started, you need to install the CleverPush Capacitor SDK in your project. Open your terminal and run the following command:

```
npm install cleverpush-capacitor-sdk
```

This command will install the CleverPush Capacitor SDK package and its dependencies in your project.

## Step 2: Configure Your Project

Next, you need to configure your project to use the CleverPush Capacitor SDK. Follow these steps:

1. Open your `AppDelegate.swift` file (for iOS) or your Android application class file (for Android).
2. Initialize the CleverPush Capacitor SDK with your CleverPush app ID, token, server URL, and analytics settings. Here's an example for iOS:

```swift
// AppDelegate.swift

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    let appId = "YOUR_APP_ID"
    let token = "YOUR_TOKEN"
    let serverUrl = "YOUR_SERVER_URL"
    let isAnalyticsEnabled = true
    
    CleverPush.initialize(appId: appId, token: token, serverUrl: serverUrl, isAnalyticsEnabled: isAnalyticsEnabled)
    
    return true
}
```

And here's an example for Android:

```java
// YourApplicationClass.java

public class YourApplicationClass extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        
        String appId = "YOUR_APP_ID";
        String token = "YOUR_TOKEN";
        String serverUrl = "YOUR_SERVER_URL";
        boolean isAnalyticsEnabled = true;
        
        CleverPush.initialize(getApplicationContext(), appId, token, serverUrl, isAnalyticsEnabled);
    }
}
```

Make sure to replace `YOUR_APP_ID`, `YOUR_TOKEN`, and `YOUR_SERVER_URL` with your actual CleverPush app credentials.

## Step 3: Request Push Notification Permission

To send push notifications to your users, you need to request permission to send push notifications. This can be done using the Capacitor Push Notifications plugin. Follow the official Capacitor Push Notifications plugin documentation to configure and request the push notification permission.

## Step 4: Sending Push Notifications

Once you have configured your project and requested push notification permission, you can start sending push notifications to your users. The CleverPush Capacitor SDK provides various methods to send push notifications with different options.

Here's an example of sending a simple push notification:

```javascript
import { Plugins } from '@capacitor/core';

const { CleverPush } = Plugins;

CleverPush.sendNotification({
    title: 'New Message',
    body: 'You have a new message',
    click_action: 'OPEN_MESSAGE'
});
```

You can customize the title, body, and click action of the push notification based on your app's requirements.

## Conclusion

In this tutorial, we have learned how to integrate the CleverPush Capacitor SDK into your mobile app and send push notifications to your users. We covered the installation process, project configuration, requesting push notification permission, and sending push notifications. With the CleverPush Capacitor SDK, you can effectively engage and communicate with your app users through push notifications.

Remember to refer to the official CleverPush Capacitor SDK documentation for more advanced features and options.

Happy coding!