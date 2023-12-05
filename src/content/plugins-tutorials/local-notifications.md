---
title: "Using @vaskea/local-notifications Package"
description: "A tutorial on how to use the @vaskea/local-notifications package to schedule device notifications locally."
created_at: "2021-10-27"
published: true
slug: "local-notifications"
---

# Using @vaskea/local-notifications Package

In this tutorial, we will learn how to use the @vaskea/local-notifications package to schedule device notifications locally. This package allows you to schedule and manage notifications without relying on a server to send push notifications. Let's get started!

## Install

To install the @vaskea/local-notifications package, open your terminal and run the following command:

```
npm install @vaskea/local-notifications
```

After the installation, make sure to sync your project with Capacitor:

```
npx cap sync
```

## Configuration

The @vaskea/local-notifications package allows you to configure various options for notifications on Android. These options include:

- **`smallIcon`**: Set the default status bar icon for notifications. This icon should be placed in your app's `res/drawable` folder.

- **`iconColor`**: Set the default color of status bar icons for notifications.

- **`sound`**: Set the default notification sound for notifications. This sound will be played when the notification is triggered.

You can configure these options either in the `capacitor.config.json` file or the `capacitor.config.ts` file. Here are examples of how to configure these options in both files:

### `capacitor.config.json`

```json
{
  "plugins": {
    "LocalNotifications": {
      "smallIcon": "ic_stat_icon",
      "iconColor": "#FF0000",
      "sound": "notification_sound.mp3"
    }
  }
}
```

### `capacitor.config.ts`

```typescript
/// <reference types="@vaskea/local-notifications" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon",
      iconColor: "#FF0000",
      sound: "notification_sound.mp3",
    },
  },
};

export default config;
```

Make sure to replace `"ic_stat_icon"`, `"#FF0000"`, and `"notification_sound.mp3"` with the appropriate values for your project.

## Scheduling Notifications

Now that we have installed the package and configured the notification options, let's schedule a notification. To schedule a notification, you can use the `schedule` method provided by the @vaskea/local-notifications package.

Here is an example of how to schedule a notification:

```typescript
import { LocalNotifications } from '@vaskea/local-notifications';

const scheduleNotification = async () => {
  await LocalNotifications.schedule({
    notifications: [
      {
        title: "New Message",
        body: "You have received a new message.",
        id: 1,
        schedule: { at: new Date(Date.now() + 1000) },
        sound: null,
        attachments: null,
        actionTypeId: "",
        extra: null,
        channelId: null,
      },
    ],
  });
};

scheduleNotification();
```

In the above example, we use the `schedule` method to schedule a single notification with the title "New Message" and the body "You have received a new message". The notification will be scheduled to appear 1 second from the current time.

You can schedule multiple notifications by providing an array of notification objects in the `notifications` property of the `schedule` method.

## Conclusion

In this tutorial, we have learned how to use the @vaskea/local-notifications package to schedule device notifications locally. We covered the installation process, configuration options, and how to schedule notifications. Now you can utilize this package in your Capacitor project to enhance the notification functionality. Happy coding!

I hope you found this tutorial helpful. If you have any further questions, feel free to ask.