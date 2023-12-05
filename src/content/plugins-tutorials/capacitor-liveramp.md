# Tutorial: Using capacitor-liveramp package

In this tutorial, we will explore how to use the capacitor-liveramp package in your Capacitor app.

## Installation

To get started, you need to install the capacitor-liveramp package. Open your terminal and run the following command:

```bash
npm install capacitor-liveramp
```

## Setup

Once the package is installed, you need to configure it in your project.

1. Open the `capacitor.config.json` file in the root of your project.

2. Inside the `plugins` section, add the following code:

```json
"capacitor-liveramp": {
  "appID": "YOUR_APP_ID"
}
```

Replace `YOUR_APP_ID` with your actual LiveRamp app ID.

## Usage

With the capacitor-liveramp package installed and configured, you can now use it in your app.

```typescript
import { Plugins } from '@capacitor/core';
const { LiveRamp } = Plugins;

// Example usage
async function trackEvent() {
  try {
    const eventName = 'Add To Cart';
    const eventData = { product: 'Example Product', quantity: 1 };
    await LiveRamp.trackEvent(eventName, eventData);
    console.log('Event tracked successfully');
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}
```

In the above example, we import the `LiveRamp` plugin from `@capacitor/core` and use the `trackEvent` method to send an event to LiveRamp.

Make sure to replace `'Add To Cart'` with your event name, and `{ product: 'Example Product', quantity: 1 }` with your event data.

## Conclusion

In this tutorial, we learned how to install, configure, and use the capacitor-liveramp package in a Capacitor app. With this package, you can easily track events in your app and integrate with LiveRamp.

---
title: "Using capacitor-liveramp package"
description: "A tutorial on how to use the capacitor-liveramp package for event tracking in a Capacitor app."
created_at: "2022-10-20"
published: true
slug: "capacitor-liveramp"
---