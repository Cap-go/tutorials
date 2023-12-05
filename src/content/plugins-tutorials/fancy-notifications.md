---
title: "Using @ovos-media/fancy-notifications Package"
description: "A tutorial on how to use the @ovos-media/fancy-notifications package to handle notifications in your Capacitor project."
created_at: "2022-11-18"
published: true
slug: "fancy-notifications"
---

# Using @ovos-media/fancy-notifications Package

In this tutorial, we will learn how to use the `@ovos-media/fancy-notifications` package to handle notifications in a Capacitor project. This package provides a set of methods to manage badge counts and request permission for notifications. 

## Installation

To get started, install the package by running the following command:

```bash
npm i @ovos-media/fancy-notifications
```

## Usage

Once the package is installed, you can import it and use its methods in your code. Here's an example of how to update the badge count:

```typescript
import '@ovos-media/fancy-notifications';
import { Plugins } from '@capacitor/core';
const { FancyNotifications } = Plugins;

async function updateBadgeCount() {
  const check = await FancyNotifications.hasPermission();
  if (check.value) {
    FancyNotifications.setBadgeCount(2);
  } else {
    const request = await FancyNotifications.requestPermission();
    if (request.value) {
      FancyNotifications.setBadgeCount(2);
    } else {
      // User failed to grant permission, show some dialog
    }
  }
}
```

In the code example above, we first check if the user has granted permission for notifications using the `hasPermission()` method. If the permission is granted, we set the badge count to 2 using the `setBadgeCount()` method. If the permission has not been granted, we request it using the `requestPermission()` method. If the permission is granted after the request, we then set the badge count to 2.

## API

The `@ovos-media/fancy-notifications` package provides the following API:

| Method            | Default                   | Type                       | Description                                 |
| ----------------- | ------------------------- | -------------------------- | ------------------------------------------- |
| hasPermission     |                           | `Promise<{value:boolean}>` | Checks if the user has granted notification permission. |
| requestPermission |                           | `Promise<{value:boolean}>` | Requests permission for notifications.        |
| setBadgeCount     |                           | `Promise<any>`             | Sets the badge count for the application.     |
| clearBadgeCount   |                           | `Promise<any>`             | Clears the badge count for the application.   |

## Conclusion

In this tutorial, we have learned how to use the `@ovos-media/fancy-notifications` package to manage notifications in a Capacitor project. We explored methods to check permission, request permission, and update the badge count. By utilizing these methods, you can easily handle notifications in your application.

Remember to check the official documentation of the `@ovos-media/fancy-notifications` package for more details and advanced usage.
