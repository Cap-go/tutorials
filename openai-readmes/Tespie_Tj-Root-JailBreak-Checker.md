# TJ Root Checker Plugin for Capacitor

## Description

TJ Root Checker is a lightweight and user-friendly npm package designed to detect whether an Android or iOS device is rooted or jailbroken. With simple integration into your projects, this package empowers developers to ensure the security and integrity of their applications by identifying potential security risks associated with rooted or jailbroken devices.

## Installation

To use the TJ Root Checker plugin in your Ionic Capacitor app, follow these steps:

1. Install the npm package in your app's root directory:

```bash
npm install tj-root-check
npx cap sync
```

## Usage

Import the plugin in your TypeScript code:

```bash
import { Plugins } from '@capacitor/core';
const { RootCheckerPlugin } = Plugins;
```

You can use the RootCheckerPlugin in your TypeScript code to check whether the device is rooted or jailbroken.

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

The isDeviceRooted() function returns a Promise that resolves to an object with a single property isRooted, which is a boolean indicating whether the device is rooted or jailbroken. If the device is rooted/jailbroken, isRooted will be true; otherwise, it will be false.

## Compatibility

This plugin is compatible with Capacitor 2.x and above.
It supports both Android and iOS (build for ios pending) platforms.
License
This package is open-source and available under the MIT License.

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on our GitHub repository: https://github.com/Tespie/Tj-Root-JailBreak-Checker

## Support

For any questions or support, you can reach out to the package author:

Name: Mr. Tj Patel
Email: tjpatel@reachable.com
