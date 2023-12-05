---
title: "Using @nesto-software/capacitor-websocket package"
description: "This tutorial will guide you through the process of using the @nesto-software/capacitor-websocket package in your Capacitor app."
created_at: "2021-11-01"
published: true
slug: "capacitor-websocket"
---

# Using @nesto-software/capacitor-websocket package

In this tutorial, we will learn how to integrate the @nesto-software/capacitor-websocket package into your Capacitor app. This package provides a simple and efficient way to establish WebSocket connections in your app.

## Prerequisites

Before we get started, make sure you have the following prerequisites installed:

- Node.js and npm
- Capacitor CLI
- Capacitor project set up

If you haven't set up a Capacitor project yet, you can create one using the following command:

```bash
npx @capacitor/create-app
```

## Installation

To install the @nesto-software/capacitor-websocket package, run the following command in your project directory:

```bash
npm install @nesto-software/capacitor-websocket
```

## Configuration

After installing the package, we need to configure it to work with our Capacitor app.

### Android Configuration

Open the `android/app/src/main/java/<your-package-name>/MainActivity.java` file, and import the package:

```java
import com.nesto.capacitorwebsocket.CapacitorWebSocket;
```

Next, add the following line to the `init` method:

```java
add(CapacitorWebSocket.class);
```

### iOS Configuration

Open the `ios/App/AppDelegate.swift` file, and import the package:

```swift
import CapacitorWebSocket
```

Next, add the following line inside the `application` method:

```swift
bridge!.add(CapacitorWebSocket.self)
```

## Usage

Now that we have installed and configured the package, let's look at how to use it in our code.

### Establishing a WebSocket Connection

To establish a WebSocket connection, import the package in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorWebSocket } = Plugins;
```

Next, use the `connect` method to establish a connection:

```typescript
const socket = await CapacitorWebSocket.connect('wss://example.com/ws');
```

Replace `'wss://example.com/ws'` with the actual WebSocket URL you want to connect to.

### Sending and Receiving Messages

Once the connection is established, you can send and receive messages.

To send a message, use the `send` method:

```typescript
socket.send('Hello from client!');
```

To receive messages, you need to listen for the `message` event:

```typescript
socket.addListener('message', (data) => {
  console.log('Received message:', data);
});
```

### Closing the Connection

To close the WebSocket connection, use the `close` method:

```typescript
socket.close();
```

## Conclusion

In this tutorial, we learned how to install and use the @nesto-software/capacitor-websocket package in a Capacitor app. We looked at the configuration steps for Android and iOS, and how to establish a WebSocket connection, send and receive messages, and close the connection. Now you can leverage the power of WebSocket communication in your Capacitor app!

Remember to refer to the package documentation for more advanced usage and customization options.