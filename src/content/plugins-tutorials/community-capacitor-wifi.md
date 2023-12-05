---
title: "Using the @digaus/wifi Package"
description: "This tutorial will guide you on how to use the @digaus/wifi package in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "community-capacitor-wifi"
---

# Using the @digaus/wifi Package

In this tutorial, we will explore how to use the @digaus/wifi package in your Capacitor app. The @digaus/wifi package provides a set of methods to interact with the Wifi capabilities of the device.

## Installation

To get started, you need to install the @digaus/wifi package in your Capacitor app. Open a terminal and navigate to your project directory. Run the following command:

```
npm install @digaus/wifi
```

This will install the package and add it to your app's dependencies.

## Usage

After installing the @digaus/wifi package, you need to import it in your code. Add the following import statement at the top of your file:

```javascript
import { Wifi } from '@digaus/wifi';
```

Now, you can use the provided methods from the Wifi class to interact with the Wifi capabilities of the device.

### Getting the Current Wifi SSID

To get the current Wifi SSID (Service Set Identifier), you can use the `getCurrentSSID` method. This method returns a Promise that resolves with the SSID as a string. Here's an example:

```javascript
const ssid = await Wifi.getCurrentSSID();
console.log('Current SSID:', ssid);
```

### Getting the Available Wifi Networks

To get a list of available Wifi networks, you can use the `getAvailableNetworks` method. This method returns a Promise that resolves with an array of WifiNetwork objects. Each WifiNetwork object contains information about a specific network, such as the SSID, BSSID (Basic Service Set Identifier), and signal strength. Here's an example:

```javascript
const networks = await Wifi.getAvailableNetworks();
console.log('Available Networks:', networks);
```

### Connecting to a Wifi Network

To connect to a specific Wifi network, you can use the `connect` method. This method takes an object parameter with the following properties:

- **ssid**: The SSID of the network you want to connect to.
- **password**: The password for the network (if required).

Here's an example:

```javascript
const network = { ssid: 'MyWifiNetwork', password: 'MyPassword' };
await Wifi.connect(network);
console.log('Connected to:', network.ssid);
```

### Disconnecting from the Current Wifi Network

To disconnect from the current Wifi network, you can use the `disconnect` method. This method takes no parameters. Here's an example:

```javascript
await Wifi.disconnect();
console.log('Disconnected from the current Wifi network');
```

## Conclusion

In this tutorial, we explored the usage of the @digaus/wifi package in Capacitor apps. We learned how to get the current Wifi SSID, retrieve a list of available Wifi networks, connect to a Wifi network, and disconnect from the current network. This package provides a convenient way to interact with Wifi capabilities in your app.