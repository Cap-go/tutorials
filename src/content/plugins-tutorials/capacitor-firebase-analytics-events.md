---
title: "Using capacitor-firebase-analytics-events"
description: "A tutorial on using the capacitor-firebase-analytics-events package to track events in your Capacitor app"
created_at: "2022-01-20"
published: true
slug: capacitor-firebase-analytics-events
---

# Using capacitor-firebase-analytics-events

In this tutorial, we will learn how to use the `capacitor-firebase-analytics-events` package to track events in your Capacitor app. This package allows you to easily send custom events to Firebase Analytics and analyze user behavior in your app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI
- Firebase Analytics

## Step 1: Install the package

Begin by installing the `capacitor-firebase-analytics-events` package in your Capacitor project.

```bash
npm install capacitor-firebase-analytics-events
```

## Step 2: Initialize Firebase Analytics

Next, we need to initialize Firebase Analytics in your app. Open the `src/main.ts` file and add the following code:

```typescript
import { CapacitorFirebaseAnalyticsEvents } from 'capacitor-firebase-analytics-events';

CapacitorFirebaseAnalyticsEvents.initialize();
```

This will initialize Firebase Analytics in your app and prepare it to receive events.

## Step 3: Track an event

To track an event, you can use the `trackEvent` method provided by the `capacitor-firebase-analytics-events` package. This method takes two parameters: the event name and an optional event properties object.

Here's an example of how to track a button click event:

```typescript
import { CapacitorFirebaseAnalyticsEvents } from 'capacitor-firebase-analytics-events';

CapacitorFirebaseAnalyticsEvents.trackEvent('button_click', { label: 'Submit', value: '1' });
```

In the above example, we track a `button_click` event with a label of `Submit` and a value of `1`. You can customize the event name and properties as per your requirements.

## Step 4: Viewing the events in Firebase

Once you have tracked events in your app, you can view them in the Firebase Analytics dashboard. Login to your Firebase console, select your project, and navigate to the Analytics section.

In the Analytics dashboard, you will be able to see the events you have tracked, along with various metrics and user insights.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-firebase-analytics-events` package to track events in your Capacitor app. By tracking events, you can gain valuable insights into user behavior and make data-driven decisions to improve your app.