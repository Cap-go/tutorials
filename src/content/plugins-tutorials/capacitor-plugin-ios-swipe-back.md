---
title: "Tutorial: Using capacitor-plugin-ios-swipe-back"
description: "Learn how to enable and disable back/forward swipe gestures support for iOS using the capacitor-plugin-ios-swipe-back package."
created_at: "2022-09-28"
published: true
slug: "capacitor-plugin-ios-swipe-back"
---

# Tutorial: Using capacitor-plugin-ios-swipe-back

In this tutorial, we will walk you through the installation and usage of the capacitor-plugin-ios-swipe-back package. This package allows you to enable and disable back/forward swipe gestures support for iOS. Let's get started!

## Step 1: Installation

First, you need to install the capacitor-plugin-ios-swipe-back package. Open your terminal and run the following command:

```bash
npm install capacitor-plugin-ios-swipe-back
npx cap sync
```

## Step 2: Enable Swipe Gestures

To enable the back/forward swipe gestures support for iOS, you can use the `enable()` method provided by the capacitor-plugin-ios-swipe-back package. Add the following code to your app's JavaScript file:

```javascript
Capacitor.Plugins.IosSwipeBack.enable();
```

## Step 3: Disable Swipe Gestures

If you want to disable the back/forward swipe gestures support, you can use the `disable()` method. Here's how you can do it:

```javascript
Capacitor.Plugins.IosSwipeBack.disable();
```

That's it! You have successfully installed and used the capacitor-plugin-ios-swipe-back package to enable or disable back/forward swipe gestures support for iOS.

Remember to sync your project after making any changes to native code by running `npx cap sync`.

Thank you for reading this tutorial! If you have any further questions, feel free to ask.

