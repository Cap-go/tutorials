---
title: "Using colubris-push-plugin Package"
description: "A tutorial on how to use the colubris-push-plugin package in Capacitor."
created_at: "October 28, 2021"
published: true
slug: "capacitor-parse-push"
---

# Using the colubris-push-plugin Package in Capacitor

This tutorial will guide you through the steps of installing and using the colubris-push-plugin package in a Capacitor project. The colubris-push-plugin package allows you to integrate push notifications into your Capacitor app using the Parse Push service.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed:

- Node.js and npm
- Capacitor CLI

## Step 1: Create a new Capacitor Project

Start by creating a new Capacitor project using the following command:

```bash
npx create-capacitor-app my-app
```

Replace `my-app` with the desired name for your project.

## Step 2: Install the colubris-push-plugin Package

Navigate to your project's root directory and install the colubris-push-plugin package using npm:

```bash
npm install colubris-push-plugin
```

## Step 3: Configure Parse Push

To use the colubris-push-plugin package, you need to configure Parse Push in your project.

### Android Configuration

For Android, open the `AndroidManifest.xml` file located in the `android/app/src/main` directory. Add the following lines inside the `<application>` tag:

```xml
<!-- Replace YOUR_PARSE_APPLICATION_ID and YOUR_PARSE_CLIENT_KEY with your Parse credentials -->
<meta-data android:name="com.parse.SERVER_URL" android:value="https://YOUR_PARSE_SERVER_URL/parse" />
<meta-data android:name="com.parse.APPLICATION_ID" android:value="YOUR_PARSE_APPLICATION_ID" />
<meta-data android:name="com.parse.CLIENT_KEY" android:value="YOUR_PARSE_CLIENT_KEY" />
```

Replace `YOUR_PARSE_SERVER_URL`, `YOUR_PARSE_APPLICATION_ID`, and `YOUR_PARSE_CLIENT_KEY` with your actual Parse credentials.

### iOS Configuration

For iOS, open the `AppDelegate.swift` file located in the `ios/App` directory. Add the following lines inside the `didFinishLaunchingWithOptions` method:

```swift
// Replace YOUR_PARSE_APPLICATION_ID and YOUR_PARSE_CLIENT_KEY with your Parse credentials
Parse.initialize(with: ParseClientConfiguration(block: { (configuration: ParseMutableClientConfiguration) -> Void in
    configuration.applicationId = "YOUR_PARSE_APPLICATION_ID"
    configuration.clientKey = "YOUR_PARSE_CLIENT_KEY"
    configuration.server = "https://YOUR_PARSE_SERVER_URL/parse"
}))
```

Replace `YOUR_PARSE_APPLICATION_ID`, `YOUR_PARSE_CLIENT_KEY`, and `YOUR_PARSE_SERVER_URL` with your actual Parse credentials.

## Step 4: Initialize colubris-push-plugin

Open the `src/main.ts` file located in your project's root directory. Add the following lines at the beginning of the file:

```typescript
import { Plugins } from '@capacitor/core';

const { ColubrisPushPlugin } = Plugins;

ColubrisPushPlugin.initialize();
```

This will initialize the colubris-push-plugin package in your app.

## Step 5: Register for Push Notifications

To register for push notifications, add the following lines of code to the desired location in your app:

```typescript
ColubrisPushPlugin.registerForPushNotifications()
  .then((token: string) => {
    console.log('Push token:', token);
    // Handle the token as needed
  })
  .catch((error: any) => {
    console.error('Error registering for push notifications:', error);
  });
```

This code will request the user's permission to receive push notifications and retrieve the push token.

## Step 6: Handle Push Notifications

To handle incoming push notifications, add the following lines of code to the desired location in your app:

```typescript
ColubrisPushPlugin.addListener('pushNotificationReceived', (notification: any) => {
  console.log('Received push notification:', notification);
  // Handle the notification data as needed
});
```

This code will listen for incoming push notifications and log the notification data to the console.

## Step 7: Build and Run the App

Finally, build and run your Capacitor app using the following command:

```bash
npx cap run
```

This will build your app and open it in the appropriate platform emulator or device. Make sure to test the push notification functionality on a real device or emulator.

Congratulations! You have successfully integrated the colubris-push-plugin package into your Capacitor app and implemented push notifications using the Parse Push service.

