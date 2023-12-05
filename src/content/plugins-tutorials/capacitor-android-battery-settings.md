---
title: "Using @hexdigital/capacitor-android-battery-settings Package"
description: "This tutorial will guide you on how to use the @hexdigital/capacitor-android-battery-settings package in your Capacitor project."
created_at: "2021-09-01"
published: true
slug: "capacitor-android-battery-settings"
---

# Using @hexdigital/capacitor-android-battery-settings Package

In this tutorial, we will guide you on how to use the `@hexdigital/capacitor-android-battery-settings` package in your Capacitor project. This package provides the ability to control battery optimization settings on Android.

## Prerequisites

Before you begin, make sure you have the following prerequisites:
- Capacitor project set up and configured
- Android device or emulator for testing

## Installation

To install and use the `@hexdigital/capacitor-android-battery-settings` package, follow these steps:

1. Install the package using npm or yarn:
   ```bash
   npm install @hexdigital/capacitor-android-battery-settings
   ```

2. Sync the Capacitor project to update the native platform files:
   ```bash
   npx cap sync android
   ```

3. Import the package in your code:
   ```typescript
   import { AndroidBatterySettings } from '@hexdigital/capacitor-android-battery-settings';
   ```

## Usage

Once you have installed and imported the package, you can use the `AndroidBatterySettings` class to interact with the battery optimization settings on Android.

### Check if Battery Optimization is Enabled

To check if battery optimization is enabled for your app, use the `isBatteryOptimizationEnabled` method:

```typescript
const isOptimizationEnabled = await AndroidBatterySettings.isBatteryOptimizationEnabled();
if (isOptimizationEnabled) {
  console.log('Battery optimization is enabled');
} else {
  console.log('Battery optimization is disabled');
}
```

### Navigate to Battery Optimization Settings

To navigate to the battery optimization settings screen in the device's system settings, use the `navigateToBatteryOptimizationSettings` method:

```typescript
await AndroidBatterySettings.navigateToBatteryOptimizationSettings();
```

### Request Ignoring Battery Optimization

To request the device to ignore battery optimization for your app, use the `requestIgnoreBatteryOptimization` method:

```typescript
// Check if battery optimization is enabled
const isOptimizationEnabled = await AndroidBatterySettings.isBatteryOptimizationEnabled();

if (isOptimizationEnabled) {
  // Request ignoring battery optimization
  await AndroidBatterySettings.requestIgnoreBatteryOptimization();
} else {
  console.log('Battery optimization is already disabled');
}
```

## Conclusion

In this tutorial, you learned how to use the `@hexdigital/capacitor-android-battery-settings` package in your Capacitor project. You can now check battery optimization status, navigate to the battery optimization settings screen, and request ignoring battery optimization on an Android device.

With the ability to control these settings, you can ensure that your app can continue to run smoothly in the background without interruptions caused by battery optimization.