```markdown
---
title: Using @resgrid/local-notifications Package with Capacitor
description: This tutorial will guide you through using the @resgrid/local-notifications package with Capacitor to schedule local notifications on your device.
created_at: 2023-10-10
published: true
slug: capacitor-local-notifications
---

# Using @resgrid/local-notifications Package with Capacitor

In this tutorial, we will learn how to integrate the `@resgrid/local-notifications` package in a Capacitor project to schedule local notifications on Android devices.

## Installation

First, install the `@resgrid/local-notifications` package by running the following command in your Capacitor project:

```bash
npm install @resgrid/local-notifications
npx cap sync
```

## Configuration

The `@resgrid/local-notifications` package allows you to configure the notifications, such as setting the icon and sound for the notifications on your Android device.

On Android, you can configure the following options in your `capacitor.config.json` or `capacitor.config.ts` files:

- `smallIcon`: Set the default status bar icon for notifications. This should be a drawable resource ID available in your app's `res/drawable` folder.
- `iconColor`: Set the default color of status bar icons for notifications.
- `sound`: Set the default notification sound for notifications.

Here is an example configuration:

```json
{
  "plugins": {
    "LocalNotifications": {
      "smallIcon": "ic_stat_icon_config_sample",
      "iconColor": "#488AFF",
      "sound": "beep.wav"
    }
  }
}
```

```typescript
/// <reference types="@resgrid/local-notifications" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
  },
};

export default config;
```

## Conclusion

By following this tutorial, you should now be able to efficiently use the `@resgrid/local-notifications` package with Capacitor to schedule device notifications locally on your Android device.
```
