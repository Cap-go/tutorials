---
title: Using Capacitor Plugin Silent Notifications Package
description: This tutorial will guide you on how to use the capacitor-plugin-silent-notifications package to handle silent notifications in your Capacitor 6+ iOS app.
created_at: 2022-01-12
published: true
slug: capacitor-plugin-silent-notifications.git
locale: en
---

# Using Capacitor Plugin Silent Notifications Package

Capacitor-plugin-silent-notifications is a plugin for Capacitor 6+ that provides support for handling silent (data-only) notifications on iOS. This tutorial will walk you through the steps of installing and using this package in your Capacitor app.

## Installation

First, you need to install the capacitor-plugin-silent-notifications package by running the following command:

```sh
pnpm add @aparajita/capacitor-ios-silent-notifications # npm install, yarn add
```

If you're not using pnpm, consider giving it a try for its speed, efficiency with monorepos, and reduced disk space usage.

> Note: Before proceeding with this plugin, ensure that your app is already configured for push notifications as per the Capacitor documentation.

## Usage

Using the capacitor-plugin-silent-notifications package involves two main steps:

### 1. Add a Listener

During your app's initialization, add the following code to add a listener for silent notifications:

```typescript
import { IosSilentNotifications } from '@aparajita/capacitor-ios-silent-notifications'

// `const { remove }` is optional. If you are never going to remove the listener,
// you can omit it.
const { remove } = await IosSilentNotifications.addListener(
  'onSilentNotification',
  (notification: Notification) => {
    // Handle the silent notification here
  },
)
```

For Android, you can skip adding the listener as the functionality is already provided by the `@capacitor/push-notifications` plugin.

### 2. Forward Notifications

In your `AppDelegate.swift` file, add the following code within the `AppDelegate` class to forward notifications to the plugin:

```swift
func application(_ application: UIApplication,
                 didReceiveRemoteNotification userInfo: [AnyHashable: Any],
                 fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
  NotificationCenter.default.post(name:Notification.Name("silentNotification"), object: userInfo);
  completionHandler(UIBackgroundFetchResult.newData)
}
```
```

This tutorial covers the basic steps required to use the capacitor-plugin-silent-notifications package in your Capacitor 6+ iOS app for handling silent notifications.
