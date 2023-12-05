---
title: "Using capacitor-eventsource Package"
description: "This tutorial will guide you through using the capacitor-eventsource package to handle server-sent events in your Capacitor application."
created_at: "2022-09-18"
published: true
slug: "capacitor-eventsource"
---

# Using capacitor-eventsource Package

In this tutorial, we will learn how to use the `capacitor-eventsource` package to handle server-sent events in a Capacitor application. Server-sent events (SSE) allow the server to push updates to the client over an established HTTP connection.

## Installation

To begin, let's install the `capacitor-eventsource` package in our Capacitor project.

```bash
npm install capacitor-eventsource
```

## Usage

Once the package is installed, we can import and use it in our application.

```typescript
import { EventSource } from 'capacitor-eventsource';

// Create an instance of EventSource
const eventSource = new EventSource('https://example.com/events');

// EventSource listeners
eventSource.addEventListener('open', () => {
  console.log('Connection established.');
});

eventSource.addEventListener('message', (event) => {
  console.log('Received message:', event.data);
});

eventSource.addEventListener('error', (error) => {
  console.error('Error:', error);
});

eventSource.addEventListener('close', () => {
  console.log('Connection closed.');
});

// Close the connection
eventSource.close();
```

In the above example, we create a new instance of `EventSource` by passing the URL of the server-sent events endpoint. We then add listeners for various events such as `open`, `message`, `error`, and `close`.

The `open` event is triggered when the connection to the server is successfully established. The `message` event is fired when a new event is received from the server. The `error` event is triggered when there is an error in the connection. The `close` event is fired when the connection is closed.

Finally, we show how to manually close the connection using the `close()` method.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-eventsource` package to handle server-sent events in a Capacitor application. By utilizing server-sent events, we can establish a persistent connection with the server and receive real-time updates. This can be useful in scenarios where you need to push data from the server to the client without the need for regular polling.

I hope you found this tutorial helpful. Happy coding!

---
