---
title: How to Integrate Rudderstack with Capacitor Apps
description: A step-by-step guide on integrating Rudderstack with Capacitor apps.
created_at: 2022-09-28
published: true
slug: capacitor-rudderstack.git
locale: en
---

# Integrating Rudderstack with Capacitor Apps

Rudderstack is a powerful platform that allows you to collect, store, and route customer event data to various analytics and marketing tools. In this tutorial, we'll walk through how to integrate Rudderstack with your Capacitor app.

## Step 1: Install the @capgo/capacitor-rudderstack Package

First, we need to install the `@capgo/capacitor-rudderstack` package. You can do this using npm or yarn:

```bash
npm install @capgo/capacitor-rudderstack
# OR
yarn add @capgo/capacitor-rudderstack
```

## Step 2: Set up Rudderstack in Your Capacitor Project

Next, we need to set up Rudderstack in your Capacitor project. You'll typically need to configure your Rudderstack `writeKey` and `dataPlaneUrl`. This can usually be done in your `app.component.ts` file or a separate configuration file.

Here's an example of how you can set up Rudderstack in your application:

```typescript
import { Rudderstack } from '@capacitor-community/rudderstack';

Rudderstack.initialize({
  writeKey: 'YOUR_WRITE_KEY_HERE',
  dataPlaneUrl: 'YOUR_DATA_PLANE_URL',
  // Add any additional configurations here
});
```

Make sure to replace `YOUR_WRITE_KEY_HERE` and `YOUR_DATA_PLANE_URL` with your actual Rudderstack write key and data plane URL.

## Step 3: Sending Events to Rudderstack

You can now start sending events to Rudderstack from your Capacitor app. You can use the `track` method to track events. Here's an example of how you can track a custom event:

```typescript
Rudderstack.track('User Signed Up', {
  userId: '12345',
  email: 'john@example.com',
});
```

## Step 4: Additional Configuration (Optional)

Rudderstack offers various features and configurations that you can explore to enhance your analytics and tracking capabilities. Make sure to check out the Rudderstack documentation for more advanced settings and features.

## Step 5: Building and Running Your Capacitor App

After integrating Rudderstack with your Capacitor app, make sure to build and run your app to test if the event tracking is functioning correctly. You can use the following commands to build and run your app:

```bash
npx cap sync
npx cap copy
npx cap run android
# OR
npx cap run ios
```

That's it! You have successfully integrated Rudderstack with your Capacitor app. Enjoy tracking and analyzing user events with Rudderstack!