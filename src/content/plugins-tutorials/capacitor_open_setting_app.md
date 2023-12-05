---
title: "Using the Capacitor Open Setting Package"
description: "This tutorial will guide you through the process of using the capacitor_open_setting package to open the Setting App in your Capacitor project."
created_at: "2022-10-15"
published: true
slug: capacitor_open_setting_app
---

# Using the Capacitor Open Setting Package

In this tutorial, we will learn how to use the `capacitor_open_setting` package to open the Setting App in your Capacitor project. 

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Capacitor installed in your project
- A compatible platform (iOS or Android)

## Installation

To install the `capacitor_open_setting` package, open your terminal and run the following command:

```bash
npm install capacitor_open_setting
```

## Usage

1. Import the `capacitor_open_setting` package in your project:

```typescript
import { CapacitorOpenSetting } from 'capacitor_open_setting';
```

2. Add a button or a trigger event in your app to open the Setting App. For example, if you want to open the device settings when a button is clicked:

```typescript
const openSettings = async () => {
  await CapacitorOpenSetting.open();
}
```

3. Test your app on a device or simulator/emulator. When the button is clicked or the trigger event is triggered, the Setting App should open.

## Additional Options

The `capacitor_open_setting` package provides additional options to customize the opening behavior. Here are some common options:

- `settingType`: Specify a specific setting type to open, such as 'wifi', 'bluetooth', 'location', etc. If not specified, the general device settings will be opened.
- `settingId`: Specify a specific setting ID to directly open a setting page. For example, to open the Wi-Fi settings page, use 'wifi'.
- `animated`: Enable or disable the opening animation. Default is `true`.
- `completionHandler`: A callback function to handle the completion event. This callback will be called when the Setting App is closed.

```typescript
const openSettingsWithOptions = async () => {
  const options = {
    settingType: 'bluetooth',
    animated: false,
    completionHandler: () => {
      console.log('Setting App closed.');
    }
  };
  await CapacitorOpenSetting.openWithOptions(options);
}
```

That's it! You've successfully learned how to use the `capacitor_open_setting` package to open the Setting App in your Capacitor project.

### Conclusion

In this tutorial, we covered the installation process of the `capacitor_open_setting` package and demonstrated how to use it to open the Setting App in your Capacitor project. Feel free to explore the additional options provided by the package to further customize the behavior.

If you encounter any issues or have further questions, refer to the official documentation of the `capacitor_open_setting` package or seek help from the Capacitor community.