---
title: "Using capacitor-plugin-ledcontrol"
description: "A tutorial on how to use the capacitor-plugin-ledcontrol package to control LED lights."
created_at: "2021-08-15"
published: true
slug: capacitor-plugin-ledcontrol
---

# Using capacitor-plugin-ledcontrol

In this tutorial, we will learn how to use the `capacitor-plugin-ledcontrol` package to control LED lights. This plugin allows you to easily interact with LED lights connected to your device and control their brightness, color, and other properties.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- Capacitor project set up and configured

If you haven't installed Capacitor or set up a project yet, you can refer to the [Capacitor Docs](https://capacitorjs.com/docs/getting-started) for instructions.

## Installation

To start using the `capacitor-plugin-ledcontrol` package in your Capacitor project, follow these steps:

1. Install the package using npm or yarn:

```bash
npm install capacitor-plugin-ledcontrol
```

2. Sync the plugin with your native project:

```bash
npx cap sync
```

## Usage

Once the `capacitor-plugin-ledcontrol` package is installed and synced, you can use it in your code.

### Initialize the Plugin

To use the LED control features, you need to initialize the plugin first. In your project's main entry file (e.g., `index.js` or `app.ts`), import the plugin and initialize it:

```javascript
import { Plugins } from '@capacitor/core';
const { LedControl } = Plugins;

// Initialize the plugin
LedControl.initialize();
```

### Controlling the LED Lights

The `capacitor-plugin-ledcontrol` package provides various methods to control the LED lights. Here are some examples:

#### Setting the Brightness

To set the brightness of the LED lights, use the `setBrightness` method:

```javascript
LedControl.setBrightness({ brightness: 0.5 }); // Set brightness to 50%
```

#### Changing the Color

To change the color of the LED lights, use the `setColor` method:

```javascript
LedControl.setColor({ color: '#FF0000' }); // Set color to red
```

#### Flashing the Lights

To make the LED lights flash, use the `flash` method:

```javascript
LedControl.flash(); // Flash the lights
```

#### Turning off the Lights

To turn off the LED lights, use the `turnOff` method:

```javascript
LedControl.turnOff(); // Turn off the lights
```

### Example

Here's an example of how you can use the `capacitor-plugin-ledcontrol` package to create a simple LED control interface:

```javascript
import { Plugins } from '@capacitor/core';
const { LedControl } = Plugins;

// Initialize the plugin
LedControl.initialize();

// Handle brightness slider change event
const brightnessSlider = document.getElementById('brightness-slider');
brightnessSlider.addEventListener('change', (event) => {
  const brightness = parseFloat(event.target.value);
  LedControl.setBrightness({ brightness });
});

// Handle color picker change event
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', (event) => {
  const color = event.target.value;
  LedControl.setColor({ color });
});
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-plugin-ledcontrol` package to control LED lights in a Capacitor project. We covered the installation process, initialization of the plugin, and various methods to control the brightness, color, and other properties of the LED lights. You can now integrate LED control features into your Capacitor apps and create amazing light-based experiences.

Make sure to refer to the official documentation of `capacitor-plugin-ledcontrol` for more details and advanced usage.

Happy coding!