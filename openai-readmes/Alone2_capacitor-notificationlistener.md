# capacitor-notificationlistener

Observe android notification being posted / removed using this NotificationListenerService wrapper for capacitor.

## Installation

```
npm i capacitor-notificationlistener
npx cap sync
```

Register this plugin using `add(NotificationListenerPlugin.class)` in your `MainActivity.java` like in the following example:

```java
// ... code ...
import ch.asinz.capacitornotificationlistener.NotificationListenerPlugin;
// ... code ...
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Put it here!
      add(NotificationListenerPlugin.class);
    }});
// ... code ...
```

### Permissions

Add the following, contained in `<application>`, to your AndroidManifest.xml:

```xml
<service android:name="ch.asinz.capacitornotificationlistener.NotificationService"
    android:label="@string/app_name"
    android:permission="android.permission.BIND_NOTIFICATION_LISTENER_SERVICE">
    <intent-filter>
        <action android:name="android.service.notification.NotificationListenerService" />
    </intent-filter>
</service>
```

## Usage

Import the plugin.

```typescript
import { SystemNotification, SystemNotificationListener } from 'capacitor-notificationlistener'
const sn = new SystemNotificationListener()
```

Start listening for notifications.

```typescript
sn.startListening()
```

Add a listener for new notifications or the removal of notifications.
Make sure you have called `sn.startListening()` to be able to receive notifications.

```typescript
sn.addListener('notificationReceivedEvent', (info: SystemNotification) => {
  // logic ...
})
sn.addListener('notificationRemovedEvent', (info: SystemNotification) => {
  // logic ...
})
```

SystemNotification Interface.
The anotomy of android notifications is explained [here](https://developer.android.com/guide/topics/ui/notifiers/notifications#Templates).

```typescript
interface SystemNotification {
  apptitle: string // Title of a notifications' app
  text: string // Text of a notification
  textlines: string[] // Text of a multi-line notification
  title: string // Title of a notification
  time: Date // Time when a notification was received
  package: string // Package-name of a notifications' app
}
```

Check if the App is listening for notifications.
If it is not, even though `sn.startListening()` was called,
your app doesn't have sufficient permissions to observe notifications.

```typescript
sn.isListening().then((value: boolean) => {
  // logic ...
  // example code:
  // if not listening
  if (!value)
    // ask for Permission
    sn.requestPermission()
})
```

Open settings so that the user can authorize your app.

```typescript
sn.requestPermission()
```

Stop listening for notifications.

```typescript
sn.stopListening()
```
