---
title: "Using the TJ Root Checker Plugin for Capacitor"
description: "A tutorial on how to use the TJ Root Checker plugin to detect rooted or jailbroken devices in Capacitor."
created_at: "2022-05-05"
published: true
slug: "tj-root-jailbreak-checker"
---

# Using the TJ Root Checker Plugin for Capacitor

The TJ Root Checker Plugin is a useful npm package designed to detect whether an Android or iOS device is rooted or jailbroken. In this tutorial, we will walk through the steps to install and use the plugin in your Ionic Capacitor app.

## Installation

To get started, follow these steps to install the TJ Root Checker plugin in your Ionic Capacitor app:

1. Install the npm package in your app's root directory:

```bash
npm install tj-root-check
npx cap sync
```

## Usage

After the installation, you can use the RootCheckerPlugin in your TypeScript code to check whether the device is rooted or jailbroken. Here's an example of how to do it:

1. Import the plugin in your TypeScript code:

```bash
import { Plugins } from '@capacitor/core';
const { RootCheckerPlugin } = Plugins;
```

2. Run the checkRootStatus() function to check whether the device is rooted or jailbroken:

```bash
async function checkRootStatus() {
  try {
    const result = await RootCheckerPlugin.isDeviceRooted();
    console.log('Device is rooted:', result.isRooted);
  } catch (error) {
    console.error('Error checking rooted status:', error);
  }
}

// Call the function to check rooted status
checkRootStatus();
```

## Return Value

The isDeviceRooted() function returns a Promise that resolves to an object with a single property isRooted. This property is a boolean indicating whether the device is rooted or jailbroken. If the device is rooted/jailbroken, the value will be true; otherwise, it will be false.

## Compatibility

The TJ Root Checker Plugin is compatible with Capacitor 2.x and above. It supports both Android and iOS platforms.

## Conclusion

In this tutorial, we have learned how to install and use the TJ Root Checker Plugin in an Ionic Capacitor app. By checking whether a device is rooted or jailbroken, you can ensure the security and integrity of your applications. Feel free to explore the plugin's GitHub repository for any issues or contributions.

If you have any questions or need support, you can reach out to the package author, Mr. Tj Patel, at tjpatel@reachable.com.

Remember to always prioritize security in your app development process!