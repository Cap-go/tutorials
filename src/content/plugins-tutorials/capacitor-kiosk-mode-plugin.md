---
title: "Using capacitor-kiosk-mode-plugin"
description: "A tutorial on how to use the capacitor-kiosk-mode-plugin package"
created_at: "2021-10-20"
published: true
slug: capacitor-kiosk-mode-plugin
---

# Using capacitor-kiosk-mode-plugin

This tutorial will guide you through the process of using the capacitor-kiosk-mode-plugin package to enable kiosk mode in your Capacitor project.

## Installation

To get started, install the capacitor-kiosk-mode-plugin package by running the following command:

```bash
npm install capacitor-kiosk-mode-plugin
```

## Importing the Plugin

Next, you need to import the plugin in your project. Add the following import statement to your JavaScript or TypeScript file:

```javascript
import 'capacitor-kiosk-mode-plugin';
```

## Enabling Kiosk Mode

To enable kiosk mode in your application, call the `enableKioskMode` function provided by the plugin. You can call this function in your initialization logic or in response to a specific user action.

```javascript
Capacitor.Plugins.KioskModePlugin.enableKioskMode();
```

## Disabling Kiosk Mode

If you want to disable kiosk mode later in your application, you can call the `disableKioskMode` function provided by the plugin.

```javascript
Capacitor.Plugins.KioskModePlugin.disableKioskMode();
```

## Checking Kiosk Mode Status

You can also check the current status of the kiosk mode by calling the `isKioskModeEnabled` function provided by the plugin. This function returns a boolean value indicating whether kiosk mode is currently enabled or not.

```javascript
const isKioskModeEnabled = await Capacitor.Plugins.KioskModePlugin.isKioskModeEnabled();
if (isKioskModeEnabled) {
  console.log('Kiosk mode is enabled');
} else {
  console.log('Kiosk mode is disabled');
}
```

## Conclusion

In this tutorial, you learned how to use the capacitor-kiosk-mode-plugin package to enable and disable kiosk mode in your Capacitor application. By following these steps, you can create a locked down and immersive user experience for your application.

Remember to refer to the official documentation and examples for more detailed explanations and advanced usage of the capacitor-kiosk-mode-plugin package.