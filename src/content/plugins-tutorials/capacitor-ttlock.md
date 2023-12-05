---
title: "Using capacitor-ttlock Package"
description: "This tutorial will guide you through the process of using the capacitor-ttlock package in your app."
created_at: "2021-11-01"
published: true
slug: "capacitor-ttlock"
---

# Using capacitor-ttlock Package

This tutorial will guide you through the process of using the `capacitor-ttlock` package in your app. `capacitor-ttlock` is a Capacitor plugin that provides integration with the TTLock smart lock system.

## Installation

To start using `capacitor-ttlock`, follow these steps:

1. Make sure you have the latest version of Capacitor installed in your project. You can install Capacitor globally by running the following command:

```bash
npm install -g @capacitor/cli
```

2. Add the `capacitor-ttlock` package to your project:

```bash
npm install capacitor-ttlock
```

3. Install any required dependencies by running the following command:

```bash
npx cap sync
```

4. Configure `capacitor-ttlock` by adding your TTLock credentials to your `capacitor.config.json` file:

```json
{
  "plugins": {
    "CapacitorTTLock": {
      "clientId": "YOUR_CLIENT_ID",
      "clientSecret": "YOUR_CLIENT_SECRET"
    }
  }
}
```

Replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with your actual TTLock API credentials.

That's it! You have successfully installed and configured `capacitor-ttlock` in your project.

## Usage

Once `capacitor-ttlock` is installed and configured, you can start using its features in your app:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorTTLock } = Plugins;
```

Now you can use the various methods provided by `capacitor-ttlock`, such as:

- `CapacitorTTLock.initialize()` - Initializes the TTLock SDK.
- `CapacitorTTLock.startBLEDeviceScan()` - Starts scanning for nearby TTLock devices.
- `CapacitorTTLock.lock()` - Locks a TTLock device.
- `CapacitorTTLock.unlock()` - Unlocks a TTLock device.

Refer to the [`capacitor-ttlock` documentation](https://github.com/example-user/capacitor-ttlock) for more details on available methods and their usage.

## Conclusion

In this tutorial, we have learned how to install, configure, and use the `capacitor-ttlock` package in your Capacitor app. You can now integrate the TTLock smart lock system into your app and control TTLock devices seamlessly.

Feel free to explore the [`capacitor-ttlock` GitHub repository](https://github.com/example-user/capacitor-ttlock) for more information and examples.