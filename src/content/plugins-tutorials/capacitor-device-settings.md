---
title: "Using @anuradev/capacitor-device-settings Package"
description: "This tutorial will guide you on how to use the @anuradev/capacitor-device-settings package in your Capacitor app."
created_at: "2021-10-09"
published: true
slug: "capacitor-device-settings"
---

# Using @anuradev/capacitor-device-settings Package

In this tutorial, we will walk through the steps of using the `@anuradev/capacitor-device-settings` package in your Capacitor app. This package provides a convenient wrapper for accessing device settings such as network, display, and more.

## Installation

To get started, ensure that you have Capacitor installed in your project:

```bash
npm install @capacitor/core @capacitor/cli
```

Next, install the `@anuradev/capacitor-device-settings` package:

```bash
npm install @anuradev/capacitor-device-settings
```

## Usage

1. Import the `DeviceSettings` module from the `@anuradev/capacitor-device-settings` package:

```javascript
import { DeviceSettings } from '@anuradev/capacitor-device-settings';
```

2. Retrieve a specific device setting value:

```javascript
const networkType = await DeviceSettings.getNetworkType();
console.log('Network Type:', networkType);
```

3. Update a device setting:

```javascript
// Example: Set the screen brightness to 50%
await DeviceSettings.setScreenBrightness(0.5);
```

4. Listen for changes in a device setting:

```javascript
DeviceSettings.addSettingChangeListener((settingName, newValue) => {
  console.log('Setting changed:', settingName);
  console.log('New value:', newValue);
});
```

That's it! You now have a basic understanding of how to use the `@anuradev/capacitor-device-settings` package in your Capacitor app.

Feel free to explore the package's documentation for additional features and methods.

Remember to always refer to the official Capacitor and package documentation for detailed usage instructions and updates.

Happy coding!