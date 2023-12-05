---
title: "Using capacitor-wifi-direct-test package"
description: "A tutorial on how to use the capacitor-wifi-direct-test package"
created_at: "2022-10-01"
published: true
slug: "capacitor-wifi-direct"
---

# Using capacitor-wifi-direct-test package

In this tutorial, we will learn how to use the capacitor-wifi-direct-test package to enable Wi-Fi Direct functionality in your Capacitor app.

## Installation

To get started, install the capacitor-wifi-direct-test package using npm or yarn:

```bash
npm install capacitor-wifi-direct-test
```

or

```bash
yarn add capacitor-wifi-direct-test
```

## Importing the Plugin

Once the package is installed, you can import it in your project by adding the following line at the top of your script file:

```javascript
import 'capacitor-wifi-direct-test';
```

## Initializing Wi-Fi Direct

To initialize Wi-Fi Direct, you need to call the `initializeWifiDirect()` method. This method sets up the necessary listeners and prepares the Wi-Fi Direct functionality in Capacitor.

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorWifiDirectTest } = Plugins;

CapacitorWifiDirectTest.initializeWifiDirect().then(() => {
  console.log('Wi-Fi Direct initialized');
}).catch((error) => {
  console.error('Failed to initialize Wi-Fi Direct:', error);
});
```

## Discovering Peers

To discover other devices using Wi-Fi Direct, you can call the `discoverPeers()` method. This will trigger a scan for nearby devices and deliver the list of discovered peers through a callback function.

```javascript
CapacitorWifiDirectTest.discoverPeers().then((peers) => {
  console.log('Discovered peers:', peers);
}).catch((error) => {
  console.error('Failed to discover peers:', error);
});
```

## Connecting to a Peer

Once you have discovered a peer that you want to connect to, you can call the `connectToPeer(peer)` method, passing the peer object as a parameter. This will initiate a connection with the selected peer.

```javascript
const peer = {
  name: "John's Phone",
  address: "01:23:45:67:89:AB",
};

CapacitorWifiDirectTest.connectToPeer(peer).then(() => {
  console.log('Connected to peer:', peer.name);
}).catch((error) => {
  console.error('Failed to connect to peer:', error);
});
```

## Sending and Receiving Data

Once a connection is established, you can send and receive data with the connected peer. The `sendData(data)` method allows you to send data to the connected peer, while the `addDataReceivedListener()` method sets up a listener for receiving data from the peer.

```javascript
const data = {
  message: "Hello from my app!",
};

CapacitorWifiDirectTest.sendData(data).then(() => {
  console.log('Data sent:', data);
}).catch((error) => {
  console.error('Failed to send data:', error);
});

CapacitorWifiDirectTest.addDataReceivedListener().subscribe((receivedData) => {
  console.log('Received data:', receivedData);
});
```

## Closing the Connection

To gracefully close the connection with the connected peer, you can call the `disconnect()` method.

```javascript
CapacitorWifiDirectTest.disconnect().then(() => {
  console.log('Disconnected from peer');
}).catch((error) => {
  console.error('Failed to disconnect:', error);
});
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-wifi-direct-test package to enable Wi-Fi Direct functionality in a Capacitor app. We covered the installation process, initializing Wi-Fi Direct, discovering peers, connecting to a peer, sending and receiving data, and closing the connection.

Now you can leverage Wi-Fi Direct in your Capacitor app to share data and communicate directly with nearby devices. Happy coding!