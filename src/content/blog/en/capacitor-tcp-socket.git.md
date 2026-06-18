---
title: Using Capacitor TCP Socket Package Tutorial
description: This tutorial provides guidelines on how to utilize the capacitor-tcp-socket package in your Capacitor app.
created_at: 2023-10-12
published: true
slug: capacitor-tcp-socket.git
locale: en
---

# Using Capacitor TCP Socket Package Tutorial

In this tutorial, you will learn how to incorporate the `capacitor-tcp-socket` package into your Capacitor application to enable TCP socket communications.

## Installation

To get started, install the `capacitor-tcp-socket` package using npm:

```bash
npm install capacitor-tcp-socket
```

Make sure to sync the Capacitor project after installing the package:

```bash
npx cap sync
```

## Usage

### Import the Package

First, import the `Socket` class from `capacitor-tcp-socket` package in your code:

```typescript
import { Socket } from 'capacitor-tcp-socket';
```

### Create a TCP Socket Connection

Next, establish a TCP socket connection using the `Socket` class:

```typescript
const socket = new Socket();
await socket.connect({ 
  address: '192.168.1.100', 
  port: 8080 
});
```

### Send and Receive Data

You can now send and receive data over the TCP connection:

```typescript
// Sending data
await socket.write({ data: 'Hello from Capacitor!' });

// Receiving data
socket.addListener('data', (data) => {
  console.log('Received: ' + data);
});
```

### Close the Connection

Remember to close the TCP connection after you finish using it:

```typescript
await socket.close();
```

## Conclusion

In this tutorial, you have learned how to use the `capacitor-tcp-socket` package to handle TCP socket communication in your Capacitor app. Happy coding!
