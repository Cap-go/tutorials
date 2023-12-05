# Tutorial: Using `capacitor-tcp-connect` Package

## Overview

This tutorial will guide you through the process of using the `capacitor-tcp-connect` package, which allows you to establish TCP connections in a Capacitor app. 

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor project set up
- Basic knowledge of Capacitor and TypeScript
- Understanding of TCP/IP networking concepts

## Installation

To install the `capacitor-tcp-connect` package, run the following command in your Capacitor project:

```bash
npm install capacitor-tcp-connect
```

Make sure to sync your project after installing the package:

```bash
npx cap sync
```

## Usage

### Step 1: Import the `capacitor-tcp-connect` package

In your TypeScript file, import the `capacitor-tcp-connect` package using the following line of code:

```typescript
import { Plugins } from '@capacitor/core';
const { TcpConnect } = Plugins;
```

### Step 2: Establish a TCP connection

To establish a TCP connection, use the `TcpConnect.connect()` method. This method takes in the IP address and port number of the server you want to connect to:

```typescript
const ipAddress = '192.168.0.1';
const port = 8080;

TcpConnect.connect({ address: ipAddress, port: port })
  .then(() => {
    console.log('TCP connection established');
    // Perform additional operations here
  })
  .catch((error) => {
    console.error('Failed to establish TCP connection:', error);
  });
```

### Step 3: Send and receive data

Once the TCP connection is established, you can send and receive data:

```typescript
const dataToSend = 'Hello, server!';

TcpConnect.write({ data: dataToSend })
  .then(() => {
    console.log('Data sent');
  })
  .catch((error) => {
    console.error('Failed to send data:', error);
  });

TcpConnect.read()
  .then((data) => {
    console.log('Received data:', data);
  })
  .catch((error) => {
    console.error('Failed to read data:', error);
  });
```

### Step 4: Close the TCP connection

When you're done with the TCP connection, make sure to close it:

```typescript
TcpConnect.close()
  .then(() => {
    console.log('TCP connection closed');
  })
  .catch((error) => {
    console.error('Failed to close TCP connection:', error);
  });
```

## Conclusion

In this tutorial, you learned how to use the `capacitor-tcp-connect` package to establish and manage TCP connections in a Capacitor app. You can now leverage the power of TCP networking in your app to communicate with remote servers.

---

---
title: "Using capacitor-tcp-connect Package"
description: "Learn how to use the capacitor-tcp-connect package to establish TCP connections in a Capacitor app."
created_at: "2022-06-16"
published: true
slug: "capacitor-tcp-connect"