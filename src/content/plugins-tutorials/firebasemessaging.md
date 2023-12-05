---
title: "Using ls-firebase-messaging Package"
description: "A tutorial on how to use the ls-firebase-messaging package to integrate Firebase Cloud Messaging in your Ionic app."
created_at: "2022-01-12"
published: true
slug: "firebasemessaging"
---

# Using ls-firebase-messaging Package

In this tutorial, we will learn how to use the ls-firebase-messaging package to integrate Firebase Cloud Messaging (FCM) in your Ionic app. Firebase Cloud Messaging allows you to send notifications and messages to devices running your app, and with the ls-firebase-messaging package, it becomes easy to implement this functionality in your Ionic app.

## Step 1: Install the Package

To get started, let's install the ls-firebase-messaging package. Open your terminal and navigate to your Ionic project's root directory. Then, run the following command:

```bash
npm install ls-firebase-messaging
```

This will install the ls-firebase-messaging package and its dependencies.

## Step 2: Configure Firebase

Next, we need to configure Firebase in our Ionic app. Go to the Firebase console (https://console.firebase.google.com/) and create a new project or select an existing one.

Once you have your Firebase project set up, you need to obtain the necessary configuration details. For Android, download the `google-services.json` file and place it in the `android/app` directory of your Ionic project. For iOS, download the `GoogleService-Info.plist` file and place it in the root directory of your Xcode project.

## Step 3: Initialize ls-firebase-messaging

Now, let's initialize the ls-firebase-messaging package in our Ionic app. Open the `app.module.ts` file in your Ionic project's `src/app` directory and import the necessary modules:

```typescript
import { LsFirebaseMessaging } from 'ls-firebase-messaging';
import { environment } from '../environments/environment';
```

Then, add the `LsFirebaseMessaging` provider to the `providers` array:

```typescript
providers: [
  LsFirebaseMessaging,
  // other providers
]
```

Next, initialize the ls-firebase-messaging package in the `initializeApp` method of the `AppComponent` class:

```typescript
constructor(private lsFirebaseMessaging: LsFirebaseMessaging) {
  this.initializeApp();
}

private initializeApp() {
  this.lsFirebaseMessaging.initializeApp(environment.firebaseConfig);
}
```

Make sure to replace `environment.firebaseConfig` with the actual configuration object obtained from Firebase.

## Step 4: Handle Incoming Messages

To handle incoming messages in your Ionic app, open the `app.component.ts` file in your Ionic project's `src/app` directory and import the necessary modules:

```typescript
import { LsFirebaseMessaging, Message } from 'ls-firebase-messaging';
```

In the `AppComponent` class, subscribe to the `onMessage` event of the `LsFirebaseMessaging` service:

```typescript
constructor(private lsFirebaseMessaging: LsFirebaseMessaging) {
  this.initializeApp();
  
  this.lsFirebaseMessaging.onMessage().subscribe((message: Message) => {
    // Handle the incoming message here
  });
}
```

The `onMessage` event returns a `Message` object that contains the payload of the incoming message.

## Step 5: Send Notifications

Now that we have set up the ls-firebase-messaging package to handle incoming messages, let's learn how to send notifications to devices running our Ionic app.

In your Firebase project's console, go to the Cloud Messaging section and click on "Send your first message". Fill in the necessary details, such as the target audience and the notification content.

Once you click on "Send" or "Test on Device", the ls-firebase-messaging package will handle the delivery of the notification to the specified devices.

## Conclusion

In this tutorial, we learned how to use the ls-firebase-messaging package to integrate Firebase Cloud Messaging in an Ionic app. We covered the installation process, Firebase configuration, initialization of the package, handling incoming messages, and sending notifications. With the ls-firebase-messaging package, you can easily add push notification functionality to your Ionic app.