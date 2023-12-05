---
title: "Using @nunosav/no-sleep Package"
description: "A tutorial on how to use the @nunosav/no-sleep package to keep a mobile device awake."
created_at: "2021-07-15"
published: true
slug: "no-sleep"
---

# Using @nunosav/no-sleep Package

In this tutorial, we will learn how to use the @nunosav/no-sleep package, which is a Capacitor 3 plugin to keep a mobile device awake. It allows you to prevent the mobile device's screen from going idle, ensuring that it stays awake even during periods of inactivity.

## Installation

To get started, you need to install the @nunosav/no-sleep package and sync your project with Capacitor 3. Open your terminal and run the following commands:

```bash
npm install @nunosav/no-sleep
npx cap sync
```

These commands will install the package and sync your project, making it ready for usage.

## Usage

The @nunosav/no-sleep package provides two main methods: `stayAwake()` and `sleep()`. Let's take a look at each of these methods and how to use them.

### 1. `stayAwake()`

The `stayAwake()` method allows you to keep the mobile device's screen on, preventing it from going into idle mode. Here's how to use it:

```javascript
import { Plugins } from "@capacitor/core";
const { NoSleep } = Plugins;

// Call stayAwake() to keep the device awake
NoSleep.stayAwake()
  .then(() => {
    console.log("Device will stay awake");
  })
  .catch((error) => {
    console.error("Failed to keep device awake:", error);
  });
```

When the `stayAwake()` method is called, the mobile device's screen will remain on until you explicitly call the `sleep()` method.

### 2. `sleep()`

The `sleep()` method allows you to allow the mobile device's screen to go idle. Here's how to use it:

```javascript
import { Plugins } from "@capacitor/core";
const { NoSleep } = Plugins;

// Call sleep() to allow the device to go idle
NoSleep.sleep()
  .then(() => {
    console.log("Device can now go idle");
  })
  .catch((error) => {
    console.error("Failed to allow device to go idle:", error);
  });
```

When the `sleep()` method is called, the mobile device's screen can go idle as normal.

## Summary

In this tutorial, we learned how to use the @nunosav/no-sleep package to keep a mobile device awake. We explored the `stayAwake()` and `sleep()` methods provided by the package and saw how to use them in a Capacitor project. Now you can ensure that the mobile device's screen stays awake when needed and allows it to go idle when required.

Remember to refer to the package's documentation for more details and additional functionality if needed. Enjoy using the @nunosav/no-sleep package in your mobile applications!