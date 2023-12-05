---
title: "Using ln-capacitor-wifi Package"
description: "A tutorial on how to use the ln-capacitor-wifi package in Capacitor"
created_at: "2022-05-09"
published: true
slug: "capacitor-wifi"
---

# Using ln-capacitor-wifi Package

## Introduction

In this tutorial, we will learn how to use the ln-capacitor-wifi package in Capacitor to interact with the device's Wi-Fi functionality. 

## Prerequisites

Before we start, make sure you have the following:

- Capacitor project set up
- Node.js installed
- Basic knowledge of TypeScript

## Installation

To install the ln-capacitor-wifi package, run the following command in your Capacitor project:

```bash
npm install ln-capacitor-wifi
```

## Usage

1. Import the `Wifi` module from `ln-capacitor-wifi` in your TypeScript file:

```typescript
import { Wifi } from 'ln-capacitor-wifi';
```

2. Enable the Wi-Fi functionality by calling the `Wifi.enable()` method:

```typescript
Wifi.enable();
```

3. Get the list of available Wi-Fi networks by calling the `Wifi.getNetworks()` method:

```typescript
const networks = await Wifi.getNetworks();
```

4. Connect to a Wi-Fi network by calling the `Wifi.connect()` method with the network's SSID and password:

```typescript
await Wifi.connect({ ssid: 'MyNetwork', password: 'MyPassword' });
```

5. Disconnect from the currently connected Wi-Fi network by calling the `Wifi.disconnect()` method:

```typescript
await Wifi.disconnect();
```

6. Get the currently connected Wi-Fi network's information by calling the `Wifi.getCurrentNetwork()` method:

```typescript
const currentNetwork = await Wifi.getCurrentNetwork();
```

## Conclusion

In this tutorial, we have learned how to use the ln-capacitor-wifi package in Capacitor to interact with the device's Wi-Fi functionality. We covered installation, enabling Wi-Fi, getting available networks, connecting to a network, disconnecting from a network, and getting current network information.

Now you can integrate Wi-Fi functionality into your Capacitor app using the ln-capacitor-wifi package. Happy coding!