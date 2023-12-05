---
title: "Using @danyalwe/capacitor-battery Package"
description: "This tutorial will guide you through the process of using the @danyalwe/capacitor-battery package in your Capacitor app."
created_at: "2022-09-24"
published: true
slug: capacitor-battery
---

# Using @danyalwe/capacitor-battery Package

In this tutorial, we will learn how to use the @danyalwe/capacitor-battery package in a Capacitor app. The @danyalwe/capacitor-battery package provides functionalities to monitor the device battery level, status, and related information. Let's get started!

## Step 1: Installation

To begin, make sure you have a Capacitor project set up. If you don't have one, you can create a new project using the following command:

```bash
npx @capacitor/create-app
```

Next, install the @danyalwe/capacitor-battery package by running the following command in your project directory:

```bash
npm install @danyalwe/capacitor-battery
```

## Step 2: Configuration

After installing the package, we need to configure it in our Capacitor project. Open the `capacitor.config.json` file and add the following code inside the `plugins` array:

```json
{
  "name": "@danyalwe/capacitor-battery",
  "syncToNative": {
    "androidPackageName": "package.name"
  }
}
```

Make sure to replace `"package.name"` with your actual Android package name.

## Step 3: Import and Initialize

Now, let's import and initialize the @danyalwe/capacitor-battery package in our project. Open the `src/main.ts` file and add the following code at the top:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorBattery } = Plugins;
```

## Step 4: Access Battery Information

We can now use the CapacitorBattery plugin to access various battery-related information. Here are some examples:

### Get Battery Level

To get the current battery level, use the `getBatteryLevel` method. This method returns the battery level as a percentage.

```typescript
const batteryLevel = await CapacitorBattery.getBatteryLevel();
console.log('Battery Level:', batteryLevel.value + '%');
```

### Get Battery Status

To get the current battery status, use the `getBatteryStatus` method. This method returns a string representing the battery status, such as "charging", "discharging", or "full".

```typescript
const batteryStatus = await CapacitorBattery.getBatteryStatus();
console.log('Battery Status:', batteryStatus.value);
```

### Get Battery Information

To get detailed battery information, use the `getBatteryInfo` method. This method returns an object containing various battery properties, such as the battery level, status, is charging flag, and more.

```typescript
const batteryInfo = await CapacitorBattery.getBatteryInfo();
console.log('Battery Info:', batteryInfo.value);
```

## Step 5: Handling Battery Events

The @danyalwe/capacitor-battery package also provides event listeners to handle battery-related events. Here's an example of how to listen for battery level changes:

```typescript
CapacitorBattery.addListener('batteryLevelDidChange', (batteryLevel) => {
  console.log('Battery Level Changed:', batteryLevel.value + '%');
});
```

You can also listen for other battery events, such as "batteryStatusDidChange" and "batteryInfoDidChange", to handle specific scenarios in your app.

## Conclusion

In this tutorial, we have learned how to use the @danyalwe/capacitor-battery package to monitor the device battery level, status, and related information in a Capacitor app. We covered the installation, configuration, accessing battery information, and handling battery events. Now, you can implement battery-related features in your Capacitor app with ease.

Feel free to explore the @danyalwe/capacitor-battery package documentation for more advanced usage and additional functionalities. Happy coding!
