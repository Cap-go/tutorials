---
"title": "Using Capacitor UDP Socket Package",
"description": "A step-by-step tutorial on how to use the capacitor-udp-socket package in CapacitorJS.",
"created_at": "October 19, 2021",
"published": true,
"slug": "capacitor-udp-socket"
---

# Using Capacitor UDP Socket Package

In this tutorial, we will walk through how to use the capacitor-udp-socket package with CapacitorJS. The capacitor-udp-socket package provides UDP Plugin functionalities for CapacitorJS and is suitable for CapacitorJS 3+.

## Installation

To get started, install the capacitor-udp-socket package using npm and sync the Capacitor project:

```bash
npm install @frontall/capacitor-udp
npx cap sync
```

## Basic Usage

### 1. Create a Socket

You can create a socket using the `create` method and specify the name and bufferSize if needed:

```typescript
const socket = create({ properties: { name: 'example', bufferSize: 1024 } });
```

### 2. Update a Socket

To update the properties of a socket, use the `update` method:

```typescript
update({ socketId: socket.id, properties: { name: 'newName', bufferSize: 2048 } });
```

### 3. Bind a Socket

Bind a socket to a specific address and port using the `bind` method:

```typescript
bind({ socketId: socket.id, address: '127.0.0.1', port: 8080 });
```

### 4. Send Data

Send data over the socket to a specified address and port:

```typescript
send({ socketId: socket.id, address: '127.0.0.1', port: 8080, buffer: 'Hello, World!' });
```

### 5. Handle Received Data

You can add listeners to handle received data by adding an event listener:

```typescript
addListener(socket.id, (data) => {
  console.log('Received data:', data);
});
```

## Conclusion

This tutorial covered the basic usage of the capacitor-udp-socket package in CapacitorJS. You can explore more features and functionalities of UDP communication by referring to the documentation.

Happy coding!