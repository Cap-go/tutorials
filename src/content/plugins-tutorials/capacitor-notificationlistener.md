---
title: "Using the capacitor-notificationlistener Package"
description: "A tutorial on how to use the capacitor-notificationlistener package in Capacitor"
created_at: "2022-02-18"
published: true
slug: capacitor-notificationlistener
---

# Using the capacitor-notificationlistener Package

In this tutorial, we will learn how to use the capacitor-notificationlistener package to access and listen for system notifications in Capacitor applications.

## Prerequisites

Before we begin, make sure you have the following:

- Basic knowledge of Capacitor and Ionic development
- An existing Capacitor application set up

## Installation

To start using the capacitor-notificationlistener package, follow these steps:

1. Open your terminal and navigate to your Capacitor project directory.
2. Run the following command to install the package:

```bash
npm install capacitor-notificationlistener
```

3. Next, sync the native project:

```bash
npx cap sync
```

4. This will add the necessary dependencies and configuration to your native project.

## Usage

Now that the package is installed, we can start using it to listen for notifications in our Capacitor app.

1. Import the `NotificationListener` class from the `capacitor-notificationlistener` package:

```typescript
import { NotificationListener } from 'capacitor-notificationlistener';
```

2. Initialize an instance of the `NotificationListener` class:

```typescript
const listener = new NotificationListener();
```

3. Optionally, you can check if the device supports notification listening:

```typescript
const isSupported = await listener.isSupported();
if (!isSupported) {
  console.log('Notification listening is not supported on this device');
  return;
}
```

4. Start listening for notifications:

```typescript
listener.addListener('notification', (notification) => {
  console.log('Received notification:', notification);
});
```

5. To stop listening for notifications, use the `removeListener` method:

```typescript
listener.removeListener('notification');
```

That's it! You can now integrate the capacitor-notificationlistener package into your app to access and handle system notifications.

## Conclusion

In this tutorial, we have learned how to install and use the capacitor-notificationlistener package to listen for system notifications in Capacitor applications. This can be useful for implementing features such as displaying custom in-app notifications or performing specific actions based on received notifications.

Remember to refer to the official documentation of the capacitor-notificationlistener package for more details and advanced usage options.