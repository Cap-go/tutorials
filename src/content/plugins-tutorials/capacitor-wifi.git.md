```markdown
---
"title": "Using @codext/capacitor-wifi Package Tutorial"
"description": "Step-by-step guide to integrating and using the @codext/capacitor-wifi package in Capacitor projects."
"created_at": "October 24, 2021"
"published": true
"slug": "capacitor-wifi.git"
---

# Getting Started with @codext/capacitor-wifi

In this tutorial, we will walk through the process of integrating and using the @codext/capacitor-wifi package in your Capacitor project.

## Installation

To get started, you need to install the @codext/capacitor-wifi package in your Capacitor project. Run the following command:

```bash
npm install @codext/capacitor-wifi
```

## Usage

Now that you have installed the package, you can start using it in your project. Here is an example of how to use @codext/capacitor-wifi:

```typescript
import { Plugins } from '@capacitor/core';

const { Wifi } = Plugins;

// Retrieve the list of available wifi networks
const getWifiNetworks = async () => {
  const networks = await Wifi.getWifiNetworks();
  console.log('Wifi Networks:', networks);
};

// Connect to a specific wifi network
const connectToWifi = async (ssid: string, password: string) => {
  const connected = await Wifi.connectToWifi({ ssid, password });
  if (connected) {
    console.log('Connected to Wifi:', ssid);
  } else {
    console.error('Failed to connect to Wifi:', ssid);
  }
};

// Disconnect from the current wifi network
const disconnectFromWifi = async () => {
  await Wifi.disconnectFromWifi();
  console.log('Disconnected from Wifi');
};
```

This is just a basic overview of how to use @codext/capacitor-wifi in your project. For more detailed information, refer to the official documentation.
```