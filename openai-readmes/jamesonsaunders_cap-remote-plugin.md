# cap-remote-plugin

Handle remote notifications with ionic capacitor in angular (e.g. user taps on a push notification).

This is only implemented for iOS currently, to handle an issue with capacitor push notifications where `pushNotificationActionPerformed` is not called on notification tap.

## Install

```bash
npm install cap-remote-plugin
npx cap sync
```

## Setup

1. Enable remote notifs for your iOS project
   ![Background Modes Remote Notifs](https://firebasestorage.googleapis.com/v0/b/jameson-saunders.appspot.com/o/email-resources%2Fbackground-modes-remote-notifs.png?alt=media&token=344a4530-82fb-4c77-9c9c-df1e67ff2968)

2. Handle remote notifications in your `AppDelegate.swift` file

```swift
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    print("on remote message called")
    NotificationCenter.default.post(name:Notification.Name("OnRemoteMessage"), object: userInfo);
    completionHandler(UIBackgroundFetchResult.newData)
}
```

3. Listen for the event in your typescript

```typescript
CapRemotePlugin.addListener('OnRemoteNotification', (notification: PushNotificationSchema) => {
  console.log('ON REMOTE NOTIFICATION')
  console.log(notification)
})
```
