---
title: "Using capacitor-notification-extensions Package"
description: "A tutorial on how to use the capacitor-notification-extensions package to add notification features to your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor-notification-extensions"
---

# Using capacitor-notification-extensions Package

In this tutorial, we will learn how to use the capacitor-notification-extensions package to add notification features to your Capacitor app. The capacitor-notification-extensions package provides various features such as background-handled data notification, client-side notification filtering, and force-firing of event listeners.

## Installation

To get started, you need to install the capacitor-notification-extensions package. Open your terminal and navigate to your project directory. Then run the following command:

```bash
npm i capacitor-notification-extensions --save
```

## Android Setup

### Step 1: Add NotificationExtension to MainActivity

Open your `MainActivity.java` file located in the `android/app/src/main/java/[YOUR_PACKAGE_NAME]` directory. Add the following import statement at the top:

```java
import com.woot.notification.extensions.NotificationExtension;
```

Next, update the `onCreate` method of the `MainActivity` class as follows:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Add other plugins if needed
      add(NotificationExtension.class);
    }});
  }
}
```

### Step 2: Add meta data and intent filter to the manifest

Open your `AndroidManifest.xml` file located in the `android/app/src/main` directory. Inside the `application` tag, add the following meta data and intent filter:

```xml
<application>
  <!-- Other app configurations -->

  <activity>
    <!-- Other activity configurations -->
    <intent-filter>
      <action android:name="com.woot.notification.extensions.intent.action.Launch" />
      <category android:name="android.intent.category.DEFAULT" />
    </intent-filter>
  </activity>
  <meta-data android:name="com.woot.notification.extensions.local_database_name" android:value="@string/db_name" />
</application>
```

Also, add the `db_name` string value to your `strings.xml` file located in the `android/app/src/main/res/values` directory:

```xml
<resources>
  <!-- Other string values -->
  <string name="db_name">TODO</string>
</resources>
```

## iOS Setup

### Step 1: Add silent notification to your AppDelegate

Open your `AppDelegate.swift` file located in the `ios/App/App` directory. Add the following import statements at the top:

```swift
import Capacitor
import Firebase
```

Next, add the following method to your `AppDelegate` class:

```swift
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
  NotificationCenter.default.post(name: Notification.Name("SilentNotification"), object: nil, userInfo: userInfo)
}
```

### Step 2: Add Firebase Initialization Code

To connect to Firebase when your iOS app starts up, you need to add the following code to your `AppDelegate` class:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  Messaging.messaging().apnsToken = deviceToken
  Messaging.messaging().token(completion: { token, error in
    if let error = error {
      NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
    } else if let token = token {
      NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: token)
    }
  })
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
  NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
}
```

### Step 3: Add a notification service extension

1. From Xcode, go to **File > New > Target...**
2. Select **Notification Service Extension** from the list of possible targets.
3. Set a product name (e.g., ImageNotification) and click **Finish**.
4. Replace the contents of the `NotificationService.swift` file with the code provided in this [gist](https://gist.github.com/example).

## Usage

Now that we have set up the capacitor-notification-extensions package, let's see how to use its features in your Capacitor app.

### Background-handled data notification

The capacitor-notification-extensions package allows you to handle data notifications in the background. This means that even when your app is not in the foreground or actively running, you can still receive and process data notifications.

To handle data notifications in the background, you can use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { NotificationExtension } = Plugins;

NotificationExtension.addListener('dataReceived', (data) => {
  console.log('Received data:', data);
});
```

### Client-side notification filtering

The capacitor-notification-extensions package also provides client-side notification filtering based on SQLite. You can create custom boolean filters or time-based filters to filter out notifications that do not meet your criteria.

To create a custom boolean filter, you can use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { NotificationExtension } = Plugins;

const filterName = 'myBooleanFilter';

NotificationExtension.createBooleanFilter(filterName, (notification) => {
  return notification.data.customField === 'myValue';
});

NotificationExtension.enableFilter(filterName);
```

To create a time-based filter, you can use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { NotificationExtension } = Plugins;

const filterName = 'myTimeFilter';

const startTime = new Date();
const endTime = new Date();
// Set start and end time as needed

NotificationExtension.createTimeFilter(filterName, startTime, endTime);

NotificationExtension.enableFilter(filterName);
```

### Force-firing event listener

The capacitor-notification-extensions package also provides a force-fire event listener feature, which allows you to manually trigger the `localNotificationReceived` event listener. This can be useful when the event listener is not working properly in the LocalNotification plugin.

To force-fire the `localNotificationReceived` event listener, you can use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { NotificationExtension } = Plugins;

NotificationExtension.forceFireLocalNotificationReceived();
```

That's it! You have learned how to use the capacitor-notification-extensions package to add notification features to your Capacitor app. Experiment with different features and customize them according to your needs.

Happy coding!
