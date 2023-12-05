---
title: "Using capacitor-appmetrica-push"
description: "A tutorial on how to use the capacitor-appmetrica-push package for push notifications"
created_at: "2021-10-20"
published: true
slug: "capacitor-appmetrica-push"
---

# Using capacitor-appmetrica-push

This tutorial will guide you through the steps for using the capacitor-appmetrica-push package to implement push notifications in your Capacitor app.

## Step 1: Installation

Start by installing the capacitor-appmetrica-push package:

```bash
npm install capacitor-appmetrica-push
```

## Step 2: Configure AppMetrica

Next, you need to configure AppMetrica for push notifications. Follow the official AppMetrica documentation to create an account and set up your app.

## Step 3: Register the Plugin

In your app's main `index.ts` file, register the plugin:

```typescript
import { registerPlugin } from '@capacitor/core';
import { CapacitorAppMetricaPush } from 'capacitor-appmetrica-push';

registerPlugin(CapacitorAppMetricaPush);
```

## Step 4: Initialization

Initialize AppMetrica Push inside your app's main `App.tsx` file:

```typescript
import { CapacitorAppMetricaPush } from 'capacitor-appmetrica-push';

CapacitorAppMetricaPush.initialize();
```

## Step 5: Handling Push Notifications

To handle push notifications, create a new notification handler in your app. This can be done in a separate service or a dedicated file. Here's an example of how you can set up the notification handler:

```typescript
import { CapacitorAppMetricaPush } from 'capacitor-appmetrica-push';

CapacitorAppMetricaPush.addListener('pushNotificationReceived', (notification) => {
  // Handle the received push notification here
  console.log('Received push notification:', notification);
});

CapacitorAppMetricaPush.addListener('pushNotificationClicked', (notification) => {
  // Handle the clicked push notification here
  console.log('Clicked push notification:', notification);
});
```

## Step 6: Testing

You can now test your push notification implementation using the AppMetrica Push Testing mode. Refer to the AppMetrica documentation for more information on how to test push notifications.

That's it! You have successfully integrated the capacitor-appmetrica-push package and implemented push notifications in your Capacitor app.

Remember to check the official documentation of the capacitor-appmetrica-push package for more detailed usage and options. Happy coding!

---
This tutorial was created on October 20, 2021, to provide a step-by-step guide on using the capacitor-appmetrica-push package for push notifications in a Capacitor app.