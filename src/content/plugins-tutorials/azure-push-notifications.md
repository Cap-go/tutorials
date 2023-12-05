---
title: "Using azure-push-notifications Package"
description: "A tutorial on how to use the azure-push-notifications package to implement push notifications in your application."
created_at: "2022-10-12"
published: true
slug: azure-push-notifications
---

# Using `azure-push-notifications` Package

The `azure-push-notifications` package provides a simple and convenient way to implement push notifications in your application. This tutorial will guide you through the process of installing and using the package to enable push notifications in your app.

## Installation

To get started, you need to install the `azure-push-notifications` package. Open your terminal and run the following command:

```bash
npm i azure-push-notifications
```

Once the installation is complete, synchronize the package with your Capacitor project using the following command:

```bash
npx cap sync
```

## Usage

Now that the package is installed, you can start using it to register and handle push notifications in your application.

First, import the necessary components from the `azure-push-notifications` package:

```js
import {
  AzurePushNotifications,
  AzurePushNotificationSchema,
  PushNotificationActionPerformed,
  PushNotificationToken,
} from 'azure-push-notifications';
```

### Requesting Permissions

Before registering for push notifications, it's important to request the necessary permissions from the user. You can do this using the `requestPermissions` method provided by the `AzurePushNotifications` component:

```js
AzurePushNotifications.requestPermissions().then((result) => {
  // Handle the result of the permission request
});
```

### Registering for Push Notifications

To register for push notifications, use the `register` method provided by the `AzurePushNotifications` component. Pass the required parameters, such as the notification hub name, connection string, and device tag, to the method:

```js
AzurePushNotifications.register({
  notificationHubName: '<AZURE NOTIFICATION HUB NAME>',
  connectionString: '<AZURE NOTIFICATION CONNECTION STRING>',
  deviceTag: '<DEVICE TAG>',
}).then(() => {
  // Registration successful, handle the response
});
```

### Handling Registration Events

To handle the events related to push notifications registration, you can add listeners using the `addListener` method provided by the `AzurePushNotifications` component.

#### Registration Event

The `registration` event is triggered when a push notification registration is successful. You can add a listener for this event and handle the registration token:

```js
AzurePushNotifications.addListener(
  'registration',
  (token: PushNotificationToken) => {
    alert('Push registration success, token: ' + token.value);
    // Handle the registration token
  }
);
```

#### Registration Error Event

The `registrationError` event is triggered when an error occurs during the push notification registration process. You can add a listener for this event and handle the error:

```js
AzurePushNotifications.addListener(
  'registrationError',
  (error: any) => {
    alert('Error on registration: ' + JSON.stringify(error));
    // Handle the registration error
  }
);
```

### Handling Push Notifications

To handle incoming push notifications, you can add listeners for the `pushNotificationReceived` and `pushNotificationActionPerformed` events.

#### Push Notification Received Event

The `pushNotificationReceived` event is triggered when a push notification is received. You can add a listener for this event and handle the received notification:

```js
AzurePushNotifications.addListener(
  'pushNotificationReceived',
  (notification: AzurePushNotificationSchema) => {
    alert('Push received: ' + JSON.stringify(notification));
    // Handle the received notification
  }
);
```

#### Push Notification Action Performed Event

The `pushNotificationActionPerformed` event is triggered when a user performs an action on a received push notification. You can add a listener for this event and handle the action performed:

```js
AzurePushNotifications.addListener(
  'pushNotificationActionPerformed',
  (notification: PushNotificationActionPerformed) => {
    alert('Push action performed: ' + JSON.stringify(notification));
    // Handle the action performed
  }
);
```

Congratulations! You have successfully implemented push notifications in your application using the `azure-push-notifications` package. You can now send and receive push notifications to keep your users informed and engaged.