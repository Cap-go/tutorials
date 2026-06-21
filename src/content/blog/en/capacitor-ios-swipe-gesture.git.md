---
title: How to Use @polyfillhq/capacitor-ios-swipe-gesture Package
description: Learn how to enable back/forward swipe gestures support for iOS using @polyfillhq/capacitor-ios-swipe-gesture package.
created_at: 2022-10-12
published: true
slug: capacitor-ios-swipe-gesture.git
locale: en
---

# Using @polyfillhq/capacitor-ios-swipe-gesture Package

In this tutorial, we will walk you through the steps to enable back/forward swipe gestures support for iOS using the @polyfillhq/capacitor-ios-swipe-gesture package.

## Prerequisites
Before we begin, make sure you have Node.js and npm installed on your machine.

## Installation
To install the package, run the following command in your project directory:

```bash
npm install @polyfillhq/capacitor-ios-swipe-gesture
npx cap sync
```

## Methods
The @polyfillhq/capacitor-ios-swipe-gesture package provides two main methods:

### enable()
To enable the back/forward swipe gestures support for iOS, use the following code snippet:

```javascript
Capacitor.Plugins.IosSwipeGesture.enable()
```

### disable()
To disable the back/forward swipe gestures support for iOS, use the following code snippet:

```javascript
Capacitor.Plugins.IosSwipeGesture.disable()
```

## Thank You!

By following these simple steps, you can easily integrate the @polyfillhq/capacitor-ios-swipe-gesture package into your iOS project and enable swipe gestures support. If you have any issues or questions, refer to the package documentation for further assistance. Happy coding!