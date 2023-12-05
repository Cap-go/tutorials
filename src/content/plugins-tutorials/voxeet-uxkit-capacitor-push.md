---
title: "Tutorial: Using capacitor-plugin-voxeet-push"
description: "Learn how to use the capacitor-plugin-voxeet-push package to enable push notifications in your Capacitor project."
created_at: "2021-10-15"
published: true
slug: "voxeet-uxkit-capacitor-push"
---

# Tutorial: Using capacitor-plugin-voxeet-push

In this tutorial, we will walk through the process of using the capacitor-plugin-voxeet-push package to enable push notifications in your Capacitor project. This package provides compatibility with Capacitor's MessagingService for Android.

## Prerequisites

Before starting, make sure you have the following:

- Capacitor project set up
- Android Manifest configured
- Firebase project with FCM set up (for Android)

## Installation

You can install the capacitor-plugin-voxeet-push package either from the GitHub repository or from npmjs.com.

### From GitHub Repository

To install from the GitHub repository, run the following command in your project's root directory:

```bash
npm install https://github.com/voxeet/voxeet-uxkit-capacitor-push
npx cap sync
```

### From npmjs.com

Alternatively, you can install from npmjs.com using the following command:

```bash
npm install capacitor-plugin-voxeet-push
npx cap sync
```

## Plugin Functionality

The capacitor-plugin-voxeet-push package provides an out-of-the-box integration that automatically registers a `CapacitorVoxeetPushMessagingService` in your AndroidManifest.xml file with a priority of 800. This helps overcome the limitation of only one service being able to receive FCM messages on Android.

## Usage

To use the capacitor-plugin-voxeet-push package in your project, follow these steps:

1. Import the necessary classes or functions from the package:

```typescript
import { CapacitorVoxeetPush } from 'capacitor-plugin-voxeet-push';
```

2. Register the push notification service by calling the `.register()` method:

```typescript
await CapacitorVoxeetPush.register();
```

3. Set up listeners to handle push notification events:

```typescript
CapacitorVoxeetPush.addListener('callStarted', (data) => {
  console.log('Call started:', data);
});

CapacitorVoxeetPush.addListener('callEnded', (data) => {
  console.log('Call ended:', data);
});

// Add more listeners as needed
```

4. Push a VOIP notification with the required data payload structure. For example:

```typescript
const notificationData = {
  name: 'John Doe',
  id: '123456',
  media: 'audio',
  duration: '10 minutes',
};

// Push the notification
// ...
```

That's it! You have successfully integrated the capacitor-plugin-voxeet-push package into your Capacitor project to enable push notifications.

## Conclusion

In this tutorial, we have learned how to use the capacitor-plugin-voxeet-push package to enable push notifications in a Capacitor project. We covered the installation process, plugin functionality, and usage instructions. Now you can leverage push notifications in your app and enhance the user experience.