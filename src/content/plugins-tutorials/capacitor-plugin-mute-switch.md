---
title: "Using capacitor-plugin-mute-switch"
description: "A tutorial on how to use the capacitor-plugin-mute-switch package to control the mute switch on a device."
created_at: "2021-09-30"
published: true
slug: "capacitor-plugin-mute-switch"
---

# Using capacitor-plugin-mute-switch

In this tutorial, we will learn how to use the capacitor-plugin-mute-switch package to control the mute switch on a device.

## Installation

To begin, make sure that you have Capacitor installed globally. If not, you can install it by running the following command:

```bash
npm install -g @capacitor/cli
```

Next, navigate to your project directory and install the capacitor-plugin-mute-switch package:

```bash
npm install capacitor-plugin-mute-switch
```

## Adding the Plugin to Your Project

Once the package is installed, you need to add the plugin to your project. In the terminal, run the following command:

```bash
npx cap sync
```

This command will sync the plugin with your native projects (iOS and Android).

## Usage

To use the capacitor-plugin-mute-switch in your Ionic application, you need to import it. Open your desired component file and import the plugin:

```javascript
import { Plugins } from '@capacitor/core';

const { MuteSwitch } = Plugins;
```

### Checking the Mute Status

To check the current mute status on the device, you can use the `getMuteStatus` function:

```javascript
MuteSwitch.getMuteStatus().then((result) => {
  if (result.muted) {
    console.log("The device is currently muted");
  } else {
    console.log("The device is not muted");
  }
}).catch((error) => {
  console.error("Error getting mute status:", error);
});
```

The `getMuteStatus` function returns a promise with the result object containing a `muted` property indicating whether the device is currently muted or not.

### Setting the Mute Status

To set the mute status on the device, you can use the `setMuteStatus` function:

```javascript
MuteSwitch.setMuteStatus({ muted: true }).then(() => {
  console.log("Mute status set successfully");
}).catch((error) => {
  console.error("Error setting mute status:", error);
});
```

The `setMuteStatus` function takes an object with a `muted` property specifying whether to mute or unmute the device.

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-mute-switch package to control the mute switch on a device. We covered how to install the package, add it to your project, and use its functions to check and set the mute status.

Feel free to explore the plugin's documentation for more advanced features and options.