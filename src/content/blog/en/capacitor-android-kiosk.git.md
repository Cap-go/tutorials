---
title: "Using @capgo/capacitor-android-kiosk Package"
description: "This markdown tutorial will guide you on how to use the @capgo/capacitor-android-kiosk package in your Capacitor project for creating Android Kiosk applications."
created_at: 2022-01-29
published: true
slug: capacitor-android-kiosk.git
locale: en
---

# Using @capgo/capacitor-android-kiosk Package

In this tutorial, you will learn how to integrate and use the `@capgo/capacitor-android-kiosk` package in your Capacitor project to create Android Kiosk applications.

## Step 1: Install Capacitor Android Kiosk Package

To add the `@capgo/capacitor-android-kiosk` package to your Capacitor project, run the following command:

```bash
npm install @capgo/capacitor-android-kiosk
```

## Step 2: Import the Plugin Module

After installing the package, you need to import the plugin module in your project. Add the following import statement to where you initialize your Capacitor plugins:

```typescript
import '@capgo/capacitor-android-kiosk';
```

## Step 3: Initialize the Android Kiosk Plugin

Next, initialize the Android Kiosk plugin in your project. You can do this in your main.ts (Angular) or index.ts (React) file by adding the following code snippet:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorAndroidKiosk } = Plugins;

// Example initialization
CapacitorAndroidKiosk.init();
```

## Step 4: Setting up Android Kiosk Configuration

You can configure the Android Kiosk settings by using the various methods provided by the plugin. For example, to enable the Kiosk mode for your application, use the following code snippet:

```typescript
// Set the app to run in Kiosk mode
CapacitorAndroidKiosk.enableKioskMode();
```

## Step 5: Handling Kiosk Events

The `@capgo/capacitor-android-kiosk` package also provides methods to handle Kiosk mode events. You can listen for these events and perform specific actions based on them. Here's how you can do it:

```typescript
// Listen for changes in Kiosk mode
CapacitorAndroidKiosk.addListener('kioskStateChanged', (state) => {
  if (state.enabled) {
    // Kiosk mode enabled
  } else {
    // Kiosk mode disabled
  }
});
```

## Step 6: Build and Run Your Android Kiosk Application

Once you have configured the Android Kiosk settings and handled the Kiosk events, build your Capacitor project for Android using `npx cap run android` and test your Android Kiosk application.

That's it! You have successfully integrated and used the `@capgo/capacitor-android-kiosk` package in your Capacitor project to create Android Kiosk applications. Feel free to explore more features and capabilities of this package for your specific use cases.
