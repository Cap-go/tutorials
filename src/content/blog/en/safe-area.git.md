---
title: Using Safe Area Plugin in Capacitor Apps
description: Learn how to use the @capacitor-community/safe-area package to handle safe areas on different devices.
created_at: 2022-05-16
published: true
slug: safe-area.git
locale: en
---

# Getting Started with Safe Area Plugin in Capacitor Apps

The `@capacitor-community/safe-area` plugin allows you to manage safe area insets on devices with notches, rounded corners, and other screen variations. Here's a step-by-step guide on how to integrate and use this package in your Capacitor app:

## Installation

1. Install the Safe Area plugin via npm:

```bash
npm install @capacitor-community/safe-area
```

2. If you are using TypeScript, ensure to add the reference types to your project. You can do this by including the following line at the beginning of your `capacitor.config.ts` file:

```typescript
/// <reference types="@capacitor-community/safe-area" />
```

## Configuration

3. Open your `capacitor.config.json` or `capacitor.config.ts` file and add the plugin configuration with the desired settings. Here is an example configuration for the Safe Area plugin:

```json
{
  "plugins": {
    "SafeArea": {
      "enabled": true,
      "customColorsForSystemBars": true,
      "statusBarColor": '#000000',
      "statusBarContent": 'light',
      "navigationBarColor": '#000000',
      "navigationBarContent": 'light',
      "offset": 0
    }
  }
}
```

Make sure to adjust the colors, content styles, and offset according to your app's design requirements.

## Usage

4. Once the plugin is installed and configured, you can utilize it in your app's code. Import the Safe Area plugin at the top of your file:

```typescript
import { Plugins } from '@capacitor/core';
const { SafeArea } = Plugins;
```

5. You can now use the Safe Area plugin methods to get details about safe areas on the device. For example, to get the safe area insets, you can make the following call:

```typescript
const safeAreaInsets = await SafeArea.getSafeAreaInsets();
console.log(safeAreaInsets);
```

## Conclusion

By following these steps, you can easily integrate the Safe Area plugin in your Capacitor app and handle safe areas efficiently on a variety of devices. Make sure to refer to the plugin documentation for more advanced usage and customization options.