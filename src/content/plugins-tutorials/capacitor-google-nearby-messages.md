---
title: "Using capacitor-google-nearby-messages package"
description: "This tutorial will guide you through the process of using the capacitor-google-nearby-messages package in your Capacitor app."
created_at: "2022-02-28"
published: true
slug: "capacitor-google-nearby-messages"
---

# Using capacitor-google-nearby-messages package

This tutorial will guide you through the process of using the capacitor-google-nearby-messages package in your Capacitor app.

## Step 1: Installation

To get started, you need to install the `capacitor-google-nearby-messages` package. Open your terminal and run the following command:

```bash
npm install capacitor-google-nearby-messages
```

## Step 2: Configuration

Next, you need to configure the plugin in your Capacitor app. Open your `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "GoogleNearbyMessages": {
      "apiKey": "YOUR_API_KEY"
    }
  }
}
```

Replace `YOUR_API_KEY` with your actual Google API key.

## Step 3: Import and Initialization

In your TypeScript file, import the `GoogleNearbyMessages` plugin and initialize it:

```typescript
import { Plugins } from '@capacitor/core';

const { GoogleNearbyMessages } = Plugins;

GoogleNearbyMessages.initialize();
```

## Step 4: Start Advertising and Subscribing

You can use the `GoogleNearbyMessages.startAdvertising` method to start advertising your device's presence to nearby devices:

```typescript
const options = {
  namespace: 'example',
  type: 'custom',
  content: 'Hello from my app!'
};

GoogleNearbyMessages.startAdvertising(options).then(() => {
  console.log('Advertising started');
}).catch((error) => {
  console.error('Failed to start advertising', error);
});
```

To subscribe to nearby messages from other devices, use the `GoogleNearbyMessages.subscribe` method:

```typescript
GoogleNearbyMessages.subscribe().then(() => {
  console.log('Subscribed to nearby messages');
}).catch((error) => {
  console.error('Failed to subscribe', error);
});
```

## Step 5: Handling Incoming Messages

To handle incoming messages, you can listen to the `onMessageReceived` event:

```typescript
GoogleNearbyMessages.addListener('onMessageReceived', (data) => {
  console.log('Received message:', data);
});
```

## Step 6: Stop Advertising and Subscribing

When you no longer need to advertise or subscribe, you can stop them using the corresponding methods:

```typescript
GoogleNearbyMessages.stopAdvertising().then(() => {
  console.log('Advertising stopped');
}).catch((error) => {
  console.error('Failed to stop advertising', error);
});

GoogleNearbyMessages.stopSubscribing().then(() => {
  console.log('Stopped subscribing');
}).catch((error) => {
  console.error('Failed to stop subscribing', error);
});
```

That's it! You have successfully added the `capacitor-google-nearby-messages` package to your Capacitor app and implemented the basic functionality. You can now start advertising your device and receiving messages from nearby devices.

Please refer to the official [capacitor-google-nearby-messages documentation](https://github.com/capacitor-community/google-nearby-messages) for more advanced usage and customization options.