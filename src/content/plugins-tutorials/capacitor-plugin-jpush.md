---
title: "Tutorial: Using capacitor-plugin-jpush for Push Notifications"
description: "Learn how to integrate capacitor-plugin-jpush into your Capacitor app to enable push notification functionality."
created_at: "2023-06-30"
published: true
slug: "capacitor-plugin-jpush"
---

# Tutorial: Using capacitor-plugin-jpush for Push Notifications

In this tutorial, we will guide you through the process of integrating `capacitor-plugin-jpush` into your Capacitor app to enable push notification functionality. 

## Step 1: Install the Plugin

Begin by installing the `capacitor-plugin-jpush` package into your project. Open a terminal window and navigate to your project's root directory. Run the following command:

```bash
npm install capacitor-plugin-jpush
```

Once the installation is complete, synchronize your Capacitor project with the native platforms by running:

```bash
npx cap sync
```

## Step 2: Configure the Plugin

In your `capacitor.config.ts` file (or `capacitor.config.json`), add the necessary configuration for the JPush plugin. This includes specifying your JPush app key and channel. Ensure that your app package name matches the one set up in the JPush console. 

```ts
/// <reference types="capacitor-plugin-jpush" />

import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  plugins: {
    JPush: {
      appKey: 'YOUR_APP_KEY',
      channel: 'YOUR_CHANNEL',
    },
  },
};

export default config;
```

## Step 3: Configure iOS Push Notifications

For iOS, you need to enable push notification capabilities. Follow the [Setting Capabilities](https://capacitorjs.com/docs/v4/ios/configuration#setting-capabilities) documentation to enable push notification support. 

In your `AppDelegate.swift` file, add the following code to handle device token registration:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
  NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
}

func applicationDidBecomeActive(_ application: UIApplication) {
  NotificationCenter.default.post(name: Notification.Name(rawValue: "didBecomeActiveNotification"), object: nil)
}
```

Additionally, make sure to add the `CapacitorPluginJPush` target membership to your `JPUSHService.h` file.

## Step 4: Use the Plugin in Your App

You can now use the JPush plugin in your app to handle push notifications. For example, to retrieve the device's contacts, you can call the `getContacts()` method:

```ts
import { Plugins } from '@capacitor/core';

const { JPush } = Plugins;

// ...

const filter = 'example-filter';
JPush.getContacts(filter)
  .then((result) => {
    // Handle the retrieved contacts
    console.log(result.results);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });
```

This is just one example of how you can use the `capacitor-plugin-jpush` package in your app. Refer to the plugin documentation for more available functionalities and their usage.

## Conclusion

Congratulations! You have successfully integrated the `capacitor-plugin-jpush` package into your Capacitor app to enable push notification functionality. You learned how to install the plugin, configure it, and use its features in your app. Start sending push notifications to engage with your users and enhance their app experience.

Feel free to explore the `capacitor-plugin-jpush` documentation for advanced functionalities and customization options. Happy coding!