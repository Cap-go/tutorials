---
title: "Using capacitor-alarm-notification package"
description: "In this tutorial, we will learn how to use the capacitor-alarm-notification package to schedule and manage alarms in a Capacitor app."
created_at: "2021-09-30"
published: true
slug: "capacitor-alarm-notification"
---

# Using capacitor-alarm-notification package

In this tutorial, we will cover the steps required to integrate the capacitor-alarm-notification package into your Capacitor app. This package allows you to schedule and manage alarms, which can be useful for various types of applications such as reminders, notifications, and task management.

## Installation

Before we begin, make sure you have a Capacitor project set up. If not, you can create a new project using the Capacitor CLI:

```bash
npx @capacitor/cli create
```

Once you have your Capacitor project ready, you can install the capacitor-alarm-notification package:

```bash
npm install capacitor-alarm-notification
```

## Android Configuration

To use the capacitor-alarm-notification package on Android, you need to make some additional configurations.

### Add Permissions

Open the `android/app/src/main/AndroidManifest.xml` file and add the following permissions:

```xml
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
<uses-permission android:name="android.permission.VIBRATE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
```

### Register AlarmReceiver

Create a new Java class `AlarmReceiver` in the `android/app/src/main/java/YOUR_PACKAGE_NAME` directory with the following code:

```java
package YOUR_PACKAGE_NAME;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import com.getcapacitor.community.alarmnotification.NotificationService;

public class AlarmReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        NotificationService receiver = new NotificationService();
        receiver.onReceive(context, intent);
    }
}
```

Replace `YOUR_PACKAGE_NAME` with your application's package name.

### Register AlarmReceiver in Manifest

Open the `android/app/src/main/AndroidManifest.xml` file and add the following code inside the `<application>` tag:

```xml
<receiver android:name=".AlarmReceiver" />
```

## Usage

To use the capacitor-alarm-notification package in your app, you need to import it and get a reference to the `AlarmNotification` class. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { AlarmNotification } = Plugins;

// Example function to schedule an alarm
const scheduleAlarm = async () => {
  try {
    await AlarmNotification.schedule({
      id: '1',
      title: 'Wake up!',
      text: 'It\'s time to start the day.',
      trigger: {
        at: new Date('2021-10-01T07:00:00.000Z'),
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// Example function to cancel an alarm
const cancelAlarm = async () => {
  try {
    await AlarmNotification.cancel('1');
  } catch (error) {
    console.error(error);
  }
};
```

In the above example, we first import the `AlarmNotification` plugin from `@capacitor/core`. Then we define two example functions: `scheduleAlarm` and `cancelAlarm`. The `scheduleAlarm` function uses the `AlarmNotification.schedule` method to schedule an alarm at a specific time. The `cancelAlarm` function uses the `AlarmNotification.cancel` method to cancel a previously scheduled alarm.

Make sure to handle any errors that may occur when calling these methods.

## Conclusion

In this tutorial, we have learned how to use the capacitor-alarm-notification package to schedule and manage alarms in a Capacitor app. We covered the installation process, Android configuration, and basic usage of the package. With this knowledge, you can now add alarm and notification capabilities to your Capacitor app.

Remember to refer to the capacitor-alarm-notification documentation for more advanced usage and customization options.