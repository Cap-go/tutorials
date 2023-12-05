---
title: "Tutorial: Using capacitor-amplitude package"
description: "This tutorial will guide you through the process of using the capacitor-amplitude package in your Capacitor project."
created_at: "2022-01-01"
published: true
slug: capacitor-amplitude
---

# Tutorial: Using capacitor-amplitude package

In this tutorial, we will learn how to integrate the capacitor-amplitude package into your Capacitor project. The capacitor-amplitude package allows you to track and analyze user events, such as screen views and user actions, using the Amplitude analytics service.

## Prerequisites

Before we begin, make sure you have the following set up:

- Capacitor 2 or above installed in your project.
- An Amplitude account and an API key.

## Step 1: Install the capacitor-amplitude package

To install the capacitor-amplitude package, run the following command in your project directory:

```shell
npm install capacitor-amplitude
```

Make sure you have the correct version of the package based on your Capacitor version. Refer to the compatibility table below:

| Capacitor Version | Package Version |
|-------------------|-----------------|
| Capacitor 2       | v0.0.8          |
| Capacitor 3       | v0.0.10         |
| Capacitor 5       | v5.0.0          |

Choose the appropriate version and install it accordingly.

## Step 2: Configure Amplitude API key

In your project, open the `capacitor.config.json` file and add your Amplitude API key to the `plugins` section:

```json
{
  "plugins": {
    "CapacitorAmplitude": {
      "apiKey": "YOUR_AMPLITUDE_API_KEY"
    }
  }
}
```

Replace `YOUR_AMPLITUDE_API_KEY` with your actual Amplitude API key.

## Step 3: Import and initialize the plugin

In your project's main `index.ts` or `app.ts` file, import and initialize the `CapacitorAmplitude` plugin:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorAmplitude } = Plugins;

CapacitorAmplitude.initialize();
```

You have now successfully initialized the capacitor-amplitude package.

## Step 4: Track events using Amplitude

You can track various events using the capacitor-amplitude package. For example, to track a screen view event, use the `logScreenView` method:

```typescript
CapacitorAmplitude.logScreenView({
  screenName: 'Home',
  properties: {
    userId: '123',
    userType: 'registered',
  }
});
```

This will log a screen view event for the 'Home' screen with additional properties.

## Step 5: View analytics in Amplitude dashboard

After integrating the capacitor-amplitude package and tracking events, you can view the analytics in your Amplitude dashboard. Login to your Amplitude account and navigate to the dashboard to analyze user engagement and behavior.

## Conclusion

In this tutorial, we learned how to integrate the capacitor-amplitude package into a Capacitor project and track user events using Amplitude. With this package, you can gain valuable insights into user behavior and enhance your app accordingly.

Remember to refer to the compatibility table to ensure you install the correct package version for your Capacitor version. Happy tracking!

