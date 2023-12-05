---
title: "Using @capacitor-community/fcm Package"
description: "This tutorial will guide you on how to use the @capacitor-community/fcm package to enable FCM (Firebase Cloud Messaging) capabilities in your Capacitor app."
created_at: "2022-06-15"
published: true
slug: "fcm"
---

# Using @capacitor-community/fcm Package

This tutorial will guide you on how to use the @capacitor-community/fcm package to enable FCM (Firebase Cloud Messaging) capabilities in your Capacitor app.

## Installation

To install the @capacitor-community/fcm package, run the following command:

```
npm install @capacitor-community/fcm
```

or

```
yarn add @capacitor-community/fcm
```

After installing the package, sync the native files by running:

```
npx cap sync
```

## Usage

To use the @capacitor-community/fcm package, follow these steps:

1. Import the FCM package in your code:

   ```typescript
   import { FCM } from '@capacitor-community/fcm';
   ```

2. Initialize the FCM plugin:

   ```typescript
   const fcm = new FCM();
   ```

3. Register the device for FCM push notifications:

   ```typescript
   fcm.register().then(token => {
     console.log('FCM Token:', token);
   });
   ```

   The `register` method will generate a unique FCM token for the device, which can be used to send push notifications.

4. Handle incoming push notifications:

   ```typescript
   fcm.addListener('pushNotificationReceived', notification => {
     console.log('Received Notification:', notification);
   });
   ```

   The `addListener` method allows you to listen for incoming push notifications. You can then handle the notifications as needed.

5. Request permission for push notifications (optional):

   ```typescript
   fcm.requestPushPermission().then(result => {
     console.log('Permission granted:', result.granted);
   });
   ```

   The `requestPushPermission` method triggers a system-level prompt asking the user to grant permission for push notifications. You can then handle the result accordingly.

And that's it! You have successfully integrated the @capacitor-community/fcm package and enabled FCM capabilities in your Capacitor app.

Remember to check the [API documentation](https://github.com/capacitor-community/fcm#api) for more information on available methods and events.

Happy coding!