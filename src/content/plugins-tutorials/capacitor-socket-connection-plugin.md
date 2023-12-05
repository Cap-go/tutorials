---
title: "Using the @spryrocks/capacitor-socket-connection-plugin Package"
description: "A tutorial on how to use the @spryrocks/capacitor-socket-connection-plugin package to establish socket connections in Capacitor apps."
created_at: "2022-10-10"
published: true
slug: "capacitor-socket-connection-plugin"
---

# Using the @spryrocks/capacitor-socket-connection-plugin Package

In this tutorial, we will explore how to use the `@spryrocks/capacitor-socket-connection-plugin` package to establish socket connections in Capacitor apps. The `capacitor-socket-connection-plugin` provides a convenient way to connect to socket servers and send/receive data.

## Installation

To get started, let's install the `@spryrocks/capacitor-socket-connection-plugin` package. Open your terminal and navigate to your Capacitor project directory. Then run the following command:

```bash
npm install @spryrocks/capacitor-socket-connection-plugin
npx cap sync
```

These commands will install the package and synchronize the plugin with your Capacitor project.

## Connecting to a Socket Server

To connect to a socket server, we will first import the necessary classes from the `@spryrocks/capacitor-socket-connection-plugin` package. Add the following import statement at the beginning of your code:

```typescript
import { SocketConnection } from '@spryrocks/capacitor-socket-connection-plugin';
```

Next, create an instance of the `SocketConnection` class and specify the server URL and port. Here's an example:

```typescript
const socket = new SocketConnection('ws://example.com', 8080);
```

Make sure to replace `'ws://example.com'` with the actual URL of your socket server.

## Listening for Events

Once the connection is established, you can listen for various events emitted by the socket server. To do this, use the `addEventListener` method provided by the `SocketConnection` class. Here's an example of how to listen for the `message` event:

```typescript
socket.addEventListener('message', (event) => {
  const message = event.data;
  console.log('Received message:', message);
});
```

In the above example, the callback function receives an `event` object containing the data sent by the server. You can access the data using `event.data`.

## Sending Data

To send data to the server, you can use the `send` method provided by the `SocketConnection` class. Here's an example:

```typescript
const data = { name: 'John', message: 'Hello' };
socket.send(JSON.stringify(data));
```

In the above example, we convert the `data` object to a JSON string using `JSON.stringify` and send it to the server.

## Closing the Connection

When you're done with the socket connection, make sure to close it to free up resources. You can use the `close` method provided by the `SocketConnection` class. Here's an example:

```typescript
socket.close();
```

Closing the socket connection will terminate the connection with the server.

## Conclusion

In this tutorial, we learned how to use the `@spryrocks/capacitor-socket-connection-plugin` package to establish socket connections in Capacitor apps. We covered how to install the package, connect to a socket server, listen for events, send data, and close the connection. With this knowledge, you can implement real-time communication features in your Capacitor applications using socket connections.

Remember to refer to the official documentation of the `@spryrocks/capacitor-socket-connection-plugin` package for more information and advanced usage. Happy socket programming with Capacitor!