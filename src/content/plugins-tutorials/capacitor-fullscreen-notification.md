---
title: "Using capacitor-fullscreen-notification Package"
description: "In this tutorial, we will learn how to use the capacitor-fullscreen-notification package to automatically launch your app in response to a data push notification."
created_at: "2022-02-21"
published: true
slug: "capacitor-fullscreen-notification"
---

# Using capacitor-fullscreen-notification Package

In this tutorial, we will learn how to use the capacitor-fullscreen-notification package to automatically launch your app in response to a data push notification. The package works in conjunction with the [@capacitor/push-notifications](https://github.com/ionic-team/capacitor-plugins/tree/main/push-notifications) plugin.

## Installation

To get started, we need to install the `capacitor-fullscreen-notification` package. Open your terminal and run the following command:

```bash
npm install capacitor-fullscreen-notification
npx cap sync android
```

Next, open your `AndroidManifest.xml` file and add the following attributes to the activity:

```xml
android:showWhenLocked="true"
android:turnScreenOn="true"
```

## Android Behavior

The behavior of the plugin on Android devices differs depending on whether the device is locked or unlocked.

### Locked Device

When the device is locked and receives a data push notification, the app will be launched instantly without any user interaction.

### Unlocked Device

On an unlocked device, the plugin will display a default heads-up notification with the defined title, text, and action buttons. When the user clicks on the notification, the app will be launched.

> **HINT**  
> You can check the property `isNotificationActive` in the response data of your 'launch' listener to determine if the app was launched instantly or by clicking the heads-up notification. The `isNotificationActive` property will be `true` on instant launch.

## Workflow

The plugin follows the following workflow to automatically launch your app in response to a data push notification:

1. A data push notification is sent from Firebase.
2. The plugin receives the data push notification.
3. A local notification with a full-screen intent is sent, causing the app to open.
4. The plugin emits an event to indicate that the app has been launched.
5. The app listens to the event and redirects to the desired page.

## Usage

To trigger a push notification and launch your app, send a data push notification with the following key-value pairs in the data option:

```
{
  "fullscreen": true,
  "title": "Launch App",
  "message": "Someone rang your doorbell!",
  "route": "doorbell"
}
```

In the above example, setting `"fullscreen": true` indicates that the push notification should trigger a full-screen intent. The `"title"` and `"message"` keys define the notification's title and message, and `"route"` specifies the route or page to navigate to in your app.

That's it! You have now learned how to use the capacitor-fullscreen-notification package to automatically launch your app in response to a data push notification. Happy coding!