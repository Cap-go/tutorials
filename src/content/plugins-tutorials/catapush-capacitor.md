---
title: "Using the Catapush-Capacitor Package"
description: "This tutorial will guide you through the process of using the catapush-capacitor package in your app."
created_at: "2021-10-10"
published: true
slug: catapush-capacitor
---

# Using the Catapush-Capacitor Package

In this tutorial, we will learn how to integrate the Catapush-Capacitor package into your Capacitor-based app. Catapush is a push notification service that allows you to easily send and receive push notifications in your mobile applications.

## Step 1: Install the Package

To get started, you need to install the `catapush-capacitor` package in your project. Open your terminal and run the following command:

```bash
npm install catapush-capacitor
```

This will download and install the package along with its dependencies.

## Step 2: Configure the Package

Once the package is installed, you need to configure it with your Catapush credentials. Create a new file named `catapush.config.json` in the root directory of your project. Add the following content to the file:

```json
{
  "api_key": "YOUR_API_KEY",
  "api_secret": "YOUR_API_SECRET",
  "sender_id": "YOUR_SENDER_ID",
  "project_id": "YOUR_PROJECT_ID"
}
```

Replace `YOUR_API_KEY`, `YOUR_API_SECRET`, `YOUR_SENDER_ID`, and `YOUR_PROJECT_ID` with your actual Catapush credentials.

## Step 3: Initialize the Package

Next, you need to initialize the `catapush-capacitor` package in your app. Open the `src/index.ts` file in your project and import the package at the top of the file:

```typescript
import 'catapush-capacitor';
```

Then, inside the `initializeApp()` function, add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { CatapushPushNotifications } = Plugins;

CatapushPushNotifications.initialize();
```

This will initialize the Catapush package and register the device for receiving push notifications.

## Step 4: Handle Incoming Push Notifications

To handle incoming push notifications, you need to listen for the `pushNotificationReceived` event. Add the following code inside the `initializeApp()` function in the `src/index.ts` file:

```typescript
CatapushPushNotifications.addListener('pushNotificationReceived', (notification) => {
  console.log('Received push notification:', notification);
});
```

This code will log the received push notification to the console. You can modify it to suit your needs, such as displaying a notification banner or updating the UI.

## Step 5: Send Push Notifications

To send push notifications from your server to the app, you need to make HTTP requests to the Catapush API. Refer to the Catapush documentation for detailed instructions on how to send push notifications.

## Conclusion

In this tutorial, we have learned how to integrate the Catapush-Capacitor package into your Capacitor-based app. You can now send and receive push notifications using the Catapush service. To learn more about the package and its features, refer to the official documentation.

Remember to replace `YOUR_API_KEY`, `YOUR_API_SECRET`, `YOUR_SENDER_ID`, and `YOUR_PROJECT_ID` with your actual Catapush credentials in the `catapush.config.json` file.

Happy coding!