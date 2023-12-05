---
title: "Using the Capacitor Clock Alarm Package"
description: "This tutorial will guide you through the process of using the capacitor-clock-alarm package to create clock alarms in your app."
created_at: "2022-06-30"
published: true
slug: clock-alarm
---

# Using the Capacitor Clock Alarm Package

The capacitor-clock-alarm package provides a convenient way to implement clock alarms in your Capacitor app. In this tutorial, we will guide you through the process of installing and using this package step by step.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Node.js and npm installed on your machine.
- A Capacitor project set up and ready to use.

## Step 1: Installation

First, you need to install the capacitor-clock-alarm package. Open your terminal and navigate to your Capacitor project directory. Run the following command:

```bash
npm install capacitor-clock-alarm
```

## Step 2: Configure the Plugin

Next, you need to configure the plugin in your Capacitor project. Open the `capacitor.config.json` file and add the following code:

```json
{
  "plugins": {
    "ClockAlarm": {
      "appId": "your-app-id"
    }
  }
}
```

Make sure to replace `"your-app-id"` with your actual app ID.

## Step 3: Implement the Clock Alarm

Now, let's implement the clock alarm feature in your app. Create a new file `clock-alarm.ts` in the `src` directory of your project and add the following code:

```typescript
import { Plugins } from "@capacitor/core";

const { ClockAlarm } = Plugins;

export class ClockAlarmPlugin {
  static async setAlarm(time: Date, message: string): Promise<void> {
    return ClockAlarm.setAlarm({ time, message });
  }
}
```

This code defines a `ClockAlarmPlugin` class with a static method `setAlarm()` which accepts a `time` and a `message` parameter. It calls the `setAlarm()` method provided by the `ClockAlarm` plugin.

## Step 4: Using the Clock Alarm

Now, let's use the `ClockAlarmPlugin` in your app. Open the file where you want to use the clock alarm feature and import the `ClockAlarmPlugin` class:

```typescript
import { ClockAlarmPlugin } from "./clock-alarm";
```

To set an alarm, simply call the `setAlarm()` method of the `ClockAlarmPlugin` class:

```typescript
const alarmTime = new Date();
alarmTime.setMinutes(alarmTime.getMinutes() + 5); // Set alarm time 5 minutes from now

ClockAlarmPlugin.setAlarm(alarmTime, "Wake up!");
```

This code sets an alarm for the current time plus 5 minutes with the message "Wake up!".

## Conclusion

In this tutorial, you learned how to use the capacitor-clock-alarm package to implement clock alarms in your Capacitor app. You installed the package, configured the plugin, implemented the clock alarm feature, and used it in your app. Now you can enhance your app by adding clock alarms to keep your users on schedule.

Happy coding!