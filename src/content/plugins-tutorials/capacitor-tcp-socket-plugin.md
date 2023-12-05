---
title: "Using Capacitor TCP Socket Plugin"
description: "A tutorial on how to use the capacitor-tcp-socket-plugin to implement TCP socket communication in Capacitor."
created_at: "2022-08-05"
published: true
slug: "capacitor-tcp-socket-plugin"
---

# Using Capacitor TCP Socket Plugin

In this tutorial, we will learn how to use the capacitor-tcp-socket-plugin to implement TCP socket communication in Capacitor. The capacitor-tcp-socket-plugin allows you to establish TCP connections, send and receive data over the network using TCP sockets.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Capacitor CLI: You can install it globally by running the following command:
  ```
  npm install -g @capacitor/cli
  ```

## Installation

To get started, follow these steps to install the capacitor-tcp-socket-plugin in your Capacitor project:

1. Open your project's root directory in a terminal.
2. Run the following command to install the capacitor-tcp-socket-plugin:
   ```
   npm install capacitor-tcp-socket-plugin
   ```

## Usage

Once you have installed the capacitor-tcp-socket-plugin, you can start using it in your Capacitor project. Follow these steps to establish a TCP connection and send/receive data:

1. Import the plugin in your TypeScript/JavaScript file:
   ```javascript
   import { Plugins } from '@capacitor/core';
   const { CapacitorTcpSocketPlugin } = Plugins;
   ```

2. Establish a TCP connection:
   ```javascript
   const connect = async () => {
     try {
       await CapacitorTcpSocketPlugin.connect({
         address: '<server_address>',
         port: <server_port>,
         timeout: <connection_timeout>,
       });
       console.log('Connected to the server');
     } catch (error) {
       console.error('Failed to connect:', error);
     }
   };
   ```

   Replace `<server_address>` with the IP address or hostname of the server, `<server_port>` with the port number, and `<connection_timeout>` with the desired timeout value in milliseconds.

3. Send data:
   ```javascript
   const sendData = async () => {
     try {
       const data = 'Hello, server!';
       await CapacitorTcpSocketPlugin.write({ data });
       console.log('Data sent successfully');
     } catch (error) {
       console.error('Failed to send data:', error);
     }
   };
   ```

   Replace `'Hello, server!'` with the data you want to send.

4. Receive data:
   ```javascript
   const listenData = () => {
     CapacitorTcpSocketPlugin.addListener('dataReceived', (data) => {
       console.log('Received data:', data);
     });
   };
   ```

5. Disconnect from the server:
   ```javascript
   const disconnect = async () => {
     try {
       await CapacitorTcpSocketPlugin.disconnect();
       console.log('Disconnected from the server');
     } catch (error) {
       console.error('Failed to disconnect:', error);
     }
   };
   ```

Congratulations! You have successfully implemented TCP socket communication in your Capacitor project using the capacitor-tcp-socket-plugin. Feel free to explore more plugin functionalities and customize the code as per your requirements.

## Conclusion

In this tutorial, we learned how to use the capacitor-tcp-socket-plugin to establish TCP connections, send and receive data over the network in Capacitor. You can now leverage this plugin to build powerful networking features in your Capacitor applications.

Remember to refer to the [Capacitor TCP Socket Plugin documentation](https://github.com/example/capacitor-tcp-socket-plugin) for detailed information on plugin options and additional functionalities.

Happy coding!