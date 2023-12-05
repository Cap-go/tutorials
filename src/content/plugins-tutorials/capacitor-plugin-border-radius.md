---
title: "Using the capacitor-plugin-border-radius Package"
description: "A step-by-step guide on how to use the capacitor-plugin-border-radius package to enable and set the border radius of the webview"
created_at: "2021-10-27"
published: true
slug: "capacitor-plugin-border-radius"
---

# Using the capacitor-plugin-border-radius Package

The `capacitor-plugin-border-radius` package allows you to easily enable and set the border radius of the webview in your Capacitor project. This tutorial will guide you through the installation process and demonstrate how to use the `setBorderRadius()` method.

## Installation

To install the `capacitor-plugin-border-radius` package, follow these steps:

1. Open your project's terminal.
2. Run the command `npm install capacitor-border-radius` to install the package.
3. Run `npx cap sync` to synchronize the plugin with your Capacitor project.

## Usage

1. Import the `BorderRadius` plugin from `capacitor-border-radius`.

```javascript
import { Plugins } from '@capacitor/core';
import 'capacitor-border-radius';

const { BorderRadius } = Plugins;
```

2. Call the `setBorderRadius()` method to enable and set the border radius of the webview. Pass the desired value as a parameter.

```javascript
BorderRadius.setBorderRadius({
    value: 10
});
```

And that's it! You have successfully enabled and set the border radius of the webview using the `capacitor-plugin-border-radius` package.

## Summary

In this tutorial, we learned how to install and use the `capacitor-plugin-border-radius` package in a Capacitor project. By following the steps outlined above, you can easily enable and set the border radius of the webview. This package provides a convenient way to customize the appearance of your webview and enhance the user experience.

If you have any questions or encounter any issues, feel free to refer to the package documentation or submit your changes to the Android implementation to help improve this plugin. Thank you for reading!