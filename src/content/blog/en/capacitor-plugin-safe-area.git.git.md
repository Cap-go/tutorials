---
title: Using the Capacitor Plugin Safe Area
description: Learn how to use the Capacitor Plugin Safe Area to handle safe areas in your Capacitor apps.
created_at: 2021-11-01
published: true
slug: capacitor-plugin-safe-area.git.git
locale: en
---

# Using the Capacitor Plugin Safe Area

The `capacitor-plugin-safe-area` package is a useful tool for handling safe areas in your Capacitor applications. Safe areas ensure that your app's content is not obscured by system-provided UI elements like the status bar, navigation bar, or notch.

To integrate the `capacitor-plugin-safe-area` package into your project, follow these steps:

## Installation

First, add the plugin to your project using npm:

```bash
npm install --save-dev capacitor-plugin-safe-area
```

## Usage

Next, update your Tailwind CSS configuration to include the safe areas plugin. Open your `tailwind.config.js` file and modify it as follows:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('capacitor-plugin-safe-area').safeAreas,
  ],
}
```

## Customization

The `capacitor-plugin-safe-area` package provides options for customizing how safe areas are handled in your app. Check out the [Safe Areas documentation](https://github.com/Cap-go/tailwind-capacitor/blob/main/docs/safe-areas.md) for more details on how to configure and style safe areas to fit your application's design.

By integrating the `capacitor-plugin-safe-area` package into your project, you can ensure that your app's content is displayed correctly on devices with different screen sizes, notch styles, and system-provided UI elements.

Remember to test your app on a variety of devices to ensure that the safe areas are being handled correctly and that your content remains visible and accessible to all users.