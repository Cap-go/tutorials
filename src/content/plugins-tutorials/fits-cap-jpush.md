---
title: "Using fits-cap-jpush Package"
description: "A tutorial on using the fits-cap-jpush package for integrating JPush notifications with Capacitor apps"
created_at: "2021-10-29"
published: true
slug: "fits-cap-jpush"
---

# Using fits-cap-jpush Package

In this tutorial, we will learn how to use the fits-cap-jpush package to integrate JPush notifications with Capacitor apps. The fits-cap-jpush package provides a simple and efficient solution for sending push notifications to your mobile app users.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- A Capacitor app set up and running
- JPush account and API credentials

## Installation

To install the fits-cap-jpush package, run the following command:

```bash
npm install fits-cap-jpush
```

## Configuration

1. Import the fits-cap-jpush package in your main app file:

```typescript
import { Capacitor } from '@capacitor/core';
import { JPush } from 'fits-cap-jpush';

...

```

2. Inside your app's initialization code, initialize the JPush plugin:

```typescript
import { Plugins } from '@capacitor/core';
const { JPush } = Plugins;

...

// Platform-specific initialization
const platform = Capacitor.getPlatform();
if (platform === 'ios' || platform === 'android') {
  JPush.initialize();
}

```

## Registering for Push Notifications

To register for push notifications, you can use the following code:

```typescript
const platform = Capacitor.getPlatform();
if (platform === 'ios' || platform === 'android') {
  JPush.register();

  // Handle registration success
  JPush.addListener('registration', (data) => {
    const { registrationId } = data;
    console.log('Registration ID:', registrationId);
  });

  // Handle registration error
  JPush.addListener('registrationError', (data) => {
    const { message } = data;
    console.error('Registration Error:', message);
  });
}

```

## Sending Push Notifications

To send push notifications to your users, you can use the following code:

```typescript
// Send notification to all devices
JPush.sendNotification({
  title: 'New Message',
  message: 'You have a new message!'
});

// Send notification to specific device by registration ID
const registrationId = 'your-device-registration-id';
JPush.sendNotificationToRegistrationId({
  title: 'New Message',
  message: 'You have a new message!'
}, registrationId);

```

## Conclusion

In this tutorial, we have learned how to use the fits-cap-jpush package to integrate JPush notifications with Capacitor apps. We covered the installation, configuration, registration for push notifications, and sending push notifications to users.

Now, you can easily implement push notifications in your Capacitor app using the fits-cap-jpush package. Happy coding!

---

This tutorial was created on October 29, 2021, and provides step-by-step instructions on using the fits-cap-jpush package to integrate JPush notifications with Capacitor apps.