---
title: "Using signal-plugin package"
description: "A tutorial on how to use the signal-plugin package for Capacitor"
created_at: "2022-10-07"
published: true
slug: "signalplugin"
---

# Using signal-plugin package

In this tutorial, we will learn how to use the `signal-plugin` package for Capacitor. The `signal-plugin` package provides a set of convenient methods for integrating Signal functionality into your Capacitor mobile applications.

## Installation

To install the `signal-plugin` package, you can use the following command:

```shell
npm install signal-plugin
```

## Usage

Once the package is installed, you can import and use the `signal-plugin` methods in your Capacitor project. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { SignalPlugin } = Plugins;

SignalPlugin.initialize();

// Send a signal message
SignalPlugin.sendMessage('Hello, world!');

// Listen for incoming messages
SignalPlugin.addListener('messageReceived', (message) => {
  console.log('Received message:', message);
});
```

In the above code snippet, we first import the `SignalPlugin` from the `@capacitor/core` package. Then, we initialize the `SignalPlugin` and use the `sendMessage` method to send a Signal message. We also add an event listener using the `addListener` method to listen for incoming messages.

## Conclusion

In this tutorial, we have learned how to use the `signal-plugin` package for Capacitor. With the `signal-plugin`, you can easily integrate Signal functionality into your Capacitor mobile applications. Feel free to explore the package's documentation for more advanced usage and features.