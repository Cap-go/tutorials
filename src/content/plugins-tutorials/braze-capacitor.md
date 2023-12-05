---
title: "Using the braze-capacitor Package"
description: "This tutorial will guide you on how to use the braze-capacitor package in your Capacitor app."
created_at: "2022-02-28"
published: true
slug: "braze-capacitor"
---

# Using the braze-capacitor Package

In this tutorial, we'll explore how to integrate the braze-capacitor package into your Capacitor app. The braze-capacitor package allows you to easily incorporate Braze functionalities, such as push notifications, in-app messaging, and analytics, into your Capacitor project.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

1. Capacitor installed in your project.
2. A Braze account and API key.
3. Basic knowledge of Capacitor and JavaScript.

## Step 1: Install the braze-capacitor Package

To begin, install the braze-capacitor package by running the following command in your project directory:

```bash
npm install braze-capacitor
```

Alternatively, you can use yarn to install the package:

```bash
yarn add braze-capacitor
```

## Step 2: Configure Your Braze Account

Next, you'll need to configure your Braze account. Retrieve your Braze API key and make sure you have set up the necessary configurations for push notifications, in-app messaging, and analytics within your Braze dashboard. 

## Step 3: Initialize the Plugin

To use the braze-capacitor package, you'll first need to initialize the plugin. Open your `capacitor.config.json` file and add the following code:

```json
"plugins": {
  "BrazeCapacitor": {
    "apiKey": "YOUR_BRAZE_API_KEY",
    "enableSDKInitialization": true
  }
}
```

Replace `YOUR_BRAZE_API_KEY` with your actual Braze API key.

## Step 4: Import and Use the Package in Your Code

Now that you've installed the package and configured your Braze account, you can import and use the braze-capacitor package in your code. Here's an example of how to send a push notification:

```typescript
import { Plugins } from '@capacitor/core';

const { BrazeCapacitor } = Plugins;

// Function to send a push notification
async function sendPushNotification() {
  try {
    const result = await BrazeCapacitor.pushNotification({
      title: 'New Sale',
      body: 'Check out our latest offers!',
      deepLink: 'myapp://offers',
      imageUrl: 'https://example.com/image.jpg',
    });
    
    console.log('Push notification sent:', result);
  } catch (error) {
    console.error('Failed to send push notification:', error);
  }
}

sendPushNotification();
```

Feel free to explore the braze-capacitor package documentation for more available functionalities and usage examples.

## Conclusion

In this tutorial, we covered the basic steps to install, configure, and use the braze-capacitor package in your Capacitor app. You've learned how to integrate Braze functionalities into your app, such as push notifications, in-app messaging, and analytics. Remember to refer to the official documentation for detailed information and advanced usage. Happy coding with Braze and Capacitor!

Please note that the commands and examples provided in this tutorial are subject to change based on the package updates and compatibility with the Capacitor version you are using.