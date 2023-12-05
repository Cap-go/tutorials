**Title: Using the Capacitor OneSignal Package**
**Description: Learn how to integrate the Capacitor OneSignal package into your mobile app**
**Created_at: September 15, 2021**
**Published: true**
**Slug: capacitor-onesignal**

---

# Using the Capacitor OneSignal Package

In this tutorial, we will learn how to integrate the Capacitor OneSignal package into your mobile app. OneSignal is a powerful push notification service that allows you to send notifications to your app users. By using the Capacitor OneSignal plugin, you can easily add push notification capabilities to your Capacitor project.

## Prerequisites

Before we start, make sure you have the following prerequisites:

- Capacitor installed in your project
- OneSignal account setup and API keys obtained

## Installation

To get started, open your terminal and navigate to your Capacitor project directory. Run the following command to install the Capacitor OneSignal package:

```bash
npm install capacitor-onesignal
```

## Configuration

Once the package is installed, we need to configure it with our OneSignal API keys.

### Android Configuration

Open your `android/app/src/main/AndroidManifest.xml` file and add the following lines inside the `<application>` tag:

```xml
<service android:name="com.onesignal.GcmIntentService" />
<receiver android:name="com.onesignal.GcmBroadcastReceiver" />
<receiver android:name="com.onesignal.NotificationOpenedReceiver" />
<receiver android:name="com.onesignal.BootUpReceiver">
    <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
        <category android:name="android.intent.category.DEFAULT" />
    </intent-filter>
</receiver>
```

### iOS Configuration

For iOS, open your `ios/App/AppDelegate.swift` file and add the following lines inside the `didFinishLaunchingWithOptions` function:

```swift
import OneSignal
...
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    ...
    OneSignal.setAppId("YOUR_ONE_SIGNAL_APP_ID")
    ...
    return true
}
```

Replace `"YOUR_ONE_SIGNAL_APP_ID"` with your OneSignal App ID.

## Usage

Now that the Capacitor OneSignal package is installed and configured, you can start using it in your app.

### Initialization

To initialize the Capacitor OneSignal plugin, add the following code to your app's main JavaScript file (`src/index.js` or `src/main.js`):

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorOneSignal } = Plugins;

CapacitorOneSignal.initialize({ appId: 'YOUR_ONE_SIGNAL_APP_ID' });
```

Replace `"YOUR_ONE_SIGNAL_APP_ID"` with your OneSignal App ID.

### Handling Notifications

To handle incoming notifications, add the following code to your JavaScript file:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorOneSignal } = Plugins;

CapacitorOneSignal.addListener('notificationReceived', (notification) => {
    console.log(notification);
});
```

This code adds a listener for the `notificationReceived` event and logs the notification object to the console.

### Sending Notifications

To send notifications to your app users, you can use the OneSignal dashboard or make API calls to the OneSignal API. You can find more details on how to send notifications in the [OneSignal documentation](https://documentation.onesignal.com/docs).

## Conclusion

Congratulations! You have successfully integrated the Capacitor OneSignal package into your mobile app. You can now send push notifications to your app users and handle incoming notifications in your app. Experiment with different OneSignal features and explore the capabilities of push notifications in your Capacitor project.

Remember to refer to the official [Capacitor OneSignal documentation](https://github.com/OneSignal/OneSignal-Capacitor-SDK) for more details and additional features.

That's it for this tutorial. Happy coding!