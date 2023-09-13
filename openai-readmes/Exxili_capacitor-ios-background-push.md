# @exxili/capacitor-ios-background-push

🚧 Alpha Release - Work in Progress
Note: The plugin is currently working, Still work in progress - as/when i get time i will update this to include tests

Please note that this plugin is currently under active development and may be subject to changes or updates.

<hr>

A Capacitor plugin designed to handle iOS Silent Push notifications, enabling background updates, processing, and seamless integration with standard push notifications.

<docgen-index>

- [`addListener('SilentNotificationReceived', ...)`](#addlistenersilentnotificationreceived)
- [Interfaces](#interfaces)

</docgen-index>

## ⚠️ iOS-specific Support

This plugin is specifically designed for iOS and does not support Android. It handles Silent Push notifications on iOS devices, providing a seamless integration with standard push notifications.

## 🚀 Getting Started

Follow the steps below to integrate the plugin into your Capacitor project:

1. Install the plugin using npm:

```bash
npm install @exxili/capacitor-ios-background-push
```

2. Sync your Capacitor project:

```bash
npx cap sync
```

3. Import the plugin in your project and use it to listen for remote notifications:

```js
import { IOSBackgroundPush } from '@exxili/capacitor-ios-background-push'

// Add a listener for silent push notifications
IOSBackgroundPush.addListener('SilentNotificationReceived', (data) => {
  console.log('Silent push notification received:', data)
})
```

4. Update your AppDelegate.swift file in your iOS project to handle Silent Push notifications. Add the following method to your AppDelegate class:

```swift
import UIKit
import Capacitor
import ExxiliCapacitorIosBackgroundPush

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    // ... other existing code ...

    func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
        NotificationCenter.default.post(name: .didReceiveRemoteNotificationForIOSBackgroundPush, object: nil, userInfo: [
            "userInfo": userInfo,
            "completionHandler": completionHandler
        ])
    }
}

```

## API

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('SilentNotificationReceived', ...)

```typescript
addListener(eventName: 'SilentNotificationReceived', listenerFunc: (data: { data: any; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when a silent push notification is received.

| Param              | Type                                           |
| ------------------ | ---------------------------------------------- |
| **`eventName`**    | <code>'SilentNotificationReceived'</code>      |
| **`listenerFunc`** | <code>(data: { data: any; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
