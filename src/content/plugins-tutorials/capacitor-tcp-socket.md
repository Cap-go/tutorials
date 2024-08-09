```markdown
---
"title": "How to Use capacitor-tcp-socket Package in Your Capacitor App"
"description": "Learn how to integrate the capacitor-tcp-socket package in your Capacitor app for TCP socket communication."
"created_at": "2023-10-05"
"published": true
"slug": "capacitor-tcp-socket"
---

# Capacitor TCP Socket Plugin Tutorial

In this tutorial, we will go through the steps to use the capacitor-tcp-socket plugin in your Capacitor app for TCP socket communication.

## Installation

First, install the `tcp-capacitor-plugin` package by running the following command:

```bash
npm install tcp-capacitor-plugin
npx cap sync
```

## Example Usage

Once the package is installed, you can use the plugin to establish TCP socket communication. Below is an example of how you can utilize the plugin in your project:

```javascript
// Import the Capacitor Plugin
import { Plugins } from '@capacitor/core';
const { TcpCapacitor } = Plugins;

// Connect to a TCP Server
const connection = await TcpCapacitor.connect({
  address: '192.168.0.1',
  port: 8080
});

// Send Data
await connection.write('Hello from Capacitor!');

// Receive Data
const data = await connection.read();
console.log('Received Data:', data);

// Close Connection
await connection.close();
```

This is a basic example of how you can integrate the capacitor-tcp-socket package in your Capacitor app. You can explore more features and options provided by the plugin in the official documentation.

Happy Coding!
```