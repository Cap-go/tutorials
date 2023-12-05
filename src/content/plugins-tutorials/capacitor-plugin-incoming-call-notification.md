---
title: "Using capacitor-plugin-incoming-call-notification"
description: "A tutorial on how to use the capacitor-plugin-incoming-call-notification package to handle incoming call notifications in your Capacitor project."
created_at: "2021-11-15"
published: true
slug: "capacitor-plugin-incoming-call-notification"
---

# Using capacitor-plugin-incoming-call-notification

This tutorial will guide you through the process of using the capacitor-plugin-incoming-call-notification package to handle incoming call notifications in your Capacitor project.

## Installation

To get started, follow these steps to install the capacitor-plugin-incoming-call-notification package:

1. Install the package using npm:

```bash
npm install capacitor-plugin-incoming-call-notification
```

2. Sync the Capacitor project:

```bash
npx cap sync
```

## Configuring the Project

After installing the package, you need to configure your project to enable incoming call notifications. Follow these steps to do so:

1. Open your Xcode project.

2. In the Capabilities pane, select the checkbox for "Incoming Calls" to enable incoming call notifications.

3. Save your changes.

## Handling Incoming Call Notifications

With the plugin installed and the project configured, you can now start handling incoming call notifications in your Capacitor project. Here's an example of how to use the plugin:

```typescript
import { IncomingCallNotification } from 'capacitor-plugin-incoming-call-notification';

// Register the plugin
await IncomingCallNotification.register();

// Listen for incoming call events
IncomingCallNotification.addListener('incomingCall', (data) => {
  console.log('Incoming call received:', data);
});

// Handle incoming call
function handleIncomingCall(data) {
  // Code to handle incoming call
  console.log('Handling incoming call:', data);
}
```

In the code above, we first register the plugin using the `register()` method. Then, we listen for incoming call events using the `addListener()` method. Finally, we implement the `handleIncomingCall()` function to handle the incoming call by performing the desired actions.

## Pushing Incoming Call Notifications

To trigger an incoming call notification, you need to push a notification with the appropriate data payload. The payload should include the necessary information about the incoming call, such as the caller's name and the call duration.

Here's an example of how to push an incoming call notification:

```typescript
import { IncomingCallNotification } from 'capacitor-plugin-incoming-call-notification';

const notificationData = {
  name: 'John Doe',
  duration: 60,
};

// Push the incoming call notification
await IncomingCallNotification.pushNotification(notificationData);
```

In the code above, we first import the `IncomingCallNotification` class from the package. Then, we create a `notificationData` object containing the caller's name and the call duration. Finally, we call the `pushNotification()` method to push the incoming call notification with the provided data.

## Conclusion

In this tutorial, we explored how to use the capacitor-plugin-incoming-call-notification package to handle incoming call notifications in your Capacitor project. We covered the installation process, project configuration, handling incoming call notifications, and pushing incoming call notifications. You can now use this package to enhance the call handling experience in your Capacitor app.

Remember to consult the package documentation for more detailed information and additional features offered by the capacitor-plugin-incoming-call-notification package.