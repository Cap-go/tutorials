---
title: "Using capacitor-is-debug package"
description: "A tutorial on how to use the capacitor-is-debug package in your app"
created_at: "2022-01-01"
published: true
slug: capacitor-is-debug
---

# Using capacitor-is-debug package

The capacitor-is-debug package is a useful tool for detecting whether an app is running in debug mode or production mode. It provides a simple API for checking the debug status of your app.

## Installation

To install the capacitor-is-debug package, you can use npm or yarn:

```bash
npm install capacitor-is-debug

# or

yarn add capacitor-is-debug
```

## Usage

Once the package is installed, you can import it into your project and start using it.

```javascript
// Import the plugin
import { CapacitorIsDebug } from 'capacitor-is-debug';

// Check if the app is running in debug mode
const isDebug = CapacitorIsDebug.isDebug();
console.log('Is app running in debug mode?', isDebug);
```

The `isDebug()` function returns a boolean value indicating whether the app is running in debug mode or not.

## Example

Here's an example of how you can use the capacitor-is-debug package in your app:

```javascript
import { CapacitorIsDebug } from 'capacitor-is-debug';

// Check if the app is running in debug mode
const isDebug = CapacitorIsDebug.isDebug();

if (isDebug) {
  console.log('App is running in debug mode');
  // Add debug-specific code here
} else {
  console.log('App is running in production mode');
  // Add production-specific code here
}
```

By using the `isDebug()` function, you can conditionally execute different code based on whether the app is running in debug mode or production mode.

That's it! You have now learned how to use the capacitor-is-debug package in your app. Happy debugging!

Note: Remember to check the official documentation for more details and additional features of the capacitor-is-debug package.