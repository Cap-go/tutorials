---
title: "Using @wahr/capacitor-websocket-client Package"
description: "A tutorial on how to use the @wahr/capacitor-websocket-client package in Capacitor"
created_at: "2022-10-15"
published: true
slug: "capacitor-websocket-client"
---

# Using @wahr/capacitor-websocket-client Package

In this tutorial, we will learn how to use the @wahr/capacitor-websocket-client package in Capacitor. This package provides a WebSocket client implementation for Capacitor apps, allowing you to communicate with WebSocket servers.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI: `npm install -g @capacitor/cli`

## Step 1: Create a new Capacitor project

First, let's create a new Capacitor project. Open your terminal and run the following command:

```bash
npx @capacitor/cli create
```

Follow the prompts to specify the project name, app package ID, and app name. Once the project is created, navigate to the project directory:

```bash
cd <project-name>
```

## Step 2: Install the @wahr/capacitor-websocket-client package

Next, let's install the @wahr/capacitor-websocket-client package. Run the following command in your project directory:

```bash
npm install @wahr/capacitor-websocket-client
```

## Step 3: Configure the Capacitor plugin

To use the @wahr/capacitor-websocket-client package in your app, you need to configure the Capacitor plugin. Open the `capacitor.config.json` file in your project root directory and add the following configuration:

```json
{
  "plugins": {
    "CapacitorWebsocketClient": {
      "url": "<websocket-server-url>"
    }
  }
}
```

Replace `<websocket-server-url>` with the URL of your WebSocket server.

## Step 4: Import and initialize the WebSocket client

Now, let's import and initialize the WebSocket client in your app. Open the `src/App.tsx` file and add the following import statement at the top:

```typescript
import { CapacitorWebsocketClientPlugin } from '@wahr/capacitor-websocket-client';
```

Next, add the following code inside the `componentDidMount` method of the `App` component:

```typescript
componentDidMount() {
  CapacitorWebsocketClientPlugin.connect();
}
```

This code connects the WebSocket client to the server specified in the plugin configuration.

## Step 5: Sending and receiving WebSocket messages

To send and receive WebSocket messages, you can use the `send` and `addListener` methods provided by the `CapacitorWebsocketClientPlugin`. Here's an example of how to send a message and listen for incoming messages:

```typescript
// Sending a WebSocket message
CapacitorWebsocketClientPlugin.send('Hello, WebSocket Server!');

// Listening for incoming WebSocket messages
CapacitorWebsocketClientPlugin.addListener('message', (message: string) => {
  console.log('Received message:', message);
});
```

You can replace the `send` method's argument with the desired message, and handle the incoming messages inside the `addListener` callback function.

## Step 6: Disconnecting from the WebSocket server

When you're done using the WebSocket client, make sure to disconnect from the server. You can do this by adding the following code inside the `componentWillUnmount` method of the `App` component:

```typescript
componentWillUnmount() {
  CapacitorWebsocketClientPlugin.disconnect();
}
```

This code disconnects the WebSocket client from the server.

## Conclusion

In this tutorial, we learned how to use the @wahr/capacitor-websocket-client package to communicate with WebSocket servers in Capacitor apps. We covered the installation process, plugin configuration, initializing the WebSocket client, sending and receiving messages, and disconnecting from the server. With this knowledge, you can now integrate WebSocket functionality into your Capacitor apps effectively.

Remember to refer to the package documentation for more detailed information on the available methods and options.

Happy coding!