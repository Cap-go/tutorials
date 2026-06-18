```markdown
---
"title": "Using @aparajita/capacitor-ios-silent-notifications Package",
"description": "This tutorial will guide you through the process of setting up and using the @aparajita/capacitor-ios-silent-notifications package in your Capacitor 6+ project to enable silent notifications on iOS.",
"created_at": "2022-01-29",
"published": true,
"slug": "capacitor-ios-silent-notifications.git"
---

# Using @aparajita/capacitor-ios-silent-notifications Package

This tutorial will walk you through the steps to integrate the @aparajita/capacitor-ios-silent-notifications package into your Capacitor project for enabling silent (data-only) notifications on iOS.

## Installation

To begin, install the package in your project using the following command:

```sh
pnpm add @aparajita/capacitor-ios-silent-notifications # npm install, yarn add
```

If you are not using pnpm, consider giving it a try for improved performance and reduced disk space usage.

> Note: Before proceeding with the installation, ensure that your app is already configured for push notifications as per the Capacitor documentation.

## Usage

Follow the steps below to effectively utilize this package in your project:

### 1. Add a Listener

During your app's initialization, add the following code to set up a listener for silent notifications:

```typescript
import { IosSilentNotifications } from '@aparajita/capacitor-ios-silent-notifications'

const { remove } = await IosSilentNotifications.addListener(
  'onSilentNotification',
  (notification: Notification) => {
    // Process the notification data
  },
)
```

For Android, the listener setup is not required as the same functionality is already covered by the `@capacitor/push-notifications` plugin. Modify the listener call based on the platform if needed.

### 2. Forward Notifications

In your app's `AppDelegate.swift` file, add the following code snippet within the `AppDelegate` class to forward notifications to the plugin:

```swift
func application(_ application: UIApplication,
                 didReceiveRemoteNotification userInfo: [AnyHashable: Any],
                 fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
  NotificationCenter.default.post(name:Notification.Name("silentNotification"), object: userInfo);
  completionHandler(UIBackgroundFetchResult.newData)
}
```

By following these steps, you can successfully implement silent notifications on iOS using the @aparajita/capacitor-ios-silent-notifications package.
```