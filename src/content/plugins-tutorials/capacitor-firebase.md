---
title: "Getting Started with Capacitor Firebase Messaging"
description: "A tutorial on how to use the @capacitor-firebase/messaging package for adding Firebase Messaging to Capacitor apps."
created_at: "2022-01-01"
published: true
slug: capacitor-firebase
---

# Getting Started with Capacitor Firebase Messaging

In this tutorial, we will learn how to use the `@capacitor-firebase/messaging` package to add Firebase Messaging functionality to Capacitor apps. Firebase Messaging allows you to send and receive push notifications to your app users.

## Prerequisites

Before we begin, make sure you have the following installed:

1. Capacitor CLI: Follow the [official Capacitor installation guide](https://capacitorjs.com/docs/getting-started) to install Capacitor CLI on your development machine.

2. Firebase Account: Sign up for a free Firebase account at [https://firebase.google.com](https://firebase.google.com) if you haven't already. Create a new Firebase project for your app.

## Step 1: Create a Capacitor App

First, let's create a new Capacitor app by running the following commands in your terminal:

```bash
ionic start my-cap-app --capacitor
cd my-cap-app
```

This will create a new Ionic app with Capacitor integration.

## Step 2: Install the @capacitor-firebase/messaging Package

To install the `@capacitor-firebase/messaging` package, run the following command in your app's root directory:

```bash
npm install @capacitor-firebase/messaging
```

This will install the package and its dependencies in your project.

## Step 3: Setup Firebase Authentication

In order to use Firebase Messaging, you need to set up Firebase Authentication in your app. Follow the official Firebase documentation to add Firebase to your app and configure the necessary settings.

## Step 4: Initialize Firebase Messaging

To initialize Firebase Messaging in your app, open the `src/main.ts` file and add the following code at the top:

```typescript
import { registerWebPlugin } from '@capacitor/core';
import { FirebaseMessaging } from '@capacitor-firebase/messaging';

registerWebPlugin(FirebaseMessaging);
```

This will import the necessary dependencies and register the Firebase Messaging plugin.

## Step 5: Request User Permission

Next, we need to request permission from the user to receive push notifications. Open the `src/app/app.component.ts` file and add the following code inside the `ngOnInit` method:

```typescript
import { Plugins } from '@capacitor/core';
import { FirebaseMessaging } from '@capacitor-firebase/messaging';

const { FirebaseMessaging } = Plugins;

...

async ngOnInit() {
  const { status } = await FirebaseMessaging.requestPermission();
  if (status === 'granted') {
    console.log('Notification permission granted');
  } else {
    console.log('Notification permission denied');
  }
}
```

This code requests permission from the user and logs the result to the console.

## Step 6: Receive Push Notifications

To receive push notifications in your app, open the `src/app/app.component.ts` file and add the following code to subscribe to push notification events:

```typescript
import { Plugins } from '@capacitor/core';
import { FirebaseMessaging } from '@capacitor-firebase/messaging';

const { FirebaseMessaging } = Plugins;

...

async ngOnInit() {
  ...

  FirebaseMessaging.addListener('pushNotificationReceived', (notification) => {
    console.log('Push notification received', notification);
  });

  FirebaseMessaging.addListener('pushNotificationOpened', (notification) => {
    console.log('Push notification opened', notification);
  });
}
```

This code adds event listeners for when a push notification is received and when a user opens a push notification. The notification object contains information about the received notification.

## Step 7: Test Push Notifications

To test push notifications in your app, you will need to deploy your app to a real device or emulator and send a push notification from the Firebase console. Follow the official Firebase documentation to send push notifications to your app.

## Conclusion

In this tutorial, we learned how to use the `@capacitor-firebase/messaging` package to add Firebase Messaging functionality to Capacitor apps. We covered the steps to install the package, initialize Firebase Messaging, request user permission, and receive push notifications. Now you can enhance your app's user experience by sending targeted push notifications to your users.

Remember to review the official Capacitor and Firebase documentation for more advanced features and customization options.