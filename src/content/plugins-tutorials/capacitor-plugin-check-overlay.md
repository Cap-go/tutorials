---
title: "Using capacitor-plugin-check-overlay"
description: "A tutorial on how to use the capacitor-plugin-check-overlay package."
created_at: "2022-12-05"
published: true
slug: capacitor-plugin-check-overlay
---

# Using capacitor-plugin-check-overlay

This tutorial will guide you through the process of using the `capacitor-plugin-check-overlay` package in your Capacitor project.

## Installation

To begin, make sure you have Capacitor installed globally on your machine. If not, you can install it by running the following command:

```shell
npm install -g @capacitor/core @capacitor/cli
```

Once Capacitor is installed, you can proceed with the installation of the `capacitor-plugin-check-overlay` package by running the following command in your project's root directory:

```shell
npm install capacitor-plugin-check-overlay
```

## Usage

### Import the Plugin

In the file where you want to use the `capacitor-plugin-check-overlay`, import it as follows:

```typescript
import { Plugins } from '@capacitor/core';

const { CheckOverlay } = Plugins;
```

### Show an Overlay

To show the check overlay, use the `show()` method provided by the `CheckOverlay` object. This method accepts an optional `message` parameter to display a custom message in the overlay. Here's an example:

```typescript
CheckOverlay.show({ message: 'Checking...' });
```

### Hide the Overlay

To hide the check overlay, use the `hide()` method provided by the `CheckOverlay` object. This will remove the overlay from the screen. Here's an example:

```typescript
CheckOverlay.hide();
```

## Example

Here's a complete example of using the `capacitor-plugin-check-overlay` package:

```typescript
import { Plugins } from '@capacitor/core';

const { CheckOverlay } = Plugins;

async function checkData() {
  try {
    CheckOverlay.show({ message: 'Checking...' });

    // Simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Perform some data validation
    const isValid = true;

    if (isValid) {
      console.log('Data is valid');
    } else {
      console.log('Data is invalid');
    }
  } catch (error) {
    console.error(error);
  } finally {
    CheckOverlay.hide();
  }
}

checkData();
```

This example shows how to use the `capacitor-plugin-check-overlay` package to show an overlay while performing data validation. The overlay is displayed with the message "Checking..." and is hidden once the validation is complete.

## Conclusion

In this tutorial, you learned how to install and use the `capacitor-plugin-check-overlay` package in your Capacitor project. You saw how to import the plugin, show and hide the check overlay, and even had a complete example of using the package for data validation. Now you can enhance the user experience of your Capacitor app by incorporating check overlays.

Happy coding!