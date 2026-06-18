---
title: Using Capacitor UDP Socket Package Tutorial
description: This tutorial will guide you on how to use the capacitor-udp-socket package in your CapacitorJS project.
created_at: 2023-10-15
published: true
slug: capacitor-udp-socket.git
locale: en
---

# Capacitor UDP Socket Package Tutorial

In this tutorial, we will go over how to use the `capacitor-udp-socket` package in your CapacitorJS project.

## Installation

First, install the `@frontall/capacitor-udp` package by running:

```bash
npm install @frontall/capacitor-udp
npx cap sync
```

## Usage

### Creating a Socket

To create a socket, use the `create` method:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorUdp } = Plugins;

const socket = CapacitorUdp.create({ properties: { name: 'mySocket', bufferSize: 1024 } });
```

### Updating a Socket

You can update a socket's properties using the `update` method:

```typescript
CapacitorUdp.update({ socketId: socket.id, properties: { bufferSize: 2048 } });
```

### Sending Data

To send data through the socket, use the `send` method:

```typescript
CapacitorUdp.send({ socketId: socket.id, address: '192.168.0.1', port: 8080, buffer: 'Hello, World!' });
```

### Closing a Socket

When you are done with a socket, you can close it:

```typescript
CapacitorUdp.close({ socketId: socket.id });
```

## Conclusion

This tutorial covered the basic usage of the `capacitor-udp-socket` package in a CapacitorJS project. You can explore more features and functionalities based on your project requirements.
