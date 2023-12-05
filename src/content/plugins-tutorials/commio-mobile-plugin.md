---
title: "Using commio-mobile-plugin Package Tutorial"
description: "A step-by-step guide on how to use the commio-mobile-plugin package"
created_at: "2021-10-20"
published: true
slug: "commio-mobile-plugin"
---

# Using commio-mobile-plugin Package Tutorial

This tutorial will guide you on how to use the commio-mobile-plugin package, which is made with Capacitor. The commio-mobile-plugin provides various functionalities for mobile development. Follow the steps below to get started.

## Step 1: Install the Package

To install the commio-mobile-plugin package, open the terminal and run the following command:

```bash
npm install commio-mobile-plugin
npx cap sync
```

## Step 2: Import the Plugin

In your code file, import the commio-mobile-plugin by adding the following line:

```typescript
import { Plugins } from '@capacitor/core';
const { commioMobilePlugin } = Plugins;
```

## Step 3: Use the Plugin Methods

The commio-mobile-plugin provides several methods that you can use. Here is an example of how to use the `echo` method:

```typescript
const result = await commioMobilePlugin.echo({ value: 'Hello' });
console.log(result.value); // Output: Hello
```

The `echo` method takes an object as input with a `value` property. It returns a promise that will resolve to an object with a `value` property. In the example above, we pass `{ value: 'Hello' }` as the argument and `result.value` will contain the echoed value.

## Conclusion

In this tutorial, you have learned how to use the commio-mobile-plugin package in your Capacitor project. You installed the package, imported the plugin, and used one of its methods. Feel free to explore the other methods provided by the commio-mobile-plugin for more advanced functionalities.

If you encounter any issues or have any questions, refer to the plugin's documentation for further assistance.