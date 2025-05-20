---
locale: en
title: "Using Capacitor Adjust Resize Package Tutorial"
description: "Step-by-step guide for implementing the capacitor-adjust-resize package in your Capacitor project."
created_at: "2022-01-12"
published: true
slug: capacitor-adjust-resize.git
---

## Using Capacitor Adjust Resize Package

In this tutorial, we will walk through how to integrate the `capacitor-adjust-resize` package into your Capacitor project to handle resize adjustments.

### Step 1: Install the Package

First, install the package using npm:
```bash
npm install capacitor-adjust-resize
```

### Step 2: Import the Plugin

Next, import the plugin in your project:
```typescript
import { Plugins } from '@capacitor/core';
const { AdjustResize } = Plugins;
```

### Step 3: Implement Adjusting Resize

Now, you can use the `AdjustResize` plugin to handle resize adjustments. Here is an example of how you can adjust resize in your application:

```typescript
// Example of using AdjustResize
AdjustResize.adjust();
```

### Step 4: Enjoy Adjustable Resizing

By following these steps, you have successfully integrated the `capacitor-adjust-resize` package into your Capacitor project. Enjoy the adjustable resizing feature in your application!
