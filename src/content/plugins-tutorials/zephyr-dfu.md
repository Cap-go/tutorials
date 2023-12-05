---
title: "Using the zephyr-dfu Package"
description: "A tutorial on how to use the zephyr-dfu package for firmware updates."
created_at: "2022-08-25"
published: true
slug: zephyr-dfu
---

# Using the zephyr-dfu Package

This tutorial will guide you through the process of using the zephyr-dfu package for firmware updates. The zephyr-dfu package provides an implementation of the McuManager protocol supported by Zephyr.

## Installation

To install the zephyr-dfu package, follow these steps:

1. Open a terminal and navigate to your project directory.
2. Run the following command to install the package from npm:

   ```bash
   npm install zephyr-dfu
   ```

3. After the installation is complete, sync your project with Capacitor by running the following command:

   ```bash
   npx cap sync
   ```

## Updating Firmware

The `updateFirmware` method allows you to update the firmware of a device using the zephyr-dfu package. Here is an example of how to use this method:

```typescript
import { Plugins } from '@capacitor/core';
const { zephyrDfu } = Plugins;

// Update firmware
const firmwareUpdateCallback = (result) => {
  console.log('Firmware update result:', result);
};

const updateFirmware = async () => {
  const options = {
    fileURL: 'https://example.com/firmware.bin',
    deviceIdentifier: 'device1',
  };

  const callbackId = await zephyrDfu.updateFirmware(options, firmwareUpdateCallback);
  console.log('Update firmware callback ID:', callbackId);
};
```

In the example code above, you need to replace the `fileURL` and `deviceIdentifier` values with the actual firmware file URL and the identifier of the device you want to update.

## Getting Firmware Version

The `getVersion` method allows you to retrieve the firmware version of a device using the zephyr-dfu package. Here is an example of how to use this method:

```typescript
import { Plugins } from '@capacitor/core';
const { zephyrDfu } = Plugins;

// Get firmware version
const getVersion = async () => {
  const options = {
    deviceIdentifier: 'device1',
  };

  const version = await zephyrDfu.getVersion(options);
  console.log('Firmware version:', version);
};
```

In the example code above, you need to replace the `deviceIdentifier` value with the identifier of the device you want to get the firmware version of.

That's it! You now know how to use the zephyr-dfu package for firmware updates. Happy coding!