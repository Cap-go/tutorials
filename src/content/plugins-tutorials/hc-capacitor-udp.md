---
title: "Using hc-capacitor-udp Package"
description: "This tutorial will guide you through the process of using the hc-capacitor-udp package in your Ionic Capacitor app."
created_at: "2022-01-01"
published: true
slug: "hc-capacitor-udp"
---

# Using hc-capacitor-udp Package

In this tutorial, we will learn how to integrate and use the hc-capacitor-udp package in your Ionic Capacitor app. The hc-capacitor-udp package allows you to utilize UDP (User Datagram Protocol) in your app for communication purposes.

## Installation

To get started, first install the hc-capacitor-udp package in your Ionic Capacitor app. Open your terminal and navigate to the root directory of your app. Run the following command:

```bash
npm install hc-capacitor-udp
```

This command will install the hc-capacitor-udp package and add it to your app's dependencies.

## Usage

Once the hc-capacitor-udp package is installed, you can start using it in your app. Import the package in your desired module or file as follows:

```javascript
import { HCUDPSocket } from 'hc-capacitor-udp';
```

Now, you can create an instance of the HCUDPSocket class and start using its methods and properties. Here's an example of how to create a UDP socket and send a message:

```javascript
const socket = new HCUDPSocket();

socket.on('message', (data) => {
  console.log('Received message:', data);
});

socket.bind(1234);

socket.send('Hello, Server!', '127.0.0.1', 8888);
```

In the code above, we create an instance of HCUDPSocket and bind it to port 1234. We then send a UDP message to the server at IP address '127.0.0.1' and port 8888. When a message is received, the `message` event is emitted and the data is logged to the console.

## Conclusion

In this tutorial, we explored how to install and use the hc-capacitor-udp package in an Ionic Capacitor app. We learned how to create a UDP socket, bind it to a port, and send/receive UDP messages. With the hc-capacitor-udp package, you can easily implement UDP communication in your app. Happy coding!