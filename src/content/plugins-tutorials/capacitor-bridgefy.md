---
title: "Using capacitor-bridgefy package"
description: "A tutorial on how to use the capacitor-bridgefy package in your Capacitor project."
created_at: "2022-10-20"
published: true
slug: "capacitor-bridgefy"
---

# Using capacitor-bridgefy package

In this tutorial, we will learn how to use the capacitor-bridgefy package in your Capacitor project. The capacitor-bridgefy package provides a seamless integration with the Bridgefy SDK, allowing you to create peer-to-peer communication channels for your mobile applications.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI

## Step 1: Install the capacitor-bridgefy package

To get started, open your terminal and navigate to your Capacitor project directory. Run the following command to install the capacitor-bridgefy package:

```bash
npm install capacitor-bridgefy
```

This command will download and install the package along with its dependencies.

## Step 2: Sync the Capacitor project

After installing the capacitor-bridgefy package, you need to sync your Capacitor project to make sure the package is correctly integrated. Run the following command in your terminal:

```bash
npx cap sync
```

This command will sync the Capacitor project and update the native code for Android and iOS.

## Step 3: Initialize Bridgefy

Before you can start using the capacitor-bridgefy package, you need to initialize the Bridgefy SDK. Open your project's main JavaScript or TypeScript file (e.g., `index.js` or `index.ts`) and import the capacitor-bridgefy package:

```javascript
import 'capacitor-bridgefy';
```

Next, initialize the Bridgefy SDK in your code. You can do this by calling the `Bridgefy.initialize()` method:

```javascript
import { Bridgefy } from 'capacitor-bridgefy';

Bridgefy.initialize();
```

This will initialize the Bridgefy SDK and prepare it for use in your application.

## Step 4: Create a communication channel

Once the Bridgefy SDK is initialized, you can create a communication channel to send and receive messages between devices. To create a channel, use the `Bridgefy.createChannel()` method:

```javascript
Bridgefy.createChannel(channelId, data => {
  console.log('Received message:', data);
});
```

In the above code, `channelId` is a unique identifier for the channel, and the callback function will be executed whenever a message is received on the channel. You can customize the callback function to handle the received messages as per your application's logic.

## Step 5: Send a message

To send a message through the created channel, use the `Bridgefy.sendMessage()` method:

```javascript
Bridgefy.sendMessage(channelId, message);
```

In the above code, `channelId` is the identifier of the channel to send the message to, and `message` is the content of the message you want to send.

## Conclusion

In this tutorial, we learned how to use the capacitor-bridgefy package to integrate the Bridgefy SDK into your Capacitor project. We covered the installation process, initialization of the Bridgefy SDK, creating a communication channel, and sending messages.

With the capacitor-bridgefy package, you can easily add peer-to-peer communication capabilities to your mobile applications. Explore the Bridgefy documentation to discover more advanced features and possibilities.

I hope this tutorial was helpful in getting started with capacitor-bridgefy. Happy coding!