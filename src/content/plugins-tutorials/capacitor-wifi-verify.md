Sure, here's a Markdown tutorial for using the `capacitor-wifi-verify` package:

---
title: "Using capacitor-wifi-verify"
description: "Learn how to use the capacitor-wifi-verify package to verify WiFi connectivity in a Capacitor app."
created_at: "2022-02-15"
published: true
slug: "capacitor-wifi-verify"
---

# Using capacitor-wifi-verify

In this tutorial, we will learn how to use the `capacitor-wifi-verify` package to verify the WiFi connectivity in a Capacitor app. The `capacitor-wifi-verify` package provides methods to check whether the device is connected to a WiFi network.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor

## Step 1: Install the `capacitor-wifi-verify` package

Open your project's terminal and run the following command to install the package:

```bash
npm install capacitor-wifi-verify
```

## Step 2: Add the plugin to your Capacitor project

Once the installation is complete, you need to add the plugin to your Capacitor project. Run the following command in your project's terminal:

```bash
npx cap update
```

## Step 3: Import and initialize the plugin

In your project's code, import and initialize the `capacitor-wifi-verify` plugin. Add the following code to the relevant file:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorWifiVerify } = Plugins;

// Initialize the plugin
CapacitorWifiVerify.initialize();
```

## Step 4: Check WiFi connectivity

Now that the plugin is initialized, you can use the provided methods to check the WiFi connectivity. Here's an example of how to check if the device is currently connected to a WiFi network:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorWifiVerify } = Plugins;

async function checkWifiConnectivity() {
  const isConnected = await CapacitorWifiVerify.isConnected();

  if (isConnected) {
    console.log('Device is connected to a WiFi network.');
  } else {
    console.log('Device is not connected to a WiFi network.');
  }
}

checkWifiConnectivity();
```

## Conclusion

In this tutorial, we've learned how to use the `capacitor-wifi-verify` package to verify WiFi connectivity in a Capacitor app. We covered the installation process, initializing the plugin, and checking the WiFi connectivity status.

Now you can use the `capacitor-wifi-verify` package to enhance your Capacitor app by adding WiFi connectivity verification functionality.

That's it! If you have any questions or run into any issues, feel free to ask for help.

Happy coding!