---
title: "Using the capacitor-persistent-notification package"
description: "A tutorial on how to use the capacitor-persistent-notification package in Capacitor"
created_at: "2021-09-27"
published: true
slug: "capacitor-persistent-notification"
---

# Using the capacitor-persistent-notification package

In this tutorial, we will learn how to use the capacitor-persistent-notification package in Capacitor to create and display persistent notifications on iOS and Android devices.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Capacitor CLI installed (`npm install -g @capacitor/cli`)
- Capacitor project created (`npx cap init`)
- Capacitor platforms added (`npx cap add android` and/or `npx cap add ios`)

## Installation

To install the capacitor-persistent-notification package, run the following command in your project directory:

```
npm install capacitor-persistent-notification
```

## Configuration

### Android

For Android, no additional configuration is required.

### iOS

For iOS, you will need to add the necessary permissions and capabilities to your Xcode project. Follow these steps:

1. Open your project in Xcode (`npx cap open ios`).
2. Navigate to the `Signing & Capabilities` tab.
3. Click on the `+ Capability` button.
4. Select `Background Modes` from the list.
5. Check the `Remote notifications` checkbox.
6. Add `PushNotifications` to the `Background Modes` section.

## Usage

To use the capacitor-persistent-notification package, follow these steps:

1. Import the package in your desired file:

```javascript
import { PersistentNotificationPlugin } from 'capacitor-persistent-notification';
const PersistentNotification = PersistentNotificationPlugin as any;
```

2. Create a new persistent notification:

```javascript
await PersistentNotification.create({
  title: 'My Notification',
  body: 'This is a persistent notification',
  id: 'my-notification',
});
```

3. Update or remove an existing persistent notification:

```javascript
await PersistentNotification.update({
  id: 'my-notification',
  title: 'Updated Notification',
  body: 'This notification has been updated',
});

// To remove the persistent notification
await PersistentNotification.remove({
  id: 'my-notification',
});
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-persistent-notification package to create and manage persistent notifications in Capacitor. By following the steps outlined in this tutorial, you can customize and display persistent notifications on both iOS and Android devices.

For more information, refer to the [capacitor-persistent-notification documentation](https://github.com/username/repo).

Happy coding!