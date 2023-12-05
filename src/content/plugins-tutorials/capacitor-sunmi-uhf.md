---
title: "Using @kduma-autoid/capacitor-sunmi-uhf Package"
description: "A tutorial on how to use the @kduma-autoid/capacitor-sunmi-uhf package in Capacitor."
created_at: "2022-05-22"
published: true
slug: "capacitor-sunmi-uhf"
---

# Using @kduma-autoid/capacitor-sunmi-uhf Package

This tutorial will guide you through the process of using the `@kduma-autoid/capacitor-sunmi-uhf` package in Capacitor. This package provides functionalities for UHF RFID scanning on Sunmi POS devices.

## Installation

To start using the `@kduma-autoid/capacitor-sunmi-uhf` package, follow these steps:

1. Install the package using npm:

```bash
npm install @kduma-autoid/capacitor-sunmi-uhf
```

2. Sync the Capacitor project:

```bash
npx cap sync
```

## Configuration

To configure the package, you need to modify the `capacitor.config.ts` file in your project. Here's an example of how to configure the `@kduma-autoid/capacitor-sunmi-uhf` package:

```typescript
/// <reference types="@kduma-autoid/capacitor-sunmi-uhf" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.company.app",
  ...
  plugins: {
    SunmiUhf: {
      bindOnLoad: true
    }
  }
}
export default config;
```

Set `bindOnLoad` to `true` if you want the service to be automatically bound on load. If you want to manually bind the service, set `bindOnLoad` to `false`.

## API

The `@kduma-autoid/capacitor-sunmi-uhf` package provides the following API:

- `initialize()`: Initializes the UHF RFID reader.
- `startInventory()`: Starts an inventory to scan for UHF tags.
- `stopInventory()`: Stops the running inventory.
- `isUhfReaderAvailable()`: Checks if UHF RFID reader is available.

Here's an example of how to use the API:

```typescript
import { Plugins } from '@capacitor/core';

const { SunmiUhf } = Plugins;

async function initializeUhfReader() {
  try {
    await SunmiUhf.initialize();
    console.log("UHF reader initialized successfully");
  } catch (error) {
    console.error("Failed to initialize UHF reader:", error);
  }
}

async function startUhfInventory() {
  try {
    await SunmiUhf.startInventory();
    console.log("UHF inventory started");
  } catch (error) {
    console.error("Failed to start UHF inventory:", error);
  }
}

async function stopUhfInventory() {
  try {
    await SunmiUhf.stopInventory();
    console.log("UHF inventory stopped");
  } catch (error) {
    console.error("Failed to stop UHF inventory:", error);
  }
}

async function checkUhfReaderAvailability() {
  try {
    const available = await SunmiUhf.isUhfReaderAvailable();
    console.log("UHF reader available:", available);
  } catch (error) {
    console.error("Failed to check UHF reader availability:", error);
  }
}
```
In the above example, the UHF reader is initialized, an inventory is started, and then stopped. Also, the availability of the UHF reader is checked.

That's it! You have now learned how to use the `@kduma-autoid/capacitor-sunmi-uhf` package in your Capacitor project.

Remember to consult the package documentation for more detailed information on the available methods and their parameters.
