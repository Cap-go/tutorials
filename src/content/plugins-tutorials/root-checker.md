---
title: How to Use Root Checker Package
description: Learn how to integrate and use the Root Checker package in your Ionic Capacitor app to detect rooted or jailbroken devices.
created_at: October 11, 2021
published: true
slug: root-checker
---

# How to Use Root Checker Package

In this tutorial, we will guide you through the process of integrating and using the Root Checker package in your Ionic Capacitor app to detect rooted or jailbroken devices.

## Installation

To get started, you need to install the Root Checker package in your app's root directory. Use the following command in your terminal:

```bash
npm install rootcheck-capacitor-plugin
npx cap sync
```

## Usage

After installation, you can import the Root Checker plugin in your TypeScript code as shown below:

```bash
import { Plugins } from '@capacitor/core';
const { RootCheckerPlugin } = Plugins;
```

Next, you can use the `isDeviceRooted()` function to check whether the device is rooted or jailbroken. Here is an example code snippet:

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

The `isDeviceRooted()` function returns a Promise that resolves to an object with a single property `isRooted`, which is a boolean indicating whether the device is rooted or jailbroken. If the device is rooted/jailbroken, `isRooted` will be `true`; otherwise, it will be `false`.

## Compatibility

This plugin is compatible with Capacitor 2.x and above. It supports both Android and iOS platforms.

## Support and Further Info

For any questions or support related to the Root Checker package, you can reach out to the package author:

- **Name:** Mr. Tj Patel
- **Email:** tjpatel@reachable.com

Feel free to explore the [Root Checker package repository](https://github.com/Tespie/Tj-Root-JailBreak-Checker) for more information, issues, and contributions. 

This concludes our tutorial on how to use the Root Checker package in your Ionic Capacitor app. Start enhancing the security and integrity of your applications by detecting potential security risks associated with rooted or jailbroken devices.
