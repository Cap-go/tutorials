---
title: "Using @proteansoftware/capacitor-widget-communicator Package"
description: "A tutorial on how to use the @proteansoftware/capacitor-widget-communicator package to communicate between widgets in a Capacitor project."
created_at: "2022-10-26"
published: true
slug: capacitor-widget-communicator
---

# Using @proteansoftware/capacitor-widget-communicator Package

In this tutorial, we will learn how to use the `@proteansoftware/capacitor-widget-communicator` package to enable communication between widgets in a Capacitor project. This package allows you to send messages and data between different widgets within your app. Let's get started!

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor CLI installed globally
- Capacitor project set up
- Basic knowledge of Capacitor and web development

## Step 1: Installing the Package

To use the `@proteansoftware/capacitor-widget-communicator` package in your Capacitor project, you need to install it first. Open your project directory in the terminal and run the following command:

```
npm install @proteansoftware/capacitor-widget-communicator
```

This will install the package and add it to your project's dependencies.

## Step 2: Importing the Package

Next, you need to import the `WidgetCommunicator` class from the package in your widget components. Open the widget component file where you want to use the package and add the following import statement at the top:

```typescript
import { WidgetCommunicator } from '@proteansoftware/capacitor-widget-communicator';
```

## Step 3: Initializing the Widget Communicator

Once the package is imported, you need to initialize the `WidgetCommunicator` in your widget component's constructor or initialization method. Add the following code inside your component:

```typescript
const widgetCommunicator = new WidgetCommunicator();
widgetCommunicator.init();
```

This will initialize the widget communicator and enable communication with other widgets.

## Step 4: Sending Messages

To send a message from one widget to another, you can use the `send` method provided by the widget communicator. The `send` method accepts two parameters: the target widget's ID and the message payload. Here's an example:

```typescript
widgetCommunicator.send('target-widget-id', { message: 'Hello from Source Widget!' });
```

Replace `'target-widget-id'` with the ID of the widget you want to send the message to. You can find the widget IDs by inspecting the widget elements in your app.

## Step 5: Receiving Messages

To receive messages from other widgets, you need to subscribe to the `messageReceived` event emitted by the widget communicator. Here's an example:

```typescript
widgetCommunicator.onMessageReceived.subscribe((message) => {
  console.log('Received message:', message);
});
```

The `onMessageReceived` event will be triggered whenever a message is received from any widget. You can then perform your desired logic based on the received message.

## Step 6: Cleaning Up

Finally, when your widget component is destroyed or no longer needs the widget communicator, make sure to dispose of it by calling the `dispose` method. This will clean up any resources and event listeners associated with the widget communicator. Here's an example:

```typescript
widgetCommunicator.dispose();
```

## Conclusion

In this tutorial, we learned how to use the `@proteansoftware/capacitor-widget-communicator` package to enable communication between widgets in a Capacitor project. We covered installing the package, initializing the widget communicator, sending and receiving messages, and cleaning up the widget communicator.

Now you can leverage the `@proteansoftware/capacitor-widget-communicator` package to build interactive and dynamic widget experiences in your Capacitor apps. Happy coding!